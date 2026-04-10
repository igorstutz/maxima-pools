"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";

type Rating = "excellent" | "good" | "poor";

interface ComparisonRow {
  feature: string;
  fiberglass: string;
  gunite: string;
  vinyl: string;
  fiberglassRating: Rating;
  guniteRating: Rating;
  vinylRating: Rating;
}

const rows: ComparisonRow[] = [
  {
    feature: "Product Durability",
    fiberglass: "All-weather tolerant, stress-free, pet friendly, 17x stronger than concrete",
    gunite: "Rigid structure, cracks with ground movement",
    vinyl: "Punctures and tears easily, not pet friendly",
    fiberglassRating: "excellent",
    guniteRating: "poor",
    vinylRating: "poor",
  },
  {
    feature: "Product Quality",
    fiberglass: "Factory manufactured with controlled quality assurance",
    gunite: "On-site constructed, quality dependent on workforce",
    vinyl: "Pre-fabricated liner with site-assembled walls",
    fiberglassRating: "excellent",
    guniteRating: "good",
    vinylRating: "good",
  },
  {
    feature: "Repairs Needed",
    fiberglass: "Requires none when properly maintained",
    gunite: "Acid washes, re-marcite, plaster, paint",
    vinyl: "Liner replacements, tear repairs, pulls",
    fiberglassRating: "excellent",
    guniteRating: "poor",
    vinylRating: "poor",
  },
  {
    feature: "Surface Texture",
    fiberglass: "Smooth, silky feel on skin",
    gunite: "Very rough — equivalent to 80 grit sandpaper",
    vinyl: "Slippery surface with rough seams",
    fiberglassRating: "excellent",
    guniteRating: "poor",
    vinylRating: "good",
  },
  {
    feature: "Algae Resistance",
    fiberglass: "Algae-resistant — cannot adhere to surface",
    gunite: "Constant problem, grows through porous walls",
    vinyl: "Troublesome, grows in liner seams",
    fiberglassRating: "excellent",
    guniteRating: "poor",
    vinylRating: "poor",
  },
  {
    feature: "Weekly Maintenance",
    fiberglass: "Less than 1 hour per week",
    gunite: "Approximately 5 hours per week",
    vinyl: "Approximately 5 hours per week",
    fiberglassRating: "excellent",
    guniteRating: "poor",
    vinylRating: "poor",
  },
  {
    feature: "Chemical Use",
    fiberglass: "Minimal chemicals required",
    gunite: "Considerably more chemicals needed",
    vinyl: "Slightly more chemicals needed",
    fiberglassRating: "excellent",
    guniteRating: "poor",
    vinylRating: "good",
  },
  {
    feature: "Installation Time",
    fiberglass: "Completed within days",
    gunite: "8+ weeks minimum",
    vinyl: "2–5 weeks",
    fiberglassRating: "excellent",
    guniteRating: "poor",
    vinylRating: "good",
  },
  {
    feature: "Electrical Usage",
    fiberglass: "Circulate 4–6 hours/day",
    gunite: "Circulate 10 hours/day",
    vinyl: "Circulate 6–8 hours/day",
    fiberglassRating: "excellent",
    guniteRating: "poor",
    vinylRating: "good",
  },
  {
    feature: "Pool Access",
    fiberglass: "Seamless stairs, swim-outs, benches, sundecks",
    gunite: "Shallow end stairs only — additions cost extra",
    vinyl: "Drop-in type stairs or ladders",
    fiberglassRating: "excellent",
    guniteRating: "good",
    vinylRating: "poor",
  },
  {
    feature: "Warranty",
    fiberglass: "25-year structural warranty",
    gunite: "Commonly 1 year by contractor",
    vinyl: "Only if seam separates — pro-rated",
    fiberglassRating: "excellent",
    guniteRating: "poor",
    vinylRating: "poor",
  },
];

const ratingIcon = {
  excellent: <CheckCircle2 size={16} className="text-accent shrink-0" />,
  good: <MinusCircle size={16} className="text-amber-400 shrink-0" />,
  poor: <XCircle size={16} className="text-red-400/70 shrink-0" />,
};

type Tab = "fiberglass" | "gunite" | "vinyl";

export function PoolComparison() {
  const [tab, setTab] = useState<Tab>("fiberglass");

  return (
    <div>
      {/* Mobile tabs */}
      <div className="flex gap-2 mb-6 lg:hidden">
        {(["fiberglass", "gunite", "vinyl"] as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              tab === t
                ? "bg-gradient-to-r from-accent to-accent-light text-white shadow-lg shadow-accent/25"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
          >
            {t === "fiberglass" ? "Fiberglass" : t === "gunite" ? "Gunite" : "Vinyl"}
          </button>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden lg:block rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
        {/* Header */}
        <div className="grid grid-cols-4 bg-gradient-to-r from-primary-dark to-primary text-white">
          <div className="p-5 font-semibold text-sm uppercase tracking-wider text-white/60">
            Feature
          </div>
          <div className="p-5 font-bold text-sm text-center bg-accent/20 border-x border-white/10">
            San Juan Fiberglass
          </div>
          <div className="p-5 font-semibold text-sm text-center text-white/70">
            Gunite (Concrete)
          </div>
          <div className="p-5 font-semibold text-sm text-center text-white/70">
            Vinyl Liner
          </div>
        </div>

        {/* Rows */}
        {rows.map((row, i) => (
          <div
            key={row.feature}
            className={`grid grid-cols-4 ${
              i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
            } hover:bg-accent/[0.03] transition-colors`}
          >
            <div className="p-5 font-semibold text-sm text-gray-900 border-r border-gray-100">
              {row.feature}
            </div>
            <div className="p-5 text-sm text-gray-700 bg-accent/[0.03] border-x border-accent/10 flex items-start gap-2">
              {ratingIcon[row.fiberglassRating]}
              <span>{row.fiberglass}</span>
            </div>
            <div className="p-5 text-sm text-gray-500 flex items-start gap-2 border-r border-gray-100">
              {ratingIcon[row.guniteRating]}
              <span>{row.gunite}</span>
            </div>
            <div className="p-5 text-sm text-gray-500 flex items-start gap-2">
              {ratingIcon[row.vinylRating]}
              <span>{row.vinyl}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile cards */}
      <div className="lg:hidden space-y-3">
        {rows.map((row) => {
          const value = tab === "fiberglass" ? row.fiberglass : tab === "gunite" ? row.gunite : row.vinyl;
          const rating = tab === "fiberglass" ? row.fiberglassRating : tab === "gunite" ? row.guniteRating : row.vinylRating;
          return (
            <div
              key={row.feature}
              className={`rounded-xl border p-4 ${
                rating === "excellent"
                  ? "bg-accent/[0.04] border-accent/15"
                  : rating === "good"
                    ? "bg-amber-50/50 border-amber-200/30"
                    : "bg-red-50/30 border-red-200/20"
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                {ratingIcon[rating]}
                <span className="font-semibold text-sm text-gray-900">
                  {row.feature}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed pl-6">
                {value}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
