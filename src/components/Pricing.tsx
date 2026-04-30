import { motion } from "framer-motion";

type Tier = {
  name: string;
  price: string;
  cadence?: string;
  blurb: string;
  features: string[];
  cta: string;
  href: string;
  highlight?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Starter",
    price: "£99",
    cadence: "one-off",
    blurb: "A polished one-page site that does the job — perfect for trades and small services.",
    features: [
      "Single-page custom design",
      "Mobile-first, lightning quick",
      "Contact form & click-to-call",
      "Basic on-page SEO",
      "Live in 5–7 days",
    ],
    cta: "Start at £99",
    href: "#contact",
  },
  {
    name: "Business",
    price: "£249",
    cadence: "one-off",
    blurb: "Up to 5 pages with services, gallery and testimonials. Our most popular package.",
    features: [
      "Up to 5 custom pages",
      "Image gallery & testimonials",
      "Local SEO setup (GBP, schema)",
      "Google Analytics & search console",
      "1 round of revisions included",
    ],
    cta: "Choose Business",
    href: "#contact",
    highlight: true,
  },
  {
    name: "Premium",
    price: "From £499",
    cadence: "tailored",
    blurb: "Custom features, copywriting, integrations, or a small CMS — built around you.",
    features: [
      "Unlimited pages",
      "Light CMS for self-editing",
      "Booking / forms / integrations",
      "Copywriting available",
      "Priority support",
    ],
    cta: "Talk to us",
    href: "#contact",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gradient">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Honest, upfront prices. No retainer trap.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Pick a package or talk to us about something custom. Hosting and
            domain are billed separately at cost.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className={`relative flex flex-col rounded-2xl border p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift ${
                t.highlight
                  ? "border-transparent bg-brand-gradient text-white"
                  : "border-slate-200 bg-white text-[--color-navy] dark:border-white/10 dark:bg-[--color-navy-soft] dark:text-slate-100"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-[--color-navy] shadow-soft">
                  Most popular
                </span>
              )}

              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                <span className="text-4xl font-semibold tracking-tight">
                  {t.price}
                </span>
                {t.cadence && (
                  <span
                    className={`text-sm ${
                      t.highlight ? "text-white/80" : "text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {t.cadence}
                  </span>
                )}
              </div>
              <p
                className={`mt-3 text-sm ${
                  t.highlight ? "text-white/85" : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {t.blurb}
              </p>

              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <svg
                      className={`mt-0.5 h-5 w-5 flex-none ${
                        t.highlight ? "text-white" : "text-[--color-brand-from]"
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="m5 12 4 4L19 7" />
                    </svg>
                    <span
                      className={
                        t.highlight ? "text-white" : "text-slate-700 dark:text-slate-200"
                      }
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={t.href}
                className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition hover:-translate-y-0.5 ${
                  t.highlight
                    ? "bg-white text-[--color-navy] shadow-soft hover:shadow-lift"
                    : "bg-brand-gradient text-white shadow-soft hover:shadow-lift"
                }`}
              >
                {t.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-slate-500 dark:text-slate-400">
          Hosting and domain billed separately at cost. No hidden fees, ever.
        </p>
      </div>
    </section>
  );
}
