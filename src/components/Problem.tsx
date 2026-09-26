import Reveal from "./Reveal";

const states = [
  {
    number: "01",
    title: "No website",
    text: "People hear about you, then have nowhere solid to look.",
  },
  {
    number: "02",
    title: "Outdated website",
    text: "The business has moved on. The site still looks like it hasn't.",
  },
  {
    number: "03",
    title: "No time",
    text: "You'd rather be doing the work than wrestling with a website.",
  },
];

export default function Problem() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 py-20 sm:px-6 md:py-28" aria-labelledby="problem-title">
      <div className="grid items-end gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-brand-deep uppercase dark:text-brand">
            The problem
          </p>
          <h2
            id="problem-title"
            className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
          >
            Your website shouldn't hold your business back.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Whether you have no website, an outdated website or simply don't have
            the time to manage one, Blueframe Digital creates modern websites that
            make your business look professional and help customers take the next
            step.
          </p>
        </Reveal>
        <ol className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-3 lg:col-span-7 dark:border-white/10 dark:bg-white/10">
          {states.map((state) => (
            <li key={state.number} className="h-full bg-white p-5 dark:bg-[#0c1222]">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-brand-deep dark:text-brand">
                {state.number}
              </p>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{state.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {state.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
