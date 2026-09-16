import Link from "next/link";
import { ArrowUpLeft, ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { Chip, TierBadge } from "@/components/shared/badge";
import { ProgressMeter } from "@/components/shared/progress-meter";

export function ProjectCard({ p, compact = false }: { p: Project; compact?: boolean }) {
  return (
    <article className="card reveal group flex flex-col gap-3 p-5 transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-bold leading-snug">
          <Link href={`/projects/${p.id}`} className="after:absolute after:inset-0 hover:text-primary">
            {p.name}
          </Link>
        </h3>
        <TierBadge tier={p.tier} className="shrink-0" />
      </div>
      <div className="text-sm text-muted">{p.status}</div>
      {p.progress > 0 ? <ProgressMeter value={p.progress} /> : null}
      <p className="text-sm">{p.short}</p>
      {!compact ? (
        <div className="flex flex-wrap gap-1.5">
          {p.stack.slice(0, 6).map((s) => <Chip key={s}>{s}</Chip>)}
        </div>
      ) : null}
      <div className="mt-auto flex items-center justify-between gap-3 pt-1 text-sm">
        <span className="relative z-10 inline-flex items-center gap-1 font-medium text-primary">
          التفاصيل والدليل <ArrowUpLeft className="size-4 transition group-hover:-translate-x-0.5" />
        </span>
        {p.links.length ? (
          <a
            href={p.links[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-1 text-muted hover:text-foreground"
          >
            <ExternalLink className="size-4" /> {p.links[0].label}
          </a>
        ) : (
          <span className="inline-flex items-center gap-1 text-xs text-muted"><Lock className="size-3.5" /> بلا رابط عام</span>
        )}
      </div>
      <div className="relative" />
    </article>
  );
}
