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
      <div className="absolute inset-0 bg-gradient-to-b from-[#021526] via-[#042a45] to-[#063554]" />
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/60 via-transparent to-transparent" />
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
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#021526] via-[#021526]/70 to-[#021526]/20 group-hover:via-[#021526]/60 transition-all duration-500" />

                {/* Content */}
                <div className="relative h-full flex flex-col justify-end p-7 sm:p-8">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                    <service.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed max-w-sm">
                    {service.description}
                  </p>
                  {/* Hover arrow */}
                  <div className="mt-4 overflow-hidden h-0 group-hover:h-8 transition-all duration-500">
                    <Link
                      href="/outdoor-living"
                      className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold"
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
