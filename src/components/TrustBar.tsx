const names = [
  "Arcta Group",
  "Morecambe FC Girls",
  "Morecambe Gas Services",
  "MN Coaching",
  "Middleton & Overton Sports FC",
  "Happy Tails Northwest",
  "GP Garden Care",
];

export default function TrustBar() {
  return (
    <section className="border-y border-slate-200/80 dark:border-white/10" aria-labelledby="trust-title">
      <div className="mx-auto max-w-[1120px] px-5 py-10 sm:px-6 sm:py-12">
        <h2
          id="trust-title"
          className="text-center text-sm font-medium text-slate-600 dark:text-slate-400"
        >
          Trusted to build websites for businesses across different industries.
        </h2>
        <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {names.map((name) => (
            <li
              key={name}
              className="text-[13px] font-semibold tracking-[0.08em] text-slate-600 uppercase dark:text-slate-300"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
