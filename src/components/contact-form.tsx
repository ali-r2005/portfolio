"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactForm() {
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <div>
        <Input
          placeholder="Your name"
          className="border-border bg-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
      </div>
      <div>
        <Input
          type="email"
          placeholder="your@email.com"
          className="border-border bg-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
      </div>
      <div>
        <Textarea
          placeholder="Type your message..."
          rows={4}
          className="border-border bg-input text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Send Message
      </Button>
    </form>
  )
}
