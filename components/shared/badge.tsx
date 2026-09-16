import { cn } from "@/lib/utils";
import { statusLabel, type Confidence, type StatusKey, type Tier } from "@/data/portfolio";

const tierStyle: Record<Tier, string> = {
  live: "bg-primary-soft text-primary",
  product: "bg-info-soft text-info",
  explore: "bg-gold-soft text-gold",
};
export const tierLabel: Record<Tier, string> = { live: "عمل موثّق", product: "منتج منشور", explore: "استكشافي" };

export function TierBadge({ tier, className }: { tier: Tier; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold", tierStyle[tier], className)}>
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {tierLabel[tier]}
    </span>
  );
}

const statusStyle: Record<StatusKey, string> = {
  live: "bg-primary-soft text-primary",
  pilot: "bg-info-soft text-info",
  prototype: "bg-gold-soft text-gold",
  simulation: "bg-surface-2 text-foreground",
  internal: "bg-surface-2 text-muted",
};

export function StatusBadge({ status, locale = "ar", className }: { status: StatusKey; locale?: "ar" | "en"; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold", statusStyle[status], className)}>
      <span className="size-1.5 rounded-full bg-current" aria-hidden="true" />
      {statusLabel[status][locale]}
    </span>
  );
}

const levelStyle: Record<Confidence, string> = {
  عالي: "bg-primary-soft text-primary",
  متوسط: "bg-info-soft text-info",
  استكشافي: "bg-gold-soft text-gold",
  تاريخي: "bg-surface-2 text-muted",
};

export function LevelBadge({ level }: { level: Confidence }) {
  return <span className={cn("inline-block rounded-full px-2.5 py-0.5 text-xs font-bold", levelStyle[level])}>{level}</span>;
}

export function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("ltr inline-block rounded-md bg-surface-2 px-2 py-0.5 text-[11px] font-medium text-muted", className)}>
      {children}
    </span>
  );
}
