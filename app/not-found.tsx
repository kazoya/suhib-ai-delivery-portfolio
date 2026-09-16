import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x py-24 text-center">
      <div className="eyebrow">404</div>
      <h1 className="h-section mt-2">هذه الصفحة غير موجودة</h1>
      <p className="lead mt-3">ربما تغيّر الرابط. ابدأ من الرئيسية أو افتح لوحة الأوامر بـ Ctrl+K.</p>
      <Link href="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">الرئيسية</Link>
    </div>
  );
}
