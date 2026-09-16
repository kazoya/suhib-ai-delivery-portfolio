"use client";

import { Printer } from "lucide-react";

export function PrintButton({ label = "طباعة / PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110"
    >
      <Printer className="size-4" /> {label}
    </button>
  );
}
