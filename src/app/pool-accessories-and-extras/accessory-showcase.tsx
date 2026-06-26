"use client";

import { useState } from "react";
import Image from "@/components/Image";
import {
  Flame,
  Lightbulb,
  Waves,
  Shield,
  Thermometer,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import content from "@/content/pages/pool-accessories-and-extras.json";

// Icons referenced by name from the editable content file.
const iconMap = { Thermometer, Lightbulb, Waves, Shield, Flame, Sparkles } as const;
type IconName = keyof typeof iconMap;

// Showcase categories are editable via the CMS (pool-accessories-and-extras.json → Showcase).
const categories = content.showcase;

export function AccessoryShowcase() {
  const [activeId, setActiveId] = useState("heating");
  const active = categories.find((c) => c.id === activeId)!;
  const ActiveIcon = iconMap[active.icon as IconName];

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = cat.id === activeId;
          const CatIcon = iconMap[cat.icon as IconName];
          return (
            <button
              key={cat.id}
              onClick={() => setActiveId(cat.id)}
              className={`group inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-accent to-accent-light text-white shadow-lg shadow-accent/25"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-accent/30 hover:text-primary hover:shadow-md"
              }`}
            >
              {CatIcon && <CatIcon size={16} />}
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <div className="absolute -inset-3 bg-accent/8 rounded-[2rem] blur-2xl" />
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <Image
              src={active.image}
              alt={active.title}
              fill
              className="object-cover transition-all duration-500"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-4 py-2">
                {ActiveIcon && <ActiveIcon size={14} className="text-accent-light" />}
                <span className="text-white text-sm font-semibold">
                  {active.label}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            {active.title}
          </h3>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            {active.description}
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {active.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3"
              >
                <ChevronRight size={14} className="text-accent shrink-0" />
                <span className="text-sm text-gray-700 font-medium">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
