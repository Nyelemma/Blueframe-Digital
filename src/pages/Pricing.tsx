import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import FinalCta from "../components/FinalCta";
import Icon from "../components/Icons";
import { PAGE_META } from "../lib/site";
import { primaryBtn, primaryBtnLight, secondaryBtn } from "../lib/classes";
import { breadcrumbNode, graph, organizationNode, serviceNode } from "../lib/schema";

const tiers = [
  {
    name: "Website Starter",
    price: "£199",
    note: "From",
    text: "For small businesses that need a professional online presence.",
    features: [
      "Professional website",
      "Mobile responsive",
      "Contact section/form",
      "Basic SEO setup",
      "Social links",
      "Google Maps integration where relevant",
    ],
    cta: "Get Started",
    to: "/contact?need=website&budget=starter",
    tone: "light" as const,
  },
  {
    name: "Business Website",
    price: "£399",
    note: "From",
    text: "For businesses that need more room to showcase their services.",
    features: [
      "Multi-page website",
      "Custom design",
      "SEO foundations",
      "Contact forms",
      "Gallery/portfolio",
      "Social integrations",
      "Google Maps",
      "Analytics",
    ],
    cta: "Build My Website",
    to: "/contact?need=website&budget=business",
    tone: "dark" as const,
  },
  {
    name: "Custom",
    price: "Let's Talk",
    note: "Scoped",
    text: "For businesses requiring more advanced functionality.",
    features: [
      "Booking systems",
      "Membership systems",
      "Larger ecommerce builds",
      "Advanced integrations",
      "Custom functionality",
    ],
    cta: "Discuss Your Project",
    to: "/contact?need=other&budget=custom",
    tone: "light" as const,
  },
];

const store = [
  "Product pages for what you sell",
  "A store that works on phones",
  "Set up for a small business",
  "Price agreed before anything goes live",
];

const social = [
  "Content creation",
  "Posting",
  "Captions",
  "Content planning",
  "Brand consistency",
  "Ongoing management",
];

export default function Pricing() {
  const meta = PAGE_META.pricing;
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        jsonLd={graph(
          organizationNode(),
          serviceNode(
            "Website design",
            "Professional websites for small businesses from £199.",
            "/pricing",
          ),
          serviceNode(
            "Online stores",
            "Online stores for small businesses from £15 a month, cheaper than Shopify.",
            "/pricing",
          ),
          serviceNode(
            "Social media management",
            "Social media management from £99 a month.",
            "/social-media",
          ),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        )}
      />
      <PageHeader
        eyebrow="Pricing"
        title="Clear starting prices."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Pricing" },
        ]}
      >
        Prices below are starting points. Every project is different, and you'll get a clear quote before we start.
      </PageHeader>

      <div className="mx-auto grid max-w-[1120px] gap-4 px-5 py-8 sm:px-6 lg:grid-cols-3">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`flex flex-col rounded-[1.6rem] border p-6 sm:p-8 ${
              tier.tone === "dark"
                ? "border-transparent bg-night text-white"
                : "border-slate-200 bg-white dark:border-white/10 dark:bg-[#0c1222]"
            }`}
          >
            <p className={`text-[11px] font-semibold tracking-[0.18em] uppercase ${tier.tone === "dark" ? "text-[#8eb6ff]" : "text-slate-500"}`}>
              {tier.note}
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em]">{tier.price}</h2>
            <h3 className="mt-4 text-lg font-semibold">{tier.name}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${tier.tone === "dark" ? "text-slate-300" : "text-slate-600 dark:text-slate-400"}`}>
              {tier.text}
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-2">
                  <Icon name="check" className={`mt-0.5 h-4 w-4 shrink-0 ${tier.tone === "dark" ? "text-[#8eb6ff]" : "text-brand-deep dark:text-brand"}`} />
                  {feature}
                </li>
              ))}
            </ul>
            <Link to={tier.to} className={`${tier.tone === "dark" ? primaryBtnLight : secondaryBtn} mt-8 w-full`}>
              {tier.cta}
            </Link>
          </article>
        ))}
      </div>

      <div className="mx-auto grid max-w-[1120px] gap-4 px-5 pb-16 sm:px-6 lg:grid-cols-2">
        <article id="stores" className="flex flex-col rounded-[1.6rem] border border-transparent bg-night p-6 text-white sm:p-8">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-[#8eb6ff] uppercase">Monthly</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">From £15/month</h2>
          <h3 className="mt-3 text-lg font-semibold">Online stores</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-300">
            A proper online store for a small business. Cheaper than Shopify.
          </p>
          <ul className="mt-6 space-y-2.5 text-sm">
            {store.map((item) => (
              <li key={item} className="flex gap-2">
                <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-[#8eb6ff]" />
                {item}
              </li>
            ))}
          </ul>
          <Link to="/contact?need=store&budget=store" className={`${primaryBtnLight} mt-8 w-full sm:w-auto`}>
            Start a Store
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </article>
        <article className="flex flex-col rounded-[1.6rem] border border-slate-200 p-6 sm:p-8 dark:border-white/10">
          <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500 uppercase">Monthly</p>
          <h2 className="mt-2 text-4xl font-semibold tracking-[-0.04em]">From £99/month</h2>
          <h3 className="mt-3 text-lg font-semibold">Social Media</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            For businesses that want a consistent presence without doing the posting themselves.
          </p>
          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
            {social.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <Icon name="check" className="h-4 w-4 shrink-0 text-brand-deep dark:text-brand" />
                {item}
              </li>
            ))}
          </ul>
          <Link to="/contact?need=social&budget=social" className={`${primaryBtn} mt-8 w-full sm:w-auto`}>
            Manage My Socials
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </article>
        <p className="mt-6 text-sm text-slate-500">
          Hosting and domain names are discussed separately. Nothing starts until the price is agreed.
        </p>
      </div>
      <FinalCta />
    </>
  );
}
