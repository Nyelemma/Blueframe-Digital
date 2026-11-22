import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import BrowserFrame from "../components/BrowserFrame";
import FinalCta from "../components/FinalCta";
import Icon from "../components/Icons";
import NotFound from "./NotFound";
import { assetUrl, SITE_NAME } from "../lib/site";
import { displayHost, projectBySlug, projects } from "../lib/projects";
import { breadcrumbNode, graph, organizationNode } from "../lib/schema";
import { primaryBtn, secondaryBtn } from "../lib/classes";

export default function Project() {
  const { slug } = useParams();
  const project = slug ? projectBySlug(slug) : undefined;
  if (!project) return <NotFound />;

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 2);
  const title = `${project.name} Website Design | Work by ${SITE_NAME}`;
  const host = displayHost(project.url);
  const caseStudy = project.caseStudy;
  const alt =
    project.preview === "screenshot"
      ? `Homepage of the ${project.name} website`
      : `Designed preview for the ${project.name} website`;

  return (
    <>
      <Seo
        title={title}
        description={`${project.summary} A website designed and built by ${SITE_NAME}.`}
        path={`/work/${project.slug}`}
        jsonLd={graph(
          organizationNode(),
          {
            "@type": "CreativeWork",
            name: `${project.name} website`,
            url: project.url,
            description: project.summary,
            creator: { "@type": "Organization", name: SITE_NAME },
          },
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Our Work", path: "/work" },
            { name: project.name, path: `/work/${project.slug}` },
          ]),
        )}
      />
      <PageHeader
        eyebrow={project.category}
        title={project.name}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Our Work", to: "/work" },
          { label: project.name },
        ]}
      >
        {project.description}
      </PageHeader>

      <div className="mx-auto grid max-w-[1120px] gap-10 px-5 py-8 sm:px-6 lg:grid-cols-[1.4fr_0.8fr]">
        <BrowserFrame url={host}>
          <img
            src={assetUrl(`previews/${project.image}.webp`)}
            srcSet={`${assetUrl(`previews/${project.image}-sm.webp`)} 840w, ${assetUrl(`previews/${project.image}.webp`)} 1400w`}
            sizes="(min-width: 1024px) 680px, 92vw"
            alt={alt}
            width={1400}
            height={875}
            className="h-full w-full object-cover object-top"
          />
        </BrowserFrame>
        <aside>
          <dl className="grid gap-4 text-sm">
            <div>
              <dt className="text-[11px] font-semibold tracking-[0.16em] text-slate-500 uppercase">Industry</dt>
              <dd className="mt-1 font-medium">{project.industry}</dd>
            </div>
          </dl>
          <ul className="mt-6 space-y-3">
            {project.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep dark:text-brand" />
                {point}
              </li>
            ))}
          </ul>
          {project.preview === "designed" && (
            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              The frame shows a designed preview. The live website opens from the button.
            </p>
          )}
          <div className="mt-8 flex flex-col gap-3">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className={primaryBtn}>
              Visit website
              <Icon name="arrow" className="h-4 w-4" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            <Link to="/contact" className={secondaryBtn}>
              Start a project like this
            </Link>
          </div>
        </aside>
      </div>

      {caseStudy && (
        <section className="mx-auto max-w-[1120px] px-5 py-12 sm:px-6" aria-labelledby="case-study-title">
          <div className="rounded-[1.8rem] bg-night p-6 text-white sm:p-10">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.22em] text-[#8eb6ff] uppercase">
              <Icon name="heart" className="h-4 w-4" />
              {caseStudy.label}
            </p>
            <h2 id="case-study-title" className="mt-4 max-w-[20ch] text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Giving something back to our local community.
            </h2>
            <dl className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-3">
              {caseStudy.stats.map((stat) => (
                <div key={stat.label} className="bg-night p-5 sm:p-6">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block text-3xl font-semibold tracking-[-0.04em]">{stat.value}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-slate-400">{stat.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            {caseStudy.sections.map((section) => (
              <article key={section.title}>
                <h3 className="text-xl font-semibold tracking-tight">{section.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600 dark:text-slate-400">{section.text}</p>
              </article>
            ))}
          </div>
          {caseStudy.causeUrl && (
            <a
              href={caseStudy.causeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${secondaryBtn} mt-10`}
            >
              Support {caseStudy.cause}
              <Icon name="arrow" className="h-4 w-4" />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </section>
      )}

      <div className="mx-auto max-w-[1120px] px-5 pb-16 sm:px-6">
        <h2 className="text-sm font-semibold tracking-[0.16em] text-slate-500 uppercase">More work</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {related.map((item) => (
            <li key={item.slug}>
              <Link
                to={`/work/${item.slug}`}
                className="flex items-center justify-between rounded-2xl border border-slate-200 px-4 py-4 transition hover:border-ink dark:border-white/10 dark:hover:border-white/40"
              >
                <span>
                  <span className="block text-xs tracking-[0.14em] text-slate-500 uppercase">{item.category}</span>
                  <span className="mt-1 block font-semibold">{item.name}</span>
                </span>
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <FinalCta />
    </>
  );
}
