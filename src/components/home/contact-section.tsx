import Image from "next/image"
import { ContactForm } from "@/components/contact-form"

const contactEmail = "ali.rami.6699@gmail.com"

const contactRow = [
  { label: "Email", value: contactEmail, href: `mailto:${contactEmail}` },
  { label: "GitHub", value: "ali-r2005", href: "https://github.com/ali-r2005" },
  { label: "LinkedIn", value: "Ali Rami", href: "https://www.linkedin.com/in/ali-rami-63a998338" },
]

/*
 * Canva "Let's create something worth reading" band (1366×768): photo at 50%
 * on ink over the top 668px, title top 77px (width 544), lead top 455px,
 * cream form card at x=722 (544 wide, top 102), contact row in the bottom
 * 100px strip at 18.67px.
 */
export function ContactSection() {
  return (
    <section id="contact" data-cine="contact" className="scroll-mt-24 bg-ink text-cream">
      <div className="relative md:min-h-[calc(var(--cine-band)-min(7.3206vw,100px))]">
        <Image src="/home/contact-workspace.jpg" alt="" fill sizes="100vw" className="object-cover opacity-50" />
        <div className="cine-container relative grid gap-12 pb-16 pt-[var(--cine-section-y)] md:grid-cols-[var(--cine-col)_var(--cine-col)] md:justify-between md:gap-0 md:pb-[var(--cine-section-y)]">
          <div>
            <h2 data-cine="contact-title" className="min-w-[16rem] font-display text-display">
              Let&apos;s build something worth using
            </h2>
            <p data-cine="contact-lead" className="mt-[max(1.5rem,4.26vw)] text-lead">
              Need a web app, an API or an automation that saves your team hours? Drop me a message and let&apos;s talk.
            </p>
          </div>

          <div
            data-cine="contact-form"
            className="self-start rounded-lg bg-cream p-[max(1.5rem,2.343vw)] text-ink md:mt-[min(1.874vw,25.6px)]"
          >
            <ContactForm tone="cream" />
          </div>
        </div>
      </div>

      <ul className="cine-container grid gap-4 py-8 md:h-[min(7.3206vw,100px)] md:grid-cols-3 md:items-center md:gap-0 md:py-0">
        {contactRow.map((item, i) => (
          <li key={item.label} data-cine={i === 0 ? "contact-row" : undefined} className="text-caption md:text-center">
            <span className="font-bold">{item.label}</span>{" "}
            <a
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="hover:text-caramel"
            >
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
