"use client";

import { useState } from "react";
import Image from "@/components/Image";

const steps = [
  {
    number: "01",
    title: "Prepare the Mold",
    description:
      "The process begins with a clean, precisely waxed mold to ensure perfect shape accuracy. Every curve and contour is inspected before a single layer is applied.",
    image: "/images/how-its-made/step-mold.webp",
  },
  {
    number: "02",
    title: "Cut & Lay Fiberglass",
    description:
      "All fiberglass is hand-cut and hand-laid — none of the reinforcement is sprayed. This ensures structural consistency and eliminates weak points found in chopper-gun methods.",
    image: "/images/how-its-made/step-glass.webp",
  },
  {
    number: "03",
    title: "Build the Panels",
    description:
      "Each section is carefully hand-laid to maintain even thickness across the entire shell. Up to 72oz of woven fiberglass per square yard creates unmatched structural integrity.",
    image: "/images/how-its-made/step-panels.webp",
  },
  {
    number: "04",
    title: "Stiffen the Walls",
    description:
      "Structural ribs are precisely positioned to reinforce wall strength without adding unnecessary weight. This is what allows fiberglass pools to flex with ground movement instead of cracking.",
    image: "/images/how-its-made/step-ribs.webp",
  },
  {
    number: "05",
    title: "Clean & Inspect",
    description:
      "Every pool is thoroughly inspected and all imperfections are repaired. This takes time, but only perfection is good enough for a San Juan pool. Quality control is non-negotiable.",
    image: "/images/how-its-made/step-inspect.webp",
  },
  {
    number: "06",
    title: "Tile & Outfit",
    description:
      "Pools are tiled and outfitted with all necessary fittings, returns, and drains. Each component is installed by hand to ensure a watertight, flawless finish.",
    image: "/images/how-its-made/step-outfitting.webp",
  },
  {
    number: "07",
    title: "Final Pool Shell",
    description:
      "A beautiful San Juan pool shell is complete and ready to become part of your backyard dream. From mold to masterpiece — built to last a lifetime.",
    image: "/images/how-its-made/step-final.webp",
  },
];

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
