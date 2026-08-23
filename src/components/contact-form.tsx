"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "@/app/contact/actions"
import { CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline"

export function ContactForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus(null)

    const res = await sendContactEmail({ name, email, message })

    setIsSubmitting(false)

    if (res.success) {
      setStatus({
        type: "success",
        text: "Thank you! Your message has been sent successfully. I'll get back to you soon.",
      })
      setName("")
      setEmail("")
      setMessage("")
    } else {
      setStatus({
        type: "error",
        text: res.error || "Failed to send message. Please try again later.",
      })
    }
  }

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {status && (
        <div
          className={`flex items-start gap-3 rounded-lg border p-4 text-sm ${
            status.type === "success"
              ? "border-success/30 bg-success/10 text-success"
              : "border-destructive/30 bg-destructive/10 text-destructive"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircleIcon className="h-5 w-5 shrink-0" />
          ) : (
            <ExclamationTriangleIcon className="h-5 w-5 shrink-0" />
          )}
          <p className="leading-relaxed">{status.text}</p>
        </div>
      )}

      <div>
        <label className="mb-1 md:mb-2 block text-sm font-medium text-foreground">
          Name <span className="text-destructive">*</span>
        </label>
        <Input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border-border bg-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
      </div>

      <div>
        <label className="mb-1 md:mb-2 block text-sm font-medium text-foreground">
          Email <span className="text-destructive">*</span>
        </label>
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border-border bg-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
      </div>

      <div>
        <label className="mb-1 md:mb-2 block text-sm font-medium text-foreground">
          Message
        </label>
        <Textarea
          placeholder="Type your message..."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border-border bg-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
