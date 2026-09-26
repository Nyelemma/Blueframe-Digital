import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
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
import { primaryBtn, secondaryBtn } from "../lib/classes";
import { breadcrumbNode, graph, organizationNode, serviceNode, websiteNode } from "../lib/schema";

export default function Home() {
  const reduce = useReducedMotion();
  const meta = PAGE_META.home;
  const rise = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

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
            "/",
          ),
          serviceNode(
            "Social media management",
            "Content planning, captions and posting for small businesses, from £99 a month.",
            "/social-media",
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
        <div className="relative mx-auto grid max-w-[1120px] items-center gap-12 px-5 pt-6 pb-16 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:pt-8 lg:pb-20">
          <div>
            <motion.p {...rise(0)} className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Built for businesses. Designed to perform.
            </motion.p>
            <motion.h1
              {...rise(0.06)}
              className="mt-5 text-[clamp(2.7rem,6vw,4.7rem)] font-semibold leading-[0.94] tracking-[-0.048em]"
            >
              Websites that make small businesses look big.
            </motion.h1>
            <motion.p
              {...rise(0.12)}
              className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300"
            >
              High-quality, modern websites built for small and local businesses. No huge
              agency fees. Websites from £199.
            </motion.p>
            <motion.div {...rise(0.18)} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/contact" className={primaryBtn}>
                Start Your Website
                <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
              <Link to="/work" className={secondaryBtn}>
                View Our Work
              </Link>
            </motion.div>
            <motion.p {...rise(0.24)} className="mt-6 text-sm text-slate-500">
              Web design for businesses in Lancaster, Morecambe and across Lancashire.
            </motion.p>
          </div>
          <motion.div {...rise(0.1)}>
            <HeroShowcase />
          </motion.div>
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
            <Link to="/social-media" className={primaryBtn}>
              Talk About Your Socials
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
