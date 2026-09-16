#!/bin/bash
# Installs the lead confirmation email on the Hostinger server.
#
#   1. writes /.private/smtp-config.php, reusing the no-reply mailbox
#      password the weekly report already authenticates with
#   2. adds the two calls to the LIVE api/submit.php (excluded from the CI
#      rsync, so it never arrives on its own), keeping a timestamped backup
#   3. sends one test message
#
# Safe to re-run: every step checks whether it is already done.

set -u
cd ~/domains/maximapools.com/public_html || exit 1

# Every address given gets one test. With none, it goes to the default and
# keeps the greeting we've been reviewing it with.
if [ "$#" -gt 0 ]; then
    RECIPIENTS=("$@")
    DERIVE_NAME=1
else
    RECIPIENTS=("advertising@melaniesconsulting.com")
    DERIVE_NAME=0
fi
STAMP=$(date +%Y%m%d-%H%M%S)

# "paul@maximaconcrete.com" -> "Paul", so a test lands the way a customer's
# would rather than addressed to whoever asked for the test.
name_for() {
    local local_part="${1%@*}"
    local first="${local_part%%[._+-]*}"
    local head
    head=$(printf '%s' "${first:0:1}" | tr '[:lower:]' '[:upper:]')
    printf '%s%s' "$head" "${first:1}"
}

echo "== 1. SMTP credentials =="
if [ -f .private/smtp-config.php ]; then
    echo "   already present, leaving it alone"
else
    php -r '
      $src = @file_get_contents(".private/weekly_report.php");
      if ($src === false) { fwrite(STDERR, "   weekly_report.php not readable\n"); exit(1); }
      if (!preg_match("/const\s+SMTP_PASS\s*=\s*\x27([^\x27]+)\x27/", $src, $m)) {
          fwrite(STDERR, "   SMTP_PASS not found in weekly_report.php\n"); exit(1);
      }
      if ($m[1] === "SMTP_PWD_PLACEHOLDER") {
          fwrite(STDERR, "   weekly_report.php still has the placeholder password\n"); exit(1);
      }
      $out = "<?php return [\x27user\x27 => \x27no-reply@maximapools.com\x27, \x27pass\x27 => \x27" . $m[1] . "\x27];\n";
      file_put_contents(".private/smtp-config.php", $out);
      chmod(".private/smtp-config.php", 0600);
      echo "   created .private/smtp-config.php (password reused from the weekly report)\n";
    ' || exit 1
fi

echo "== 2. Wire it into the live submit.php =="
if grep -q "lead-autoreply.php" api/submit.php; then
    echo "   already wired, leaving it alone"
else
    cp api/submit.php "api/submit.php.bak-$STAMP" || exit 1
    php -r '
      $path = "api/submit.php";
      $src  = file_get_contents($path);

      $anchorRequire = "@require_once __DIR__ . \x27/gads-capi.php\x27;";
      $anchorCall    = "    if (function_exists(\x27oai_capi_lead\x27)) {";

      if (strpos($src, $anchorRequire) === false) {
          fwrite(STDERR, "   require anchor not found — apply by hand\n"); exit(1);
      }
      if (strpos($src, $anchorCall) === false) {
          fwrite(STDERR, "   call anchor not found — apply by hand\n"); exit(1);
      }

      $call = "    // Confirm to the customer that a person now has their request, and name\n"
            . "    // every number the callback can come from — an unknown 614 number on the\n"
            . "    // screen goes unanswered, a number they were told to expect gets picked\n"
            . "    // up. Runs after the response for the same reason as the calls below.\n"
            . "    if (function_exists(\x27lead_autoreply\x27)) {\n"
            . "        lead_autoreply([\n"
            . "            \x27name\x27     => \$name,\n"
            . "            \x27email\x27    => \$email,\n"
            . "            \x27phone\x27    => \$phone,\n"
            . "            \x27address\x27  => \$address,\n"
            . "            \x27city\x27     => \$city,\n"
            . "            \x27state\x27    => \$state,\n"
            . "            \x27zip\x27      => \$zip,\n"
            . "            \x27poolSize\x27 => \$poolSize,\n"
            . "        ]);\n"
            . "    }\n\n";

      $src = str_replace($anchorRequire, $anchorRequire . "\n@require_once __DIR__ . \x27/lead-autoreply.php\x27;", $src);
      $src = str_replace($anchorCall, $call . $anchorCall, $src);

      file_put_contents($path, $src);
      echo "   patched api/submit.php\n";
    ' || exit 1

    if php -l api/submit.php > /dev/null 2>&1; then
        echo "   syntax OK"
    else
        echo "   SYNTAX ERROR — restoring the backup"
        cp "api/submit.php.bak-$STAMP" api/submit.php
        exit 1
    fi
fi

echo "== 3. Module present? =="
if [ -f api/lead-autoreply.php ]; then
    echo "   api/lead-autoreply.php is on the server"
else
    echo "   MISSING — wait for the GitHub Actions deploy to finish, then re-run"
    exit 1
fi

echo "== 4. Test send =="
cd api || exit 1
for TO in "${RECIPIENTS[@]}"; do
    if [ "$DERIVE_NAME" = "1" ]; then
        php lead-autoreply.php test "$TO" "$(name_for "$TO")"
    else
        php lead-autoreply.php test "$TO" "Igor Stutz"
    fi
done
echo
echo "== log =="
tail -n "${#RECIPIENTS[@]}" ../.private/lead-autoreply.log
