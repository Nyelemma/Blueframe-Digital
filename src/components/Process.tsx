import { motion } from "framer-motion";

const steps = [
  {
    n: "01",
    title: "Quick chat",
    body:
      "A free 20-minute call to understand your business, your goals, and what success looks like.",
  },
  {
    n: "02",
    title: "Design preview",
    body:
      "Within 48 hours you'll see a real homepage mock-up — not a wireframe. Tweak freely until it's right.",
  },
  {
    n: "03",
    title: "Build & launch",
    body:
      "We build, populate your content, hook up domain and analytics, and put it live. Usually inside a week.",
  },
  {
    n: "04",
    title: "Aftercare (optional)",
    body:
      "Need updates next month? Send a message. We turn small changes around within 24 hours.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28 bg-slate-50/70 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gradient">
            The process
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            From first call to live site in under a week.
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            No drawn-out discovery, no surprise invoices. Just clear steps and a
            site that ships.
          </p>
        </div>

        <ol className="relative mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lift dark:border-white/10 dark:bg-[--color-navy-soft]"
            >
              <span className="text-brand-gradient text-sm font-semibold tracking-[0.2em]">
                STEP {s.n}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {s.body}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
