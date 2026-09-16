<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Master Brain (local)

This repo is the **default** registered project (`project1-commerce-intelligence`, priority 1).

- Platform root: `C:\master-brain` (HTTP `http://127.0.0.1:4545`, MCP `node C:\master-brain\bin\mcp.js`).
- Read `BRAIN.md` before material work; do not edit it by hand.
- After progress: `node C:\master-brain\bin\mb.js log project1-commerce-intelligence --title "..." --type progress --model <opus|sonnet|fable|haiku>`.
- Owner UI: `/master` (NextAuth `ownerSession`). Existing `/brain` is commerce docs only.
- Do not overwrite this `CLAUDE.md` / Next.js agent-rules stub. Do not print `MB_PASSWORD` or `MB_OPS_TOKEN`.
- `buyHalt=true`. No live publish. QMS (`saqrandrakan`) is dormant / frozen.

## Three-agent collaboration (Cursor × ChatGPT × Claude)

Not Codex+Claude only. Identities: `cursor`, `chatgpt`, `claude`, `human`.

- Protocol: `docs/collaboration/PROTOCOL.md`
- ChatGPT paste-once prompt: `docs/collaboration/MASTER_PROMPT_CHATGPT.md`
- Room: `/master` · CLI: `pnpm collab list` / `pnpm collab exhausted <agent> "quota"`
- If one model hits quota, duty failovers; do not wait; do not impersonate the exhausted agent.

