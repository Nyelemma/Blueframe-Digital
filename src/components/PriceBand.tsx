import { Link } from "react-router-dom";
import Icon from "./Icons";
import Reveal from "./Reveal";
import { primaryBtn } from "../lib/classes";

const points = [
  "Professional design",
  "Mobile responsive",
  "SEO foundations",
  "Contact forms",
  "Social media integration",
  "Fast performance",
  "Launch support",
];

export default function PriceBand() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 py-8 sm:px-6" aria-labelledby="price-title">
      <div className="grid overflow-hidden rounded-[1.8rem] border border-slate-200 lg:grid-cols-2 dark:border-white/10">
        <Reveal className="bg-white p-8 sm:p-12 dark:bg-[#0c1222]">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-brand-deep uppercase dark:text-brand">
            Websites
          </p>
          <h2
            id="price-title"
            className="mt-4 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl"
          >
            A great website shouldn't cost a fortune.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            Professional websites for small businesses without the £5,000+ agency price tag.
          </p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm">
                <Icon name="check" className="h-4 w-4 shrink-0 text-brand-deep dark:text-brand" />
                {point}
              </li>
            ))}
          </ul>
          <Link to="/contact?need=website&budget=starter" className={`${primaryBtn} mt-8`}>
            Get Your Website
            <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <p className="mt-4 text-sm text-slate-500">
            Every project is different. We'll give you a clear price before we start.
          </p>
        </Reveal>
        <div className="flex flex-col justify-between bg-night p-8 text-white sm:p-12">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#8eb6ff] uppercase">
            Starting from
          </p>
          <p className="mt-10 font-semibold tracking-[-0.06em]">
            <span className="align-top text-3xl text-[#8eb6ff]">£</span>
            <span className="text-8xl leading-none sm:text-9xl">199</span>
          </p>
          <p className="mt-8 max-w-xs text-sm leading-relaxed text-slate-400">
            Great websites. Fair prices. Built for businesses that want to look established from day one.
          </p>
        </div>
      </div>
    </section>
  );
}
