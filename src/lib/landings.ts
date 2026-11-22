import data from "../content/landings.json";

export type Faq = { q: string; a: string };

export type Landing = {
  slug: string;
  kind: "location" | "industry" | "guide";
  label: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  highlights: string[];
  sections: { title: string; text: string }[];
  projectSlugs: string[];
  faqs: Faq[];
  cta: { label: string; to: string };
};

export const landings = data as Landing[];

export function landingBySlug(slug: string) {
  return landings.find((landing) => landing.slug === slug);
}

export function landingsOfKind(kind: Landing["kind"]) {
  return landings.filter((landing) => landing.kind === kind);
}
