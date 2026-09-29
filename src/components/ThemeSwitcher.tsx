import Link from "next/link";

export const themeOptions = [
  { href: "/", n: 1, name: "Trade Desk" },
  { href: "/theme-2", n: 2, name: "Commodity Mosaic" },
  { href: "/theme-3", n: 3, name: "Heritage Ledger" },
];

/**
 * Client-facing preview switcher for the three home-page directions.
 * Delete this component (and the /theme-2, /theme-3 routes) once a
 * direction is signed off.
 */
export function ThemeSwitcher({ current }: { current: number }) {
  return (
    <div className="fixed right-4 bottom-4 z-40 print:hidden">
      <div className="rounded-full border border-navy-800/10 bg-white/95 p-1.5 shadow-xl ring-1 ring-black/5 backdrop-blur">
        <div className="flex items-center gap-1">
          <span className="px-3 text-[10px] font-bold tracking-[0.16em] text-navy-800/50 uppercase">
            Theme
          </span>
          {themeOptions.map((t) => (
            <Link
              key={t.href}
              href={t.href}
              title={t.name}
              aria-current={current === t.n ? "page" : undefined}
              className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition ${
                current === t.n
                  ? "bg-navy-800 text-white"
                  : "text-navy-800/60 hover:bg-navy-50 hover:text-navy-800"
              }`}
            >
              {t.n}
            </Link>
          ))}
        </div>
      </div>
      <p className="mt-2 text-center text-[10px] font-medium tracking-wide text-navy-800/45">
        {themeOptions.find((t) => t.n === current)?.name}
      </p>
    </div>
  );
}
