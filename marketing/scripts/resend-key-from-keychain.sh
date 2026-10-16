#!/usr/bin/env bash
# Keychain stores RESEND_API_KEY as hex(UTF-8 `"re_…"`). Decode before Wrangler/Resend.
set -euo pipefail
python3 -c '
import binascii, subprocess, sys
raw = subprocess.check_output(
    ["security", "find-generic-password", "-s", "RESEND_API_KEY", "-w"],
    text=True,
).strip()
key = binascii.unhexlify(raw).decode("utf-8").strip("\u201c\u201d\"")
if not key.startswith("re_"):
    sys.exit("RESEND_API_KEY in Keychain did not decode to a re_ token")
sys.stdout.write(key)
'
