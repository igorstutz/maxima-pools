"use client";

import Link from "next/link";
import Image from "@/components/Image";
import { ArrowRight, Flame, UtensilsCrossed, Lamp, TreePine } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Outdoor Kitchens",
    description:
      "Custom-built kitchens with grills, countertops, sinks, and pizza ovens for the ultimate entertaining space.",
    image: "/images/outdoor/kitchen.jpg",
  },
  {
    icon: Flame,
    title: "Fire Features",
    description:
      "Fire pits and seating walls that extend your outdoor season and create an inviting atmosphere year-round.",
    image: "/images/outdoor/living-1.jpg",
  },
  {
    icon: Lamp,
    title: "Shelters & Shade",
    description:
      "Pergolas, pavilions, and gazebos that provide comfortable shade and define your outdoor rooms.",
    image: "/images/outdoor/shade.jpg",
  },
];

export function OutdoorLiving() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
      <div className="absolute inset-0 water-caustics opacity-15" />

      {/* Decorative orbs */}
      <div className="absolute top-0 right-[20%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] rounded-full bg-primary-light/8 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row — header + hero image */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14 sm:mb-20">
          {/* Text */}
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <TreePine size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Beyond the Pool
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
                Complete Outdoor{" "}
                <span className="shimmer-text">Living</span>
              </h2>
              <p className="text-lg text-white/55 leading-relaxed mb-8 max-w-lg">
                Your pool is just the beginning. We design and build complete
                backyard retreats — from custom patios and outdoor kitchens to
                fire features and shade structures.
              </p>
              <Link
                href="/outdoor-living"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 text-sm"
              >
                Explore Outdoor Living
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </ScrollReveal>

          {/* Hero image — grill area */}
          <ScrollReveal direction="right">
            <div className="relative">
              <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/images/outdoor/grill.jpg"
                  alt="Luxury outdoor entertaining area with grill"
                  width={800}
                  height={500}
                  className="w-full aspect-[16/10] object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                {/* Floating label */}
                <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2.5">
                  <p className="text-white font-semibold text-sm">Complete Outdoor Entertainment</p>
                  <p className="text-white/50 text-xs">Designed & built by Maxima</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Service cards — 3 columns */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {services.map((service, index) => (
            <ScrollReveal
              key={service.title}
              delay={((index + 1) as 1 | 2 | 3)}
            >
              <div className="group relative rounded-3xl overflow-hidden h-full min-h-[360px] sm:min-h-[400px]">
                {/* Background image */}
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Light gradient for bottom contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Content — frosted card at bottom */}
                <div className="relative h-full flex flex-col justify-end p-4 sm:p-5">
                  <div className="bg-white/90 backdrop-blur-md rounded-2xl p-5 shadow-lg">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                        <service.icon size={20} className="text-accent" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <Link
                      href="/outdoor-living"
                      className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Learn more
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom stats strip */}
        <ScrollReveal>
          <div className="mt-14 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Outdoor Kitchens", value: "Custom" },
              { label: "Concrete Patios", value: "Stamped" },
              { label: "Fire Features", value: "Gas & Wood" },
              { label: "Shade Structures", value: "Pergolas" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:bg-white/[0.08] transition-colors"
              >
                <p className="text-white font-bold text-lg sm:text-xl mb-1">
                  {item.value}
                </p>
                <p className="text-white/40 text-xs sm:text-sm font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
