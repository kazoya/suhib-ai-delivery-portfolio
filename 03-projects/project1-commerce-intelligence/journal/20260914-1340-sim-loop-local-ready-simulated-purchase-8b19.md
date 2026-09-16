---
id: j-202609141340-f8c18b19
date: "2026-09-14T10:40:59.050Z"
type: milestone
title: Sim loop LOCAL_READY + simulated purchase
progress: 82
model: fable
source: mcp
tags: simulation, local-ready, pricing, purchase-sim
---

## Completed sim loop (buyHalt stays true)
1. Costs: dutyStatus=INCLUDED + shipping on `sim-product-usb`; match CONFIRMED; imageUseAllowed=true
2. Pricing ops: variableCost=870 → markupFloor≈1228.8 / marginFloor≈1339.08 (sim units)
3. Local draft status: **LOCAL_READY** (marketplaceWrite=false)
4. Simulated purchase: **ok** (purchaseId created, dataPlane=SIMULATION) after liquidity unlock
5. Quote CSV by product id now works (`findCandidateForQuote` exact id + csv externalId)
6. Readiness: connectionsVerified=1; image null offers cleared

Still not live money: Production eBay disabled; buyHalt; no marketplace write.
