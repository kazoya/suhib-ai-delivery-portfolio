import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
  align = "start",
  as: Tag = "h2",
  id,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
  align?: "start" | "center";
  /** Use "h1" for the page title so every route has exactly one H1. */
  as?: "h1" | "h2" | "h3";
  id?: string;
}) {
  return (
    <div id={id} className={cn("reveal mb-8 max-w-3xl scroll-mt-24", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <div className="eyebrow mb-1">{eyebrow}</div> : null}
      <Tag className={Tag === "h1" ? "h-display" : "h-section"} style={{ textWrap: "balance" }}>
        {title}
      </Tag>
      {lead ? <p className="lead mt-2">{lead}</p> : null}
    </div>
  );
}
