import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { insights } from "@/lib/site";

export const metadata: Metadata = {
  title: "Insights",
  description: "News and market views from Abughazaleh Trading Company (ABCO) LLC.",
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="News & market views"
        lead="Company news and commentary on the markets ABCO trades in."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="divide-y divide-navy-100">
            {insights.map((post) => (
              <article key={post.slug} className="py-9 first:pt-0">
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold tracking-[0.14em] uppercase">
                  <span className="bg-gold-500 px-2.5 py-1 text-navy-900">{post.tag}</span>
                  <time className="text-navy-800/45" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="font-display mt-4 text-2xl font-bold text-navy-800">
                  {post.title}
                </h2>
                <p className="mt-3 leading-relaxed text-navy-800/65">{post.excerpt}</p>
              </article>
            ))}
          </div>

          <p className="mt-14 border-t border-navy-100 pt-8 text-sm text-navy-800/50">
            Further articles will be published here. Editorial content can be supplied by
            ABCO and added to this section at any time.
          </p>
        </div>
      </section>
    </>
  );
}
