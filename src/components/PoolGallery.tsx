"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface PoolGalleryProps {
  images: string[];
  poolName: string;
  mainImage: string;
}

export function PoolGallery({ images, poolName, mainImage }: PoolGalleryProps) {
  const allImages = [mainImage, ...images];
  const [selected, setSelected] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [paused, setPaused] = useState(false);

  const navigate = useCallback(
    (dir: 1 | -1) => {
      setSelected((prev) => (prev + dir + allImages.length) % allImages.length);
    },
    [allImages.length]
  );

  // Auto-advance every 4s unless paused or lightbox open
  useEffect(() => {
    if (paused || lightbox || allImages.length <= 1) return;
    const timer = setInterval(() => navigate(1), 4000);
    return () => clearInterval(timer);
  }, [paused, lightbox, navigate, allImages.length]);

  return (
    <>
      {/* Main display */}
      <div className="space-y-3">
        {/* Selected image with crossfade */}
        <button
          onClick={() => setLightbox(true)}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative w-full aspect-[16/10] rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-50 cursor-zoom-in group"
        >
          {allImages.map((img, i) => (
            <Image
              key={img}
              src={img}
              alt={`${poolName} - photo ${i + 1}`}
              fill
              className={`object-contain transition-opacity duration-700 ${
                i === selected ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority={i === 0}
            />
          ))}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
        </button>

        {/* Thumbnails */}
        {allImages.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {allImages.map((img, i) => (
              <button
                key={i}
                onClick={() => { setSelected(i); setPaused(true); setTimeout(() => setPaused(false), 6000); }}
                className={`relative w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden shrink-0 transition-all duration-300 ${
                  i === selected
                    ? "ring-2 ring-accent ring-offset-2 opacity-100"
                    : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image
                  src={img}
                  alt={`${poolName} thumbnail ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="96px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
          onClick={() => setLightbox(false)}
        >
          <button
            onClick={() => setLightbox(false)}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
          >
            <X size={20} className="text-white" />
          </button>

          {allImages.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="absolute left-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <ChevronLeft size={24} className="text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                className="absolute right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <ChevronRight size={24} className="text-white" />
              </button>
            </>
          )}

          <div
            className="relative w-[90vw] h-[80vh] max-w-6xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allImages[selected]}
              alt={`${poolName} - photo ${selected + 1}`}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          <div className="absolute bottom-4 text-white/50 text-sm">
            {selected + 1} / {allImages.length}
          </div>
        </div>
      )}
    </>
  );
}
