import Icon from "./Icons";
import type { Faq } from "../lib/landings";

export default function FaqList({ faqs, title = "Frequently asked questions" }: { faqs: Faq[]; title?: string }) {
  if (faqs.length === 0) return null;
  return (
    <section className="mx-auto max-w-[1120px] px-5 py-16 sm:px-6" aria-labelledby="faq-title">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <h2 id="faq-title" className="max-w-[14ch] text-3xl font-semibold tracking-[-0.04em]">
          {title}
        </h2>
        <div className="divide-y divide-slate-200 border-y border-slate-200 dark:divide-white/10 dark:border-white/10">
          {faqs.map((faq) => (
            <details key={faq.q} className="group py-1">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-3 font-semibold [&::-webkit-details-marker]:hidden">
                <h3 className="text-base">{faq.q}</h3>
                <Icon
                  name="arrow"
                  className="h-4 w-4 shrink-0 rotate-90 text-slate-500 dark:text-slate-400 transition-transform group-open:-rotate-90"
                />
              </summary>
              <p className="pb-5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
