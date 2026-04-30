import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    q: "Why is this so much cheaper than other agencies?",
    a: "We're a tight team without the overheads of a big agency — no fancy office, no account managers, no six-week discovery phase. We charge for the build, not the layers in between.",
  },
  {
    q: "What does the £99 package actually include?",
    a: "A custom-designed single-page website with your branding, contact form, click-to-call, basic SEO and analytics. It's genuinely live and ready for customers — not a stripped-down demo.",
  },
  {
    q: "Do I own the website?",
    a: "Yes — completely. Your domain, hosting account and code are in your name. If you ever want to move to another provider, we hand it over without fuss.",
  },
  {
    q: "Can I update the site myself afterwards?",
    a: "On Starter and Business packages we make small text/image updates for you (usually within 24 hours). Premium includes a light CMS so you can edit the site yourself.",
  },
  {
    q: "How long does it take to go live?",
    a: "Most sites are live within 5–7 days of kick-off. We start with a real homepage mock-up within 48 hours so you see real progress immediately.",
  },
  {
    q: "What about hosting and the domain?",
    a: "We sort it for you and bill it through at cost — typically around £15/year for a domain and £5/month for hosting. No markups, no surprises.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-50/70 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gradient">
            FAQ
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            The questions everyone asks first.
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-soft dark:divide-white/10 dark:border-white/10 dark:bg-[--color-navy-soft]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 ring-brand"
                >
                  <span className="text-base font-semibold md:text-lg">
                    {f.q}
                  </span>
                  <span
                    className={`grid h-8 w-8 flex-none place-items-center rounded-full border border-slate-200 transition dark:border-white/10 ${
                      isOpen ? "bg-brand-gradient text-white" : "bg-white dark:bg-white/5"
                    }`}
                    aria-hidden="true"
                  >
                    <svg
                      className={`h-4 w-4 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                        {f.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
