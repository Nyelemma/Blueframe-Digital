import { useEffect } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FlickerOverlay from "./FlickerOverlay";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (location.pathname.length > 1 && location.pathname.endsWith("/")) {
    return <Navigate to={location.pathname.slice(0, -1) + location.search} replace />;
  }

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[90] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="pt-[calc(5.25rem+env(safe-area-inset-top))] sm:pt-32">
        <Outlet />
      </main>
      <Footer />
      <FlickerOverlay />
    </div>
  );
}
