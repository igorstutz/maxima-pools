"use client";

import { useState } from "react";
import {
  Phone,
  MapPin,
  ClipboardList,
  PenLine,
  Banknote,
  Ruler,
  Wrench,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import content from "@/content/pages/our-process.json";

const stepIcons = {
  Phone,
  MapPin,
  ClipboardList,
  PenLine,
  Banknote,
  Ruler,
  Wrench,
} as const;

const sbs = content.stepByStep;

export function StepByStep() {
  const [active, setActive] = useState(0);
  const steps = sbs.steps;

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-12 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              {sbs.headingLead}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                {sbs.headingHighlight}
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{sbs.intro}</p>
          </div>
        </ScrollReveal>

        {/* Interactive icon row */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 mb-10 sm:mb-12">
            {steps.map((step, i) => {
              const Icon = stepIcons[step.icon as keyof typeof stepIcons] ?? ClipboardList;
              const isActive = i === active;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`${i + 1}. ${step.title}`}
                  aria-pressed={isActive}
                  className="group flex flex-col items-center gap-2 focus:outline-none"
                >
                  <span
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-br from-accent to-accent-light text-white shadow-lg shadow-accent/30 scale-105"
                        : "bg-gray-100 text-gray-400 group-hover:bg-accent/10 group-hover:text-accent"
                    }`}
                  >
                    <Icon size={24} />
                  </span>
                  <span
                    className={`text-xs font-bold transition-colors ${
                      isActive ? "text-accent" : "text-gray-400 group-hover:text-accent"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Detail panel — all steps rendered (active shown) so the text stays in the static HTML */}
        <ScrollReveal>
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-3xl p-8 sm:p-12 text-center shadow-sm">
            {steps.map((step, i) => {
              const Icon = stepIcons[step.icon as keyof typeof stepIcons] ?? ClipboardList;
              return (
                <div key={step.title} className={i === active ? "block" : "hidden"}>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center mx-auto mb-5 shadow-lg shadow-accent/25">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="text-xs font-bold text-accent uppercase tracking-wider mb-2">
                    Step {i + 1} of {steps.length}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed max-w-xl mx-auto">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
