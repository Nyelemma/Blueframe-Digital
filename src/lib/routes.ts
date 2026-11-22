import { projects } from "./projects";
import { services } from "./services";
import { landings } from "./landings";

/** Every indexable route, used by the build-time prerenderer and the sitemap. */
export const routes: string[] = [
  "/",
  "/work",
  "/services",
  "/pricing",
  "/about",
  "/contact",
  ...services.map((service) => `/services/${service.slug}`),
  ...landings.map((landing) => `/${landing.slug}`),
  ...projects.map((project) => `/work/${project.slug}`),
];
