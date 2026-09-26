import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import PageHeader from "../components/PageHeader";
import SocialStudio from "../components/SocialStudio";
import FinalCta from "../components/FinalCta";
import Icon from "../components/Icons";
import { PAGE_META } from "../lib/site";
import { primaryBtnLight } from "../lib/classes";
import { breadcrumbNode, graph, organizationNode, serviceNode } from "../lib/schema";

const services = [
  {
    icon: "pen",
    title: "Content Creation",
    text: "Professional social posts designed around your brand.",
  },
  {
    icon: "calendar",
    title: "Content Planning",
    text: "A consistent content calendar so you always know what's going out.",
  },
  {
    icon: "send",
    title: "Posting",
    text: "We'll schedule and publish your content.",
  },
  {
    icon: "caption",
    title: "Captions",
    text: "Clear, engaging copy written for your audience.",
  },
  {
    icon: "brand",
    title: "Brand Consistency",
    text: "Keep your social presence looking professional and recognisable.",
  },
  {
    icon: "refresh",
    title: "Ongoing Management",
    text: "We handle the day-to-day work so you don't have to.",
  },
] as const;

export default function SocialMedia() {
  const meta = PAGE_META.social;
  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        jsonLd={graph(
          organizationNode(),
          serviceNode(
            "Social media management",
            "Content creation, planning, captions and posting for small businesses, from £99 a month.",
            "/social-media",
          ),
          breadcrumbNode([
            { name: "Home", path: "/" },
            { name: "Social Media", path: "/social-media" },
          ]),
        )}
      />
      <PageHeader
        eyebrow="Social media"
        title="Don't have time to manage your socials?"
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Social Media" },
        ]}
      >
        <p className="text-2xl font-semibold tracking-tight text-ink dark:text-white">We'll do it for you.</p>
        <p className="mt-4">
          Running a business is enough work without having to worry about what you're posting
          every day. Blueframe Digital can manage your social media presence, create engaging
          content and keep your business active online.
        </p>
      </PageHeader>

      <div className="mx-auto grid max-w-[1120px] items-center gap-8 px-5 py-8 sm:px-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-[1.6rem] bg-night p-8 text-white">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-[#8eb6ff] uppercase">From</p>
          <p className="mt-3 text-6xl font-semibold tracking-[-0.05em]">£99<span className="text-2xl text-slate-400">/month</span></p>
          <p className="mt-4 text-sm leading-relaxed text-slate-400">
            A starting point for ongoing management. We'll confirm the scope and the price before anything goes live.
          </p>
          <Link to="/contact?need=social&budget=social" className={`${primaryBtnLight} mt-8`}>
            Talk About Your Socials
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>
        <SocialStudio />
      </div>

      <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6" aria-labelledby="social-services">
        <h2 id="social-services" className="text-3xl font-semibold tracking-[-0.04em]">
          What we handle
        </h2>
        <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3 dark:border-white/10 dark:bg-white/10">
          {services.map((service) => (
            <li key={service.title} className="h-full bg-white p-6 dark:bg-[#0c1222]">
              <Icon name={service.icon} className="h-5 w-5 text-brand-deep dark:text-brand" />
              <h3 className="mt-4 font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{service.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <FinalCta />
    </>
  );
}
