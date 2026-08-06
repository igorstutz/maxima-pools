<?php
declare(strict_types=1);

/* ----------------------------------------------------------------------
 *  Maxima Pools — ChatGPT Ads (OpenAI Ads) Conversions API sender.
 *
 *  Server-side twin of the browser pixel (src/lib/oaiq.ts). Both copies of
 *  a conversion carry the same event id, so OpenAI counts it once — and we
 *  still get credit when the browser call is blocked (ad blockers, Safari,
 *  user closed the tab before the pixel fired).
 *
 *  The API key lives OUTSIDE the repo (which is public) and outside the web
 *  root, in /.private/oai-capi-config.php — created by hand on the server:
 *
 *      <?php return ['apiKey' => 'PASTE-THE-CONVERSIONS-API-KEY'];
 *
 *  Without that file every call here is a silent no-op, so the contact form
 *  behaves exactly as before.
 *
 *  Docs: https://developers.openai.com/ads/conversions-api
 * ---------------------------------------------------------------------- */

if (!defined('OAI_PIXEL_ID')) {
    // Public identifier — safe to commit. Must match the pixel the site
    // initialises (src/content/settings/tracking.json → openaiPixelId).
    define('OAI_PIXEL_ID', 'KPYhXf5KaGeh5DhQMNzghU');
    define('OAI_CAPI_ENDPOINT', 'https://bzr.openai.com/v1/events');
    define('OAI_CAPI_PRIVATE_DIR', __DIR__ . '/../.private');
}

if (!function_exists('oai_capi_config')) {

/** Server-only config, or null when the key isn't installed yet. */
function oai_capi_config(): ?array {
    $path = OAI_CAPI_PRIVATE_DIR . '/oai-capi-config.php';
    if (!is_file($path)) {
        return null;
    }
    $cfg = require $path;
    if (!is_array($cfg) || empty($cfg['apiKey'])) {
        return null;
    }
    return $cfg;
}

/** One JSON line per attempt, next to the other logs. No PII. */
function oai_capi_log(array $entry): void {
    if (!is_dir(OAI_CAPI_PRIVATE_DIR)) {
        @mkdir(OAI_CAPI_PRIVATE_DIR, 0700, true);
    }
    $entry = ['ts' => gmdate('Y-m-d\TH:i:s\Z')] + $entry;
    @file_put_contents(
        OAI_CAPI_PRIVATE_DIR . '/oai-capi.log',
        json_encode($entry, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE) . "\n",
        FILE_APPEND | LOCK_EX
    );
}

/** SHA-256 the way OpenAI matches on it: trimmed, lowercased, lowercase hex. */
function oai_capi_hash(string $value): ?string {
    $value = strtolower(trim($value));
    return $value === '' ? null : hash('sha256', $value);
}

/**
 * POST one event to the Conversions API. Fire-and-forget: never throws, and
 * a failure is logged rather than surfaced to the visitor.
 *
 * $meta accepts: id, oppref, source_url, action_source, custom_event_name
 * $user accepts: email_sha256, obref, country, city, zip_code, ip_address,
 *                user_agent
 */
function oai_capi_send(string $type, array $data, array $meta = [], array $user = []): void {
    $cfg = oai_capi_config();
    if ($cfg === null) {
        return; // key not installed — nothing to do
    }

    $eventId = (string)($meta['id'] ?? '');
    if ($eventId === '') {
        // The browser always supplies one; this is just a safety net.
        $eventId = 'srv_' . bin2hex(random_bytes(12));
    }

    $event = [
        'id'            => $eventId,
        'type'          => $type,
        'timestamp_ms'  => (int)round(microtime(true) * 1000),
        'action_source' => (string)($meta['action_source'] ?? 'web'),
        'data'          => $data,
    ];
    if (!empty($meta['source_url']))        $event['source_url']        = $meta['source_url'];
    if (!empty($meta['oppref']))            $event['oppref']            = $meta['oppref'];
    if (!empty($meta['custom_event_name'])) $event['custom_event_name'] = $meta['custom_event_name'];

    $user = array_filter($user, static fn ($v) => $v !== null && $v !== '');
    if ($user) {
        $event['user'] = $user;
    }

    $body = json_encode(
        ['validate_only' => false, 'integration_source' => 'maximapools-php', 'events' => [$event]],
        JSON_UNESCAPED_SLASHES
    );

    $ch = curl_init(OAI_CAPI_ENDPOINT . '?pid=' . urlencode(OAI_PIXEL_ID));
    curl_setopt_array($ch, [
        CURLOPT_POST           => true,
        CURLOPT_POSTFIELDS     => $body,
        CURLOPT_HTTPHEADER     => [
            'Authorization: Bearer ' . $cfg['apiKey'],
            'Content-Type: application/json',
        ],
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_CONNECTTIMEOUT => 3,
        CURLOPT_TIMEOUT        => 6,
    ]);
    $response = curl_exec($ch);
    $status   = (int)curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error    = curl_error($ch);
    curl_close($ch);

    if ($status >= 200 && $status < 300) {
        oai_capi_log(['event' => $type, 'id' => $eventId, 'status' => $status, 'ok' => true]);
        return;
    }

    oai_capi_log([
        'event'    => $type,
        'id'       => $eventId,
        'status'   => $status,
        'ok'       => false,
        'error'    => $error !== '' ? $error : null,
        'response' => substr((string)$response, 0, 500),
    ]);
}

/**
 * The site's main conversion: a contact-form lead.
 * Keys: event_id, oppref, source_url, email, city, zip
 */
function oai_capi_lead(array $lead): void {
    oai_capi_send(
        'lead_created',
        ['type' => 'customer_action'],
        [
            'id'         => (string)($lead['event_id'] ?? ''),
            'oppref'     => (string)($lead['oppref'] ?? ''),
            'source_url' => (string)($lead['source_url'] ?? 'https://maximapools.com/contact/'),
        ],
        [
            'email_sha256' => !empty($lead['email']) ? oai_capi_hash((string)$lead['email']) : null,
            // Browser reference the pixel SDK stores first-party; present
            // only once the visitor's browser has run the pixel.
            'obref'        => (string)($_COOKIE['__obref'] ?? ''),
            'country'      => 'US',
            'city'         => substr(strtolower(trim((string)($lead['city'] ?? ''))), 0, 128),
            'zip_code'     => substr(trim((string)($lead['zip'] ?? '')), 0, 32),
            'ip_address'   => (string)($_SERVER['REMOTE_ADDR'] ?? ''),
            'user_agent'   => substr((string)($_SERVER['HTTP_USER_AGENT'] ?? ''), 0, 500),
        ]
    );
}

} // function_exists guard
