"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, ChevronDown } from "lucide-react";

interface Row {
  feature: string;
  sanJuan: string;
  competitor: string;
  sanJuanWin: boolean;
}

const rows: Row[] = [
  {
    feature: "Fiberglass Method",
    sanJuan: "100% hand-laid solid sheets with consistent thickness",
    competitor: "Chopped fiberglass sprayed from gun — inconsistent thickness",
    sanJuanWin: true,
  },
  {
    feature: "Excess Resin",
    sanJuan: "Removed from each layer for optimal strength-to-weight ratio",
    competitor: "Cannot be removed — weakens the shell over time",
    sanJuanWin: true,
  },
  {
    feature: "Woven Roving",
    sanJuan: "Applied throughout — significant vertical and horizontal strength",
    competitor: "Used only in limited areas — structural gaps remain",
    sanJuanWin: true,
  },
  {
    feature: "Sprayed Chop",
    sanJuan: "Not used — zero chopped fiberglass in any San Juan pool",
    competitor: "2\" pieces sprayed on with variable thickness throughout",
    sanJuanWin: true,
  },
  {
    feature: "Interior Ledges",
    sanJuan: "Not needed — shell is strong enough without them",
    competitor: "Required for stiffening — collects dirt, potential hazard",
    sanJuanWin: true,
  },
  {
    feature: "Coring & Fillers",
    sanJuan: "Not used — pure fiberglass composite throughout",
    competitor: "Present in many models — increases brittleness risk",
    sanJuanWin: true,
  },
  {
    feature: "Vinyl Ester Resin",
    sanJuan: "Applied throughout the entire pool shell — both sides",
    competitor: "Last layer only — interior unprotected",
    sanJuanWin: true,
  },
  {
    feature: "Gel Coat",
    sanJuan: "32-mil thickness — two 16-mil layers (thickest in the industry)",
    competitor: "27–30 mil — single layer application",
    sanJuanWin: true,
  },
  {
    feature: "Minimum Layers",
    sanJuan: "Guaranteed minimum 5 hand-laid fiberglass layers per shell",
    competitor: "No guaranteed minimum — varies by model and manufacturer",
    sanJuanWin: true,
  },
  {
    feature: "Quality Control",
    sanJuan: "Factory-manufactured with controlled QA at every step",
    competitor: "Variable quality — depends on spray operator skill",
    sanJuanWin: true,
  },
];

export function ComparisonTable() {
  const [expandedRow, setExpandedRow] = useState<number | null>(null);

  return (
    <div>
      {/* Desktop */}
      <div className="hidden lg:block rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
        <div className="grid grid-cols-[280px_1fr_1fr]">
          {/* Header */}
          <div className="bg-primary-dark p-5 flex items-center">
            <span className="text-white/80 text-xs font-bold uppercase tracking-wider">
              Feature
            </span>
          </div>
          <div className="bg-gradient-to-r from-accent-dark to-accent p-5 text-center">
            <p className="text-white font-bold text-sm">San Juan Pools</p>
            <p className="text-white/60 text-xs">Hand-Laid Fiberglass</p>
          </div>
          <div className="bg-gray-200 p-5 text-center">
            <p className="text-gray-700 font-bold text-sm">Competitors</p>
            <p className="text-gray-500 text-xs">Chopped / Sprayed</p>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div key={row.feature} className="contents">
              <div
                className={`p-5 font-semibold text-sm text-gray-900 border-t border-gray-100 flex items-start ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                }`}
              >
                {row.feature}
              </div>
              <div
                className={`p-5 text-sm border-t flex items-start gap-2.5 ${
                  i % 2 === 0
                    ? "bg-accent/[0.04] border-accent/10"
                    : "bg-accent/[0.06] border-accent/10"
                }`}
              >
                <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                <span className="text-gray-700">{row.sanJuan}</span>
              </div>
              <div
                className={`p-5 text-sm border-t border-gray-100 flex items-start gap-2.5 ${
                  i % 2 === 0 ? "bg-white" : "bg-gray-50/60"
                }`}
              >
                <XCircle size={16} className="text-red-400/60 shrink-0 mt-0.5" />
                <span className="text-gray-500">{row.competitor}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden space-y-2.5">
        {rows.map((row, i) => {
          const isExpanded = expandedRow === i;
          return (
            <div
              key={row.feature}
              className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                isExpanded
                  ? "border-accent/20 shadow-md bg-white"
                  : "border-gray-200 bg-white"
              }`}
            >
              <button
                onClick={() => setExpandedRow(isExpanded ? null : i)}
                className="w-full text-left flex items-center justify-between gap-3 p-4 cursor-pointer"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <CheckCircle2 size={16} className="text-accent shrink-0" />
                  <span className="font-semibold text-sm text-gray-900 truncate">
                    {row.feature}
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ${
                  isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-4 pb-4 space-y-2.5">
                    <div className="bg-accent/[0.05] border border-accent/15 rounded-lg p-3">
                      <p className="text-[11px] font-bold text-accent uppercase tracking-wider mb-1">
                        San Juan
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {row.sanJuan}
                      </p>
                    </div>
                    <div className="bg-gray-50 border border-gray-100 rounded-lg p-3">
                      <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        Competitors
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {row.competitor}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
