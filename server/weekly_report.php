<?php
declare(strict_types=1);

/* ----------------------------------------------------------------------
 *  Maxima Pools — weekly leads report
 *
 *  Reads /.private/submissions.log, picks the REAL leads from the last 7
 *  full days (in US Eastern time, since the leads are in Ohio) and emails
 *  an English HTML summary that Igor forwards to Paul (US).
 *
 *  Delivery: authenticated SMTP over cURL (smtps://smtp.hostinger.com:465,
 *  user no-reply@maximapools.com). This is REQUIRED for cron — PHP mail()
 *  run from the CLI (which is how cron runs) goes through /usr/sbin/hsendmail
 *  WITHOUT authentication and is silently dropped by strict receivers like
 *  the recipient's Google Workspace. Authenticated SMTP works identically
 *  from CLI and web and is accepted. (submit.php still uses mail() because it
 *  runs under the web server and only mails the same-domain M365 inbox.)
 *
 *  Scheduling: Hostinger cron, Mondays 09:00 UTC (= 06:00 America/Sao_Paulo,
 *  Igor's time, no DST in Brazil):
 *      0 9 * * 1  /usr/bin/php /home/u247207656/domains/maximapools.com/public_html/.private/weekly_report.php
 *
 *  CLI modes (for testing):
 *      php weekly_report.php                 -> prod: last 7 days, SENDS email
 *      php weekly_report.php dry             -> last 7 days, prints to stdout, NO email
 *      php weekly_report.php dry  FROM TO    -> custom window (YYYY-MM-DD, ET), stdout only
 *      php weekly_report.php send FROM TO    -> custom window, SENDS email (delivery test)
 *
 *  NOTE: the live copy on the server has the real RECIPIENT and SMTP_PASS.
 *  The versioned copy in the repo keeps placeholders, exactly like
 *  submit.php's password. Never overwrite the live file with the repo copy
 *  without swapping the recipient + password back in.
 * ---------------------------------------------------------------------- */

// === Configuration ====================================================
const LOG_FILE  = __DIR__ . '/submissions.log';
const RECIPIENT = 'REPORT_RECIPIENT_PLACEHOLDER';
const FROM_NAME = 'Maxima Pools Website';
const FROM_MAIL = 'no-reply@maximapools.com';
const TZNAME    = 'America/New_York';   // display + window (leads are in Ohio)
// SMTP (authenticated) — the live copy has the real password; the repo copy
// keeps the placeholder, same pattern as submit.php.
const SMTP_URL  = 'smtps://smtp.hostinger.com:465';
const SMTP_USER = 'no-reply@maximapools.com';
const SMTP_PASS = 'SMTP_PWD_PLACEHOLDER';
// ======================================================================

$argvLocal = $argv ?? [];
$mode      = $argvLocal[1] ?? 'prod';                 // prod | dry | send
$customA   = $argvLocal[2] ?? null;                   // YYYY-MM-DD (inclusive)
$customB   = $argvLocal[3] ?? null;                   // YYYY-MM-DD (exclusive)
$willSend  = ($mode === 'prod' || $mode === 'send');

$tz = new DateTimeZone(TZNAME);

// --- Resolve the reporting window (ET) --------------------------------
if (($mode === 'dry' || $mode === 'send') && $customA && $customB) {
    $windowStart = new DateTime($customA . ' 00:00:00', $tz);   // inclusive
    $windowEnd   = new DateTime($customB . ' 00:00:00', $tz);   // exclusive
} else {
    // Last 7 full days: today 00:00 (ET) minus 7 days -> today 00:00.
    $now          = new DateTime('now', $tz);
    $windowEnd    = (clone $now)->setTime(0, 0, 0);             // exclusive (today 00:00)
    $windowStart  = (clone $windowEnd)->modify('-7 days');      // inclusive
}
$startTs = $windowStart->getTimestamp();
$endTs   = $windowEnd->getTimestamp();

// --- Test-entry heuristic ---------------------------------------------
// Conservative: prefers keeping a borderline lead over dropping a real one.
// Filtered entries are still listed (count + one line each) at the bottom
// of the email so Igor can eyeball whether any "test" was actually real.
function is_test(array $d): bool {
    $email  = strtolower(trim((string)($d['email']   ?? '')));
    $name   = strtolower(trim((string)($d['name']    ?? '')));
    $msg    = strtolower(trim((string)($d['message'] ?? '')));
    $domain = substr(strrchr($email, '@') ?: '', 1);

    $badDomains = ['maximaconcrete.com', 'max.com', 'poop.com', 'example.com', 'test.com'];
    if (in_array($domain, $badDomains, true))                  return true;
    if ($email === 'igor.stutzf@gmail.com')                    return true;
    if (strpos($email, 'logtest') !== false)                   return true;
    if (strpos($name, 'test') !== false)                       return true; // test, test2, "paul test"
    if (strpos($name, 'teste') !== false)                      return true;
    $testMsgs = ['test', 'test today', 'used', 'hello', 'lklkj', 'rgerftrre'];
    if (in_array($msg, $testMsgs, true))                       return true;
    if (strpos($msg, 'data layer') !== false)                  return true;
    if (strpos($msg, 'test data') !== false)                   return true;
    return false;
}

// --- Read + bucket the log --------------------------------------------
$reais  = [];
$testes = [];
$lines  = is_readable(LOG_FILE) ? file(LOG_FILE, FILE_IGNORE_NEW_LINES) : [];
foreach ($lines as $line) {
    $line = trim($line);
    if ($line === '') continue;
    $d = json_decode($line, true);
    if (!is_array($d) || empty($d['ts'])) continue;
    try {
        $ts = (new DateTime($d['ts']))->getTimestamp();        // ts is UTC ("...Z")
    } catch (Exception $e) {
        continue;
    }
    if ($ts < $startTs || $ts >= $endTs) continue;
    if (is_test($d)) { $testes[] = $d; } else { $reais[] = $d; }
}

// Sort chronologically.
$byTs = static fn(array $a, array $b): int => strcmp((string)$a['ts'], (string)$b['ts']);
usort($reais, $byTs);
usort($testes, $byTs);

// --- Formatting helpers -----------------------------------------------
function fmt_when(string $ts, DateTimeZone $tz): string {
    try {
        $t = new DateTime($ts);
        $t->setTimezone($tz);
        return $t->format('M j, g:i A');                       // "May 30, 7:23 PM"
    } catch (Exception $e) {
        return $ts;
    }
}
function e(string $s): string { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); }

$periodo = $windowStart->format('M j')
         . ' – '
         . (clone $windowEnd)->modify('-1 day')->format('M j, Y');   // "May 25 – May 31, 2026"
$nReais  = count($reais);
$nTestes = count($testes);

// --- Palette (pool-themed blues) --------------------------------------
$BRAND  = '#0a5c8a';
$BRAND2 = '#0b8ec9';
$ACCENT = '#00b4d8';
$INK    = '#1a2b3c';
$MUTED  = '#6b7c8c';
$PAGEBG = '#eef3f7';
$CHIPBG = '#e6f4fb';

// --- Build HTML body --------------------------------------------------
// Full document wrapper + table-based layout below: this email is written in
// English (Igor forwards it to Paul), but Igor's Gmail auto-translates it to
// Portuguese in preview, and Google's translator reflows loose <div>s — which
// used to re-nest the lead cards inside one another. Tables are rigid and
// survive both translation and Outlook.
$h  = '<!DOCTYPE html><html lang="en"><head>'
    . '<meta charset="utf-8">'
    . '<meta name="viewport" content="width=device-width,initial-scale=1">'
    . '</head>';
$h .= '<body style="margin:0;padding:0;background:' . $PAGEBG . ';">';
$h .= '<div style="background:' . $PAGEBG . ';padding:24px 12px;'
    . 'font-family:Arial,Helvetica,sans-serif;color:' . $INK . ';">';
$h .= '<div style="max-width:660px;margin:0 auto;background:#ffffff;border-radius:14px;'
    . 'overflow:hidden;box-shadow:0 2px 10px rgba(10,92,138,.12);">';

// Header
$h .= '<div style="background:linear-gradient(135deg,' . $BRAND2 . ',' . $BRAND . ');'
    . 'padding:28px 32px;color:#ffffff;">';
$h .= '<div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:.85;">Maxima Pools</div>';
$h .= '<div style="font-size:24px;font-weight:bold;margin-top:6px;">Weekly Leads Report</div>';
$h .= '<div style="font-size:14px;opacity:.92;margin-top:4px;">' . e($periodo)
    . ' &nbsp;·&nbsp; times in ET</div>';
$h .= '</div>';

// Summary band
$h .= '<div style="background:' . $CHIPBG . ';padding:16px 32px;border-bottom:1px solid #d7e8f3;">';
$h .= '<span style="font-size:30px;font-weight:bold;color:' . $BRAND . ';vertical-align:middle;">'
    . $nReais . '</span>';
$h .= '<span style="font-size:15px;color:' . $INK . ';vertical-align:middle;margin-left:8px;">'
    . ($nReais === 1 ? 'new lead' : 'new leads') . ' from the website form</span>';
if ($nTestes > 0) {
    $h .= '<span style="float:right;font-size:12px;color:' . $MUTED . ';margin-top:12px;">'
        . $nTestes . ' test ' . ($nTestes === 1 ? 'entry' : 'entries') . ' filtered out</span>';
}
$h .= '</div>';

// Body
$h .= '<div style="padding:24px 32px;">';

if ($nReais === 0) {
    $h .= '<div style="padding:18px;background:' . $PAGEBG . ';border-radius:10px;'
        . 'color:' . $MUTED . ';text-align:center;">No new leads came through the website form this week.</div>';
} else {
    $chip = static function (string $label, string $val) use ($BRAND, $CHIPBG): string {
        if (trim($val) === '') return '';
        return '<span style="display:inline-block;background:' . $CHIPBG . ';color:' . $BRAND . ';'
             . 'padding:3px 11px;border-radius:20px;font-size:12px;font-weight:bold;margin:2px 4px 2px 0;">'
             . e($val) . '</span>';
    };
    $row = static function (string $k, string $v) use ($MUTED): string {
        if (trim($v) === '') return '';
        return '<tr><td style="padding:3px 14px 3px 0;color:' . $MUTED . ';font-size:13px;vertical-align:top;'
             . 'white-space:nowrap;">' . e($k) . '</td>'
             . '<td style="padding:3px 0;font-size:13px;">' . $v . '</td></tr>';
    };

    foreach ($reais as $d) {
        $loc   = trim(($d['city'] ?? '') . ', ' . ($d['state'] ?? '') . ' ' . ($d['zip'] ?? ''), ', ');
        $email = e($d['email'] ?? '');
        $phone = e($d['phone'] ?? '');

        // Card wrapper as a rigid 2-cell table: a thin colored bar cell (the
        // old border-left) + the content cell. Survives Gmail translation and
        // Outlook, where loose bordered <div>s get reflowed/re-nested.
        $h .= '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" '
            . 'style="width:100%;border-collapse:separate;margin:0 0 14px;'
            . 'border:1px solid #e1e9f0;border-radius:10px;overflow:hidden;"><tr>';
        $h .= '<td width="5" style="width:5px;background:' . $ACCENT . ';font-size:0;line-height:0;">&nbsp;</td>';
        $h .= '<td style="padding:14px 16px;">';

        // Name + time
        $h .= '<table style="width:100%;border-collapse:collapse;"><tr>'
            . '<td style="font-size:17px;font-weight:bold;color:' . $BRAND . ';">' . e($d['name'] ?? '') . '</td>'
            . '<td style="text-align:right;font-size:12px;color:' . $MUTED . ';white-space:nowrap;">'
            . e(fmt_when($d['ts'], $tz)) . '</td></tr></table>';

        // Chips
        $chips = $chip('size', $d['poolSize'] ?? '') . $chip('source', $d['source'] ?? '');
        if ($chips !== '') $h .= '<div style="margin:8px 0 6px;">' . $chips . '</div>';

        // Contact rows
        $h .= '<table style="border-collapse:collapse;margin-top:4px;">';
        $h .= $row('Email',    '<a href="mailto:' . $email . '" style="color:' . $BRAND2 . ';text-decoration:none;">' . $email . '</a>');
        $h .= $row('Phone',    '<a href="tel:' . preg_replace('/[^0-9+]/', '', $phone) . '" style="color:' . $BRAND2 . ';text-decoration:none;">' . $phone . '</a>');
        $h .= $row('Address',  e($d['address'] ?? ''));
        $h .= $row('Location', e($loc));
        $h .= '</table>';

        // Message
        if (trim((string)($d['message'] ?? '')) !== '') {
            $h .= '<div style="margin-top:10px;padding:10px 12px;background:' . $PAGEBG . ';'
                . 'border-radius:8px;font-size:13px;line-height:1.5;white-space:pre-wrap;color:' . $INK . ';">'
                . e($d['message']) . '</div>';
        }
        $h .= '</td></tr></table>';
    }
}

// Filtered tests (collapsible-style note)
if ($nTestes > 0) {
    $h .= '<div style="margin-top:6px;padding-top:14px;border-top:1px dashed #d7e8f3;">';
    $h .= '<div style="font-size:12px;color:' . $MUTED . ';margin-bottom:6px;">'
        . 'Filtered as tests (' . $nTestes . ') — listed in case one is a real lead:</div>';
    $h .= '<ul style="margin:0;padding-left:18px;color:' . $MUTED . ';font-size:12px;line-height:1.6;">';
    foreach ($testes as $d) {
        $h .= '<li>' . e(fmt_when($d['ts'], $tz)) . ' — ' . e($d['name'] ?? '')
            . ' &lt;' . e($d['email'] ?? '') . '&gt; — "' . e($d['message'] ?? '') . '"</li>';
    }
    $h .= '</ul></div>';
}

$h .= '</div>'; // body

// Footer
$h .= '<div style="background:' . $BRAND . ';padding:16px 32px;color:#cfe6f4;font-size:11px;line-height:1.5;">'
    . 'Automated weekly report from the maximapools.com website contact form. '
    . 'Times shown in US Eastern (ET).</div>';

$h .= '</div></div></body></html>';

$subject = sprintf('Maxima Pools — Weekly Leads: %s (%d %s)',
    $periodo, $nReais, $nReais === 1 ? 'lead' : 'leads');

// --- Dry run: print and exit ------------------------------------------
if (!$willSend) {
    fwrite(STDOUT, "=== DRY RUN (no email sent) ===\n");
    fwrite(STDOUT, "Window (ET): " . $windowStart->format('Y-m-d H:i') . " -> " . $windowEnd->format('Y-m-d H:i') . "\n");
    fwrite(STDOUT, "Subject: $subject\n");
    fwrite(STDOUT, "Real leads: $nReais | Tests filtered: $nTestes\n\n");
    foreach ($reais as $d) {
        fwrite(STDOUT, sprintf("  [%s] %s <%s> %s — %s, %s — %s\n      \"%s\"\n",
            fmt_when($d['ts'], $tz), $d['name'] ?? '', $d['email'] ?? '', $d['phone'] ?? '',
            $d['city'] ?? '', $d['state'] ?? '', $d['poolSize'] ?? '', $d['message'] ?? ''));
    }
    if ($nTestes) {
        fwrite(STDOUT, "\n  -- filtered as test --\n");
        foreach ($testes as $d) {
            fwrite(STDOUT, sprintf("  [%s] %s <%s> \"%s\"\n",
                fmt_when($d['ts'], $tz), $d['name'] ?? '', $d['email'] ?? '', $d['message'] ?? ''));
        }
    }
    exit(0);
}

// --- Send via authenticated SMTP (cURL) -------------------------------
function send_smtp(string $to, string $subject, string $htmlBody, ?string &$err): bool {
    // RFC 5322 message. Encode the Subject (UTF-8) so the em dash survives.
    $payload =
        'Date: ' . gmdate('r') . "\r\n" .
        'From: ' . FROM_NAME . ' <' . FROM_MAIL . ">\r\n" .
        'To: ' . $to . "\r\n" .
        'Subject: =?UTF-8?B?' . base64_encode($subject) . "?=\r\n" .
        "MIME-Version: 1.0\r\n" .
        "Content-Type: text/html; charset=utf-8\r\n" .
        "X-Mailer: Maxima Pools Weekly Report\r\n\r\n" .
        $htmlBody . "\r\n";

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL          => SMTP_URL,
        CURLOPT_USE_SSL      => CURLUSESSL_ALL,
        CURLOPT_USERNAME     => SMTP_USER,
        CURLOPT_PASSWORD     => SMTP_PASS,
        CURLOPT_MAIL_FROM    => '<' . FROM_MAIL . '>',
        CURLOPT_MAIL_RCPT    => ['<' . $to . '>'],
        CURLOPT_UPLOAD       => true,
        CURLOPT_INFILESIZE   => strlen($payload),
        CURLOPT_READFUNCTION => function ($ch, $fd, $len) use (&$payload) {
            $chunk   = substr($payload, 0, $len);
            $payload = substr($payload, strlen($chunk));
            return $chunk;
        },
        CURLOPT_TIMEOUT        => 30,
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

$err = null;
$ok  = send_smtp(RECIPIENT, $subject, $h, $err);

if ($ok) {
    fwrite(STDOUT, "Sent: $subject  ($nReais leads, $nTestes tests) -> " . RECIPIENT . "\n");
    exit(0);
}
@error_log('[weekly_report.php] SMTP send failed: ' . $err);
fwrite(STDERR, "FAILED to send weekly report: $err\n");
exit(1);
