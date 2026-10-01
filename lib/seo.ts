import { owner, projects } from "@/data/portfolio";
import { LOCALE_META, LOCALES, type Locale } from "@/lib/i18n";

const base = owner.siteUrl.replace(/\/$/, "");

export const keywords = [
  "Suhib Al-Saleh",
  "Suhib Asrawi",
  "صهيب الصالح",
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
  inLanguage: [...LOCALES],
  publisher: { "@id": `${base}/#person` },
};

export const profilePageLd = (path: string, lang: Locale) => ({
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
    image: p.screenshots?.[0] ? `${base}${p.screenshots[0].src}` : `${base}/og/projects/${p.id}`,
  };
};

const ogImage = { url: "/og", width: 1200, height: 630, alt: "Suhib Al-Saleh — Senior Technology Consultant & Solutions Architect" };

/**
 * Next.js replaces a nested `openGraph` object instead of merging it, so every
 * page spreads one of these bases before adding its own url/title.
 */
const alternateOg = (locale: Locale) => LOCALES.filter((l) => l !== locale).map((l) => LOCALE_META[l].og);

export const ogFor = (locale: Locale) => ({
  type: "profile" as const,
  locale: LOCALE_META[locale].og,
  alternateLocale: alternateOg(locale),
  siteName: `${locale === "ar" || locale === "fa" || locale === "ur" ? owner.name : owner.nameEn} — Portfolio`,
  images: [ogImage],
});

export const ogAr = ogFor("ar");
export const ogEn = ogFor("en");

/** Home and journal exist in every language. x-default stays Arabic. */
export const homeAlternates = {
  ar: "/",
  en: "/en",
  fa: "/fa",
  tr: "/tr",
  ur: "/ur",
  ru: "/ru",
  "x-default": "/",
};

export const journalAlternates = {
  ar: "/journal",
  en: "/en/journal",
  fa: "/fa/journal",
  tr: "/tr/journal",
  ur: "/ur/journal",
  ru: "/ru/journal",
  "x-default": "/journal",
};

/** Self-referencing canonical plus optional hreflang map. */
export const alternatesFor = (path: string, languages?: Record<string, string>) => ({
  canonical: path,
  ...(languages ? { languages } : {}),
});
