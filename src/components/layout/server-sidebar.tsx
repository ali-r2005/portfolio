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
import {
  HomeIcon,
  CommandLineIcon,
  BriefcaseIcon,
  WrenchScrewdriverIcon,
  EnvelopeIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline"

const iconClass = "size-5"

const servers = [
  { label: "Home", icon: <HomeIcon className={iconClass} />, href: "/" },
  { label: "Projects", icon: <CommandLineIcon className={iconClass} />, href: "/projects" },
  { label: "Experience", icon: <BriefcaseIcon className={iconClass} />, href: "/experience" },
  { label: "Skills", icon: <WrenchScrewdriverIcon className={iconClass} />, href: "/skills" },
  { label: "Contact", icon: <EnvelopeIcon className={iconClass} />, href: "/contact" },
  { label: "Blog", icon: <PencilSquareIcon className={iconClass} />, href: "/blog" },
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
                {server.icon}
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
