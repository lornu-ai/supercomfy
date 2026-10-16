# #supercomfy

Consumer lifestyle brand and digital product layer for **Cloud-Shield** apparel — NFC/QR closet, commerce, and influencer flywheel.

**Premier SKU:** Cloud-Shield fleece hoodie (4-way stretch, concealed phone pocket, XS–2XL).

## Stack

| Layer | Tech |
|-------|------|
| Commerce | Shopify (Online Store + Admin) |
| App / tags | Cloudflare Workers, D1/KV |
| Web | Next.js on Workers ([vinext](https://github.com/cloudflare/vinext)) |
| Tooling | Bun, Vitest, Playwright, GitHub Actions, Wrangler |

## Domains (target)

- **Brand:** `supercomfy.io` (canonical)
- **Handle redirect:** `staysupercomfy.com` → apex
- **Staging:** `supercomfy.in3rt.net` (optional)

## Monorepo

```
apps/web/       Marketing + app shell (vinext)
apps/tag/       NFC/QR resolver — supercomfy.io/c/{id}
packages/closet/  Closet domain logic (unit-tested)
packages/shopify/ Storefront API client (later)
```

## Scripts

```bash
bun install
bun run lint
bun run typecheck
bun run test
bun run build
```

## Linear

Project **#supercomfy — Cloud-Shield DTC** and issue backlog: [docs/linear-project.md](./docs/linear-project.md).

## License

Proprietary — Lornu AI / Inert Synergies.
