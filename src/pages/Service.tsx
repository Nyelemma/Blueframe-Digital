import { Link, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import PortfolioCard from "../components/PortfolioCard";
import FinalCta from "../components/FinalCta";
import Icon from "../components/Icons";
import NotFound from "./NotFound";
import { projects } from "../lib/projects";
import { serviceBySlug, servicePath, services } from "../lib/services";
import { primaryBtn, primaryBtnLight, secondaryBtn } from "../lib/classes";
import { breadcrumbNode, graph, organizationNode, serviceNode } from "../lib/schema";

const steps = [
  {
    title: "Tell us what you need",
    text: "What the business does, who it's for, and what you want this to achieve.",
  },
  {
    title: "We agree a clear price",
    text: "You see the cost before any work begins. Nothing starts until it's agreed.",
  },
  {
    title: "We design and build",
    text: "Shaped around your business, made to work on a phone and load quickly.",
  },
  {
    title: "We launch, and stay available",
    text: "You review it, we put it live, and support is there when something needs to change.",
  },
];

export default function Service() {
  const { slug } = useParams();
  const service = slug ? serviceBySlug(slug) : undefined;
  if (!service) return <NotFound />;

  const path = servicePath(service.slug);
  const others = services.filter((item) => item.slug !== service.slug);
  const work = projects
    .filter((project) => service.workCategories.includes(project.category))
    .slice(0, 2);

  return (
    <>
      <Seo
        title={service.title}
        description={service.description}
        path={path}
        jsonLd={graph(
          organizationNode(),
          serviceNode(service.name, service.description, path, service.lowPrice || undefined),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path },
          ]),
        )}
      />
      <PageHeader
        eyebrow={service.name}
        title={service.headline}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.name },
        ]}
      >
        {service.intro}
      </PageHeader>

      <div className="mx-auto grid max-w-[1120px] items-start gap-8 px-5 py-8 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[1.6rem] bg-night p-8 text-white">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#8eb6ff] uppercase">{service.priceNote}</p>
          <p className="mt-3 text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
            {service.price}
            {service.priceUnit && <span className="text-2xl text-slate-400">{service.priceUnit}</span>}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            Every project is different. We'll confirm the scope and give you a clear price before we start.
          </p>
          <Link to={service.ctaTo} className={`${primaryBtnLight} mt-8`}>
            {service.cta}
            <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
        <section
          className="rounded-[1.6rem] border border-slate-200 p-6 sm:p-8 dark:border-white/10"
          aria-labelledby="audience-title"
        >
          <h2 id="audience-title" className="text-sm font-semibold tracking-[0.16em] text-slate-500 uppercase">
            Is this for you?
          </h2>
          <ul className="mt-5 space-y-4">
            {service.audience.map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-slate-700 dark:text-slate-300">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-brand-deep dark:text-brand" />
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6" aria-labelledby="included-title">
        <h2 id="included-title" className="text-3xl font-semibold tracking-[-0.04em]">
          What's included
        </h2>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10 dark:bg-white/10">
          {service.included.map((item) => (
            <li key={item} className="flex items-start gap-2 bg-white p-5 text-sm font-medium dark:bg-[#0c1222]">
              <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand-deep dark:text-brand" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {service.tiers.length > 0 && (
        <section className="mx-auto max-w-[1120px] px-5 pb-16 sm:px-6" aria-labelledby="options-title">
          <h2 id="options-title" className="text-3xl font-semibold tracking-[-0.04em]">
            {service.tiers.length > 1 ? "Choose your starting point" : "Pricing"}
          </h2>
          <div className={`mt-8 grid gap-4 ${service.tiers.length > 1 ? "md:grid-cols-2" : ""}`}>
            {service.tiers.map((tier) => (
              <article
                key={tier.name}
                className="flex flex-col rounded-[1.6rem] border border-slate-200 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-[#0c1222]"
              >
                <p className="text-2xl font-semibold tracking-[-0.03em]">{tier.price}</p>
                <h3 className="mt-2 font-semibold">{tier.name}</h3>
                <p className="mt-2 max-w-prose text-sm leading-relaxed text-slate-600 dark:text-slate-400">{tier.text}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link to={tier.to} className={primaryBtn}>
                    {service.cta}
                  </Link>
                  <Link to="/pricing" className={secondaryBtn}>
                    Full pricing
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="border-t border-slate-200 dark:border-white/10" aria-labelledby="process-title">
        <div className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6">
          <h2 id="process-title" className="text-3xl font-semibold tracking-[-0.04em]">How it works</h2>
          <ol className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="text-xs font-semibold tracking-[0.14em] text-brand-deep dark:text-brand">
                  0{index + 1}
                </span>
                <h3 className="mt-2 font-semibold">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {work.length > 0 && (
        <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6" aria-labelledby="service-work-title">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 id="service-work-title" className="text-3xl font-semibold tracking-[-0.04em]">
              Recent work
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
        </section>
      )}

      <section className="mx-auto max-w-[1120px] px-5 pb-16 sm:px-6" aria-labelledby="other-services-title">
        <h2 id="other-services-title" className="text-sm font-semibold tracking-[0.16em] text-slate-500 uppercase">
          Other services
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-3">
          {others.map((item) => (
            <li key={item.slug}>
              <Link
                to={servicePath(item.slug)}
                className="flex h-full items-center justify-between gap-3 rounded-2xl border border-slate-200 px-4 py-4 transition hover:border-ink dark:border-white/10 dark:hover:border-white/40"
              >
                <span>
                  <span className="block font-semibold">{item.name}</span>
                  <span className="mt-1 block text-xs text-slate-500">
                    {item.priceNote === "From" ? `From ${item.price}${item.priceUnit}` : "Priced to your project"}
                  </span>
                </span>
                <Icon name="arrow" className="h-4 w-4 shrink-0" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <FinalCta />
    </>
  );
}
