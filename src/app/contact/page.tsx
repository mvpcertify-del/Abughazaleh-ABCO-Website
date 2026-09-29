import type { Metadata } from "next";
import { AnniversarySeal } from "@/components/Anniversary50";
import { PageHero } from "@/components/ui";
import { sectors, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact Abughazaleh Trading Company (ABCO) LLC — ${site.address}.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's build global business together"
        lead="Talk to ABCO about sourcing, trading, logistics and commercial opportunities across our six sectors."
      />

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-display rule-gold text-2xl font-bold text-navy-800">
              Get in touch
            </h2>

            <dl className="mt-8 space-y-6">
              <div>
                <dt className="text-[12px] font-bold tracking-[0.16em] text-gold-600 uppercase">
                  Head Office
                </dt>
                <dd className="mt-1.5 text-navy-800/75">{site.address}</dd>
              </div>
              <div>
                <dt className="text-[12px] font-bold tracking-[0.16em] text-gold-600 uppercase">
                  Telephone
                </dt>
                <dd className="mt-1.5">
                  <a
                    href={`tel:${site.phone.replace(/\s/g, "")}`}
                    className="text-navy-800/75 hover:text-gold-600"
                  >
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-bold tracking-[0.16em] text-gold-600 uppercase">
                  Email
                </dt>
                <dd className="mt-1.5">
                  <a href={`mailto:${site.email}`} className="text-navy-800/75 hover:text-gold-600">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[12px] font-bold tracking-[0.16em] text-gold-600 uppercase">
                  Website
                </dt>
                <dd className="mt-1.5 text-navy-800/75">{site.domain}</dd>
              </div>
            </dl>

            <AnniversarySeal className="mt-12 h-32 w-32" />
          </div>

          <div className="bg-ivory-50 p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-navy-800">Send an enquiry</h2>
            <p className="mt-2 text-sm text-navy-800/55">
              Fields marked with an asterisk are required.
            </p>

            <form
              action={`mailto:${site.email}`}
              method="post"
              encType="text/plain"
              className="mt-8 grid gap-5 sm:grid-cols-2"
            >
              <Field label="Full name *" name="name" required />
              <Field label="Company" name="company" />
              <Field label="Email *" name="email" type="email" required />
              <Field label="Telephone" name="phone" type="tel" />

              <label className="sm:col-span-2">
                <span className="text-[12px] font-bold tracking-[0.12em] text-navy-800/70 uppercase">
                  Area of interest
                </span>
                <select
                  name="interest"
                  defaultValue=""
                  className="mt-2 w-full border border-navy-800/15 bg-white px-4 py-3 text-sm text-navy-800 outline-none focus:border-gold-500"
                >
                  <option value="">Select a business sector</option>
                  {sectors.map((s) => (
                    <option key={s.slug} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </label>

              <label className="sm:col-span-2">
                <span className="text-[12px] font-bold tracking-[0.12em] text-navy-800/70 uppercase">
                  Message *
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full border border-navy-800/15 bg-white px-4 py-3 text-sm text-navy-800 outline-none focus:border-gold-500"
                />
              </label>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-sm bg-navy-800 px-6 py-3.5 text-[12px] font-bold tracking-[0.12em] text-white uppercase transition hover:bg-navy-700 sm:w-auto"
                >
                  Send Enquiry
                </button>
                <p className="mt-4 text-xs leading-relaxed text-navy-800/45">
                  This form opens your email client. Connect it to a form service or an API
                  route to receive submissions directly.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label>
      <span className="text-[12px] font-bold tracking-[0.12em] text-navy-800/70 uppercase">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        className="mt-2 w-full border border-navy-800/15 bg-white px-4 py-3 text-sm text-navy-800 outline-none focus:border-gold-500"
      />
    </label>
  );
}
