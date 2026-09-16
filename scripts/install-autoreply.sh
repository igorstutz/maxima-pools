#!/bin/bash
# Runs server/install-lead-autoreply.sh on the Hostinger box, from here.
# Each address given gets one test message; with none, the installer picks
# its own default recipient.
#
#     bash scripts/install-autoreply.sh [recipient ...]
#
# It exists so the whole thing is one short line to type: the ssh invocation
# it wraps is long enough that pasting it into a terminal tends to arrive
# split across lines, and half a command does nothing useful.

set -u

KEY="$HOME/.ssh/maxima_deploy_key"
HOST="u247207656@157.173.208.145"
PORT=65002
SCRIPT="$(dirname "$0")/../server/install-lead-autoreply.sh"

if [ ! -f "$KEY" ]; then
    echo "SSH key not found at $KEY" >&2
    exit 1
fi
if [ ! -f "$SCRIPT" ]; then
    echo "Installer not found at $SCRIPT — run this from the repo" >&2
    exit 1
fi

if [ "$#" -gt 0 ]; then
    echo "Installing on $HOST, test message to: $*"
else
    echo "Installing on $HOST, test message to the default recipient"
fi
echo

# The installer is fed over stdin, so nothing has to be copied to the server
# first and there is no stray file to clean up afterwards.
ssh -i "$KEY" -p "$PORT" -o StrictHostKeyChecking=accept-new "$HOST" \
    bash -s "$@" < "$SCRIPT"
