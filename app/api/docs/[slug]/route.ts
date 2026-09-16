import { getAllDocSlugs, getDoc } from "@/lib/docs";

export const dynamic = "force-static";

export function generateStaticParams() {
  return getAllDocSlugs().map((slug) => ({ slug }));
}

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDoc(slug);
  if (!doc) return new Response("Not found", { status: 404 });
  return new Response(doc.raw, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${doc.file}"`,
    },
  });
}
