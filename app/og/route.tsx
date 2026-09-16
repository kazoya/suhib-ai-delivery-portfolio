import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";
import { owner } from "@/data/portfolio";

export const dynamic = "force-static";
const size = { width: 1200, height: 630 };

/** Site-wide Open Graph image, referenced from both root layouts. */
export async function GET() {
  const font = await fs.readFile(path.join(process.cwd(), "app/fonts/DroidArabicKufi-Bold.ttf"));
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
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 64, borderRadius: 18, background: "linear-gradient(135deg,#4fc9a3,#e2b34b)" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 700 }}>{owner.name}</div>
            <div style={{ fontSize: 22, opacity: 0.85 }}>مستشار تقني أول · مهندس حلول · وكلاء الذكاء الاصطناعي وتكامل الأنظمة</div>
          </div>
        </div>
        <div style={{ fontSize: 44, lineHeight: 1.4, maxWidth: 1050 }}>{owner.tagline}</div>
        <div style={{ display: "flex", gap: 28, fontSize: 22, opacity: 0.9 }}>
          <span>+20 عاماً</span>
          <span>·</span>
          <span>6 منصات حيّة</span>
          <span>·</span>
          <span>Java · C# · SQL Server · Oracle · AI agents</span>
          <span>·</span>
          <span>عمّان</span>
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: "Kufi", data: font, weight: 700, style: "normal" }] },
  );
}
