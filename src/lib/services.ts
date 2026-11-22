import data from "../content/services.json";
import type { IconName } from "../components/Icons";
import type { ProjectCategory } from "./projects";

export type ServiceTier = {
  name: string;
  price: string;
  text: string;
  to: string;
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: IconName;
  price: string;
  priceNote: string;
  priceUnit: string;
  lowPrice: string;
  title: string;
  description: string;
  headline: string;
  intro: string;
  audience: string[];
  included: string[];
  tiers: ServiceTier[];
  cta: string;
  ctaTo: string;
  workCategories: ProjectCategory[];
};

export const services = data as Service[];

export function serviceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function servicePath(slug: string) {
  return `/services/${slug}`;
}
