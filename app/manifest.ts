import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "صهيب عسراوي — محفظة التسليم بالذكاء الاصطناعي",
    short_name: "Suhib Asrawi",
    description: "منصات ويب عربية تصل إلى الإنتاج، ويديرها نظام يسجّل كل خطوة بدليلها.",
    start_url: "/",
    display: "standalone",
    lang: "ar",
    dir: "rtl",
    background_color: "#f6f4ee",
    theme_color: "#0f6e56",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
