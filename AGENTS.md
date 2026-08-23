# Antigravity Agent Rules — Portfolio Project

This repository is a Next.js developer portfolio with a Discord-inspired layout, built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and TypeScript.

---

## 1. Core Framework & Version Notices

- **Next.js 16 (App Router)**: Note that APIs, conventions, and file structures in Next.js 16 may differ from legacy training data.
  - Check `node_modules/next/dist/docs/` for relevant API guides when in doubt.
  - Heed deprecation notices and adhere strictly to App Router conventions (`src/app/`).
- **React 19**: Ensure proper usage of server components by default; add `"use client"` directive at the top of interactive client components.
- **TypeScript & Path Aliases**: Use `@/*` alias for all imports from `./src/*` (e.g. `@/components/ui/card`, `@/lib/utils`, `@/data/projects`).

---

## 2. Icon Requirements

- **Strict Library Standard**: Always use `@heroicons/react` (24/outline) for all icons.
- **Import Pattern**:
  ```tsx
  import { BriefcaseIcon, CodeBracketIcon } from "@heroicons/react/24/outline"
  ```
- **Forbidden**: Do NOT use inline SVGs, emojis, or any other icon library (such as `lucide-react`) for general UI icons, unless preserving pre-existing SVG brand logos (e.g., GitHub/LinkedIn brand icons).

---

## 3. Layout & Spacing Standards

### Page Container
All page components (`src/app/*/page.tsx`) must use these consistent container constraints:
- **Max width**: `max-w-6xl` (never use `max-w-3xl` or smaller)
- **Padding**: `p-8` (always 8 units minimum)
- **Container class**: `"mx-auto max-w-6xl p-8"`

### Header Section (Page Title)
Every main page must adhere to this unified header pattern:
```tsx
<div className="mb-8 border-b border-border pb-8">
  <h1 className="text-4xl font-semibold text-foreground">Page Title</h1>
  <p className="mt-2 text-base text-muted-foreground">Subtitle or description text</p>
</div>
```
- **Heading size**: `text-4xl font-semibold`
- **Subtitle size**: `text-base text-muted-foreground`
- **Margin below header**: `mb-8`
- **Padding below border**: `pb-8`
- **Gap between heading & subtitle**: `mt-2`

### Cards & Component Spacing
- **Card padding**: `p-6` or `p-8` minimum.
- **CardHeader padding-bottom**: `pb-4` minimum.
- **Grid gaps**: `gap-6` or `gap-8` minimum (never use `gap-3` or `gap-4`).
- **Section margins**: `mb-8` between content sections.

---

## 4. Typography Hierarchy

- **Page Titles**: `text-4xl font-semibold text-foreground`
- **Section Headings**: `text-sm font-semibold uppercase tracking-wider text-muted-foreground`
- **Card Titles**: `text-lg font-semibold text-foreground` or `text-base font-semibold`
- **Body Text**: `text-base` minimum (`text-foreground` or `text-text-secondary`)
- **Secondary Text**: `text-sm` or `text-base`
- **Helper / Metadata**: `text-xs` (strictly reserved for dates, badges, or small tags; never for main body text)

---

## 5. Design Tokens & Styling System

- **Tailwind CSS v4**: Built with `@import "tailwindcss";` in `src/app/globals.css`.
- **CSS Color Tokens**: Always use predefined semantic CSS variables instead of hardcoded hex values:
  - Backgrounds: `bg-background`, `bg-card`, `bg-muted`, `bg-sidebar`
  - Text: `text-foreground`, `text-muted-foreground`, `text-text-secondary`
  - Borders: `border-border`, `border-sidebar-border`
  - Accents/States: `bg-primary`, `bg-secondary`, `bg-accent`, `bg-success`
- **Dark Mode**: Dark theme is active by default via the `dark` class on the `<html>` element.

---

## 6. Scope of Rules

Apply these guidelines to:
- ✅ All new pages in `src/app/*/page.tsx`
- ✅ Component creations and refactoring in `src/components/`
- ✅ Data structures and content updates in `src/data/` and `posts/`
- ✅ Any layout or style adjustments across the portfolio
