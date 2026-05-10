import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Process from "./components/Process";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FlickerOverlay from "./components/FlickerOverlay";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [flicker, setFlicker] = useState<null | "to-dark" | "to-light">(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggleTheme = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const next: Theme = theme === "dark" ? "light" : "dark";
    if (reduce) {
      setTheme(next);
      return;
    }
    setFlicker(next === "dark" ? "to-dark" : "to-light");
    window.setTimeout(() => setTheme(next), 120);
    window.setTimeout(() => setFlicker(null), 420);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main className="flex-1">
        <Hero />
        <Features />
        <Process />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer theme={theme} />
      <FlickerOverlay state={flicker} />
    </div>
  );
}
