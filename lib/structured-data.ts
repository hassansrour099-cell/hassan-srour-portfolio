import { person, siteCopy, type ProjectCase } from "@/lib/site-content";
import { siteConfig } from "@/lib/seo";

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: person.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en",
    publisher: {
      "@type": "Person",
      name: person.name,
      url: siteConfig.url,
    },
  };
}

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.title,
    email: person.email,
    telephone: person.phone,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Beirut",
      addressCountry: "LB",
    },
    sameAs: [person.linkedIn],
    description: siteCopy.heroSupport,
  };
}

/** Case-study page as a documented CreativeWork — not Product/Offer/Review markup. */
export function projectJsonLd(project: ProjectCase) {
  const pageUrl = new URL(`/work/${project.slug}`, siteConfig.url).toString();

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.seoDescription ?? project.summary,
    url: pageUrl,
    genre: project.type,
    temporalCoverage: project.year,
    author: {
      "@type": "Person",
      name: person.name,
      url: siteConfig.url,
    },
    ...(project.externalHref
      ? {
          about: {
            "@type": "CreativeWork",
            name: project.title,
            url: project.externalHref,
          },
        }
      : {}),
  };
}
