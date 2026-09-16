import Link from "next/link";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
import { journalEntries, eras } from "@/data/journey";
import { t, type Locale } from "@/lib/i18n";

const fields = [
  ["challenge", { ar: "التحدي", en: "Challenge" }],
  ["context", { ar: "السياق والقيود", en: "Context and constraints" }],
  ["decision", { ar: "القرار", en: "Decision" }],
  ["implementation", { ar: "التنفيذ", en: "Implementation" }],
  ["verification", { ar: "التحقق", en: "Verification" }],
  ["result", { ar: "النتيجة", en: "Result" }],
  ["lesson", { ar: "الدرس", en: "Lesson learned" }],
  ["today", { ar: "كيف يظهر المبدأ في عملي اليوم", en: "How the principle appears in my work today" }],
] as const;

export function JournalEntries({ locale = "ar" }: { locale?: Locale }) {
  const Arrow = locale === "en" ? ArrowUpRight : ArrowUpLeft;
  const evidenceLabel = locale === "en" ? "Evidence" : "الدليل";
  return (
    <div className="grid gap-6">
      {journalEntries.map((e) => (
        <article key={e.id} id={`entry-${e.id}`} className="card reveal scroll-mt-24 p-6 sm:p-8">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-primary-soft px-2.5 py-0.5 font-bold text-primary">{t(e.status, locale)}</span>
            <span className="text-muted">{t(eras.find((x) => x.id === e.era)!.label, locale)}</span>
          </div>
          <h3 className="mt-2 text-xl font-bold leading-snug" style={{ textWrap: "balance" }}>{t(e.title, locale)}</h3>
          <dl className="mt-5 grid gap-x-8 gap-y-4 md:grid-cols-2">
            {fields.map(([key, label]) => (
              <div key={key} className={key === "today" ? "md:col-span-2 rounded-xl border border-primary/30 bg-primary-soft/40 p-4" : ""}>
                <dt className="text-[11px] font-bold uppercase tracking-wider text-muted">{t(label, locale)}</dt>
                <dd className="mt-1 text-sm leading-relaxed">{t(e[key], locale)}</dd>
              </div>
            ))}
          </dl>
          {e.evidence ? (
            <Link href={e.evidence.href} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
              {evidenceLabel}: {t(e.evidence.label, locale)} <Arrow className="size-4" />
            </Link>
          ) : null}
        </article>
      ))}
    </div>
  );
}
