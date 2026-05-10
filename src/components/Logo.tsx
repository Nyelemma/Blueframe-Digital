type LogoProps = {
  size?: number;
  withWordmark?: boolean;
  className?: string;
  theme?: "light" | "dark";
};

export default function Logo({
  size = 36,
  withWordmark = true,
  className = "",
  theme = "light",
}: LogoProps) {
  const line1 =
    theme === "dark" ? "text-white" : "text-navy";
  const line2 =
    theme === "dark" ? "text-slate-300" : "text-slate-600";

  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="Blueframe Digital"
    >
      <span
        className="grid place-items-center rounded-xl bg-navy shadow-soft"
        style={{ width: size + 14, height: size + 14 }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="bf-grad" x1="0" y1="0" x2="48" y2="48">
              <stop offset="0%" stopColor="#1e73ff" />
              <stop offset="100%" stopColor="#0052cc" />
            </linearGradient>
          </defs>
          <rect
            x="3"
            y="3"
            width="42"
            height="42"
            rx="9"
            stroke="url(#bf-grad)"
            strokeWidth="3"
          />
          <path
            d="M16 13h10.5a6.5 6.5 0 0 1 3.6 11.9A7 7 0 0 1 27 35H16V13Zm5 4.5v5h5a2.5 2.5 0 0 0 0-5h-5Zm0 9v5h6a2.5 2.5 0 0 0 0-5h-6Z"
            fill="url(#bf-grad)"
          />
        </svg>
      </span>
      {withWordmark && (
        <span className="leading-none select-none">
          <span
            className={`block text-[15px] font-semibold tracking-[0.18em] ${line1}`}
          >
            BLUEFRAME
          </span>
          <span
            className="mt-1 block h-[2px] w-full bg-brand-gradient rounded-full"
            aria-hidden="true"
          />
          <span
            className={`mt-1 block text-[10px] font-medium tracking-[0.32em] ${line2}`}
          >
            DIGITAL
          </span>
        </span>
      )}
    </span>
  );
}
