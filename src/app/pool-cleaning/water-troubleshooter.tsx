"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Eye,
  Leaf,
  Palette,
  Phone,
  SprayCan,
  TestTube,
  TriangleAlert,
  Wind,
  type LucideIcon,
} from "lucide-react";

// Icons referenced by name from the editable content file.
const icons: Record<string, LucideIcon> = {
  Eye, Leaf, Palette, SprayCan, TestTube, Wind,
};

interface Symptom {
  id: string;
  label: string;
  icon: string;
  cause: string;
  steps: string[];
  callUs: string;
}

interface TroubleshooterProps {
  symptoms: Symptom[];
  causeLabel: string;
  stepsLabel: string;
  callUsLabel: string;
  ctaLabel: string;
  ctaHref: string;
  phoneDisplay: string;
  phoneHref: string;
}

export function WaterTroubleshooter({
  symptoms,
  causeLabel,
  stepsLabel,
  callUsLabel,
  ctaLabel,
  ctaHref,
  phoneDisplay,
  phoneHref,
}: TroubleshooterProps) {
  const [activeId, setActiveId] = useState(symptoms[0].id);
  const active = symptoms.find((s) => s.id === activeId) ?? symptoms[0];
  const ActiveIcon = icons[active.icon];

  return (
    <div className="grid lg:grid-cols-12 gap-5 lg:gap-8">
      {/* Symptom picker */}
      <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-1 gap-2.5 content-start">
        {symptoms.map((symptom) => {
          const isActive = symptom.id === activeId;
          const SymptomIcon = icons[symptom.icon];
          return (
            <button
              key={symptom.id}
              onClick={() => setActiveId(symptom.id)}
              className={`group w-full flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-accent/15 border-accent/40 shadow-lg shadow-accent/10"
                  : "bg-white/[0.05] border-white/[0.08] hover:bg-white/[0.09]"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border transition-colors ${
                  isActive
                    ? "bg-accent/25 border-accent/30"
                    : "bg-white/[0.06] border-white/[0.08]"
                }`}
              >
                {SymptomIcon && (
                  <SymptomIcon
                    size={17}
                    className={isActive ? "text-accent-light" : "text-white/70"}
                  />
                )}
              </div>
              <span
                className={`text-sm font-semibold flex-1 ${
                  isActive ? "text-white" : "text-white/80"
                }`}
              >
                {symptom.label}
              </span>
              <ChevronRight
                size={16}
                className={`shrink-0 transition-all ${
                  isActive
                    ? "text-accent opacity-100"
                    : "text-white/30 opacity-0 group-hover:opacity-100"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Answer panel */}
      <div className="lg:col-span-8">
        <div className="relative h-full bg-white/[0.05] border border-white/[0.1] rounded-2xl sm:rounded-3xl p-6 sm:p-9 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-11 h-11 rounded-xl bg-accent/20 border border-accent/25 flex items-center justify-center shrink-0">
              {ActiveIcon && <ActiveIcon size={20} className="text-accent-light" />}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {active.label}
            </h3>
          </div>

          <div className="mb-7">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-accent-light mb-2">
              {causeLabel}
            </p>
            <p className="text-white/90 leading-relaxed">{active.cause}</p>
          </div>

          <div className="mb-7">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-accent-light mb-3">
              {stepsLabel}
            </p>
            <ol className="space-y-2.5">
              {active.steps.map((step, i) => (
                <li key={step} className="flex gap-3.5">
                  <span className="w-6 h-6 rounded-md bg-white/[0.08] border border-white/[0.1] flex items-center justify-center shrink-0 text-[11px] font-bold text-accent-light">
                    {i + 1}
                  </span>
                  <span className="text-sm text-white/80 leading-relaxed pt-0.5">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex gap-3.5 rounded-xl bg-amber-400/15 border border-amber-300/30 p-4 mb-7">
            <TriangleAlert size={18} className="text-amber-300 shrink-0 mt-0.5" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-200 mb-1">
                {callUsLabel}
              </p>
              <p className="text-sm text-white/85 leading-relaxed">
                {active.callUs}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 *:whitespace-nowrap">
            <Link
              href={ctaHref}
              className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:scale-105 transition-all duration-300 text-sm"
            >
              {ctaLabel}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <a
              href={phoneHref}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm"
            >
              <Phone size={16} />
              {phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
