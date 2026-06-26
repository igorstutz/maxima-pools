"use client";

import Image from "@/components/Image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Maximize2, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import home from "@/content/pages/home.json";

const poolSizes = home.poolSizes;

// Per-category color styling kept in code (visual, not editable content).
const sizeStyles: Record<
  string,
  { accent: string; accentBg: string; tag: string }
> = {
  Small: {
    accent: "text-sky-500",
    accentBg: "bg-sky-500",
    tag: "bg-sky-50 text-sky-600 border-sky-100",
  },
  Medium: {
    accent: "text-accent",
    accentBg: "bg-accent",
    tag: "bg-accent/10 text-accent-dark border-accent/20",
  },
  Large: {
    accent: "text-teal-500",
    accentBg: "bg-teal-500",
    tag: "bg-teal-50 text-teal-600 border-teal-100",
  },
};

const fallbackStyle = sizeStyles.Medium;

const sizes = poolSizes.sizes.map((s) => ({
  ...s,
  ...(sizeStyles[s.category] ?? fallbackStyle),
}));

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
                {poolSizes.badge}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-5">
              {poolSizes.headingLead}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {poolSizes.headingHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              {poolSizes.intro}
            </p>
          </div>
        </ScrollReveal>

        {/* Size cards */}
        <div className="grid lg:grid-cols-3 gap-4 sm:gap-5">
          {sizes.map((size, index) => (
            <ScrollReveal key={size.category} delay={((index + 1) as 1 | 2 | 3)}>
              <Link
                href={`/pools?size=${size.category}`}
                aria-label={`View all ${size.category} pools`}
                className={`group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border h-full flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                  size.featured
                    ? "border-accent/30 shadow-lg ring-1 ring-accent/10"
                    : "border-gray-100 hover:border-gray-200"
                }`}
              >
                {/* Featured badge */}
                {size.featured && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-accent to-accent-light text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {poolSizes.featuredBadge}
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
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {size.category}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-accent flex items-center justify-center shrink-0 transition-colors duration-300">
                      <ArrowUpRight
                        size={16}
                        className="text-gray-400 group-hover:text-white transition-colors"
                      />
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                    {size.description}
                  </p>

                  {/* Dimensions */}
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                      {poolSizes.availableSizesLabel}
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
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <p className="text-gray-500">
              {poolSizes.ctaText}
            </p>
            <Link
              href="/pool-simulator"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300 text-sm"
            >
              <Sparkles size={16} className="group-hover:rotate-12 transition-transform duration-300" />
              {poolSizes.ctaLabel}
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
