"use client";

import Link from "next/link";
import Image from "@/components/Image";
import { Star, Play, Sparkles } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { asset } from "@/lib/base-path";
import home from "@/content/pages/home.json";

const hero = home.hero;
const heroPoolImages = hero.poolImages;
const heroTestimonials = hero.testimonials;

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextImage = useCallback(() => {
    setActiveImage((prev) => (prev + 1) % heroPoolImages.length);
  }, []);

  const nextTestimonial = useCallback(() => {
    setActiveTestimonial((prev) => (prev + 1) % heroTestimonials.length);
  }, []);

  useEffect(() => {
    const imgInterval = setInterval(nextImage, 4000);
    const testInterval = setInterval(nextTestimonial, 5000);
    return () => {
      clearInterval(imgInterval);
      clearInterval(testInterval);
    };
  }, [nextImage, nextTestimonial]);

  return (
    <section className="relative min-h-[88vh] sm:min-h-[90vh] lg:h-svh lg:max-h-screen lg:flex lg:items-center overflow-hidden">
      {/* Background pool video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={asset("/images/pools/atlantic.jpg")}
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={asset("/videos/pool-background-video.mp4")} type="video/mp4" />
      </video>
      {/* Left-to-right gradient: solid navy fading to transparent so the pool image shows on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/70 to-transparent" />
      {/* Vertical: navy at top, warm golden reflection at bottom (sunset on water) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#D4A853]/15 via-transparent to-[#0c4a6e]/20" />
      {/* Warm sunset glow radiating from bottom-right corner */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(212,168,83,0.22),transparent_60%)] mix-blend-screen" />
      {/* Warm sunrise glow on top-left to break up the cold navy area */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(212,168,83,0.28),transparent_55%)] mix-blend-screen" />

      {/* Water caustics overlay */}
      <div className="absolute inset-0 water-caustics opacity-60" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-28 lg:pb-20 w-full lg:h-full lg:flex lg:items-center">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-6 xl:gap-8 items-center w-full">
          {/* Text content */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Badge */}
            <div className="hero-animate hero-animate-1 inline-flex items-center gap-2 glass rounded-full px-4 sm:px-5 py-2 sm:py-2.5 lg:py-1.5 mb-3 sm:mb-6 lg:mb-2 xl:mb-5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
              </div>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-white text-xs sm:text-sm lg:text-xs font-medium">
                {hero.badge}
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-animate hero-animate-2 text-4xl sm:text-5xl md:text-6xl lg:text-[1.5rem] xl:text-7xl 2xl:text-8xl font-bold text-white leading-[1.05] lg:leading-[1] mb-2 sm:mb-5 lg:mb-1 xl:mb-5 tracking-tight">
              {hero.headingLead}
              <br />
              <span className="shimmer-text">{hero.headingHighlight}</span>
            </h1>

            {/* Slogan */}
            <p className="hero-animate hero-animate-2 text-xl sm:text-2xl md:text-3xl lg:text-base xl:text-3xl font-semibold text-white mb-2 sm:mb-5 lg:mb-1.5 xl:mb-5 italic">
              Live Your <span className="text-[#D4A853]">Maxima</span>zing Pool Life!
            </p>

            {/* Subtitle */}
            <p className="hero-animate hero-animate-3 text-base sm:text-lg md:text-xl lg:text-xs xl:text-lg text-white leading-snug lg:leading-snug mb-4 sm:mb-8 lg:mb-2.5 xl:mb-7 max-w-lg lg:max-w-md">
              {hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 lg:gap-2.5 xl:gap-4 *:whitespace-nowrap">
              <Link
                href={hero.simulatorHref}
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 lg:px-5 xl:px-8 py-3 sm:py-3.5 lg:py-2 xl:py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-105 transition-all duration-300 text-sm sm:text-base lg:text-xs xl:text-base"
              >
                <Sparkles size={18} className="text-white" />
                {hero.simulatorLabel}
              </Link>
              <Link
                href={hero.galleryHref}
                className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 lg:px-4 xl:px-8 py-3 sm:py-3.5 lg:py-1.5 xl:py-3.5 glass rounded-full text-white font-semibold hover:bg-white/15 transition-all duration-300 text-sm sm:text-base lg:text-xs xl:text-base"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-7 lg:h-7 xl:w-10 xl:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0">
                  <Play size={14} className="text-white ml-0.5 sm:hidden" />
                  <Play size={16} className="text-white ml-0.5 hidden sm:block lg:hidden xl:block" />
                  <Play size={12} className="text-white ml-0.5 hidden lg:block xl:hidden" />
                </div>
                {hero.galleryLabel}
              </Link>
            </div>

            {/* Stats bar */}
            <div className="hero-animate hero-animate-5 mt-4 sm:mt-8 lg:mt-2.5 xl:mt-6 flex items-center gap-5 sm:gap-8 lg:gap-5 xl:gap-10">
              <div className="group">
                <div className="text-2xl sm:text-3xl lg:text-lg xl:text-3xl 2xl:text-4xl font-bold text-white mb-0.5 lg:mb-0 group-hover:text-accent transition-colors">
                  100<span className="text-accent">%</span>
                </div>
                <div className="text-xs sm:text-sm lg:text-[10px] xl:text-sm text-white font-medium leading-tight">
                  Hand-Laid
                  <br />
                  Fiberglass
                </div>
              </div>
              <div className="w-px h-10 sm:h-14 lg:h-9 xl:h-14 bg-white/10" />
              <div className="group">
                <div className="text-2xl sm:text-3xl lg:text-lg xl:text-3xl 2xl:text-4xl font-bold text-white mb-0.5 lg:mb-0 group-hover:text-accent transition-colors">
                  100<span className="text-accent">+</span>
                </div>
                <div className="text-xs sm:text-sm lg:text-[10px] xl:text-sm text-white font-medium leading-tight">
                  Pool
                  <br />
                  Models
                </div>
              </div>
              <div className="w-px h-10 sm:h-14 lg:h-9 xl:h-14 bg-white/10" />
              <div className="group">
                <div className="text-2xl sm:text-3xl lg:text-lg xl:text-3xl 2xl:text-4xl font-bold text-white mb-0.5 lg:mb-0 group-hover:text-accent transition-colors">
                  #1
                </div>
                <div className="text-xs sm:text-sm lg:text-[10px] xl:text-sm text-white font-medium leading-tight">
                  Rated in
                  <br />
                  Columbus
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual - Right side (desktop only) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 justify-center items-center">
            <div className="relative w-full max-w-[280px] xl:max-w-sm 2xl:max-w-md">
              {/* Glow behind card */}
              <div className="absolute inset-0 bg-accent/20 rounded-[2rem] blur-3xl scale-90 animate-glow" />

              {/* Main pool showcase card */}
              <div className="relative glass rounded-[2rem] overflow-hidden p-2 animate-float">
                <div className="rounded-[1.5rem] overflow-hidden bg-pool-deep/40 aspect-[4/5] xl:aspect-[3/4] relative">
                  {heroPoolImages.map((img, i) => (
                    <Image
                      key={img.src}
                      src={img.src}
                      alt={img.alt}
                      fill
                      className={`object-cover transition-opacity duration-1000 ${
                        i === activeImage ? "opacity-100" : "opacity-0"
                      }`}
                      sizes="(max-width: 1280px) 280px, 380px"
                      priority={i === 0}
                    />
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-t from-pool-deep/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating testimonial card */}
              <div className="absolute -bottom-2 left-0 glass-white rounded-2xl p-4 xl:p-5 shadow-2xl animate-float-delayed max-w-[210px] xl:max-w-[230px]">
                <div className="flex gap-0.5 mb-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={14} className="text-gold fill-gold" />
                  ))}
                </div>
                <div className="relative min-h-[3.5rem]">
                  {heroTestimonials.map((t, i) => (
                    <div
                      key={i}
                      className={`transition-opacity duration-700 ${
                        i === activeTestimonial
                          ? "opacity-100"
                          : "opacity-0 absolute inset-0"
                      }`}
                    >
                      <p className="text-gray-700 text-sm font-medium leading-snug">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <p className="text-gray-400 text-xs mt-2">
                        &mdash; {t.author}, {t.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating San Juan badge */}
              <div className="absolute -top-2 right-0 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl p-3 animate-float shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <Image
                  src="/images/logo/sanjuan-logo.png"
                  alt="San Juan Pools - Best of the Best"
                  width={100}
                  height={100}
                  className="w-20 h-20 xl:w-24 xl:h-24 object-contain drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: "60px" }}
        >
          <path
            d="M0 80L48 74.7C96 69.3 192 58.7 288 53.3C384 48 480 48 576 53.3C672 58.7 768 69.3 864 74.7C960 80 1056 80 1152 74.7C1248 69.3 1344 58.7 1392 53.3L1440 48V120H0Z"
            fill="white"
            fillOpacity="0.05"
          />
          <path
            d="M0 96L48 90.7C96 85.3 192 74.7 288 69.3C384 64 480 64 576 69.3C672 74.7 768 85.3 864 90.7C960 96 1056 96 1152 90.7C1248 85.3 1344 74.7 1392 69.3L1440 64V120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
