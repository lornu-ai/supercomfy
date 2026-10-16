# Linear — #supercomfy (Cloud-Shield DTC + Digital Closet)

**GitHub:** https://github.com/lornu-ai/supercomfy  
**Status:** Create/update this project in Linear after MCP auth (Cursor → Linear plugin).

## Project (create in Linear)

| Field | Value |
|-------|--------|
| **Name** | `#supercomfy — Cloud-Shield DTC` |
| **Summary** | Shopify + Cloudflare app for Cloud-Shield hero hoodie, NFC/QR digital closet, and Sloane flywheel |
| **Lead** | Steven Irvin |
| **Target** | M0 drop: domain, shop, tag URLs, closet MVP, hero PDP |
| **Repo link** | `lornu-ai/supercomfy` |

## Milestones

| Milestone | Goal |
|-----------|------|
| **M0 — Launch slice** | Domain, CI, Shopify SKU, `/c/{id}` tags, marketing page, closet v0 |
| **M1 — Engagement** | Order-linked closet, Comfy Coins, DND |
| **M2 — Fit & Loom** | Fit Engine, Co-Creation Loom |

## Issues (backlog)

Copy into Linear; IDs are suggested keys (adjust to your team prefix).

| ID | Title | Priority | Milestone | Description |
|----|--------|----------|-----------|-------------|
| **SC-501** | Register domains + Cloudflare zone | P0 | M0 | `supercomfy.io` canonical; `staysupercomfy.com` 301; DNS for shop/app |
| **SC-502** | Monorepo scaffold + CI | P0 | M0 | Bun workspaces, Vitest, GHA, Wrangler preview deploys |
| **SC-503** | Shopify store + Cloud-Shield hero SKU | P0 | M0 | Sizes XS–2XL, care spec, product media from tech sheet |
| **SC-504** | Tag resolver Worker `/c/{id}` | P0 | M0 | Stable short URLs for NFC/QR; analytics + deep link to closet |
| **SC-505** | Digital closet MVP | P0 | M0 | Add piece manually + tag bind; minimal auth |
| **SC-506** | Brand site + `/cloud-shield-hoodie` | P1 | M0 | vinext marketing shell, SEO, Sloane bio link `/stay` |
| **SC-507** | Sloane content kit (4 pillars) | P1 | M0 | Scripts/templates for `@stay.supercomfy` |
| **SC-508** | Storefront API + order sync | P1 | M1 | Link purchases to closet entries |
| **SC-509** | Comfy Coins + DND mode | P2 | M1 | Rewards + focus mode (app module) |
| **SC-510** | Fit Engine v0 | P2 | M2 | Size guidance from chart + feedback loop |
| **SC-511** | Co-Creation Loom | P3 | M2 | Community design votes / drops |
| **SC-512** | In-pocket NFC tag program | P1 | M1 | Manufacturing spec + encode workflow for phone pocket |

## Labels (suggested)

`commerce`, `cloudflare`, `app`, `content`, `infra`, `M0`, `M1`, `M2`

## Related fleet work (not in this repo)

- DNS IaC patterns: `aivcs/infra-code-micro` (Cloudflare zones, CAA/DNSSEC) — only if automating `supercomfy.io` like `in3rt.net`

## After Linear MCP is connected

1. Create project with table above.
2. Bulk-create issues from backlog (link each to `supercomfy` repo).
3. Set **SC-501** and **SC-502** to *In Progress* (repo exists; domain pending).
