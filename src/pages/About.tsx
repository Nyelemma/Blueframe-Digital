import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import FinalCta from "../components/FinalCta";
import { PAGE_META } from "../lib/site";
import { primaryBtn } from "../lib/classes";
import { breadcrumbNode, graph, organizationNode } from "../lib/schema";

const steps = [
  {
    title: "Tell us about the business",
    text: "What you do, who it's for, and what the website needs to achieve.",
  },
  {
    title: "We agree a clear price",
    text: "You see the cost before any design work begins. No vague agency phases.",
  },
  {
    title: "We design and build",
    text: "A site shaped around the business, made to work on a phone and load quickly.",
  },
  {
    title: "We launch, and stay available",
    text: "You review it, we put it live, and support is there when something needs to change.",
  },
];

const values = [
  ["Personal service", "You deal with us directly. No account layers."],
  ["Quality", "The site should look like it belongs to a serious business."],
  ["Transparency", "The price is clear before we start."],
  ["Modern design", "Current, considered, and specific to the business."],
  ["Practical solutions", "Built to be used, not just admired."],
  ["Long-term support", "Launch isn't the end of the relationship."],
];

export default function About() {
  const meta = PAGE_META.about;
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        jsonLd={graph(
          organizationNode(),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        )}
      />
      <PageHeader
        eyebrow="About"
        title="Big agency quality. Small business approach."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "About" },
        ]}
      >
        Blueframe Digital exists so small businesses can have a professional website without paying traditional agency prices.
      </PageHeader>

      <div className="mx-auto grid max-w-[1120px] gap-12 px-5 py-8 sm:px-6 lg:grid-cols-12">
        <div className="space-y-5 text-base leading-relaxed text-slate-600 lg:col-span-7 dark:text-slate-300">
          <p>
            A good website should make the phone ring, the form fill, or the booking happen. It should also look like you take the work seriously. Those two things are not reserved for companies with a five-figure marketing budget.
          </p>
          <p>
            We design and build websites for trades, clubs, coaches, independents and other small businesses.
          </p>
          <p>
            The work is personal, the pricing is upfront, and the sites are built to be fast, clear and easy to keep up to date. If you also need someone to keep your socials moving, that can sit alongside the website.
          </p>
          <Link to="/contact" className={`${primaryBtn} mt-2`}>
            Start a conversation
          </Link>
        </div>
        <aside className="rounded-[1.6rem] border border-slate-200 p-6 lg:col-span-5 dark:border-white/10">
          <h2 className="text-sm font-semibold tracking-[0.16em] text-slate-500 uppercase">How it works</h2>
          <ol className="mt-5 space-y-5">
            {steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[auto_1fr] gap-3">
                <span className="text-xs font-semibold tracking-[0.14em] text-brand-deep dark:text-brand">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </aside>
      </div>

      <section className="mx-auto max-w-[1120px] px-5 pb-16 sm:px-6" aria-labelledby="values-title">
        <h2 id="values-title" className="text-2xl font-semibold tracking-tight">What we care about</h2>
        <ul className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
          {values.map(([title, text]) => (
            <li key={title} className="bg-white p-5 dark:bg-[#0c1222]">
              <h3 className="font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{text}</p>
            </li>
          ))}
        </ul>
      </section>
      <FinalCta />
    </>
  );
}
