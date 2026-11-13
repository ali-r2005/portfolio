import Image from "next/image"

const paragraphs = [
  "I'm a software engineer who enjoys turning ideas into real products. I like understanding problems from both the technical and business perspectives before designing solutions that are scalable, maintainable, and practical.",
  "Over the past few years I've worked across the full stack, but recently I've been deeply focused on the JavaScript and TypeScript ecosystem, building modern web applications, automation platforms, and developer tools. Whether it's designing an API, architecting a system, or refining a user experience, I enjoy building software that solves real world problems and continuously learning better ways to do it.",
]

/*
 * Canva "About" band (1366×768, cream): title top 77px, copy column at x=509
 * (top 100px, 24px), full-width photo strip on the bottom 242px.
 */
export function AboutSection() {
  return (
    <section
      id="about"
      data-cine="about"
      className="flex scroll-mt-24 flex-col bg-cream text-ink md:min-h-[var(--cine-band)]"
    >
      <div className="cine-container grid flex-1 gap-8 pt-[var(--cine-section-y)] pb-16 md:grid-cols-[min(29.934vw,408.9px)_min(57.123vw,780.3px)] md:gap-0 md:pb-[min(2.8vw,38px)]">
        <h2 data-cine="about-title" className="font-display text-display">
          About me
        </h2>
        <div className="space-y-[max(1rem,1.279vw)] md:pt-[min(1.698vw,23.2px)]">
          {paragraphs.map((p, i) => (
            <p key={p.slice(0, 24)} data-cine={i === 0 ? "about-copy" : undefined} className="text-lead">
              {p}
            </p>
          ))}
        </div>
      </div>
      <div className="relative h-[max(10rem,17.716vw)] max-h-[242px] w-full">
        <Image src="/home/about-writing.jpg" alt="" fill sizes="100vw" className="object-cover" />
      </div>
    </section>
  )
}
