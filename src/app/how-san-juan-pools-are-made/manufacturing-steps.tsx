"use client";

import { useState } from "react";
import Image from "@/components/Image";
import content from "@/content/pages/how-san-juan-pools-are-made.json";

// Steps are editable via the CMS (how-san-juan-pools-are-made.json → Manufacturing steps).
const steps = content.steps;

export function ManufacturingSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const step = steps[activeStep];

  return (
    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
      {/* Step list */}
      <div className="lg:col-span-2 space-y-2">
        {steps.map((s, i) => {
          const isActive = i === activeStep;
          return (
            <button
              key={s.number}
              onClick={() => setActiveStep(i)}
              className={`w-full text-left flex items-start gap-4 p-4 rounded-xl transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-accent/10 to-transparent border border-accent/20 shadow-md"
                  : "hover:bg-gray-50 border border-transparent"
              }`}
            >
              <span
                className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-br from-accent to-accent-light text-white shadow-lg shadow-accent/25"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {s.number}
              </span>
              <div>
                <p
                  className={`font-bold text-sm transition-colors ${
                    isActive ? "text-primary" : "text-gray-700"
                  }`}
                >
                  {s.title}
                </p>
                {isActive && (
                  <p className="text-sm text-gray-500 leading-relaxed mt-1">
                    {s.description}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Image */}
      <div className="lg:col-span-3">
        <div className="sticky top-32">
          <div className="relative">
            <div className="absolute -inset-3 bg-accent/8 rounded-[2rem] blur-2xl" />
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gray-100">
              {steps.map((s, i) => (
                <Image
                  key={s.number}
                  src={s.image}
                  alt={s.title}
                  fill
                  className={`object-cover transition-opacity duration-700 ${
                    i === activeStep ? "opacity-100" : "opacity-0"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between">
                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                  <span className="text-accent-light font-bold text-sm">
                    Step {step.number}
                  </span>
                  <span className="text-white/60 text-sm">of 07</span>
                </div>
                <div className="flex gap-1.5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        i === activeStep
                          ? "bg-accent w-6"
                          : "bg-white/30 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
