import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Briefcase, CheckCircle2, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { LinkedinIcon } from "@/components/shared/linkedin-icon";
import { GithubIcon } from "@/components/shared/github-icon";
import { PrintButton } from "@/components/shared/print-button";
import { ContactCta } from "@/components/shared/contact-cta";
import { StatusBadge } from "@/components/shared/badge";
import { deploymentStats, kpisEn, owner, projects } from "@/data/portfolio";
import { coreSkills, education, eras, experience, method, selectedProjectsCv } from "@/data/journey";
import { alternatesFor, ogEn, profilePageLd } from "@/lib/seo";
import { HeroNodeField } from "@/components/effects/hero-effects";
import { LiveAmmanClock } from "@/components/effects/live-amman-clock";

export const metadata: Metadata = {
  title: { absolute: `${owner.nameEn} — Senior Technology Consultant & Solutions Architect · AI Agents and Systems Integration` },
  description:
    "Suhib Asrawi, Senior Technology Consultant and Solutions Architect in Amman, Jordan: 20+ years building, integrating and supporting enterprise systems (Java, C#, SQL Server, Oracle), now applying that depth to AI agents and automation. Six live platforms, two client production systems, printable CV.",
  alternates: alternatesFor("/en", { ar: "/", en: "/en" }),
  openGraph: { ...ogEn, url: "/en" },
};

const featuredIds = ["risha360", "project1", "master-brain", "factories", "baraah", "giz-apca"];

export default function EnglishPage() {
  const featured = featuredIds.map((id) => projects.find((p) => p.id === id)!).filter(Boolean);
  const cover = projects.find((p) => p.id === "baraah")?.screenshots?.[0];
  return (
    <div className="text-left">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd("/en", "en")) }} />

      {/* HERO */}
      <section className="hero-mesh relative overflow-hidden">
        <div className="grid-lines absolute inset-0 -z-0" aria-hidden="true" />
        <HeroNodeField />
        <div className="container-x relative py-16 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="reveal in flex flex-wrap items-center gap-3">
                <div className="eyebrow">{owner.titleEn}</div>
                <LiveAmmanClock locale="en" />
              </div>
              <h1 className="h-display reveal in mt-2" style={{ textWrap: "balance" }}>{owner.taglineEn}</h1>
              <p className="lead reveal in mt-5 max-w-2xl">{owner.summaryEn}</p>
              <div className="reveal in mt-7 flex flex-wrap gap-3">
                <a href={`mailto:${owner.email}?subject=${encodeURIComponent("Engineering role — via portfolio")}`} className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground shadow-sm transition hover:brightness-110">
                  <Briefcase className="size-4" /> Discuss a role or a project
                </a>
                <Link href="/en/journal" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 font-semibold transition hover:border-primary">
                  Engineering journal <ArrowRight className="size-4" />
                </Link>
                <a href="#cv" className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 font-semibold transition hover:border-primary">
                  CV
                </a>
              </div>
            </div>
            {cover ? (
              <div className="reveal in hidden lg:block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface shadow-lg">
                  <Image src={cover.src} alt="Home page of the Bara'ah Alshobaki store demo" fill priority sizes="(min-width: 1024px) 40vw, 0px" className="object-cover object-top" />
                </div>
                <div className="mt-2 text-xs text-muted">Real capture: Bara&apos;ah Alshobaki store demo</div>
              </div>
            ) : null}
          </div>
          <ul className="reveal in mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Verified figures">
            {kpisEn.map((k) => (
              <li key={k.label} className="card p-5">
                <div className="text-3xl font-bold text-primary">{k.value}</div>
                <div className="mt-1 text-sm font-medium">{k.label}</div>
                <div className="text-xs text-muted">{k.hint}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="container-x">
        {/* JOURNEY */}
        <section className="py-14">
          <div className="eyebrow">Engineering journal</div>
          <h2 className="h-section mt-1" style={{ textWrap: "balance" }}>From DOS-era systems troubleshooting to enterprise integration and AI agents</h2>
          <p className="lead mt-2 max-w-3xl">I didn&apos;t just learn the newest framework. I grew through multiple generations of computing. Four eras, ten chapters, one method that never changed.</p>
          <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
            <ol className="grid gap-2">
              {eras.map((e, i) => (
                <li key={e.id} className="card reveal flex items-center gap-4 p-4">
                  <span className="font-mono text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1 font-bold">{e.label.en}</span>
                  <span className="text-xs text-muted">{e.note.en}</span>
                </li>
              ))}
            </ol>
            <div className="card reveal p-5">
              <div className="text-sm font-bold text-primary">The stack changed. The method didn&apos;t.</div>
              <ol className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                {method.map((m, i) => (
                  <li key={m.step.en} className="inline-flex items-center gap-2">
                    <span className="rounded-full bg-surface-2 px-3 py-1 font-medium">{m.step.en}</span>
                    {i < method.length - 1 ? <ArrowRight className="size-3.5 text-muted" aria-hidden="true" /> : null}
                  </li>
                ))}
              </ol>
              <Link href="/en/journal" className="mt-4 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                Read the full journal, with the 30-second recruiter view <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* SELECTED WORK */}
        <section className="py-6">
          <h2 className="h-section mb-2">Selected work</h2>
          <p className="text-sm text-muted mb-5">Status labels instead of internal completion figures. Detailed case studies are in Arabic; every card links to one.</p>
          <div className="grid gap-4 md:grid-cols-2">
            {featured.map((p) => {
              const live = p.links.find((l) => !/github\.com/.test(l.url));
              return (
                <article key={p.id} className="card flex flex-col gap-2 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-bold">{p.nameEn}</h3>
                    <StatusBadge status={p.statusKey} locale="en" className="shrink-0" />
                  </div>
                  <p className="text-sm text-muted">{p.shortEn}</p>
                  <div className="mt-auto flex flex-wrap gap-3 pt-2 text-sm">
                    <Link href={`/projects/${p.id}`} className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">Case study (AR) <ArrowRight className="size-3.5" /></Link>
                    {live ? <a href={live.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted hover:text-foreground">{live.url.replace(/^https?:\/\//, "")} <ExternalLink className="size-3.5" /></a> : null}
                  </div>
                </article>
              );
            })}
          </div>
          <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
            <li className="inline-flex items-center gap-1.5 font-bold text-primary"><CheckCircle2 className="size-4" /> Live:</li>
            {["https://law.risha360.com", "https://v.muqasa-jo.com", "https://www.zahaalaw.com", "https://baraahalshobaki.vercel.app", "https://apca-industrial-ai-academy.vercel.app", "https://ghayari.vercel.app"].map((u) => (
              <li key={u}><a href={u} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">{u.replace(/^https?:\/\//, "")}</a></li>
            ))}
            <li><Link href="/platform#deployments" className="font-semibold text-primary hover:underline">and {deploymentStats.urls - 6} more (full list) →</Link></li>
          </ul>
        </section>

        {/* CV */}
        <section id="cv" className="scroll-mt-24 py-14">
          <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="eyebrow">Curriculum vitae</div>
              <h2 className="h-section">ATS-friendly CV</h2>
            </div>
            <PrintButton label="Print / PDF" />
          </div>
          <article className="cv-page card p-6 sm:p-10 print:border-0 print:p-0 print:shadow-none">
            <header className="border-b border-line pb-5">
              <div className="text-2xl font-bold sm:text-3xl">{owner.fullNameEn}</div>
              <p className="mt-2 font-bold text-primary">{owner.titleEn}</p>
              <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-muted">
                <li className="inline-flex items-center gap-1.5"><MapPin className="size-4" /> {owner.locationEn}</li>
                <li className="inline-flex items-center gap-1.5"><Mail className="size-4" /> <a className="hover:text-primary" href={`mailto:${owner.email}`}>{owner.email}</a></li>
                {owner.publicPhone ? <li className="inline-flex items-center gap-1.5"><Phone className="size-4" /> {owner.phone}</li> : null}
                <li className="inline-flex items-center gap-1.5"><LinkedinIcon className="size-4" /> <a className="hover:text-primary" href={owner.linkedin}>linkedin.com/in/suhib-al-saleh-0a6136264</a></li>
                <li className="inline-flex items-center gap-1.5"><GithubIcon className="size-4" /> <a className="hover:text-primary" href={owner.github}>github.com/{owner.githubHandle}</a></li>
                {owner.employers.map((e) => <li key={e.url}><a className="hover:text-primary" href={e.url}>{e.label}</a></li>)}
              </ul>
            </header>

            <section className="mt-6 break-inside-avoid">
              <h3 className="text-lg font-bold">Professional summary</h3>
              <p className="mt-2 text-sm leading-relaxed">
                Software engineer and technology consultant with more than 20 years building, integrating, supporting, and troubleshooting enterprise and operational systems across banking, education, government-adjacent operations, and commercial clients.
                Core work spans Java and C# backends, Microsoft SQL Server and Oracle, systems integration, Windows applications, Flutter/Dart, access-control and attendance platforms, intelligent queue/customer-experience systems, and AI agents.
                Earlier infrastructure work includes PC/laptop repair, network administration, operating-system installation and recovery, boot diagnostics, Windows safe-mode/recovery workflows, Linux/Ubuntu troubleshooting, peripheral/printer support, and hands-on maintenance of end-user systems.
                Comfortable moving from low-level operational troubleshooting to architecture, automation, integration, and production delivery.
              </p>
            </section>

            <section className="mt-6 break-inside-avoid">
              <h3 className="text-lg font-bold">Core skills</h3>
              <dl className="mt-2 grid gap-1.5 text-sm">
                {coreSkills.map((s) => (
                  <div key={s.group.en} className="grid gap-1 sm:grid-cols-[190px_1fr]">
                    <dt className="font-bold">{s.group.en}</dt>
                    <dd className="text-muted">{s.items}</dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="mt-6">
              <h3 className="text-lg font-bold">Professional experience</h3>
              <div className="mt-3 grid gap-5">
                {experience.map((e) => (
                  <div key={e.role.en + e.org.en} className="break-inside-avoid">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h4 className="font-bold">{e.role.en}</h4>
                      <span className="text-xs text-muted">{e.period.en}</span>
                    </div>
                    <div className="text-sm text-muted">{e.org.en} — {e.place.en}</div>
                    <ul className="mt-1.5 grid gap-1 text-sm">
                      {e.bullets.map((b) => <li key={b.en} className="flex gap-2"><span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />{b.en}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-6 break-inside-avoid">
              <h3 className="text-lg font-bold">Selected projects</h3>
              <ul className="mt-2 grid gap-1 text-sm">
                {selectedProjectsCv.map((p) => <li key={p.en} className="flex gap-2"><span className="mt-2.5 size-1 shrink-0 rounded-full bg-primary" />{p.en}</li>)}
              </ul>
            </section>

            <section className="mt-6 break-inside-avoid">
              <h3 className="text-lg font-bold">Education &amp; professional development</h3>
              <p className="mt-2 text-sm"><span className="font-bold">{education.degree.en}</span> — {education.school.en} ({education.year}). {education.license.en}.</p>
              <p className="mt-1 text-sm text-muted">{education.development.map((d) => d.en).join(" · ")}</p>
              <p className="mt-1 text-sm text-muted">Languages: {education.languages.en}</p>
            </section>
          </article>
        </section>

        <section className="pb-4">
          <ContactCta locale="en" />
        </section>
      </div>
    </div>
  );
}
