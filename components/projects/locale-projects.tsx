import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, ExternalLink, Flag, Lock, Milestone, ShieldCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";
import { Chip, StatusBadge } from "@/components/shared/badge";
import { ContactCta } from "@/components/shared/contact-cta";
import { ProjectCard } from "@/components/projects/project-card";
import { ProjectExplorer } from "@/components/projects/project-explorer";
import { SectionHeading } from "@/components/shared/section-heading";
import { articleCopy, projectsCopy } from "@/lib/page-copy";
import { isLtr, localePath, type Locale } from "@/lib/i18n";
import { projectSummary, projectTitle } from "@/lib/project-summaries";
import { projectLd } from "@/lib/seo";

export function ProjectsIndex({ locale }: { locale: Locale }) {
  const c = projectsCopy[locale];
  return (
    <div className="container-x py-12">
      <SectionHeading as="h1" eyebrow={c.eyebrow} title={c.title(projects.length)} lead={c.lead} />
      <ProjectExplorer projects={projects} locale={locale} />
      <div className="mt-16 reveal">
        <ContactCta locale={locale} />
      </div>
    </div>
  );
}

export function ProjectArticle({ locale, id }: { locale: Locale; id: string }) {
  const p = projects.find((x) => x.id === id);
  if (!p) notFound();
  const c = articleCopy[locale];
  const list = projectsCopy[locale];
  const Arrow = isLtr(locale) ? ArrowLeft : ArrowRight;
  const title = projectTitle(p, locale);
  const summary = projectSummary(p, locale);
  const related = projects.filter((x) => x.id !== p.id && x.tier === p.tier).slice(0, 3);
  const ld = projectLd(p.id);
  const live = p.links.find((l) => !/github\.com/.test(l.url));
  const record = locale !== "ar";

  return (
    <article className="container-x py-12">
      {ld ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} /> : null}
      <Link href={localePath(locale, "/projects")} className="inline-flex items-center gap-1 text-sm text-muted hover:text-foreground">
        <Arrow className="size-4" /> {c.back}
      </Link>

      <header className="mt-4 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div>
          <StatusBadge status={p.statusKey} locale={locale} />
          <h1 className="h-display mt-2" style={{ textWrap: "balance" }}>{title}</h1>
          <p className="lead mt-4">{summary}</p>
          <div className="mt-5 flex flex-wrap gap-1.5">{p.stack.map((s) => <Chip key={s}>{s}</Chip>)}</div>
        </div>
        <aside className="card h-fit p-5">
          <h2 className="text-sm font-bold text-muted">{c.links}</h2>
          {p.links.length ? (
            <ul className="mt-2 grid gap-2">
              {p.links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex flex-wrap items-center gap-2 font-medium text-primary hover:underline">
                    <ExternalLink className="size-4" />
                    <span className="ltr">{l.url.replace(/^https?:\/\//, "")}</span>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 inline-flex items-center gap-2 text-sm text-muted"><Lock className="size-4" /> {c.noLink}</p>
          )}
        </aside>
      </header>

      {p.screenshots?.length ? (
        <section className="mt-10" aria-label={c.shots}>
          <div className={`grid gap-4 ${p.screenshots.length > 1 ? "md:grid-cols-2" : ""}`}>
            {p.screenshots.map((s, i) => (
              <figure key={s.src} className="overflow-hidden rounded-2xl border border-line bg-surface">
                <Image src={s.src} alt={title} width={s.width} height={s.height} sizes="(min-width: 1024px) 50vw, 100vw" priority={i === 0} className="h-auto w-full" />
                <figcaption className="px-4 py-2 text-xs text-muted">{c.realCapture}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {record ? <p className="mt-10 max-w-3xl text-sm text-muted">{c.record}</p> : null}

      <div className="mt-6 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="grid gap-6">
          <section className="card p-6">
            <h2 className="text-lg font-bold">{c.problem}</h2>
            <p className="mt-2" lang={record ? "ar" : undefined} dir={record ? "rtl" : undefined}>{p.problem}</p>
          </section>
          <section className="card p-6">
            <h2 className="text-lg font-bold">{c.built}</h2>
            <ul className="mt-2 grid gap-2.5" lang={record ? "ar" : undefined} dir={record ? "rtl" : undefined}>
              {p.built.map((b) => <li key={b} className="flex gap-3"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />{b}</li>)}
            </ul>
          </section>
          {p.security?.length ? (
            <section className="card p-6">
              <h2 className="text-lg font-bold">{c.security}</h2>
              <ul className="mt-2 grid gap-2" lang={record ? "ar" : undefined} dir={record ? "rtl" : undefined}>
                {p.security.map((s) => <li key={s} className="flex gap-3"><ShieldCheck className="mt-1 size-4 shrink-0 text-primary" />{s}</li>)}
              </ul>
            </section>
          ) : null}
          <section className="rounded-2xl border border-primary/30 bg-primary-soft/40 p-6">
            <h2 className="text-lg font-bold text-primary">{c.evidence}</h2>
            <p className="mt-2 text-sm text-muted" lang={record ? "ar" : undefined} dir={record ? "rtl" : undefined}>{c.evidenceKind}: {p.evidenceType}</p>
            <ul className="mt-3 grid gap-2.5" lang={record ? "ar" : undefined} dir={record ? "rtl" : undefined}>
              {p.evidence.map((e) => <li key={e} className="flex gap-3"><CheckCircle2 className="mt-1 size-4 shrink-0 text-primary" />{e}</li>)}
            </ul>
          </section>
          {p.limitation ? (
            <section className="rounded-2xl border border-gold/40 bg-gold-soft p-6">
              <h2 className="text-lg font-bold text-gold">{c.limitation}</h2>
              <p className="mt-2 text-sm" lang={record ? "ar" : undefined} dir={record ? "rtl" : undefined}>{p.limitation}</p>
            </section>
          ) : null}
        </div>
        <aside className="grid content-start gap-6">
          <section className="card p-6">
            <h2 className="text-sm font-bold text-muted">{list.role}</h2>
            <p className="mt-2 text-sm" lang={record ? "ar" : undefined} dir={record ? "rtl" : undefined}>{p.role}</p>
            <h2 className="mt-4 text-sm font-bold text-muted">{list.outcome}</h2>
            <p className="mt-2 text-sm" lang={record ? "ar" : undefined} dir={record ? "rtl" : undefined}>{p.outcome}</p>
            {p.note ? <p className="mt-4 border-t border-line pt-3 text-sm text-muted" lang={record ? "ar" : undefined} dir={record ? "rtl" : undefined}>{p.note}</p> : null}
            {p.constraints?.length ? (
              <div className="mt-4 border-t border-line pt-3">
                <h3 className="text-sm font-bold text-muted">{c.constraints}</h3>
                <ul className="mt-1 grid gap-1 text-sm" lang={record ? "ar" : undefined} dir={record ? "rtl" : undefined}>
                  {p.constraints.map((item) => <li key={item} className="flex gap-2"><Flag className="mt-1 size-3.5 shrink-0 text-gold" />{item}</li>)}
                </ul>
              </div>
            ) : null}
          </section>
          {p.milestones?.length ? (
            <section className="card p-6">
              <h2 className="text-lg font-bold">{c.milestones}</h2>
              <ol className="relative mt-4 border-s border-line ps-5">
                {p.milestones.map((m) => (
                  <li key={m.date + m.title} className="relative pb-5 last:pb-0">
                    <span className="absolute -start-[1.6rem] top-0.5 grid size-6 place-items-center rounded-full border border-line bg-surface text-primary">
                      <Milestone className="size-3.5" />
                    </span>
                    <div className="ltr text-end text-[11px] text-muted">{m.date}</div>
                    <div className="text-sm font-medium" lang={record ? "ar" : undefined} dir={record ? "rtl" : undefined}>{m.title}</div>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}
          {live ? (
            <a href={live.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground hover:brightness-110">
              <ExternalLink className="size-4" /> {c.openLive}
            </a>
          ) : null}
        </aside>
      </div>

      <div className="mt-16 reveal">
        <ContactCta locale={locale} />
      </div>

      {related.length ? (
        <section className="mt-16">
          <h2 className="mb-5 text-xl font-bold">{c.related}</h2>
          <div className="grid gap-5 md:grid-cols-3">{related.map((r) => <ProjectCard key={r.id} p={r} compact locale={locale} />)}</div>
        </section>
      ) : null}
    </article>
  );
}
