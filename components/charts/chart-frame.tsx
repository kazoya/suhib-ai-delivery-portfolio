"use client";

import { useId, useState } from "react";
import { Table2, BarChart3 } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Wraps a chart with a title, a note, and a table view toggle (accessibility relief).
 * The chart region is forced LTR so SVG geometry is never mirrored by the page direction.
 */
export function ChartFrame({
  title,
  note,
  legend,
  table,
  children,
  className,
  height = 280,
}: {
  title: string;
  note?: string;
  legend?: { label: string; color: string }[];
  table: { head: string[]; rows: (string | number)[][] };
  children: React.ReactNode;
  className?: string;
  height?: number;
}) {
  const [showTable, setShowTable] = useState(false);
  const id = useId();
  return (
    <figure className={cn("card p-5", className)} aria-labelledby={`${id}-t`}>
      <div className="mb-3 flex items-start justify-between gap-3">
        <div>
          <figcaption id={`${id}-t`} className="font-bold">{title}</figcaption>
          {note ? <div className="mt-0.5 text-xs text-muted">{note}</div> : null}
        </div>
        <button
          type="button"
          onClick={() => setShowTable((v) => !v)}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line px-2.5 py-1 text-xs text-muted hover:border-primary hover:text-foreground"
          aria-pressed={showTable}
        >
          {showTable ? <BarChart3 className="size-3.5" /> : <Table2 className="size-3.5" />}
          {showTable ? "الرسم" : "جدول"}
        </button>
      </div>
      {legend && legend.length > 1 ? (
        <ul className="mb-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted" aria-label="مفتاح الألوان">
          {legend.map((l) => (
            <li key={l.label} className="inline-flex items-center gap-1.5">
              <span className="inline-block size-2.5 rounded-sm" style={{ background: l.color }} aria-hidden="true" />
              {l.label}
            </li>
          ))}
        </ul>
      ) : null}
      {showTable ? (
        <div className="overflow-x-auto rounded-xl border border-line">
          <table className="w-full text-sm">
            <thead>
              <tr>{table.head.map((h) => <th key={h} className="bg-surface-2 px-3 py-2 text-start font-bold">{h}</th>)}</tr>
            </thead>
            <tbody>
              {table.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j} className={cn("border-t border-line px-3 py-1.5", j > 0 && "tabular")}>{c}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div dir="ltr" style={{ height }} className="text-xs">
          {children}
        </div>
      )}
    </figure>
  );
}

export const tooltipStyle = {
  contentStyle: {
    background: "var(--surface)",
    border: "1px solid var(--line)",
    borderRadius: 12,
    color: "var(--foreground)",
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    direction: "rtl" as const,
  },
  labelStyle: { color: "var(--muted)", marginBottom: 4 },
  itemStyle: { color: "var(--foreground)" },
  cursor: { fill: "color-mix(in srgb, var(--foreground) 5%, transparent)" },
};
