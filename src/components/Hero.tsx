import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(30,115,255,0.55), rgba(0,82,204,0.15) 60%, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          color: "#1e73ff",
          maskImage:
            "radial-gradient(ellipse at center, black 50%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 50%, transparent 80%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-600 shadow-soft dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
          Now booking April builds — live in 5–7 days
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mx-auto mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
        >
          Premium Websites.{" "}
          <span className="text-brand-gradient">Half the Cost.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 md:text-xl dark:text-slate-300"
        >
          We build high-performing websites for local businesses, starting from
          just <span className="font-semibold text-navy dark:text-white">£99</span>.
          Fast, modern, mobile-first — without the agency price tag.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full bg-brand-gradient px-7 py-3.5 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift focus:outline-none focus-visible:ring-2 ring-brand"
          >
            See pricing
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-navy shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift dark:border-white/10 dark:bg-white/5 dark:text-white"
          >
            Get a free quote
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-3 gap-4 rounded-2xl border border-slate-200 bg-white/70 p-5 text-left shadow-soft backdrop-blur md:gap-6 md:p-6 dark:border-white/10 dark:bg-white/5"
        >
          <Stat label="From" value="£99" />
          <Stat label="Live in" value="5–7 days" />
          <Stat label="Lighthouse" value="95+ score" />
        </motion.dl>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
        {label}
      </dt>
      <dd className="mt-1 text-2xl font-semibold tracking-tight md:text-3xl">
        {value}
      </dd>
    </div>
  );
}
