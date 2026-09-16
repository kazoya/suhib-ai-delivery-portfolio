import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/shared/github-icon";
import { owner, projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "English summary",
  description: "Suhib Asrawi — Software Engineer, AI-agent-driven delivery. Arabic-first web platforms shipped on Vercel and Forge, a self-built portfolio tracking platform, and evidence-backed case studies.",
};

const en = [
  { id: "project1", name: "Project1 Commerce Intelligence", text: "Next.js + PostgreSQL cross-border commerce simulator: eBay Sandbox verified, deterministic pricing, local drafts, simulated purchase. Vitest 52/52, Playwright 4/4, owner readiness center, kill switch the UI cannot lift. Private repo." },
  { id: "master-brain", name: "Master Brain + Master HQ", text: "Dependency-free Node.js portfolio platform: one ops catalogue exposed as MCP tool, HTTP API and CLI; per-project engineering mind (done / findings / next / constraints); command channel that runs Claude Code inside the project folder; PBKDF2 auth; reports in five formats; a JSON collaboration bridge between four agents." },
  { id: "risha360", name: "Risha360 (Laravel + Next.js)", text: "Celebrity self-service roles deployed to production on Laravel Forge (PR #3 / #26, migration ran). Influencer collaboration hub with a locked payout state machine, admin desks and six Feature test files." },
  { id: "factories", name: "Factory sites", text: "Al-Mithaliya Dairy and ACI Agrochemicals — Next.js sites live on Vercel from GitHub within a day, using a copy → improve-by-agent → merge → deploy workflow." },
  { id: "baraah", name: "Bara'ah Alshobaki store demo", text: "Bilingual Next.js 16 premium demo with two security passes: CSP hash, HSTS, rate limiting, fail-closed mock payments in production, Supabase migration + RLS." },
  { id: "giz-apca", name: "APCA Industrial-AI Academy (GIZ)", text: "Bilingual TVET demonstrator: diagnostic → pathway → scenario → non-compensable safety assessment → skills passport → instructor and GIZ dashboards. 11 tests, live on Vercel." },
];

export default function EnglishPage() {
  return (
    <div dir="ltr" className="container-x py-12 text-left">
      <div className="max-w-3xl">
        <div className="eyebrow">{owner.titleEn}</div>
        <h1 className="h-display mt-2">Arabic-first web platforms that reach production, run by a system that logs every step with its evidence.</h1>
        <p className="lead mt-5">
          I am a software engineer from Jordan with an enterprise Java / C# / SQL background (banking imports, access control, queue
          management). Since 2026 I run a 46-project portfolio through AI coding agents (Cursor, Claude Code, Codex) from a tracking
          platform I built myself. Every project keeps an engineering mind — done, in progress, next, constraints — and every claim has
          evidence: green tests, a commit, or a deploy URL.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a href={owner.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground hover:brightness-110"><GithubIcon className="size-4" /> github.com/{owner.githubHandle}</a>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 font-semibold hover:border-primary">Arabic portfolio (full)</Link>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="h-section mb-5">Selected work</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {en.map((e) => {
            const p = projects.find((x) => x.id === e.id)!;
            return (
              <article key={e.id} className="card p-5">
                <h3 className="font-bold">{e.name} {p.progress ? <span className="text-sm font-normal text-muted">· {p.progress}%</span> : null}</h3>
                <p className="mt-2 text-sm text-muted">{e.text}</p>
                {p.links.length ? (
                  <div className="mt-3 flex flex-wrap gap-3 text-sm">
                    {p.links.map((l) => <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-primary hover:underline">{l.url.replace(/^https?:\/\//, "")} <ExternalLink className="size-3.5" /></a>)}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-2">
        <div className="card p-5">
          <h2 className="font-bold">Stack</h2>
          <p className="mt-2 text-sm text-muted">Next.js, React, TypeScript, Laravel, Filament, PHP, Node.js, Tailwind · PostgreSQL, Prisma, Supabase/RLS, SQLite FTS5, SQL Server, Oracle · local RAG (FAISS/Ollama), multi-agent design, RCTC prompting, MCP · Vercel, Laravel Forge, pm2, Playwright, Vitest, PHPUnit · Java 8, C#, SSIS, RDLC, WinCC, Flutter.</p>
        </div>
        <div className="card p-5">
          <h2 className="font-bold">Honest notes</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted">
            <li>About 35 of the 46 tracked projects sit at 0%: discovered inventory, not finished work.</li>
            <li>The strongest project (Project1) is a private repo; its evidence is tests and logs, not a public URL.</li>
            <li>Next.js and Laravel are my current working languages; Java, C# and SQL are the enterprise base.</li>
            <li>Bug bounty / CTF is a side track, not a hiring focus.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
