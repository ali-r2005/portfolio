---
name: portfolio-design-system
description: Apply Ali Rami's portfolio "Vintage Cinematica" design system (cream / ink / caramel palette, Crimson Pro 250 headlines, Work Sans body, full-bleed section bands, pill buttons) when creating or restyling any page, section or component in this Next.js portfolio. Use whenever the task touches UI in src/app or src/components, mentions the design system, the Canva template, theme, colors, fonts or "make it match the design", even if the user doesn't name this skill.
---

# Portfolio Design System — Vintage Cinematica

The full reference is in `docs/design-system.md`. Read it before writing UI. Tokens live in
`src/app/globals.css` and fonts in `src/app/layout.tsx`. This skill is the short checklist.

## Before writing code
1. Read `docs/design-system.md`. It wins over anything here if the two disagree.
2. Look for an existing component in `src/components/ui/` and reuse it before writing a new one.
3. Follow `AGENTS.md`: the page container, minimum sizes and Heroicons-only rules still apply.

## Core rules
- **Colors:** use semantic tokens (`bg-background`, `text-foreground`, `bg-card`,
  `text-muted-foreground`, `text-text-secondary`, `bg-primary`, `border-border`). Use the brand
  tokens `bg-cream`, `bg-ink`, `bg-caramel`, `bg-espresso` and `text-sage` only for full-bleed
  section bands and pills. Never hardcode hex values or use `#fff`.
- **Caramel is the only accent.** Text on caramel is always `text-ink`.
- **Size tokens, not raw Tailwind sizes:** they hit the exact Canva values at 1366px and scale
  down fluidly. `text-display` (with `font-display`), `text-quote`, `text-title`, `text-lead`,
  `text-copy`, `text-button`, `text-caption`. Never add `font-light` to display text (the token sets weight 250).
- **Headlines:** `font-display text-display`.
  Every section opens with one. Never bold.
- **Item titles:** `text-title font-bold`. **Lead/body:** `text-lead`. **Item copy:** `text-copy`.
- **Buttons:** always `rounded-full` and borderless. Cream pill with ink text on ink or photo bands,
  ink pill with cream text on caramel or cream bands. Form submit is a caramel pill. Text is `font-bold tracking-tight`.
- **Nav:** a floating cream pill at the top center, with bold ink links.
- **Layout:** full-width `<section>` bands (`md:min-h-[var(--cine-band)]`) wrapping
  `cine-container py-[var(--cine-section-y)]` (1366 max, 100px fluid gutter). Regular pages keep
  `mx-auto max-w-6xl p-8`. Layout variables (`--cine-*`) are listed in the docs. The template's
  order is: hero (photo) → about (cream) → services (ink) → projects (caramel) → testimonials (ink) → contact (photo).
  Two-column sections split in half, with the serif title on the left.
- **Items are not boxed cards:** use a bold title plus a short line of text, with no background or border.
- **Photos:** sharp corners (`rounded-none`), placed on an ink background with `opacity-70` (hero)
  or `opacity-50` (contact). No colored overlays.

## Section snippet
```tsx
<section className="bg-caramel text-ink md:min-h-[var(--cine-band)]">
  <div className="cine-container py-[var(--cine-section-y)]">
    <h2 className="font-display text-display">A few things I'm proud of</h2>
    <p className="mt-[max(1.5rem,4.284vw)] text-lead">Short supporting line.</p>
    <div className="mt-12 grid gap-8 md:grid-cols-3">{/* cards */}</div>
  </div>
</section>
```

## Before finishing
- With the dev server running, run `npm run test:design` (all checks must pass) and
  `npm run test:design -- --mobile` (no horizontal overflow). Open `.design-test/report.html`
  to compare each section with the Canva template. Tag new template-based elements with
  `data-cine` and add them to `SPEC` in `scripts/design-match-test.mjs`.
- Check both themes: `.dark` (the default) and light.
- Look for: hardcoded colors, bold serif, square buttons, rounded photos, boxed cards, white text on caramel, `text-xs` body text.
- If you added a new pattern, document it in `docs/design-system.md`.
