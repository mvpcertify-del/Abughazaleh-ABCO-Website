import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import type { Leader } from "@/lib/site";

export function SectionHeading({
  eyebrow,
  title,
  align = "center",
  tone = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
  tone?: "dark" | "light";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <p
          className={`text-[12px] font-bold tracking-[0.2em] uppercase ${
            tone === "light" ? "text-gold-400" : "text-gold-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
          tone === "light" ? "text-white" : "text-navy-800"
        } ${centered ? "rule-gold-center" : "rule-gold"}`}
      >
        {title}
      </h2>
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "gold",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "gold" | "navy" | "outline" | "outline-light";
  className?: string;
}) {
  const styles = {
    gold: "bg-gold-500 text-navy-900 hover:bg-gold-400",
    navy: "bg-navy-800 text-white hover:bg-navy-700",
    outline: "border border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white",
    "outline-light": "border border-white/70 text-white hover:bg-white hover:text-navy-900",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-sm px-6 py-3 text-[12px] font-bold tracking-[0.12em] uppercase transition ${styles} ${className}`}
    >
      {children}
      <span aria-hidden="true">→</span>
    </Link>
  );
}

/**
 * Portrait with a graceful fallback: until the client's photographs are
 * dropped into /public/leadership, the monogram panel renders instead.
 */
export function Portrait({
  leader,
  className = "",
  sizes = "(max-width: 768px) 100vw, 320px",
  priority = false,
  compact = false,
}: {
  leader: Leader;
  className?: string;
  sizes?: string;
  priority?: boolean;
  /** Monogram only, no caption — for thumbnails too small to hold the label. */
  compact?: boolean;
}) {
  // The board share a surname, so first-name letters keep the monograms distinct.
  const initials = leader.name
    .replace(/^Mr\.\s*/i, "")
    .slice(0, 2)
    .toUpperCase();

  const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", leader.photo));

  return (
    <div className={`relative overflow-hidden bg-navy-800 ${className}`}>
      {hasPhoto ? (
        <Image
          src={leader.photo}
          alt={`${leader.name}, ${leader.role}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      ) : (
        <>
          <div className="dot-grid absolute inset-0 text-white/10" aria-hidden="true" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
            <span
              className={`font-display font-bold text-gold-400/80 ${
                compact ? "text-xl" : "text-5xl"
              }`}
            >
              {initials}
            </span>
            {!compact && (
              <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">
                Portrait to follow
              </span>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export function LinkedInLink({
  href,
  tone = "dark",
  label = "LinkedIn",
}: {
  href: string;
  tone?: "dark" | "light";
  label?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={`inline-flex items-center gap-2 text-sm font-medium transition ${
        tone === "light" ? "text-white/75 hover:text-gold-300" : "text-navy-600 hover:text-gold-600"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
      {label}
    </a>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-800 py-20 text-white sm:py-24">
      <div className="dot-grid absolute inset-0 text-white/10" aria-hidden="true" />
      <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <p className="text-[12px] font-bold tracking-[0.2em] text-gold-400 uppercase">{eyebrow}</p>
        <h1 className="font-display mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {lead && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{lead}</p>}
      </div>
    </section>
  );
}
