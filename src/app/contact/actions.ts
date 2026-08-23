"use server"

import { Resend } from "resend"

export async function sendContactEmail(formData: {
  name: string
  email: string
  message: string
}) {
  const { name, email, message } = formData

  if (!name.trim() || !email.trim()) {
    return { success: false, error: "Please fill the required fields." }
  }

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return {
      success: false,
      error: "Resend API key is not configured yet. Please add RESEND_API_KEY to your .env.local file.",
    }
  }

  try {
    const resend = new Resend(apiKey)

    const { error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: ["ali.rami.6699@gmail.com"],
      replyTo: email,
      subject: `New Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    if (error) {
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : "An unexpected error occurred."
    return { success: false, error: errorMessage }
  }
}
