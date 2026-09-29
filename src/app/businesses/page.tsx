import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { sectors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Businesses",
  description:
    "ABCO trades across six sectors: food products, construction products, factory machinery, detergents and chemicals, logistics and real estate.",
};

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Businesses"
        title="Six sectors, one trading house"
        lead="Each line of business stands on its own — and each one strengthens the others, from sourcing through to delivery."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <Link
                key={s.slug}
                href={`/businesses/${s.slug}`}
                className="group block border border-navy-100 transition hover:border-gold-500/60 hover:shadow-lg"
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
                  <h2 className="font-display text-xl font-bold text-navy-800">{s.name}</h2>
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
    </>
  );
}
