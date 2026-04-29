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
    const stripped = original
      .replace(/<script\s+type="module"\s+crossorigin>/g, "<script>")
      .replace(/<script\s+type="module">/g, "<script>")
      .replace(/\scrossorigin\b/g, "");
    if (stripped !== original) writeFileSync(file, stripped);
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
