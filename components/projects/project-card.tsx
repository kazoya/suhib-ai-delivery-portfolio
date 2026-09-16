import Image from "next/image";
import Link from "next/link";
import { ArrowUpLeft, ExternalLink, Lock } from "lucide-react";
import { statusLabel, type Project } from "@/data/portfolio";
import { Chip, StatusBadge } from "@/components/shared/badge";

export function ProjectCard({ p, compact = false }: { p: Project; compact?: boolean }) {
  const shot = p.screenshots?.[0];
  const live = p.links.find((l) => !/github\.com/.test(l.url));
  return (
    <article className="card reveal group relative flex flex-col overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md">
      {shot && !compact ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-surface-2">
          <Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover object-top" />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold leading-snug">
            <Link href={`/projects/${p.id}`} className="after:absolute after:inset-0 hover:text-primary">
              {p.name}
            </Link>
          </h3>
          <StatusBadge status={p.statusKey} className="shrink-0" />
        </div>
        <p className="text-sm">{p.problem}</p>
        {!compact ? (
          <dl className="grid gap-1 text-xs">
            <div className="flex gap-2"><dt className="shrink-0 font-bold text-muted">دوري:</dt><dd>{p.role}</dd></div>
            <div className="flex gap-2"><dt className="shrink-0 font-bold text-muted">النتيجة:</dt><dd>{p.outcome}</dd></div>
            <div className="flex gap-2"><dt className="shrink-0 font-bold text-muted">الدليل:</dt><dd>{p.evidenceType}</dd></div>
          </dl>
        ) : (
          <p className="text-xs text-muted">{p.outcome}</p>
        )}
        {!compact ? (
          <div className="flex flex-wrap gap-1.5">
            {p.stack.slice(0, 5).map((s) => <Chip key={s}>{s}</Chip>)}
          </div>
        ) : null}
        <div className="mt-auto flex items-center justify-between gap-3 pt-1 text-sm">
          <span className="relative z-10 inline-flex items-center gap-1 font-medium text-primary">
            دراسة الحالة <ArrowUpLeft className="size-4 transition group-hover:-translate-x-0.5" />
          </span>
          {live ? (
            <a href={live.url} target="_blank" rel="noopener noreferrer" className="relative z-10 inline-flex items-center gap-1 text-muted hover:text-foreground">
              <ExternalLink className="size-4" /> {statusLabel[p.statusKey].ar === "حيّ" ? "الموقع الحي" : live.label}
            </a>
          ) : (
            <span className="inline-flex items-center gap-1 text-xs text-muted"><Lock className="size-3.5" /> بلا رابط عام</span>
          )}
        </div>
      </div>
    </article>
  );
}
