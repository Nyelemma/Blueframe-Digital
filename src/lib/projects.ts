import data from "../content/projects.json";

export const CATEGORIES = [
  "All",
  "Business",
  "Sports",
  "Trades",
  "Coaching",
  "Services",
] as const;

export type Category = (typeof CATEGORIES)[number];
export type ProjectCategory = Exclude<Category, "All">;

export type Project = {
  slug: string;
  name: string;
  url: string;
  category: ProjectCategory;
  industry: string;
  location: string;
  image: string;
  preview: "screenshot" | "designed";
  summary: string;
  description: string;
  points: string[];
};

export const projects = data as Project[];

export function projectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function displayHost(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}
