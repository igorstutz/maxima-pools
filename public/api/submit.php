<?php
declare(strict_types=1);

/* ----------------------------------------------------------------------
 *  Maxima Pools — contact form handler
 *  Receives a POST from /contact and emails the lead to RECIPIENT.
 *
 *  Delivery: the domain's email lives on Microsoft 365 (MX = *.ppe-hosted.com,
 *  SPF authorizes only Microsoft/Proofpoint). Sending through Hostinger's
 *  mail() got blocked by the inbound anti-spoofing filter (SPF/DKIM fail).
 *  So we send via AUTHENTICATED Microsoft 365 SMTP (smtp.office365.com:587,
 *  STARTTLS) using a real mailbox on the domain — that path passes SPF, is
 *  DKIM-signed by Microsoft, and aligns DMARC, so it lands in the inbox.
 *
 *  Every submission is also appended to /.private/submissions.log so the
 *  lead is preserved even if the email layer breaks.
 *
 *  SETUP REQUIRED (one time):
 *    - SMTP_USER must be a real M365 mailbox on the domain.
 *    - "Authenticated SMTP" (SMTP AUTH) must be ENABLED for that mailbox in
 *      the Microsoft 365 admin center (it is OFF by default on new tenants).
 *    - Put the real mailbox password in SMTP_PASS on the SERVER only. The
 *      repo copy keeps the placeholder; /api/submit.php is in the deploy
 *      rsync EXCLUDE list, so deploys never overwrite the live file.
 * ---------------------------------------------------------------------- */

// === Configuration ====================================================
$RECIPIENT  = 'info@maximapools.com';            // where leads are delivered
$FROM_NAME  = 'Maxima Pools Website';

// Microsoft 365 authenticated SMTP. FROM_EMAIL must equal SMTP_USER (or have
// "Send As" rights) or M365 rejects with 5.7.60 SendAsDenied.
$SMTP_HOST  = 'smtp.office365.com';
$SMTP_PORT  = 587;
$SMTP_USER  = 'no-reply@maximapools.com';        // real M365 mailbox
$SMTP_PASS  = 'PUT_M365_PASSWORD_HERE';          // <-- set on server only
$FROM_EMAIL = $SMTP_USER;
// ======================================================================

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

// CORS — allow only the production domain.
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (
    $origin === '' ||
    preg_match('#^https?://(www\.)?maximapools\.com$#i', $origin) ||
    preg_match('#^http://localhost(:\d+)?$#i', $origin)
) {
    if ($origin !== '') {
        header("Access-Control-Allow-Origin: $origin");
        header('Vary: Origin');
    }
}
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Accept');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
    exit;
}

// CR/LF defense for fields used in headers.
function clean_line(string $v): string {
    $v = trim($v);
    return str_replace(["\r", "\n", "%0a", "%0d"], '', $v);
}
function field(string $k): string {
    return clean_line((string)($_POST[$k] ?? ''));
}

// RFC 2047 encode a header value when it contains non-ASCII (accents etc).
function enc_header(string $s): string {
    return preg_match('/[^\x20-\x7E]/', $s)
        ? '=?UTF-8?B?' . base64_encode($s) . '?='
        : $s;
}

// Send one plain-text message via authenticated SMTP (STARTTLS) using cURL.
// Returns true on success; on failure sets $err and returns false.
function send_via_smtp(
    string $host, int $port, string $user, string $pass,
    string $fromName, string $fromEmail,
    string $to, string $replyName, string $replyEmail,
    string $subject, string $body, ?string &$err
): bool {
    if (!function_exists('curl_init')) { $err = 'cURL not available'; return false; }

    $eol = "\r\n";
    $msg  = 'Date: ' . date('r') . $eol;
    $msg .= 'To: ' . $to . $eol;
    $msg .= 'From: ' . enc_header($fromName) . ' <' . $fromEmail . '>' . $eol;
    $msg .= 'Reply-To: ' . enc_header($replyName) . ' <' . $replyEmail . '>' . $eol;
    $msg .= 'Subject: ' . enc_header($subject) . $eol;
    $msg .= 'Message-ID: <' . bin2hex(random_bytes(16)) . '@maximapools.com>' . $eol;
    $msg .= 'MIME-Version: 1.0' . $eol;
    $msg .= 'Content-Type: text/plain; charset=utf-8' . $eol;
    $msg .= 'Content-Transfer-Encoding: 8bit' . $eol;
    $msg .= 'X-Mailer: Maxima Pools Website' . $eol;
    $msg .= $eol . $body . $eol;

    $fp = fopen('php://temp', 'r+');
    fwrite($fp, $msg);
    rewind($fp);

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL            => 'smtp://' . $host . ':' . $port,
        CURLOPT_USE_SSL        => CURLUSESSL_ALL,           // require STARTTLS
        CURLOPT_USERNAME       => $user,
        CURLOPT_PASSWORD       => $pass,
        CURLOPT_MAIL_FROM      => '<' . $fromEmail . '>',
        CURLOPT_MAIL_RCPT      => ['<' . $to . '>'],
        CURLOPT_UPLOAD         => true,
        CURLOPT_READDATA       => $fp,
        CURLOPT_CONNECTTIMEOUT => 15,
        CURLOPT_TIMEOUT        => 30,
    ]);
    $sent = curl_exec($ch);
    if ($sent === false) {
        $err = 'cURL errno ' . curl_errno($ch) . ': ' . curl_error($ch);
    }
    curl_close($ch);
    fclose($fp);
    return $sent !== false;
}

// Append one JSON-line per submission to /.private/submissions.log so the
// lead is preserved even when delivery fails. Directory is web-blocked
// by its own .htaccess (Deny from all).
function log_submission(array $entry): void {
    $dir = __DIR__ . '/../.private';
    if (!is_dir($dir)) {
        @mkdir($dir, 0700, true);
    }
    $line = json_encode($entry, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n";
    @file_put_contents($dir . '/submissions.log', $line, FILE_APPEND | LOCK_EX);
}

// Honeypot — silently accept and drop.
if (trim((string)($_POST['_gotcha'] ?? '')) !== '') {
    echo json_encode(['ok' => true]);
    exit;
}

$name     = field('name');
$email    = field('email');
$phone    = field('phone');
$address  = field('address');
$zip      = field('zip');
$city     = field('city');
$state    = field('state');
$poolSize = field('poolSize');
$source   = field('source');
$message  = substr(trim((string)($_POST['message'] ?? '')), 0, 5000);

$errors = [];
if (strlen($name) < 2)                                  $errors['name']     = 'Please enter your full name';
if (!filter_var($email, FILTER_VALIDATE_EMAIL))         $errors['email']    = 'Please enter a valid email address';
if (strlen(preg_replace('/\D/', '', $phone)) < 10)      $errors['phone']    = 'Please enter a valid phone number';
if ($address === '')                                    $errors['address']  = 'Please enter the property address';
if (!preg_match('/^\d{5}$/', $zip))                     $errors['zip']      = 'Please enter a 5-digit ZIP';
if ($city === '')                                       $errors['city']     = 'Please enter the city';
if ($state === '')                                      $errors['state']    = 'Please enter the state';
if ($poolSize === '')                                   $errors['poolSize'] = 'Please select a pool size';
if ($source === '')                                     $errors['source']   = 'Please select an option';
if ($message === '')                                    $errors['message']  = 'Please enter a message';

if ($errors) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'errors' => $errors]);
    exit;
}

$subject = "New estimate request from $name";

$body  = "New pool estimate request from the Maxima Pools website.\n";
$body .= str_repeat('-', 60) . "\n\n";
$body .= "Name:        $name\n";
$body .= "Phone:       $phone\n";
$body .= "Email:       $email\n";
$body .= "Address:     $address\n";
$body .= "City/State:  $city, $state $zip\n";
$body .= "Pool size:   $poolSize\n";
$body .= "How heard:   $source\n\n";
$body .= str_repeat('-', 60) . "\n";
$body .= "Message:\n\n";
$body .= $message . "\n\n";
$body .= str_repeat('-', 60) . "\n";
$body .= "Submitted:   " . gmdate('Y-m-d H:i:s') . " UTC\n";
$body .= "From IP:     " . ($_SERVER['REMOTE_ADDR'] ?? 'unknown') . "\n";

$err = null;
$ok  = send_via_smtp(
    $SMTP_HOST, $SMTP_PORT, $SMTP_USER, $SMTP_PASS,
    $FROM_NAME, $FROM_EMAIL,
    $RECIPIENT, $name, $email,
    $subject, $body, $err
);

log_submission([
    'ts'           => gmdate('Y-m-d\TH:i:s\Z'),
    'ip'           => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
    'ua'           => $_SERVER['HTTP_USER_AGENT'] ?? '',
    'name'         => $name,
    'email'        => $email,
    'phone'        => $phone,
    'address'      => $address,
    'city'         => $city,
    'state'        => $state,
    'zip'          => $zip,
    'poolSize'     => $poolSize,
    'source'       => $source,
    'message'      => $message,
    'email_status' => $ok ? 'sent' : 'failed',
    'email_error'  => $ok ? null : $err,
]);

if ($ok) {
    echo json_encode(['ok' => true]);
    exit;
}

@error_log('[submit.php] SMTP send failed: ' . (string)$err);

http_response_code(500);
echo json_encode([
    'ok'    => false,
    'error' => 'Mail send failed. Please try again or call us directly.',
]);
