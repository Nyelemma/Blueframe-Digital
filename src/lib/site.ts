export const SITE_NAME = "Blueframe Digital";

export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://www.blueframedigital.co.uk"
).replace(/\/$/, "");

export const WHATSAPP_DISPLAY = "07943 869697";

export const WHATSAPP_URL = "https://wa.me/447943869697";

export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Our Work" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
] as const;

export const FOOTER_LINKS = [
  ...NAV_LINKS,
  { to: "/contact", label: "Contact" },
] as const;

export const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61595901387155",
    icon: "facebook",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/blueframe_digital/",
    icon: "instagram",
  },
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
    title: "Web Design Morecambe & Lancaster | Websites from £199",
    description:
      "Affordable web design for small businesses in Morecambe, Lancaster and Lancashire. Modern, mobile-first, SEO-ready websites from £199, without agency prices.",
  },
  work: {
    path: "/work",
    title: "Web Design Portfolio | Lancashire Small Business Websites",
    description:
      "Websites we have designed for trades, football clubs, coaches, photographers and charities in Morecambe, Lancashire and beyond, each linked to the live site.",
  },
  services: {
    path: "/services",
    title: "Web Design, Online Store & Social Media Services | Blueframe Digital",
    description:
      "Website design from £199, online stores from £15 a month, custom websites and social media management from £99 a month for small businesses.",
  },
  social: {
    path: "/services/social-media",
    title: "Social Media Management for Small Businesses UK | From £99/month",
    description:
      "Affordable social media management for small businesses from £99 a month. We plan, create, caption and post your content so your business stays active online.",
  },
  pricing: {
    path: "/pricing",
    title: "Website Design Prices UK | Websites from £199 | Blueframe Digital",
    description:
      "Clear website design prices: websites from £199, business websites from £399, online stores from £15 a month and social media management from £99 a month.",
  },
  about: {
    path: "/about",
    title: "About Blueframe Digital | Small Business Web Designers, Lancashire",
    description:
      "Blueframe Digital designs websites for small businesses in Morecambe, Lancaster and Lancashire. Big agency quality, small business approach, upfront pricing.",
  },
  contact: {
    path: "/contact",
    title: "Contact Blueframe Digital | Get a Website Quote",
    description:
      "Get a clear quote for a website, online store or social media management. Message Blueframe Digital on WhatsApp or send an enquiry, and we'll take it from there.",
  },
} as const satisfies Record<string, PageMeta>;
