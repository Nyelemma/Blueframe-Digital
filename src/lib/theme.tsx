import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  flicker: null | "to-dark" | "to-light";
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [flicker, setFlicker] = useState<null | "to-dark" | "to-light">(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      /* private browsing */
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#070B14" : "#F8FAFC");
  }, [theme]);

  const toggleTheme = () => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const next: Theme = theme === "dark" ? "light" : "dark";
    if (reduce) {
      setTheme(next);
      return;
    }
    setFlicker(next === "dark" ? "to-dark" : "to-light");
    document.documentElement.classList.add("theme-flicker");
    window.setTimeout(() => setTheme(next), 110);
    window.setTimeout(() => {
      setFlicker(null);
      document.documentElement.classList.remove("theme-flicker");
    }, 420);
  };

  const value = useMemo(
    () => ({ theme, toggleTheme, flicker }),
    [theme, flicker],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
