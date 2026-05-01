<?php
declare(strict_types=1);

/* ----------------------------------------------------------------------
 *  Maxima Pools — contact form handler (SMTP via cURL)
 *  Authenticates against the Hostinger SMTP server using the no-reply@
 *  mailbox so delivery is reliable on shared hosting where the bare
 *  mail() function is restricted or silently dropped.
 *
 *  Edit the SMTP_PASS constant below with the no-reply@ password
 *  set when the mailbox was created in the Hostinger panel.
 * ---------------------------------------------------------------------- */

// === Configuration ====================================================
$RECIPIENT  = 'info@maximapools.com';
$FROM_NAME  = 'Maxima Pools Website';
$FROM_EMAIL = 'no-reply@maximapools.com';

// Hostinger SMTP credentials. Edit SMTP_PASS on the server.
$SMTP_HOST = 'smtp.hostinger.com';
$SMTP_PORT = 465;
$SMTP_USER = 'no-reply@maximapools.com';
$SMTP_PASS = 'PUT_NO_REPLY_PASSWORD_HERE';
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

// Append one JSON-line per submission to /.private/submissions.log so the
// lead is preserved even when SMTP delivery fails. Directory is web-blocked
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

// Build RFC 5322 message (CRLF line endings, dot-stuffing handled by curl).
$eol = "\r\n";
$payload  = "Date: " . date('r') . $eol;
$payload .= "To: <$RECIPIENT>" . $eol;
$payload .= "From: $FROM_NAME <$FROM_EMAIL>" . $eol;
$payload .= "Reply-To: $name <$email>" . $eol;
$payload .= "Subject: $subject" . $eol;
$payload .= "MIME-Version: 1.0" . $eol;
$payload .= "Content-Type: text/plain; charset=utf-8" . $eol;
$payload .= "Content-Transfer-Encoding: 8bit" . $eol;
$payload .= "X-Mailer: Maxima Pools Website" . $eol;
$payload .= $eol;
// Body must use CRLF too.
$payload .= str_replace("\n", $eol, $body);

$stream = fopen('php://temp', 'r+');
fwrite($stream, $payload);
rewind($stream);

$ch = curl_init();
curl_setopt_array($ch, [
    CURLOPT_URL            => "smtps://$SMTP_HOST:$SMTP_PORT",
    CURLOPT_USERNAME       => $SMTP_USER,
    CURLOPT_PASSWORD       => $SMTP_PASS,
    CURLOPT_MAIL_FROM      => "<$FROM_EMAIL>",
    CURLOPT_MAIL_RCPT      => ["<$RECIPIENT>"],
    CURLOPT_UPLOAD         => true,
    CURLOPT_INFILE         => $stream,
    CURLOPT_INFILESIZE     => strlen($payload),
    CURLOPT_USE_SSL        => CURLUSESSL_ALL,
    CURLOPT_SSL_VERIFYPEER => true,
    CURLOPT_SSL_VERIFYHOST => 2,
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_TIMEOUT        => 30,
    CURLOPT_CONNECTTIMEOUT => 10,
]);

$result    = curl_exec($ch);
$curl_err  = curl_error($ch);
$curl_no   = curl_errno($ch);
curl_close($ch);
fclose($stream);

$ok = ($result !== false && $curl_no === 0);

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
    'email_error'  => $ok ? null : "errno=$curl_no $curl_err",
]);

if ($ok) {
    echo json_encode(['ok' => true]);
    exit;
}

// Log the failure so we can see what happened on the server.
@error_log("[submit.php] SMTP send failed (errno=$curl_no): $curl_err");

http_response_code(500);
echo json_encode([
    'ok'    => false,
    'error' => 'Mail send failed. Please try again or call us directly.',
]);
