import Image from "next/image"
import Link from "next/link"

/*
 * Canva "Hero" band (1366×768): photo at 70% on ink, title top 187px,
 * lead top 440px, cream CTA (382×58) top 610px, left gutter 100px.
 */
export function HeroSection() {
  return (
    <section
      data-cine="hero"
      // Pulled up under the floating pill navbar so the photo runs behind it
      className="relative -mt-[var(--cine-nav-offset)] min-h-[max(100svh,var(--cine-band))] overflow-hidden bg-ink text-cream md:min-h-[var(--cine-band)]"
    >
      <Image
        src="/home/hero-coffee.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="cine-container relative pb-16 pt-[clamp(calc(var(--cine-nav-offset)+3rem),13.699vw,187.13px)] md:pb-[clamp(4rem,7.3206vw,100px)]">
        <h1
          data-cine="hero-title"
          className="max-w-[min(45.525vw,621.9px)] min-w-[18rem] font-display text-display"
        >
          Hi,
          <br />
          I&apos;m Ali Rami.
        </h1>
        <p
          data-cine="hero-lead"
          className="mt-[clamp(1.5rem,2.8895vw,39.47px)] max-w-[var(--cine-col)] min-w-[17rem] text-lead"
        >
          Building web apps and automations that do the boring work for you.
        </p>
        <Link
          href="/services"
          data-cine="hero-cta"
          className="mt-[clamp(2.5rem,7.87vw,107.5px)] inline-flex h-[var(--cine-nav-h)] w-[var(--cine-cta-w)] items-center justify-center rounded-full bg-cream text-button font-bold text-ink transition-colors hover:bg-cream/90"
        >
          Explore my services
        </Link>
      </div>
    </section>
  )
}
