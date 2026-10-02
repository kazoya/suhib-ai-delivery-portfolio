import { EnglishCv } from "@/components/home/locale-home";
import { ContactCta } from "@/components/shared/contact-cta";
import { cvMeta } from "@/lib/locale-meta";
import { profilePageLd } from "@/lib/seo";

export const metadata = cvMeta("en");

export default function Page() {
  return (
    <div className="container-x py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageLd("/en/cv", "en")) }} />
      <EnglishCv titleAs="h1" />
      <ContactCta locale="en" />
    </div>
  );
}
