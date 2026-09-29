import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Button } from "@/components/ui";
import { sectors, tradeCycle } from "@/lib/site";

export function generateStaticParams() {
  return sectors.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) return {};
  return { title: sector.name, description: sector.description };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const sector = sectors.find((s) => s.slug === slug);
  if (!sector) notFound();

  const others = sectors.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 py-20 text-white sm:py-28">
        <Image
          src={sector.image}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 to-navy-900/55" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <nav className="mb-8 text-sm text-white/55" aria-label="Breadcrumb">
            <Link href="/businesses" className="hover:text-gold-300">
              Our Businesses
            </Link>
            <span className="mx-2 text-white/25">/</span>
            <span className="text-white/80">{sector.name}</span>
          </nav>
          <h1 className="font-display max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            {sector.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">{sector.blurb}</p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="font-display rule-gold text-2xl font-bold text-navy-800">Overview</h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-800/70">{sector.description}</p>

            <h3 className="font-display mt-12 text-xl font-bold text-navy-800">
              What we handle
            </h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {sector.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 border-l-2 border-gold-500 bg-ivory-50 px-4 py-3 text-sm text-navy-800/75"
                >
                  {h}
                </li>
              ))}
            </ul>

            <h3 className="font-display mt-12 text-xl font-bold text-navy-800">
              How we run a trade
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-4">
              {tradeCycle.map((t, i) => (
                <div key={t.step} className="border-t-2 border-navy-100 pt-4">
                  <p className="font-display text-2xl font-bold text-gold-500/40">0{i + 1}</p>
                  <p className="mt-1 font-bold text-navy-800">{t.step}</p>
                  <p className="mt-1 text-sm text-navy-800/55">{t.detail}</p>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button href="/contact" variant="navy">
                Enquire About {sector.short}
              </Button>
            </div>
          </div>

          <aside className="self-start lg:sticky lg:top-32">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={sector.image}
                alt={sector.name}
                fill
                sizes="(max-width: 1024px) 100vw, 400px"
                className="object-cover"
              />
            </div>
            <div className="mt-8 bg-ivory-100 p-7">
              <h3 className="text-[12px] font-bold tracking-[0.16em] text-gold-600 uppercase">
                Other Businesses
              </h3>
              <ul className="mt-4 space-y-3">
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/businesses/${s.slug}`}
                      className="flex items-center justify-between gap-3 text-sm font-semibold text-navy-800 transition hover:text-gold-600"
                    >
                      {s.name}
                      <span aria-hidden="true">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
