"use client";

import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { Project, Tier } from "@/data/portfolio";
import { tierLabel } from "@/components/shared/badge";
import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/utils";

const TIERS: (Tier | "all")[] = ["all", "live", "product", "explore"];

const matchesQuery = (p: Project, s: string) =>
  !s || (p.name + " " + p.nameEn + " " + p.short + " " + p.stack.join(" ")).toLowerCase().includes(s);

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [tier, setTier] = useState<Tier | "all">("all");
  const [tech, setTech] = useState<string>("all");
  const [q, setQ] = useState("");
  const s = q.trim().toLowerCase();

  // projects that pass the tier + search filters; the tech chips are derived from this
  // set so a chip never promises results the current tier cannot deliver
  const scoped = useMemo(() => projects.filter((p) => (tier === "all" || p.tier === tier) && matchesQuery(p, s)), [projects, tier, s]);

  const techs = useMemo(() => {
    const all = new Map<string, number>();
    projects.forEach((p) => p.stack.forEach((t) => all.set(t, (all.get(t) ?? 0) + 1)));
    const inScope = new Map<string, number>();
    scoped.forEach((p) => p.stack.forEach((t) => inScope.set(t, (inScope.get(t) ?? 0) + 1)));
    return Array.from(all.entries())
      .filter(([, n]) => n >= 2)
      .sort((a, b) => b[1] - a[1])
      .map(([t]) => ({ t, n: inScope.get(t) ?? 0 }));
  }, [projects, scoped]);

  const list = useMemo(() => scoped.filter((p) => tech === "all" || p.stack.includes(tech)), [scoped, tech]);

  const active: string[] = [];
  if (tier !== "all") active.push(tierLabel[tier]);
  if (tech !== "all") active.push(tech);
  if (s) active.push(`«${q.trim()}»`);

  function reset() {
    setTier("all");
    setTech("all");
    setQ("");
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <div role="tablist" aria-label="نوع المشروع" className="flex flex-wrap gap-1 rounded-full border border-line bg-surface p-1">
          {TIERS.map((t) => (
            <button
              key={t}
              role="tab"
              type="button"
              aria-selected={tier === t}
              onClick={() => setTier(t)}
              className={cn("rounded-full px-3.5 py-1.5 text-sm font-medium transition", tier === t ? "bg-primary text-primary-foreground" : "text-muted hover:text-foreground")}
            >
              {t === "all" ? `الكل (${projects.length})` : `${tierLabel[t]} (${projects.filter((p) => p.tier === t).length})`}
            </button>
          ))}
        </div>
        <label className="relative flex-1 min-w-[220px]">
          <Search className="pointer-events-none absolute end-3 top-1/2 size-4 -translate-y-1/2 text-muted" />
          <input
            id="projects-search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ابحث في الاسم أو التقنية…"
            className="h-10 w-full rounded-full border border-line bg-surface pe-10 ps-4 text-sm outline-none transition focus:border-primary"
            aria-label="بحث في الأعمال"
          />
        </label>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-1.5" role="group" aria-label="التقنية">
        <button
          type="button"
          onClick={() => setTech("all")}
          aria-pressed={tech === "all"}
          className={cn("rounded-md px-2.5 py-1 text-xs font-medium", tech === "all" ? "bg-primary-soft text-primary" : "bg-surface-2 text-muted hover:text-foreground")}
        >
          كل التقنيات
        </button>
        {techs.map(({ t, n }) => {
          const selected = tech === t;
          const empty = n === 0 && !selected;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setTech(selected ? "all" : t)}
              aria-pressed={selected}
              disabled={empty}
              title={empty ? "لا مشاريع بهذه التقنية ضمن التصفية الحالية" : undefined}
              className={cn(
                "ltr rounded-md px-2.5 py-1 text-xs font-medium transition",
                selected ? "bg-primary-soft text-primary" : "bg-surface-2 text-muted hover:text-foreground",
                empty && "cursor-not-allowed opacity-40 hover:text-muted",
              )}
            >
              {t} ({n})
            </button>
          );
        })}
      </div>

      <p className="mb-4 flex flex-wrap items-center gap-2 text-sm text-muted" aria-live="polite">
        <span>{list.length} من {projects.length}</span>
        {active.length ? (
          <>
            <span>· التصفية: {active.join(" + ")}</span>
            <button type="button" onClick={reset} className="inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 text-xs hover:border-primary hover:text-foreground">
              <X className="size-3" /> مسح الفلاتر
            </button>
          </>
        ) : null}
      </p>

      {list.length ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      ) : (
        <div className="card p-10 text-center">
          <p className="font-bold">لا نتائج تطابق التصفية: {active.join(" + ")}</p>
          <p className="mt-1 text-sm text-muted">جرّب إزالة أحد الشروط أو ابدأ من جديد.</p>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {tech !== "all" ? <button type="button" onClick={() => setTech("all")} className="rounded-full border border-line px-3 py-1 text-sm hover:border-primary">إزالة «{tech}»</button> : null}
            {tier !== "all" ? <button type="button" onClick={() => setTier("all")} className="rounded-full border border-line px-3 py-1 text-sm hover:border-primary">إزالة «{tierLabel[tier]}»</button> : null}
            {s ? <button type="button" onClick={() => setQ("")} className="rounded-full border border-line px-3 py-1 text-sm hover:border-primary">مسح البحث</button> : null}
            <button type="button" onClick={reset} className="rounded-full bg-primary px-3 py-1 text-sm font-semibold text-primary-foreground hover:brightness-110">مسح الفلاتر</button>
          </div>
        </div>
      )}
    </div>
  );
}
