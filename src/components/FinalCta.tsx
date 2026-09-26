import { Link } from "react-router-dom";
import Icon from "./Icons";
import { primaryBtnLight, secondaryBtnDark } from "../lib/classes";
import Reveal from "./Reveal";

export default function FinalCta() {
  return (
    <section className="px-3 pb-6 sm:px-5" aria-labelledby="final-cta-title">
      <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[1.8rem] bg-night px-6 py-16 text-white sm:px-12 sm:py-20">
        <Reveal>
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#8eb6ff] uppercase">
            Blueframe Digital
          </p>
          <h2
            id="final-cta-title"
            className="mt-4 max-w-[16ch] text-4xl font-semibold tracking-[-0.04em] sm:text-5xl"
          >
            Ready to make your business look its best online?
          </h2>
          <p className="mt-4 text-lg text-slate-300">Professional websites from £199.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className={primaryBtnLight}>
              Start Your Project
              <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Link>
            <Link to="/work" className={secondaryBtnDark}>
              View Our Work
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
