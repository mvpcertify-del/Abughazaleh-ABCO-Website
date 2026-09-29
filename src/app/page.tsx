import Image from "next/image";
import Link from "next/link";
import { AnniversarySeal, AnniversaryLockup } from "@/components/Anniversary50";
import { GlobeGraphic } from "@/components/GlobeGraphic";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { WorldMap } from "@/components/WorldMap";
import { Button, LinkedInLink, Portrait } from "@/components/ui";
import {
  CalendarIcon,
  ChartIcon,
  GlobeIcon,
  PinIcon,
  sectorIcons,
} from "@/components/icons";
import { heroImage, insights, leadership, regions, sectors, tradeCycle } from "@/lib/site";

const statItems = [
  { Icon: CalendarIcon, value: "1975", label: "Trading Since", sub: "50 Years of Business Excellence" },
  { Icon: ChartIcon, value: "06", label: "Business Sectors", sub: "Diverse & Complementary Portfolio" },
  { Icon: GlobeIcon, value: "Global", label: "Market Reach", sub: "Connecting Markets Worldwide" },
  { Icon: PinIcon, value: "UAE", label: "Headquarters", sub: "Strong Regional Presence" },
];

const aboutPoints = [
  "More than five decades of international trading experience",
  "Six diverse and complementary business sectors",
  "Strong global network and market presence",
  "Commitment to quality and long-term partnerships",
];

export default function Home() {
  return (
    <>
      <ThemeSwitcher current={1} />

      {/* ---------------- Hero ---------------- */}
      <section className="relative isolate overflow-hidden bg-navy-900">
        <Image
          src={heroImage}
          alt="Goods held in an ABCO trading warehouse"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
          <div className="max-w-2xl">
            <AnniversaryLockup tone="light" />
            <h1 className="mt-7 text-4xl leading-[1.06] font-extrabold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
              Connecting
              <span className="block">Global Trade</span>
              <span className="mt-1 block text-gold-400">Since 1975</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Abughazaleh Trading Company (ABCO) connects international markets
              through diversified trading, industrial solutions, logistics and real
              estate operations.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/businesses">Explore Our Businesses</Button>
              <Button href="/about" variant="outline-light">
                About ABCO
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[12px] font-semibold tracking-[0.1em] text-white/60 uppercase">
              <span>Established 1975</span>
              <span className="text-gold-500">◆</span>
              <span>UAE Based</span>
              <span className="text-gold-500">◆</span>
              <span>International Trade</span>
            </div>
          </div>
        </div>

        <AnniversarySeal
          tone="light"
          className="absolute top-14 right-10 hidden h-40 w-40 opacity-95 xl:block"
        />
      </section>

      {/* ---------------- Stats strip ---------------- */}
      <section className="bg-navy-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <dl className="grid divide-y divide-white/12 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {statItems.map(({ Icon, value, label, sub }) => (
              <div key={label} className="flex items-center gap-4 px-2 py-7 lg:px-7">
                <span className="h-11 w-11 shrink-0 text-gold-500">
                  <Icon />
                </span>
                <div>
                  <dt className="text-xl leading-tight font-bold text-white">
                    {value}{" "}
                    <span className="text-[11px] font-semibold tracking-[0.14em] text-white/70 uppercase">
                      {label}
                    </span>
                  </dt>
                  <dd className="mt-1 text-[12px] leading-snug text-white/45">{sub}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------------- Our businesses ---------------- */}
      <section className="bg-ivory-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="rule-gold-center text-center text-3xl font-bold tracking-[0.02em] text-navy-800 uppercase sm:text-4xl">
            Our Businesses
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-center leading-relaxed text-navy-800/60">
            Six complementary lines of business, trading and delivering across
            international markets.
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {sectors.map((s) => {
              const Icon = sectorIcons[s.slug];
              return (
                <Link
                  key={s.slug}
                  href={`/businesses/${s.slug}`}
                  className="group flex flex-col border border-navy-100 bg-white transition hover:-translate-y-1 hover:border-gold-500/60 hover:shadow-xl"
                >
                  <div className="relative">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 17vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-navy-950/15" />
                    </div>
                    <span className="absolute -bottom-5 left-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-navy-800 ring-4 ring-white transition group-hover:bg-gold-500">
                      <span className="h-5 w-5 text-gold-400 transition group-hover:text-navy-900">
                        <Icon />
                      </span>
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5 pt-9">
                    <h3 className="text-[13px] leading-snug font-bold tracking-[0.06em] text-navy-800 uppercase">
                      {s.name}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-navy-800/60">
                      {s.blurb}
                    </p>
                    <span className="mt-4 text-[11px] font-bold tracking-[0.14em] text-gold-600 uppercase">
                      Explore →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------------- About / global trade ---------------- */}
      <section className="grid lg:grid-cols-2">
        <div className="flex items-center bg-white px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-xl lg:mr-0 lg:ml-auto lg:pr-14">
            <p className="text-[12px] font-bold tracking-[0.2em] text-gold-600 uppercase">
              About ABCO
            </p>
            <h2 className="rule-gold mt-3 text-3xl font-bold tracking-tight text-navy-800 uppercase sm:text-4xl">
              Built Around
              <span className="block">Global Trade</span>
            </h2>
            <p className="mt-7 leading-relaxed text-navy-800/65">
              ABCO works across international markets, building long-term relationships
              with suppliers, partners and customers, and facilitating the movement of
              products across borders.
            </p>

            <ul className="mt-8 space-y-3.5">
              {aboutPoints.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-navy-800/75">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500 text-[11px] font-bold text-white">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button href="/about" variant="navy">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center overflow-hidden bg-navy-900 px-4 py-16 lg:py-20">
          <div className="dot-grid absolute inset-0 text-white/[0.07]" aria-hidden="true" />
          <div className="relative w-full max-w-lg">
            <GlobeGraphic className="w-full" />

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="text-center text-[11px] font-bold tracking-[0.2em] text-gold-400 uppercase">
                Our Trade Ecosystem
              </p>
              <div className="mt-5 grid grid-cols-2 gap-x-2 gap-y-5 sm:grid-cols-4">
                {tradeCycle.map((t, i) => (
                  <div key={t.step} className="relative text-center">
                    <p className="text-[12px] font-bold tracking-[0.08em] text-white uppercase">
                      {t.step}
                    </p>
                    <p className="mt-1 text-[10px] leading-snug text-white/45">{t.detail}</p>
                    {i < tradeCycle.length - 1 && (
                      <span
                        className="absolute top-0 -right-1.5 hidden text-gold-500/60 sm:inline"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- Global presence ---------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="rule-gold-center text-center text-3xl font-bold tracking-[0.02em] text-navy-800 uppercase sm:text-4xl">
            Global Presence
          </h2>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.8fr_1.6fr]">
            <div>
              <p className="text-xl font-bold text-navy-800">
                Connected to markets around the world.
              </p>
              <p className="mt-5 leading-relaxed text-navy-800/60">
                ABCO continues to expand its presence and build strong partnerships
                across key regions, pairing relationships at origin with distribution
                reach in the markets our customers serve.
              </p>
              <div className="mt-8">
                <Button href="/global-presence" variant="outline">
                  View All Markets
                </Button>
              </div>
            </div>

            {/* The map's pin labels are illegible below tablet width, so small
                screens get the same regions as plain chips instead. */}
            <WorldMap withPins className="hidden w-full text-navy-800/25 md:block" />
            <ul className="grid grid-cols-2 gap-2.5 md:hidden">
              {regions.map((r) => (
                <li
                  key={r}
                  className="border border-navy-800/15 bg-ivory-50 px-3 py-3 text-center text-[13px] font-semibold text-navy-800"
                >
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------------- Leadership ---------------- */}
      <section className="bg-ivory-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="rule-gold-center text-center text-3xl font-bold tracking-[0.02em] text-navy-800 uppercase sm:text-4xl">
            Our Leadership
          </h2>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l) => (
              <article
                key={l.slug}
                className="group border border-navy-100 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Link href={`/leadership/${l.slug}`} className="block">
                  <Portrait
                    leader={l}
                    className="aspect-[4/5]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>
                <div className="p-5">
                  <h3 className="text-[15px] font-bold text-navy-800 transition group-hover:text-gold-600">
                    <Link href={`/leadership/${l.slug}`}>{l.name}</Link>
                  </h3>
                  <p className="mt-0.5 text-[13px] text-navy-800/55">{l.role}</p>
                  <div className="mt-3.5 border-t border-navy-50 pt-3.5">
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

      {/* ---------------- Insights & news ---------------- */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="rule-gold text-3xl font-bold tracking-[0.02em] text-navy-800 uppercase sm:text-4xl">
            Insights &amp; News
          </h2>

          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {insights.map((post, i) => (
              <article
                key={post.slug}
                className="group flex flex-col border border-navy-100 bg-white transition hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={sectors[i].image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute bottom-0 left-0 bg-gold-500 px-3 py-1.5 text-[10px] font-bold tracking-[0.12em] text-navy-900 uppercase">
                    {post.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <time className="text-[11px] tracking-wide text-navy-800/40" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </time>
                  <h3 className="mt-2 text-[15px] leading-snug font-bold text-navy-800">
                    {post.title}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-navy-800/60">
                    {post.excerpt}
                  </p>
                  <Link
                    href="/insights"
                    className="mt-4 text-[11px] font-bold tracking-[0.14em] text-gold-600 uppercase"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}

            <aside className="relative overflow-hidden bg-navy-800 p-8 text-white">
              <div className="dot-grid absolute inset-0 text-white/[0.08]" aria-hidden="true" />
              <div className="relative">
                <AnniversarySeal tone="light" className="h-16 w-16" />
                <h3 className="mt-6 text-2xl leading-tight font-bold uppercase">
                  Let&apos;s build global business together
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/70">
                  Talk to ABCO about sourcing, trading, logistics and commercial
                  opportunities across our six sectors.
                </p>
                <div className="mt-7">
                  <Button href="/contact">Contact Our Team</Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
