import { LocalePlatform } from "@/components/platform/locale-platform";
import { platformMeta } from "@/lib/locale-meta";

export const metadata = platformMeta("en");

export default function Page() {
  return <LocalePlatform locale="en" />;
}
