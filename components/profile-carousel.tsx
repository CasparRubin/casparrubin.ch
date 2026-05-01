"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  "/caspar/casparCamilleRubin_1200x1600px_1.webp",
  "/caspar/casparCamilleRubin_1200x1600px_2.webp",
  "/caspar/casparCamilleRubin_1200x1600px_3.webp",
  "/caspar/casparCamilleRubin_1200x1600px_4.webp",
  "/caspar/casparCamilleRubin_1200x1600px_5.webp",
  "/caspar/casparCamilleRubin_1200x1600px_6.webp",
  "/caspar/casparCamilleRubin_1200x1600px_7.webp",
  "/caspar/casparCamilleRubin_1200x1600px_8.webp",
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function ProfileCarousel() {
  const [shuffled, setShuffled] = useState(images);

  useEffect(() => {
    setShuffled(shuffle(images));
  }, []);

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[Autoplay({ delay: 4000, stopOnInteraction: false })]}
      className="overflow-hidden"
    >
      <CarouselContent className="-ml-0">
        {shuffled.map((src, index) => (
          <CarouselItem key={src} className="relative pl-0">
            <Image
              src={src}
              alt="Caspar Camille Rubin"
              width={1200}
              height={1600}
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
      <CarouselPrevious className="left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90" />
      <CarouselNext className="right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90" />
    </Carousel>
  );
}
