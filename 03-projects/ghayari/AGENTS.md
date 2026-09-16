<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Ghayari — Cursor / Claude joint build

Product: **غياري (Ghayari)** — Lebanon auto-parts marketplace with delivery. Independent of `C:\ArabBank\khudhni`.

## Roles

- **Cursor:** executive builder. Creates files, runs commands, tests, GitHub, Vercel.
- **Claude Code:** independent reviewer. Analyses product, architecture, DB, matching, edges, security, tests. Reviews *actual diffs and command output*. New `claude -p` sessions; do not `--resume` a stale product session.

## Source of truth

```
docs/*.md
collaboration/STATE.md
collaboration/TASKS.md
collaboration/HANDOFF.md
collaboration/ISSUES.md
```

Every task records: Task ID, Description, Owner, Files Reserved, Acceptance Criteria, Implementation Evidence, Commands Run, Test Results, Claude Review, Cursor Fixes, Final Status.

## Protocol

1. Claude analyses risks and acceptance criteria.
2. Cursor reserves files in `TASKS.md` before editing.
3. Cursor implements and runs tests.
4. Claude reviews real files + test output.
5. Cursor fixes.
6. Claude re-verifies.
7. Result goes in `STATE.md`.
8. Never edit the same file at the same time.
9. Nothing is “done” without runnable evidence.
10. After the first vertical slice is specified, keep building — do not stall on planning.

## Technical defaults

- Option A: Next.js App Router (pinned in `package.json`, currently 16.3.4), TypeScript, RTL PWA, PostgreSQL + PostGIS target, modular monolith, Vercel.
- Do not vendor AGPL (Fleetbase). Do not scrape RockAuto. No live PayPal without Suhaib.
- In-memory seed is the slice store until `DATABASE_URL` exists. Document that limitation.

## Human gates (Suhaib)

Ask only for: missing auth, paid cost, secrets, public repo, live payments, legal/tax, destructive migrate.
