import Icon from "./Icons";
import Reveal from "./Reveal";

const features = [
  {
    icon: "design",
    title: "Modern Design",
    text: "A website designed around your business, not a generic template.",
  },
  {
    icon: "mobile",
    title: "Mobile First",
    text: "Beautiful and easy to use on phones, tablets and desktops.",
  },
  {
    icon: "seo",
    title: "SEO Ready",
    text: "Built with search engines and local visibility in mind.",
  },
  {
    icon: "speed",
    title: "Fast Performance",
    text: "Optimised code, assets and layouts for fast loading.",
  },
  {
    icon: "convert",
    title: "Conversion Focused",
    text: "Clear calls to action designed to turn visitors into enquiries.",
  },
  {
    icon: "manage",
    title: "Easy To Update",
    text: "Straightforward to keep current after launch, with support when you want changes.",
  },
  {
    icon: "secure",
    title: "Secure",
    text: "Modern security practices and reliable hosting options.",
  },
  {
    icon: "support",
    title: "Ongoing Support",
    text: "Need changes after launch? We're here to help.",
  },
] as const;

export default function FeatureGrid() {
  return (
    <section className="border-t border-slate-200 dark:border-white/10" aria-labelledby="features-title">
      <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-brand-deep uppercase dark:text-brand">
            What you get
          </p>
          <h2
            id="features-title"
            className="mt-4 max-w-[14ch] text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
          >
            Everything your business needs online.
          </h2>
        </Reveal>
        <ul className="mt-12 grid border-t border-l border-slate-200 sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10">
          {features.map((feature, index) => (
            <li key={feature.title} className="border-r border-b border-slate-200 dark:border-white/10">
              <Reveal delay={(index % 4) * 0.04} className="h-full">
                <article className="group h-full p-6 transition-colors hover:bg-white dark:hover:bg-white/[0.03]">
                  <span className="inline-grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-brand-deep transition group-hover:-translate-y-0.5 group-hover:border-brand/40 dark:border-white/10 dark:text-brand">
                    <Icon name={feature.icon} className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold tracking-tight">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {feature.text}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
