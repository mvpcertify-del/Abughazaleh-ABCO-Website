import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { AnniversaryLockup } from "@/components/Anniversary50";
import { Button, LinkedInLink, Portrait } from "@/components/ui";
import { leadership, site } from "@/lib/site";

export function generateStaticParams() {
  return leadership.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const leader = leadership.find((l) => l.slug === slug);
  if (!leader) return {};
  return {
    title: `${leader.name} — ${leader.role}`,
    description: leader.bio[0],
  };
}

export default async function LeaderPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const leader = leadership.find((l) => l.slug === slug);
  if (!leader) notFound();

  const others = leadership.filter((l) => l.slug !== slug);

  return (
    <>
      <section className="relative overflow-hidden bg-navy-800 text-white">
        <div className="dot-grid absolute inset-0 text-white/[0.06]" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
          <nav className="mb-10 text-sm text-white/55" aria-label="Breadcrumb">
            <Link href="/leadership" className="hover:text-gold-300">
              Leadership
            </Link>
            <span className="mx-2 text-white/25">/</span>
            <span className="text-white/80">{leader.name}</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-[22rem_1fr] lg:gap-14">
            <Portrait
              leader={leader}
              className="aspect-[4/5] w-full max-w-sm border border-white/10"
              sizes="(max-width: 1024px) 100vw, 352px"
              priority
            />

            <div className="lg:pt-4">
              <p className="text-[12px] font-bold tracking-[0.2em] text-gold-400 uppercase">
                {leader.role}
              </p>
              <h1 className="font-display mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
                {leader.name}
              </h1>

              <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/70">
                {leader.bio.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-2.5">
                {leader.focus.map((f) => (
                  <span
                    key={f}
                    className="border border-white/20 px-4 py-2 text-[12px] font-semibold tracking-[0.1em] text-white/75 uppercase"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
                <LinkedInLink
                  href={leader.linkedin}
                  tone="light"
                  label={`Connect with ${leader.name.replace(/^Mr\.\s*/i, "").split(" ")[0]} on LinkedIn`}
                />
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm font-medium text-white/75 transition hover:text-gold-300"
                >
                  {site.email}
                </a>
              </div>

              <div className="mt-8">
                <AnniversaryLockup tone="light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ivory-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-display rule-gold text-2xl font-bold text-navy-800">
            Also on the board
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {others.map((l) => (
              <article key={l.slug} className="group bg-white transition hover:shadow-lg">
                <Link href={`/leadership/${l.slug}`} className="flex items-center gap-4 p-4">
                  <Portrait leader={l} className="h-20 w-20 shrink-0 rounded-full" sizes="80px" />
                  <div className="min-w-0">
                    <h3 className="font-bold text-navy-800 transition group-hover:text-gold-600">
                      {l.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-navy-800/55">{l.role}</p>
                  </div>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <Button href="/leadership" variant="outline">
              All Leadership
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
