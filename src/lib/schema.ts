import { absoluteUrl, SITE_NAME, SITE_URL } from "./site";

const areaServed = { "@type": "Country", name: "United Kingdom" };

export function organizationNode() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: absoluteUrl("/brand/blueframe-logo-light.png"),
    image: absoluteUrl("/og.png"),
    description:
      "Blueframe Digital designs modern, fast websites for small and local businesses, with websites from £199, online stores from £15 a month, and social media management from £99 a month.",
    areaServed,
    priceRange: "££",
    knowsAbout: [
      "Web design",
      "Small business websites",
      "Local SEO",
      "Online stores",
      "Social media management",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description:
      "Professional websites for small businesses from £199. Modern, fast and SEO-ready.",
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-GB",
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceNode(name: string, description: string, path: string, lowPrice?: string) {
  return {
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "GBP",
      ...(lowPrice ? { lowPrice } : {}),
      availability: "https://schema.org/InStock",
    },
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
