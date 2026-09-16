"use client";

import { Bar, BarChart, CartesianGrid, LabelList, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { activityByDay } from "@/data/portfolio";
import { ChartFrame, tooltipStyle } from "@/components/charts/chart-frame";

/** Change over a handful of days → columns, one hue. */
export function ActivityChart() {
  return (
    <ChartFrame
      title="مدخلات التقدّم يوماً بيوم"
      note="99 مدخلاً بين 10 و14 أيلول 2026 · ذروة 12 أيلول من متابعة نصف ساعية آلية في مشروع عرب بنك"
      table={{ head: ["اليوم", "المدخلات"], rows: activityByDay.map((d) => [d.day, d.entries]) }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={activityByDay} margin={{ top: 18, right: 8, bottom: 4, left: -16 }} barCategoryGap={18}>
          <CartesianGrid vertical={false} stroke="var(--grid)" />
          <XAxis dataKey="day" tickLine={false} axisLine={{ stroke: "var(--axis)" }} tick={{ fill: "var(--muted)", fontFamily: "var(--font-sans)" }} />
          <YAxis tickLine={false} axisLine={false} tick={{ fill: "var(--muted)" }} allowDecimals={false} />
          <Tooltip {...tooltipStyle} formatter={(v) => [v, "مدخل"]} />
          <Bar dataKey="entries" fill="var(--seq-1)" radius={[4, 4, 0, 0]} maxBarSize={44} isAnimationActive={false}>
            <LabelList dataKey="entries" position="top" fill="var(--muted)" fontSize={11} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}
