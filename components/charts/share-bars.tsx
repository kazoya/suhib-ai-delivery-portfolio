"use client";

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartFrame, tooltipStyle } from "@/components/charts/chart-frame";

type Part = { key: string; label: string; value: number };
const SERIES = ["var(--series-1)", "var(--series-2)", "var(--series-3)", "var(--series-4)"];

/**
 * Part-to-whole → one horizontal stacked bar, categorical hues in fixed order,
 * 2px surface gap between segments, legend + direct labels, table view.
 */
export function ShareBars({ title, note, parts, unit = "" }: { title: string; note?: string; parts: Part[]; unit?: string }) {
  const total = parts.reduce((s, p) => s + p.value, 0);
  const row: Record<string, number | string> = { name: "all" };
  parts.forEach((p) => (row[p.key] = p.value));
  return (
    <ChartFrame
      title={title}
      note={note}
      height={72}
      legend={parts.map((p, i) => ({ label: `${p.label} (${p.value})`, color: SERIES[i] }))}
      table={{ head: ["الفئة", "العدد", "النسبة"], rows: parts.map((p) => [p.label, p.value, `${Math.round((p.value / total) * 100)}%`]) }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={[row]} layout="vertical" margin={{ top: 4, right: 4, bottom: 4, left: 4 }} barCategoryGap={0}>
          <XAxis type="number" hide domain={[0, total]} />
          <YAxis type="category" dataKey="name" hide />
          <Tooltip {...tooltipStyle} formatter={(v, name) => [`${v}${unit}`, parts.find((p) => p.key === name)?.label ?? String(name)]} />
          {parts.map((p, i) => (
            <Bar key={p.key} dataKey={p.key} stackId="a" fill={SERIES[i]} stroke="var(--surface)" strokeWidth={2} maxBarSize={28} isAnimationActive={false} />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}
