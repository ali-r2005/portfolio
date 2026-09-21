import type { Metadata } from "next"
import { LandingPage } from "@/components/landing-page"
import { BASE_URL } from "@/lib/constants"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Full-Stack Next.js Developer & Business Automation Specialist | Ali",
  description: "I build high-performance Next.js web applications and automate business operations with n8n, CRM, and ERPNext integrations.",
  alternates: {
    canonical: `${BASE_URL}/services`,
  },
  openGraph: {
    title: "Full-Stack Next.js Developer & Business Automation Specialist | Ali",
    description: "I build high-performance Next.js web applications and automate business operations with n8n, CRM, and ERPNext integrations.",
    url: `${BASE_URL}/services`,
  },
}

export default function ServicesPage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Full-Stack Next.js Development & Business Automation",
    "provider": {
      "@type": "Person",
      "name": "Ali Rami",
      "url": BASE_URL,
    },
    "description": "I build high-performance Next.js web applications and automate business operations with n8n, CRM, and ERPNext integrations.",
    "serviceType": "Software Engineering & Workflow Automation",
    "areaServed": "Global",
    "url": `${BASE_URL}/services`,
  }

  return (
    <div className="mx-auto max-w-6xl p-4 sm:p-6 md:p-8">
      <JsonLd data={jsonLdData} />
      <LandingPage />
    </div>
  )
}
