import { useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import Icon from "./Icons";
import { NAV_LINKS } from "../lib/site";
import { primaryBtn } from "../lib/classes";

function isActive(path: string, to: string) {
  if (to === "/") return path === "/";
  return path === to || path.startsWith(`${to}/`);
}

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex max-w-[1120px] items-center gap-3 border bg-white/80 px-3 backdrop-blur-xl transition-[height,border-radius,box-shadow] duration-300 dark:border-white/10 dark:bg-[#070b14]/80 ${
          scrolled
            ? "h-16 rounded-2xl border-slate-200/80 shadow-soft"
            : "h-[84px] rounded-[1.6rem] border-slate-200/70"
        }`}
      >
        <Link to="/" className="shrink-0 rounded-xl">
          <Logo
            className={`w-auto transition-all duration-300 ${
              scrolled ? "h-11" : "h-[62px]"
            }`}
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-ink dark:text-white"
                    : "text-slate-500 hover:text-ink dark:text-slate-400 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-4">
          <Link to="/contact" className={`${primaryBtn} hidden px-4 py-2.5 sm:inline-flex`}>
            Start Your Website
            <Icon name="arrow" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <ThemeToggle />
          <button
            type="button"
            className="inline-grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-ink lg:hidden dark:border-white/10 dark:bg-white/5 dark:text-white"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id={menuId}
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.22 }}
            className="mx-auto mt-2 max-w-[1120px] overflow-hidden rounded-3xl border border-slate-200 bg-white p-3 shadow-lift lg:hidden dark:border-white/10 dark:bg-[#0c1222]"
          >
            <nav className="flex flex-col" aria-label="Mobile">
              {NAV_LINKS.map((link, index) => {
                const active = isActive(pathname, link.to);
                return (
                  <motion.div
                    key={link.to}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: reduce ? 0 : 0.04 * index }}
                  >
                    <Link
                      to={link.to}
                      aria-current={active ? "page" : undefined}
                      className={`block rounded-2xl px-4 py-3 text-lg font-medium ${
                        active
                          ? "bg-paper text-ink dark:bg-white/10 dark:text-white"
                          : "text-ink dark:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <Link to="/contact" className={`${primaryBtn} mt-2 w-full`}>
                Start Your Website
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
