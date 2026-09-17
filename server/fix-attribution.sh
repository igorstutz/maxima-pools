#!/bin/bash
# Make the LIVE api/submit.php record where each lead came from.
#
# The browser sends an "attribution" field with every submission and
# api/attribution-parse.php is deployed, but submit.php is excluded from the CI
# rsync — so the repo can have the line that stores it while the live file,
# which is the one that runs, does not. The field then arrives and is dropped,
# and the panel shows a lead with no origin.
#
# Reports first, changes only what is missing, and rolls back if the patched
# file does not pass php -l. Safe to re-run.

set -u
cd ~/domains/maximapools.com/public_html || exit 1

STAMP=$(date +%Y%m%d-%H%M%S)

echo "== before =="
if grep -q "attr_parse" api/submit.php; then
    echo "   live submit.php already records attribution — nothing to fix"
    JA_TINHA=1
else
    echo "   live submit.php does NOT record attribution  <-- the leads' origin is being dropped"
    JA_TINHA=0
fi
[ -f api/attribution-parse.php ] && echo "   attribution-parse.php: present" \
                                 || echo "   attribution-parse.php: MISSING (deploy it first)"
echo "   submit.php last modified: $(date -r api/submit.php '+%Y-%m-%d %H:%M')"

if [ "$JA_TINHA" = "0" ]; then
    if [ ! -f api/attribution-parse.php ]; then
        echo "   aborting: the parser has to be on the server first" >&2
        exit 1
    fi

    mkdir -p .private && cp api/submit.php ".private/submit.php.bak-$STAMP" || exit 1
    echo
    echo "== patching (backup: .private/submit.php.bak-$STAMP) =="

    php -r '
      $path = "api/submit.php";
      $src  = file_get_contents($path);

      // Two anchors, both of which every version of this file has had.
      $ancoraRequire = "@require_once __DIR__ . \x27/gads-capi.php\x27;";
      $ancoraLog     = "\x27email_status\x27 =>";

      if (strpos($src, $ancoraRequire) === false) {
          fwrite(STDERR, "   require anchor not found — patch by hand\n"); exit(1);
      }
      $posLog = strpos($src, $ancoraLog);
      if ($posLog === false) {
          fwrite(STDERR, "   log anchor not found — patch by hand\n"); exit(1);
      }

      // 1. load the parser
      $src = str_replace(
          $ancoraRequire,
          $ancoraRequire . "\nrequire_once __DIR__ . \x27/attribution-parse.php\x27;",
          $src
      );

      // 2. store the journey on the lead, right before the mail status
      $linha = "    // De onde este lead veio, e por onde passou antes de escrever.\n"
             . "    \x27attribution\x27  => attr_parse((string)(\$_POST[\x27attribution\x27] ?? \x27\x27)),\n";
      $posLog = strpos($src, $ancoraLog);               // recompute after the first edit
      $inicioLinha = strrpos(substr($src, 0, $posLog), "\n") + 1;
      $src = substr($src, 0, $inicioLinha) . $linha . substr($src, $inicioLinha);

      file_put_contents($path, $src);
      echo "   patched api/submit.php\n";
    ' || exit 1

    if php -l api/submit.php > /dev/null 2>&1; then
        echo "   syntax OK"
    else
        echo "   SYNTAX ERROR — restoring the backup"
        cp ".private/submit.php.bak-$STAMP" api/submit.php
        exit 1
    fi

    echo
    echo "== after =="
    grep -n "attr_parse\|attribution-parse" api/submit.php | sed 's/^/   /'
fi

echo
echo "== leads recorded so far =="
php -r '
$path = ".private/submissions.log";
if (!is_file($path)) { echo "   no submissions log yet\n"; exit; }
$linhas = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$total = 0; $com = 0; $ultimos = [];
foreach ($linhas as $l) {
    $r = json_decode($l, true);
    if (!is_array($r)) continue;
    $total++;
    $tem = is_array($r["attribution"] ?? null) && $r["attribution"] !== [];
    if ($tem) $com++;
    $ultimos[] = [substr((string)($r["ts"] ?? "?"), 0, 19), (string)($r["email"] ?? ""), $tem];
}
printf("   %d leads, %d with an origin, %d without\n\n", $total, $com, $total - $com);
foreach (array_slice($ultimos, -5) as $u) {
    [$ts, $email, $tem] = $u;
    $mail = $email === "" ? "(no email)" : substr($email, 0, 3) . "***@" . substr(strrchr($email, "@") ?: "@?", 1);
    printf("   %-21s %-26s %s\n", $ts, $mail, $tem ? "origin recorded" : "no origin");
}
'
echo
echo "Leads already stored keep whatever they were saved with — this only fixes the ones from here on."
