"use client";

import { useId, useState } from "react";
import { categoryLabel, eras, tracks, type Category } from "@/data/journey";
import { dirOf, t, type Locale } from "@/lib/i18n";
import { journalCopy } from "@/lib/journal-copy";
import { cn } from "@/lib/utils";

const FILTERS: (Category | "all")[] = ["all", "systems", "software", "data", "integration", "automation", "ai"];

/**
 * Technology generations: one row per track, items ordered by era.
 * Current competencies are filled; historical ones are outlined.
 */
export function TechnologyGenerations({ locale = "ar" }: { locale?: Locale }) {
  const [filter, setFilter] = useState<Category | "all">("all");
  const id = useId();
  const c = journalCopy[locale];
  const rtl = dirOf(locale) === "rtl";
  const visible = tracks.filter((tr) => filter === "all" || tr.category === filter);

  return (
    <div className="card overflow-hidden p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div role="tablist" aria-label={c.filters} className="flex flex-wrap gap-1 rounded-full border border-line bg-surface p-1">
          {FILTERS.map((f) => (
            <button
              key={f}
              role="tab"
              type="button"
              aria-selected={filter === f}
              aria-controls={`${id}-panel`}
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm font-medium transition",
                filter === f ? "bg-primary text-primary-foreground" : "text-muted hover:text-foreground",
              )}
            >
              {t(categoryLabel[f], locale)}
            </button>
          ))}
        </div>
        <ul className="flex flex-wrap gap-4 text-xs text-muted" aria-label="legend">
          <li className="inline-flex items-center gap-1.5"><span className="inline-block size-3 rounded-sm bg-primary" aria-hidden="true" /> {c.legendCurrent}</li>
          <li className="inline-flex items-center gap-1.5"><span className="inline-block size-3 rounded-sm border border-line bg-surface" aria-hidden="true" /> {c.legendPast}</li>
        </ul>
      </div>

      <div id={`${id}-panel`} role="tabpanel" dir="ltr" className="mt-5 overflow-x-auto">
        <div className="min-w-[640px]">
          <div className="grid grid-cols-[140px_repeat(4,1fr)] gap-2 border-b border-line pb-2 text-[11px] font-bold uppercase tracking-wider text-muted">
            <div />
            {eras.map((e) => <div key={e.id}>{t(e.label, locale)}</div>)}
          </div>
          <p className="sr-only" aria-live="polite">{c.count(visible.length)}</p>
          {visible.map((tr) => (
            <div key={tr.id} className="grid grid-cols-[140px_repeat(4,1fr)] items-start gap-2 border-b border-line py-3 last:border-0">
              <div className={cn("text-sm font-bold", rtl && "text-right")} dir={rtl ? "rtl" : "ltr"}>{t(tr.title, locale)}</div>
              {eras.map((e) => {
                const items = tr.items.filter((i) => i.era === e.id);
                return (
                  <ul key={e.id} className="flex flex-wrap gap-1.5">
                    {items.map((i) => (
                      <li
                        key={i.label}
                        className={cn(
                          "rounded-md px-2 py-1 text-xs leading-tight",
                          i.current ? "bg-primary font-semibold text-primary-foreground" : "border border-line bg-surface text-muted",
                        )}
                      >
                        {i.label}
                      </li>
                    ))}
                  </ul>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
