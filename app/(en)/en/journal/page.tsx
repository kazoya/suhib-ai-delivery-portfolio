import type { Metadata } from "next";
import { JournalPageContent } from "@/components/journey/journal-page";
import { alternatesFor, ogEn, profilePageLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Engineering Journal — from DOS to AI agents",
  description:
    "Suhib Asrawi's journey across generations of computing: DOS-era troubleshooting, PC and network repair, data recovery, enterprise integration with Java, SQL Server and Oracle, then automation and AI agents. Engineering memories, technology generations and a 30-second recruiter view.",
  alternates: alternatesFor("/en/journal", { ar: "/journal", en: "/en/journal" }),
  openGraph: { ...ogEn, title: "Engineering Journal — from DOS to AI agents", description: "The stack changed. The method didn't.", url: "/en/journal" },
};

export default function EnglishJournalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd("/en/journal", "en")) }} />
      <JournalPageContent locale="en" />
    </>
  );
}
