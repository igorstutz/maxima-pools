<?php
declare(strict_types=1);

/* ----------------------------------------------------------------------
 *  Maxima Pools — Google Ads "Enhanced conversions for leads" uploader.
 *
 *  Server-side twin of the GTM conversion tag. The browser tag only fires
 *  when the container loads, so every visitor running an ad blocker (or a
 *  Safari that expired the cookie) is invisible to Google Ads today. This
 *  reports the same lead straight from the server, where nothing can block
 *  it, matching the user on a hashed email/phone instead of a cookie.
 *
 *  It uploads to a SEPARATE conversion action from the website tag — the
 *  Google Ads API only accepts uploads into an import-type action. Keep
 *  exactly one of the two marked as "Primary" in Google Ads or the same
 *  lead gets counted twice. See DEPLOY.md for the full setup.
 *
 *  Credentials live OUTSIDE the repo (which is public) and outside the web
 *  root, in /.private/gads-config.php — created by hand on the server:
 *
 *      <?php return [
 *          'clientId'           => '....apps.googleusercontent.com',
 *          'clientSecret'       => '...',
 *          'refreshToken'       => '...',
 *          'developerToken'     => '...',
 *          'customerId'         => '1234567890',   // no dashes
 *          'conversionActionId' => '987654321',
 *      ];
 *
 *  Without that file every call here is a silent no-op, so the contact form
 *  behaves exactly as before.
 *
 *  Docs: https://developers.google.com/google-ads/api/docs/conversions/upload-identifiers
 * ---------------------------------------------------------------------- */

if (!defined('GADS_API_VERSION')) {
    define('GADS_API_VERSION', 'v25');
    define('GADS_API_BASE', 'https://googleads.googleapis.com/');
    define('GADS_TOKEN_ENDPOINT', 'https://oauth2.googleapis.com/token');
    define('GADS_PRIVATE_DIR', __DIR__ . '/../.private');
    // Google Ads interprets conversionDateTime in the account's own time
    // zone. Overridable via 'timeZone' in the config.
    define('GADS_DEFAULT_TIMEZONE', 'America/New_York');
}

if (!function_exists('gads_config')) {

/** Server-only credentials, or null when they aren't installed yet. */
function gads_config(): ?array {
    $path = GADS_PRIVATE_DIR . '/gads-config.php';
    if (!is_file($path)) {
        return null;
    }
    $cfg = require $path;
    if (!is_array($cfg)) {
        return null;
    }
    foreach (['clientId', 'clientSecret', 'refreshToken', 'developerToken',
              'customerId', 'conversionActionId'] as $key) {
        if (empty($cfg[$key])) {
            return null;
        }
    }
    return $cfg;
}

/** One JSON line per attempt, next to the other logs. No PII. */
function gads_log(array $entry): void {
    if (!is_dir(GADS_PRIVATE_DIR)) {
        @mkdir(GADS_PRIVATE_DIR, 0700, true);
    }
    $entry = ['ts' => gmdate('Y-m-d\TH:i:s\Z')] + $entry;
    @file_put_contents(
        GADS_PRIVATE_DIR . '/gads-capi.log',
        json_encode(
            $entry,
            JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE
        ) . "\n",
        FILE_APPEND | LOCK_EX
    );
}

/* ── Normalisation ──────────────────────────────────────────────────────
 * Google hashes the same way on their side, so a value that isn't
 * normalised identically simply never matches — it fails silently rather
 * than erroring, which is why each rule below is spelled out.
 */

/**
 * Lowercase without mangling accents. Plain strtolower() works byte by byte,
 * which corrupts the UTF-8 sequence in a name like "José" — and a corrupted
 * string then makes the /u regexes below bail out entirely.
 */
function gads_lower(string $value): string {
    return function_exists('mb_strtolower') ? mb_strtolower($value, 'UTF-8') : strtolower($value);
}

function gads_normalize_email(string $email): string {
    $email = gads_lower(trim($email));
    if ($email === '' || strpos($email, '@') === false) {
        return '';
    }
    [$user, $domain] = explode('@', $email, 2);
    if ($domain === 'gmail.com' || $domain === 'googlemail.com') {
        // Gmail ignores dots and everything after a "+", so Google strips
        // both before hashing. Without this, john.doe@ and johndoe@ produce
        // different hashes for the same inbox.
        $plus = strpos($user, '+');
        if ($plus !== false) {
            $user = substr($user, 0, $plus);
        }
        $user = str_replace('.', '', $user);
    }
    return $user === '' ? '' : $user . '@' . $domain;
}

/** E.164, matching normalizePhone() in src/lib/analytics.ts. */
function gads_normalize_phone(string $phone): string {
    $digits = preg_replace('/\D/', '', $phone) ?? '';
    if ($digits === '') {
        return '';
    }
    if (strlen($digits) === 10) {
        return '+1' . $digits;
    }
    if (strlen($digits) === 11 && $digits[0] === '1') {
        return '+' . $digits;
    }
    return '+' . $digits;
}

/** Lowercase, no punctuation, single-spaced — Google's rule for names. */
function gads_normalize_name(string $name): string {
    $name = gads_lower(trim($name));
    $stripped = preg_replace('/[^\p{L}\s]/u', '', $name);
    if ($stripped === null) {
        // Input wasn't valid UTF-8. Drop to an ASCII-only pass rather than
        // returning nothing — a partial name still matches, an empty one
        // silently costs us the identifier.
        $stripped = preg_replace('/[^A-Za-z\s]/', '', $name) ?? '';
    }
    return trim(preg_replace('/\s+/', ' ', $stripped) ?? $stripped);
}

/** SHA-256 as lowercase hex, which is what the REST API expects. */
function gads_sha256(string $value): string {
    return hash('sha256', $value);
}

/**
 * OAuth access token from the long-lived refresh token, cached on disk so a
 * burst of leads doesn't re-mint one per submission. Null on failure.
 */
function gads_access_token(array $cfg): ?string {
    $cachePath = GADS_PRIVATE_DIR . '/gads-token.json';

    $raw = @file_get_contents($cachePath);
    if ($raw !== false) {
        $cached = json_decode($raw, true);
        if (is_array($cached)
            && !empty($cached['access_token'])
            && (int)($cached['expires_at'] ?? 0) > time() + 120
        ) {
            return (string)$cached['access_token'];
        }
    }

    $ch = curl_init(GADS_TOKEN_ENDPOINT);
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => http_build_query([
            'grant_type'    => 'refresh_token',
            'client_id'     => $cfg['clientId'],
            'client_secret' => $cfg['clientSecret'],
            'refresh_token' => $cfg['refreshToken'],
        ]),
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 3,
        CURLOPT_TIMEOUT        => 6,
    ]);
    $response = curl_exec($ch);
    $status   = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error    = curl_error($ch);
    curl_close($ch);

    $data = json_decode((string)$response, true);
    if ($status < 200 || $status >= 300 || !is_array($data) || empty($data['access_token'])) {
        gads_log([
            'step'     => 'token',
            'ok'       => false,
            'status'   => $status,
            'error'    => $error !== '' ? $error : null,
            'response' => substr((string)$response, 0, 300),
        ]);
        return null;
    }

    $token = (string)$data['access_token'];
    @file_put_contents(
        $cachePath,
        json_encode([
            'access_token' => $token,
            'expires_at'   => time() + (int)($data['expires_in'] ?? 3600),
        ]),
        LOCK_EX
    );
    @chmod($cachePath, 0600);

    return $token;
}

/**
 * Upload one lead. Fire-and-forget: never throws, and a failure is logged
 * rather than surfaced to the visitor.
 *
 * Keys: name, email, phone, city, state, zip, order_id,
 *       gclid | wbraid | gbraid, validate_only
 */
function gads_upload_lead(array $lead): void {
    $cfg = gads_config();
    if ($cfg === null) {
        return; // credentials not installed — nothing to do
    }

    /* ── Who the lead is. Max 5 identifiers per conversion. ── */
    $identifiers = [];

    $email = gads_normalize_email((string)($lead['email'] ?? ''));
    if ($email !== '') {
        $identifiers[] = [
            'hashedEmail'          => gads_sha256($email),
            'userIdentifierSource' => 'FIRST_PARTY',
        ];
    }

    $phone = gads_normalize_phone((string)($lead['phone'] ?? ''));
    if ($phone !== '') {
        $identifiers[] = [
            'hashedPhoneNumber'    => gads_sha256($phone),
            'userIdentifierSource' => 'FIRST_PARTY',
        ];
    }

    // addressInfo only counts as an identifier with all of first name, last
    // name, country and postal code — a partial one is silently ignored.
    $parts = preg_split('/\s+/', gads_normalize_name((string)($lead['name'] ?? '')), -1, PREG_SPLIT_NO_EMPTY) ?: [];
    $zip   = trim((string)($lead['zip'] ?? ''));
    if (count($parts) >= 2 && $zip !== '') {
        $first = (string)array_shift($parts);
        $identifiers[] = [
            'addressInfo' => [
                'hashedFirstName' => gads_sha256($first),
                'hashedLastName'  => gads_sha256(implode(' ', $parts)),
                // City and state travel unhashed, by design.
                'city'            => strtolower(trim((string)($lead['city'] ?? ''))),
                'state'           => strtolower(trim((string)($lead['state'] ?? ''))),
                'postalCode'      => $zip,
                'countryCode'     => 'US',
            ],
            'userIdentifierSource' => 'FIRST_PARTY',
        ];
    }

    if (!$identifiers) {
        gads_log(['step' => 'build', 'ok' => false, 'error' => 'no usable identifiers']);
        return;
    }

    /* ── The conversion itself ── */
    $customerId = preg_replace('/\D/', '', (string)$cfg['customerId']) ?? '';
    $action     = (string)$cfg['conversionActionId'];
    $resource   = strpos($action, 'customers/') === 0
        ? $action
        : sprintf('customers/%s/conversionActions/%s', $customerId, preg_replace('/\D/', '', $action));

    try {
        $tz = new DateTimeZone((string)($cfg['timeZone'] ?? GADS_DEFAULT_TIMEZONE));
    } catch (Exception $e) {
        $tz = new DateTimeZone(GADS_DEFAULT_TIMEZONE);
    }

    $conversion = [
        'conversionAction'   => $resource,
        // "yyyy-mm-dd hh:mm:ss+|-hh:mm" — the offset is mandatory.
        'conversionDateTime' => (new DateTimeImmutable('now', $tz))->format('Y-m-d H:i:sP'),
        'userIdentifiers'    => array_slice($identifiers, 0, 5),
    ];

    $orderId = substr(preg_replace('/[^A-Za-z0-9._-]/', '', (string)($lead['order_id'] ?? '')) ?? '', 0, 64);
    if ($orderId !== '') {
        $conversion['orderId'] = $orderId;
    }

    // A click id makes the match exact instead of probabilistic. Only one of
    // the three may be set; gclid wins when more than one arrives.
    foreach (['gclid', 'wbraid', 'gbraid'] as $kind) {
        $value = substr(preg_replace('/[^A-Za-z0-9._-]/', '', (string)($lead[$kind] ?? '')) ?? '', 0, 512);
        if ($value !== '') {
            $conversion[$kind] = $value;
            break;
        }
    }

    if (!empty($cfg['conversionValue']) && (float)$cfg['conversionValue'] > 0) {
        $conversion['conversionValue'] = (float)$cfg['conversionValue'];
        $conversion['currencyCode']    = (string)($cfg['currencyCode'] ?? 'USD');
    }

    $token = gads_access_token($cfg);
    if ($token === null) {
        return; // already logged
    }

    $validateOnly = !empty($lead['validate_only']);

    $body = json_encode([
        'conversions' => [$conversion],
        // The API rejects a request that sets both, so they're mutually
        // exclusive here: validation runs strict, real uploads report
        // per-conversion errors instead of failing the whole call.
        'partialFailure' => !$validateOnly,
        'validateOnly'   => $validateOnly,
        // A stray non-UTF-8 byte in an unhashed field (city, state) would
        // otherwise make json_encode return false and post an empty body.
    ], JSON_UNESCAPED_SLASHES | JSON_INVALID_UTF8_SUBSTITUTE);
    if ($body === false) {
        gads_log(['step' => 'build', 'ok' => false, 'error' => 'payload not encodable']);
        return;
    }

    $headers = [
        'Authorization: Bearer ' . $token,
        'developer-token: ' . $cfg['developerToken'],
        'Content-Type: application/json',
    ];
    if (!empty($cfg['loginCustomerId'])) {
        $headers[] = 'login-customer-id: ' . preg_replace('/\D/', '', (string)$cfg['loginCustomerId']);
    }

    $ch = curl_init(GADS_API_BASE . GADS_API_VERSION . '/customers/' . $customerId . ':uploadClickConversions');
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $body,
        CURLOPT_HTTPHEADER     => $headers,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 3,
        CURLOPT_TIMEOUT        => 8,
    ]);
    $response = curl_exec($ch);
    $status   = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error    = curl_error($ch);
    curl_close($ch);

    // A rejected conversion comes back inside a 200 when partialFailure is
    // on, so the status code alone would report a silent loss as success.
    $data         = json_decode((string)$response, true);
    $partialError = is_array($data) ? ($data['partialFailureError']['message'] ?? null) : null;
    $ok           = $status >= 200 && $status < 300 && $partialError === null;

    gads_log([
        'step'        => 'upload',
        'order_id'    => $orderId !== '' ? $orderId : null,
        'status'      => $status,
        'ok'          => $ok,
        'validate'    => $validateOnly ?: null,
        'identifiers' => count($conversion['userIdentifiers']),
        'click_id'    => isset($conversion['gclid']) ? 'gclid'
                       : (isset($conversion['wbraid']) ? 'wbraid'
                       : (isset($conversion['gbraid']) ? 'gbraid' : null)),
        'error'       => $error !== '' ? $error : null,
        'partial'     => $partialError !== null ? substr((string)$partialError, 0, 300) : null,
        'response'    => $ok && !$validateOnly ? null : substr((string)$response, 0, 500),
    ]);
}

} // function_exists guard
