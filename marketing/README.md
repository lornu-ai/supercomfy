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

Replace the waitlist `mailto:` in `index.html` with Formspree/Tally when ready.
