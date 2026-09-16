import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
  align = "start",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
  align?: "start" | "center";
}) {
  return (
    <div className={cn("reveal mb-8 max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <div className="eyebrow mb-1">{eyebrow}</div> : null}
      <h2 className="h-section">{title}</h2>
      {lead ? <p className="lead mt-2">{lead}</p> : null}
    </div>
  );
}
