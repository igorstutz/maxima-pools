"use client";

import { useState, useEffect } from "react";

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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[2000ms] ease-in-out ${
            i === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
    </>
  );
}
