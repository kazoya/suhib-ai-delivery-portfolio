"use client";

import { QRCodeSVG } from "qrcode.react";
import { useSyncExternalStore } from "react";
import { owner } from "@/data/portfolio";

const subscribe = () => () => {};
const getSnapshot = () => window.location.origin;
const getServerSnapshot = () => owner.siteUrl;

export function SiteQr({ size = 96, label = "امسح لفتح المحفظة" }: { size?: number; label?: string }) {
  const url = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <div className="card inline-flex flex-col items-center gap-2 p-3">
      <QRCodeSVG value={url} size={size} bgColor="transparent" fgColor="currentColor" level="M" title={label} />
      <span className="text-[11px] text-muted">{label}</span>
    </div>
  );
}
