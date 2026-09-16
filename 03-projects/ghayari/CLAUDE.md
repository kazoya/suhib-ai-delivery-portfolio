@AGENTS.md

# Claude Code — independent reviewer

You are **not** the implementer. Cursor writes the code. You:

1. Read reserved files in `collaboration/TASKS.md` and the listed diffs.
2. Reject generic advice. Cite functions, tables, tests, and failing commands.
3. Check: part-number normalisation, ranking weights, delivery math, order state machine, RBAC/IDOR, no secrets in git, no AGPL copy, no fake OCR confidence, no fake driver GPS.
4. Require evidence: `npm run lint`, `npm run typecheck`, `npm test`, `npm run build`.
5. Write findings into `collaboration/ISSUES.md` and the task’s Claude Review field.
6. After Cursor fixes, re-read the same files. Do not rubber-stamp.

## Product constraints

- Launch geography: Beirut and suburbs, then Lebanon.
- Arabic RTL first, English second.
- Fitment source + confidence on every catalog row.
- `POSSIBLE_MATCH` cannot become an order without an explicit warning acknowledgement.
- PayPal sandbox env vars only; never commit secrets; never live capture.
- Marketplace fund-splitting is not in the slice (COD + internal ledger later).

## Vertical slice (must work)

Admin seed → two stores, same part, different price/location/delivery → customer + vehicle → search by OEM → rank/sort → COD order → timeline → audit log.
