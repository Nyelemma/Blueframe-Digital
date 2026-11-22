# SEO keyword map

Each page targets one keyword cluster so pages don't compete with each other.
Keywords were chosen from Google UK autocomplete (real searches), not paid volume data.
Check volumes in Google Search Console once the pages have been live for a few weeks.

| Page | Primary keyword | Supporting / long-tail | Type |
| --- | --- | --- | --- |
| `/` | web design Morecambe & Lancaster | affordable web design, small business websites | Local head |
| `/services/web-design` | affordable website design UK | website design for small business UK, cheap website design UK, is a £199 website any good | National head (high KD) |
| `/services/online-stores` | Shopify alternative UK | cheapest ecommerce website builder UK, online store for small business | Long-tail |
| `/services/custom-websites` | custom website development | booking system website, membership website for clubs | Long-tail |
| `/services/social-media` | social media management for small business UK | social media management cost, what is included | National mid |
| `/pricing` | website design prices UK | website prices from £199 | National mid |
| `/web-design-morecambe` | website design Morecambe | web designer Morecambe, Morecambe web design | Local, unique, low competition |
| `/web-design-lancaster` | web design Lancaster | website design Lancaster, best web design Lancaster | Local mid |
| `/web-design-lancashire` | web design Lancashire | website design Lancashire, web design agency Lancashire | Regional head |
| `/websites-for-tradesmen` | website design for tradesmen | website for local tradesmen, plumber / gas engineer websites | Long-tail |
| `/websites-for-sports-clubs` | football club website | sports club website design, grassroots football club website | Long-tail |
| `/websites-for-coaches` | website for personal trainers | coaching website, football coaching website | Long-tail |
| `/how-much-does-a-website-cost-uk` | how much does a website cost UK | how much does a basic website cost UK, website cost per month UK, is Wix cheaper | Informational head (high KD) |
| `/work/*` | [client] website design | portfolio / case studies | Brand + long-tail |

## Technical SEO in place

- Every route is prerendered to full HTML at build time (`src/entry-server.tsx` + `scripts/prerender-routes.mjs`), then hydrated.
- Canonical URLs always point at `https://www.blueframedigital.co.uk`, including the GitHub Pages copy.
- `blueframe-digital.vercel.app` sends `X-Robots-Tag: noindex`.
- Unknown URLs return a real 404 (no catch-all rewrite).
- JSON-LD: Organization/ProfessionalService with area served, Service with prices, FAQPage, Article (guide), BreadcrumbList.
- `sitemap.xml` (with lastmod) and `robots.txt` are generated on every build.

## Adding a new local or industry page

Add an entry to `src/content/landings.json`. The route, sitemap, footer link and internal links are created automatically.

## Off-site actions (not code)

1. Create or claim a **Google Business Profile**. This drives the local map pack for "web design near me" and is the biggest local ranking factor.
2. Submit `https://www.blueframedigital.co.uk/sitemap.xml` in **Google Search Console** and **Bing Webmaster Tools**.
3. Ask each client for a **review** on the Google Business Profile, and for a "Website by Blueframe Digital" footer **link** on their site.
4. List the business in local directories (Yell, Thomson Local, FreeIndex, Bark), using the same name and phone number everywhere.
