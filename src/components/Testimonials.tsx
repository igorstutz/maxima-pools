"use client";

import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import testimonials from "@/content/testimonials.json";

const section = testimonials.section;

// Decorative avatar styling kept in code (not editable content). Falls back
// by index if more reviews are added than styles defined.
const avatarGradients = [
  "from-cyan-400 to-blue-500",
  "from-teal-400 to-cyan-500",
  "from-blue-400 to-indigo-500",
  "from-accent to-accent-dark",
];

function initialsFromName(name: string): string {
  const parts = name.replace(/[^A-Za-z ]/g, "").trim().split(/\s+/);
  const first = parts[0]?.[0] ?? "";
  const second = parts[1]?.[0] ?? "";
  return (first + second).toUpperCase();
}

const reviews = testimonials.reviews.map((r, i) => ({
  ...r,
  initials: initialsFromName(r.name),
  gradient: avatarGradients[i % avatarGradients.length],
}));

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {section.badge}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
              {section.headingLead}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {section.headingHighlight}
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              {section.intro}
            </p>
          </div>
        </ScrollReveal>

        {/* Google badge + Reviews grid */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Google badge card */}
          <ScrollReveal className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center">
              <p className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">
                {section.excellentLabel}
              </p>
              <div className="flex justify-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs text-gray-400 mb-4">
                {section.basedOnLabel} <span className="font-semibold text-gray-600">Google Reviews</span>
              </p>
              <div className="flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-sm font-semibold text-gray-500">Google</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Review cards */}
          <div className="lg:col-span-9 grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={((i % 3 === 0 ? 1 : i % 3 === 1 ? 2 : 3) as 1 | 2 | 3)}>
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 h-full flex flex-col hover:shadow-md hover:border-gray-200 transition-all duration-300">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${review.gradient} flex items-center justify-center shrink-0 shadow-sm`}
                    >
                      <span className="text-white font-bold text-xs">
                        {review.initials}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-900 truncate">
                        {review.name}
                      </p>
                      <p className="text-xs text-gray-400">{review.date}</p>
                    </div>
                    {/* Google icon */}
                    <svg viewBox="0 0 24 24" className="w-5 h-5 ml-auto shrink-0" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                  </div>

                  {/* Stars */}
                  <StarRating count={review.rating} />

                  {/* Text */}
                  <p className="text-sm text-gray-600 leading-relaxed mt-3 flex-1 line-clamp-4">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Location */}
                  <p className="text-xs text-gray-400 mt-3 pt-3 border-t border-gray-50">
                    {review.location}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* CTA to reviews page */}
        <ScrollReveal>
          <div className="mt-12 flex justify-center">
            <Link
              href="/reviews"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300 text-sm"
            >
              {section.ctaLabel}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </ScrollReveal>

        {/* Bottom trust bar */}
        <ScrollReveal>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {section.trustBar.map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-gray-400">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                <span className="text-xs font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
