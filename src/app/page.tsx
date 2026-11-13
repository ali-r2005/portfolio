import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { ExperienceSection } from "@/components/home/experience-section"
import { SkillsSection } from "@/components/home/skills-section"
import { ContactSection } from "@/components/home/contact-section"
import { BASE_URL } from "@/lib/constants"
import { JsonLd } from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Ali Rami — Full-Stack & Business Automation",
  description: "Full-Stack Developer & Business Automation Specialist portfolio showcasing projects, experience, and developer insights.",
  alternates: {
    canonical: BASE_URL,
  },
  verification: {
    google: "67JqrtGmsNlwWPMETTnPthV9l5FDbHfdUVRbV7n-qFA",
  },
}

export default function HomePage() {
  const jsonLdData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${BASE_URL}/#person`,
        "name": "Ali Rami",
        "jobTitle": "Full-Stack & Business Automation Specialist",
        "url": BASE_URL,
        "sameAs": [
          "https://github.com/ali-r2005",
          "https://www.linkedin.com/in/ali-rami-63a998338"
        ],
        "email": "mailto:ali.rami.6699@gmail.com"
      },
      {
        "@type": "WebSite",
        "@id": `${BASE_URL}/#website`,
        "url": BASE_URL,
        "name": "Ali Rami Portfolio",
        "description": "Full-Stack Developer & Business Automation Specialist portfolio showcasing web development projects, technical experience, and insights.",
        "publisher": {
          "@id": `${BASE_URL}/#person`
        }
      }
    ]
  }

  return (
    <>
      <JsonLd data={jsonLdData} />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </>
  )
}
