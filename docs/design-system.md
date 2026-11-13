# Design System — "Vintage Cinematica"

Source: Canva template **"About Me Website in Brown Light Yellow Vintage Cinematica Style"**
(`DAHaFiVir_4`, https://canva.link/kkowa6iy3fsv7o4).

Tokens live in [`src/app/globals.css`](../src/app/globals.css). Fonts are loaded in
[`src/app/layout.tsx`](../src/app/layout.tsx). This file explains how to use them.

> **Verified against the Canva element data.** The three brand colors (`#030405`, `#f9ffd7`,
> `#ca8643`) and all font sizes, weights, line heights and letter spacing come straight from
> the design. Canva only exposes its fonts as internal IDs (`YAFcfkn8yug` for the display serif,
> `YAFcfr0ZwUA` for the sans), so **Cormorant Garamond** and **DM Sans** are the closest Google
> Fonts matches. `espresso`, `sage` and the in-between surface shades are derived tokens, not
> colors taken from Canva.

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
| Display headline     | Serif, light       | 106.7px  | 1.0         | -0.05em        |
| Pull quote           | Serif, light italic| 42.7px   | 1.1         | 0              |
| Item title           | Sans, bold         | 28px     | 1.2         | 0              |
| Lead / body          | Sans, regular      | 24px     | 1.3         | 0              |
| Item body            | Sans, regular      | 21.3px   | 1.2         | 0              |
| Button / nav         | Sans, bold         | 21.3px   | 1.4         | -0.02em        |
| Footer contact       | Sans, bold label + regular value | 18.7px | 1.2 | 0       |

### Tailwind mapping (scaled down for real screens)

| Role            | Class                                                                 |
| --------------- | --------------------------------------------------------------------- |
| Display / h1/h2 | `font-display font-light text-6xl md:text-8xl leading-none tracking-tighter` |
| Pull quote      | `font-display font-light italic text-3xl md:text-4xl leading-tight`  |
| Item title      | `text-xl md:text-2xl font-bold leading-tight`                         |
| Lead / body     | `text-lg md:text-xl leading-snug`                                     |
| Item body       | `text-base md:text-lg leading-snug`                                   |
| Button / nav    | `text-base font-bold tracking-tight`                                  |
| Secondary       | `text-sm text-muted-foreground`                                       |
| Helper          | `text-xs` (dates, badges only)                                        |

- Headlines are **light, huge and tightly tracked** (`tracking-tighter` = -0.05em), never bold.
  Every section opens with one. The contrast between the thin serif and the **bold** sans-serif
  titles is what makes the style.
- Headlines can break over several lines on purpose ("Let's create / something / worth reading").
- The minimums from `AGENTS.md` still apply (`text-4xl` page titles, `text-base` body).

## 4. Layout

- Page container: `mx-auto max-w-6xl p-8` (unchanged).
- **Full-bleed bands:** each major section is a full-width band with its own background.
  Put the `max-w-6xl` container inside the band.
  ```tsx
  <section className="bg-caramel text-ink">
    <div className="mx-auto max-w-6xl px-8 py-24">…</div>
  </section>
  ```
- Band rhythm (exact order in the template):
  1. **Hero:** ink background with a photo at 70% opacity, cream text, floating cream pill nav
  2. **About:** cream, with a full-width photo strip at the bottom
  3. **Services:** ink
  4. **Projects:** caramel, 3 columns
  5. **Testimonials:** ink, 2 columns of square photo + quote
  6. **Contact:** ink with a photo at 50% opacity, cream form card on the right, a contact row as the footer
- Each band is a full screen tall in Canva (768px at a 1366px width). On the web, use `min-h-screen` for the hero and `py-24` for the others.
- Side margin is ~7% (100px of 1366). `max-w-6xl px-8` matches it closely.
- Two-column sections split exactly in half: the serif title on the left and the content starting at the midpoint (`grid md:grid-cols-2 gap-8`).
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
