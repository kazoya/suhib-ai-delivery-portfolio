# ابدأ من هنا / Start here

1. **[server-kit/PROMPT.md](server-kit/PROMPT.md)** — البرومبت الجاهز للصق في أي وكيل (Claude Code · Codex · Cursor).
2. [server-kit/README.md](server-kit/README.md) — خريطة الحزمة كاملة.
3. [server-kit/docs/HOW-IT-WORKS.md](server-kit/docs/HOW-IT-WORKS.md) — آلية عمل المنصة.
4. [server-kit/docs/SERVER-DEPLOY.md](server-kit/docs/SERVER-DEPLOY.md) — النشر على أي خادم.
5. [server-kit/docs/DISCOVERY.md](server-kit/docs/DISCOVERY.md) — اكتشاف مشاريع Codex/Cursor/Claude.
6. [server-kit/docs/NEXTJS.md](server-kit/docs/NEXTJS.md) — إرسال الأوامر عبر Next.js.

```bash
cp config.example.json config.json    # املأ projectsRoot · watchRoots · owner · port
node bin/mb.js init && npm test
node server-kit/tools/discover-projects.js --depth 3
node bin/server.js                    # http://127.0.0.1:4545
```

> الحزمة لا تحتوي أي بيانات مالك: لا `config.json` ولا `data/` ولا `seed/initial-projects.json`.
> بُنيت في 2026-09-10T11:57:01.350Z.
