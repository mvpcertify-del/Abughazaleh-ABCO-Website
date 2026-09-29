/**
 * Dotted world map, drawn as simplified continent polygons filled with a dot
 * pattern — no raster asset, scales cleanly, and inherits `currentColor`.
 * Equirectangular, viewBox 1000 x 500 (lon -180..180, lat 85..-60).
 */

const CONTINENTS = [
  // North America
  "M33,69 111,52 153,52 222,41 278,41 333,86 347,121 319,138 306,148 292,172 275,207 250,193 231,203 208,224 181,190 153,155 139,103 83,86Z",
  // Greenland
  "M375,86 444,52 444,7 375,7 347,52Z",
  // South America
  "M275,265 292,259 333,252 361,293 403,310 403,369 367,407 339,431 319,448 306,472 297,448 303,397 306,355 289,310Z",
  // Africa
  "M453,241 500,235 542,214 589,186 600,217 619,252 642,252 617,297 611,345 597,369 589,390 569,410 550,414 533,355 525,297 500,276 472,276Z",
  // Eurasia
  "M472,145 486,169 528,162 569,169 600,169 625,155 639,190 658,207 689,214 717,266 722,248 744,217 764,241 778,248 792,259 806,224 833,217 839,186 853,172 861,145 889,138 897,114 875,103 889,86 944,86 972,66 1000,66 1000,45 944,41 889,41 806,31 722,31 667,45 611,52 583,52 556,52 528,76 514,86 500,93 486,103 500,121 486,128Z",
  // Australia
  "M814,369 839,355 861,335 881,335 894,331 906,359 917,379 925,390 917,421 897,428 875,414 858,403 819,410Z",
];

const PINS = [
  { label: "North America", x: 222, y: 138 },
  { label: "South America", x: 339, y: 334 },
  { label: "Europe", x: 528, y: 121 },
  { label: "Middle East", x: 633, y: 203 },
  { label: "Africa", x: 556, y: 286 },
  { label: "Asia Pacific", x: 819, y: 276 },
];

export function WorldMap({
  className = "",
  withPins = false,
  decorative = false,
  dotSize = 2.1,
  spacing = 8,
}: {
  className?: string;
  withPins?: boolean;
  /** Hide from assistive technology when the map is pure background texture. */
  decorative?: boolean;
  dotSize?: number;
  spacing?: number;
}) {
  const id = withPins ? "abco-map-pins" : "abco-map-plain";

  return (
    <svg
      viewBox="0 0 1000 500"
      className={className}
      {...(decorative
        ? { "aria-hidden": true }
        : { role: "img", "aria-label": "World map showing the regions ABCO trades in" })}
    >
      <defs>
        <pattern
          id={`${id}-dots`}
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={spacing / 2} cy={spacing / 2} r={dotSize / 2} fill="currentColor" />
        </pattern>
        <clipPath id={`${id}-clip`}>
          {CONTINENTS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </clipPath>
      </defs>

      <rect
        width="1000"
        height="500"
        fill={`url(#${id}-dots)`}
        clipPath={`url(#${id}-clip)`}
      />

      {withPins &&
        PINS.map((p) => (
          <g key={p.label} className="text-gold-500">
            <path
              d={`M${p.x} ${p.y + 11} c -6 -8 -9 -12 -9 -16.5 a 9 9 0 1 1 18 0 c 0 4.5 -3 8.5 -9 16.5 z`}
              fill="currentColor"
            />
            <circle cx={p.x} cy={p.y - 5.5} r="3.2" fill="#0a2240" />
            <text
              x={p.x}
              y={p.y + 27}
              textAnchor="middle"
              fontSize="15"
              fontWeight="700"
              letterSpacing="1.1"
              className="fill-navy-800"
              fontFamily="var(--font-sans, sans-serif)"
            >
              {p.label.toUpperCase()}
            </text>
          </g>
        ))}
    </svg>
  );
}
