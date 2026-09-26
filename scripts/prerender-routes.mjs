import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import projects from "../src/content/projects.json" with { type: "json" };

function resolveSiteUrl() {
  if (process.env.VERCEL) {
    const host = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
    if (host) return `https://${host}`.replace(/\/$/, "");
  }
  return (
    process.env.VITE_SITE_URL ||
    readSiteUrl() ||
    "https://nyelemma.github.io/Blueframe-Digital"
  ).replace(/\/$/, "");
}

const site = resolveSiteUrl();

const description =
  "Professional websites for small businesses from £199. Blueframe Digital creates modern, fast and SEO-ready websites designed to help local businesses grow.";

const pages = [
  {
    path: "/",
    out: "index.html",
    title: "Blueframe Digital | Web Design for Small Businesses",
    description,
  },
  {
    path: "/work",
    out: "work/index.html",
    title: "Our Work | Blueframe Digital",
    description:
      "Websites designed by Blueframe Digital for trades, clubs, coaches and local businesses across Lancashire, Morecambe and Lancaster.",
  },
  {
    path: "/social-media",
    out: "social-media/index.html",
    title: "Social Media Management Lancashire | Blueframe Digital",
    description:
      "Social media management for small businesses from £99 a month. Blueframe Digital plans, writes and posts so Lancashire businesses stay active online.",
  },
  {
    path: "/pricing",
    out: "pricing/index.html",
    title: "Website Design Pricing | Blueframe Digital",
    description:
      "Websites from £199 and social media management from £99 a month. Clear starting prices for small businesses in Lancaster, Morecambe and Lancashire.",
  },
  {
    path: "/about",
    out: "about/index.html",
    title: "About | Web Design Lancaster & Morecambe | Blueframe Digital",
    description:
      "Blueframe Digital builds professional websites for small businesses in Lancaster, Morecambe and Lancashire — studio quality, without the agency price tag.",
  },
  {
    path: "/contact",
    out: "contact/index.html",
    title: "Contact | Blueframe Digital",
    description:
      "Start a website or social media project with Blueframe Digital. We work with small and local businesses across Morecambe Bay and Lancashire.",
  },
  ...projects.map((project) => ({
    path: `/work/${project.slug}`,
    out: `work/${project.slug}/index.html`,
    title: `${project.name} | Work by Blueframe Digital`,
    description: project.summary,
  })),
];

function readSiteUrl() {
  try {
    const env = readFileSync(resolve(".env.production"), "utf8");
    const match = env.match(/^VITE_SITE_URL=(.+)$/m);
    return match?.[1]?.trim();
  } catch {
    return "";
  }
}

function escapeText(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;");
}

function escapeAttr(value) {
  return escapeText(value).replace(/"/g, "&quot;");
}

function pageUrl(path) {
  return path === "/" ? `${site}/` : `${site}${path}`;
}

function jsonLd(page) {
  const crumbs = [{ name: "Home", item: `${site}/` }];
  if (page.path !== "/") {
    const parts = page.path.split("/").filter(Boolean);
    let current = "";
    parts.forEach((part, index) => {
      current += `/${part}`;
      const name =
        index === parts.length - 1
          ? page.title.split("|")[0].trim()
          : part === "work"
            ? "Our Work"
            : part;
      crumbs.push({ name, item: `${site}${current}` });
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        name: "Blueframe Digital",
        url: `${site}/`,
        email: "hello@blueframe.digital",
        areaServed: ["Lancaster", "Morecambe", "Morecambe Bay", "Lancashire", "United Kingdom"],
        address: {
          "@type": "PostalAddress",
          addressRegion: "Lancashire",
          addressCountry: "GB",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.item,
        })),
      },
    ],
  };
}

function apply(html, page, robots = "index, follow") {
  const url = pageUrl(page.path);
  const image = `${site}/og.png`;
  let out = html;
  out = out.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeText(page.title)}</title>`);
  out = out.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${escapeAttr(page.description)}"`,
  );
  out = out.replace(
    /<meta name="robots" content="[^"]*"/,
    `<meta name="robots" content="${robots}"`,
  );
  out = out.replace(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`);
  out = out.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${escapeAttr(page.title)}"`,
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${escapeAttr(page.description)}"`,
  );
  out = out.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`);
  out = out.replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${image}"`);
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${escapeAttr(page.title)}"`,
  );
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${escapeAttr(page.description)}"`,
  );
  out = out.replace(
    /<meta name="twitter:image" content="[^"]*"/,
    `<meta name="twitter:image" content="${image}"`,
  );
  const ld = JSON.stringify(jsonLd(page));
  out = out.replace(
    /<script type="application\/ld\+json" id="bf-jsonld">[\s\S]*?<\/script>/,
    `<script type="application/ld+json" id="bf-jsonld">${ld}</script>`,
  );
  return out;
}

const dist = resolve("dist");
const shell = readFileSync(resolve(dist, "index.html"), "utf8");

for (const page of pages) {
  const file = resolve(dist, page.out);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, apply(shell, page));
}

writeFileSync(
  resolve(dist, "404.html"),
  apply(
    shell,
    {
      path: "/404",
      title: "Page not found | Blueframe Digital",
      description: "That page isn't on the Blueframe Digital website.",
    },
    "noindex, follow",
  ),
);

const urls = pages
  .map(
    (page) => `  <url>
    <loc>${pageUrl(page.path)}</loc>
    <changefreq>${page.path === "/" ? "weekly" : "monthly"}</changefreq>
    <priority>${page.path === "/" ? "1.0" : page.path.startsWith("/work/") ? "0.6" : "0.8"}</priority>
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

Sitemap: ${site}/sitemap.xml
`,
);

console.log(`Prerendered ${pages.length} routes for ${site}`);
