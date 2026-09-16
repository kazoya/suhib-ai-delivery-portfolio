import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ExternalLink, Flag, Lock, Milestone, ShieldAlert, StickyNote, TrendingUp } from "lucide-react";
import { projects, type TimelineEntry } from "@/data/portfolio";
import { Chip, TierBadge } from "@/components/shared/badge";
import { ProgressMeter } from "@/components/shared/progress-meter";
import { ProjectCard } from "@/components/projects/project-card";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = projects.find((x) => x.id === id);
  if (!p) return {};
  return { title: p.name, description: p.short, openGraph: { title: p.name, description: p.short } };
}

const kindIcon: Record<TimelineEntry["kind"], React.ReactNode> = {
  milestone: <Milestone className="size-4" />,
  progress: <TrendingUp className="size-4" />,
  blocker: <ShieldAlert className="size-4" />,
  note: <StickyNote className="size-4" />,
};
const kindLabel: Record<TimelineEntry["kind"], string> = { milestone: "إنجاز رئيسي", progress: "تقدّم", blocker: "عائق", note: "ملاحظة" };

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = projects.find((x) => x.id === id);
  if (!p) notFound();
  const related = projects.filter((x) => x.id !== p.id && x.tier === p.tier).slice(0, 3);

  return (
    <article className="container-x py-12">
      <Link href="/projects" className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground">
        <ArrowRight className="size-4" /> كل الأعمال
      </Link>

      <header className="mt-4 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <TierBadge tier={p.tier} />
            <span className="text-sm text-muted">{p.status}</span>
          </div>
          <h1 className="h-display mt-2">{p.name}</h1>
          <div className="ltr mt-1 text-end text-sm text-muted">{p.nameEn}</div>
          <p className="lead mt-4">{p.short}</p>
          {p.progress > 0 ? <ProgressMeter value={p.progress} className="mt-5 max-w-md" /> : null}
          <div className="mt-5 flex flex-wrap gap-1.5">{p.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
        </div>
        <aside className="card h-fit p-5">
          <h2 className="text-sm font-bold text-muted">الروابط</h2>
          {p.links.length ? (
            <ul className="mt-2 grid gap-2">
              {p.links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium text-primary hover:underline">
                    <ExternalLink className="size-4" /> {l.label}
                    <span className="ltr text-xs text-muted">{l.url.replace(/^https?:\/\//, "")}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted"><Lock className="size-4" /> لا رابط عام لهذا المشروع.</p>
          )}
          {p.note ? <p className="mt-4 border-t border-line pt-3 text-sm text-muted">{p.note}</p> : null}
          {p.constraints?.length ? (
            <div className="mt-4 border-t border-line pt-3">
              <h3 className="text-sm font-bold text-muted">القيود المكتوبة</h3>
              <ul className="mt-1 grid gap-1 text-sm">
                {p.constraints.map((c) => <li key={c} className="flex gap-2"><Flag className="mt-1 size-3.5 shrink-0 text-gold" />{c}</li>)}
              </ul>
            </div>
          ) : null}
        </aside>
      </header>

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="grid gap-8">
          <section className="card p-6">
            <h2 className="text-lg font-bold">المشكلة</h2>
            <p className="mt-2">{p.problem}</p>
          </section>
          <section className="card p-6">
            <h2 className="text-lg font-bold">ما بُني</h2>
            <ul className="mt-3 grid gap-2.5">
              {p.built.map((b) => <li key={b} className="flex gap-3"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />{b}</li>)}
            </ul>
          </section>
          <section className="rounded-2xl border border-primary/30 bg-primary-soft/40 p-6">
            <h2 className="text-lg font-bold text-primary">الدليل</h2>
            <ul className="mt-3 grid gap-2.5">
              {p.evidence.map((e) => <li key={e} className="flex gap-3"><CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />{e}</li>)}
            </ul>
          </section>
        </div>

        <aside>
          {p.timeline?.length ? (
            <section className="card p-6">
              <h2 className="text-lg font-bold">سجل التقدّم</h2>
              <p className="mt-1 text-xs text-muted">من journal/ المشروع كما صُدّر.</p>
              <ol className="mt-4 relative border-s border-line ps-5">
                {p.timeline.map((t, i) => (
                  <li key={i} className="relative pb-5 last:pb-0">
                    <span className={`absolute -start-[1.6rem] top-0.5 grid size-6 place-items-center rounded-full border border-line bg-surface ${t.kind === "blocker" ? "text-danger" : "text-primary"}`}>
                      {kindIcon[t.kind]}
                    </span>
                    <div className="ltr text-end text-[11px] text-muted">{t.date}</div>
                    <div className="text-sm font-medium">{t.title}</div>
                    <div className="text-xs text-muted">
                      {kindLabel[t.kind]}{t.progress != null ? ` · ${t.progress}%` : ""} · {t.by}
                    </div>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}
        </aside>
      </div>

      {related.length ? (
        <section className="mt-16">
          <h2 className="mb-5 text-xl font-bold">مشاريع من الفئة نفسها</h2>
          <div className="grid gap-5 md:grid-cols-3">{related.map((r) => <ProjectCard key={r.id} p={r} compact />)}</div>
        </section>
      ) : null}
    </article>
  );
}
