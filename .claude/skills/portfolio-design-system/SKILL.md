---
name: portfolio-design-system
description: Apply Ali Rami's portfolio "Vintage Cinematica" design system (cream / ink / caramel palette, light Cormorant Garamond headlines, DM Sans body, full-bleed section bands, pill buttons) when creating or restyling any page, section or component in this Next.js portfolio. Use whenever the task touches UI in src/app or src/components, mentions the design system, the Canva template, theme, colors, fonts or "make it match the design", even if the user doesn't name this skill.
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
- **Headlines (exact from Canva):** `font-display font-light text-6xl md:text-8xl leading-none tracking-tighter`.
  Every section opens with one. Never bold.
- **Item titles:** sans `text-xl md:text-2xl font-bold`. **Body:** `text-lg md:text-xl leading-snug`.
- **Buttons:** always `rounded-full` and borderless. Cream pill with ink text on ink or photo bands,
  ink pill with cream text on caramel or cream bands. Form submit is a caramel pill. Text is `font-bold tracking-tight`.
- **Nav:** a floating cream pill at the top center, with bold ink links.
- **Layout:** full-width `<section>` bands wrapping `mx-auto max-w-6xl px-8 py-24`. The template's
  order is: hero (photo) → about (cream) → services (ink) → projects (caramel) → testimonials (ink) → contact (photo).
  Two-column sections split in half, with the serif title on the left.
- **Items are not boxed cards:** use a bold title plus a short line of text, with no background or border.
- **Photos:** sharp corners (`rounded-none`), placed on an ink background with `opacity-70` (hero)
  or `opacity-50` (contact). No colored overlays.

## Section snippet
```tsx
<section className="bg-caramel text-ink">
  <div className="mx-auto max-w-6xl px-8 py-24">
    <h2 className="font-display text-6xl font-light leading-none tracking-tighter md:text-8xl">A few things I'm proud of</h2>
    <p className="mt-8 text-lg md:text-xl">Short supporting line.</p>
    <div className="mt-12 grid gap-8 md:grid-cols-3">{/* cards */}</div>
  </div>
</section>
```

## Before finishing
- Check both themes: `.dark` (the default) and light.
- Look for: hardcoded colors, bold serif, square buttons, rounded photos, boxed cards, white text on caramel, `text-xs` body text.
- If you added a new pattern, document it in `docs/design-system.md`.
