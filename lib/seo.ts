import { owner, projects } from "@/data/portfolio";

const base = owner.siteUrl.replace(/\/$/, "");

export const keywords = [
  "Suhib Asrawi",
  "صهيب عسراوي",
  "Solutions Architect Jordan",
  "Senior Technology Consultant",
  "Systems Integration",
  "Enterprise Integration",
  "AI Automation",
  "AI Agents",
  "Java",
  "C#",
  "SQL Server",
  "Oracle",
  "Access control integration",
  "GCC technical delivery",
  "Amman",
];

export const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${base}/#person`,
  name: owner.fullNameEn,
  alternateName: [owner.nameEn, owner.fullName],
  jobTitle: "Senior Technology Consultant & Solutions Architect",
  description: owner.summaryEn,
  url: base,
  email: `mailto:${owner.email}`,
  sameAs: [owner.github, owner.linkedin, owner.mostaql, owner.baeed],
  worksFor: [
    { "@type": "Organization", name: "APCA Systems", url: "https://apcasystems.com" },
    { "@type": "Organization", name: "Signals Control" },
  ],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Applied Science University", address: { "@type": "PostalAddress", addressCountry: "JO" } },
  knowsAbout: [
    "Systems integration", "Enterprise integration", "AI agents", "Workflow automation", "RAG", "Java", "C#", "SQL Server", "Oracle", "SSIS",
    "Access control", "Attendance systems", "Queue management", "Next.js", "Laravel", "Production troubleshooting",
  ],
  knowsLanguage: ["ar", "en"],
  address: { "@type": "PostalAddress", addressLocality: "Amman", addressCountry: "JO" },
};

export const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${base}/#website`,
  url: base,
  name: `${owner.nameEn} — Portfolio`,
  inLanguage: ["ar", "en"],
  publisher: { "@id": `${base}/#person` },
};

export const profilePageLd = (path: string, lang: "ar" | "en") => ({
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: `${base}${path}`,
  inLanguage: lang,
  mainEntity: { "@id": `${base}/#person` },
  dateModified: "2026-09-16",
});

export const projectLd = (id: string) => {
  const p = projects.find((x) => x.id === id);
  if (!p) return null;
  const live = p.links.find((l) => !/github\.com/.test(l.url));
  return {
    "@context": "https://schema.org",
    "@type": live ? "SoftwareApplication" : "CreativeWork",
    name: p.nameEn,
    alternateName: p.name,
    description: p.shortEn,
    url: `${base}/projects/${p.id}`,
    inLanguage: "ar",
    author: { "@id": `${base}/#person` },
    creator: { "@id": `${base}/#person` },
    ...(live ? { applicationCategory: "WebApplication", operatingSystem: "Web", installUrl: live.url, offers: { "@type": "Offer", price: "0", priceCurrency: "USD" } } : {}),
    keywords: p.stack.join(", "),
    ...(p.screenshots?.[0] ? { image: `${base}${p.screenshots[0].src}` } : {}),
  };
};

const ogImage = { url: "/og", width: 1200, height: 630, alt: "Suhib Asrawi — Senior Technology Consultant & Solutions Architect" };

/**
 * Next.js replaces a nested `openGraph` object instead of merging it, so every
 * page spreads one of these bases before adding its own url/title.
 */
export const ogAr = { type: "profile" as const, locale: "ar_JO", alternateLocale: ["en_US"], siteName: `${owner.name} — Portfolio`, images: [ogImage] };
export const ogEn = { type: "profile" as const, locale: "en_US", alternateLocale: ["ar_JO"], siteName: `${owner.nameEn} — Portfolio`, images: [ogImage] };

/** Self-referencing canonical + hreflang pair for the two localised roots. */
export const alternatesFor = (path: string, pair?: { ar: string; en: string }) => ({
  canonical: path,
  ...(pair ? { languages: { ar: pair.ar, en: pair.en, "x-default": pair.ar } } : {}),
});
