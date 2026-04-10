"use client";

import Link from "next/link";
import Image from "@/components/Image";
import { ArrowRight, Phone, MapPin, Clock } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

export function CTA() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[520px] sm:min-h-[560px] flex items-center">
            {/* Background image */}
            <Image
              src="/images/pools/clear-water-beach.png"
              alt="Beautiful fiberglass pool at sunset"
              fill
              className="object-cover"
              sizes="100vw"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e]/95 via-[#0c4a6e]/85 to-[#0c4a6e]/60" />
            <div className="absolute inset-0 water-caustics opacity-10" />

            {/* Content */}
            <div className="relative w-full px-8 sm:px-12 lg:px-16 py-14 sm:py-16">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* Left — headline + CTAs */}
                <div className="lg:col-span-7">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
                    Ready to
                    <br />
                    <span className="shimmer-text">Dive In?</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-white/55 leading-relaxed mb-10 max-w-lg">
                    Your dream pool is just one conversation away. Get in touch
                    for a free consultation and estimate — no obligation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-105 text-sm sm:text-base"
                    >
                      Get Your Free Estimate
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                    <a
                      href="tel:+16143845081"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm sm:text-base"
                    >
                      <Phone size={18} />
                      (614) 384-5081
                    </a>
                  </div>
                </div>

                {/* Right — info cards */}
                <div className="lg:col-span-5 space-y-3">
                  {[
                    {
                      icon: Phone,
                      title: "Call Us",
                      detail: "(614) 384-5081",
                      sub: "Mon–Sat, 8am–6pm",
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      detail: "4059 State Route 37 East",
                      sub: "Suite A, Delaware, OH 43015",
                    },
                    {
                      icon: Clock,
                      title: "Free Estimates",
                      detail: "Quick turnaround",
                      sub: "Usually within 48 hours",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="group flex items-center gap-4 bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-4 sm:p-5 hover:bg-white/[0.1] transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/25 transition-colors">
                        <item.icon size={20} className="text-accent" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-white font-semibold text-sm sm:text-base truncate">
                          {item.detail}
                        </p>
                        <p className="text-white/40 text-xs sm:text-sm truncate">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
