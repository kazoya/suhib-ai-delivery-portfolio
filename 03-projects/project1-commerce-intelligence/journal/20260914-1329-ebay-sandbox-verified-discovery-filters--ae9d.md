---
id: j-202609141329-fa71ae9d
date: "2026-09-14T10:29:59.373Z"
type: milestone
title: eBay Sandbox verified — discovery filters saved
progress: 75
model: fable
source: mcp
tags: ebay, sandbox, readiness, discovery
---

## Done
- Root cause: UI/DB connector had empty/wrong encrypted creds while `.env.local` SBX keys were valid.
- Synced sandbox App/Cert from env into `ConnectorAccount`; probe → `SANDBOX_VERIFIED` (Browse returned 3 items).
- Live `/api/connectors/search` eBay returned HTTP 200.
- Saved DiscoveryConfig: accessories / US / JO / topN=10.
- Readiness recheck: eBay probe task VERIFIED; discovery.category_or_market_missing VERIFIED; open HUMAN tasks = 0.
- Production keyset remains disabled (MAD notifications) — not blocking sandbox.

## Honesty
- `buyHalt=true`, `marketplaceWrite=false`. Project cannot earn live marketplace money by itself under current policy.
- Next sim path: supplier quote → deterministic price → TEMPLATE content → local draft → simulated order.

## Evidence
- probe status SANDBOX_VERIFIED; readiness snapshot tasks verified for ebay.probe_failed and discovery.filters.
