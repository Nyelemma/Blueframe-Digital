import { Component, lazy, Suspense, type ReactNode } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./lib/theme";
import { landings } from "./lib/landings";
import Layout from "./components/Layout";
import Home from "./pages/Home";

const Work = lazy(() => import("./pages/Work"));
const Project = lazy(() => import("./pages/Project"));
const Services = lazy(() => import("./pages/Services"));
const Service = lazy(() => import("./pages/Service"));
const SocialMedia = lazy(() => import("./pages/SocialMedia"));
const Landing = lazy(() => import("./pages/Landing"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return (
        <div className="mx-auto max-w-lg px-6 py-24">
          <h1 className="text-3xl font-semibold tracking-tight">Something went wrong.</h1>
          <p className="mt-3 text-slate-600">Refresh the page, or head back home.</p>
          <a href={import.meta.env.BASE_URL} className="mt-6 inline-flex font-semibold text-brand-deep">
            Go home
          </a>
        </div>
      );
    }
    return this.props.children;
  }
}

export function routerBasename() {
  const base = import.meta.env.BASE_URL || "/";
  if (base === "/") return undefined;
  return base.replace(/\/$/, "");
}

/** Routes shared by the browser app and the build-time prerenderer. */
export function AppRoutes() {
  return (
    <Boundary>
      <Suspense fallback={<div className="min-h-screen bg-paper dark:bg-night" />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="work" element={<Work />} />
            <Route path="work/:slug" element={<Project />} />
            <Route path="services" element={<Services />} />
            <Route path="services/social-media" element={<SocialMedia />} />
            <Route path="services/:slug" element={<Service />} />
            <Route path="social-media" element={<Navigate to="/services/social-media" replace />} />
            {landings.map((landing) => (
              <Route key={landing.slug} path={landing.slug} element={<Landing slug={landing.slug} />} />
            ))}
            <Route path="pricing" element={<Pricing />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </Boundary>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={routerBasename()}>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
}
