<?php
declare(strict_types=1);

/* ----------------------------------------------------------------------
 *  GitHub OAuth proxy — STEP 1 (authorize)
 *
 *  Sveltia/Decap CMS opens this endpoint in a popup to start the GitHub
 *  login. We redirect the user to GitHub's authorization screen. The
 *  client_id/secret live ONLY in /.private/oauth-config.php on the server
 *  (never in the public repo), same pattern as the admin password hash.
 *
 *  GitHub OAuth App "Authorization callback URL" must be exactly:
 *      https://maximapools.com/api/oauth/callback.php
 * ---------------------------------------------------------------------- */

$cfg = @include __DIR__ . '/../../.private/oauth-config.php';
if (!is_array($cfg) || empty($cfg['client_id'])) {
    http_response_code(500);
    header('Content-Type: text/plain; charset=utf-8');
    echo 'OAuth is not configured on the server.';
    exit;
}

session_name('maxima_oauth');
session_start();

// CSRF protection — random state echoed back by GitHub and checked in callback.
$state = bin2hex(random_bytes(16));
$_SESSION['oauth_state'] = $state;

$params = http_build_query([
    'client_id'    => $cfg['client_id'],
    'redirect_uri' => 'https://maximapools.com/api/oauth/callback.php',
    'scope'        => $cfg['scope'] ?? 'public_repo',
    'state'        => $state,
    'allow_signup' => 'false',
]);

header('Location: https://github.com/login/oauth/authorize?' . $params, true, 302);
exit;
