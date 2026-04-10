"use client";

import { useState } from "react";
import { Shield, Droplets, Layers, Hammer, Sparkles } from "lucide-react";

const layers = [
  {
    id: "gelcoat",
    label: "Gelcoat Surface",
    icon: Sparkles,
    color: "from-accent-light to-accent",
    description:
      "The outermost layer — a smooth, non-porous NPG/ISO gelcoat that provides UV protection, resists algae and staining, and delivers the vibrant color finish you see. This barrier is what keeps the pool looking flawless for 25+ years.",
    specs: ["UV Stabilized", "Non-Porous", "Algae Resistant", "Chemical Resistant"],
  },
  {
    id: "barrier",
    label: "Vinyl Ester Barrier Coat",
    icon: Shield,
    color: "from-accent to-accent-dark",
    description:
      "A proprietary Vinyl Ester resin layer applied directly behind the gelcoat. It shares the same chemical backbone as epoxy — making it truly impervious to water. This is where most competitors cut corners with cheap polyester resin.",
    specs: ["Marine-Grade", "Waterproof", "Epoxy-Class Resin", "Full Coverage"],
  },
  {
    id: "fiberglass",
    label: "Woven Fiberglass Layers",
    icon: Layers,
    color: "from-accent-dark to-primary-light",
    description:
      "Multiple layers of hand-laid woven roving — continuous strands woven together, up to 72oz per square yard. Never sprayed, never chopped. This is the structural backbone of every San Juan pool, the same technique used in aerospace and marine hulls.",
    specs: ["Hand-Laid", "72oz/sq yd", "Woven Roving", "5+ Layers"],
  },
  {
    id: "ribs",
    label: "Structural Reinforcement",
    icon: Hammer,
    color: "from-primary-light to-primary",
    description:
      "Precisely positioned structural ribs reinforce the walls and floor without adding unnecessary weight. These ribs allow the pool to flex with ground movement during freeze-thaw cycles instead of cracking like concrete.",
    specs: ["Flex Technology", "Freeze-Proof", "Lightweight", "Precision Placed"],
  },
  {
    id: "resin",
    label: "Full Vinyl Ester Laminate",
    icon: Droplets,
    color: "from-primary to-primary-dark",
    description:
      "Unlike competitors who only use Vinyl Ester on the outer layer, San Juan applies it throughout the entire laminate — both sides of the shell. This means consistent, watertight protection from the inside out.",
    specs: ["Both Sides", "Throughout Entire Shell", "Hexion Supplied", "Lifetime Protection"],
  },
];

export function QualityLayers() {
  const [activeId, setActiveId] = useState("gelcoat");
  const active = layers.find((l) => l.id === activeId)!;

  return (
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Visual stack */}
      <div className="space-y-2">
        {layers.map((layer) => {
          const isActive = layer.id === activeId;
          return (
            <button
              key={layer.id}
              onClick={() => setActiveId(layer.id)}
              className={`w-full text-left group relative overflow-hidden rounded-xl transition-all duration-500 cursor-pointer ${
                isActive
                  ? "ring-2 ring-accent/40 shadow-lg"
                  : "hover:shadow-md"
              }`}
            >
              <div
                className={`h-16 sm:h-20 bg-gradient-to-r ${layer.color} ${
                  isActive ? "opacity-100" : "opacity-40 hover:opacity-60"
                } transition-opacity duration-500`}
              />
              <div className="absolute inset-0 flex items-center px-5 sm:px-6">
                <div className="flex items-center gap-3 w-full">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isActive
                        ? "bg-white/25 backdrop-blur-sm"
                        : "bg-white/10"
                    }`}
                  >
                    <layer.icon size={18} className="text-white" />
                  </div>
                  <span
                    className={`font-bold text-sm sm:text-base transition-all ${
                      isActive ? "text-white" : "text-white/70"
                    }`}
                  >
                    {layer.label}
                  </span>
                  {isActive && (
                    <div className="ml-auto flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                      <span className="text-white/70 text-xs font-medium hidden sm:inline">
                        Active
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div className="lg:sticky lg:top-32">
        <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-9 shadow-lg">
          <div className="flex items-center gap-3 mb-5">
            <div
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${active.color} flex items-center justify-center shadow-lg`}
            >
              <active.icon size={24} className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{active.label}</h3>
              <div className={`h-0.5 w-12 bg-gradient-to-r ${active.color} rounded-full mt-1`} />
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-6">{active.description}</p>

          <div className="grid grid-cols-2 gap-2">
            {active.specs.map((spec) => (
              <div
                key={spec}
                className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2"
              >
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${active.color}`} />
                <span className="text-sm font-medium text-gray-700">{spec}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
