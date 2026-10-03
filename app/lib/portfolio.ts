export type Social = {
  label: string;
  href: string;
};

export const profile = {
  name: "Alex Rivera",
  firstName: "Alex",
  lastName: "Rivera",
  role: "Creative Developer & Product Designer",
  tagline:
    "I design and build fast, accessible, and delightfully animated digital products for teams that care about the details.",
  location: "San Francisco, CA",
  email: "hello@example.com",
  resumeUrl: "#",
  availability: "Available for freelance & full-time",
  socials: [
    { label: "GitHub", href: "https://github.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "X", href: "https://x.com" },
    { label: "Dribbble", href: "https://dribbble.com" },
  ] satisfies Social[],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "8+", label: "Years crafting for the web" },
  { value: "60+", label: "Products shipped" },
  { value: "12", label: "Design awards" },
  { value: "∞", label: "Cups of coffee" },
];

export const marquee = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Motion",
  "Figma",
  "GraphQL",
  "PostgreSQL",
  "Three.js",
  "Accessibility",
  "Design Systems",
];

export const projects = [
  {
    slug: "nova-analytics",
    title: "Nova Analytics",
    category: "SaaS Platform",
    year: "2026",
    blurb:
      "A real-time analytics workspace with collaborative dashboards, live cursors, and sub-second queries.",
    tags: ["Next.js", "WebSockets", "Postgres"],
    image: "/project-1.svg",
    href: "#",
    featured: true,
  },
  {
    slug: "atlas-commerce",
    title: "Atlas Commerce",
    category: "Headless Commerce",
    year: "2025",
    blurb:
      "A blazing-fast storefront with edge rendering, dynamic merchandising, and a fully typed checkout flow.",
    tags: ["React", "Stripe", "Edge"],
    image: "/project-2.svg",
    href: "#",
    featured: true,
  },
  {
    slug: "pulse-health",
    title: "Pulse Health",
    category: "Mobile + Web",
    year: "2025",
    blurb:
      "A patient companion app pairing wearable data with a calm, accessible interface and offline support.",
    tags: ["React Native", "Design System", "A11y"],
    image: "/project-3.svg",
    href: "#",
    featured: false,
  },
  {
    slug: "orbit-studio",
    title: "Orbit Studio",
    category: "Creative Tooling",
    year: "2024",
    blurb:
      "A browser-based 3D scene editor with a node graph, real-time preview, and collaborative history.",
    tags: ["Three.js", "WebGL", "State Machines"],
    image: "/project-4.svg",
    href: "#",
    featured: false,
  },
];

export const experience = [
  {
    company: "Northwind Labs",
    role: "Principal Product Engineer",
    period: "2023 — Present",
    location: "Remote",
    description:
      "Lead the frontend platform for a suite of B2B tools, driving performance budgets, design system adoption, and developer experience across five teams.",
    highlights: [
      "Cut median page load by 58% through streaming and caching strategy.",
      "Shipped a component system used by 40+ engineers.",
    ],
  },
  {
    company: "Lumen Studio",
    role: "Senior Frontend Engineer",
    period: "2020 — 2023",
    location: "San Francisco, CA",
    description:
      "Built award-winning marketing experiences and interactive product tours for global brands, collaborating tightly with design.",
    highlights: [
      "Delivered 20+ launches with a 100 Lighthouse accessibility score.",
      "Introduced motion guidelines adopted across the studio.",
    ],
  },
  {
    company: "Brightside",
    role: "Frontend Engineer",
    period: "2018 — 2020",
    location: "Austin, TX",
    description:
      "Early engineer on a fintech dashboard, owning data visualization and the migration from a legacy stack to React.",
    highlights: [
      "Migrated the core app to a modern React architecture.",
      "Built the charting layer used across the product.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Engineering",
    items: ["TypeScript", "React", "Next.js", "Node.js", "GraphQL", "PostgreSQL"],
  },
  {
    title: "Interaction & Motion",
    items: ["Framer Motion", "GSAP", "Canvas", "WebGL", "Micro-interactions"],
  },
  {
    title: "Design",
    items: ["Design Systems", "Figma", "Prototyping", "Accessibility", "Art Direction"],
  },
];

export const services = [
  {
    title: "Product Engineering",
    description:
      "From first commit to production, I build resilient frontends that stay fast as they grow.",
  },
  {
    title: "Interaction Design",
    description:
      "Motion, prototyping, and pixel-obsessed interfaces that feel as good as they look.",
  },
  {
    title: "Design Systems",
    description:
      "Scalable component libraries and tokens that keep teams consistent and shipping.",
  },
];

export const testimonials = [
  {
    quote:
      "Alex has a rare blend of taste and engineering rigor. The work shipped on time and looked better than the mockups.",
    author: "Jordan Lee",
    role: "VP Product, Northwind Labs",
  },
  {
    quote:
      "One of the most thoughtful developers I have worked with. Every detail, from motion to accessibility, was considered.",
    author: "Priya Nair",
    role: "Design Director, Lumen Studio",
  },
];
