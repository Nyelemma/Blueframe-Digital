import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import { CATEGORIES, projects, type Category } from "../lib/projects";

type Props = {
  showFilters?: boolean;
  heading?: string;
  intro?: string;
};

export default function PortfolioGrid({ showFilters = false, heading, intro }: Props) {
  const [category, setCategory] = useState<Category>("All");
  const reduce = useReducedMotion();
  const visible = useMemo(
    () =>
      category === "All"
        ? projects
        : projects.filter((project) => project.category === category),
    [category],
  );

  return (
    <div>
      {(heading || intro) && (
        <div className="max-w-2xl">
          {heading && (
            <h2 className="text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">{heading}</h2>
          )}
          {intro && (
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{intro}</p>
          )}
        </div>
      )}

      {showFilters && (
        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {CATEGORIES.map((item) => {
            const selected = item === category;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => setCategory(item)}
                className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                  selected
                    ? "bg-ink text-white dark:bg-white dark:text-ink"
                    : "border border-slate-200 text-slate-600 hover:border-ink dark:border-white/10 dark:text-slate-300"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      )}

      <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.div
              key={project.slug}
              layout={!reduce}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.35 }}
            >
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
