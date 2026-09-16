"use client";

import dynamic from "next/dynamic";
import { EFFECTS_ENABLED } from "@/components/effects/effects-gate";

/**
 * Lazy, client-only mount points. Pages that do not render these components
 * ship none of the effects JavaScript.
 */
const NodeFieldCanvas = dynamic(() => import("@/components/effects/node-field-canvas").then((m) => m.NodeFieldCanvas), { ssr: false });
const ReadingProgressBar = dynamic(() => import("@/components/effects/reading-progress").then((m) => m.ReadingProgress), { ssr: false });

export function HeroNodeField() {
  if (!EFFECTS_ENABLED) return null;
  return <NodeFieldCanvas />;
}

export function JournalReadingProgress() {
  if (!EFFECTS_ENABLED) return null;
  return <ReadingProgressBar />;
}
