import { method } from "@/data/journey";
import { t, type Locale } from "@/lib/i18n";

const copy = {
  ar: { then: "في عصر DOS", now: "في الإنتاج اليوم" },
  en: { then: "In the DOS era", now: "In production today" },
};

/** "THE STACK CHANGED. THE METHOD DIDN'T." — seven steps, then vs now. */
export function MethodStrip({ locale = "ar" }: { locale?: Locale }) {
  const c = copy[locale];
  return (
    <div className="method-strip rounded-2xl border border-line bg-surface p-4 sm:p-6">
      <ol className="grid gap-3 md:grid-cols-7" aria-label={locale === "en" ? "The method" : "الطريقة"}>
        {method.map((m, i) => (
          <li key={m.step.en} className="method-step relative rounded-xl bg-surface-2/60 p-3">
            <div className="flex items-center gap-2">
              <span className="ltr font-mono text-[11px] text-muted">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-bold">{t(m.step, locale)}</span>
            </div>
            <dl className="mt-2 grid gap-2 text-xs">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-muted">{c.then}</dt>
                <dd className="text-muted">{t(m.then, locale)}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-wider text-primary">{c.now}</dt>
                <dd>{t(m.now, locale)}</dd>
              </div>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}
