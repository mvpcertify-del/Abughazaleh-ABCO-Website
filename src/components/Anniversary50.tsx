/**
 * 50-year anniversary mark (1975–2025).
 * `seal`   – circular gold seal, for hero corners and the about page.
 * `lockup` – horizontal bar, for headers, footers and inline use.
 */
export function AnniversarySeal({
  className = "",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "navy" | "light";
}) {
  const ring =
    tone === "navy" ? "#0a2240" : tone === "light" ? "#ffffff" : "#c9a227";
  const ink =
    tone === "navy" ? "#0a2240" : tone === "light" ? "#ffffff" : "#a9861f";

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Celebrating 50 years, 1975 to 2025"
    >
      <defs>
        <path
          id="abco50-arc-top"
          d="M 100,100 m -74,0 a 74,74 0 0 1 148,0"
          fill="none"
        />
        {/* Left-to-right along the lower arc, which keeps the glyphs upright. */}
        <path
          id="abco50-arc-bottom"
          d="M 100,100 m -77,0 a 77,77 0 0 0 154,0"
          fill="none"
        />
      </defs>

      <circle cx="100" cy="100" r="95" fill="none" stroke={ring} strokeWidth="1.5" opacity="0.55" />
      <circle cx="100" cy="100" r="88" fill="none" stroke={ring} strokeWidth="3" />

      <text
        fill={ink}
        fontSize="13.5"
        fontWeight="600"
        letterSpacing="4.2"
        fontFamily="var(--font-sans, sans-serif)"
      >
        <textPath href="#abco50-arc-top" startOffset="50%" textAnchor="middle">
          CELEBRATING
        </textPath>
      </text>

      <text
        fill={ink}
        fontSize="13.5"
        fontWeight="600"
        letterSpacing="4.2"
        fontFamily="var(--font-sans, sans-serif)"
      >
        <textPath href="#abco50-arc-bottom" startOffset="50%" textAnchor="middle">
          INTERNATIONAL TRADE
        </textPath>
      </text>

      <text
        x="100"
        y="100"
        textAnchor="middle"
        fill={ink}
        fontSize="60"
        fontWeight="700"
        fontFamily="var(--font-display, serif)"
      >
        50
      </text>
      <text
        x="100"
        y="119"
        textAnchor="middle"
        fill={ink}
        fontSize="12.5"
        fontWeight="600"
        letterSpacing="5"
        fontFamily="var(--font-sans, sans-serif)"
      >
        YEARS
      </text>

      <line x1="58" y1="128" x2="142" y2="128" stroke={ring} strokeWidth="1.5" opacity="0.7" />
      <text
        x="100"
        y="143"
        textAnchor="middle"
        fill={ink}
        fontSize="13"
        fontWeight="600"
        letterSpacing="2"
        fontFamily="var(--font-sans, sans-serif)"
      >
        1975 – 2025
      </text>
    </svg>
  );
}

export function AnniversaryLockup({
  className = "",
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "light" | "navy";
}) {
  const border =
    tone === "light"
      ? "border-white/35 text-white"
      : tone === "navy"
        ? "border-navy-800/25 text-navy-800"
        : "border-gold-500/50 text-gold-600";
  const bar = tone === "light" ? "bg-white/40" : tone === "navy" ? "bg-navy-800/30" : "bg-gold-500/50";

  return (
    <span
      className={`inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 ${border} ${className}`}
    >
      <span className="font-display text-lg leading-none font-bold">50</span>
      <span className={`h-5 w-px ${bar}`} aria-hidden="true" />
      <span className="text-[11px] leading-tight font-semibold tracking-[0.18em] uppercase">
        Years of Trade
        <span className="block text-[10px] font-medium tracking-[0.22em] opacity-80">
          1975 – 2025
        </span>
      </span>
    </span>
  );
}
