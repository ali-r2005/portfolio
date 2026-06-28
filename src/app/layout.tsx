import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ServerSidebar } from "@/components/layout/server-sidebar"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Dev — Portfolio",
  description: "Software developer portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="flex h-full overflow-hidden">
        <TooltipProvider>
          <ServerSidebar />
          <main className="flex-1 overflow-y-auto bg-background">
            {children}
          </main>
        </TooltipProvider>
      </body>
    </html>
  )
}
