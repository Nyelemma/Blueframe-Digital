import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useTheme } from "../lib/theme";
import Icon from "./Icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const reduce = useReducedMotion();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-ink transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={reduce ? false : { opacity: 0, rotate: isDark ? -30 : 30, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={reduce ? undefined : { opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.16 }}
          className="grid place-items-center"
        >
          <Icon name={isDark ? "moon" : "sun"} className="h-[18px] w-[18px]" />
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
