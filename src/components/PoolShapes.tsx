"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const shapes = [
  {
    name: "Rectangular",
    description:
      "Clean lines and a timeless choice. Optimal for lap swimming — simple, elegant, and infinitely versatile.",
    models: ["Great Lakes", "Grand Manhattan", "Niagara"],
    image: "/images/pools/great-lakes.jpg",
  },
  {
    name: "Free-form",
    description:
      "Dramatic curves for a natural, modern look. Perfect for informal backyards and creative landscapes.",
    models: ["Atlantic", "Costa Azul", "Oasis"],
    image: "/images/pools/atlantic.jpg",
  },
  {
    name: "Roman",
    description:
      "Inspired by ancient villas — straight edges flanked by graceful arched half-circles at each end.",
    models: ["Venetian", "Monte Carlo"],
    image: "/images/pools/venetian.jpg",
  },
  {
    name: "Kidney",
    description:
      "Sleek, contemporary asymmetry that fits smaller spaces while delivering maximum style.",
    models: ["Vegas", "Dallas"],
    image: "/images/pools/vegas.jpg",
  },
];

export function PoolShapes() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Pool Designs
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-5">
              Find Your Perfect{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Shape
              </span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Every backyard is unique. Choose from four distinct pool shapes,
              each designed to complement different spaces and styles.
            </p>
          </div>
        </ScrollReveal>

        {/* Shapes — horizontal cards */}
        <div className="space-y-4 sm:space-y-5">
          {shapes.map((shape, index) => (
            <ScrollReveal key={shape.name} delay={index < 2 ? ((index + 1) as 1 | 2) : undefined}>
              <Link
                href="/pools"
                className="group block rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="grid md:grid-cols-5 lg:grid-cols-2">
                  {/* Image */}
                  <div className={`relative md:col-span-2 lg:col-span-1 aspect-[16/10] md:aspect-auto md:min-h-[240px] ${index % 2 !== 0 ? "md:order-2" : ""}`}>
                    <Image
                      src={shape.image}
                      alt={`${shape.name} shape fiberglass pool`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content */}
                  <div className={`md:col-span-3 lg:col-span-1 p-7 sm:p-9 lg:p-10 flex flex-col justify-center ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        {shape.name} Shape
                      </span>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {shape.name} Pools
                    </h3>
                    <p className="text-gray-500 leading-relaxed mb-6 max-w-lg">
                      {shape.description}
                    </p>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-2">
                        {shape.models.map((model) => (
                          <span
                            key={model}
                            className="text-xs font-semibold text-gray-500 bg-gray-50 rounded-full px-3 py-1.5 border border-gray-100"
                          >
                            {model}
                          </span>
                        ))}
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-accent flex items-center justify-center shrink-0 transition-colors duration-300">
                        <ArrowUpRight
                          size={16}
                          className="text-gray-400 group-hover:text-white transition-colors"
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
