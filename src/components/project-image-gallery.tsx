"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

interface ProjectImageGalleryProps {
  images: string[]
  alt: string
}

export function ProjectImageGallery({ images, alt }: ProjectImageGalleryProps) {
  const [current, setCurrent] = useState(0)

  if (images.length === 0) return null

  const goPrev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length)
  const goNext = () => setCurrent((prev) => (prev + 1) % images.length)

  return (
    <div className="mb-8">
      <div className="relative h-72 w-full overflow-hidden rounded-lg border border-border bg-muted sm:h-96 md:h-[28rem]">
        <Image src={images[current]} alt={`${alt} screenshot ${current + 1}`} fill className="object-contain" priority />

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous image"
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md transition-colors hover:bg-background"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-background/80 text-foreground shadow-md transition-colors hover:bg-background"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
            <div className="absolute bottom-3 right-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground">
              {current + 1} / {images.length}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
          {images.map((image, i) => (
            <button
              key={image}
              type="button"
              onClick={() => setCurrent(i)}
              aria-label={`View screenshot ${i + 1}`}
              className={`relative h-16 w-full overflow-hidden rounded-md border-2 transition-colors ${
                i === current ? "border-primary" : "border-border hover:border-muted-foreground"
              }`}
            >
              <Image src={image} alt={`${alt} thumbnail ${i + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
