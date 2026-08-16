#!/usr/bin/env bash
set -euo pipefail

# Hackatime setup helper for ANIMATION.
# Pass the setup token as the first argument so no token is committed to Git.
# Usage:
#   bash scripts/setup-hackatime.sh YOUR_HACKATIME_SETUP_TOKEN

TOKEN="${1:-}"

if [[ -z "$TOKEN" ]]; then
  echo "Usage: bash scripts/setup-hackatime.sh YOUR_HACKATIME_SETUP_TOKEN" >&2
  exit 1
fi

if ! command -v curl >/dev/null 2>&1; then
  echo "Error: curl is required. Install curl and try again." >&2
  exit 1
fi

curl -fsSL https://raw.githubusercontent.com/hackclub/hackatime-setup/refs/heads/main/install.sh \
  | bash -s -- "$TOKEN"

unset TOKEN

echo "Hackatime setup completed."
