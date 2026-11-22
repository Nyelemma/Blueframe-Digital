import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/inter/wght.css";
import App from "./App";
import "./index.css";

const container = document.getElementById("root");
if (!container) throw new Error("Root container #root not found");

const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Pages are prerendered at build time so crawlers get real HTML. Hydrate that
// markup when it's there; fall back to a client render (e.g. `npm run dev`).
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
