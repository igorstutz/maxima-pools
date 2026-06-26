"use client";

import { useState } from "react";
import { CheckCircle2, XCircle, MinusCircle } from "lucide-react";
import content from "@/content/pages/why-fiberglass-pools-make-sense.json";

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

// Rows are editable via the CMS (why-fiberglass-pools-make-sense.json → Comparison table).
const rows: ComparisonRow[] = content.comparison.rows as ComparisonRow[];

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
          <div className="p-5 font-semibold text-sm uppercase tracking-wider text-white">
            Feature
          </div>
          <div className="p-5 font-bold text-sm text-center bg-accent/20 border-x border-white/10">
            San Juan Fiberglass
          </div>
          <div className="p-5 font-semibold text-sm text-center text-white">
            Gunite (Concrete)
          </div>
          <div className="p-5 font-semibold text-sm text-center text-white">
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
