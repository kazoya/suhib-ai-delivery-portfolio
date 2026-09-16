import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight, Quote } from "lucide-react";
import { chapters, eras, type Chapter } from "@/data/journey";
import { t, type Locale } from "@/lib/i18n";

const labels = {
  ar: { handsOn: "خبرة عملية", memory: "ذاكرة هندسية", lesson: "الدرس الذي بقي", today: "كيف يظهر في عملي اليوم", proof: "الدليل", classification: "التصنيف" },
  en: { handsOn: "Hands-on", memory: "Engineering memory", lesson: "Lesson that survived", today: "How it shows up in my work today", proof: "Proof", classification: "Classification" },
};

function ChapterCard({ c, locale }: { c: Chapter; locale: Locale }) {
  const l = labels[locale];
  const Arrow = locale === "en" ? ArrowUpRight : ArrowUpLeft;
  return (
    <article id={`chapter-${c.id}`} className="reveal scroll-mt-24 grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]">
      <div className="card p-6 sm:p-7">
        <div className="flex items-baseline gap-3">
          <span className="ltr font-mono text-sm font-bold text-primary">{c.n}</span>
          <span className="text-xs text-muted">{t(eras.find((e) => e.id === c.era)!.label, locale)}</span>
        </div>
        <h3 className="mt-1 text-xl font-bold leading-snug sm:text-2xl" style={{ textWrap: "balance" }}>{t(c.title, locale)}</h3>
        <p className="mt-3 text-sm text-muted sm:text-base">{t(c.intro, locale)}</p>
        <div className="mt-4 text-xs font-bold text-muted">{l.handsOn}</div>
        <ul className="mt-1.5 flex flex-wrap gap-1.5">
          {c.handsOn.map((h) => (
            <li key={h.en} className="rounded-md bg-surface-2 px-2 py-0.5 text-xs">{t(h, locale)}</li>
          ))}
        </ul>
        <div className="mt-4 border-t border-line pt-3 text-xs text-muted">
          <span className="font-bold">{l.classification}:</span> {t(c.classification, locale)}
        </div>
      </div>

      <div className="grid gap-4">
        <div className="memory-card rounded-2xl border border-gold/40 bg-gold-soft p-5">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gold">
            <Quote className="size-3.5" /> {l.memory}
          </div>
          <p className="mt-2 text-sm leading-relaxed">{t(c.memory.text, locale)}</p>
          <div className="mt-3 border-t border-gold/30 pt-3">
            <div className="text-[11px] font-bold text-gold">{l.lesson}</div>
            <p className="mt-0.5 font-bold">{t(c.memory.lesson, locale)}</p>
          </div>
        </div>
        <div className="rounded-2xl border border-primary/30 bg-primary-soft/40 p-5">
          <div className="text-[11px] font-bold uppercase tracking-wider text-primary">{l.today}</div>
          <p className="mt-2 text-sm leading-relaxed">{t(c.today, locale)}</p>
          {c.proof ? (
            <Link href={c.proof.href} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              {l.proof}: {t(c.proof.label, locale)} <Arrow className="size-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}

export function JourneyChapters({ locale = "ar" }: { locale?: Locale }) {
  return (
    <div className="grid gap-10">
      {eras.map((era) => {
        const list = chapters.filter((c) => c.era === era.id);
        return (
          <section key={era.id} id={`era-${era.id}`} aria-labelledby={`era-${era.id}-t`} className="scroll-mt-24">
            <div className="era-rail mb-5 flex items-center gap-3">
              <h3 id={`era-${era.id}-t`} className="text-sm font-bold text-primary">{t(era.label, locale)}</h3>
              <span className="ltr text-xs text-muted">{t(era.note, locale)}</span>
              <span className="h-px flex-1 bg-line" aria-hidden="true" />
            </div>
            <div className="grid gap-8">
              {list.map((c) => <ChapterCard key={c.id} c={c} locale={locale} />)}
            </div>
          </section>
        );
      })}
    </div>
  );
}

/** Compact vertical map of the ten chapters, used as an in-page index. */
export function JourneyIndex({ locale = "ar" }: { locale?: Locale }) {
  return (
    <ol className="grid gap-1 sm:grid-cols-2 lg:grid-cols-5" aria-label={locale === "en" ? "Chapters" : "الفصول"}>
      {chapters.map((c) => (
        <li key={c.id}>
          <a href={`#chapter-${c.id}`} className="flex items-baseline gap-2 rounded-xl px-3 py-2 text-sm hover:bg-surface-2">
            <span className="ltr font-mono text-xs font-bold text-primary">{c.n}</span>
            <span className="leading-snug">{t(c.title, locale)}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}
