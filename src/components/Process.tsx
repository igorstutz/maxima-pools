"use client";

import Image from "@/components/Image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import home from "@/content/pages/home.json";

const process = home.process;

// Per-step gradient kept in code (visual styling, not editable content).
const stepGradients = [
  "from-accent-light to-accent",
  "from-accent to-accent-dark",
  "from-accent-dark to-primary-light",
  "from-primary-light to-primary",
  "from-primary to-primary-dark",
  "from-primary-dark to-primary",
  "from-primary to-accent",
];

const steps = process.steps.map((s, i) => ({
  ...s,
  gradient: stepGradients[i % stepGradients.length],
}));

export function Process() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-16 sm:mb-20">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {process.badge}
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-5">
              {process.headingLead}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {process.headingHighlight}
              </span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
              {process.intro}
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline steps */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <div className="w-full h-full bg-gradient-to-b from-accent/30 via-accent/15 to-accent/5" />
          </div>

          {/* Mobile vertical line */}
          <div className="lg:hidden absolute left-[21px] top-0 bottom-0 w-px">
            <div className="w-full h-full bg-gradient-to-b from-accent/20 via-accent/10 to-transparent" />
          </div>

          <div className="space-y-6 lg:space-y-0">
            {steps.map((item, index) => {
              const isEven = index % 2 === 0;

              return (
                <ScrollReveal key={item.step}>
                  <div className="relative lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:py-10">
                    {/* Timeline dot — desktop */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg border-4 border-white`}
                      >
                        <span className="text-white font-bold text-sm">
                          {item.step}
                        </span>
                      </div>
                    </div>

                    {/* Image side */}
                    <div
                      className={`${isEven ? "lg:order-1" : "lg:order-2"} mb-5 lg:mb-0 pl-12 lg:pl-0`}
                    >
                      <div
                        className={`relative rounded-2xl sm:rounded-3xl overflow-hidden group ${
                          isEven ? "lg:mr-8" : "lg:ml-8"
                        }`}
                      >
                        <div className="aspect-[16/10] relative">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 1024px) 100vw, 45vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent" />
                        </div>
                        {/* Step badge on image */}
                        <div
                          className={`absolute top-4 ${isEven ? "left-4" : "right-4"} bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-gray-900 shadow-md`}
                        >
                          Step {item.step}
                        </div>
                      </div>
                    </div>

                    {/* Content side */}
                    <div
                      className={`pl-12 lg:pl-0 ${isEven ? "lg:order-2 lg:pl-8" : "lg:order-1 lg:pr-8 lg:text-right"}`}
                    >
                      {/* Mobile dot */}
                      <div className="lg:hidden absolute left-0 mt-1">
                        <div
                          className={`w-[42px] h-[42px] rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-md border-[3px] border-white`}
                        >
                          <span className="text-white font-bold text-xs">
                            {item.step}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <ScrollReveal>
          <div className="mt-16 sm:mt-20 text-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 text-sm sm:text-base"
            >
              {process.ctaLabel}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              {process.ctaNote}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
