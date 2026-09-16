<?php
declare(strict_types=1);

/* ----------------------------------------------------------------------
 *  Maxima Pools — confirmation email sent to the LEAD after the form.
 *
 *  Purpose (Paul, Sep 2026): people don't answer our callbacks because
 *  they don't recognise the number. This email lands seconds after the
 *  form and names every number the call or text can come from, so an
 *  unknown 614 number on the screen is one they were told to expect.
 *
 *  Delivery goes through authenticated SMTP, NOT mail(). submit.php can
 *  use mail() because it only writes to info@maximapools.com — same
 *  domain, same M365 tenant. This message goes to whatever mailbox the
 *  customer typed (Gmail, Yahoo, an Outlook.com account), and an
 *  unauthenticated hsendmail hop is exactly what those receivers drop
 *  silently. Same lesson the weekly report learned; see
 *  server/weekly_report.php.
 *
 *  The SMTP password lives OUTSIDE the repo (which is public), in
 *  /.private/smtp-config.php — created by hand on the server:
 *
 *      <?php return ['user' => 'no-reply@maximapools.com', 'pass' => '...'];
 *
 *  Without that file every call here is a silent no-op, so the contact
 *  form keeps working exactly as before — the lead still reaches the
 *  office either way.
 *
 *  Test send (CLI, from the api/ directory):
 *      php lead-autoreply.php test someone@example.com "First Last"
 * ---------------------------------------------------------------------- */

if (!defined('LEAD_AUTOREPLY_FROM_MAIL')) {
    define('LEAD_AUTOREPLY_PRIVATE_DIR', __DIR__ . '/../.private');
    define('LEAD_AUTOREPLY_SMTP_URL',  'smtps://smtp.hostinger.com:465');
    define('LEAD_AUTOREPLY_FROM_NAME', 'Maxima Pools');
    define('LEAD_AUTOREPLY_FROM_MAIL', 'no-reply@maximapools.com');
    // A reply to an automated message is still a reply from a customer, so
    // it has to land in the office inbox and not in no-reply's void.
    define('LEAD_AUTOREPLY_REPLY_TO',  'info@maximapools.com');
    define('LEAD_AUTOREPLY_MAIN_TEL',  '(614) 384-5081');
    // Don't re-send to the same address inside this window: someone who
    // submits the form twice gets one confirmation, not two.
    define('LEAD_AUTOREPLY_DEDUPE_SECONDS', 6 * 3600);
}

if (!function_exists('lead_autoreply')) {

/**
 * Every number a Maxima Pools estimate can be called or texted from.
 * Keep in sync with `successNotice.callerNumbers` in
 * src/content/pages/contact.json — that array is the on-screen copy of
 * this same list, and the two are only useful when they agree.
 */
function lead_autoreply_numbers(): array {
    return [
        ['display' => '(614) 384-5081', 'tel' => '+16143845081'],
        ['display' => '(614) 671-1956', 'tel' => '+16146711956'],
        ['display' => '(614) 769-1117', 'tel' => '+16147691117'],
    ];
}

/** SMTP credentials, or null when they aren't installed yet. */
function lead_autoreply_config(): ?array {
    $path = LEAD_AUTOREPLY_PRIVATE_DIR . '/smtp-config.php';
    if (!is_file($path)) {
        return null;
    }
    $cfg = require $path;
    if (!is_array($cfg) || empty($cfg['pass'])) {
        return null;
    }
    $cfg['user'] = (string)($cfg['user'] ?? LEAD_AUTOREPLY_FROM_MAIL);
    return $cfg;
}

/**
 * One JSON line per attempt, next to the other logs. The recipient is the
 * one identifier kept — it's what the dedupe check reads back.
 */
function lead_autoreply_log(array $entry): void {
    if (!is_dir(LEAD_AUTOREPLY_PRIVATE_DIR)) {
        @mkdir(LEAD_AUTOREPLY_PRIVATE_DIR, 0700, true);
    }
    $entry = ['ts' => gmdate('Y-m-d\TH:i:s\Z')] + $entry;
    @file_put_contents(
        LEAD_AUTOREPLY_PRIVATE_DIR . '/lead-autoreply.log',
        json_encode($entry, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE) . "\n",
        FILE_APPEND | LOCK_EX
    );
}

/** True when this address already got a confirmation very recently. */
function lead_autoreply_sent_recently(string $email): bool {
    $path = LEAD_AUTOREPLY_PRIVATE_DIR . '/lead-autoreply.log';
    if (!is_file($path)) {
        return false;
    }
    $lines = @file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    if (!$lines) {
        return false;
    }
    $needle = strtolower($email);
    $cutoff = time() - LEAD_AUTOREPLY_DEDUPE_SECONDS;
    foreach (array_slice($lines, -200) as $line) {
        $row = json_decode($line, true);
        if (!is_array($row) || ($row['ok'] ?? false) !== true) {
            continue;
        }
        if (strtolower((string)($row['to'] ?? '')) !== $needle) {
            continue;
        }
        if (strtotime((string)($row['ts'] ?? '')) >= $cutoff) {
            return true;
        }
    }
    return false;
}

/** RFC 2047 for a display name that may carry an accent or a comma. */
function lead_autoreply_encode_name(string $name): string {
    $name = str_replace(["\r", "\n"], '', trim($name));
    if ($name === '') {
        return '';
    }
    $plain = preg_match('/^[\x20-\x7E]+$/', $name) === 1
        && strpbrk($name, '"\\,:;<>@') === false;
    return $plain ? $name : '=?UTF-8?B?' . base64_encode($name) . '?=';
}

/** What the lead typed, as label => value, skipping anything empty. */
function lead_autoreply_details(array $lead): array {
    $place = trim(
        trim((string)($lead['city'] ?? '')) . ', '
        . trim((string)($lead['state'] ?? '')) . ' '
        . trim((string)($lead['zip'] ?? '')),
        ' ,'
    );
    $address = trim(trim((string)($lead['address'] ?? '')) . "\n" . $place);

    return array_filter(
        [
            'Address'   => $address,
            'Pool size' => trim((string)($lead['poolSize'] ?? '')),
            'Phone'     => trim((string)($lead['phone'] ?? '')),
        ],
        static function ($v) { return $v !== ''; }
    );
}

/**
 * The plain-text half. Some people read mail this way, and every spam
 * filter reads it always — an HTML-only message scores worse.
 */
function lead_autoreply_text(array $lead): string {
    $first = trim((string)($lead['first'] ?? ''));
    $out  = 'Hi' . ($first !== '' ? ' ' . $first : '') . ",\n\n";
    $out .= "Thanks for requesting a free estimate from Maxima Pools. Your request is\n";
    $out .= "already with a member of our team, and someone will contact you within\n";
    $out .= "24 hours.\n\n";
    $out .= "OUR CALL OR TEXT WILL COME FROM ONE OF THESE NUMBERS:\n\n";
    foreach (lead_autoreply_numbers() as $n) {
        $out .= '    ' . $n['display'] . "\n";
    }
    $out .= "\nSave them to your contacts so you know it's us. Answering the first call\n";
    $out .= "is the fastest way to get your estimate moving.\n\n";

    $details = lead_autoreply_details($lead);
    if ($details) {
        $out .= "WHAT YOU SENT US:\n\n";
        foreach ($details as $label => $value) {
            $out .= sprintf("    %-11s %s\n", $label . ':', str_replace("\n", ', ', $value));
        }
        $out .= "\n";
    }

    $out .= 'Questions before we call? Reply to this email or call us at '
        . LEAD_AUTOREPLY_MAIN_TEL . ".\n\n";
    $out .= "Maxima Pools\n";
    $out .= "4059 State Route 37 East, Suite A - Delaware, OH 43015\n";
    $out .= "https://maximapools.com\n";

    return $out;
}

/**
 * The HTML half. Table layout and inline styles, because Outlook still
 * renders mail with Word's engine and ignores most of everything else.
 */
function lead_autoreply_html(array $lead): string {
    $e = static function (string $v): string {
        return htmlspecialchars($v, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    };

    $first    = trim((string)($lead['first'] ?? ''));
    $greeting = $first !== '' ? 'Hi ' . $e($first) . ',' : 'Hi there,';

    $numbers = '';
    foreach (lead_autoreply_numbers() as $n) {
        $numbers .= '<tr><td style="padding:7px 0;text-align:center;">'
            . '<a href="tel:' . $e($n['tel']) . '" '
            . 'style="color:#0c4a6e;font-size:24px;font-weight:700;letter-spacing:0.5px;'
            . 'text-decoration:none;font-family:Arial,Helvetica,sans-serif;">'
            . $e($n['display']) . '</a></td></tr>';
    }

    $rows = '';
    foreach (lead_autoreply_details($lead) as $label => $value) {
        $rows .= '<tr>'
            . '<td style="padding:6px 16px 6px 0;color:#64748b;font-size:14px;white-space:nowrap;vertical-align:top;">'
            . $e($label) . '</td>'
            . '<td style="padding:6px 0;color:#0f172a;font-size:14px;vertical-align:top;">'
            . nl2br($e($value)) . '</td>'
            . '</tr>';
    }
    $detailsBlock = $rows === '' ? '' : (
        '<tr><td style="padding:0 32px 8px;">'
        . '<p style="margin:0 0 10px;color:#0f172a;font-size:13px;font-weight:700;'
        . 'text-transform:uppercase;letter-spacing:0.8px;">What you sent us</p>'
        . '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" '
        . 'style="font-family:Arial,Helvetica,sans-serif;">' . $rows . '</table>'
        . '</td></tr>'
    );

    return '<!doctype html><html lang="en"><head><meta charset="utf-8">'
        . '<meta name="viewport" content="width=device-width,initial-scale=1">'
        . '<title>We got your estimate request</title></head>'
        . '<body style="margin:0;padding:0;background:#eef4f8;">'
        // Preheader — the grey line the inbox shows next to the subject.
        . '<div style="display:none;max-height:0;overflow:hidden;opacity:0;">'
        . 'Your request is with our team. Our call or text will come from (614) 384-5081, '
        . '(614) 671-1956 or (614) 769-1117.</div>'
        . '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" '
        . 'style="background:#eef4f8;padding:24px 12px;"><tr><td align="center">'
        . '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" '
        . 'style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;'
        . 'font-family:Arial,Helvetica,sans-serif;">'

        // Header — plain text, no logo: image blocking is on by default in
        // most inboxes, and a blocked logo is a broken first impression.
        . '<tr><td style="background:#0c4a6e;padding:28px 32px;text-align:center;">'
        . '<p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:3px;">MAXIMA POOLS</p>'
        . '<p style="margin:7px 0 0;color:#7dd3fc;font-size:11px;letter-spacing:2px;text-transform:uppercase;">'
        . 'Fiberglass Pools &middot; Columbus, OH</p>'
        . '</td></tr>'

        // Opening
        . '<tr><td style="padding:32px 32px 8px;">'
        . '<h1 style="margin:0 0 16px;color:#0f172a;font-size:24px;line-height:1.3;">'
        . 'We got your estimate request</h1>'
        . '<p style="margin:0 0 14px;color:#334155;font-size:16px;line-height:1.6;">' . $greeting . '</p>'
        . '<p style="margin:0;color:#334155;font-size:16px;line-height:1.6;">'
        . 'Thanks for reaching out to Maxima Pools. Your request is '
        . '<strong>already with a member of our team</strong>, and someone will contact you '
        . 'within 24 hours.</p>'
        . '</td></tr>'

        // The numbers — the whole reason this email exists.
        . '<tr><td style="padding:24px 32px;">'
        . '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" '
        . 'style="background:#ecfeff;border:2px solid #06b6d4;border-radius:14px;">'
        . '<tr><td style="padding:22px 20px 4px;text-align:center;">'
        . '<p style="margin:0;color:#0e7490;font-size:13px;font-weight:700;text-transform:uppercase;'
        . 'letter-spacing:1.2px;">Our call or text will come from</p></td></tr>'
        . '<tr><td style="padding:4px 20px;">'
        . '<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">'
        . $numbers . '</table></td></tr>'
        . '<tr><td style="padding:12px 24px 22px;text-align:center;">'
        . '<p style="margin:0;color:#155e75;font-size:14px;line-height:1.5;">'
        . 'Save these numbers to your contacts so you know it&rsquo;s us calling.</p></td></tr>'
        . '</table></td></tr>'

        . $detailsBlock

        // Closing
        . '<tr><td style="padding:16px 32px 32px;">'
        . '<p style="margin:0;color:#334155;font-size:15px;line-height:1.6;">'
        . 'Questions before we call? Just reply to this email, or call us at '
        . '<a href="tel:+16143845081" style="color:#0e7490;font-weight:700;text-decoration:none;">'
        . LEAD_AUTOREPLY_MAIN_TEL . '</a>.</p></td></tr>'

        // Footer
        . '<tr><td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:22px 32px;text-align:center;">'
        . '<p style="margin:0 0 5px;color:#0f172a;font-size:14px;font-weight:700;">Maxima Pools</p>'
        . '<p style="margin:0 0 5px;color:#64748b;font-size:13px;line-height:1.5;">'
        . '4059 State Route 37 East, Suite A &middot; Delaware, OH 43015</p>'
        . '<p style="margin:0;color:#64748b;font-size:13px;">'
        . '<a href="https://maximapools.com" style="color:#0e7490;text-decoration:none;">maximapools.com</a></p>'
        . '</td></tr>'

        . '</table></td></tr></table></body></html>';
}

/** Hand the finished message to Hostinger's SMTP over cURL. */
function lead_autoreply_send(
    array $cfg,
    string $to,
    string $toName,
    string $subject,
    string $text,
    string $html,
    ?string &$err
): bool {
    $boundary = 'mx=' . bin2hex(random_bytes(10));
    $encName  = lead_autoreply_encode_name($toName);
    $toHeader = $encName !== '' ? $encName . ' <' . $to . '>' : $to;

    // Both parts go out base64: SMTP folds any line over 998 characters at
    // an arbitrary point, and a fold landing inside a tag renders the
    // markup as literal text — the bug the weekly report hit in July.
    // Base64 keeps every line at 76 chars, so nothing downstream rewraps.
    $payload =
        'Date: ' . gmdate('r') . "\r\n"
        . 'From: ' . LEAD_AUTOREPLY_FROM_NAME . ' <' . LEAD_AUTOREPLY_FROM_MAIL . ">\r\n"
        . 'To: ' . $toHeader . "\r\n"
        . 'Reply-To: ' . LEAD_AUTOREPLY_REPLY_TO . "\r\n"
        . 'Subject: =?UTF-8?B?' . base64_encode($subject) . "?=\r\n"
        . 'Message-ID: <' . bin2hex(random_bytes(12)) . '@maximapools.com>' . "\r\n"
        . "MIME-Version: 1.0\r\n"
        // Tells other autoresponders not to answer this one, which is how
        // two robots avoid emailing each other all afternoon.
        . "Auto-Submitted: auto-replied\r\n"
        . "X-Mailer: Maxima Pools Website\r\n"
        . 'Content-Type: multipart/alternative; boundary="' . $boundary . '"' . "\r\n\r\n"
        . '--' . $boundary . "\r\n"
        . "Content-Type: text/plain; charset=utf-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($text), 76, "\r\n")
        . '--' . $boundary . "\r\n"
        . "Content-Type: text/html; charset=utf-8\r\n"
        . "Content-Transfer-Encoding: base64\r\n\r\n"
        . chunk_split(base64_encode($html), 76, "\r\n")
        . '--' . $boundary . "--\r\n";

    $ch = curl_init();
    curl_setopt_array($ch, [
        CURLOPT_URL          => LEAD_AUTOREPLY_SMTP_URL,
        CURLOPT_USE_SSL      => CURLUSESSL_ALL,
        CURLOPT_USERNAME     => $cfg['user'],
        CURLOPT_PASSWORD     => $cfg['pass'],
        CURLOPT_MAIL_FROM    => '<' . LEAD_AUTOREPLY_FROM_MAIL . '>',
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

/** The subject line, in one place so the CLI test sends the real one. */
function lead_autoreply_subject(): string {
    return 'We got your estimate request — here are the numbers we call from';
}

/**
 * Confirm a submitted estimate request to the person who submitted it.
 *
 * Never throws and never echoes: submit.php calls this after the browser
 * already has its JSON, so nothing here can turn a captured lead into a
 * form error. Returns whether the message actually went out.
 *
 * @param array{name?:string,email?:string,phone?:string,address?:string,city?:string,state?:string,zip?:string,poolSize?:string} $lead
 */
function lead_autoreply(array $lead): bool {
    $email = trim((string)($lead['email'] ?? ''));
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        lead_autoreply_log(['ok' => false, 'to' => $email, 'error' => 'invalid recipient']);
        return false;
    }

    $cfg = lead_autoreply_config();
    if ($cfg === null) {
        lead_autoreply_log(['ok' => false, 'to' => $email, 'error' => 'smtp-config.php missing']);
        return false;
    }

    if (lead_autoreply_sent_recently($email)) {
        lead_autoreply_log(['ok' => false, 'to' => $email, 'error' => 'skipped: confirmed recently']);
        return false;
    }

    $name = trim((string)preg_replace('/\s+/', ' ', (string)($lead['name'] ?? '')));
    $lead['first'] = $name === '' ? '' : explode(' ', $name)[0];

    $err = null;
    $ok  = lead_autoreply_send(
        $cfg,
        $email,
        $name,
        lead_autoreply_subject(),
        lead_autoreply_text($lead),
        lead_autoreply_html($lead),
        $err
    );

    lead_autoreply_log(['ok' => $ok, 'to' => $email] + ($ok ? [] : ['error' => $err]));
    if (!$ok) {
        @error_log('[lead-autoreply.php] SMTP send failed: ' . (string)$err);
    }
    return $ok;
}

} // function_exists guard

/* ── CLI test send ─────────────────────────────────────────────────────
 *      php lead-autoreply.php test someone@example.com "First Last"
 *
 *  Sends the real message with sample answers in the "what you sent us"
 *  block, so the layout can be checked in an actual inbox. It calls the
 *  sender directly rather than lead_autoreply(), because the dedupe window
 *  would block the second look at a layout you're still adjusting.
 * -------------------------------------------------------------------- */
if (PHP_SAPI === 'cli' && isset($argv[0]) && realpath($argv[0]) === realpath(__FILE__)) {
    if (($argv[1] ?? '') !== 'test' || ($argv[2] ?? '') === '') {
        fwrite(STDERR, "usage: php lead-autoreply.php test someone@example.com \"First Last\"\n");
        exit(2);
    }

    $to   = $argv[2];
    $name = $argv[3] ?? 'Test Lead';
    $cfg  = lead_autoreply_config();

    if ($cfg === null) {
        fwrite(STDERR, "FAIL  /.private/smtp-config.php is missing or has no password.\n");
        exit(1);
    }

    $sample = [
        'first'    => explode(' ', $name)[0],
        'address'  => '123 Main St',
        'city'     => 'Delaware',
        'state'    => 'OH',
        'zip'      => '43015',
        'poolSize' => 'Medium (300–500 sq ft)',
        'phone'    => '(614) 555-0142',
    ];

    $err = null;
    $ok  = lead_autoreply_send(
        $cfg,
        $to,
        $name,
        lead_autoreply_subject(),
        lead_autoreply_text($sample),
        lead_autoreply_html($sample),
        $err
    );

    lead_autoreply_log(['ok' => $ok, 'to' => $to, 'mode' => 'cli-test'] + ($ok ? [] : ['error' => $err]));
    echo $ok ? "OK    sent to $to\n" : "FAIL  $err\n";
    exit($ok ? 0 : 1);
}
