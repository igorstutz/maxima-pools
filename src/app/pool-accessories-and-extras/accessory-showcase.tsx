"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Flame,
  Lightbulb,
  Waves,
  Shield,
  Thermometer,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    id: "heating",
    label: "Heating",
    icon: Thermometer,
    title: "Pool Heating Systems",
    description:
      "Extend your swim season from early spring through late fall with professional heating solutions. Gas heaters deliver rapid temperature control, while energy-efficient heat pumps can both warm and cool your pool.",
    image: "/images/accessories/pool-pump.jpg",
    features: [
      "Gas heaters for rapid temperature rise",
      "Heat pumps for energy-efficient warming",
      "Dual-function heating & cooling systems",
      "Smart thermostat integration",
    ],
  },
  {
    id: "lighting",
    label: "Lighting",
    icon: Lightbulb,
    title: "LED Lighting Solutions",
    description:
      "Transform your pool into a mesmerizing nighttime oasis. Color-changing LED systems create stunning ambiance, while deck lighting ensures safety and adds a sophisticated glow to your outdoor space.",
    image: "/images/accessories/color-lights.jpg",
    features: [
      "Color-changing underwater LEDs",
      "Pool deck safety lighting",
      "Fiber optic dramatic effects",
      "App-controlled light shows",
    ],
  },
  {
    id: "water-features",
    label: "Water Features",
    icon: Waves,
    title: "Water Features & Aesthetics",
    description:
      "Elevate your backyard with the soothing sounds and stunning visuals of custom water features. From cascading waterfalls to elegant deck jets and tanning ledge bubblers — create your personal resort.",
    image: "/images/accessories/pool-flame.jpg",
    features: [
      "Natural rock waterfalls",
      "Deck jets & laminar streams",
      "Spillover spa connections",
      "Tanning ledge bubblers",
    ],
  },
  {
    id: "covers",
    label: "Covers & Safety",
    icon: Shield,
    title: "Automatic Pool Covers",
    description:
      "One-touch protection that keeps your pool safe, clean, and warm. Automatic covers prevent unsupervised access, reduce chemical evaporation by up to 70%, and retain heat overnight — all with the press of a button.",
    image: "/images/accessories/pool-cover.jpg",
    features: [
      "Motorized open/close in under 60s",
      "ASTM safety certified",
      "70% less evaporation",
      "Integrated into pool structure",
    ],
  },
  {
    id: "fire",
    label: "Fire Features",
    icon: Flame,
    title: "Fire Bowls & Fire Features",
    description:
      "Add a dramatic contrast of fire and water to your poolscape. Gas-powered fire bowls create dancing flames that reflect off the water surface, turning your backyard into an unforgettable entertainment destination.",
    image: "/images/accessories/pool-flame.jpg",
    features: [
      "Gas-powered fire bowls",
      "Fire & water bowl combos",
      "Natural gas or propane options",
      "Weatherproof construction",
    ],
  },
  {
    id: "recreation",
    label: "Recreation",
    icon: Sparkles,
    title: "Recreation & Fun",
    description:
      "Make your pool the ultimate destination for family fun. From diving boards and slides to basketball hoops and volleyball nets — we professionally install every recreation feature with proper safety clearances.",
    image: "/images/accessories/pool-cover.jpg",
    features: [
      "Diving boards (depth-certified)",
      "Pool slides for all ages",
      "Basketball hoops & volleyball nets",
      "Built-in storage solutions",
    ],
  },
];

export function AccessoryShowcase() {
  const [activeId, setActiveId] = useState("heating");
  const active = categories.find((c) => c.id === activeId)!;

  return (
    <div>
      {/* Tab bar */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = cat.id === activeId;
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
              <cat.icon size={16} />
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
                <active.icon size={14} className="text-accent-light" />
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
