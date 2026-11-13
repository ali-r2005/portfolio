# Design System — "Vintage Cinematica"

Source: Canva template **"About Me Website in Brown Light Yellow Vintage Cinematica Style"**
(`DAHaFiVir_4`, https://canva.link/kkowa6iy3fsv7o4).

Tokens live in [`src/app/globals.css`](../src/app/globals.css). Fonts are loaded in
[`src/app/layout.tsx`](../src/app/layout.tsx). This file explains how to use them.

> **Verified against the Canva element data.** The three brand colors (`#030405`, `#f9ffd7`,
> `#ca8643`) and all font sizes, weights, line heights and letter spacing come straight from
> the design. Canva only exposes its fonts as internal IDs (`YAFcfkn8yug` for the display serif,
> `YAFcfr0ZwUA` for the sans), so the Google Fonts below were **picked by pixel-matching**:
> each candidate was rendered with the exact Canva text, size and spacing and scored against
> the Canva export (overlap of the glyph pixels).
> `espresso`, `sage` and the in-between surface shades are derived tokens, not colors taken from Canva.
>
> **Run `npm run test:design`** (dev server running) to check the home page against the
> template. See [§8 Design match test](#8-design-match-test).

| Role | Font | Why |
| ---- | ---- | --- |
| Display serif | **Crimson Pro**, weight **250** (variable) | Best overlap 0.39 (Cormorant Garamond 300: 0.19); same text width as Canva to the pixel |
| Sans | **Work Sans** 400 / 700 | Best body overlap 0.59; identical line breaks to Canva at 24px / 780px |

---

## 1. Mood

Warm, editorial, cinematic. The page reads like a film poster: big, thin serif headlines,
plenty of empty space, and full-width sections that alternate between **cream**, **ink
black** and **caramel**. Photos are warm and slightly desaturated (coffee, desks, portraits).

## 2. Color

### Brand palette (fixed, same in both themes)

| Token       | Hex       | Tailwind class               | Role                                     |
| ----------- | --------- | ---------------------------- | ---------------------------------------- |
| `--cream`   | `#f9ffd7` | `bg-cream` / `text-cream`    | Light sections, text on dark, input fill |
| `--ink`     | `#030405` | `bg-ink` / `text-ink`        | Dark sections, text on light             |
| `--caramel` | `#ca8643` | `bg-caramel` / `text-caramel`| Highlight band, primary buttons, accents |
| `--espresso`| `#3a2a18` | `bg-espresso`                | Photo overlays, hero tint, deep text     |
| `--sage`    | `#a7ac91` | `text-sage`                  | Muted text on dark                       |

### Semantic tokens (switch with theme)

Always use these first. Only reach for the brand palette for full-bleed section bands.

| Semantic                 | Dark (default, `.dark`) | Light (`:root`) |
| ------------------------ | ----------------------- | --------------- |
| `background`             | `#030405` ink           | `#f9ffd7` cream |
| `foreground`             | `#f9ffd7` cream         | `#030405` ink   |
| `card`                   | `#12120e`               | `#f1f6cc`       |
| `muted` / `secondary`    | `#1c1c16`               | `#e4eac5` / `#ebf0c4` |
| `muted-foreground`       | `#a7ac91` sage          | `#5c5f4f`       |
| `text-secondary`         | `#d9ddbb`               | `#3a2a18`       |
| `primary` / `accent`     | `#ca8643` caramel       | `#ca8643` caramel |
| `primary-foreground`     | `#030405` ink           | `#030405` ink   |
| `border`                 | `#2a2b22`               | `#d6dbb4`       |
| `ring`                   | caramel                 | caramel         |

**Rules**
- Caramel is the only accent color. Don't add blues, purples or other brand colors.
- Text on caramel is always **ink**, never white.
- Never use pure white (`#fff`). "White" in this system is cream.

## 3. Typography

### Exact values from Canva (1366px-wide artboard)

| Role                 | Font / weight      | Size     | Line height | Letter spacing |
| -------------------- | ------------------ | -------- | ----------- | -------------- |
| Display headline     | Serif, light (250) | 106.7px  | 1.0         | -0.05em        |
| Pull quote           | Serif, light italic| 42.7px   | 1.1         | 0              |
| Item title           | Sans, bold         | 28px     | 1.2         | 0              |
| Lead / body          | Sans, regular      | 24px     | 1.3         | 0              |
| Item body            | Sans, regular      | 21.3px   | 1.2         | 0              |
| Button / nav         | Sans, bold         | 21.3px   | 1.4         | -0.02em        |
| Footer contact       | Sans, bold label + regular value | 18.7px | 1.2 | 0       |

### Size tokens (`@theme` in globals.css)

Each token is **fluid**: it equals the Canva size exactly at a 1366px viewport (and above),
and scales down with the viewport to a readable minimum. Line height, letter spacing and
(for the serif) weight are baked in, so one class is enough.

| Class          | At 1366px | Min (phones) | Use                                   |
| -------------- | --------- | ------------ | ------------------------------------- |
| `text-display` | 106.67px, lh 1, -0.05em, wght 250 | 52px | Section headlines, with `font-display` |
| `text-quote`   | 42.67px, lh 1.1, wght 250 | 28px | Pull quote, with `font-display italic` |
| `text-title`   | 28px, lh 1.2 | 20px | Item titles, with `font-bold`          |
| `text-lead`    | 24px, lh 1.3 | 18px | Lead paragraphs / body                 |
| `text-copy`    | 21.33px, lh 1.2 | 16px | Item copy, form fields               |
| `text-button`  | 21.33px, lh 1.4, -0.02em | 16px | Buttons and nav links, with `font-bold` |
| `text-caption` | 18.67px, lh 1.2 | 15px | Footer row, meta lines, labels       |
| `text-sm` / `text-xs` | — | — | Secondary text / dates & badges (unchanged) |

Usage: `<h2 className="font-display text-display">` · `<h3 className="text-title font-bold">` ·
`<p className="text-lead">`. Don't add `font-light` to display text (the token sets weight 250).

> `cn()` in `src/lib/utils.ts` is configured to know these size names. If you add a new
> `--text-*` token, add it there too, or tailwind-merge will drop it next to a `text-<color>` class.

- Headlines are **light, huge and tightly tracked** (`tracking-tighter` = -0.05em), never bold.
  Every section opens with one. The contrast between the thin serif and the **bold** sans-serif
  titles is what makes the style.
- Headlines can break over several lines on purpose ("Let's create / something / worth reading").
- The minimums from `AGENTS.md` still apply (`text-4xl` page titles, `text-base` body).

## 4. Layout

- Regular pages (`src/app/*/page.tsx`): `mx-auto max-w-6xl p-8` (unchanged, per AGENTS.md).
- **Template bands (home page):** full-width bands using `cine-container`, a 1366px-max box with
  the Canva 100px gutter (fluid). This is the only place `max-w-6xl` is replaced, because the
  template's grid is 1366 wide.
  ```tsx
  <section className="bg-caramel text-ink md:min-h-[var(--cine-band)]">
    <div className="cine-container py-[var(--cine-section-y)]">…</div>
  </section>
  ```
- Layout variables (`:root` in globals.css), all exact at 1366px:

  | Variable | Canva value | Use |
  | -------- | ----------- | --- |
  | `--cine-gutter` | 100px | side padding (inside `cine-container`) |
  | `--cine-section-y` | 76.8px | space above each band's headline |
  | `--cine-band` | 768px | band min-height |
  | `--cine-nav-top` / `--cine-nav-h` / `--cine-nav-w` | 18.67 / 58.13 / 1078.6px | floating pill nav |
  | `--cine-nav-offset` | 76.8px | nav total height; hero uses `-mt-[var(--cine-nav-offset)]` |
  | `--cine-cta-w` | 382px | large cream CTA width (height = `--cine-nav-h`) |
  | `--cine-col` | 544px | text column width (hero lead, contact columns) |
- Band rhythm (exact order in the template):
  1. **Hero:** ink background with a photo at 70% opacity, cream text, floating cream pill nav
  2. **About:** cream, with a full-width photo strip at the bottom
  3. **Services:** ink
  4. **Projects:** caramel, 3 columns
  5. **Testimonials:** ink, 2 columns of square photo + quote
  6. **Contact:** ink with a photo at 50% opacity, cream form card on the right, a contact row as the footer
- Each band is 768px tall at 1366px (`md:min-h-[var(--cine-band)]`); the hero is at least a full screen.
- Two-column bands: serif title on the left, content column starting at x=688 (services /
  experience) or x=509 (about). See the comments at the top of each `src/components/home/*` file.
- Section titles sit at the top of the band, and buttons sit at the bottom edge of the content.
- Grids: `gap-6` or `gap-8`.

## 5. Components

### Buttons
In the template, buttons are only ever cream or ink. Caramel is a section background, not a button color.
- **On ink or photo (cream pill):** `rounded-full bg-cream px-8 py-4 text-base font-bold tracking-tight text-ink hover:bg-cream/90`
  (the large CTA is 382×58px)
- **On caramel or cream (ink pill):** `rounded-full bg-ink px-6 py-2.5 text-base font-bold tracking-tight text-cream`
  (the small "View project" is 233×40px)
- **Form submit:** a full-width caramel pill with ink text.
- Buttons are always **pill-shaped** (`rounded-full`) and have no border.

### Navigation
- A cream pill floating at the top center, ~80% of the page width and 58px tall:
  `rounded-full bg-cream px-8 py-4 text-base font-bold text-ink`, with links centered and spaced `gap-6`.

### Service / project items
- These aren't boxed cards. Each one is a **bold sans-serif title** plus a short regular line of text, with
  no background or border. Stack them vertically with `gap-12` (services) or lay them out in a
  3-column grid (projects), with an ink pill at the bottom.

### Testimonials
- A **square** photo (`aspect-square rounded-none`, 213px) next to a quote (`text-lg`),
  then the name and role in bold (`text-xl font-bold`) on two lines.

### Pull quote
- A light italic serif line across the full width, e.g. *"Write with purpose, edit with precision, deliver with personality."*

### Forms
- Inputs: `bg-input border border-border rounded-md px-4 py-3 text-base`. On a photo band, use a cream fill with ink text.
- Labels above the field: `text-sm text-muted-foreground`.
- Submit: full-width caramel pill.

### Imagery
- Warm, slightly desaturated photos (coffee, desks, writing, portraits).
- On photo bands, put the photo on an ink background and lower its opacity: `opacity-70` for the
  hero, `opacity-50` for contact. Don't use colored overlays.
- Photos have sharp corners (`rounded-none`). Only buttons and the nav are rounded.
- Use `object-cover` for decorative bands and `object-contain` for project screenshots.

## 6. Icons
Unchanged: `@heroicons/react/24/outline` only, `h-4 w-4` minimum, colored `text-primary` or `text-muted-foreground`.

## 7. Do / Don't

| Do                                          | Don't                                   |
| ------------------------------------------- | --------------------------------------- |
| Thin serif headlines, bold sans-serif titles| Bold serif headlines                    |
| Sharp-cornered photos, pill buttons         | Rounded photo cards                     |
| Alternate cream / ink / caramel bands       | Gradients, glassmorphism, neon          |
| Pill buttons                                | Square or sharp buttons                 |
| Cream as "white"                            | `#ffffff` or hardcoded hex in components |
| Ink text on caramel                         | White text on caramel                   |

## 8. Design match test

`npm run test:design` opens the home page in headless Chrome at the Canva artboard size
(1366×768), measures every element tagged `data-cine="…"` and compares it with the Canva values
(font family, size, line height, letter spacing, weight, position, size). It prints a pass/fail
table, exits non-zero on any failure, and writes `.design-test/report.html`, which puts each
section next to the matching Canva section (reference image:
`docs/design-reference/template-1366.jpg`).

- Needs the dev server running (`npm run dev`) and `google-chrome`. No npm dependencies.
- `npm run test:design -- --url http://localhost:3001/` to test another server.
- `npm run test:design -- --mobile` takes a 390×844 full-page screenshot and fails if the page scrolls sideways.
- Tolerances: ±0.75px for font metrics, ±6px for positions and sizes.
- To check a new element, add `data-cine="name"` to it and an entry to `SPEC` in
  `scripts/design-match-test.mjs`.

### Images

The photos in `public/home/` were exported from the Canva template (a scratch copy with the text
removed, so the photos are clean). They're Canva stock images used under your Canva license as part
of the design; replace them with your own photos whenever you like (same file names, or update
the paths in `hero-section.tsx`, `about-section.tsx` and `contact-section.tsx`).
