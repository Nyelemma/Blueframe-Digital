import { motion } from "framer-motion";

const features = [
  {
    title: "Agency-quality design",
    body:
      "Clean typography, considered spacing, and motion that feels expensive. Built around your brand, not a stock template.",
    icon: (
      <path d="M3 7h18M3 12h18M3 17h12" />
    ),
  },
  {
    title: "Fast and mobile-first",
    body:
      "Lighthouse scores of 95+ out of the box. Your customers won't wait, and Google won't penalise.",
    icon: (
      <>
        <path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M9 21V9" />
      </>
    ),
  },
  {
    title: "Live in days, not months",
    body:
      "We don't do six-week discovery phases. Most sites go live within a week of kick-off.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
  },
  {
    title: "Built to be found",
    body:
      "Semantic markup, fast paint times, and local SEO basics done properly so you show up where it matters.",
    icon: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),
  },
  {
    title: "No long contracts",
    body:
      "Pay once for the build. Optional aftercare available — but never compulsory.",
    icon: (
      <>
        <path d="M9 12.5 11 14.5 15.5 10" />
        <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </>
    ),
  },
  {
    title: "You own everything",
    body:
      "Your domain, your hosting, your content. Full handover on day one if you ever want to move.",
    icon: (
      <>
        <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="why" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gradient">
            Why Blueframe
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            The polish of a £3,000 build, at a price that respects local
            margins.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            We strip out the agency overhead — not the quality. You get a site
            you'd be proud to point a customer at, without the long sales cycle.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift dark:border-white/10 dark:bg-navy-soft"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-gradient text-white shadow-soft">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
