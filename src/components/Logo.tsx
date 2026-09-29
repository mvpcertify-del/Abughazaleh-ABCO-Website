import Link from "next/link";

/**
 * Wordmark stand-in for the ABCO logo: navy "ABCO" with the gold arc over
 * the O, matching the supplied brand artwork. Replace with the client's
 * vector file (drop it at /public/abco-logo.svg and swap the markup) when
 * it arrives.
 */
export function Logo({
  tone = "navy",
  className = "",
  href = "/",
}: {
  tone?: "navy" | "light";
  className?: string;
  href?: string | null;
}) {
  const ink = tone === "light" ? "text-white" : "text-navy-800";
  const sub = tone === "light" ? "text-white/70" : "text-navy-800/65";

  const mark = (
    <span className={`inline-block leading-none ${className}`}>
      <span className="relative inline-block">
        <span
          className={`font-display text-[1.75rem] leading-none font-bold tracking-tight ${ink}`}
        >
          ABCO
        </span>
        <svg
          viewBox="0 0 120 18"
          className="absolute -top-1.5 right-0 h-3 w-14 text-gold-500"
          aria-hidden="true"
        >
          <path
            d="M2 15 C 30 1, 90 1, 118 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className={`mt-1 block text-[7.5px] leading-tight font-semibold tracking-[0.13em] whitespace-nowrap uppercase ${sub}`}
      >
        Abughazaleh Trading Company LLC
      </span>
    </span>
  );

  if (!href) return mark;

  return (
    <Link href={href} aria-label="ABCO — home" className="shrink-0">
      {mark}
    </Link>
  );
}
