"use client";

import { Star, Quote } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    name: "Sarah M.",
    location: "Columbus, OH",
    text: "Maxima Pools transformed our backyard into an absolute paradise. The installation was seamless and the quality of the fiberglass pool is outstanding. Couldn't be happier with the results!",
    rating: 5,
    initials: "SM",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    name: "James & Linda T.",
    location: "Delaware, OH",
    text: "From start to finish, the Maxima team was professional, communicative, and delivered exactly what they promised. Our San Juan pool is the best investment we've made in our home.",
    rating: 5,
    initials: "JL",
    gradient: "from-teal-400 to-cyan-500",
  },
  {
    name: "Michael R.",
    location: "Franklin County",
    text: "We compared several pool installers and Maxima stood out for their expertise and transparency. The concrete patio work combined with the pool installation was flawless.",
    rating: 5,
    initials: "MR",
    gradient: "from-blue-400 to-indigo-500",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#031c30] via-[#063554] to-[#082f49]" />
      <div className="absolute inset-0 water-caustics opacity-50" />

      {/* Decorative orbs */}
      <div className="absolute top-0 right-[20%] w-80 h-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 left-[10%] w-96 h-96 rounded-full bg-primary-light/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16">
            <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Loved by{" "}
              <span className="shimmer-text">Families</span>
            </h2>
            <p className="text-lg text-white/50 leading-relaxed max-w-2xl">
              Don&apos;t just take our word for it — hear what Columbus-area
              homeowners have to say about their experience.
            </p>
          </div>
        </ScrollReveal>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={((index + 1) as 1 | 2 | 3)}>
              <div className="group relative h-full">
                {/* Glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-b from-accent/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />

                <div className="relative h-full glass rounded-3xl p-8 hover:bg-white/10 transition-all duration-500">
                  {/* Quote icon */}
                  <Quote
                    size={40}
                    className="text-accent/20 mb-6"
                  />

                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="text-gold fill-gold"
                      />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-white/80 leading-relaxed mb-8 text-[15px]">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 mt-auto">
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white font-bold text-sm">
                        {t.initials}
                      </span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {t.name}
                      </p>
                      <p className="text-white/40 text-xs">{t.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Trust badges */}
        <ScrollReveal>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {[
              "Google 5-Star Rated",
              "San Juan Authorized",
              "Licensed & Insured",
              "Family Owned",
            ].map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 text-white/30"
              >
                <div className="w-2 h-2 rounded-full bg-accent/50" />
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
