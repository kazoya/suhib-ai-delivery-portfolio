import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { deployments, deploymentStats, platformSummary } from "@/data/portfolio";
import { SectionHeading } from "@/components/shared/section-heading";
import { ContactCta } from "@/components/shared/contact-cta";
import { platformCopy } from "@/lib/page-copy";
import { isLtr, localePath, type Locale } from "@/lib/i18n";

const factValues = [platformSummary.projects, 8, platformSummary.entries, platformSummary.suggestions];

export function LocalePlatform({ locale }: { locale: Locale }) {
  const c = platformCopy[locale];
  const Arrow = isLtr(locale) ? ArrowRight : ArrowLeft;
  return (
    <div className="container-x py-12">
      <SectionHeading as="h1" eyebrow={c.eyebrow} title={c.title} lead={c.lead} />
      <ul className="reveal mb-8 grid gap-3 sm:grid-cols-4" aria-label={c.factsLabel}>
        {c.facts.map((f, i) => (
          <li key={f.k} className="card p-4">
            <div className="text-2xl font-bold text-primary">{factValues[i]}</div>
            <div className="text-sm">{f.k}</div>
            <div className="text-xs text-muted">{f.hint}</div>
          </li>
        ))}
      </ul>

      <section id="deployments" className="scroll-mt-24">
        <SectionHeading
          eyebrow={c.deployEyebrow}
          title={c.deployTitle(deploymentStats.urls, deploymentStats.repos)}
          lead={c.deployLead(deploymentStats.products, deploymentStats.factories, deploymentStats.customDomains)}
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {(["product", "factory"] as const).map((kind) => (
            <div key={kind} className="card reveal p-5">
              <h3 className="font-bold">{kind === "product" ? c.products : c.factories}</h3>
              <ul className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2">
                {deployments.filter((d) => d.kind === kind).map((d) => (
                  <li key={d.url}>
                    <a href={d.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary">
                      <ExternalLink className="size-3.5 shrink-0 text-muted" />
                      <span>{d.label}</span>
                      {d.customDomain ? <span className="rounded-full bg-primary-soft px-1.5 text-[10px] font-bold text-primary">{c.customDomain}</span> : null}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="reveal mt-10">
        <Link href={localePath(locale, "/projects/master-brain")} className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
          {c.caseStudy} <Arrow className="size-4" />
        </Link>
      </div>
      <div className="mt-16">
        <ContactCta locale={locale} />
      </div>
    </div>
  );
}
