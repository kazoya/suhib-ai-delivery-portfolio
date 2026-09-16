# Mahdi HREEAF — Hybrid Rentier Employment Research

مستودع **خاص** قابل للنقل: عقل المشروع (`project-brain/`) + بوابة Vercel (`apps/portal/`) + **Claude Code** كمستشار تدقيق محلي.

## البدء السريع

```powershell
cd C:\mahdi
npm run setup
npm run dev
```

بوابة محلية: [http://localhost:3000](http://localhost:3000)

## Claude Code (مستشار تحليلي)

```powershell
npm install -g @anthropic-ai/claude-code
npm run advisor:preflight
claude
```

التفاصيل: [`docs/CLAUDE_CODE_ADVISOR.md`](docs/CLAUDE_CODE_ADVISOR.md)

## GitHub Private + Vercel

[`docs/DEPLOY_GITHUB_VERCEL.md`](docs/DEPLOY_GITHUB_VERCEL.md)

## هيكل

```text
project-brain/     ← ادعاءات، مصادر، RCTC، قرارات
apps/portal/       ← Next.js على Vercel (طبقة T2 metadata)
.claude/commands/  ← /audit-source /verify-claim /rctc + أوامر V2
scripts/           ← validate-registers, brain manifest, integrity/*
CLAUDE.md          ← charter V2 (Chief Research Integrity Advisor)
```

## سكربتات

| الأمر | الوظيفة |
|--------|---------|
| `npm run brain:validate` | فحص CSV السجلات |
| `npm run brain:manifest` | تصدير manifest للبوابة |
| `npm run integrity:publish-gate -- CLM-0001` | بوابة نشر V2 (استشارية) |
| `npm run integrity:contradictions` | فحص تعارضات CLM |
| `npm run integrity:decay` | أدلة قريبة من الانتهاء |

## نزاهة علمية

راجع `project-brain/00-charter/EVIDENCE_PROTOCOL.md`. لا ادعاء في مخرجات معتمدة بلا `CLM` + `SRC` + Evidence Pack.

## RCTC مفتوح

إجابات صاحب المشروع مطلوبة للنطاق الجغرافي، الجمهور، ومسار الأدلة (90 يومًا) — انظر `project-brain/02-rctc/RCTC_LOG.md`.
