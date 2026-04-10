"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Maximize2 } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const sizes = [
  {
    category: "Small",
    area: "Up to 300 sq ft",
    description:
      "Compact pools ideal for smaller backyards or less maintenance. Perfect cozy retreats that still deliver the full pool experience.",
    dimensions: ["9'x17'", "9'x21'", "10'x16'", "10'x20'", "11'x20'", "12'x25'"],
    image: "/images/pools/monte-carlo.png",
    accent: "text-sky-500",
    accentBg: "bg-sky-500",
    tag: "bg-sky-50 text-sky-600 border-sky-100",
  },
  {
    category: "Medium",
    area: "300–500 sq ft",
    description:
      "The perfect balance of space and practicality. Room for fun with the whole family — the most popular size range among our customers.",
    dimensions: ["10'x40'", "14'x27'", "14'x30'", "14'x32'", "15'x35'"],
    image: "/images/pools/oasis.jpg",
    featured: true,
    accent: "text-accent",
    accentBg: "bg-accent",
    tag: "bg-accent/10 text-accent-dark border-accent/20",
  },
  {
    category: "Large",
    area: "500+ sq ft",
    description:
      "Transform your backyard into an entertainment center. Spacious swim areas with room for tanning ledges, benches, and attached spas.",
    dimensions: ["14'x37'", "15'x40'", "16'x35'", "16'x38'", "16'x45'"],
    image: "/images/pools/clear-water-beach.png",
    accent: "text-teal-500",
    accentBg: "bg-teal-500",
    tag: "bg-teal-50 text-teal-600 border-teal-100",
  },
];

export function PoolSizes() {
  return (
    <section className="relative py-20 sm:py-28 bg-gray-50 overflow-hidden texture-noise">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Dimensions
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-5">
              Pool Sizes for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Every Yard
              </span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              From compact plunge pools to expansive family retreats, find the
              perfect size for your space.
            </p>
          </div>
        </ScrollReveal>

        {/* Size cards */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-5">
          {sizes.map((size, index) => (
            <ScrollReveal key={size.category} delay={((index + 1) as 1 | 2 | 3)}>
              <div
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border h-full flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  size.featured
                    ? "border-accent/30 shadow-lg ring-1 ring-accent/10"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                {/* Featured badge */}
                {size.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-accent to-accent-light text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Most Popular
                  </div>
                )}

                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={size.image}
                    alt={`${size.category} size pool`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                  {/* Size overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-md">
                      <div className="flex items-center gap-2">
                        <Maximize2 size={14} className={size.accent} />
                        <span className="text-sm font-bold text-gray-900">{size.area}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {size.category}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {size.description}
                  </p>

                  {/* Dimensions */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      Available Sizes
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {size.dimensions.map((dim) => (
                        <span
                          key={dim}
                          className={`text-xs font-semibold px-3 py-1.5 rounded-lg border ${size.tag}`}
                        >
                          {dim}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-gray-500">
              Not sure which size is right? We&apos;ll help you decide.
            </p>
            <Link
              href="/free-estimate"
              className="group inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
            >
              Get a Free Consultation
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
