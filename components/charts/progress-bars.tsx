"use client";

import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { progressByProject } from "@/data/portfolio";
import { ChartFrame, tooltipStyle } from "@/components/charts/chart-frame";

/** Magnitude → horizontal bars, one hue (sequential rule). */
export function ProgressBars() {
  const data = progressByProject;
  return (
    <ChartFrame
      title="نسبة الإنجاز للمشاريع النشطة"
      note="8 مشاريع لها تقدّم مسجَّل من أصل 46 · كما سجّلتها المنصة يوم 2026-09-14"
      height={Math.max(240, data.length * 38)}
      table={{ head: ["المشروع", "الإنجاز %"], rows: data.map((d) => [d.name, d.progress]) }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} layout="vertical" margin={{ top: 4, right: 44, bottom: 4, left: 8 }} barCategoryGap={8}>
          <CartesianGrid horizontal={false} stroke="var(--grid)" />
          <XAxis type="number" domain={[0, 100]} tickLine={false} axisLine={{ stroke: "var(--axis)" }} tick={{ fill: "var(--muted)" }} unit="%" />
          <YAxis
            type="category"
            dataKey="name"
            orientation="right"
            width={150}
            tickLine={false}
            axisLine={false}
            tick={{ fill: "var(--foreground)", fontFamily: "var(--font-sans)", fontSize: 12 }}
          />
          <Tooltip {...tooltipStyle} formatter={(v) => [`${v}%`, "الإنجاز"]} />
          <Bar dataKey="progress" fill="var(--seq-1)" radius={[0, 4, 4, 0]} maxBarSize={18} isAnimationActive={false}>
            <LabelList dataKey="progress" position="insideRight" formatter={(v) => `${v}%`} fill="var(--primary-foreground)" fontSize={11} fontWeight={700} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}
