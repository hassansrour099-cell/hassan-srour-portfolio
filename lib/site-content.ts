export const person = {
  name: "Hassan Srour",
  title: "Software Engineer",
  location: "Beirut, Lebanon",
  email: "hassansrour099@gmail.com",
  phone: "+961 71 157 220",
  linkedIn: "https://linkedin.com/in/hassansrour1",
  linkedInHandle: "linkedin.com/in/hassansrour1",
  github: "https://github.com/hassansrour099-cell",
  githubHandle: "hassansrour099-cell",
  cvPath: "/Hassan_Srour_CV.pdf",
} as const;

export const siteCopy = {
  tagline:
    "I design and ship production web apps — APIs, databases, React/Next.js UIs, and Dockerized deploys that stay reliable under real use.",
  heroHeadline: "Software engineer who ships for real users.",
  heroBadge: "Open to full-time & contract roles",
  footerCta: "Let’s build something that works in production.",
  aboutHeading: "About me",
} as const;

export const professionalSummary =
  "I’m a full-stack developer and final-year Software Engineering student. Day to day I own the path from schema and REST APIs to React/Next.js interfaces, containerized services, and release workflows — across NGO platforms, e-commerce, and operations tooling.";

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "PHP", "Python"],
  },
  {
    label: "Frontend",
    items: ["React", "Vue", "Next.js", "Responsive UI"],
  },
  {
    label: "Backend",
    items: ["Laravel", "Flask", "WordPress", "Directus", "ERPNext"],
  },
  {
    label: "Data & ops",
    items: ["MySQL", "Firebase", "Docker", "Medusa", "GitHub Actions", "Vercel", "CI/CD"],
  },
] as const;

export const experience = [
  {
    role: "Software Engineer",
    company: "Harmonically Labs",
    location: "Bucharest, Romania (remote)",
    period: "Apr 2024 — Present",
    highlights: [
      "Built and maintained multi-client NGO web platforms with Next.js, Directus, and Docker across Lebanon and the Gulf.",
      "Configured ERPNext for NGO workflows spanning inventory tracking and operational records.",
      "Deployed production apps on Ubuntu VPS and Vercel with containerized services and repeatable release workflows.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Brain Solutions",
    location: "Beirut, Lebanon",
    period: "Nov 2023 — Apr 2024",
    highlights: [
      "Shipped a white-label e-commerce template live at daralrafidain.com as one of two developers.",
      "Built admin dashboard tooling for dynamic storefront layouts, catalog views, and responsive UI.",
      "Integrated third-party search APIs and improved data processing speed by ~10% with lower backend latency.",
    ],
  },
] as const;

export const education = {
  degree: "B.Sc. Software Engineering",
  school: "Antonine University, Baabda, Lebanon",
  year: "2026 (expected)",
  note: "Coursework: data structures, algorithms, OOP (C++/Java), mobile dev, AI (Python), databases (PHP), web dev, networks.",
} as const;

export const languages = ["Arabic", "English", "French"] as const;

export const portfolioProjects = [
  {
    src: "/assets/project-uc-live.webp",
    alt: "Urban Compact live storefront — hero and product page screenshots",
    width: 2400,
    height: 1564,
    className: "col-span-14 md:col-span-7 lg:col-span-9",
    title: "Urban Compact",
    summary:
      "Live editorial furniture storefront — Medusa v2 backend, Next.js UI, room-based catalog, and Dockerized Contabo deployment with Nginx + SSL.",
    category: "Medusa · Next.js · Docker",
    href: "https://urban.hassansrour.me",
    badge: "Live demo" as const,
  },
  {
    src: "/assets/project-ps-live.webp",
    alt: "Performance Street live storefront — hero and product page screenshots",
    width: 1248,
    height: 1320,
    className: "col-span-14 md:col-span-7 lg:col-span-5",
    title: "Performance Street",
    summary:
      "Live athletic commerce storefront — Training / Running / Recovery kit, Medusa v2 API, Next.js UI, and production Contabo deploy beside Urban Compact.",
    category: "Medusa · Next.js · VPS",
    href: "https://street.hassansrour.me",
    badge: "Live demo" as const,
  },
  {
    src: "/assets/project-3.webp",
    alt: "NGO platform built with Next.js and Directus",
    width: 2400,
    height: 1564,
    className: "col-span-14 md:col-span-7 lg:col-span-9",
    title: "NGO web platforms",
    summary:
      "Multi-client platforms for NGOs in Lebanon and the Gulf — Next.js frontends, Directus CMS, Dockerized environments, and stakeholder-driven delivery.",
    category: "Next.js · Directus · Docker",
    href: null,
    badge: "Case study" as const,
  },
  {
    src: "/assets/project-4.webp",
    alt: "ERPNext customization for NGO operations",
    width: 1824,
    height: 1320,
    className: "col-span-14 md:col-span-7 lg:col-span-5",
    title: "ERPNext for NGO operations",
    summary:
      "Configured and customized ERPNext deployments to support inventory, records, and day-to-day operational workflows for NGO teams.",
    category: "ERPNext · VPS · Ubuntu",
    href: null,
    badge: "Case study" as const,
  },
  {
    src: "/assets/project-3.webp",
    alt: "Dar Al-Rafidain bookstore and publishing platform",
    width: 1824,
    height: 1320,
    className: "col-span-14 md:col-span-7 lg:col-span-7",
    title: "Dar Al-Rafidain e-commerce",
    summary:
      "White-label Arabic publishing and bookstore template — admin dashboard for storefront layouts, catalog, authors, and categories.",
    category: "Full-stack · E-commerce",
    href: "https://daralrafidain.com",
    badge: "Live demo" as const,
  },
] as const;
