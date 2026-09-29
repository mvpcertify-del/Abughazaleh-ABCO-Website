import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { AnniversarySeal, AnniversaryLockup } from "@/components/Anniversary50";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button, LinkedInLink, Portrait } from "@/components/ui";
import { leadership, regions, sectors, tradeCycle } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home — Theme 2: Commodity Mosaic",
};

export default function HomeThemeTwo() {
  return (
    <>
      <ThemeSwitcher current={2} />

      {/* Editorial hero: the goods themselves are the artwork */}
      <section className="bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 pt-14 pb-16 sm:px-6 lg:pt-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end">
            <div>
              <p className="text-[12px] font-bold tracking-[0.22em] text-olive-800 uppercase">
                International Trade · Est. 1975
              </p>
              <h1 className="font-display mt-5 text-[2.75rem] leading-[1.05] font-bold tracking-tight text-navy-800 sm:text-6xl">
                We trade the things
                <span className="block italic text-olive-800">the world runs on.</span>
              </h1>
              <p className="mt-7 max-w-lg text-lg leading-relaxed text-navy-800/65">
                Food and construction materials. Factory machinery. Detergents and
                chemicals. Moved, stored and delivered by our own logistics — and backed
                by fifty years of doing it.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Button href="/businesses" variant="navy">
                  Our Six Sectors
                </Button>
                <Link
                  href="/about"
                  className="text-sm font-bold tracking-wide text-navy-800 underline decoration-gold-500 decoration-2 underline-offset-[6px] hover:text-olive-800"
                >
                  Our story since 1975
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-3 gap-2.5 sm:gap-3.5">
                {sectors.map((s, i) => (
                  <Link
                    key={s.slug}
                    href={`/businesses/${s.slug}`}
                    className={`group relative overflow-hidden ${
                      i === 0 || i === 4 ? "col-span-2" : ""
                    } ${i === 0 ? "aspect-[2/1]" : "aspect-square"}`}
                  >
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      sizes="(max-width: 1024px) 33vw, 22vw"
                      priority={i < 3}
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-900/35 transition group-hover:bg-navy-900/15" />
                    <span className="absolute bottom-2.5 left-3 text-[10px] font-bold tracking-[0.14em] text-white uppercase">
                      {s.short}
                    </span>
                  </Link>
                ))}
              </div>
              <AnniversarySeal
                tone="navy"
                className="absolute -top-8 -left-8 hidden h-28 w-28 rounded-full bg-ivory-100 p-2 lg:block"
              />
            </div>
          </div>
        </div>

        <div className="overflow-hidden border-y border-navy-800/10 py-4">
          <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex gap-8" aria-hidden={dup === 1}>
                {[
                  "Rice",
                  "Wheat",
                  "Pulses",
                  "Sugar",
                  "Edible Oils",
                  "Spices",
                  "Cement",
                  "Steel",
                  "Production Lines",
                  "Detergents",
                  "Chemical Raw Materials",
                  "Freight",
                  "Warehousing",
                  "Property",
                ].map((item) => (
                  <span
                    key={item}
                    className="font-display flex items-center gap-8 text-xl font-bold text-navy-800/25"
                  >
                    {item}
                    <span className="text-gold-500/50 text-sm">●</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial sector rows */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="font-display rule-gold text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
            What we trade
          </h2>

          <div className="mt-12 divide-y divide-navy-800/10">
            {sectors.map((s, i) => (
              <Link
                key={s.slug}
                href={`/businesses/${s.slug}`}
                className="group grid gap-6 py-8 sm:grid-cols-[4rem_1fr_auto] sm:items-center"
              >
                <span className="font-display text-3xl font-bold text-gold-500/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-navy-800 transition group-hover:text-olive-800">
                    {s.name}
                  </h3>
                  <p className="mt-2 max-w-xl leading-relaxed text-navy-800/60">{s.blurb}</p>
                </div>
                <span className="text-[12px] font-bold tracking-[0.14em] text-olive-800 uppercase opacity-0 transition group-hover:opacity-100">
                  Explore →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 50 years band */}
      <section className="bg-olive-800 py-16 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[auto_1fr]">
          <AnniversarySeal tone="light" className="mx-auto h-40 w-40 lg:h-48 lg:w-48" />
          <div>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">
              Fifty years in the same business
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-white/75">
              ABCO opened its doors in 1975. The commodities have changed, the routes have
              changed, the customers have grown — the way we do business has not.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-4">
              {tradeCycle.map((t) => (
                <div key={t.step} className="border-t border-white/25 pt-4">
                  <p className="text-[12px] font-bold tracking-[0.14em] text-gold-300 uppercase">
                    {t.step}
                  </p>
                  <p className="mt-1.5 text-sm text-white/70">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="bg-ivory-50 py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <h2 className="font-display rule-gold-center text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
            Where we trade
          </h2>
          <div className="mt-12 grid gap-px bg-navy-800/10 sm:grid-cols-3">
            {regions.map((r) => (
              <div key={r} className="bg-ivory-50 px-4 py-7">
                <p className="font-display text-xl font-bold text-navy-800">{r}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Button href="/global-presence" variant="outline">
              Global Presence
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display rule-gold-center text-center text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
            The board
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l) => (
              <article key={l.slug} className="text-center">
                <Link href={`/leadership/${l.slug}`} className="group block">
                  <Portrait
                    leader={l}
                    className="mx-auto aspect-square w-40 rounded-full"
                    sizes="160px"
                  />
                </Link>
                <h3 className="font-display mt-5 text-lg font-bold text-navy-800">
                  <Link href={`/leadership/${l.slug}`}>{l.name}</Link>
                </h3>
                <p className="mt-0.5 text-sm text-olive-800">{l.role}</p>
                <div className="mt-3 flex justify-center">
                  <LinkedInLink href={l.linkedin} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-800 py-20 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <AnniversaryLockup tone="light" />
          <h2 className="font-display mt-6 text-3xl font-bold sm:text-4xl">
            Tell us what you need sourced.
          </h2>
          <p className="mt-5 leading-relaxed text-white/70">
            Six sectors, five decades of supplier relationships, and logistics we run
            ourselves.
          </p>
          <div className="mt-9 flex justify-center">
            <Button href="/contact">Contact ABCO</Button>
          </div>
        </div>
      </section>
    </>
  );
}
