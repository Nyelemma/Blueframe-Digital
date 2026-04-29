# Blueframe Digital — Brand guidelines

## Positioning

**Blueframe Digital** builds **premium websites for local businesses, starting from £99**. The promise: agency-quality design and performance, without agency-scale invoicing.

**One-liner:** *Premium Websites. Half the Cost.*

**Tone of voice:** confident, plain, helpful. Short sentences. No buzzwords. Focus on **value, speed, and clarity** — never cleverness.

**Audience:** local trades, salons, gyms, coaches, clubs, independent shops — anyone who needs a credible site without paying for a long agency cycle.

---

## Logo

- **Lockup:** stylised "B" mark sitting inside an open frame (the "Blueframe" idea), with the **BLUEFRAME** wordmark beneath it and **DIGITAL** as a smaller subtext, separated by a thin blue rule.
- **Backing plate:** the lockup is designed for a **dark navy / black background** — the "FRAME" and "DIGITAL" text are dark navy and intentionally invisible on light surfaces. Always present the logo on a dark plate, regardless of the surrounding theme.
- **Clear space:** at least the height of the "B" stem on every side.
- **Don't:** recolour the mark, place the logo on busy photography, or use it on a light background without the dark backing plate.
- **Files:** raster master at `public/brand/blueframe-logo.png`; favicon at `public/favicon.svg` (a simplified frame-within-frame in brand gradient).

---

## Colour palette

| Token         | Value                                       | Use                                          |
| ------------- | ------------------------------------------- | -------------------------------------------- |
| Brand From    | `#1e73ff`                                   | Gradient start, accent text                  |
| Brand To      | `#0052cc`                                   | Gradient end, primary buttons                |
| Brand Gradient| `linear-gradient(135deg, #1e73ff, #0052cc)` | CTAs, logo, highlight bands                  |
| Navy          | `#0f172a`                                   | Headlines, dark surfaces                     |
| Navy Soft     | `#111c33`                                   | Card surfaces in dark mode                   |
| Surface       | `#f8fafc`                                   | Light mode page background                   |
| Surface Dark  | `#0b1220`                                   | Dark mode page background                    |

Use the **gradient sparingly** — primary CTA, hero accent text, badges, and one feature CTA panel — so it stays a signal, not noise.

---

## Typography

- **Family:** [Inter](https://rsms.me/inter/) for everything (headings, body, UI). Loaded via system fallbacks if not present.
- **Scale:** body 16–18px; section titles `text-3xl → 4xl`; hero `text-4xl → 6xl`. Tight tracking on display sizes (`tracking-tight`).
- **Weights:** 600 for headings and CTAs, 500 for nav and labels, 400 for body.

---

## UI principles

- **2xl rounded corners** on cards and primary buttons; pill (`rounded-full`) on small chips.
- **Soft, layered shadows** (`shadow-soft`, `shadow-lift`) — never hard or coloured.
- **Whitespace first** — sections use `py-20 md:py-28`; container `max-w-6xl px-6`.
- **Hover** lifts elements `-translate-y-0.5` to `-translate-y-1` and grows the shadow.
- **Motion**: subtle `whileInView` fade/slide; respect `prefers-reduced-motion`.

---

## Dark mode

- Toggleable from the navbar; preference is saved to `localStorage` under `theme`.
- Pre-applied before paint via an inline script in `index.html` so there is **no flash** on load.
- Toggle plays a short white/black flicker overlay (~420ms) for a satisfying transition. Disabled when the user prefers reduced motion.

---

## Voice samples

- Hero subhead: *"We build high-performing websites for local businesses, starting from just £99."*
- Pricing footnote: *"Hosting and domain billed separately at cost. No hidden fees, ever."*
- Final CTA: *"Get Your Website Live This Week — Simple. Affordable. Effective."*

---

## Tech stack

- **Vite + React + TypeScript** single-page app.
- **Tailwind CSS v4** (CSS-first config in `src/index.css`).
- **Framer Motion** for section reveals, theme toggle icon swap, and the flicker overlay.
- **No backend yet** — CTAs use anchor scrolls and a `mailto:` for the final form.
