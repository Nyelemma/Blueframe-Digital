export const SITE_NAME = "Blueframe Digital";

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://nyelemma.github.io/Blueframe-Digital"
).replace(/\/$/, "");

export const CONTACT_EMAIL = "hello@blueframe.digital";

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
    title: "Our Work | Blueframe Digital",
    description:
      "Websites designed by Blueframe Digital for trades, clubs, coaches and local businesses across Lancashire, Morecambe and Lancaster.",
  },
  social: {
    path: "/social-media",
    title: "Social Media Management Lancashire | Blueframe Digital",
    description:
      "Social media management for small businesses from £99 a month. Blueframe Digital plans, writes and posts so Lancashire businesses stay active online.",
  },
  pricing: {
    path: "/pricing",
    title: "Website Design Pricing | Blueframe Digital",
    description:
      "Websites from £199, online stores from £15 a month, and social media management from £99 a month. Clear starting prices for small businesses in Lancaster, Morecambe and Lancashire.",
  },
  about: {
    path: "/about",
    title: "About | Web Design Lancaster & Morecambe | Blueframe Digital",
    description:
      "Blueframe Digital builds professional websites for small businesses in Lancaster, Morecambe and Lancashire — studio quality, without the agency price tag.",
  },
  contact: {
    path: "/contact",
    title: "Contact | Blueframe Digital",
    description:
      "Start a website or social media project with Blueframe Digital. We work with small and local businesses across Morecambe Bay and Lancashire.",
  },
} as const satisfies Record<string, PageMeta>;
