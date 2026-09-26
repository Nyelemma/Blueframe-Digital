export const SITE_NAME = "Blueframe Digital";

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://nyelemma.github.io/Blueframe-Digital"
).replace(/\/$/, "");

export const CONTACT_EMAIL = "mikeyjnye@gmail.com";

export const WHATSAPP_DISPLAY = "07943 869697";

export const WHATSAPP_URL = "https://wa.me/447943869697";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Our Work" },
  { to: "/social-media", label: "Social Media" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
] as const;

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { to: "/contact", label: "Contact" },
] as const;

export function absoluteUrl(path: string) {
  if (path === "/" || path === "") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${path.replace(/^\//, "")}`;
}

export type PageMeta = {
  path: string;
  title: string;
  description: string;
};

export const PAGE_META = {
  home: {
    path: "/",
    title: "Blueframe Digital | Web Design for Small Businesses",
    description:
      "Professional websites for small businesses from £199. Blueframe Digital creates modern, fast and SEO-ready websites designed to help local businesses grow.",
  },
  work: {
    path: "/work",
    title: "Our Work | Small Business Websites | Blueframe Digital",
    description:
      "Websites designed by Blueframe Digital for trades, clubs, coaches and other small businesses. Each project links to the live site.",
  },
  social: {
    path: "/social-media",
    title: "Social Media Management for Small Businesses | Blueframe Digital",
    description:
      "Social media management for small businesses from £99 a month. Blueframe Digital plans, writes and posts so you can stay active online.",
  },
  pricing: {
    path: "/pricing",
    title: "Website Pricing from £199 | Blueframe Digital",
    description:
      "Websites from £199, online stores from £15 a month, and social media management from £99 a month. Clear starting prices before any work begins.",
  },
  about: {
    path: "/about",
    title: "About Blueframe Digital | Websites for Small Businesses",
    description:
      "Blueframe Digital builds professional websites for small businesses. Studio quality, without the agency price tag.",
  },
  contact: {
    path: "/contact",
    title: "Contact Blueframe Digital | Start a Website",
    description:
      "Start a website, online store or social media project with Blueframe Digital. Email us or send a WhatsApp message.",
  },
} as const satisfies Record<string, PageMeta>;
