# Marketing landing

Static waitlist page for **#supercomfy** / Cloud-Shield hoodie.

## Deploy

**Production:** Cloudflare Pages project `supercomfy` (output = this directory).

```bash
bunx wrangler pages deploy marketing --project-name=supercomfy --branch=main
```

**CI:** `.github/workflows/pages-marketing.yml` (requires repo secrets `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`).

## URLs

- https://supercomfy.pages.dev
- https://supercomfy.in3rt.net

## Waitlist email (Resend)

Sends via **Resend** from **`notify@inertsynergies.com`** (domain DKIM is on Cloudflare).

| Variable | Type | Default |
|----------|------|---------|
| `RESEND_API_KEY` | Pages **secret** | *(required)* — copy from `inertsynergies-com` project or Resend dashboard |
| `WAITLIST_NOTIFY_TO` | env | `principle@lornu.ai` |
| `WAITLIST_NOTIFY_FROM` | env | `#supercomfy <notify@inertsynergies.com>` |

Keychain stores the token **hex-encoded** (with smart quotes). Decode before upload:

```bash
export RESEND_API_KEY=$(python3 -c 'import subprocess,binascii; raw=subprocess.check_output(["security","find-generic-password","-s","RESEND_API_KEY","-w"],text=True).strip(); print(binascii.unhexlify(raw).decode("utf-8").strip("\u201c\u201d\""), end="")')
printf '%s' "$RESEND_API_KEY" | bunx wrangler pages secret put RESEND_API_KEY --project-name=supercomfy
cd marketing && bunx wrangler pages deploy . --project-name=supercomfy --branch=main
```

Or: `marketing/scripts/resend-key-from-keychain.sh | bunx wrangler pages secret put RESEND_API_KEY --project-name=supercomfy`
