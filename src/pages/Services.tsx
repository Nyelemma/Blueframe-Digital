import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import FinalCta from "../components/FinalCta";
import Icon from "../components/Icons";
import { PAGE_META } from "../lib/site";
import { servicePath, services } from "../lib/services";
import { breadcrumbNode, graph, organizationNode, serviceNode } from "../lib/schema";

export default function Services() {
  const meta = PAGE_META.services;
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        jsonLd={graph(
          organizationNode(),
          ...services.map((service) =>
            serviceNode(service.name, service.short, servicePath(service.slug), service.lowPrice || undefined),
          ),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        )}
      />
      <PageHeader
        eyebrow="Services"
        title="Everything your business needs online."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services" },
        ]}
      >
        Websites, online stores and social media for small businesses. Clear starting prices, and a
        firm quote before any work begins.
      </PageHeader>

      <ul className="mx-auto grid max-w-[1120px] gap-4 px-5 py-8 pb-20 sm:px-6 md:grid-cols-2">
        {services.map((service, index) => {
          const dark = index === 0;
          return (
            <li key={service.slug}>
              <Link
                to={servicePath(service.slug)}
                className={`group flex h-full flex-col rounded-[1.6rem] border p-6 transition hover:-translate-y-0.5 sm:p-8 ${
                  dark
                    ? "border-transparent bg-night text-white"
                    : "border-slate-200 bg-white hover:border-ink dark:border-white/10 dark:bg-[#0c1222] dark:hover:border-white/40"
                }`}
              >
                <span
                  className={`inline-grid h-11 w-11 place-items-center rounded-xl border ${
                    dark
                      ? "border-white/15 text-[#8eb6ff]"
                      : "border-slate-200 text-brand-deep dark:border-white/10 dark:text-brand"
                  }`}
                >
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-6 text-2xl font-semibold tracking-[-0.03em]">{service.name}</h2>
                <p
                  className={`mt-2 text-sm leading-relaxed ${
                    dark ? "text-slate-300" : "text-slate-600 dark:text-slate-400"
                  }`}
                >
                  {service.short}
                </p>
                <div className="mt-auto flex items-end justify-between gap-4 pt-8">
                  <p>
                    <span
                      className={`block text-[11px] font-semibold tracking-[0.18em] uppercase ${
                        dark ? "text-[#8eb6ff]" : "text-slate-500"
                      }`}
                    >
                      {service.priceNote}
                    </span>
                    <span className="mt-1 block text-3xl font-semibold tracking-[-0.04em]">
                      {service.price}
                      {service.priceUnit && (
                        <span className={`text-base ${dark ? "text-slate-400" : "text-slate-500"}`}>
                          {service.priceUnit}
                        </span>
                      )}
                    </span>
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
                    Learn more
                    <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <FinalCta />
    </>
  );
}
