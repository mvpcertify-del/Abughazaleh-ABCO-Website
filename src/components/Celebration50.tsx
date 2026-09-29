import { AnniversarySeal } from "./Anniversary50";
import { Button } from "./ui";

const milestones = [
  { year: "1975", text: "Founded, trading food commodities" },
  { year: "1980s", text: "Construction materials added" },
  { year: "1990s", text: "Factory machinery and equipment" },
  { year: "2000s", text: "Detergents and chemical products" },
  { year: "2010s", text: "Logistics and warehousing in-house" },
  { year: "2025", text: "Fifty years, six sectors" },
];

/** Deterministic so the server and client render identical markup. */
const sparks = [
  { left: "6%", delay: "0s", duration: "9s", size: 5 },
  { left: "17%", delay: "2.4s", duration: "11s", size: 3 },
  { left: "29%", delay: "4.1s", duration: "8.5s", size: 4 },
  { left: "41%", delay: "1.2s", duration: "12s", size: 3 },
  { left: "53%", delay: "5.6s", duration: "9.5s", size: 5 },
  { left: "64%", delay: "3.3s", duration: "10.5s", size: 3 },
  { left: "76%", delay: "0.8s", duration: "11.5s", size: 4 },
  { left: "88%", delay: "6.2s", duration: "9s", size: 3 },
  { left: "95%", delay: "2.9s", duration: "12.5s", size: 4 },
];

export function Celebration50() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 py-20 text-white sm:py-24">
      <div className="dot-grid absolute inset-0 text-white/[0.06]" aria-hidden="true" />

      {/* gold bloom behind the seal */}
      <div
        className="absolute top-1/2 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/[0.09] blur-3xl"
        aria-hidden="true"
      />

      {/* drifting gold sparks */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {sparks.map((s) => (
          <span
            key={s.left}
            className="animate-rise absolute bottom-0 rounded-full bg-gold-400"
            style={{
              left: s.left,
              width: s.size,
              height: s.size,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Year — seal — year */}
        <div className="flex items-center justify-center gap-5 sm:gap-10">
          <span className="text-shimmer text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            1975
          </span>

          <div className="relative shrink-0">
            <span
              className="animate-spin-slow absolute -inset-3 rounded-full border border-dashed border-gold-500/35"
              aria-hidden="true"
            />
            <AnniversarySeal
              tone="gold"
              className="animate-float h-24 w-24 sm:h-32 sm:w-32 lg:h-40 lg:w-40"
            />
          </div>

          <span className="text-shimmer text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
            2025
          </span>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[12px] font-bold tracking-[0.24em] text-gold-400 uppercase">
            Celebrating Half a Century
          </p>
          <h2 className="mt-4 text-3xl leading-tight font-bold tracking-tight uppercase sm:text-4xl lg:text-5xl">
            Fifty years of
            <span className="text-shimmer"> international trade</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/65">
            ABCO opened its doors in 1975. The commodities have changed, the routes have
            changed and the customers have grown — the way we do business has not.
          </p>
        </div>

        {/* Milestone rail */}
        <ol className="mt-16 grid gap-y-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-4">
          {milestones.map((m, i) => (
            <li key={m.year} className="relative lg:pt-8">
              <span
                className="absolute top-0 left-0 hidden h-px w-full bg-gradient-to-r from-gold-500/50 to-gold-500/10 lg:block"
                aria-hidden="true"
              />
              <span
                className={`absolute -top-[5px] left-0 hidden h-2.5 w-2.5 rounded-full lg:block ${
                  i === milestones.length - 1
                    ? "bg-gold-400 ring-4 ring-gold-400/20"
                    : "bg-gold-500/70"
                }`}
                aria-hidden="true"
              />
              <p className="text-2xl font-bold text-gold-400">{m.year}</p>
              <p className="mt-2 text-sm leading-relaxed text-white/60">{m.text}</p>
            </li>
          ))}
        </ol>

        <div className="mt-16 flex flex-wrap justify-center gap-3">
          <Button href="/about">Our Story Since 1975</Button>
          <Button href="/leadership" variant="outline-light">
            Meet The Board
          </Button>
        </div>
      </div>
    </section>
  );
}
