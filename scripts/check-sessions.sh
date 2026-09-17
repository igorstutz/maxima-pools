#!/bin/bash
# What the server has actually recorded in session tracking, so a number on
# the Attribution screen can be checked against reality.
#
#     bash scripts/check-sessions.sh
#
# Answers three things the panel alone can't: since when there is data at all,
# how the visits split by channel and day, and whether paid clicks are being
# filed under the wrong channel. Read-only.

set -u

KEY="$HOME/.ssh/maxima_deploy_key"
HOST="u247207656@157.173.208.145"
PORT=65002

[ -f "$KEY" ] || { echo "SSH key not found at $KEY" >&2; exit 1; }

ssh -i "$KEY" -p "$PORT" -o StrictHostKeyChecking=accept-new "$HOST" bash -s <<'REMOTE'
cd ~/domains/maximapools.com/public_html/.private 2>/dev/null || exit 1

php -r '
$arquivos = glob("sessions-*.log");
if (!$arquivos) { echo "No session logs yet — nothing has been recorded.\n"; exit; }

$linhas = [];
foreach ($arquivos as $f) {
    foreach (file($f, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES) as $l) {
        $r = json_decode($l, true);
        if (is_array($r)) $linhas[] = $r;
    }
}
if (!$linhas) { echo "Session logs exist but are empty.\n"; exit; }

usort($linhas, fn($a, $b) => strcmp($a["ts"] ?? "", $b["ts"] ?? ""));
$primeira = $linhas[0]["ts"] ?? "?";
$ultima   = $linhas[count($linhas) - 1]["ts"] ?? "?";
$dias     = max(1, (strtotime($ultima) - strtotime($primeira)) / 86400);

printf("== coverage ==\n");
printf("   files      : %s\n", implode(", ", $arquivos));
printf("   first visit: %s\n", $primeira);
printf("   last visit : %s\n", $ultima);
printf("   span       : %.1f days, %d visits total\n", $dias, count($linhas));

$porCanal = []; $comClickId = 0; $googleSemAds = 0;
foreach ($linhas as $r) {
    $canal = $r["channel"] ?: "Direct";
    $porCanal[$canal] = ($porCanal[$canal] ?? 0) + 1;
    if (($r["click_id"] ?? "") !== "") $comClickId++;
    // Veio do google mas não foi classificado como anúncio: se houver muitos,
    // é sinal de clique pago perdendo o gclid pelo caminho.
    if (stripos((string)($r["source"] ?? ""), "google") !== false
        && stripos($canal, "Ads") === false) $googleSemAds++;
}
arsort($porCanal);

printf("\n== visits by channel ==\n");
foreach ($porCanal as $canal => $n) {
    printf("   %-22s %4d  (%.1f/day)\n", $canal, $n, $n / $dias);
}
printf("\n   with a click id (gclid/fbclid/...): %d\n", $comClickId);
printf("   from google but NOT filed as Ads  : %d\n", $googleSemAds);

printf("\n== last 10 days ==\n");
$porDia = [];
foreach ($linhas as $r) {
    $dia = substr((string)($r["ts"] ?? ""), 0, 10);
    if ($dia === "") continue;
    $canal = $r["channel"] ?: "Direct";
    $porDia[$dia]["total"] = ($porDia[$dia]["total"] ?? 0) + 1;
    if (stripos($canal, "Google Ads") !== false) {
        $porDia[$dia]["ads"] = ($porDia[$dia]["ads"] ?? 0) + 1;
    }
}
krsort($porDia);
printf("   %-12s %8s %12s\n", "day", "visits", "google ads");
foreach (array_slice($porDia, 0, 10, true) as $dia => $c) {
    printf("   %-12s %8d %12d\n", $dia, $c["total"], $c["ads"] ?? 0);
}

printf("\n== paid landing pages ==\n");
$lp = [];
foreach ($linhas as $r) {
    if (stripos((string)($r["channel"] ?? ""), "Ads") === false) continue;
    $l = (string)($r["landing"] ?? "(unknown)");
    $l = explode("?", $l)[0];
    $lp[$l] = ($lp[$l] ?? 0) + 1;
}
if (!$lp) { echo "   none recorded\n"; }
arsort($lp);
foreach (array_slice($lp, 0, 8, true) as $l => $n) printf("   %-40s %3d\n", $l, $n);
'
REMOTE
