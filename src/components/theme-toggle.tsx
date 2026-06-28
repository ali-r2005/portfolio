"use client"

import { useEffect, useState } from "react"

export function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setDark(isDark)
  }, [])

  function toggle(e: React.MouseEvent) {
    e.stopPropagation()
    const next = !dark
    document.documentElement.classList.toggle("dark", next)
    setDark(next)
  }

  return (
    <span
      className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl bg-background text-lg text-muted-foreground transition-all duration-150 hover:rounded-xl hover:bg-primary hover:text-primary-foreground"
      onClick={toggle}
    >
      {dark ? (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
      ) : (
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )}
    </span>
  )
}
