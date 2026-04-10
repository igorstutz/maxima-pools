"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Play } from "lucide-react";
import { useEffect, useState, useCallback } from "react";

const heroPoolImages = [
  { src: "/images/pools/atlantic.jpg", alt: "Atlantic fiberglass pool" },
  { src: "/images/pools/grand-manhattan.png", alt: "Grand Manhattan fiberglass pool" },
  { src: "/images/pools/oasis.jpg", alt: "Oasis fiberglass pool" },
  { src: "/images/pools/venetian.jpg", alt: "Venetian fiberglass pool" },
  { src: "/images/pools/niagara.png", alt: "Niagara fiberglass pool" },
];

const heroTestimonials = [
  { text: "Transformed our backyard into paradise!", author: "Sarah M.", location: "Columbus" },
  { text: "Best investment we've made in our home.", author: "James & Linda T.", location: "Delaware" },
  { text: "Expertise and transparency from start to finish.", author: "Michael R.", location: "Franklin County" },
];

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
    <section className="relative min-h-screen lg:h-svh lg:max-h-screen flex items-center overflow-hidden">
      {/* Background pool images — synced with card carousel */}
      {heroPoolImages.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt=""
          fill
          className={`object-cover transition-opacity duration-1000 ${
            i === activeImage ? "opacity-100" : "opacity-0"
          }`}
          priority={i === 0}
          sizes="100vw"
        />
      ))}
      {/* Dark overlay with pool-water tint */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/95 via-[#021526]/85 to-[#021526]/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/80 via-transparent to-[#021526]/40" />

      {/* Water caustics overlay */}
      <div className="absolute inset-0 water-caustics opacity-60" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-24 lg:pb-10 w-full lg:h-full lg:flex lg:items-center">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 xl:gap-8 items-center w-full">
          {/* Text content */}
          <div className="lg:col-span-7 xl:col-span-6">
            {/* Badge */}
            <div className="hero-animate hero-animate-1 inline-flex items-center gap-2 glass rounded-full px-4 sm:px-5 py-2 sm:py-2.5 mb-4 sm:mb-6 lg:mb-3 xl:mb-5">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={12} className="text-gold fill-gold" />
                ))}
              </div>
              <div className="w-px h-4 bg-white/20" />
              <span className="text-white/90 text-xs sm:text-sm font-medium">
                Authorized San Juan Pools Dealer
              </span>
            </div>

            {/* Headline */}
            <h1 className="hero-animate hero-animate-2 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-[1.08] mb-3 sm:mb-5 lg:mb-3 xl:mb-5 tracking-tight">
              Dive into
              <br />
              <span className="shimmer-text">Luxury</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-animate hero-animate-3 text-base sm:text-lg md:text-xl lg:text-base xl:text-lg text-white/70 leading-relaxed mb-5 sm:mb-8 lg:mb-5 xl:mb-7 max-w-lg">
              Premium fiberglass pools and custom outdoor living spaces, crafted
              and installed by Columbus&apos;s most trusted pool experts.
            </p>

            {/* CTAs */}
            <div className="hero-animate hero-animate-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/free-estimate"
                className="group relative inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 lg:py-3 xl:py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-105 text-sm sm:text-base lg:text-sm xl:text-base"
              >
                <span className="relative z-10">Get Your Free Estimate</span>
                <ArrowRight
                  size={18}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link
                href="/fiberglass-pool-gallery"
                className="group inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 lg:py-3 xl:py-3.5 glass rounded-full text-white font-semibold hover:bg-white/15 transition-all duration-300 text-sm sm:text-base lg:text-sm xl:text-base"
              >
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors shrink-0">
                  <Play size={14} className="text-white ml-0.5 sm:hidden" />
                  <Play size={16} className="text-white ml-0.5 hidden sm:block" />
                </div>
                Explore Our Pools
              </Link>
            </div>

            {/* Stats bar */}
            <div className="hero-animate hero-animate-5 mt-8 sm:mt-12 lg:mt-6 xl:mt-10 flex items-center gap-5 sm:gap-8 lg:gap-6 xl:gap-10">
              <div className="group">
                <div className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  100<span className="text-accent">%</span>
                </div>
                <div className="text-xs sm:text-sm text-white/50 font-medium">
                  Hand-Laid
                  <br />
                  Fiberglass
                </div>
              </div>
              <div className="w-px h-10 sm:h-14 bg-white/10" />
              <div className="group">
                <div className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  50<span className="text-accent">+</span>
                </div>
                <div className="text-xs sm:text-sm text-white/50 font-medium">
                  Pool
                  <br />
                  Models
                </div>
              </div>
              <div className="w-px h-10 sm:h-14 bg-white/10" />
              <div className="group">
                <div className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-white mb-1 group-hover:text-accent transition-colors">
                  #1
                </div>
                <div className="text-xs sm:text-sm text-white/50 font-medium">
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
