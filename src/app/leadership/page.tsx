import Link from "next/link";
import type { Metadata } from "next";
import { PageHero, Portrait, LinkedInLink, Button } from "@/components/ui";
import { leadership } from "@/lib/site";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "The board of Abughazaleh Trading Company (ABCO) LLC — Chairman, Chief Executive Officer and board members.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="The board behind fifty years of trade"
        lead="ABCO is led by a board whose relationships with suppliers, partners and customers stretch back across generations of the business."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((l) => (
              <article
                key={l.slug}
                className="group border border-navy-100 bg-white transition hover:shadow-lg"
              >
                <Link href={`/leadership/${l.slug}`} className="block">
                  <Portrait
                    leader={l}
                    className="aspect-[4/5]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </Link>
                <div className="p-6">
                  <h2 className="font-display text-lg font-bold text-navy-800 transition group-hover:text-gold-600">
                    <Link href={`/leadership/${l.slug}`}>{l.name}</Link>
                  </h2>
                  <p className="mt-0.5 text-sm text-navy-800/55">{l.role}</p>
                  <p className="mt-4 text-sm leading-relaxed text-navy-800/60">{l.bio[0]}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <LinkedInLink href={l.linkedin} />
                    <Link
                      href={`/leadership/${l.slug}`}
                      className="text-[12px] font-bold tracking-[0.14em] text-gold-600 uppercase"
                    >
                      Profile →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 border-t border-navy-100 pt-12 text-center">
            <p className="mx-auto max-w-2xl leading-relaxed text-navy-800/60">
              For media enquiries or to arrange a meeting with a member of the board,
              please contact our team.
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
