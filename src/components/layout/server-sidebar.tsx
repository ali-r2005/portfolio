"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const servers = [
  { label: "Home", icon: "\u{1F3E0}", href: "/" },
  { label: "Projects", icon: "\u{1F4C1}", href: "/projects" },
  { label: "Experience", icon: "\u{1F4BC}", href: "/experience" },
  { label: "Skills", icon: "\u{2699}\uFE0F", href: "/skills" },
  { label: "Contact", icon: "\u{2709}\uFE0F", href: "/contact" },
  { label: "Blog", icon: "\u{1F4DD}", href: "/blog" },
]

export function ServerSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex w-[72px] shrink-0 flex-col items-center gap-2 bg-sidebar py-3">
      <Tooltip>
        <TooltipTrigger>
          <Link
            href="/"
            className={cn(
              "flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-bold text-primary-foreground transition-all duration-150 hover:rounded-xl",
              pathname === "/" && "rounded-xl",
            )}
          >
            D
          </Link>
        </TooltipTrigger>
        <TooltipContent side="right" className="bg-foreground text-background">
          Home
        </TooltipContent>
      </Tooltip>

      <div className="h-[2px] w-8 rounded-full bg-muted" />

      {servers.slice(1).map((server) => {
        const isActive = pathname === server.href || pathname.startsWith(server.href + "/")
        return (
          <Tooltip key={server.href}>
            <TooltipTrigger>
              <Link
                href={server.href}
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-2xl text-lg transition-all duration-150 hover:rounded-xl",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:bg-primary hover:text-primary-foreground",
                )}
              >
                <span className="text-base">{server.icon}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-foreground text-background">
              {server.label}
            </TooltipContent>
          </Tooltip>
        )
      })}

      <div className="mt-auto flex flex-col items-center gap-2">
        <Tooltip>
          <TooltipTrigger>
            <ThemeToggle />
          </TooltipTrigger>
          <TooltipContent side="right" className="bg-foreground text-background">
            Toggle theme
          </TooltipContent>
        </Tooltip>
      </div>
    </div>
  )
}
