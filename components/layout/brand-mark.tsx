export function BrandMark({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true" className="shrink-0">
      <defs>
        <linearGradient id="bm-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--primary)" />
          <stop offset="1" stopColor="var(--gold)" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="13" fill="url(#bm-g)" />
      {/* three tiers: evidence → delivery → owner */}
      <path d="M13 31h22M13 24h16M13 17h10" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="35" cy="17" r="3" fill="#fff" />
    </svg>
  );
}
