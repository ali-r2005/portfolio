"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
]

export function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    if (typeof document !== "undefined") {
      return document.documentElement.classList.contains("dark")
    }
    return true
  })

  function toggleTheme() {
    const next = !dark
    document.documentElement.classList.toggle("dark", next)
    setDark(next)
  }

  function isActive(href: string) {
    return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/")
  }

  // Floating cream pill (Vintage Cinematica): 1078×58 at top 18.67px on the
  // 1366 artboard. Its total height is --cine-nav-offset, which the home hero
  // uses to slide underneath it.
  return (
    <header className="pointer-events-none sticky top-0 z-50 w-full px-4 pt-[var(--cine-nav-top)]">
      <div data-cine="nav" className="pointer-events-auto mx-auto flex h-[var(--cine-nav-h)] w-full max-w-[var(--cine-nav-w)] items-center justify-between rounded-full bg-cream pl-2 pr-2 text-ink shadow-lg shadow-ink/20 md:pl-3">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/A-logo.png"
              alt="Ali Rami Logo"
              width={40}
              height={40}
              className="h-full w-full object-cover"
              priority
            />
          </div>
          <span className="text-base font-bold tracking-tight">Ali Rami</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              data-cine="nav-link"
              className={cn(
                "rounded-full px-3 py-1 text-button font-bold transition-colors",
                isActive(link.href) ? "bg-ink text-cream" : "text-ink/70 hover:text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-ink/10 hover:text-ink"
          >
            {dark ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink/70 transition-colors hover:bg-ink/10 hover:text-ink lg:hidden"
          >
            {mobileMenuOpen ? <XMarkIcon className="size-5" /> : <Bars3Icon className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-[var(--cine-nav-w)] rounded-3xl bg-cream p-3 text-ink shadow-lg shadow-ink/20 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "rounded-full px-4 py-2 text-base font-bold tracking-tight transition-colors",
                  isActive(link.href) ? "bg-ink text-cream" : "text-ink/70 hover:bg-ink/10 hover:text-ink"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
