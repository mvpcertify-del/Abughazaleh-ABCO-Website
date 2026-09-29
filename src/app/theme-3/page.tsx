import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AnniversarySeal } from "@/components/Anniversary50";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button, LinkedInLink, Portrait } from "@/components/ui";
import { leadership, regions, sectors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home — Theme 3: Heritage Ledger",
};

const milestones = [
  { year: "1975", text: "Abughazaleh Trading Company is founded and begins trading food commodities." },
  { year: "1980s", text: "Construction materials added as regional building programmes accelerate." },
  { year: "1990s", text: "Factory machinery and industrial equipment join the portfolio." },
  { year: "2000s", text: "Detergents and chemical products extend the industrial offering." },
  { year: "2010s", text: "In-house logistics and warehousing bring the supply chain under one roof." },
  { year: "2025", text: "Fifty years of continuous international trade across six sectors." },
];

export default function HomeThemeThree() {
  return (
    <>
      <ThemeSwitcher current={3} />

      {/* Anniversary-led hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="dot-grid absolute inset-0 text-white/[0.06]" aria-hidden="true" />
        <div className="absolute top-1/2 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/[0.07] blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:py-28">
          <AnniversarySeal tone="gold" className="mx-auto h-40 w-40 sm:h-52 sm:w-52" />
          <h1 className="font-display mt-10 text-4xl leading-[1.1] font-bold tracking-tight sm:text-6xl">
            Fifty years of
            <span className="block text-gold-400 italic">international trade</span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/65">
            Abughazaleh Trading Company (ABCO) LLC has traded without interruption since
            1975 — food, construction materials, factory machinery, chemicals, logistics
            and real estate.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/businesses">Our Businesses</Button>
            <Button href="/leadership" variant="outline-light">
              Our Board
            </Button>
          </div>
        </div>

        <div className="relative border-t border-white/10">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
            {[
              { k: "1975", v: "Founded" },
              { k: "50", v: "Years trading" },
              { k: "06", v: "Sectors" },
              { k: "UAE", v: "Headquarters" },
            ].map((s) => (
              <div key={s.v} className="bg-navy-950 px-6 py-7 text-center">
                <p className="font-display text-2xl font-bold text-gold-400">{s.k}</p>
                <p className="mt-1 text-[11px] tracking-[0.18em] text-white/45 uppercase">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ledger of sectors */}
      <section className="bg-navy-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-[12px] font-bold tracking-[0.22em] text-gold-400 uppercase">
            The Portfolio
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Six lines of business
          </h2>

          <div className="mt-12 overflow-hidden border border-white/10">
            {sectors.map((s, i) => (
              <Link
                key={s.slug}
                href={`/businesses/${s.slug}`}
                className={`group flex items-center gap-5 px-5 py-5 transition hover:bg-white/5 sm:gap-8 sm:px-8 ${
                  i > 0 ? "border-t border-white/10" : ""
                }`}
              >
                <span className="font-display w-10 shrink-0 text-lg font-bold text-gold-500/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="relative hidden h-16 w-24 shrink-0 overflow-hidden sm:block">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="96px"
                    className="object-cover opacity-70 transition group-hover:opacity-100"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-xl font-bold transition group-hover:text-gold-300">
                    {s.name}
                  </h3>
                  <p className="mt-1 truncate text-sm text-white/55">{s.blurb}</p>
                </div>
                <span
                  className="shrink-0 text-gold-500/60 transition group-hover:translate-x-1 group-hover:text-gold-400"
                  aria-hidden="true"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-ivory-100 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="text-center text-[12px] font-bold tracking-[0.22em] text-gold-600 uppercase">
            1975 – 2025
          </p>
          <h2 className="font-display rule-gold-center mt-3 text-center text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
            Half a century, one company
          </h2>

          <ol className="mt-14 space-y-0">
            {milestones.map((m, i) => (
              <li key={m.year} className="relative grid grid-cols-[5.5rem_1fr] gap-6 pb-10">
                <div className="text-right">
                  <span className="font-display text-xl font-bold text-navy-800">{m.year}</span>
                </div>
                <div className="relative border-l-2 border-gold-500/35 pb-2 pl-7">
                  <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-gold-500 ring-4 ring-ivory-100" />
                  <p className="leading-relaxed text-navy-800/70">{m.text}</p>
                </div>
                {i === milestones.length - 1 && (
                  <span className="absolute bottom-0 left-[5.5rem] h-10 w-0.5 bg-ivory-100" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Board — dark cards */}
      <section className="bg-navy-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-[12px] font-bold tracking-[0.22em] text-gold-400 uppercase">
            Leadership
          </p>
          <h2 className="font-display rule-gold-center mt-3 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Our Board
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l) => (
              <article
                key={l.slug}
                className="group border border-white/10 bg-navy-900 transition hover:border-gold-500/40"
              >
                <Link href={`/leadership/${l.slug}`} className="block">
                  <Portrait
                    leader={l}
                    className="aspect-[4/5]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold transition group-hover:text-gold-300">
                    <Link href={`/leadership/${l.slug}`}>{l.name}</Link>
                  </h3>
                  <p className="mt-0.5 text-sm text-gold-400/80">{l.role}</p>
                  <div className="mt-3">
                    <LinkedInLink href={l.linkedin} tone="light" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Markets + CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display rule-gold text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
              Markets we serve
            </h2>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {regions.map((r) => (
                <span
                  key={r}
                  className="border border-navy-800/15 px-4 py-2 text-sm font-semibold text-navy-800"
                >
                  {r}
                </span>
              ))}
            </div>
            <div className="mt-9">
              <Button href="/global-presence" variant="outline">
                Global Presence
              </Button>
            </div>
          </div>

          <div className="bg-ivory-100 p-9">
            <AnniversarySeal tone="navy" className="h-24 w-24" />
            <h3 className="font-display mt-6 text-2xl font-bold text-navy-800">
              Trade with a house that has been here since 1975
            </h3>
            <p className="mt-4 leading-relaxed text-navy-800/65">
              Talk to ABCO about sourcing, supply, logistics and commercial partnerships.
            </p>
            <div className="mt-7">
              <Button href="/contact" variant="navy">
                Contact ABCO
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
