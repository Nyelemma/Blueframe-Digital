import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const stripModuleAttrs: Plugin = {
  name: "strip-module-attrs",
  apply: "build",
  enforce: "post",
  closeBundle() {
    const file = resolve(process.cwd(), "dist", "index.html");
    if (!existsSync(file)) return;
    const original = readFileSync(file, "utf-8");

    // Pull the inlined bundle script out of <head> and re-insert it
    // immediately before </body>. Stripping `type="module"` turns it into
    // a sync script, and inline scripts in <head> run before #root exists.
    const bundleScriptRe =
      /<script\b[^>]*\btype="module"[^>]*>[\s\S]*?<\/script>/i;
    let html = original;
    const match = html.match(bundleScriptRe);
    let bundleScript = match ? match[0] : "";
    if (match) html = html.replace(bundleScriptRe, "");

    // Strip module/crossorigin attrs on whichever script remains.
    const normalised = (bundleScript || "")
      .replace(/<script\s+type="module"\s+crossorigin>/g, "<script>")
      .replace(/<script\s+type="module">/g, "<script>")
      .replace(/\scrossorigin\b/g, "");

    if (normalised) {
      html = html.replace(/<\/body>/i, `${normalised}\n  </body>`);
    }

    html = html
      .replace(/<script\s+type="module"\s+crossorigin>/g, "<script>")
      .replace(/<script\s+type="module">/g, "<script>")
      .replace(/\scrossorigin\b/g, "");

    if (html !== original) writeFileSync(file, html);
  },
};

export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss(), viteSingleFile(), stripModuleAttrs],
  build: {
    target: "es2018",
    cssCodeSplit: false,
    assetsInlineLimit: 100_000_000,
    rollupOptions: {
      output: {
        format: "iife",
        inlineDynamicImports: true,
      },
    },
  },
});
