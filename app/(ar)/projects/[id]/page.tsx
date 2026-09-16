import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, ExternalLink, Flag, Lock, Milestone, ShieldCheck } from "lucide-react";
import { projects, statusLabel } from "@/data/portfolio";
import { Chip, StatusBadge } from "@/components/shared/badge";
import { ProjectCard } from "@/components/projects/project-card";
import { ContactCta } from "@/components/shared/contact-cta";
import { alternatesFor, projectLd } from "@/lib/seo";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = projects.find((x) => x.id === id);
  if (!p) return {};
  const title = `${p.name} — ${statusLabel[p.statusKey].ar}`;
  return {
    title,
    description: p.short,
    alternates: alternatesFor(`/projects/${p.id}`),
    openGraph: { title, description: p.short, url: `/projects/${p.id}`, type: "article" },
    twitter: { card: "summary_large_image", title, description: p.shortEn },
  };
}

function Block({ title, children, tone = "default" }: { title: string; children: React.ReactNode; tone?: "default" | "primary" | "gold" }) {
  const cls = tone === "primary" ? "rounded-2xl border border-primary/30 bg-primary-soft/40 p-6" : tone === "gold" ? "rounded-2xl border border-gold/40 bg-gold-soft p-6" : "card p-6";
  return (
    <section className={cls}>
      <h2 className={`text-lg font-bold ${tone === "primary" ? "text-primary" : tone === "gold" ? "text-gold" : ""}`}>{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = projects.find((x) => x.id === id);
  if (!p) notFound();
  const related = projects.filter((x) => x.id !== p.id && x.tier === p.tier).slice(0, 3);
  const ld = projectLd(p.id);
  const live = p.links.find((l) => !/github\.com/.test(l.url));

  return (
    <article className="container-x py-12">
      {ld ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /> : null}
      <Link href="/projects" className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground">
        <ArrowRight className="size-4" /> كل الأعمال
      </Link>

      <header className="mt-4 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <StatusBadge status={p.statusKey} />
            <span className="text-sm text-muted">{p.status}</span>
          </div>
          <h1 className="h-display mt-2" style={{ textWrap: "balance" }}>{p.name}</h1>
          <div className="ltr mt-1 text-end text-sm text-muted">{p.nameEn}</div>
          <p className="lead mt-4">{p.short}</p>
          <dl className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
            <div className="card p-3"><dt className="text-xs font-bold text-muted">دوري</dt><dd>{p.role}</dd></div>
            <div className="card p-3"><dt className="text-xs font-bold text-muted">النتيجة المتحقَّق منها</dt><dd>{p.outcome}</dd></div>
          </dl>
          <div className="mt-5 flex flex-wrap gap-1.5">{p.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
        </div>
        <aside className="card h-fit p-5">
          <h2 className="text-sm font-bold text-muted">الروابط والدليل</h2>
          {p.links.length ? (
            <ul className="mt-2 grid gap-2">
              {p.links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex flex-wrap items-center gap-2 font-medium text-primary hover:underline">
                    <ExternalLink className="size-4" /> {l.label}
                    <span className="ltr text-xs text-muted">{l.url.replace(/^https?:\/\//, "")}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted"><Lock className="size-4" /> {p.note ?? "لا رابط عام لهذا المشروع."}</p>
          )}
          <div className="mt-3 text-xs text-muted">نوع الدليل: {p.evidenceType}</div>
          {p.links.length && p.note ? <p className="mt-4 border-t border-line pt-3 text-sm text-muted">{p.note}</p> : null}
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

      {p.screenshots?.length ? (
        <section className="mt-10" aria-label="لقطات حقيقية">
          <div className={`grid gap-4 ${p.screenshots.length > 1 ? "md:grid-cols-2" : ""}`}>
            {p.screenshots.map((s, i) => (
              <figure key={s.src} className="overflow-hidden rounded-2xl border border-line bg-surface">
                <Image src={s.src} alt={s.alt} width={s.width} height={s.height} sizes="(min-width: 1024px) 50vw, 100vw" priority={i === 0} className="h-auto w-full" />
                <figcaption className="px-4 py-2 text-xs text-muted">{s.alt} — لقطة حقيقية من الموقع الحي.</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="grid gap-6">
          <Block title="المشكلة"><p>{p.problem}</p></Block>
          <Block title="ما نفّذته أو قدته">
            <ul className="grid gap-2.5">
              {p.built.map((b) => <li key={b} className="flex gap-3"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />{b}</li>)}
            </ul>
          </Block>
          {p.security?.length ? (
            <Block title="ضوابط الأمان والسلامة">
              <ul className="grid gap-2">
                {p.security.map((s) => <li key={s} className="flex gap-3"><ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />{s}</li>)}
              </ul>
            </Block>
          ) : null}
          <Block title="الدليل" tone="primary">
            <ul className="grid gap-2.5">
              {p.evidence.map((e) => <li key={e} className="flex gap-3"><CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />{e}</li>)}
            </ul>
          </Block>
          {p.limitation ? (
            <Block title="القيد الحالي والخطوة التالية" tone="gold"><p className="text-sm">{p.limitation}</p></Block>
          ) : null}
        </div>

        <aside className="grid content-start gap-6">
          {p.milestones?.length ? (
            <section className="card p-6">
              <h2 className="text-lg font-bold">المحطات الرئيسية</h2>
              <ol className="relative mt-4 border-s border-line ps-5">
                {p.milestones.map((m, i) => (
                  <li key={i} className="relative pb-5 last:pb-0">
                    <span className="absolute -start-[1.6rem] top-0.5 grid size-6 place-items-center rounded-full border border-line bg-surface text-primary">
                      <Milestone className="size-3.5" />
                    </span>
                    <div className="ltr text-end text-[11px] text-muted">{m.date}</div>
                    <div className="text-sm font-medium">{m.title}</div>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}
          {live ? (
            <a href={live.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground hover:brightness-110">
              <ExternalLink className="size-4" /> افتح الموقع الحي
            </a>
          ) : null}
        </aside>
      </div>

      <div className="mt-16 reveal">
        <ContactCta locale="ar" />
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
