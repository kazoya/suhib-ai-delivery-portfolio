import { SectionHeading } from "@/components/shared/section-heading";
import { ContactCta } from "@/components/shared/contact-cta";
import { JourneyChapters, JourneyIndex } from "@/components/journey/journey-chapters";
import { MethodStrip } from "@/components/journey/method-strip";
import { TechnologyGenerations } from "@/components/journey/technology-generations";
import { ClientMode, RecruiterView } from "@/components/journey/recruiter-view";
import { JournalEntries } from "@/components/journey/journal-entries";
import Image from "next/image";
import { eras, funGallery, security } from "@/data/journey";
import { t, type Locale } from "@/lib/i18n";
import { journalCopy } from "@/lib/journal-copy";
import { HeroNodeField, JournalReadingProgress } from "@/components/effects/hero-effects";
import { LiveAmmanClock } from "@/components/effects/live-amman-clock";

export function JournalPageContent({ locale = "ar" }: { locale?: Locale }) {
  const c = journalCopy[locale];
  return (
    <div className="container-x py-12">
      <JournalReadingProgress />
      {/* hero */}
      <div className="relative">
        <HeroNodeField />
      <header className="relative max-w-3xl">
        <div className="flex flex-wrap items-center gap-3">
          <div className="eyebrow">{c.eyebrow}</div>
          <LiveAmmanClock locale={locale} />
        </div>
        <h1 className="h-display mt-2" style={{ textWrap: "balance" }}>
          {c.h1}
          <span className="cursor-blink" aria-hidden="true" />
        </h1>
        <p className="lead mt-5">{c.lead}</p>
        <p className="mt-4 border-s-4 border-primary ps-4 font-bold">{c.thesis}</p>
        {c.bridge ? <p className="mt-3 max-w-2xl text-sm text-muted">{c.bridge}</p> : null}
        <ol className="mt-6 flex flex-wrap gap-2 text-xs" aria-label={c.eras}>
          {eras.map((e) => (
            <li key={e.id}>
              <a href={`#era-${e.id}`} className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 hover:border-primary">
                <span className="font-bold">{t(e.label, locale)}</span>
                <span className="ltr text-muted">{t(e.note, locale)}</span>
              </a>
            </li>
          ))}
        </ol>
      </header>
      </div>

      {/* recruiter view */}
      <section id="recruiter" className="mt-14 scroll-mt-24" aria-labelledby="recruiter-t">
        <SectionHeading id="recruiter-t" eyebrow={c.recruiterEyebrow} title={c.recruiterTitle} />
        <RecruiterView locale={locale} />
      </section>

      {/* map */}
      <section className="mt-14" aria-labelledby="map-t">
        <SectionHeading id="map-t" eyebrow={c.mapEyebrow} title={c.mapTitle} lead={c.mapLead} />
        <div className="card reveal p-3">
          <JourneyIndex locale={locale} />
        </div>
      </section>

      {/* chapters */}
      <section className="mt-14" aria-labelledby="chapters-t">
        <SectionHeading id="chapters-t" eyebrow={c.chaptersEyebrow} title={c.chaptersTitle} />
        <JourneyChapters locale={locale} />
      </section>

      {/* method */}
      <section id="method" className="mt-16 scroll-mt-24" aria-labelledby="method-t">
        <SectionHeading id="method-t" eyebrow={c.methodEyebrow} title={c.methodTitle} lead={c.methodLead} />
        <div className="reveal"><MethodStrip locale={locale} /></div>
      </section>

      {/* generations */}
      <section id="generations" className="mt-16 scroll-mt-24" aria-labelledby="gen-t">
        <SectionHeading id="gen-t" eyebrow={c.genEyebrow} title={c.genTitle} lead={c.genLead} />
        <div className="reveal"><TechnologyGenerations locale={locale} /></div>
      </section>

      {/* client mode */}
      <section id="client" className="mt-16 scroll-mt-24" aria-labelledby="client-t">
        <SectionHeading id="client-t" eyebrow={c.clientEyebrow} title={c.clientTitle} lead={c.clientLead} />
        <ClientMode locale={locale} />
      </section>

      {/* entries */}
      <section id="entries" className="mt-16 scroll-mt-24" aria-labelledby="entries-t">
        <SectionHeading id="entries-t" eyebrow={c.entriesEyebrow} title={c.entriesTitle} lead={c.entriesLead} />
        <JournalEntries locale={locale} />
      </section>

      {/* security */}
      <section id="security" className="mt-16 scroll-mt-24" aria-labelledby="security-t">
        <SectionHeading id="security-t" eyebrow={c.secEyebrow} title={c.secTitle} lead={c.secLead} />
        <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <figure className="card reveal overflow-hidden">
            <Image src={security.screenshot.src} alt={t(security.screenshot.alt, locale)} width={security.screenshot.width} height={security.screenshot.height} sizes="(min-width: 1024px) 55vw, 100vw" className="h-auto w-full" />
            <figcaption className="px-4 py-2 text-xs text-muted">{c.secShot}</figcaption>
          </figure>
          <div className="grid content-start gap-4">
            <ul className="grid gap-2 sm:grid-cols-2">
              {security.facts.map((f) => (
                <li key={f.value} className="card reveal p-4">
                  <div className="ltr text-end text-2xl font-bold text-primary">{f.value}</div>
                  <div className="text-xs text-muted">{t(f.label, locale)}</div>
                </li>
              ))}
            </ul>
            <div className="card reveal p-4">
              <div className="text-xs font-bold text-muted">{c.secPractice}</div>
              <ul className="mt-2 grid gap-1.5 text-sm">
                {security.practice.map((p) => <li key={p.en} className="flex gap-2"><span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary" />{t(p, locale)}</li>)}
              </ul>
            </div>
            <p className="rounded-xl border border-gold/40 bg-gold-soft p-3 text-xs">{t(security.disclaimer, locale)}</p>
          </div>
        </div>
      </section>

      {/* fun */}
      <section id="fun" className="mt-16 scroll-mt-24" aria-labelledby="fun-t">
        <SectionHeading id="fun-t" eyebrow={c.funEyebrow} title={c.funTitle} lead={c.funLead} />
        <ul className="grid gap-4 md:grid-cols-3">
          {funGallery.map((g) => (
            <li key={g.src} className="card reveal overflow-hidden">
              <Image src={g.src} alt={t(g.caption, locale)} width={g.width} height={g.height} sizes="(min-width: 768px) 33vw, 100vw" className="h-auto w-full" />
              <p className="px-4 py-3 text-xs text-muted">{t(g.caption, locale)}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* truth */}
      <section className="mt-16 rounded-2xl border border-gold/40 bg-gold-soft p-6 reveal" aria-labelledby="truth-t">
        <h2 id="truth-t" className="font-bold text-gold">{c.truthTitle}</h2>
        <ul className="mt-3 grid gap-2 text-sm">
          {c.truth.map((x) => <li key={x} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />{x}</li>)}
        </ul>
      </section>

      <div className="mt-12 reveal">
        <ContactCta locale={locale} />
      </div>
    </div>
  );
}
