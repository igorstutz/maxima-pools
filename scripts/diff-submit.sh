#!/bin/bash
# Compare the LIVE api/submit.php with the one in this repo.
#
#     bash scripts/diff-submit.sh
#
# submit.php is excluded from the CI rsync, so the file that actually handles
# every lead drifts away from the repo silently — that is how 114 leads got
# stored with no origin. This says exactly how far apart they are.
#
# The comparison runs ON the server and only the diff comes back, so the live
# file (which holds the real recipient) is never copied to this machine.
# Read-only on both sides.

set -u

KEY="$HOME/.ssh/maxima_deploy_key"
HOST="u247207656@157.173.208.145"
PORT=65002
REPO_FILE="$(dirname "$0")/../public/api/submit.php"

[ -f "$KEY" ] || { echo "SSH key not found at $KEY" >&2; exit 1; }
[ -f "$REPO_FILE" ] || { echo "Repo copy not found — run this from the repo" >&2; exit 1; }

# The repo copy goes in over stdin as a heredoc inside the remote script, so
# nothing has to be written here or left behind there.
{
    echo 'COPIA_REPO=$(mktemp)'
    echo "cat > \$COPIA_REPO <<'FIM_DO_ARQUIVO_DO_REPO'"
    cat "$REPO_FILE"
    echo "FIM_DO_ARQUIVO_DO_REPO"
    cat <<'REMOTO'
cd ~/domains/maximapools.com/public_html || exit 1

echo "== live vs repo =="
echo "   live: $(date -r api/submit.php '+%Y-%m-%d %H:%M')  $(wc -l < api/submit.php) lines"
echo "   repo: $(wc -l < $COPIA_REPO) lines"
echo

if diff -q api/submit.php "$COPIA_REPO" > /dev/null 2>&1; then
    echo "   identical — the live file is up to date"
else
    echo "== what the live file is missing (lines only in the repo) =="
    diff api/submit.php "$COPIA_REPO" | grep '^>' | sed 's/^> /   /' | head -60
    echo
    echo "== what only the live file has (keep these — real recipient, hand patches) =="
    diff api/submit.php "$COPIA_REPO" | grep '^<' | sed 's/^< /   /' | head -40
fi
rm -f "$COPIA_REPO"
REMOTO
} | ssh -i "$KEY" -p "$PORT" -o StrictHostKeyChecking=accept-new "$HOST" bash -s
