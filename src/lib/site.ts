export const site = {
  name: "Abughazaleh Trading Company (ABCO) LLC",
  shortName: "ABCO",
  domain: "abughazalehabco.com",
  url: "https://abughazalehabco.com",
  tagline: "International Trade Since 1975",
  founded: 1975,
  anniversaryYear: 2025,
  description:
    "Abughazaleh Trading Company (ABCO) LLC is an international trading house operating since 1975 across food products, construction products, factory machinery, detergents and chemicals, logistics and real estate.",
  email: "info@abughazalehabco.com",
  phone: "+9714 8886574",
  address: "Dubai, United Arab Emirates",
};

/** Home hero background. Swap for client photography when supplied. */
export const heroImage =
  "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=2000&q=80";

/** "Built around global trade" panel — distribution fleet, shot from above. */
export const aboutImage =
  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=80";

export type Sector = {
  slug: string;
  name: string;
  short: string;
  blurb: string;
  description: string;
  image: string;
  highlights: string[];
};

/**
 * Swap `image` for a local path (e.g. "/sectors/food.jpg") once client
 * photography arrives; nothing else in the site references these URLs.
 */
export const sectors: Sector[] = [
  {
    slug: "food-products",
    name: "Food Products",
    short: "Food",
    blurb: "Sourcing and supplying quality food commodities across international markets.",
    description:
      "ABCO sources grains, pulses, spices, oils and packaged food products from producing regions and supplies them to wholesalers, distributors and institutional buyers. Long-standing supplier relationships and disciplined quality control underpin every shipment.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Grains, pulses, rice and sugar",
      "Spices, herbs and edible oils",
      "Packaged and processed foods",
      "Origin inspection and quality assurance",
    ],
  },
  {
    slug: "construction-products",
    name: "Construction Products",
    short: "Construction",
    blurb: "Materials and solutions for construction and infrastructure projects.",
    description:
      "From structural steel and cement to finishing materials and fittings, ABCO supplies contractors and developers with dependable construction products, coordinating procurement schedules around real project timelines.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Steel, cement and aggregates",
      "Finishing and interior materials",
      "Fittings, fixtures and hardware",
      "Project-based procurement planning",
    ],
  },
  {
    slug: "factory-machinery",
    name: "Factory Machinery",
    short: "Machinery",
    blurb: "Industrial machinery and equipment for manufacturing industries.",
    description:
      "ABCO represents and supplies production lines, processing equipment and industrial machinery, supporting clients from specification and sourcing through installation and spare-parts supply.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Complete production lines",
      "Processing and packaging equipment",
      "Spare parts and consumables",
      "Technical specification support",
    ],
  },
  {
    slug: "detergents-chemicals",
    name: "Detergents & Chemicals",
    short: "Chemicals",
    blurb: "Detergents and chemical products for industrial and commercial use.",
    description:
      "ABCO trades industrial and household detergents, cleaning agents and chemical raw materials, handling documentation, compliance and safe handling requirements across every market it serves.",
    image:
      "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Industrial and household detergents",
      "Chemical raw materials",
      "Cleaning and sanitation products",
      "Regulatory and safety documentation",
    ],
  },
  {
    slug: "logistics",
    name: "Logistics",
    short: "Logistics",
    blurb: "International logistics and supply chain management.",
    description:
      "ABCO's logistics arm moves the goods it trades and those of its partners, arranging freight, customs clearance, warehousing and last-mile distribution across multiple corridors.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Sea, air and land freight",
      "Customs clearance and documentation",
      "Warehousing and inventory handling",
      "Regional distribution networks",
    ],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    short: "Real Estate",
    blurb: "Real estate development and investment opportunities.",
    description:
      "ABCO develops and holds commercial and residential property, applying the same long-horizon approach that has guided its trading business for five decades.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "Commercial and residential development",
      "Long-term property holdings",
      "Asset and facility management",
      "Investment partnerships",
    ],
  },
];

export type Leader = {
  slug: string;
  name: string;
  role: string;
  linkedin: string;
  /** Drop a file at this path in /public to replace the placeholder portrait. */
  photo: string;
  bio: string[];
  focus: string[];
};

export const leadership: Leader[] = [
  {
    slug: "marwan-abu-ghazaleh",
    name: "Marwan Abu-Ghazaleh",
    role: "Chairman",
    linkedin: "https://www.linkedin.com/",
    photo: "/leadership/marwan-abu-ghazaleh.jpg",
    bio: [
      "Marwan Abu-Ghazaleh serves as Chairman of Abughazaleh Trading Company (ABCO) LLC, guiding the group's direction and long-term strategy.",
      "Under his stewardship ABCO has grown from its 1975 foundations into a diversified international trading house spanning food, construction, industrial machinery, chemicals, logistics and real estate.",
    ],
    focus: ["Group strategy", "Governance", "Partnerships"],
  },
  {
    slug: "midhat-abu-ghazaleh",
    name: "Midhat Abu-Ghazaleh",
    role: "Chief Executive Officer",
    linkedin: "https://www.linkedin.com/in/midhatabughazaleh/",
    photo: "/leadership/midhat-abu-ghazaleh.jpg",
    bio: [
      "Midhat Abu-Ghazaleh is Chief Executive Officer of ABCO, leading the company's operations across all six business sectors.",
      "He is responsible for translating the board's strategy into commercial execution, from supplier and customer relationships through to the group's logistics and distribution capability.",
    ],
    focus: ["Operations", "Commercial growth", "Supply chain"],
  },
  {
    slug: "hassan-abu-ghazaleh",
    name: "Hassan Abu-Ghazaleh",
    role: "Board Member",
    linkedin: "https://www.linkedin.com/",
    photo: "/leadership/hassan-abu-ghazaleh.jpg",
    bio: [
      "Hassan Abu-Ghazaleh serves on the board of Abughazaleh Trading Company (ABCO) LLC.",
      "He contributes to the group's oversight and to the development of its trading and investment activities across international markets.",
    ],
    focus: ["Board oversight", "Market development", "Investments"],
  },
  {
    slug: "nabil-abu-ghazaleh",
    name: "Nabil Abu-Ghazaleh",
    role: "Board Member",
    linkedin: "https://www.linkedin.com/",
    photo: "/leadership/nabil-abu-ghazaleh.jpg",
    bio: [
      "Nabil Abu-Ghazaleh serves on the board of Abughazaleh Trading Company (ABCO) LLC.",
      "He supports the group's governance and the continued expansion of its commercial relationships across its core sectors.",
    ],
    focus: ["Board oversight", "Commercial relationships", "Growth"],
  },
];

export const stats = [
  { value: "1975", label: "Trading Since", sub: "50 years of continuity" },
  { value: "06", label: "Business Sectors", sub: "Diversified portfolio" },
  { value: "Global", label: "Market Reach", sub: "Multi-region trade" },
  { value: "UAE", label: "Headquarters", sub: "Dubai, United Arab Emirates" },
];

export const tradeCycle = [
  { step: "Source", detail: "Producers and mills at origin" },
  { step: "Contract", detail: "Terms, quality and pricing agreed" },
  { step: "Move", detail: "Freight, clearance and storage" },
  { step: "Deliver", detail: "Distributors and end buyers" },
];

export const regions = [
  "Middle East",
  "North Africa",
  "Europe",
  "South Asia",
  "East Asia",
  "North America",
];

/**
 * Kept short so the full menu fits on a 1024px laptop without wrapping.
 * Global Presence and Insights stay reachable from the footer and from
 * in-page links rather than crowding the header.
 */
export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/businesses", label: "Businesses" },
  { href: "/global-presence", label: "Presence" },
  { href: "/leadership", label: "Leadership" },
  { href: "/contact", label: "Contact" },
];

export const insights = [
  {
    slug: "abco-marks-50-years",
    tag: "Company News",
    date: "2025-06-10",
    title: "ABCO marks 50 years of international trade",
    excerpt:
      "Five decades after its founding in 1975, ABCO reflects on the supplier and customer relationships that have carried the business across generations.",
  },
  {
    slug: "food-commodity-outlook",
    tag: "Market Insight",
    date: "2025-05-02",
    title: "Food commodity outlook for the year ahead",
    excerpt:
      "Shifting production cycles and freight costs are reshaping how buyers plan their food commodity procurement.",
  },
  {
    slug: "industrial-supply-chains",
    tag: "Industry News",
    date: "2025-03-18",
    title: "What resilient industrial supply chains look like now",
    excerpt:
      "Diversified sourcing and closer supplier partnerships are proving more valuable than lowest-cost procurement alone.",
  },
];
