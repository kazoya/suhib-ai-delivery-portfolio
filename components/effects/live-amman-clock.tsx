"use client";

import { useEffect, useRef, useState } from "react";
import { EFFECTS_ENABLED } from "@/components/effects/effects-gate";
import { useDocumentVisible } from "@/components/effects/use-media";
import { cn } from "@/lib/utils";

const TZ = "Asia/Amman";
const timeFmt = () => new Intl.DateTimeFormat("en-GB", { timeZone: TZ, hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false });
const dateFmt = (locale: "ar" | "en") =>
  new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "ar-JO-u-nu-latn", { timeZone: TZ, weekday: "short", day: "2-digit", month: "short" });

/**
 * Live Amman clock. One interval, re-aligned to the wall-clock second, cleared
 * while the tab is hidden and restarted (after an immediate refresh) when it
 * returns. Fixed-width skeleton on the server so hydration never shifts layout.
 * `aria-live="off"`: the value must not be announced every second.
 */
export function LiveAmmanClock({ locale = "ar", className }: { locale?: "ar" | "en"; className?: string }) {
  const visible = useDocumentVisible();
  const [time, setTime] = useState<string | null>(null);
  const [date, setDate] = useState<string>("");
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!EFFECTS_ENABLED) return;
    const tf = timeFmt();
    const df = dateFmt(locale);
    const tick = () => {
      const now = new Date();
      setTime(tf.format(now));
      setDate(df.format(now));
    };
    const stop = () => {
      if (timer.current != null) {
        window.clearTimeout(timer.current);
        timer.current = null;
      }
    };
    const schedule = () => {
      // re-align to the next whole second so the display never drifts
      timer.current = window.setTimeout(() => {
        tick();
        schedule();
      }, 1000 - (Date.now() % 1000));
    };
    stop();
    if (visible) {
      tick();
      schedule();
    }
    return stop;
  }, [visible, locale]);

  if (!EFFECTS_ENABLED) return null;

  const label = locale === "en" ? "Amman time" : "توقيت عمّان";
  return (
    <span
      data-effect="clock"
      className={cn("ltr inline-flex items-baseline gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-muted", className)}
      role="group"
      aria-label={label}
      aria-live="off"
      title={label}
    >
      <span className="tabular inline-block min-w-[8ch] text-foreground" suppressHydrationWarning>
        {time ?? "--:--:--"}
      </span>
      <span className="hidden sm:inline">{date || " "}</span>
      <span className="text-[10px] uppercase tracking-wider">Amman</span>
    </span>
  );
}
