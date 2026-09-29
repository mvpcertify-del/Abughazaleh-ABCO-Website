import type { Metadata } from "next";
import { AnniversarySeal } from "@/components/Anniversary50";
import { Button, PageHero, SectionHeading } from "@/components/ui";
import { sectors, tradeCycle } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Abughazaleh Trading Company (ABCO) LLC has traded internationally since 1975 across six complementary business sectors.",
};

const values = [
  {
    title: "Reliability",
    text: "Commitments made at contract are commitments met at delivery. Fifty years of repeat business rests on it.",
  },
  {
    title: "Diversification",
    text: "Six sectors that complement each other, so the business is never dependent on a single market cycle.",
  },
  {
    title: "Relationships",
    text: "Suppliers and customers we have worked with for decades, in some cases across two generations.",
  },
  {
    title: "Control",
    text: "Owning our logistics means we answer for the goods from origin all the way to the buyer's door.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ABCO"
        title="An international trading house since 1975"
        lead="Abughazaleh Trading Company (ABCO) LLC buys, sells and moves goods across international markets — and has done so without interruption for fifty years."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.5fr_auto] lg:items-start">
          <div>
            <SectionHeading eyebrow="Our Story" title="Fifty years in trade" align="left" />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-navy-800/70">
              <p>
                ABCO began in 1975 trading food commodities. As the region built, the
                company added construction materials; as industry grew, it added factory
                machinery; as manufacturing matured, it added detergents and chemical
                products.
              </p>
              <p>
                Logistics followed naturally — moving and storing the goods we trade gave
                us control over quality and timing that brokers cannot offer. Real estate
                came later, applying the same long-horizon thinking to property.
              </p>
              <p>
                Today ABCO operates six complementary business sectors from its base in
                the United Arab Emirates, serving customers across the Middle East, North
                Africa, Europe, Asia and North America.
              </p>
            </div>
          </div>
          <AnniversarySeal className="mx-auto h-48 w-48 lg:h-56 lg:w-56" />
        </div>
      </section>

      <section className="bg-ivory-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="Our Values" title="How we do business" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="border-t-2 border-gold-500 bg-white p-7">
                <h3 className="font-display text-xl font-bold text-navy-800">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-800/60">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading eyebrow="What We Do" title="From origin to end buyer" tone="light" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tradeCycle.map((t, i) => (
              <div key={t.step} className="border border-white/10 p-7">
                <span className="font-display text-4xl font-bold text-gold-500/35">
                  0{i + 1}
                </span>
                <h3 className="mt-2 text-lg font-bold">{t.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">{t.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 flex flex-wrap gap-3">
            {sectors.map((s) => (
              <span
                key={s.slug}
                className="border border-white/20 px-4 py-2 text-sm font-semibold text-white/80"
              >
                {s.name}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <Button href="/businesses">Our Businesses</Button>
            <Button href="/leadership" variant="outline-light">
              Our Board
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
