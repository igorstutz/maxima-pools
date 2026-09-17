#!/bin/bash
# Runs server/fix-attribution.sh on the Hostinger box, from here.
#
#     bash scripts/fix-attribution.sh
#
# Reports whether the live api/submit.php records where a lead came from, and
# patches it if it doesn't. Read-only when there is nothing to fix.

set -u

KEY="$HOME/.ssh/maxima_deploy_key"
HOST="u247207656@157.173.208.145"
PORT=65002
SCRIPT="$(dirname "$0")/../server/fix-attribution.sh"

[ -f "$KEY" ] || { echo "SSH key not found at $KEY" >&2; exit 1; }
[ -f "$SCRIPT" ] || { echo "Script not found at $SCRIPT — run this from the repo" >&2; exit 1; }

ssh -i "$KEY" -p "$PORT" -o StrictHostKeyChecking=accept-new "$HOST" bash -s < "$SCRIPT"
