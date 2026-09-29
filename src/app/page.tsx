import Image from "next/image";
import Link from "next/link";
import { AnniversarySeal, AnniversaryLockup } from "@/components/Anniversary50";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { Button, LinkedInLink, Portrait, SectionHeading } from "@/components/ui";
import { insights, leadership, regions, sectors, stats, tradeCycle } from "@/lib/site";

export default function HomeThemeOne() {
  return (
    <>
      <ThemeSwitcher current={1} />

      {/* Hero — trading floor, not a shipping port */}
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="dot-grid absolute inset-0 text-white/[0.07]" aria-hidden="true" />
        <div className="absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-gold-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <AnniversaryLockup tone="light" />
            <h1 className="font-display mt-6 text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The trading house
              <span className="block text-gold-400">behind six industries</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Since 1975, Abughazaleh Trading Company has bought, sold and moved goods
              across international markets — food and construction materials, factory
              machinery, chemicals, and the logistics and property that support them.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/businesses">Explore Our Businesses</Button>
              <Button href="/about" variant="outline-light">
                About ABCO
              </Button>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 border-t border-white/10 pt-8">
              <div>
                <dt className="text-[11px] tracking-[0.18em] text-white/45 uppercase">
                  Trading since
                </dt>
                <dd className="font-display mt-1 text-2xl font-bold text-gold-400">1975</dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-[0.18em] text-white/45 uppercase">
                  Business sectors
                </dt>
                <dd className="font-display mt-1 text-2xl font-bold text-gold-400">Six</dd>
              </div>
            </dl>
          </div>

          {/* Commodity collage — goods on the move, not vessels */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <HeroTile src={sectors[0].image} label="Food Products" tall />
                <HeroTile src={sectors[3].image} label="Chemicals" />
              </div>
              <div className="space-y-3 pt-8 sm:space-y-4">
                <HeroTile src={sectors[2].image} label="Machinery" />
                <HeroTile src={sectors[1].image} label="Construction" tall />
              </div>
            </div>
            <AnniversarySeal
              tone="gold"
              className="absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-full bg-navy-900/90 p-2 backdrop-blur sm:block"
            />
          </div>
        </div>

        {/* Ticker of traded goods */}
        <div className="relative border-t border-white/10 bg-navy-950/60 py-3.5">
          <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex gap-10" aria-hidden={dup === 1}>
                {[
                  "Grains & Pulses",
                  "Rice & Sugar",
                  "Spices & Edible Oils",
                  "Cement & Steel",
                  "Production Lines",
                  "Industrial Detergents",
                  "Chemical Raw Materials",
                  "Freight & Clearance",
                  "Warehousing",
                  "Commercial Property",
                ].map((item) => (
                  <span
                    key={item}
                    className="flex items-center gap-10 text-[12px] font-semibold tracking-[0.16em] text-white/45 uppercase"
                  >
                    {item}
                    <span className="text-gold-500/60">◆</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-navy-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-px bg-navy-100 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-6 py-8">
              <p className="font-display text-3xl font-bold text-navy-800">{s.value}</p>
              <p className="mt-1.5 text-[12px] font-bold tracking-[0.14em] text-gold-600 uppercase">
                {s.label}
              </p>
              <p className="mt-1 text-sm text-navy-800/55">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How a trade runs */}
      <section className="bg-ivory-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="How We Trade" title="From origin to end buyer" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tradeCycle.map((t, i) => (
              <div key={t.step} className="relative bg-white p-7 shadow-sm">
                <span className="font-display text-4xl font-bold text-gold-500/25">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-lg font-bold text-navy-800">{t.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-800/60">{t.detail}</p>
                {i < tradeCycle.length - 1 && (
                  <span
                    className="absolute top-1/2 -right-4 hidden text-gold-500/50 lg:block"
                    aria-hidden="true"
                  >
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Our Businesses" title="Six sectors, one trading house" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <Link
                key={s.slug}
                href={`/businesses/${s.slug}`}
                className="group block border border-navy-100 bg-white transition hover:border-gold-500/60 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/55 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy-800">{s.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-800/60">{s.blurb}</p>
                  <span className="mt-4 inline-block text-[12px] font-bold tracking-[0.14em] text-gold-600 uppercase">
                    Explore →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About + 50 years */}
      <section className="relative overflow-hidden bg-navy-800 py-20 text-white">
        <div className="dot-grid absolute inset-0 text-white/[0.06]" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="About ABCO"
              title="Built on relationships that outlast a single deal"
              align="left"
              tone="light"
            />
            <p className="mt-6 max-w-2xl leading-relaxed text-white/70">
              ABCO works across international markets, building long-term relationships
              with suppliers, partners and customers, and facilitating the movement of
              products across borders. Half a century of trading has taught the company
              that reliability compounds.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Five decades of continuous trading",
                "Six complementary business sectors",
                "Own logistics and distribution capability",
                "Supplier relationships spanning generations",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-sm text-white/75">
                  <span className="mt-1 text-gold-400" aria-hidden="true">
                    ◆
                  </span>
                  {point}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="/about" variant="outline-light">
                Learn More About Us
              </Button>
            </div>
          </div>
          <AnniversarySeal tone="light" className="mx-auto h-56 w-56 opacity-95 lg:h-64 lg:w-64" />
        </div>
      </section>

      {/* Global presence */}
      <section className="bg-ivory-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Global Presence" title="Connected to markets worldwide" />
          <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-navy-800/60">
            ABCO trades across six regions, pairing origin relationships with distribution
            reach in the markets its customers serve.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {regions.map((r) => (
              <span
                key={r}
                className="rounded-full border border-navy-800/15 bg-white px-5 py-2.5 text-sm font-semibold text-navy-800"
              >
                {r}
              </span>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/global-presence" variant="outline">
              View All Markets
            </Button>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Leadership" title="Our Board" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l) => (
              <article key={l.slug} className="group border border-navy-100 bg-white">
                <Link href={`/leadership/${l.slug}`} className="block">
                  <Portrait
                    leader={l}
                    className="aspect-[4/5]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>
                <div className="p-5">
                  <h3 className="font-bold text-navy-800 transition group-hover:text-gold-600">
                    <Link href={`/leadership/${l.slug}`}>{l.name}</Link>
                  </h3>
                  <p className="mt-0.5 text-sm text-navy-800/55">{l.role}</p>
                  <div className="mt-3">
                    <LinkedInLink href={l.linkedin} />
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/leadership" variant="navy">
              Meet Our Leadership
            </Button>
          </div>
        </div>
      </section>

      {/* Insights + CTA */}
      <section className="bg-ivory-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[2fr_1fr]">
            <div>
              <SectionHeading eyebrow="Insights" title="News & Market Views" align="left" />
              <div className="mt-10 space-y-5">
                {insights.map((post) => (
                  <article key={post.slug} className="border-l-2 border-gold-500 bg-white p-6">
                    <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold tracking-[0.14em] uppercase">
                      <span className="bg-gold-500 px-2.5 py-1 text-navy-900">{post.tag}</span>
                      <time className="text-navy-800/45" dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-navy-800">{post.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-navy-800/60">
                      {post.excerpt}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="self-start bg-navy-800 p-8 text-white lg:sticky lg:top-32">
              <AnniversaryLockup tone="light" />
              <h3 className="font-display mt-6 text-2xl font-bold">
                Let&apos;s build global business together
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Talk to ABCO about sourcing, trading, logistics and commercial
                opportunities across our six sectors.
              </p>
              <div className="mt-7">
                <Button href="/contact">Contact Our Team</Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

function HeroTile({
  src,
  label,
  tall = false,
}: {
  src: string;
  label: string;
  tall?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden ${tall ? "aspect-[4/5]" : "aspect-[4/3]"}`}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes="(max-width: 1024px) 50vw, 25vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/10 to-transparent" />
      <span className="absolute bottom-3 left-3 text-[10px] font-bold tracking-[0.16em] text-white uppercase">
        {label}
      </span>
    </div>
  );
}
