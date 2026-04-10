"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "@/components/Image";
import Link from "next/link";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  Sun,
  Sparkles,
  ShieldCheck,
  Clock,
  Palette,
  Layers,
  ChevronLeft,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";

/* ────────────────────────────────────────────
   Color Data
   ──────────────────────────────────────────── */

interface PoolColor {
  id: string;
  name: string;
  tagline: string;
  description: string;
  swatch: string;
  hero: string;
  gallery: string[];
}

const colors: PoolColor[] = [
  {
    id: "blue-lagoon",
    name: "Blue Lagoon",
    tagline: "Tropical & Refreshing",
    description:
      "Bring vacation vibes right to your backyard. Blue Lagoon captures the essence of the Caribbean \u2014 a bright, inviting hue that makes your pool water look crystal clear and vibrant.",
    swatch: "#2563eb",
    hero: "https://maximapools.com/wp-content/uploads/2025/01/Venetian-4.jpg",
    gallery: [
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-2.43.37-PMBlue-Lagoon-Pool-Images-768x576.jpeg",
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-2.47.15-PMBlue-Lagoon-Pool-Images-768x576.jpeg",
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-2.57.22-PMBlue-Lagoon-Pool-Images-768x576.jpeg",
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-10-at-9.10.14-AM-5Blue-Lagoon-Pool-Images-768x576.jpeg",
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-9.06.04-PMBlue-Lagoon-Pool-Images-768x576.jpeg",
    ],
  },
  {
    id: "granite",
    name: "Granite",
    tagline: "Modern & Timeless",
    description:
      "Granite offers a sleek, elegant look that pairs perfectly with modern landscapes. Its deep, stone-like tone enhances the contrast of surrounding pavers and greenery.",
    swatch: "#57534e",
    hero: "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-3.01.56-PM-1Granite-Pool-Images-768x576.jpeg",
    gallery: [
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-3.01.56-PMGranite-Pool-Images-768x576.jpeg",
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-8.44.22-PM-1Granite-Pool-Images-768x576.jpeg",
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-8.44.22-PM-3Granite-Pool-Images-768x576.jpeg",
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-9.06.05-PM-1Granite-Pool-Images-768x576.jpeg",
    ],
  },
  {
    id: "sully-blue",
    name: "Sully Blue",
    tagline: "Calm & Elegant",
    description:
      "Soft and soothing, Sully Blue evokes a sense of calm and balance. It\u2019s ideal for homeowners who love minimalist design and subtle luxury.",
    swatch: "#7dd3fc",
    hero: "https://maximapools.com/wp-content/uploads/2025/01/Ariella-Sully-Blue-768x576.jpeg",
    gallery: [
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-2.51.41-PMSully-Blue-Pool-Images-768x576.jpeg",
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-3.03.27-PM-1Sully-Blue-Pool-Images-768x576.jpeg",
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-23-at-7.29.17-AM-1Sully-Blue-Pool-Image-768x576.jpeg",
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-23-at-7.29.17-AM-2Sully-Blue-Pool-Image-768x576.jpeg",
    ],
  },
  {
    id: "white",
    name: "White",
    tagline: "Clean & Classic",
    description:
      "A timeless favorite. White gives your pool a bright, clear appearance and highlights the water\u2019s natural shimmer. Perfect for a clean, classic aesthetic.",
    swatch: "#e7e5e4",
    hero: "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-3.15.26-PM-6White-Pool-Images-768x576.jpeg",
    gallery: [
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-3.15.26-PM-5White-Pool-Images-768x576.jpeg",
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-3.15.26-PM-4White-Pool-Images-768x576.jpeg",
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-3.15.25-PMWhite-Pool-Images-768x576.jpeg",
      "https://maximapools.com/wp-content/uploads/2025/01/WhatsApp-Image-2021-02-09-at-2.59.19-PMWhite-Pool-Images-768x576.jpeg",
    ],
  },
];

const benefits = [
  {
    icon: Sun,
    title: "UV Protection",
    description: "Built-in UV inhibitors prevent fading and discoloration, even under direct sunlight year after year.",
  },
  {
    icon: Sparkles,
    title: "Low Maintenance",
    description: "Smooth gelcoat surface requires minimal upkeep \u2014 no resurfacing or repainting needed.",
  },
  {
    icon: ShieldCheck,
    title: "Corrosion Resistant",
    description: "Engineered to withstand pool chemicals, salt systems, and harsh weather without degradation.",
  },
  {
    icon: Clock,
    title: "Decades of Beauty",
    description: "Colors stay vibrant for 25+ years thanks to advanced gelcoat technology and premium pigments.",
  },
];

/* ────────────────────────────────────────────
   Page Component
   ──────────────────────────────────────────── */

// All hero images from all colors for the background carousel
const allHeroImages = colors.flatMap((c) => [c.hero, ...c.gallery.slice(0, 2)]);

export default function PoolColorsPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [heroBgIndex, setHeroBgIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const active = colors[activeIndex];
  const allColorImages = [active.hero, ...active.gallery];

  // Auto-cycle color section hero image every 4s
  const nextHeroImage = useCallback(() => {
    setHeroImageIndex((prev) => (prev + 1) % allColorImages.length);
  }, [allColorImages.length]);

  useEffect(() => {
    const timer = setInterval(nextHeroImage, 4000);
    return () => clearInterval(timer);
  }, [nextHeroImage]);

  // Auto-cycle page hero background every 5s (independent)
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroBgIndex((prev) => (prev + 1) % allHeroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function handleColorChange(index: number) {
    if (index === activeIndex || isTransitioning) return;
    setIsTransitioning(true);
    setHeroImageIndex(0);
    setTimeout(() => {
      setActiveIndex(index);
      if (galleryRef.current) {
        galleryRef.current.scrollLeft = 0;
      }
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }

  function scrollGallery(direction: "left" | "right") {
    if (!galleryRef.current) return;
    const scrollAmount = 320;
    galleryRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        {allHeroImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            className={`object-cover transition-opacity duration-1000 ${
              i === heroBgIndex ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/95 via-[#021526]/85 to-[#021526]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/60 via-transparent to-[#021526]/30" />
        <div className="absolute inset-0 water-caustics opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white/80 font-medium">Pool Colors</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Palette size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Color Palette
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">Fiberglass Pool </span>
              <span className="shimmer-text">Colors</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-2xl">
              Choose from four stunning gelcoat finishes. Each color is
              UV-stabilized, corrosion-resistant, and engineered to last decades.
            </p>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
              >
                Free Estimate
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+16143845081"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-white font-semibold hover:bg-white/[0.12] transition-all text-sm"
              >
                <Phone size={16} />
                (614) 384-5081
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Color Selector ── */}
      <section className="py-16 sm:py-24 bg-[#021526]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Choose Your Finish
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                Explore Our{" "}
                <span className="shimmer-text">Color Options</span>
              </h2>
              <p className="text-white/45 text-lg leading-relaxed">
                Click a color below to preview how it transforms your pool.
                Each finish is available on every pool model in our collection.
              </p>
            </div>
          </ScrollReveal>

          {/* Color Tab Buttons */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-10">
              {colors.map((color, i) => (
                <button
                  key={color.id}
                  onClick={() => handleColorChange(i)}
                  className={`group relative flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? "bg-white/[0.12] border-accent/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                      : "bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15]"
                  }`}
                >
                  {/* Swatch circle */}
                  <span
                    className={`w-6 h-6 rounded-full border-2 shrink-0 transition-all duration-300 ${
                      i === activeIndex
                        ? "border-accent scale-110 shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                        : "border-white/20 group-hover:border-white/40"
                    }`}
                    style={{ backgroundColor: color.swatch }}
                  />
                  <span
                    className={`font-semibold text-sm transition-colors ${
                      i === activeIndex ? "text-white" : "text-white/50 group-hover:text-white/70"
                    }`}
                  >
                    {color.name}
                  </span>
                  {/* Active indicator dot */}
                  {i === activeIndex && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Active Color Display */}
          <div
            className={`transition-all duration-300 ease-in-out ${
              isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Hero Image + Info */}
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 mb-8">
              {/* Main Image */}
              <div className="lg:col-span-3 relative">
                <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-primary/20 blur-xl opacity-50" />
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] shadow-2xl">
                  <div className="relative w-full aspect-[4/3]">
                    {allColorImages.map((src, i) => (
                      <Image
                        key={src}
                        src={src}
                        alt={`${active.name} fiberglass pool - photo ${i + 1}`}
                        fill
                        className={`object-cover transition-opacity duration-1000 ${
                          i === heroImageIndex ? "opacity-100" : "opacity-0"
                        }`}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority={i === 0}
                      />
                    ))}
                  </div>
                  {/* Overlay gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
                  {/* Tagline badge on image */}
                  <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 glass rounded-full px-4 py-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: active.swatch }}
                    />
                    <span className="text-white/90 text-sm font-medium">
                      {active.tagline}
                    </span>
                  </div>
                </div>
              </div>

              {/* Color Info Panel */}
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full">
                  {/* Color swatch bar */}
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl shadow-lg border border-white/10"
                      style={{ backgroundColor: active.swatch }}
                    />
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white">
                        {active.name}
                      </h3>
                      <p className="text-accent text-sm font-semibold uppercase tracking-wider">
                        {active.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="text-white/50 text-base leading-relaxed mb-6">
                    {active.description}
                  </p>

                  {/* Color properties */}
                  <div className="space-y-3 mb-6">
                    {[
                      "UV-Stabilized Finish",
                      "Corrosion & Chemical Resistant",
                      "25+ Year Color Retention",
                      "Available on All Models",
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        </div>
                        <span className="text-white/60 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Finish type badge */}
                  <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Layers size={14} className="text-accent" />
                      <span className="text-white/70 text-xs font-semibold uppercase tracking-wider">
                        Finish Type
                      </span>
                    </div>
                    <p className="text-white font-semibold text-sm">
                      {active.id === "blue-lagoon" || active.id === "granite"
                        ? "Iridium Finish"
                        : "Standard Finish"}
                    </p>
                    <p className="text-white/40 text-xs mt-0.5">
                      {active.id === "blue-lagoon" || active.id === "granite"
                        ? "Premium solid surface with oven-cured colored chips"
                        : "NPG/ISO-based UV-stabilized gelcoat"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal Gallery */}
            <div className="relative">
              {/* Gallery navigation arrows */}
              <button
                onClick={() => scrollGallery("left")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all cursor-pointer"
                aria-label="Scroll gallery left"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scrollGallery("right")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-black/70 transition-all cursor-pointer"
                aria-label="Scroll gallery right"
              >
                <ChevronRight size={18} />
              </button>

              <div
                ref={galleryRef}
                className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {active.gallery.map((src, i) => (
                  <div
                    key={`${active.id}-${i}`}
                    className="shrink-0 snap-start first:ml-0"
                  >
                    <div className="group relative w-[280px] sm:w-[320px] rounded-xl overflow-hidden border border-white/[0.08] hover:border-accent/30 transition-all duration-500">
                      <Image
                        src={src}
                        alt={`${active.name} pool example ${i + 1}`}
                        width={768}
                        height={576}
                        className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="320px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Color Benefits ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Quality & Durability
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Built to Last,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Built to Shine
                </span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                Every gelcoat finish is precision-engineered to deliver
                beauty and performance that stands the test of time.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={(Math.min(i + 1, 3)) as 1 | 2 | 3}>
                <div className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6 sm:p-7 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <b.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Finish Types ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#021526] via-[#042a45] to-[#063554]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <Layers size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Finish Technology
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                Two Premium{" "}
                <span className="shimmer-text">Finish Types</span>
              </h2>
              <p className="text-white/45 text-lg leading-relaxed">
                Depending on the color you choose, your pool will feature one of
                two advanced finish systems, each engineered for exceptional
                longevity.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5 sm:gap-6">
            {/* Standard Finish */}
            <ScrollReveal direction="left">
              <div className="group relative bg-white/[0.04] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-7 sm:p-9 h-full hover:bg-white/[0.07] transition-all duration-500">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/10 to-transparent rounded-bl-[3rem] rounded-tr-2xl pointer-events-none" />

                <div className="relative">
                  {/* Color swatches */}
                  <div className="flex items-center gap-2 mb-6">
                    <span
                      className="w-8 h-8 rounded-lg border border-white/15 shadow-md"
                      style={{ backgroundColor: "#e7e5e4" }}
                      title="White"
                    />
                    <span
                      className="w-8 h-8 rounded-lg border border-white/15 shadow-md"
                      style={{ backgroundColor: "#7dd3fc" }}
                      title="Sully Blue"
                    />
                    <span className="text-white/30 text-xs font-medium ml-2">
                      White &amp; Sully Blue
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Standard Finish
                  </h3>
                  <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-5">
                    NPG/ISO-Based Gelcoat
                  </p>

                  <p className="text-white/50 leading-relaxed mb-6">
                    Our standard finish uses a high-quality NPG/ISO-based gelcoat
                    that is UV-stabilized and corrosion-resistant from day one.
                    This proven formulation has protected fiberglass pools for
                    decades.
                  </p>

                  <div className="space-y-3">
                    {[
                      "UV-stabilized pigments",
                      "Chemical & corrosion resistant",
                      "Smooth, easy-to-clean surface",
                      "Pools with this finish are well over 25 years old",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        </div>
                        <span className="text-white/55 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Iridium Finish */}
            <ScrollReveal direction="right">
              <div className="group relative bg-white/[0.04] border border-accent/15 rounded-2xl sm:rounded-3xl p-7 sm:p-9 h-full hover:bg-white/[0.07] hover:border-accent/25 transition-all duration-500">
                {/* Premium badge */}
                <div className="absolute -top-3 right-6 inline-flex items-center gap-1.5 bg-gradient-to-r from-accent to-accent-light text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg shadow-accent/20">
                  <Sparkles size={12} />
                  Premium
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/15 to-transparent rounded-bl-[3rem] rounded-tr-2xl pointer-events-none" />

                <div className="relative">
                  {/* Color swatches */}
                  <div className="flex items-center gap-2 mb-6">
                    <span
                      className="w-8 h-8 rounded-lg border border-white/15 shadow-md"
                      style={{ backgroundColor: "#2563eb" }}
                      title="Blue Lagoon"
                    />
                    <span
                      className="w-8 h-8 rounded-lg border border-white/15 shadow-md"
                      style={{ backgroundColor: "#57534e" }}
                      title="Granite"
                    />
                    <span className="text-white/30 text-xs font-medium ml-2">
                      Blue Lagoon &amp; Granite
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Iridium Finish
                  </h3>
                  <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-5">
                    Solid Surface Material
                  </p>

                  <p className="text-white/50 leading-relaxed mb-6">
                    The Iridium finish is a premium solid surface material
                    featuring oven-cured colored chips suspended in a UV and
                    chemical-resistant resin. This advanced system is backed by a
                    color-matched gelcoat barrier coat for unmatched depth and
                    durability.
                  </p>

                  <div className="space-y-3">
                    {[
                      "Oven-cured colored chips in resin",
                      "UV & chemical-resistant formulation",
                      "Color-matched gelcoat barrier coat",
                      "Premium depth and visual richness",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        </div>
                        <span className="text-white/55 text-sm leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── CTA ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[380px] flex items-center">
              <Image
                src="https://maximapools.com/wp-content/uploads/2025/01/Venetian-4.jpg"
                alt="Premium fiberglass pool"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/95 via-[#021526]/85 to-[#021526]/50" />
              <div className="absolute inset-0 water-caustics opacity-10" />

              <div className="relative px-8 sm:px-12 lg:px-16 py-16 sm:py-20">
                <div className="max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                    Find Your Perfect{" "}
                    <span className="shimmer-text">Color</span>
                  </h2>
                  <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                    Not sure which gelcoat finish is right for your backyard?
                    Our team will help you choose the perfect color to match
                    your landscape and style.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                    >
                      Get a Free Estimate
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href="tel:+16143845081"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      <Phone size={18} />
                      (614) 384-5081
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
