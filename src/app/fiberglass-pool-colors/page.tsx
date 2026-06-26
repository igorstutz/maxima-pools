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
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import content from "@/content/pages/fiberglass-pool-colors.json";

const benefitIcons: Record<string, LucideIcon> = { Sun, Sparkles, ShieldCheck, Clock };

const colors = content.colors;

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

  const isIridium = active.id === "blue-lagoon" || active.id === "granite";

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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/60 via-transparent to-[#0c4a6e]/30" />
        <div className="absolute inset-0 water-caustics opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white" />
            <span className="text-white font-medium">Pool Colors</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Palette size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">{content.hero.headingLead}</span>{" "}
              <span className="shimmer-text">{content.hero.headingHighlight}</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white leading-relaxed mb-8 max-w-2xl">
              {content.hero.subtitle}
            </p>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-3 *:whitespace-nowrap">
              <Link
                href={content.hero.primaryHref}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
              >
                {content.hero.primaryLabel}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={content.hero.simulatorHref}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm"
              >
                <Sparkles size={16} className="text-accent" />
                {content.hero.simulatorLabel}
              </Link>
              <a
                href={content.hero.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-white font-semibold hover:bg-white/[0.12] transition-all text-sm"
              >
                <Phone size={16} />
                {content.hero.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Color Selector ── */}
      <section className="py-16 sm:py-24 bg-[#0c4a6e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.selector.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                {content.selector.headingLead}{" "}
                <span className="shimmer-text">{content.selector.headingHighlight}</span>
              </h2>
              <p className="text-white text-lg leading-relaxed">
                {content.selector.intro}
              </p>
            </div>
          </ScrollReveal>

          {/* Color Tab Buttons */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-3 mb-10 *:whitespace-nowrap">
              {colors.map((color, i) => (
                <button
                  key={color.id}
                  onClick={() => handleColorChange(i)}
                  className={`group relative flex items-center gap-3 sm:gap-4 pl-2 pr-5 sm:pr-6 py-2 rounded-full border transition-all duration-300 cursor-pointer ${
                    i === activeIndex
                      ? "bg-white/[0.12] border-accent/50 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                      : "bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.15]"
                  }`}
                >
                  {/* Swatch circle */}
                  <span
                    className={`granite-swatch w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 shrink-0 transition-all duration-300 ${
                      i === activeIndex
                        ? "border-accent scale-110 shadow-[0_0_16px_rgba(6,182,212,0.45)]"
                        : "border-white/20 group-hover:border-white/40"
                    }`}
                    style={{ backgroundColor: color.swatch }}
                  />
                  <span
                    className={`font-semibold text-sm transition-colors ${
                      i === activeIndex ? "text-white" : "text-white group-hover:text-white"
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
                      className="granite-swatch w-3 h-3 rounded-full"
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
                      className="granite-swatch granite-swatch--strong w-14 h-14 rounded-2xl shadow-lg border border-white/10"
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

                  <p className="text-white text-base leading-relaxed mb-6">
                    {active.description}
                  </p>

                  {/* Color properties */}
                  <div className="space-y-3 mb-6">
                    {content.colorFeatures.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        </div>
                        <span className="text-white text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Finish type badge */}
                  <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Layers size={14} className="text-accent" />
                      <span className="text-white text-xs font-semibold uppercase tracking-wider">
                        Finish Type
                      </span>
                    </div>
                    <p className="text-white font-semibold text-sm">
                      {isIridium ? "Iridium Finish" : "Standard Finish"}
                    </p>
                    <p className="text-white text-xs mt-0.5">
                      {isIridium
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
                  {content.benefitsSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.benefitsSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.benefitsSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                {content.benefitsSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {content.benefits.map((b, i) => {
              const Icon = benefitIcons[b.icon];
              return (
                <ScrollReveal key={b.title} delay={(Math.min(i + 1, 3)) as 1 | 2 | 3}>
                  <div className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6 sm:p-7 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                      {Icon && <Icon size={22} className="text-accent" />}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {b.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Finish Types ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <Layers size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.finishSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                {content.finishSection.headingLead}{" "}
                <span className="shimmer-text">{content.finishSection.headingHighlight}</span>
              </h2>
              <p className="text-white text-lg leading-relaxed">
                {content.finishSection.intro}
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
                    {content.finishStandard.swatches.map((sw) => (
                      <span
                        key={sw.title}
                        className="granite-swatch w-8 h-8 rounded-lg border border-white/15 shadow-md"
                        style={{ backgroundColor: sw.color }}
                        title={sw.title}
                      />
                    ))}
                    <span className="text-white text-xs font-medium ml-2">
                      {content.finishStandard.swatchLabel}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {content.finishStandard.title}
                  </h3>
                  <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-5">
                    {content.finishStandard.subtitle}
                  </p>

                  <p className="text-white leading-relaxed mb-6">
                    {content.finishStandard.paragraph}
                  </p>

                  <div className="space-y-3">
                    {content.finishStandard.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        </div>
                        <span className="text-white text-sm leading-relaxed">{item}</span>
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
                  {content.finishIridium.premiumLabel}
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-accent/15 to-transparent rounded-bl-[3rem] rounded-tr-2xl pointer-events-none" />

                <div className="relative">
                  {/* Color swatches */}
                  <div className="flex items-center gap-2 mb-6">
                    {content.finishIridium.swatches.map((sw) => (
                      <span
                        key={sw.title}
                        className="granite-swatch w-8 h-8 rounded-lg border border-white/15 shadow-md"
                        style={{ backgroundColor: sw.color }}
                        title={sw.title}
                      />
                    ))}
                    <span className="text-white text-xs font-medium ml-2">
                      {content.finishIridium.swatchLabel}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    {content.finishIridium.title}
                  </h3>
                  <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-5">
                    {content.finishIridium.subtitle}
                  </p>

                  <p className="text-white leading-relaxed mb-6">
                    {content.finishIridium.paragraph}
                  </p>

                  <div className="space-y-3">
                    {content.finishIridium.items.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center shrink-0 mt-0.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        </div>
                        <span className="text-white text-sm leading-relaxed">{item}</span>
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
                src={content.finalCta.image}
                alt="Premium fiberglass pool"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/80 to-transparent" />
              <div className="absolute inset-0 water-caustics opacity-10" />

              <div className="relative px-8 sm:px-12 lg:px-16 py-16 sm:py-20">
                <div className="max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                    {content.finalCta.headingLead}{" "}
                    <span className="shimmer-text">{content.finalCta.headingHighlight}</span>
                  </h2>
                  <p className="text-lg text-white leading-relaxed mb-10 max-w-lg">
                    {content.finalCta.paragraph}
                  </p>
                  <div className="flex flex-wrap gap-3 *:whitespace-nowrap">
                    <Link
                      href={content.finalCta.primaryHref}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                    >
                      {content.finalCta.primaryLabel}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href={content.finalCta.simulatorHref}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      <Sparkles size={18} className="text-accent" />
                      {content.finalCta.simulatorLabel}
                    </Link>
                    <a
                      href={content.finalCta.phoneHref}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      <Phone size={18} />
                      {content.finalCta.phoneDisplay}
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
