"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Ruler, Layers, Droplets } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const featuredPool = {
  name: "Atlantic",
  description:
    "One of our most popular swimming pools, the Atlantic features a conservative free-form layout with a traditional shallow-to-deep end design. The spacious swim area, built-in bench seating, and generous tanning ledge make it ideal for both relaxation and entertaining.",
  shape: "Free-form",
  size: "16' x 35'",
  depth: "3'6\" - 6'5\"",
  image: "/images/pools/atlantic.jpg",
};

const pools = [
  {
    name: "Grand Manhattan",
    shape: "Rectangle",
    size: "14' x 32'",
    image: "/images/pools/grand-manhattan.png",
    span: "lg:col-span-4 lg:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    name: "Costa Azul",
    shape: "Free-form",
    size: "15' x 35'",
    image: "/images/pools/costa-azul.jpg",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    name: "Venetian",
    shape: "Roman",
    size: "14' x 30'",
    image: "/images/pools/venetian.jpg",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    name: "Oasis",
    shape: "Free-form",
    size: "16' x 38'",
    image: "/images/pools/oasis.jpg",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
  {
    name: "Great Lakes",
    shape: "Rectangle",
    size: "14' x 27'",
    image: "/images/pools/great-lakes.jpg",
    span: "lg:col-span-4",
    aspect: "aspect-[4/3]",
  },
];

export function FeaturedPools() {
  return (
    <section className="relative py-20 sm:py-28 bg-gray-50 overflow-hidden texture-noise">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-accent/[0.04] rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 sm:mb-16">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Our Collection
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">
                Explore Pool{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Designs
                </span>
              </h2>
              <p className="text-lg text-gray-500 max-w-xl">
                Find the shape that fits your backyard — built by San Juan
                Pools, installed by Maxima.
              </p>
            </div>
            <Link
              href="/pools"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-primary-dark text-white rounded-full font-semibold hover:bg-primary transition-colors shrink-0 shadow-lg shadow-primary-dark/20 text-sm"
            >
              View All 50+ Models
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </ScrollReveal>

        {/* Featured pool — hero card */}
        <ScrollReveal className="mb-5">
          <Link
            href={`/pools/${featuredPool.name.toLowerCase()}`}
            className="group block relative rounded-3xl overflow-hidden bg-gray-900"
          >
            <div className="grid lg:grid-cols-2">
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src={featuredPool.image}
                  alt={`${featuredPool.name} fiberglass pool`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-gray-900/90 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent lg:hidden" />
                {/* Shape badge */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-bold text-primary-dark shadow-lg">
                  Most Popular
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8 sm:p-10 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-900 to-[#0c1a2e]">
                <div className="inline-flex items-center gap-1.5 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                  <Droplets size={14} />
                  Featured Model
                </div>
                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
                  {featuredPool.name}
                </h3>
                <p className="text-white/55 leading-relaxed mb-8 max-w-md">
                  {featuredPool.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-white/[0.06] border border-white/10 rounded-xl p-4 text-center">
                    <Layers size={18} className="text-accent mx-auto mb-2" />
                    <p className="text-white font-bold text-sm">{featuredPool.shape}</p>
                    <p className="text-white/40 text-xs mt-0.5">Shape</p>
                  </div>
                  <div className="bg-white/[0.06] border border-white/10 rounded-xl p-4 text-center">
                    <Ruler size={18} className="text-accent mx-auto mb-2" />
                    <p className="text-white font-bold text-sm">{featuredPool.size}</p>
                    <p className="text-white/40 text-xs mt-0.5">Size</p>
                  </div>
                  <div className="bg-white/[0.06] border border-white/10 rounded-xl p-4 text-center">
                    <Droplets size={18} className="text-accent mx-auto mb-2" />
                    <p className="text-white font-bold text-sm">{featuredPool.depth}</p>
                    <p className="text-white/40 text-xs mt-0.5">Depth</p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm group-hover:gap-3 transition-all">
                  View Full Details
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </Link>
        </ScrollReveal>

        {/* Bento grid — remaining pools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {pools.map((pool, index) => (
            <ScrollReveal
              key={pool.name}
              className={`sm:col-span-1 ${pool.span}`}
              delay={((index % 3) + 1) as 1 | 2 | 3}
            >
              <Link
                href={`/pools/${pool.name.toLowerCase().replace(/ /g, "-")}`}
                className="group block relative rounded-2xl sm:rounded-3xl overflow-hidden h-full"
              >
                <div className={`relative ${pool.aspect} h-full min-h-[260px]`}>
                  <Image
                    src={pool.image}
                    alt={`${pool.name} fiberglass pool`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent group-hover:via-gray-900/40 transition-all duration-500" />

                  {/* Shape badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-primary-dark">
                    {pool.shape}
                  </div>

                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className="flex items-end justify-between gap-3">
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-accent transition-colors duration-300">
                          {pool.name}
                        </h3>
                        <p className="text-white/50 text-sm">{pool.size}</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:border-accent transition-all duration-300">
                        <ArrowUpRight
                          size={16}
                          className="text-white/70 group-hover:text-white transition-colors"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
