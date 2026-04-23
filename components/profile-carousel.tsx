"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const images = [
  "/caspar_rubin_camille_1.jpg",
  "/caspar_rubin_camille_2.jpeg",
  "/caspar_rubin_camille_3.jpeg",
  "/caspar_rubin_camille_4.jpeg",
  "/caspar_rubin_camille_5.jpg",
  "/caspar_rubin_camille_6.jpg",
  "/caspar_rubin_camille_7.jpg",
  "/caspar_rubin_camille_8.jpg",
  "/caspar_rubin_camille_9.jpg",
  "/caspar_rubin_camille_10.jpg",
  "/caspar_rubin_camille_11.jpg",
  "/caspar_rubin_camille_12.jpg",
  "/caspar_rubin_camille_13.jpg",
  "/caspar_rubin_camille_14.jpg",
  "/caspar_rubin_camille_15.jpg",
]

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function ProfileCarousel() {
  const [shuffled, setShuffled] = useState(images)

  useEffect(() => {
    setShuffled(shuffle(images))
  }, [])

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 5000, stopOnInteraction: false })]}
      className="overflow-hidden"
    >
      <CarouselContent className="-ml-0">
        {shuffled.map((src, index) => (
          <CarouselItem key={src} className="relative pl-0">
            <Image
              src={src}
              alt="Caspar Camille Rubin"
              width={3024}
              height={4032}
              sizes="(max-width: 1024px) 280px, 380px"
              priority={src === shuffled[0]}
              className="h-auto w-full saturate-[.9] contrast-[1.04]"
            />
            <div className="absolute bottom-2 right-2 rounded-full bg-black/30 px-2 py-0.5 text-[11px] font-medium text-white/90 backdrop-blur-sm">
              Image {index + 1} / {shuffled.length}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
