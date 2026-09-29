import type { Metadata } from "next";
import { Button, PageHero, SectionHeading } from "@/components/ui";
import { regions, sectors } from "@/lib/site";

export const metadata: Metadata = {
  title: "Global Presence",
  description:
    "ABCO trades across the Middle East, North Africa, Europe, South Asia, East Asia and North America.",
};

const regionDetail: Record<string, string> = {
  "Middle East": "Home market and regional distribution base, headquartered in Dubai.",
  "North Africa": "Food and construction material supply into established buyer networks.",
  Europe: "Machinery, chemical and equipment sourcing from European manufacturers.",
  "South Asia": "Rice, pulses, spices and textiles sourced at origin.",
  "East Asia": "Manufacturing partners for machinery, equipment and industrial goods.",
  "North America": "Commodity sourcing and long-standing trading relationships.",
};

export default function GlobalPresencePage() {
  return (
    <>
      <PageHero
        eyebrow="Global Presence"
        title="Connected to markets around the world"
        lead="ABCO pairs relationships at origin with distribution reach in the markets its customers serve."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Our Reach" title="Regions we trade in" />
          <div className="mt-14 grid gap-px bg-navy-100 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => (
              <div key={r} className="bg-white p-8">
                <h3 className="font-display text-xl font-bold text-navy-800">{r}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-800/60">
                  {regionDetail[r]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-navy-800 py-20 text-white">
        <div className="dot-grid absolute inset-0 text-white/[0.07]" aria-hidden="true" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <SectionHeading
            eyebrow="One Network"
            title="Six sectors moving through the same network"
            tone="light"
          />
          <p className="mt-7 leading-relaxed text-white/70">
            Because ABCO runs its own logistics, every sector benefits from the same
            freight relationships, customs expertise and warehousing capacity.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-2.5">
            {sectors.map((s) => (
              <span
                key={s.slug}
                className="border border-white/20 px-4 py-2 text-sm font-semibold text-white/80"
              >
                {s.name}
              </span>
            ))}
          </div>
          <div className="mt-11 flex justify-center">
            <Button href="/contact">Talk To Us About Your Market</Button>
          </div>
        </div>
      </section>
    </>
  );
}
