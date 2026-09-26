import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

function siteUrl() {
  if (process.env.VERCEL) {
    const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
    if (host) return `https://${host}`.replace(/\/$/, "");
  }
  return (
    process.env.VITE_SITE_URL || "https://nyelemma.github.io/Blueframe-Digital"
  ).replace(/\/$/, "");
}

export default defineConfig(({ command, isPreview }) => {
  // GitHub Pages is served from /Blueframe-Digital/. Vercel and local dev serve from /.
  const onVercel = Boolean(process.env.VERCEL);
  const localDev = command === "serve" && !isPreview;

  return {
    base: onVercel || localDev ? "/" : "/Blueframe-Digital/",
    define: {
      "import.meta.env.VITE_SITE_URL": JSON.stringify(siteUrl()),
    },
    plugins: [react(), tailwindcss()],
    build: {
      target: "es2020",
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes("node_modules/framer-motion")) return "motion";
            if (
              id.includes("node_modules/react-dom") ||
              id.includes("node_modules/react/") ||
              id.includes("node_modules/react-router")
            ) {
              return "vendor";
            }
          },
        },
      },
    },
  };
});
