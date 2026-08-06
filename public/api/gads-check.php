<?php
declare(strict_types=1);

/* ----------------------------------------------------------------------
 *  Maxima Pools — Google Ads setup doctor.
 *
 *  Checks the pieces of the Enhanced Conversions setup one at a time and
 *  says which one is wrong. The API's own errors are cryptic and arrive all
 *  at once ("INVALID_CUSTOMER_ID" can mean four different mistakes), so
 *  each step here fails with the specific thing to go fix.
 *
 *      cd domains/maximapools.com/public_html/api && php gads-check.php
 *
 *  Read-only: it never records a conversion. The last step uses
 *  validateOnly, which asks Google to check a payload and throw it away.
 * ---------------------------------------------------------------------- */

if (PHP_SAPI !== 'cli') {
    // Nothing here is secret, but there is no reason to expose account
    // diagnostics over HTTP.
    http_response_code(404);
    exit;
}

require_once __DIR__ . '/gads-capi.php';

$pass = 0;
$fail = 0;

function step(string $label): void {
    printf("\n%s\n%s\n", $label, str_repeat('-', strlen($label)));
}
function ok(string $msg): void {
    global $pass; $pass++;
    echo "  OK   $msg\n";
}
function bad(string $msg, string $fix = ''): void {
    global $fail; $fail++;
    echo "  FAIL $msg\n";
    if ($fix !== '') {
        echo "       → $fix\n";
    }
}

/* ── 1. Config file ── */
step('1. Config file (/.private/gads-config.php)');

$cfg = gads_config();
if ($cfg === null) {
    $path = GADS_PRIVATE_DIR . '/gads-config.php';
    if (!is_file($path)) {
        bad('file not found', "create $path — see DEPLOY.md");
    } else {
        $raw = @require $path;
        $missing = [];
        foreach (['clientId', 'clientSecret', 'refreshToken', 'developerToken',
                  'customerId', 'conversionActionId'] as $key) {
            if (!is_array($raw) || empty($raw[$key])) {
                $missing[] = $key;
            }
        }
        bad('config incomplete', 'missing key(s): ' . implode(', ', $missing));
    }
    echo "\nStopped: nothing else can be checked without the config.\n";
    exit(1);
}
ok('found and complete');

$customerId = preg_replace('/\D/', '', (string)$cfg['customerId']) ?? '';
if (strlen($customerId) !== 10) {
    bad("customerId is " . strlen($customerId) . " digits, expected 10",
        'use the account id from the top corner of Google Ads, not the AW-XXXXXXX conversion id');
} else {
    ok("customerId $customerId");
}
if (stripos((string)$cfg['clientId'], '.apps.googleusercontent.com') === false) {
    bad('clientId does not look like an OAuth client id',
        'expected something ending in .apps.googleusercontent.com');
} else {
    ok('clientId looks well-formed');
}

/* ── 2. OAuth ── */
step('2. OAuth refresh token');

// Ignore any cached token so this really exercises the refresh token.
@unlink(GADS_PRIVATE_DIR . '/gads-token.json');
$token = gads_access_token($cfg);
if ($token === null) {
    bad('could not exchange the refresh token for an access token',
        'check clientId/clientSecret/refreshToken; see the "token" line in .private/gads-capi.log');
    echo "\nStopped: the API cannot be reached without a token.\n";
    exit(1);
}
ok('access token obtained');

/* ── 3. Account access + developer token ── */
step('3. Account access and developer token');

/** Runs a GAQL query; returns [httpStatus, decodedBody]. */
function gads_check_query(array $cfg, string $token, string $customerId, string $gaql): array {
    $headers = [
        'Authorization: Bearer ' . $token,
        'developer-token: ' . $cfg['developerToken'],
        'Content-Type: application/json',
    ];
    if (!empty($cfg['loginCustomerId'])) {
        $headers[] = 'login-customer-id: ' . preg_replace('/\D/', '', (string)$cfg['loginCustomerId']);
    }
    $ch = curl_init(GADS_API_BASE . GADS_API_VERSION . '/customers/' . $customerId . '/googleAds:searchStream');
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => json_encode(['query' => $gaql]),
        CURLOPT_HTTPHEADER     => $headers,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 5,
        CURLOPT_TIMEOUT        => 15,
    ]);
    $body   = (string)curl_exec($ch);
    $status = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    return [$status, json_decode($body, true) ?? $body];
}

/** Digs the human-readable reason out of the API's nested error shape. */
function gads_check_error($decoded): string {
    if (is_array($decoded)) {
        $err = $decoded['error'] ?? ($decoded[0]['error'] ?? null);
        if (is_array($err)) {
            $detail = $err['details'][0]['errors'][0]['message'] ?? null;
            return (string)($detail ?? $err['message'] ?? 'unknown error');
        }
    }
    return substr(is_string($decoded) ? $decoded : json_encode($decoded), 0, 200);
}

[$status, $body] = gads_check_query($cfg, $token, $customerId,
    'SELECT customer.id, customer.descriptive_name, customer.time_zone, customer.currency_code FROM customer LIMIT 1');

if ($status !== 200) {
    $msg = gads_check_error($body);
    bad("query rejected (HTTP $status): $msg");
    if (stripos($msg, 'developer token') !== false) {
        echo "       → a fresh developer token only works against test accounts.\n";
        echo "         Apply for Basic access in Google Ads → Tools → API Center.\n";
    } elseif (stripos($msg, 'permission') !== false || stripos($msg, 'not authorized') !== false) {
        echo "       → the Google account you authorised in the OAuth Playground\n";
        echo "         may not have access to this Ads account, or you need\n";
        echo "         loginCustomerId set to the MCC id.\n";
    }
    echo "\nStopped: cannot reach the account.\n";
    exit(1);
}

$customer = $body[0]['results'][0]['customer'] ?? null;
ok('developer token accepted, account reachable');
if ($customer) {
    ok(sprintf('account: %s (%s, %s)',
        $customer['descriptiveName'] ?? '?', $customer['timeZone'] ?? '?', $customer['currencyCode'] ?? '?'));

    $configured = (string)($cfg['timeZone'] ?? GADS_DEFAULT_TIMEZONE);
    if (!empty($customer['timeZone']) && $customer['timeZone'] !== $configured) {
        bad("time zone mismatch: account is {$customer['timeZone']}, config uses $configured",
            "set 'timeZone' => '{$customer['timeZone']}' so conversion timestamps land on the right day");
    } else {
        ok("time zone matches ($configured)");
    }
}

/* ── 4. Conversion action ── */
step('4. Conversion action');

$actionId = preg_replace('/\D/', '', (string)$cfg['conversionActionId']) ?? '';
[$status, $body] = gads_check_query($cfg, $token, $customerId,
    'SELECT conversion_action.id, conversion_action.name, conversion_action.type, '
    . 'conversion_action.status, conversion_action.primary_for_goal '
    . "FROM conversion_action WHERE conversion_action.id = $actionId");

$action = is_array($body) ? ($body[0]['results'][0]['conversionAction'] ?? null) : null;
if ($status !== 200 || $action === null) {
    bad("conversion action $actionId not found", 'check the ctId=... in the Google Ads URL for the action');
} else {
    ok(sprintf('"%s" (id %s)', $action['name'] ?? '?', $action['id'] ?? '?'));

    $type = (string)($action['type'] ?? '');
    if ($type === 'UPLOAD_CLICKS') {
        ok("type $type — accepts API uploads");
    } else {
        bad("type is $type, expected UPLOAD_CLICKS",
            'the API only uploads into an import action: Goals → Conversions → New → Import → CRM/files/other');
    }

    $statusStr = (string)($action['status'] ?? '');
    $statusStr === 'ENABLED' ? ok('status ENABLED') : bad("status is $statusStr, expected ENABLED");

    // Not an error either way — but the wrong choice silently doubles counts.
    if (!empty($action['primaryForGoal'])) {
        echo "  NOTE this action is Primary. Make sure the website tag's action is\n";
        echo "       Secondary, or the same lead is counted twice.\n";
    } else {
        echo "  NOTE this action is Secondary — good for the trial period, but its\n";
        echo "       conversions will not appear in the main Conversions column.\n";
    }
}

/* ── 5. End-to-end dry run ── */
step('5. Dry-run upload (validateOnly — records nothing)');

$logPath = GADS_PRIVATE_DIR . '/gads-capi.log';
$before  = is_file($logPath) ? filesize($logPath) : 0;

gads_upload_lead([
    'name'          => 'Smoke Test',
    'email'         => 'smoke.test@example.com',
    'phone'         => '6143845081',
    'city'          => 'Delaware',
    'state'         => 'OH',
    'zip'           => '43015',
    'order_id'      => 'check-' . bin2hex(random_bytes(4)),
    'validate_only' => true,
]);

$line = '';
if (is_file($logPath)) {
    $fh = fopen($logPath, 'r');
    fseek($fh, $before);
    $line = trim((string)stream_get_contents($fh));
    fclose($fh);
}
$entry = json_decode($line, true);
if (is_array($entry) && !empty($entry['ok'])) {
    ok('Google accepted the payload — the pipeline is ready');
} else {
    bad('dry run rejected: ' . ($entry['partial'] ?? $entry['error'] ?? $line));
    if (!empty($entry['partial']) && stripos((string)$entry['partial'], 'enhanced conversions') !== false) {
        echo "       → enable \"Enhanced conversions for leads\" on the conversion\n";
        echo "         action and accept the customer-data terms.\n";
    }
}

printf("\n%s\n%d passed, %d failed\n", str_repeat('=', 40), $pass, $fail);
exit($fail === 0 ? 0 : 1);
