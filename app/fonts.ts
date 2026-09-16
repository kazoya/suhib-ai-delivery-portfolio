import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";

export const arabic = localFont({
  src: [
    { path: "./fonts/DroidArabicKufi-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/DroidArabicKufi-Regular.ttf", weight: "500", style: "normal" },
    { path: "./fonts/DroidArabicKufi-Bold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/DroidArabicKufi-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-arabic",
  display: "swap",
  preload: true,
  adjustFontFallback: false,
});

export const mono = Geist_Mono({ variable: "--font-mono-face", subsets: ["latin"], display: "swap" });
