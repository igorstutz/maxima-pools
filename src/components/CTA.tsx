"use client";

import Link from "next/link";
import Image from "@/components/Image";
import { ArrowRight, Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import home from "@/content/pages/home.json";

const cta = home.finalCta;

// Lucide icons referenced by name from the editable content file.
const infoIcons = { Phone, MapPin, Clock } as const;

export function CTA() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[520px] sm:min-h-[560px] flex items-center">
            {/* Background image */}
            <Image
              src={cta.backgroundImage}
              alt={cta.backgroundImageAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/80 to-transparent" />
            <div className="absolute inset-0 water-caustics opacity-10" />

            {/* Content */}
            <div className="relative w-full px-8 sm:px-12 lg:px-16 py-14 sm:py-16">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* Left — headline + CTAs */}
                <div className="lg:col-span-7">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
                    {cta.headingLead}
                    <br />
                    <span className="shimmer-text">{cta.headingHighlight}</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-white leading-relaxed mb-10 max-w-lg">
                    {cta.intro}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 *:whitespace-nowrap">
                    <Link
                      href={cta.primaryHref}
                      className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-105 text-sm sm:text-base"
                    >
                      {cta.primaryLabel}
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                    <Link
                      href={cta.simulatorHref}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      <Sparkles size={18} className="text-accent" />
                      {cta.simulatorLabel}
                    </Link>
                    <a
                      href={cta.phoneHref}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm sm:text-base"
                    >
                      <Phone size={18} />
                      {cta.phone}
                    </a>
                  </div>
                </div>

                {/* Right — info cards */}
                <div className="lg:col-span-5 space-y-3">
                  {cta.infoCards.map((item) => {
                    const Icon = infoIcons[item.icon as keyof typeof infoIcons];
                    return (
                      <div
                        key={item.title}
                        className="group flex items-center gap-4 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-5 hover:bg-white/[0.1] transition-all duration-300"
                      >
                        <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/25 transition-colors">
                          {Icon && <Icon size={20} className="text-white" />}
                        </div>
                        <div className="min-w-0">
                          <p className="text-white font-semibold text-sm sm:text-base truncate">
                            {item.detail}
                          </p>
                          <p className="text-white text-xs sm:text-sm truncate">
                            {item.sub}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
