import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";
import { owner, projects, statusLabel } from "@/data/portfolio";

export const alt = "Project case study — Suhib Asrawi";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export default async function ProjectOg({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const p = projects.find((x) => x.id === id);
  const font = await fs.readFile(path.join(process.cwd(), "app/fonts/DroidArabicKufi-Bold.ttf"));
  const name = p?.name ?? owner.name;
  const status = p ? statusLabel[p.statusKey].ar : "";
  const short = p?.short ?? owner.tagline;
  const stack = p?.stack.slice(0, 5).join(" · ") ?? "";
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          background: "linear-gradient(135deg, #0f6e56 0%, #16211c 60%, #2b2413 100%)",
          color: "#fff",
          fontFamily: "Kufi",
          direction: "rtl",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <div style={{ width: 52, height: 52, borderRadius: 14, background: "linear-gradient(135deg,#4fc9a3,#e2b34b)" }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 30, fontWeight: 700 }}>{owner.name}</div>
              <div style={{ fontSize: 18, opacity: 0.85 }}>مستشار تقني أول · مهندس حلول</div>
            </div>
          </div>
          {status ? <div style={{ fontSize: 22, padding: "8px 18px", borderRadius: 999, background: "rgba(255,255,255,0.14)" }}>{status}</div> : null}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 50, lineHeight: 1.3, fontWeight: 700, maxWidth: 1050 }}>{name}</div>
          <div style={{ fontSize: 26, lineHeight: 1.5, opacity: 0.92, maxWidth: 1050 }}>{short}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, opacity: 0.9 }}>
          <span>{stack}</span>
          <span>suhib-ai-delivery-portfolio.vercel.app</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Kufi", data: font, weight: 700, style: "normal" }] },
  );
}
