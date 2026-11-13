import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Teach tailwind-merge the custom Vintage Cinematica font sizes (globals.css @theme),
// otherwise it treats e.g. `text-button` as a color and drops it next to `text-ink`.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: ["display", "quote", "title", "lead", "copy", "button", "caption"],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
