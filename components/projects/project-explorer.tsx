"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { Project, Tier } from "@/data/portfolio";
import { tierLabel } from "@/components/shared/badge";
import { ProjectCard } from "@/components/projects/project-card";
import { cn } from "@/lib/utils";

const TIERS: (Tier | "all")[] = ["all", "live", "product", "explore"];

export function ProjectExplorer({ projects }: { projects: Project[] }) {
  const [tier, setTier] = useState<Tier | "all">("all");
  const [tech, setTech] = useState<string>("all");
  const [q, setQ] = useState("");

  const techs = useMemo(() => {
    const count = new Map<string, number>();
    projects.forEach((p) => p.stack.forEach((s) => count.set(s, (count.get(s) ?? 0) + 1)));
    return Array.from(count.entries()).filter(([, n]) => n >= 2).sort((a, b) => b[1] - a[1]).map(([s]) => s);
  }, [projects]);

  const list = useMemo(() => {
    const s = q.trim().toLowerCase();
    return projects.filter(
      (p) =>
        (tier === "all" || p.tier === tier) &&
        (tech === "all" || p.stack.includes(tech)) &&
        (!s || (p.name + " " + p.nameEn + " " + p.short + " " + p.stack.join(" ")).toLowerCase().includes(s)),
    );
  }, [projects, tier, tech, q]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-2">
        <div role="tablist" aria-label="نوع المشروع" className="flex flex-wrap gap-1 rounded-full border border-line bg-surface p-1">
          {TIERS.map((t) => (
            <button
              key={t}
              role="tab"
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
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="ابحث في الاسم أو التقنية…"
            className="h-10 w-full rounded-full border border-line bg-surface pe-10 ps-4 text-sm outline-none transition focus:border-primary"
            aria-label="بحث في الأعمال"
          />
        </label>
      </div>

      <div className="mb-6 flex flex-wrap gap-1.5" aria-label="التقنية">
        <button onClick={() => setTech("all")} className={cn("rounded-md px-2.5 py-1 text-xs font-medium", tech === "all" ? "bg-primary-soft text-primary" : "bg-surface-2 text-muted hover:text-foreground")}>كل التقنيات</button>
        {techs.map((t) => (
          <button key={t} onClick={() => setTech(t === tech ? "all" : t)} className={cn("ltr rounded-md px-2.5 py-1 text-xs font-medium", tech === t ? "bg-primary-soft text-primary" : "bg-surface-2 text-muted hover:text-foreground")}>
            {t}
          </button>
        ))}
      </div>

      <p className="mb-4 text-sm text-muted" aria-live="polite">{list.length} من {projects.length}</p>
      {list.length ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => <ProjectCard key={p.id} p={p} />)}
        </div>
      ) : (
        <div className="card p-10 text-center text-muted">لا نتائج تطابق البحث.</div>
      )}
    </div>
  );
}
