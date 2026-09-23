import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "صهيب الصالح — مستشار تقني أول ومهندس حلول",
    short_name: "Suhib Asrawi",
    description: "تكامل الأنظمة المؤسسية، الأتمتة، ووكلاء الذكاء الاصطناعي. من DOS إلى الذكاء الاصطناعي.",
    start_url: "/",
    display: "standalone",
    lang: "ar",
    dir: "rtl",
    background_color: "#f6f4ee",
    theme_color: "#0f6e56",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
