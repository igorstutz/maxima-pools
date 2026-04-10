"use client";

import Image from "next/image";
import {
  Shield,
  Award,
  Wrench,
  HeartHandshake,
  CheckCircle2,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { useEffect, useRef, useState } from "react";

function AnimatedCounter({
  end,
  suffix = "",
  duration = 2000,
}: {
  end: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const highlights = [
  "100% Hand-Laid Fiberglass",
  "Lifetime Structural Warranty",
  "50+ Pool Models Available",
  "Licensed & Fully Insured",
];

export function WhyMaxima() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — left-aligned */}
        <ScrollReveal>
          <div className="max-w-3xl mb-14 sm:mb-20">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 tracking-tight">
              Columbus&apos;s Trusted{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Pool Experts
              </span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              Maxima Pools is a family-owned installer serving Central Ohio.
              Backed by San Juan Pools — the industry leader in fiberglass pool
              quality since 1958.
            </p>
          </div>
        </ScrollReveal>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
          {/* ── Row 1 ── */}

          {/* Card 1 — Hero card with pool image (spans 7) */}
          <ScrollReveal className="md:col-span-2 lg:col-span-7">
            <div className="group relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#031c30] to-[#063554] h-full min-h-[320px] sm:min-h-[380px]">
              <Image
                src="/images/pools/clear-water-beach.png"
                alt="Clear Water Beach pool installation"
                fill
                className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#031c30] via-[#031c30]/60 to-transparent" />
              <div className="relative h-full flex flex-col justify-end p-7 sm:p-9">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/20 flex items-center justify-center">
                    <Award size={24} className="text-accent" />
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                  Authorized San Juan Pools Dealer
                </h3>
                <p className="text-white/60 leading-relaxed max-w-md text-sm sm:text-base">
                  We exclusively offer San Juan fiberglass pools — the strongest,
                  most durable pool shells manufactured in America since 1958.
                </p>
                <div className="flex flex-wrap gap-2 mt-5">
                  {highlights.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 bg-white/[0.08] backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/10"
                    >
                      <CheckCircle2
                        size={12}
                        className="text-accent shrink-0"
                      />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2 — Stats card (spans 5) */}
          <ScrollReveal className="lg:col-span-5" delay={1}>
            <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-9 flex flex-col justify-between h-full min-h-[320px] sm:min-h-[380px]">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                  <Shield size={24} className="text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  Superior Quality Guaranteed
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Every pool backed by industry-leading warranties and built to
                  last a lifetime.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    Pool Models
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1">
                    <AnimatedCounter end={100} suffix="%" />
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    Hand-Laid
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-1">
                    #1
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    In Columbus
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Row 2 ── */}

          {/* Card 3 — Full-Service (spans 4) */}
          <ScrollReveal className="lg:col-span-4" delay={1}>
            <div className="group rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-9 hover:shadow-xl hover:border-gray-200 transition-all duration-500 h-full">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <Wrench size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                Full-Service Installation
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We handle everything from excavation to the finishing touches —
                pool, plumbing, electrical, concrete, and landscaping.
              </p>
              <div className="space-y-2.5">
                {[
                  "Pool Placement",
                  "Plumbing & Electric",
                  "Concrete Patios",
                  "Landscaping",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={12} className="text-accent" />
                    </div>
                    <span className="text-sm text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4 — Family Owned (spans 4) */}
          <ScrollReveal className="lg:col-span-4" delay={2}>
            <div className="group rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-9 hover:shadow-xl hover:border-gray-200 transition-all duration-500 h-full">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-600 flex items-center justify-center mb-6 shadow-lg shadow-sky-500/20 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                <HeartHandshake size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                Family-Owned & Operated
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                We treat every project like it&apos;s our own home. Personalized
                service, transparent pricing, and genuine care.
              </p>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex -space-x-2">
                  {[
                    "from-cyan-400 to-blue-500",
                    "from-teal-400 to-cyan-500",
                    "from-blue-400 to-indigo-500",
                  ].map((g, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${g} border-2 border-white flex items-center justify-center`}
                    >
                      <span className="text-white text-[10px] font-bold">
                        {["SM", "JT", "MR"][i]}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <svg
                        key={i}
                        className="w-3 h-3 text-gold fill-gold"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-0.5">
                    5-star rated by families
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 5 — San Juan Partnership badge (spans 4) */}
          <ScrollReveal className="lg:col-span-4" delay={3}>
            <div className="group rounded-3xl overflow-hidden bg-gradient-to-br from-[#031c30] to-[#063554] p-7 sm:p-9 flex flex-col items-center justify-center text-center h-full relative">
              <div className="absolute inset-0 water-caustics opacity-20" />
              <div className="relative">
                <Image
                  src="/images/logo/sanjuan-logo.png"
                  alt="San Juan Pools - Best of the Best"
                  width={140}
                  height={140}
                  className="w-28 h-28 sm:w-32 sm:h-32 object-contain mx-auto mb-5 drop-shadow-2xl"
                />
                <h3 className="text-lg font-bold text-white mb-2">
                  Best of the Best
                </h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                  Quality Fiberglass Pools since 1958. The strongest pool shells
                  manufactured in America.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
