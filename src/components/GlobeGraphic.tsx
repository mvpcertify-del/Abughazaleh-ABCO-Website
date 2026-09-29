/**
 * Stylised trade-network globe: dotted sphere, meridians and parallels, with
 * gold nodes and connecting arcs. Pure SVG, no raster asset.
 */
export function GlobeGraphic({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 118, y: 96 },
    { x: 196, y: 70 },
    { x: 252, y: 128 },
    { x: 148, y: 176 },
    { x: 228, y: 208 },
    { x: 92, y: 150 },
  ];

  const arcs = [
    "M118,96 Q160,52 196,70",
    "M196,70 Q240,88 252,128",
    "M252,128 Q214,150 228,208",
    "M148,176 Q106,178 92,150",
    "M92,150 Q94,112 118,96",
    "M148,176 Q196,160 228,208",
  ];

  return (
    <svg viewBox="0 0 340 300" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="abco-globe-fill" cx="38%" cy="32%" r="78%">
          <stop offset="0%" stopColor="#1b4574" />
          <stop offset="60%" stopColor="#0a2240" />
          <stop offset="100%" stopColor="#04101f" />
        </radialGradient>
        <pattern id="abco-globe-dots" width="9" height="9" patternUnits="userSpaceOnUse">
          <circle cx="4.5" cy="4.5" r="1.15" fill="#8fb3dd" fillOpacity="0.5" />
        </pattern>
        <clipPath id="abco-globe-clip">
          <circle cx="170" cy="150" r="118" />
        </clipPath>
        <filter id="abco-globe-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* outer halo */}
      <circle cx="170" cy="150" r="134" fill="#c9a227" fillOpacity="0.07" />
      <circle cx="170" cy="150" r="124" fill="none" stroke="#c9a227" strokeOpacity="0.28" strokeWidth="1" />

      {/* sphere */}
      <circle cx="170" cy="150" r="118" fill="url(#abco-globe-fill)" />
      <circle cx="170" cy="150" r="118" fill="url(#abco-globe-dots)" />

      {/* graticule */}
      <g clipPath="url(#abco-globe-clip)" stroke="#8fb3dd" strokeOpacity="0.22" fill="none" strokeWidth="1">
        <ellipse cx="170" cy="150" rx="118" ry="40" />
        <ellipse cx="170" cy="150" rx="118" ry="80" />
        <ellipse cx="170" cy="150" rx="40" ry="118" />
        <ellipse cx="170" cy="150" rx="80" ry="118" />
        <line x1="52" y1="150" x2="288" y2="150" />
        <line x1="170" y1="32" x2="170" y2="268" />
      </g>

      {/* trade arcs */}
      <g clipPath="url(#abco-globe-clip)">
        {arcs.map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke="#e3c767"
            strokeOpacity="0.55"
            strokeWidth="1.3"
            strokeDasharray="3 4"
          />
        ))}
      </g>

      {/* nodes */}
      <g filter="url(#abco-globe-glow)">
        {nodes.map((n) => (
          <circle key={`${n.x}-${n.y}`} cx={n.x} cy={n.y} r="3.4" fill="#e3c767" />
        ))}
      </g>

      {/* rim light */}
      <circle
        cx="170"
        cy="150"
        r="118"
        fill="none"
        stroke="#c9a227"
        strokeOpacity="0.5"
        strokeWidth="1.4"
      />
    </svg>
  );
}
