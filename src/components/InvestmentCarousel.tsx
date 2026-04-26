"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "@/components/Image";

type Slide = {
  src: string;
  alt: string;
  label: string;
  subtitle: string;
  href?: string;
};

export function InvestmentCarousel({
  slides,
  interval = 4500,
}: {
  slides: Slide[];
  interval?: number;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  const current = slides[active];

  return (
    <div className="relative">
      <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
      <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl aspect-[16/11]">
        {slides.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover transition-opacity duration-1000 ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/40 via-transparent to-transparent pointer-events-none" />

        {/* Clickable overlay for the active slide */}
        {current.href && (
          <Link
            href={current.href}
            aria-label={`View ${current.label} pool details`}
            className="absolute inset-0 z-10"
          />
        )}

        <div className="absolute bottom-4 left-4 z-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2.5 pointer-events-none">
          <p className="text-white font-semibold text-sm">{current.label}</p>
          <p className="text-white text-xs">{current.subtitle}</p>
        </div>

        <div className="absolute bottom-4 right-4 z-20 flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === active ? "w-6 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
