import { absoluteUrl, SITE_NAME, SITE_URL, SOCIAL_LINKS, WHATSAPP_URL } from "./site";

const place = (name: string, type = "City") => ({ "@type": type, name });

/** Towns we target for local search, plus the rest of the UK. */
const areaServed = [
  place("Morecambe"),
  place("Lancaster"),
  place("Heysham"),
  place("Carnforth"),
  place("Lancashire", "AdministrativeArea"),
  place("United Kingdom", "Country"),
];

export function organizationNode() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: absoluteUrl("/brand/blueframe-logo-light.png"),
    image: absoluteUrl("/og.png"),
    description:
      "Blueframe Digital is a web design studio for small businesses in Morecambe, Lancaster and across Lancashire, with websites from £199, online stores from £15 a month, and social media management from £99 a month.",
    areaServed,
    telephone: "+447943869697",
    sameAs: [...SOCIAL_LINKS.map((social) => social.href), WHATSAPP_URL],
    priceRange: "££",
    currenciesAccepted: "GBP",
    knowsAbout: [
      "Web design",
      "Website design for small businesses",
      "Local SEO",
      "Online stores",
      "Ecommerce",
      "Social media management",
      "Football club websites",
      "Websites for tradesmen",
    ],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Lancashire",
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
      "Affordable web design for small businesses in Morecambe, Lancaster and Lancashire. Websites from £199.",
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
    serviceType: name,
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

export function faqNode(faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function articleNode(headline: string, description: string, path: string) {
  return {
    "@type": "Article",
    headline,
    description,
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: "en-GB",
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    image: absoluteUrl("/og.png"),
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}
