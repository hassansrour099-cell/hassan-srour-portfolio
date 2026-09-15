export const person = {
  name: "Hassan Srour",
  title: "Software Engineer",
  location: "Beirut, Lebanon",
  email: "hassansrour099@gmail.com",
  phone: "+961 71 157 220",
  linkedIn: "https://linkedin.com/in/hassansrour1",
  linkedInHandle: "linkedin.com/in/hassansrour1",
} as const;

export const siteCopy = {
  heroEyebrow: "Hassan Srour · Software Engineer · Beirut",
  heroHeadline: "Full-stack engineer for production web apps.",
  heroSupport:
    "I build and maintain Next.js sites, REST-backed workflows, headless CMS setups, and Dockerized deploys for NGOs and businesses in Lebanon and the Gulf.",
  heroCta: "Email me",
  heroSecondary: "Selected work",
  skillsHeading: "Tools I use",
  principlesHeading: "How I build",
  experienceHeading: "Experience",
  workHeading: "Selected work",
  aboutHeading: "About",
  footerCta: "Want to talk about a role or a project?",
  footerSupport: "Open to full-time and contract work. Based in Beirut, comfortable remote.",
} as const;

export const professionalSummary =
  "Final-year Software Engineering student at Antonine University and a full-stack developer. Most of my recent work is shipping and maintaining web platforms: Next.js frontends, Directus CMS, ERPNext configuration, and deploys on Ubuntu VPS and Vercel.";

export const aboutExtended = [
  "I like work that crosses UI, data, and ops. A feature is unfinished until editors can use it and the release path is clear.",
  "I am currently deepening backend architecture and performance, and exploring AI/ML where it helps a real product surface, not as a standalone demo.",
] as const;

export const principles = [
  {
    title: "Match the environment you ship to",
    body: "If production runs in Docker on a VPS, local should too. Parity catches release problems earlier than clever staging stories.",
  },
  {
    title: "Build around the operator, not the schema",
    body: "Inventory screens and CMS collections should follow how stakeholders already work. I start from their workflow, then model the data.",
  },
  {
    title: "Prove the integration before you dress it up",
    body: "External APIs get Postman coverage and routing checks first. UI polish comes after the contract is trustworthy.",
  },
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript", "PHP", "Python", "SQL"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Vue", "Responsive UI"],
  },
  {
    label: "Backend & CMS",
    items: ["Laravel", "Flask", "Directus", "ERPNext", "WordPress"],
  },
  {
    label: "Ops",
    items: ["Docker", "GitHub Actions", "CI/CD", "Vercel", "MySQL", "Firebase"],
  },
] as const;

export const experience = [
  {
    role: "Software Engineer",
    company: "Harmonically Labs",
    location: "Bucharest · remote",
    period: "Apr 2024 to Present",
    stack: ["Next.js", "Directus", "Docker", "ERPNext", "Vercel", "Ubuntu"],
    highlights: [
      "Build and maintain NGO web platforms with Next.js, Directus, and Docker for clients in Lebanon and the Gulf.",
      "Configure and customize ERPNext for inventory and records workflows.",
      "Deploy and manage apps on Ubuntu VPS and Vercel, including environment setup, containers, and release workflow.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Brain Solutions",
    location: "Beirut",
    period: "Nov 2023 to Apr 2024",
    stack: ["E-commerce", "Admin dashboard", "Search APIs", "Postman"],
    highlights: [
      "Shipped a white-label e-commerce template live for Dar Al-Rafidain (daralrafidain.com) as one of two developers.",
      "Built admin dashboard tooling for dynamic storefront layout control, plus book, author, and category views.",
      "Integrated third-party search APIs for books and authors; improved data processing speed by about 10% and reduced backend latency, validating integrations with Postman.",
    ],
  },
] as const;

export const education = {
  degree: "B.Sc. Software Engineering",
  school: "Antonine University, Baabda",
  year: "Expected 2026",
} as const;

export const languages = ["Arabic", "English", "French"] as const;

export type ProjectCase = {
  slug: string;
  title: string;
  summary: string;
  year: string;
  type: string;
  role: string;
  stack: string[];
  highlight: string;
  relatedNote?: string;
  externalHref?: string;
  overview: string;
  problem: string;
  approach: string;
  architecture: string[];
  implementation: string[];
  challenges: string;
  decisions: string;
  result: string;
};

export const portfolioProjects: ProjectCase[] = [
  {
    slug: "ngo-platforms",
    title: "NGO web platforms",
    summary:
      "Next.js frontends and Directus CMS for NGO clients in Lebanon and the Gulf, with Docker for consistent local and production environments.",
    year: "2024 to Present",
    type: "Web platforms",
    role: "Full-stack engineer at Harmonically Labs",
    stack: ["Next.js", "Directus", "Docker", "Vercel", "Ubuntu VPS"],
    highlight: "CMS-backed sites with deploy parity",
    overview:
      "Ongoing platform work for NGO clients who need public websites and editable content, delivered as Next.js applications backed by Directus.",
    problem:
      "Each organization needed a maintainable site and a content workflow editors could run. Environments also had to stay predictable between local development and production hosts.",
    approach:
      "Use Next.js for the public site, Directus as the headless CMS, and Docker so services behave the same locally and in production. Translate stakeholder requirements into content models and shipped pages.",
    architecture: [
      "Editors and stakeholders",
      "Directus (content, roles, collections)",
      "Next.js frontend",
      "Vercel or Ubuntu VPS (Docker where used)",
    ],
    implementation: [
      "Next.js frontends shaped around each client content model.",
      "Directus collections and roles for editors and operators.",
      "Dockerized services for consistent local and production runs.",
      "Collaboration with NGO stakeholders to turn operational needs into pages and workflows.",
    ],
    challenges:
      "Requirements differ by organization, and hosting spans VPS and Vercel. Keeping environments consistent without slowing releases was the recurring constraint.",
    decisions:
      "Chose a headless CMS over rebuilding admin UI for every client. Accepted Docker overhead in exchange for fewer environment surprises at deploy time.",
    result:
      "Production NGO platforms maintained with a clear path from content change to deploy across Lebanon and the Gulf clients.",
  },
  {
    slug: "erpnext-ngo",
    title: "ERPNext for NGO operations",
    summary:
      "ERPNext configuration and customization for NGO inventory and records workflows, hosted on Ubuntu VPS.",
    year: "2024 to Present",
    type: "ERP / operations",
    role: "Configuration and customization at Harmonically Labs",
    stack: ["ERPNext", "Ubuntu", "VPS"],
    highlight: "Operational workflows inside ERPNext",
    overview:
      "ERPNext setups for NGO operational needs such as inventory and records management, hosted and maintained on Ubuntu VPS.",
    problem:
      "Operational work needed a structured system. Off-the-shelf ERP only helps if modules and setup match how staff actually work day to day.",
    approach:
      "Configure and customize ERPNext against real operational workflows, then host it on Ubuntu VPS with careful environment and service setup.",
    architecture: [
      "NGO operators",
      "ERPNext modules (inventory, records)",
      "Ubuntu VPS",
    ],
    implementation: [
      "Inventory and records configuration aligned to NGO processes.",
      "Ubuntu VPS provisioning and service configuration.",
      "Iteration with operators after initial go-live.",
    ],
    challenges:
      "Too little customization and staff ignore the system. Too much and upgrades and maintenance become fragile.",
    decisions:
      "Prefer configuration and targeted customization over heavy forks, so the deployment stays maintainable on VPS.",
    result:
      "ERPNext instances in use for day-to-day NGO operational workflows.",
  },
  {
    slug: "dar-al-rafidain",
    title: "Dar Al-Rafidain e-commerce",
    summary:
      "Live Arabic publishing and bookstore storefront, built from a white-label e-commerce template with admin-controlled layouts and catalog views.",
    year: "2023 to 2024",
    type: "E-commerce",
    role: "Full-stack developer (team of two) at Brain Solutions",
    stack: ["E-commerce template", "Admin dashboard", "Catalog UI"],
    highlight: "Live storefront with layout admin",
    externalHref: "https://daralrafidain.com",
    relatedNote:
      "Search API work from the same role is documented separately under Book search integrations.",
    overview:
      "A white-label e-commerce template deployed for Dar Al-Rafidain, an Arabic-language publishing and bookstore, live at daralrafidain.com.",
    problem:
      "The business needed a catalog-facing storefront and an admin path to change storefront layout without a full redeploy for every adjustment.",
    approach:
      "As one of two developers, I focused on the admin dashboard template system for dynamic storefront layout control, plus book listing, author, and category views and responsive UI components.",
    architecture: [
      "Store operators (admin dashboard)",
      "Layout and catalog configuration",
      "Public Arabic storefront",
      "Catalog: books, authors, categories",
    ],
    implementation: [
      "Admin dashboard for dynamic storefront layout control.",
      "Book listing, author, and category views.",
      "Responsive UI components across the storefront.",
    ],
    challenges:
      "Layout needed to stay flexible for operators while the public Arabic storefront stayed coherent and usable.",
    decisions:
      "Invest in admin layout control so content and presentation changes do not always require engineering releases.",
    result:
      "A live Arabic bookstore and publishing storefront with catalog browsing and admin-driven layout control.",
  },
  {
    slug: "book-search",
    title: "Book search integrations",
    summary:
      "Third-party search API integration for books and authors on the e-commerce stack, with request routing improvements validated in Postman.",
    year: "2023 to 2024",
    type: "API integrations",
    role: "Full-stack developer at Brain Solutions",
    stack: ["Third-party search APIs", "Postman"],
    highlight: "About 10% faster data processing",
    relatedNote:
      "Part of the Dar Al-Rafidain / white-label e-commerce work at Brain Solutions.",
    overview:
      "Search integrations for book and author discovery across frontend and backend on the e-commerce project.",
    problem:
      "Discovery depended on third-party search APIs. Inefficient request routing increased backend work and slowed data processing.",
    approach:
      "Integrate the search APIs, optimize request routing and data processing across frontend and backend, and validate integrations with Postman throughout development.",
    architecture: [
      "Storefront or admin client",
      "Application backend (request routing)",
      "Third-party search APIs",
      "Book and author results",
    ],
    implementation: [
      "Third-party search API integration for books and authors.",
      "Request routing and data processing changes across frontend and backend.",
      "Postman validation of integrations during development.",
      "Measured about 10% improvement in data processing speed and reduced backend latency.",
    ],
    challenges:
      "External APIs vary in behavior. The work was to cut unnecessary processing and keep responses reliable under catalog use.",
    decisions:
      "Treat contract validation (Postman) as part of development, not an afterthought, so routing changes stay honest against the real API.",
    result:
      "Faster book and author discovery paths with integrations checked before they carried production traffic.",
  },
  {
    slug: "urban-compact",
    title: "Urban Compact",
    summary:
      "Live Medusa.js furniture e-commerce storefront, publicly available at urban.hassansrour.me.",
    year: "2026",
    type: "E-commerce / Medusa.js",
    role: "Medusa.js storefront development",
    stack: ["Medusa.js"],
    highlight: "Live storefront",
    externalHref: "https://urban.hassansrour.me/dk",
    relatedNote:
      "Related Medusa.js storefront: Performance Street.",
    overview:
      "Urban Compact is a live Medusa.js e-commerce storefront for furniture. The public site presents room-based browsing (Living, Sleep, Work, Storage, Collection), featured pieces, and material messaging around oak, linen, and steel.",
    problem:
      "This case study documents a shipped Medusa.js storefront. Detailed internal requirements and private implementation notes are not claimed here.",
    approach:
      "Build and publish a Medusa.js-based furniture storefront at the live URL below.",
    architecture: [
      "Public storefront",
      "Medusa.js",
      "Live site: urban.hassansrour.me",
    ],
    implementation: [
      "Medusa.js e-commerce storefront.",
      "Public browse paths for Living, Sleep, Work, Storage, and Collection.",
      "Featured product listings visible on the live site.",
      "Storefront entry points for search, account, and bag as shown on the live site.",
    ],
    challenges:
      "Keeping the public case study limited to confirmed stack and what the live storefront actually shows.",
    decisions:
      "Use Medusa.js as the commerce stack for the storefront.",
    result:
      "Live furniture storefront at https://urban.hassansrour.me/dk.",
  },
  {
    slug: "performance-street",
    title: "Performance Street",
    summary:
      "Live Medusa.js athletic apparel e-commerce storefront, publicly available at street.hassansrour.me.",
    year: "2026",
    type: "E-commerce / Medusa.js",
    role: "Medusa.js storefront development",
    stack: ["Medusa.js"],
    highlight: "Live storefront",
    externalHref: "https://street.hassansrour.me/dk",
    relatedNote:
      "Related Medusa.js storefront: Urban Compact.",
    overview:
      "Performance Street is a live Medusa.js e-commerce storefront for athletic apparel. The public site is organized around Training, Running, and Recovery, with product listings and kit-oriented browse paths.",
    problem:
      "This case study documents a shipped Medusa.js storefront. Detailed internal requirements and private implementation notes are not claimed here.",
    approach:
      "Build and publish a Medusa.js-based apparel storefront at the live URL below.",
    architecture: [
      "Public storefront",
      "Medusa.js",
      "Live site: street.hassansrour.me",
    ],
    implementation: [
      "Medusa.js e-commerce storefront.",
      "Public browse paths for Training, Running, Recovery, and Accessories.",
      "Product listings visible on the live site.",
      "Storefront entry points for search, account, and cart as shown on the live site.",
    ],
    challenges:
      "Keeping the public case study limited to confirmed stack and what the live storefront actually shows.",
    decisions:
      "Use Medusa.js as the commerce stack for the storefront.",
    result:
      "Live athletic apparel storefront at https://street.hassansrour.me/dk.",
  },
];

export function getProjectBySlug(slug: string) {
  return portfolioProjects.find((project) => project.slug === slug);
}
