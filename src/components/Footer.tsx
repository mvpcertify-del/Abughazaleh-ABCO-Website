import Link from "next/link";
import { Logo } from "./Logo";
import { AnniversarySeal } from "./Anniversary50";
import { leadership, sectors, site } from "@/lib/site";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/global-presence", label: "Global Presence" },
  { href: "/leadership", label: "Leadership" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact Us" },
];

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo tone="light" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
              {site.description}
            </p>
            <AnniversarySeal tone="light" className="mt-7 h-24 w-24 opacity-90" />
          </div>

          <div>
            <h3 className="text-[12px] font-bold tracking-[0.16em] text-gold-400 uppercase">
              Our Businesses
            </h3>
            <ul className="mt-5 space-y-2.5">
              {sectors.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/businesses/${s.slug}`}
                    className="text-sm text-white/65 transition hover:text-gold-300"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold tracking-[0.16em] text-gold-400 uppercase">
              Company
            </h3>
            <ul className="mt-5 space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/65 transition hover:text-gold-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[12px] font-bold tracking-[0.16em] text-gold-400 uppercase">
              Contact Us
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li>{site.address}</li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-gold-300">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold-300">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.url}
                  className="hover:text-gold-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {site.domain}
                </a>
              </li>
            </ul>

            <h3 className="mt-8 text-[12px] font-bold tracking-[0.16em] text-gold-400 uppercase">
              Board
            </h3>
            <ul className="mt-4 space-y-2">
              {leadership.map((l) => (
                <li key={l.slug}>
                  <Link
                    href={`/leadership/${l.slug}`}
                    className="text-sm text-white/65 transition hover:text-gold-300"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            © {new Date().getFullYear()} Abughazaleh Trading Company (ABCO) LLC. All rights
            reserved.
          </p>
          <p>Celebrating 50 years of international trade · 1975 – 2025</p>
        </div>
      </div>
    </footer>
  );
}
