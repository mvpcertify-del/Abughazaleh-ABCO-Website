"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { AnniversaryLockup } from "./Anniversary50";
import { nav, site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-navy-900 text-white/80">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 text-[11px] tracking-wide sm:px-6">
          <p className="truncate">Since 1975 — Building Global Trade Connections</p>
          <div className="hidden items-center gap-4 sm:flex">
            <a href={`mailto:${site.email}`} className="hover:text-gold-300">
              {site.email}
            </a>
            <span className="text-white/25">|</span>
            <span>EN</span>
          </div>
        </div>
      </div>

      <div className="border-b border-navy-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-[13px] font-semibold tracking-wide uppercase transition-colors ${
                  isActive(item.href)
                    ? "text-navy-800"
                    : "text-navy-800/65 hover:text-navy-800"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-gold-500" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <AnniversaryLockup className="hidden xl:inline-flex" />
            <Link
              href="/contact"
              className="hidden rounded-sm bg-gold-500 px-5 py-2.5 text-[12px] font-bold tracking-[0.12em] text-navy-900 uppercase transition hover:bg-gold-400 sm:inline-block"
            >
              Let&apos;s Talk
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle navigation menu"
              className="rounded-sm border border-navy-100 p-2.5 text-navy-800 lg:hidden"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                ) : (
                  <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-navy-100 bg-white lg:hidden" aria-label="Mobile">
            <ul className="mx-auto max-w-7xl px-4 py-2 sm:px-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block border-b border-navy-50 py-3.5 text-sm font-semibold tracking-wide uppercase ${
                      isActive(item.href) ? "text-gold-600" : "text-navy-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="py-4">
                <Link
                  href="/contact"
                  className="block rounded-sm bg-gold-500 px-5 py-3 text-center text-[12px] font-bold tracking-[0.12em] text-navy-900 uppercase"
                >
                  Let&apos;s Talk
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
