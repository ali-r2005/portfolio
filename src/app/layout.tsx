import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ServerSidebar } from "@/components/layout/server-sidebar"
import "./globals.css"
import { GoogleAnalytics } from '@next/third-parties/google';

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

import { BASE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Ali Rami — Full-Stack & Business Automation",
    template: "%s | Ali Rami",
  },
  description: "Full-Stack Developer & Business Automation Specialist portfolio showcasing web development projects, technical experience, and insights.",
  openGraph: {
    title: "Ali Rami — Full-Stack & Business Automation",
    description: "Full-Stack Developer & Business Automation Specialist portfolio showcasing web development projects, technical experience, and insights.",
    url: BASE_URL,
    siteName: "Ali Rami Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ali Rami — Full-Stack & Business Automation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Rami — Full-Stack & Business Automation",
    description: "Full-Stack Developer & Business Automation Specialist portfolio showcasing web development projects, technical experience, and insights.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
          <GoogleAnalytics gaId="G-JPM5BQYX6D" />
          <main className="flex-1 overflow-y-auto bg-background">
            {children}
          </main>
        </TooltipProvider>
      </body>
    </html>
  )
}
