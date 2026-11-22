import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import HeroShowcase from "../components/HeroShowcase";
import TrustBar from "../components/TrustBar";
import Problem from "../components/Problem";
import FeatureGrid from "../components/FeatureGrid";
import PriceBand from "../components/PriceBand";
import PortfolioGrid from "../components/PortfolioGrid";
import FinalCta from "../components/FinalCta";
import Icon from "../components/Icons";
import { PAGE_META } from "../lib/site";
import { landingsOfKind } from "../lib/landings";
import { primaryBtn, secondaryBtn } from "../lib/classes";
import { breadcrumbNode, graph, organizationNode, serviceNode, websiteNode } from "../lib/schema";

export default function Home() {
  const meta = PAGE_META.home;
  // CSS-driven entrance (see .hero-rise in index.css) so the prerendered hero,
  // including the LCP heading, paints before JavaScript loads.
  const rise = (delay: number) => ({
    className: "hero-rise",
    style: { animationDelay: `${delay}s` },
  });

  return (
    <>
      <Seo
        title={meta.title}
        description={meta.description}
        path={meta.path}
        jsonLd={graph(
          organizationNode(),
          websiteNode(),
          serviceNode(
            "Small business web design",
            "Modern, mobile-first websites for small and local businesses, from £199.",
            "/services/web-design",
            "199",
          ),
          serviceNode(
            "Online stores",
            "Online stores for small businesses from £15 a month, cheaper than Shopify.",
            "/services/online-stores",
            "15",
          ),
          serviceNode(
            "Social media management",
            "Content planning, captions and posting for small businesses, from £99 a month.",
            "/services/social-media",
            "99",
          ),
          breadcrumbNode([{ name: "Home", path: "/" }]),
        )}
      />

      <section className="relative overflow-hidden">
        <div className="frame-grid pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, rgba(30,115,255,0.35), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-10 px-5 pt-2 pb-14 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12 lg:pt-8 lg:pb-20">
          <div className="min-w-0">
            <p {...rise(0)} className={`${rise(0).className} text-sm font-medium text-slate-500 dark:text-slate-400`}>
              Web design in Morecambe, Lancaster &amp; Lancashire
            </p>
            <h1
              {...rise(0.06)}
              className={`${rise(0.06).className} mt-4 text-[2.35rem] font-semibold leading-[0.96] tracking-[-0.045em] sm:mt-5 sm:text-6xl sm:leading-[0.94] lg:text-[4.7rem]`}
            >
              Websites that make small businesses look big.
            </h1>
            <p
              {...rise(0.12)}
              className={`${rise(0.12).className} mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg dark:text-slate-300`}
            >
              Affordable website design for small and local businesses. High-quality, modern
              websites without the huge agency fees, from £199.
            </p>
            <div {...rise(0.18)} className={`${rise(0.18).className} mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row`}>
              <Link to="/contact" className={`${primaryBtn} w-full sm:w-auto`}>
                Start Your Website
                <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link to="/work" className={`${secondaryBtn} w-full sm:w-auto`}>
                View Our Work
              </Link>
            </div>
            <p {...rise(0.24)} className={`${rise(0.24).className} mt-5 text-sm text-slate-500 sm:mt-6`}>
              Websites, online stores and social media for small businesses.
            </p>
          </div>
          <div {...rise(0.1)} className={`${rise(0.1).className} min-w-0`}>
            <HeroShowcase />
          </div>
        </div>
      </section>

      <TrustBar />
      <Problem />
      <FeatureGrid />
      <PriceBand />

      <section className="mx-auto max-w-[1120px] px-5 py-20 sm:px-6 md:py-28" aria-labelledby="work-title">
        <p className="text-[11px] font-semibold tracking-[0.22em] text-brand-deep uppercase dark:text-brand">
          Selected work
        </p>
        <div className="mt-4" id="work-title">
          <PortfolioGrid
            heading="Built by Blueframe Digital."
            intro="Real websites. Real businesses. Real results."
          />
        </div>
        <div className="mt-10">
          <Link to="/work" className={secondaryBtn}>
            Browse all work
            <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 pb-8 sm:px-6">
        <div className="grid items-center gap-8 rounded-[1.8rem] border border-slate-200 bg-white p-8 sm:p-10 md:grid-cols-[1.2fr_0.8fr] dark:border-white/10 dark:bg-[#0c1222]">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-brand-deep uppercase dark:text-brand">
              Social media
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
              Don't have time to manage your socials?
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-400">
              We'll plan it, write it and post it. From £99 a month.
            </p>
          </div>
          <div className="md:justify-self-end">
            <Link to="/services/social-media" className={primaryBtn}>
              Talk About Your Socials
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1120px] px-5 py-20 sm:px-6" aria-labelledby="local-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.22em] text-brand-deep uppercase dark:text-brand">
              Local web design
            </p>
            <h2 id="local-title" className="mt-4 max-w-[18ch] text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
              Web design for Morecambe, Lancaster and Lancashire.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              We've built websites for local trades, sports clubs, coaches and community projects, and we
              work with small businesses across the UK. Find out how we can help your area or industry.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { heading: "Areas", items: landingsOfKind("location") },
              { heading: "Industries", items: landingsOfKind("industry") },
            ].map((group) => (
              <nav key={group.heading} aria-label={`Web design by ${group.heading.toLowerCase()}`}>
                <h3 className="text-sm font-semibold tracking-[0.16em] text-slate-500 uppercase">{group.heading}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/${item.slug}`}
                        className="flex min-h-11 items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 text-sm font-medium transition hover:border-ink dark:border-white/10 dark:hover:border-white/40"
                      >
                        {item.label}
                        <Icon name="arrow" className="h-4 w-4 shrink-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
