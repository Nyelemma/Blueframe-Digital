// Prerenders every route to static HTML after `vite build` + the SSR build.
// Crawlers (and visitors before JS loads) get the full page content, title,
// description, canonical and JSON-LD for each URL. The browser then hydrates it.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const CANONICAL_SITE = "https://www.blueframedigital.co.uk";

function resolveSiteUrl() {
  if (process.env.VERCEL) {
    const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
    if (host) return `https://${host}`.replace(/\/$/, "");
  }
  return (process.env.VITE_SITE_URL || readSiteUrl() || CANONICAL_SITE).replace(/\/$/, "");
}

function readSiteUrl() {
  try {
    const env = readFileSync(resolve(".env.production"), "utf8");
    const match = env.match(/^VITE_SITE_URL=(.+)$/m);
    return match?.[1]?.trim();
  } catch {
    return "";
  }
}

const site = resolveSiteUrl();
const serverDir = resolve("dist-ssr");
const { render, routes } = await import(pathToFileURL(resolve(serverDir, "entry-server.js")).href);

function escapeText(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

function escapeAttr(value) {
  return escapeText(value).replace(/"/g, "&quot;");
}

function pageUrl(path) {
  return path === "/" ? `${site}/` : `${site}${path}`;
}

function setMeta(html, selector, attr, value) {
  const pattern = new RegExp(`<meta ${selector} content="[^"]*"`);
  return html.replace(pattern, `<meta ${selector} ${attr}="${escapeAttr(value)}"`);
}

function apply(shell, appHtml, head) {
  const url = pageUrl(head.path);
  const image = `${site}/og.png`;
  let out = shell;
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(head.title)}</title>`);
  out = setMeta(out, 'name="description"', "content", head.description);
  out = setMeta(out, 'name="robots"', "content", head.noIndex ? "noindex, follow" : "index, follow, max-image-preview:large");
  out = out.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`);
  out = setMeta(out, 'property="og:title"', "content", head.title);
  out = setMeta(out, 'property="og:description"', "content", head.description);
  out = setMeta(out, 'property="og:url"', "content", url);
  out = setMeta(out, 'property="og:image"', "content", image);
  out = setMeta(out, 'name="twitter:title"', "content", head.title);
  out = setMeta(out, 'name="twitter:description"', "content", head.description);
  out = setMeta(out, 'name="twitter:image"', "content", image);
  const ld = JSON.stringify(head.jsonLd ?? {}).replace(/</g, "\\u003c");
  out = out.replace(
    /<script type="application\/ld\+json" id="bf-jsonld">[\s\S]*?<\/script>/,
    () => `<script type="application/ld+json" id="bf-jsonld">${ld}</script>`,
  );
  out = out.replace('<div id="root"></div>', () => `<div id="root">${appHtml}</div>`);
  return out;
}

const dist = resolve("dist");
const shell = readFileSync(resolve(dist, "index.html"), "utf8");

for (const path of routes) {
  const { html, head } = await render(path);
  if (!head) throw new Error(`No <Seo> rendered for ${path}`);
  if (head.noIndex) throw new Error(`${path} rendered as not found. Check the route and its data.`);
  const out = path === "/" ? "index.html" : `${path.slice(1)}/index.html`;
  const file = resolve(dist, out);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, apply(shell, html, { ...head, path }));
}

const missing = await render("/__not-found__");
writeFileSync(
  resolve(dist, "404.html"),
  apply(shell, missing.html, { ...missing.head, path: "/404", noIndex: true }),
);

const lastmod = new Date().toISOString().slice(0, 10);
function priority(path) {
  if (path === "/") return "1.0";
  if (path.startsWith("/work/")) return "0.6";
  if (path.startsWith("/services/") || /^\/(web-design|websites-for)/.test(path)) return "0.9";
  return "0.8";
}

const urls = routes
  .map(
    (path) => `  <url>
    <loc>${pageUrl(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${priority(path)}</priority>
  </url>`,
  )
  .join("\n");

writeFileSync(
  resolve(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`,
);

writeFileSync(
  resolve(dist, "robots.txt"),
  `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${site}/sitemap.xml
`,
);

rmSync(serverDir, { recursive: true, force: true });
console.log(`Prerendered ${routes.length} routes with full HTML for ${site}`);
