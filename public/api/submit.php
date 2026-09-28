<?php
declare(strict_types=1);

/* ----------------------------------------------------------------------
 *  Maxima Pools — contact form handler
 *  Receives a POST from /contact and emails the lead to RECIPIENT.
 *
 *  Delivery: the domain's email is on Microsoft 365 (MX = *.ppe-hosted.com).
 *  The site sends through Hostinger (mail() → MailChannels relay). For the
 *  inbound filter to accept it, the domain's SPF must authorize Hostinger
 *  (add `include:_spf.mail.hostinger.com` to the existing SPF record) AND
 *  the envelope sender must be on the domain — hence the `-f` below, so SPF
 *  checks/aligns against no-reply@maximapools.com. When mail() fails, the
 *  same message goes out over authenticated SMTP (send_lead_via_smtp).
 *
 *  Every submission is also appended to /.private/submissions.log so the
 *  lead is preserved even if the email layer breaks.
 *
 *  A successful lead is also reported server-side to ChatGPT Ads (see
 *  oai-capi.php) and to Google Ads (see gads-capi.php) — both are no-ops
 *  until their credentials are installed on the server.
 * ---------------------------------------------------------------------- */

// Loaded with @ so a missing/broken file can never take the form down.
@require_once __DIR__ . '/oai-capi.php';
@require_once __DIR__ . '/gads-capi.php';
@require_once __DIR__ . '/lead-autoreply.php';

// === Configuration ====================================================
$RECIPIENT  = 'info@maximapools.com';
$FROM_NAME  = 'Maxima Pools Website';
$FROM_EMAIL = 'no-reply@maximapools.com';
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
// lead is preserved even when mail() delivery fails. Directory is web-blocked
// by its own .htaccess (Deny from all).
function log_submission(array $entry): void {
    $dir = __DIR__ . '/../.private';
    if (!is_dir($dir)) {
        @mkdir($dir, 0700, true);
    }
    // INVALID_UTF8_SUBSTITUTE matters: without it a single stray byte (a
    // name pasted from Word, a bot posting Latin-1) makes json_encode return
    // false, and this would append an empty line — losing the very lead the
    // log exists to preserve.
    $line = json_encode(
        $entry,
        JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE
    );
    if ($line === false) {
        $line = json_encode(['ts' => gmdate('Y-m-d\TH:i:s\Z'), 'error' => 'unencodable submission']);
    }
    @file_put_contents($dir . '/submissions.log', $line . "\n", FILE_APPEND | LOCK_EX);
}

// Send the lead to the office over authenticated SMTP, with the credentials
// the autoreply uses (/.private/smtp-config.php). Only called when mail()
// fails. Both parts go out base64 so no SMTP hop refolds a long line.
function send_lead_via_smtp(
    string $to,
    string $fromName,
    string $fromEmail,
    string $replyName,
    string $replyEmail,
    string $subject,
    string $body,
    ?string &$err
): bool {
    if (!function_exists('lead_autoreply_config') || !function_exists('curl_init')) {
        $err = 'lead-autoreply.php or curl unavailable';
        return false;
    }
    $cfg = lead_autoreply_config();
    if ($cfg === null) {
        $err = 'smtp-config.php missing';
        return false;
    }
    $enc = static function (string $v): string {
        return preg_match('/^[\x20-\x7E]*$/', $v) ? $v : '=?UTF-8?B?' . base64_encode($v) . '?=';
    };
    $payload =
        'Date: ' . gmdate('r') . "\r\n"
        . 'From: ' . $enc($fromName) . ' <' . $fromEmail . ">\r\n"
        . 'To: <' . $to . ">\r\n"
        . (filter_var($replyEmail, FILTER_VALIDATE_EMAIL)
            ? 'Reply-To: ' . $enc(str_replace(['"', '<', '>'], '', $replyName)) . ' <' . $replyEmail . ">\r\n"
            : '')
        . 'Subject: =?UTF-8?B?' . base64_encode($subject) . "?=\r\n"
        . 'Message-ID: <' . bin2hex(random_bytes(12)) . '@maximapools.com>' . "\r\n"
        . "MIME-Version: 1.0\r\n"
        . "X-Mailer: Maxima Pools Website\r\n"
        . "Content-Type: text/plain; charset=utf-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($body), 76, "\r\n");

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL          => 'smtps://smtp.hostinger.com:465',
        CURLOPT_USE_SSL      => CURLUSESSL_ALL,
        CURLOPT_USERNAME     => $cfg['user'],
        CURLOPT_PASSWORD     => $cfg['pass'],
        CURLOPT_MAIL_FROM    => '<' . $fromEmail . '>',
        CURLOPT_MAIL_RCPT    => ['<' . $to . '>'],
        CURLOPT_UPLOAD       => true,
        CURLOPT_INFILESIZE   => strlen($payload),
        CURLOPT_READFUNCTION => function ($ch, $fd, $len) use (&$payload) {
            $chunk   = substr($payload, 0, $len);
            $payload = substr($payload, strlen($chunk));
            return $chunk;
        },
        CURLOPT_TIMEOUT        => 20,
        CURLOPT_RETURNTRANSFER => true,
    ]);
    $res = curl_exec($ch);
    if ($res === false) {
        $err = 'curl errno=' . curl_errno($ch) . ' ' . curl_error($ch);
        curl_close($ch);
        return false;
    }
    curl_close($ch);
    return true;
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

// Ad-platform tracking ids sent by the form (opaque tokens — keep only
// characters an id can legitimately contain). Google's click ids run longer
// than OpenAI's, hence the caller-supplied cap: truncating one produces an
// id that silently matches nothing.
function tracking_token(string $k, int $maxLen = 128): string {
    return substr(preg_replace('/[^A-Za-z0-9._-]/', '', field($k)), 0, $maxLen);
}
$oaiEventId = tracking_token('oaiEventId');
$oaiOppref  = tracking_token('oaiOppref');
if ($oaiOppref === '') {
    $oaiOppref = substr(preg_replace('/[^A-Za-z0-9._-]/', '', (string)($_COOKIE['__oppref'] ?? '')), 0, 128);
}

// Google Ads click id. The form sends it (src/lib/click-ids.ts); the
// `_mx_gcl` cookie is read here too so a lead still carries attribution if
// the form's JS copy ever fails to attach it.
require_once __DIR__ . '/attribution-parse.php';

$gclids = [];
foreach (['gclid', 'wbraid', 'gbraid'] as $kind) {
    $value = tracking_token($kind, 512);
    if ($value !== '') {
        $gclids[$kind] = $value;
    }
}
if (!$gclids) {
    $cookie = (string)($_COOKIE['_mx_gcl'] ?? '');
    $sep    = strpos($cookie, '~');
    if ($sep > 0) {
        $kind  = substr($cookie, 0, $sep);
        $value = substr(preg_replace('/[^A-Za-z0-9._-]/', '', substr($cookie, $sep + 1)), 0, 512);
        if ($value !== '' && in_array($kind, ['gclid', 'wbraid', 'gbraid'], true)) {
            $gclids[$kind] = $value;
        }
    }
}

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

$headers   = [];
$headers[] = "From: $FROM_NAME <$FROM_EMAIL>";
$headers[] = "Reply-To: $name <$email>";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=utf-8";
$headers[] = "X-Mailer: Maxima Pools Website";

// 5th arg sets the envelope sender (Return-Path) so SPF is checked/aligned
// against maximapools.com — required for the SPF authorization to work.
$ok = @mail($RECIPIENT, $subject, $body, implode("\r\n", $headers), '-f ' . $FROM_EMAIL);
$via = 'mail';
$mailErr = $ok ? null : 'mail() returned false';

// mail() hands off to hsendmail, which relays through a local daemon on
// 127.0.0.1:125. On Sep 27 that daemon was down ("connection refused") and
// every lead came back as a form error. Authenticated SMTP — the path the
// autoreply already uses — doesn't touch that daemon, so it is the fallback.
if (!$ok) {
    $smtpErr = null;
    $ok = send_lead_via_smtp($RECIPIENT, $FROM_NAME, $FROM_EMAIL, $name, $email, $subject, $body, $smtpErr);
    if ($ok) {
        $via = 'smtp';
        $mailErr = null;
    } else {
        $mailErr .= '; smtp fallback: ' . (string)$smtpErr;
    }
}

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
    'click_id'     => $gclids ? array_key_first($gclids) . ':' . reset($gclids) : null,
    // De onde este lead veio, e por onde passou antes de escrever.
    'attribution'  => attr_parse((string)($_POST['attribution'] ?? '')),
    'email_status' => $ok ? 'sent' : 'failed',
    'email_via'    => $ok ? $via : null,
    'email_error'  => $mailErr,
]);

if ($ok) {
    echo json_encode(['ok' => true]);

    // Report the conversion to ChatGPT Ads *after* handing back the response,
    // so the outbound POST never adds latency to the form. Same event id as
    // the browser pixel → OpenAI dedupes the two into one conversion.
    if (function_exists('fastcgi_finish_request')) {
        @fastcgi_finish_request();
    }
    // Confirm to the customer that a person now has their request, and name
    // every number the callback can come from — an unknown 614 number on the
    // screen goes unanswered, a number they were told to expect gets picked
    // up. Runs after the response for the same reason as the calls below.
    if (function_exists('lead_autoreply')) {
        lead_autoreply([
            'name'     => $name,
            'email'    => $email,
            'phone'    => $phone,
            'address'  => $address,
            'city'     => $city,
            'state'    => $state,
            'zip'      => $zip,
            'poolSize' => $poolSize,
        ]);
    }

    if (function_exists('oai_capi_lead')) {
        $referer = (string)($_SERVER['HTTP_REFERER'] ?? '');
        oai_capi_lead([
            'event_id'   => $oaiEventId,
            'oppref'     => $oaiOppref,
            'source_url' => preg_match('#^https://(www\.)?maximapools\.com/#i', $referer)
                ? $referer
                : 'https://maximapools.com/contact/',
            'email'      => $email,
            'city'       => $city,
            'zip'        => $zip,
        ]);
    }

    // Google Ads Enhanced Conversions for Leads. Reuses the same id as the
    // order id so a lead can be traced across both ad platforms' logs — and
    // so a re-upload of the same lead is deduplicated rather than doubled.
    if (function_exists('gads_upload_lead')) {
        gads_upload_lead($gclids + [
            'name'     => $name,
            'email'    => $email,
            'phone'    => $phone,
            'city'     => $city,
            'state'    => $state,
            'zip'      => $zip,
            'order_id' => $oaiEventId !== '' ? $oaiEventId : 'srv_' . bin2hex(random_bytes(8)),
        ]);
    }
    exit;
}

@error_log('[submit.php] mail() returned false');

http_response_code(500);
echo json_encode([
    'ok'    => false,
    'error' => 'Mail send failed. Please try again or call us directly.',
]);
