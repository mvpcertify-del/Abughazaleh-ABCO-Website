# ABCO — Abughazaleh Trading Company LLC

Corporate website for **Abughazaleh Trading Company (ABCO) LLC**, an international
trading house operating since 1975 across six sectors: food products, construction
products, factory machinery, detergents and chemicals, logistics and real estate.

Production domain: **abughazalehabco.com**

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript
- Tailwind CSS v4
- Geist via `next/font` (matches the WCA Global site)
- Deploys to Vercel

## Getting started

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## Three home-page directions

The client is choosing between three home-page themes. A switcher is fixed to the
bottom-right of each one during review.

| Route      | Theme            | Character                                            |
| ---------- | ---------------- | ---------------------------------------------------- |
| `/`        | Trade Desk       | Navy and gold, full-bleed hero, sector cards          |
| `/theme-2` | Commodity Mosaic | Light editorial, ivory and olive, mosaic hero         |
| `/theme-3` | Heritage Ledger  | Dark premium, anniversary-led, timeline               |

Once a direction is signed off, delete `src/components/ThemeSwitcher.tsx` and the
`src/app/theme-2` and `src/app/theme-3` routes.

## Pages

`/` · `/about` · `/businesses` (+ one page per sector) · `/global-presence`
· `/leadership` (+ one page per board member) · `/insights` · `/contact`

## Editing content

Nearly all copy, imagery and links live in **`src/lib/site.ts`** — company details,
the six sectors, the board, regions, stats and insight posts. Most content changes
need no component edits.

## Outstanding before launch

- [ ] **Board photographs** — drop into `public/leadership/` using the filenames in
      that folder's README. Until then a drawn placeholder is shown. Do not
      substitute stock photos of real people under a director's name.
- [ ] **LinkedIn URLs** — the four `linkedin` fields in `src/lib/site.ts` still
      point at linkedin.com.
- [ ] **Logo artwork** — `src/components/Logo.tsx` renders a wordmark stand-in;
      swap in the client's vector file.
- [ ] **Photography** — sector and hero images are Unsplash placeholders, all
      referenced from `src/lib/site.ts`.
- [ ] **Contact form** — currently opens the visitor's mail client; wire it to a
      form service or an API route.
- [ ] Confirm the phone number and office address.
