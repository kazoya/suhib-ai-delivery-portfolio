---
id: j-202609132313-6ad11076
date: "2026-09-13T20:13:09.263Z"
type: progress
title: Pass-2 security fixes + legal drafts
progress: 92
model: other
source: mcp
tags: preview, security, legal-draft
---

## Pass 2 fixes + Preview
- SEO: layout robots + empty sitemap when NEXT_PUBLIC_SEO_INDEX!=true
- Mock payments require ALLOW_MOCK_PAYMENTS=true; blocked on Vercel Production
- Legal draft pages + locked admin
- Contact size + local rate limit
- CSP hash + HSTS
- Local typecheck/unit/lint/build green

## Blocked for owner
- Supabase project keys
- AUDIO_CONSENT checklist signatures
- Explicit OK before Production promote

Evidence: docs/coordination/* , Preview redeploy after build
