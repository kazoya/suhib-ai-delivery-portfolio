# غياري / Ghayari

Lebanon-first marketplace for auto parts: search by OEM or vehicle, compare **part + delivery = total**, order COD, follow a real timeline.

Launch geography: **Beirut and suburbs**. Arabic RTL first.

This repository is independent of خذني بطريقك.

## Slice you can run today

1. Two verified stores (Hamra, Sin el-Fil) share Toyota oil filter `90915-YZZD2`.
2. Search, sort by best match / lowest total / nearest.
3. Create a COD order (server-side prices).
4. Store staff move `COD_CONFIRMED → PREPARING → READY_FOR_PICKUP → DELIVERED → CLOSED`.
5. Audit log + timeline. No fake driver GPS. No OCR. No live PayPal.

## Setup

```bash
npm install
npm test
npm run lint
npm run typecheck
npm run build
npm run dev
```

## Investor demo

Live: https://ghayari.vercel.app

- `/invest` — strategy, operations flow, 3PL, expansion, cost ranges
- `/api/investor-brief` — English PDF download
- `/invest/print` — Arabic print/PDF via the browser
- `/feedback` — improvement notes
- `/stores` — ratings
- Header: AR / EN / FR

Demo roles (until capital approval): pick a fictional Beirut user in the header. Never impersonates ADMIN. COD only. No live card capture.


## Architecture

See `docs/ARCHITECTURE.md`, `docs/DATABASE.md`, `docs/API.md`, `docs/SECURITY.md`.

Production target: Next.js + PostgreSQL on Vercel + Neon. Catalog/search uses an in-memory seed; orders, stock, ratings, and feedback persist when `DATABASE_URL` is set.

## License posture

Our code. Do not vendor Fleetbase (AGPL). Do not use unofficial RockAuto scrapers.
