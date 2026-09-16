#!/bin/bash
# Why the admin panel shows no journey for a lead.
#
#     bash scripts/check-journey.sh
#
# The panel renders the journey only when the lead record carries an
# "attribution" object. The browser sends one with every submission, but it is
# api/submit.php that writes it to the log — and that file is excluded from the
# CI deploy, so the live copy can be older than the repo. Read-only.

set -u

KEY="$HOME/.ssh/maxima_deploy_key"
HOST="u247207656@157.173.208.145"
PORT=65002

[ -f "$KEY" ] || { echo "SSH key not found at $KEY" >&2; exit 1; }

ssh -i "$KEY" -p "$PORT" -o StrictHostKeyChecking=accept-new "$HOST" bash -s <<'REMOTE'
cd ~/domains/maximapools.com/public_html || exit 1

echo "== live api/submit.php =="
if grep -q "attr_parse" api/submit.php; then
    echo "   writes attribution: YES"
else
    echo "   writes attribution: NO  <-- this is why the panel has nothing to show"
fi
if [ -f api/attribution-parse.php ]; then
    echo "   attribution-parse.php: present"
else
    echo "   attribution-parse.php: MISSING"
fi
echo "   last modified: $(date -r api/submit.php '+%Y-%m-%d %H:%M')"

echo
echo "== .private/submissions.log =="
php -r '
$path = ".private/submissions.log";
if (!is_file($path)) { echo "   log not found\n"; exit; }
$lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$total = 0; $comJornada = 0; $ultimos = [];
foreach ($lines as $line) {
    $r = json_decode($line, true);
    if (!is_array($r)) continue;
    $total++;
    $tem = is_array($r["attribution"] ?? null) && $r["attribution"] !== [];
    if ($tem) $comJornada++;
    $ultimos[] = [$r["ts"] ?? "?", (string)($r["email"] ?? ""), $tem, $r["attribution"] ?? null];
}
printf("   %d leads, %d with a journey, %d without\n", $total, $comJornada, $total - $comJornada);
echo "\n== last 6 leads ==\n";
foreach (array_slice($ultimos, -6) as $u) {
    [$ts, $email, $tem, $a] = $u;
    $mail = $email === "" ? "(no email)" : substr($email, 0, 3) . "***@" . substr(strrchr($email, "@") ?: "@?", 1);
    $nota = "no journey";
    if ($tem) {
        $canal = $a["lastNonDirect"]["channel"] ?? ($a["last"]["channel"] ?? ($a["first"]["channel"] ?? "?"));
        $sess  = (int)($a["sessions"] ?? 0);
        $pags  = is_array($a["pages"] ?? null) ? count($a["pages"]) : 0;
        $nota  = sprintf("journey: %s, %d visit(s), %d page(s)", $canal, $sess, $pags);
    }
    printf("   %-21s %-26s %s\n", substr($ts, 0, 19), $mail, $nota);
}
'

echo
echo "== session tracking (track.php) =="
ls -1 .private/sessions-*.log 2>/dev/null | tail -3 || echo "   no session logs yet"
REMOTE
