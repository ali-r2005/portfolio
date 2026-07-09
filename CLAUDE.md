@AGENTS.md

# Layout & Spacing Standards

## Page Container
All page components must use these consistent measurements:

- **Max width**: `max-w-6xl` (never use max-w-3xl or smaller)
- **Padding**: `p-8` (always 8 units, never p-6 or smaller)
- **Container class**: `"mx-auto max-w-6xl p-8"`

## Header Section (Page Title)
Every page must follow this header pattern:

```tsx
<div className="mb-8 border-b border-border pb-8">
  <h1 className="text-4xl font-semibold text-foreground">Page Title</h1>
  <p className="mt-2 text-base text-muted-foreground">Subtitle or description</p>
</div>
```

- **Heading size**: `text-4xl` (never smaller)
- **Subtitle size**: `text-base`
- **Margin below header**: `mb-8`
- **Padding below border**: `pb-8`
- **Gap between heading and subtitle**: `mt-2`

## Cards & Content
- **Card padding**: `p-6` or `p-8` minimum
- **CardHeader padding-bottom**: `pb-4` minimum
- **Gap between grid items**: `gap-6` minimum (never gap-3 or gap-4)
- **Text sizing**:
  - Main content: `text-base` or `text-lg`
  - Secondary text: `text-sm` or `text-base`
  - Never use `text-xs` for body text
- **Section margins**: `mb-8` between sections (not mb-4 or mb-6)

## Typography Hierarchy
- **Page titles**: `text-4xl font-semibold`
- **Card titles**: `text-lg font-semibold` or `text-base font-semibold`
- **Body text**: `text-base` minimum
- **Secondary text**: `text-sm`
- **Helper text**: `text-xs` (only for dates, labels)

## Spacing Rules
- **Vertical spacing between sections**: `mb-8` or `mb-6`
- **Horizontal gaps in grids**: `gap-6` or `gap-8`
- **Padding inside cards**: `p-6` minimum, `p-8` preferred
- **Internal card spacing**: Use `mt-2`, `mt-4`, `mt-6` appropriately

## Icons & Visual Elements
- **Icons in headers**: `h-4 w-4` minimum
- **Icon containers**: `h-12 w-12` minimum for visual elements
- **Status indicators/dots**: `h-4 w-4` minimum

## Apply These Rules To
- ✅ All new pages in `src/app/*/page.tsx`
- ✅ Any page modifications or refactoring
- ✅ New sections added to existing pages
- ✅ Any layout changes
