import { Link } from "react-router-dom";
import BrowserFrame from "./BrowserFrame";
import Icon from "./Icons";
import { assetUrl } from "../lib/site";
import { displayHost, type Project } from "../lib/projects";

export default function PortfolioCard({ project }: { project: Project }) {
  const host = displayHost(project.url);
  const alt =
    project.preview === "screenshot"
      ? `Homepage of the ${project.name} website`
      : `Designed preview for the ${project.name} website`;

  return (
    <article className="group">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl"
      >
        <BrowserFrame url={host}>
          <img
            src={assetUrl(`previews/${project.image}.webp`)}
            srcSet={`${assetUrl(`previews/${project.image}-sm.webp`)} 840w, ${assetUrl(`previews/${project.image}.webp`)} 1400w`}
            sizes="(min-width: 1024px) 560px, 92vw"
            alt={alt}
            width={1400}
            height={875}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.045]"
          />
          <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-night/75 via-night/10 to-transparent opacity-0 transition duration-300 group-hover:opacity-100">
            <span className="m-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
              View website
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </span>
          </div>
        </BrowserFrame>
        <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink lg:hidden dark:text-white">
          View website
          <Icon name="arrow" className="h-4 w-4" />
        </span>
        <span className="sr-only">Opens in a new tab.</span>
      </a>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase">
            {project.category}
            <span className="px-2 text-slate-300 dark:text-slate-600">/</span>
            {project.industry}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">
            <Link to={`/work/${project.slug}`} className="hover:text-brand-deep dark:hover:text-brand">
              {project.name}
            </Link>
          </h3>
          <p className="mt-1 max-w-prose text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {project.summary}
          </p>
        </div>
      </div>
    </article>
  );
}
