"use client";

import { useState, useMemo, useEffect, useCallback, useRef } from "react";
import { X, ChevronLeft, ChevronRight, Grid3X3, LayoutGrid, ZoomIn } from "lucide-react";
import { galleryImages, categories, type GalleryCategory } from "./gallery-data";

const BATCH = 16;

export function GalleryGrid() {
  const [filter, setFilter] = useState<GalleryCategory>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(BATCH);
  const [compact, setCompact] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? galleryImages
        : galleryImages.filter((img) => img.category === filter),
    [filter]
  );

  const visible = filtered.slice(0, loaded);
  const hasMore = loaded < filtered.length;

  // Reset loaded count when filter changes
  useEffect(() => {
    setLoaded(BATCH);
  }, [filter]);

  // Infinite scroll
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || !hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setLoaded((prev) => Math.min(prev + BATCH, filtered.length));
        }
      },
      { rootMargin: "400px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [hasMore, filtered.length]);

  // Lightbox navigation
  const navigate = useCallback(
    (dir: 1 | -1) => {
      if (lightbox === null) return;
      const next = lightbox + dir;
      if (next >= 0 && next < filtered.length) setLightbox(next);
    },
    [lightbox, filtered.length]
  );

  useEffect(() => {
    if (lightbox === null) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") navigate(1);
      if (e.key === "ArrowLeft") navigate(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, navigate]);

  return (
    <>
      {/* Sticky filter bar */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    filter === cat
                      ? "bg-gradient-to-r from-accent to-accent-light text-white shadow-md shadow-accent/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                  {cat !== "All" && (
                    <span className="ml-1.5 text-xs opacity-60">
                      {galleryImages.filter((i) => i.category === cat).length}
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 mr-2">
                {filtered.length} photos
              </span>
              <button
                onClick={() => setCompact(false)}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  !compact ? "bg-accent/10 text-accent" : "text-gray-400 hover:text-gray-600"
                }`}
                aria-label="Large grid"
              >
                <LayoutGrid size={18} />
              </button>
              <button
                onClick={() => setCompact(true)}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  compact ? "bg-accent/10 text-accent" : "text-gray-400 hover:text-gray-600"
                }`}
                aria-label="Compact grid"
              >
                <Grid3X3 size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div
          className={`columns-1 sm:columns-2 ${
            compact ? "lg:columns-4 xl:columns-5" : "lg:columns-3"
          } gap-3 sm:gap-4`}
        >
          {visible.map((img, i) => (
            <button
              key={`${img.src}-${filter}`}
              onClick={() => setLightbox(i)}
              className="group relative block w-full mb-3 sm:mb-4 break-inside-avoid cursor-zoom-in rounded-xl sm:rounded-2xl overflow-hidden animate-fadeInUp"
              style={{
                animationDelay: `${Math.min(i, 8) * 50}ms`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={`${img.category} fiberglass pool`}
                loading={i < 8 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                  <ZoomIn size={20} className="text-gray-700" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 bg-gradient-to-t from-black/60 to-transparent">
                <span className="text-white text-xs font-semibold bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  {img.category}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Infinite scroll sentinel */}
        {hasMore && (
          <div ref={sentinelRef} className="flex justify-center py-12">
            <div className="flex items-center gap-3 text-gray-400">
              <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
              <span className="text-sm font-medium">Loading more...</span>
            </div>
          </div>
        )}

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
              <LayoutGrid size={32} className="text-gray-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No photos found
            </h3>
            <p className="text-gray-500 max-w-md">
              No images match this filter.
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <dialog
          open
          className="fixed inset-0 z-[9999] w-screen h-screen max-w-none max-h-none m-0 p-0 bg-black/95 backdrop:bg-transparent flex items-center justify-center"
          onClick={() => setLightbox(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/60 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full p-2.5 cursor-pointer z-10"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <X size={24} />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-white/40 text-sm font-medium bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 z-10">
              {lightbox + 1} / {filtered.length}
            </div>

            {/* Category badge */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-6 text-white text-sm font-semibold bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 z-10">
              {filtered[lightbox].category}
            </div>

            {/* Prev */}
            {lightbox > 0 && (
              <button
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 sm:p-3 cursor-pointer transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(-1);
                }}
                aria-label="Previous"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {/* Next */}
            {lightbox < filtered.length - 1 && (
              <button
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2.5 sm:p-3 cursor-pointer transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(1);
                }}
                aria-label="Next"
              >
                <ChevronRight size={24} />
              </button>
            )}

            {/* Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={filtered[lightbox].src}
              alt={`${filtered[lightbox].category} fiberglass pool`}
              className="max-w-[90vw] max-h-[85vh] object-contain select-none"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </dialog>
      )}

    </>
  );
}
