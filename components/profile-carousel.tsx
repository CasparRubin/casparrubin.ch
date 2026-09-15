"use client";

import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Autoplay from "embla-carousel-autoplay";

import photo1 from "@/public/caspar/casparCamilleRubin_1200x1600px_1.webp";
import photo2 from "@/public/caspar/casparCamilleRubin_1200x1600px_2.webp";
import photo3 from "@/public/caspar/casparCamilleRubin_1200x1600px_3.webp";
import photo4 from "@/public/caspar/casparCamilleRubin_1200x1600px_4.webp";
import photo5 from "@/public/caspar/casparCamilleRubin_1200x1600px_5.webp";
import photo6 from "@/public/caspar/casparCamilleRubin_1200x1600px_6.webp";
import photo7 from "@/public/caspar/casparCamilleRubin_1200x1600px_7.webp";
import photo8 from "@/public/caspar/casparCamilleRubin_1200x1600px_8.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images: StaticImageData[] = [
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
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
  const [slides, setSlides] = useState(images);
  const autoplay = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  useEffect(() => {
    setSlides([photo1, ...shuffle(images.slice(1))]);
  }, []);

  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[autoplay.current]}
      className="overflow-hidden"
    >
      <CarouselContent className="-ml-0">
        {slides.map((image, index) => (
          <CarouselItem key={image.src} className="relative pl-0">
            <Image
              src={image}
              alt="Caspar Camille Rubin"
              sizes="(max-width: 1024px) 280px, 380px"
              priority={index === 0}
              placeholder="blur"
              className="h-auto w-full saturate-[.9] contrast-[1.04]"
            />
            <div className="absolute bottom-2 right-2 rounded-full bg-black/30 px-2 py-0.5 text-[11px] font-medium text-white/90 backdrop-blur-sm">
              Image {index + 1} / {slides.length}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90" />
      <CarouselNext className="right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-background/70 backdrop-blur-sm hover:bg-background/90" />
    </Carousel>
  );
}
