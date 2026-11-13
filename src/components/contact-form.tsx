"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendContactEmail } from "@/app/contact/actions"
import { CheckCircleIcon, ExclamationTriangleIcon } from "@heroicons/react/24/outline"
import { cn } from "@/lib/utils"

type Tone = "default" | "cream"

const toneStyles: Record<
  Tone,
  { form: string; label: string; field: string; input: string; textarea: string; button: string }
> = {
  default: {
    form: "space-y-4",
    label: "text-foreground",
    field: "border-border bg-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary",
    input: "",
    textarea: "",
    button: "w-full bg-primary text-primary-foreground hover:bg-primary/90",
  },
  // For use on a cream card regardless of the active theme (home contact band).
  // Sized to the Canva form: 40px fields, 80px message box, 44px caramel pill.
  cream: {
    form: "space-y-[min(3.3vw,45px)]",
    label: "text-caption text-ink",
    field: "border-ink/30 bg-cream text-copy text-ink placeholder:text-ink/50 focus-visible:ring-caramel dark:bg-cream",
    input: "h-10",
    textarea: "min-h-20",
    button: "h-11 w-full rounded-full bg-caramel text-button font-bold text-ink hover:bg-caramel/90",
  },
}

export function ContactForm({ tone = "default" }: { tone?: Tone }) {
  const styles = toneStyles[tone]
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
    <form className={styles.form} onSubmit={handleSubmit}>
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
        <label className={cn("mb-1 md:mb-2 block text-sm font-medium", styles.label)}>
          Name <span className="text-destructive">*</span>
        </label>
        <Input
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className={cn(styles.field, styles.input)}
        />
      </div>

      <div>
        <label className={cn("mb-1 md:mb-2 block text-sm font-medium", styles.label)}>
          Email <span className="text-destructive">*</span>
        </label>
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={cn(styles.field, styles.input)}
        />
      </div>

      <div>
        <label className={cn("mb-1 md:mb-2 block text-sm font-medium", styles.label)}>
          Message
        </label>
        <Textarea
          placeholder="Type your message..."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={cn(styles.field, styles.textarea)}
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className={cn("transition-colors disabled:opacity-50", styles.button)}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
