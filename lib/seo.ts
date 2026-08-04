import type { Metadata } from "next";

import { person, siteCopy } from "@/lib/site-content";

export const siteConfig = {
  name: person.name,
  description: siteCopy.tagline,
  // Override in production via NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://hassansrour.me",
  ogImage: "/assets/project-1.webp",
  twitter: person.linkedInHandle,
  keywords: [
    "Hassan Srour",
    "Software Engineer",
    "Full-stack developer",
    "Next.js",
    "React",
    "Lebanon",
    "Beirut",
    "Web developer",
  ],
};

export interface GetSEOOptions {
  /** Page specific title. Rendered as `${title} | ${siteName}`. Omit for the site default. */
  title?: string;
  description?: string;
  /** Path of the page, e.g. "/work". Used for the canonical URL and og:url. */
  path?: string;
  /** Absolute or root relative OG / Twitter image. */
  image?: string;
  keywords?: string[];
  /** Set to true to keep the page out of search engines. */
  noIndex?: boolean;
}

/**
 * Builds a complete Next.js `Metadata` object (title, description, canonical,
 * Open Graph, Twitter, robots, etc.) from a few page level inputs so every page
 * exposes consistent, SEO ready metadata.
 */
export function getSEO({
  title,
  description = siteConfig.description,
  path = "/",
  image = siteConfig.ogImage,
  keywords = siteConfig.keywords,
  noIndex = false,
}: GetSEOOptions = {}): Metadata {
  const resolvedTitle = title
    ? `${title} | ${siteConfig.name}`
    : `${siteConfig.name} — ${person.title}`;
  const url = new URL(path, siteConfig.url).toString();

  return {
    metadataBase: new URL(siteConfig.url),
    title: resolvedTitle,
    description,
    applicationName: siteConfig.name,
    keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      title: resolvedTitle,
      description,
      url,
      locale: "en_US",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: resolvedTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image],
      creator: siteConfig.twitter,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export function getPersonJsonLd() {
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
    sameAs: [person.linkedIn, person.github],
  };
}
