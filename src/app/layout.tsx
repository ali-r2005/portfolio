import type { Metadata } from "next"
import { Work_Sans, Crimson_Pro, Geist_Mono } from "next/font/google"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Navbar } from "@/components/layout/navbar"
import "./globals.css"
import { GoogleAnalytics } from '@next/third-parties/google';

// Closest Google Fonts to the Canva template fonts, picked by pixel-matching
// rendered text against the Canva export (see docs/design-system.md).
const workSans = Work_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
})

// Variable font: the display style uses weight 250 to match Canva's "light"
const crimsonPro = Crimson_Pro({
  variable: "--font-serif-display",
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
      className={`${workSans.variable} ${crimsonPro.variable} ${geistMono.variable} dark min-h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <TooltipProvider>
          <Navbar />
          <GoogleAnalytics gaId="G-JPM5BQYX6D" />
          <main className="flex-1">
            {children}
          </main>
        </TooltipProvider>
      </body>
    </html>
  )
}
