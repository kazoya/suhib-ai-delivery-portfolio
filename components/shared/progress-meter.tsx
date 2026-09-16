import { cn } from "@/lib/utils";

export function ProgressMeter({ value, className, label }: { value: number; className?: string; label?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div
        className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2"
        role="meter"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        aria-label={label ?? "نسبة الإنجاز"}
      >
        <div className="h-full rounded-full bg-primary transition-[width] duration-700" style={{ width: `${value}%` }} />
      </div>
      <span className="tabular w-10 text-end text-xs font-bold text-muted">{value}%</span>
    </div>
  );
}
