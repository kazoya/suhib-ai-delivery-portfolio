"use client";

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { project1Trajectory } from "@/data/portfolio";
import { ChartFrame, tooltipStyle } from "@/components/charts/chart-frame";

/** Trend over time, single series → line, 2px, ≥8px markers. */
export function TrajectoryChart() {
  return (
    <ChartFrame
      title="مسار Project1 خلال أسبوع"
      note="نسبة الإنجاز المسجّلة مع كل مدخل رئيسي · من 55% إلى 83%"
      table={{ head: ["اليوم", "الإنجاز %", "المحطة"], rows: project1Trajectory.map((d) => [d.date, d.value, d.label]) }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={project1Trajectory} margin={{ top: 12, right: 16, bottom: 4, left: -16 }}>
          <CartesianGrid vertical={false} stroke="var(--grid)" />
          <XAxis dataKey="date" tickLine={false} axisLine={{ stroke: "var(--axis)" }} tick={{ fill: "var(--muted)", fontFamily: "var(--font-sans)" }} />
          <YAxis domain={[40, 100]} tickLine={false} axisLine={false} tick={{ fill: "var(--muted)" }} unit="%" />
          <Tooltip
            {...tooltipStyle}
            formatter={(v) => [`${v}%`, "الإنجاز"]}
            labelFormatter={(l, payload) => {
              const p = payload?.[0]?.payload as { label?: string } | undefined;
              return p?.label ? `${l} — ${p.label}` : String(l);
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="var(--seq-1)"
            strokeWidth={2}
            dot={{ r: 4.5, fill: "var(--surface)", stroke: "var(--seq-1)", strokeWidth: 2 }}
            activeDot={{ r: 6 }}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </ChartFrame>
  );
}
