import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import PortfolioCard from "../components/PortfolioCard";
import FaqList from "../components/FaqList";
import FinalCta from "../components/FinalCta";
import Icon from "../components/Icons";
import NotFound from "./NotFound";
import { landingBySlug, landings } from "../lib/landings";
import { projectBySlug, type Project } from "../lib/projects";
import { servicePath, services } from "../lib/services";
import { primaryBtn, secondaryBtn } from "../lib/classes";
import { articleNode, breadcrumbNode, faqNode, graph, organizationNode, serviceNode } from "../lib/schema";

export default function Landing({ slug }: { slug: string }) {
  const page = landingBySlug(slug);
  if (!page) return <NotFound />;

  const path = `/${page.slug}`;
  const work = page.projectSlugs
    .map((projectSlug) => projectBySlug(projectSlug))
    .filter((project): project is Project => Boolean(project));
  const related = landings.filter((item) => item.slug !== page.slug && item.kind !== "guide");
  const guide = landings.find((item) => item.kind === "guide" && item.slug !== page.slug);

  const mainNode =
    page.kind === "guide"
      ? articleNode(page.h1, page.description, path)
      : serviceNode(page.label, page.description, path, "199");

  return (
    <>
      <Seo
        title={page.title}
        description={page.description}
        path={path}
        jsonLd={graph(
          organizationNode(),
          mainNode,
          faqNode(page.faqs),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: page.label, path },
          ]),
        )}
      />
      <PageHeader
        eyebrow={page.eyebrow}
        title={page.h1}
        crumbs={[
          { label: "Home", to: "/" },
          { label: page.label },
        ]}
      >
        {page.intro}
      </PageHeader>

      <div className="mx-auto max-w-[1120px] px-5 py-8 sm:px-6">
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10 dark:bg-white/10">
          {page.highlights.map((item) => (
            <li key={item} className="flex items-start gap-2 bg-white p-5 text-sm font-medium dark:bg-[#0c1222]">
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep dark:text-brand-bright" />
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to={page.cta.to} className={primaryBtn}>
            {page.cta.label}
            <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link to="/pricing" className={secondaryBtn}>
            See pricing
          </Link>
        </div>
      </div>

      <article className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6">
        <div className="grid gap-x-12 gap-y-12 md:grid-cols-2">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-2xl font-semibold tracking-[-0.03em]">{section.title}</h2>
              <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">{section.text}</p>
            </section>
          ))}
        </div>
      </article>

      {work.length > 0 && (
        <section className="border-t border-slate-200 dark:border-white/10" aria-labelledby="landing-work-title">
          <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 id="landing-work-title" className="text-3xl font-semibold tracking-[-0.04em]">
                {page.kind === "location" ? "Websites we've built locally" : "Websites we've built"}
              </h2>
              <Link to="/work" className={secondaryBtn}>
                Browse all work
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2">
              {work.map((project) => (
                <PortfolioCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqList faqs={page.faqs} />

      <section className="mx-auto max-w-[1120px] px-5 pb-16 sm:px-6" aria-labelledby="landing-more-title">
        <h2 id="landing-more-title" className="text-sm font-semibold tracking-[0.16em] text-slate-500 dark:text-slate-400 uppercase">
          Our services
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                to={servicePath(service.slug)}
                className="flex h-full items-center justify-between gap-3 rounded-2xl border border-slate-200 px-4 py-4 font-semibold transition hover:border-ink dark:border-white/10 dark:hover:border-white/40"
              >
                {service.name}
                <Icon name="arrow" className="h-4 w-4 shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
        <h2 className="mt-10 text-sm font-semibold tracking-[0.16em] text-slate-500 dark:text-slate-400 uppercase">
          Areas and industries
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                to={`/${item.slug}`}
                className="inline-flex min-h-11 items-center rounded-full border border-slate-200 px-4 text-sm text-slate-600 transition hover:border-ink hover:text-ink dark:border-white/10 dark:text-slate-300 dark:hover:border-white/40 dark:hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          ))}
          {guide && (
            <li>
              <Link
                to={`/${guide.slug}`}
                className="inline-flex min-h-11 items-center rounded-full border border-slate-200 px-4 text-sm text-slate-600 transition hover:border-ink hover:text-ink dark:border-white/10 dark:text-slate-300 dark:hover:border-white/40 dark:hover:text-white"
              >
                {guide.label}
              </Link>
            </li>
          )}
        </ul>
      </section>
      <FinalCta />
    </>
  );
}
