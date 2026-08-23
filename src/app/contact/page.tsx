import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ContactForm } from "@/components/contact-form"
import { BASE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  alternates: {
    canonical: `${BASE_URL}/contact`,
  },
}

const email = "ali.rami.6699@gmail.com"

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ali-r2005",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ali-rami-63a998338",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/AliRami1219745",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
]

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl p-4 sm:p-6 md:p-8">
      <div className="mb-8 border-b border-border pb-8">
        <h1 className="text-3xl font-semibold text-foreground md:text-4xl">Contact</h1>
        <p className="mt-2 text-base text-muted-foreground">Send me a message</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-8">
        <Card className="border-border bg-card">
          <CardHeader>
            <h2 className="text-lg md:text-xl font-semibold text-foreground">Send a message</h2>
          </CardHeader>
          <CardContent className="pt-2">
            <ContactForm />
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card className="border-border bg-card">
            <CardHeader>
              <h2 className="text-lg md:text-xl font-semibold text-foreground">Social Links</h2>
            </CardHeader>
            <CardContent className="space-y-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 rounded-lg px-4 py-3 text-base text-text-secondary transition-colors hover:bg-muted hover:text-foreground"
                >
                  <span className="text-primary">{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <h2 className="text-lg md:text-xl font-semibold text-foreground">Email</h2>
            </CardHeader>
            <CardContent className="pt-2">
              <a
                href={`mailto:${email}`}
                className="text-base text-primary hover:underline"
              >
                {email}
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
