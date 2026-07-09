"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const ads = [
  {
    image: "/ad1.png",
    alt: "Ad 1",
  },
  {
    image: "https://picsum.photos/seed/ad2/600/1200",
    alt: "Ad 2",
  },
  {
    image: "https://picsum.photos/seed/ad3/600/1200",
    alt: "Ad 3",
  },
  {
    image: "/ad2.png",
    alt: "Ad 4",
  },
]

export function AdSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % ads.length)
    }, 4000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative aspect-[1/2] overflow-hidden rounded-xl border border-border bg-muted">
      {ads.map((ad, i) => (
        <div
          key={ad.image}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image src={ad.image} alt={ad.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  )
}
