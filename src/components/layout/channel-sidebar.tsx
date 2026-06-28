"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const channelCategories = [
  {
    label: "General",
    channels: [
      { label: "about", href: "/" },
      { label: "projects", href: "/projects" },
      { label: "experience", href: "/experience" },
    ],
  },
  {
    label: "Info",
    channels: [
      { label: "skills", href: "/skills" },
      { label: "contact", href: "/contact" },
    ],
  },
  {
    label: "Media",
    channels: [
      { label: "blog", href: "/blog" },
    ],
  },
]

export function ChannelSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex w-60 shrink-0 flex-col bg-secondary">
      <div className="flex h-12 items-center px-4 shadow-[0_1px_0_var(--sidebar-border)]">
        <h1 className="text-base font-semibold text-foreground">Portfolio</h1>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-3">
        {channelCategories.map((category) => (
          <div key={category.label} className="mb-4">
            <div className="mb-1 flex items-center px-2 py-1">
              <svg className="mr-1 h-3 w-3 text-muted-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {category.label}
              </span>
            </div>

            {category.channels.map((channel) => {
              const isActive = pathname === channel.href || pathname.startsWith(channel.href + "/")
              return (
                <Link
                  key={channel.href}
                  href={channel.href}
                  className={cn(
                    "flex items-center gap-1.5 rounded px-2 py-1 text-sm transition-colors",
                    isActive
                      ? "bg-muted text-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <span className="text-lg leading-none">#</span>
                  <span>{channel.label}</span>
                </Link>
              )
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 border-t border-sidebar-border px-4 py-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          D
        </div>
        <div className="flex-1 overflow-hidden">
          <p className="text-sm font-medium text-foreground">Dev</p>
          <p className="text-xs text-muted-foreground">Online</p>
        </div>
        <div className="flex items-center gap-1">
          <button className="flex h-7 w-7 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
