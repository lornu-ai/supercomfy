# Design source of truth (local)

**Canonical asset folder (not in git):**

`/Users/steven/engineering/design/supercomfy`

| File (design folder) | Deployed as (`marketing/assets/`) |
|----------------------|-----------------------------------|
| `cloud-shield-fleece-info.jpeg` | `cloud-shield-spec.jpg` (1400px web) |
| `cloud-shield-fleece-back.jpeg` | `cloud-shield-back-web.jpg` |
| `cloud-shield-fleece-plan.jpeg` | `cloud-shield-plan-web.jpg` |
| `stay.supercomfy_qr.png` | `instagram-stay-supercomfy-qr-web.png` |
| `logo-small.jpg` | `logo-square-512.jpg` (header / favicon) |
| `logo.png` | *(master only — export sizes as needed)* |

**Refresh web assets after design updates:**

```bash
DESIGN=/Users/steven/engineering/design/supercomfy
ASSETS=marketing/assets
cp "$DESIGN/stay.supercomfy_qr.png" "$ASSETS/instagram-stay-supercomfy-qr.png"
cp "$DESIGN/logo-small.jpg" "$ASSETS/logo-square.jpg"
cp "$DESIGN/cloud-shield-fleece-info.jpeg" "$ASSETS/cloud-shield-spec-source.jpeg"
cp "$DESIGN/cloud-shield-fleece-back.jpeg" "$ASSETS/cloud-shield-back.jpeg"
cp "$DESIGN/cloud-shield-fleece-plan.jpeg" "$ASSETS/cloud-shield-plan.jpeg"
for f in cloud-shield-spec-source cloud-shield-back cloud-shield-plan; do
  sips -Z 1400 -s format jpeg -s formatOptions 82 "$ASSETS/${f}.jpeg" --out "$ASSETS/${f}-web.jpg"
done
cp "$ASSETS/cloud-shield-spec-source-web.jpg" "$ASSETS/cloud-shield-spec.jpg"
sips -Z 512 "$ASSETS/logo-square.jpg" --out "$ASSETS/logo-square-512.jpg"
sips -Z 800 "$ASSETS/instagram-stay-supercomfy-qr.png" --out "$ASSETS/instagram-stay-supercomfy-qr-web.png"
```

Then redeploy Pages from `marketing/`.
