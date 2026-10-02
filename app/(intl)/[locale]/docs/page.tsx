import { notFound, redirect } from "next/navigation";
import { isAddedLocale } from "@/lib/i18n";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isAddedLocale(locale)) notFound();
  redirect(`/${locale}/docs/profile`);
}
