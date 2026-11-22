import { useEffect, useState } from "react";
import { useTheme } from "../lib/theme";
import Icon from "./Icons";

// Icons swap with the `dark` class rather than theme state, so the prerendered
// HTML matches what the browser hydrates whichever theme the visitor uses.
// aria-pressed is only added after mount for the same reason.
export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Dark mode"
      aria-pressed={mounted ? theme === "dark" : undefined}
      className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-ink transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white"
    >
      <Icon name="sun" className="h-[18px] w-[18px] transition-transform duration-300 hover:rotate-45 dark:hidden" />
      <Icon name="moon" className="hidden h-[18px] w-[18px] transition-transform duration-300 hover:-rotate-12 dark:block" />
    </button>
  );
}
