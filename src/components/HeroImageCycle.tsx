"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroImageCycleProps {
  images: string[];
  alt?: string;
  interval?: number;
}

export function HeroImageCycle({
  images,
  alt = "",
  interval = 6000,
}: HeroImageCycleProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <>
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          className={`object-cover transition-opacity duration-[2000ms] ease-in-out ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          sizes="100vw"
        />
      ))}
    </>
  );
}
