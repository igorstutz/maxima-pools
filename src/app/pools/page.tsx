"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import Image from "@/components/Image";
import Link from "next/link";
import { Ruler, Droplets, Maximize2, Waves, Search } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { pools, slugify, type Pool } from "@/lib/pools";

/* ------------------------------------------------------------------ */
/*  Filter options                                                     */
/* ------------------------------------------------------------------ */

const typeFilters = ["All", "Pool", "Spa", "Pool with Spa", "Tanning Ledge"] as const;
const shapeFilters = ["All", "Rectangular", "Freeform"] as const;
const sizeFilters = [
  "All Lengths",
  "Under 20'",
  "20' to 30'",
  "31' to 40'",
  "Over 40'",
] as const;
const widthFilters = [
  "All Widths",
  "12' and under",
  ">12' to 14'",
  ">14'",
] as const;

type TypeFilter = (typeof typeFilters)[number];
type ShapeFilter = (typeof shapeFilters)[number];
type SizeFilter = (typeof sizeFilters)[number];
type WidthFilter = (typeof widthFilters)[number];

function parseFeet(val: string): number {
  const match = val.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function matchesSizeFilter(pool: Pool, filter: SizeFilter): boolean {
  if (filter === "All Lengths") return true;
  const ft = parseFeet(pool.length);
  switch (filter) {
    case "Under 20'": return ft < 20;
    case "20' to 30'": return ft >= 20 && ft <= 30;
    case "31' to 40'": return ft >= 31 && ft <= 40;
    case "Over 40'": return ft > 40;
    default: return true;
  }
}

function matchesWidthFilter(pool: Pool, filter: WidthFilter): boolean {
  if (filter === "All Widths") return true;
  const ft = parseFeet(pool.width);
  switch (filter) {
    case "12' and under": return ft <= 12;
    case ">12' to 14'": return ft > 12 && ft <= 14;
    case ">14'": return ft > 14;
    default: return true;
  }
}

const sizeBadgeColor: Record<Pool["size"], string> = {
  Small: "bg-sky-100 text-sky-700",
  Medium: "bg-cyan-100 text-accent-dark",
  Large: "bg-teal-100 text-teal-700",
};

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default function PoolsPage() {
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("All");
  const [shapeFilter, setShapeFilter] = useState<ShapeFilter>("All");
  const [sizeFilter, setSizeFilter] = useState<SizeFilter>("All Lengths");
  const [widthFilter, setWidthFilter] = useState<WidthFilter>("All Widths");
  const [nameSearch, setNameSearch] = useState("");
  const gridRef = useRef<HTMLElement>(null);

  const scrollToGrid = useCallback(() => {
    gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const applyTypeFilter = useCallback((v: TypeFilter) => { setTypeFilter(v); setTimeout(scrollToGrid, 50); }, [scrollToGrid]);
  const applyShapeFilter = useCallback((v: ShapeFilter) => { setShapeFilter(v); setTimeout(scrollToGrid, 50); }, [scrollToGrid]);
  const applySizeFilter = useCallback((v: SizeFilter) => { setSizeFilter(v); setTimeout(scrollToGrid, 50); }, [scrollToGrid]);
  const applyWidthFilter = useCallback((v: WidthFilter) => { setWidthFilter(v); setTimeout(scrollToGrid, 50); }, [scrollToGrid]);
  const clearFilters = useCallback(() => { setTypeFilter("All"); setShapeFilter("All"); setSizeFilter("All Lengths"); setWidthFilter("All Widths"); setNameSearch(""); setTimeout(scrollToGrid, 50); }, [scrollToGrid]);

  const filteredPools = useMemo(() => {
    const q = nameSearch.toLowerCase().trim();
    return pools.filter((pool) => {
      if (q && !pool.name.toLowerCase().includes(q)) return false;
      const matchesType = typeFilter === "All" || pool.type === typeFilter;
      const matchesShape = shapeFilter === "All" || pool.shape === shapeFilter;
      const matchesSize = matchesSizeFilter(pool, sizeFilter);
      const matchesWidth = matchesWidthFilter(pool, widthFilter);
      return matchesType && matchesShape && matchesSize && matchesWidth;
    });
  }, [typeFilter, shapeFilter, sizeFilter, widthFilter, nameSearch]);

  return (
    <>
      {/* ============================================================ */}
      {/*  Hero section                                                 */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-40 sm:pb-20">
        {/* Background image */}
        <Image
          src="/images/pools/clear-water-beach.png"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021526] via-[#021526]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/40 via-transparent to-[#021526]/20" />
        <div className="absolute inset-0 water-caustics opacity-40 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-1 inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full px-5 py-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                San Juan Fiberglass Pools
              </span>
            </div>

            <h1 className="hero-animate hero-animate-2 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">Pool </span>
              <span className="shimmer-text">Collection</span>
            </h1>

            <p className="hero-animate hero-animate-3 text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Explore 80+ San Juan fiberglass pools and spas. Filter by type,
              shape, or size to find the perfect fit for your backyard.
            </p>

            <div className="hero-animate hero-animate-4 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/20 flex items-center justify-center">
                  <Waves size={14} className="text-accent" />
                </div>
                <span className="text-white/70 font-medium">100+ Models</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/20 flex items-center justify-center">
                  <Ruler size={14} className="text-accent" />
                </div>
                <span className="text-white/70 font-medium">8&apos; to 45&apos; Length</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/20 flex items-center justify-center">
                  <Droplets size={14} className="text-accent" />
                </div>
                <span className="text-white/70 font-medium">100% Hand-Laid</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ============================================================ */}
      {/*  Sticky filter bar                                            */}
      {/* ============================================================ */}
      <div className="sticky top-20 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          {/* Mobile: search + selects */}
          <div className="sm:hidden space-y-2">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={nameSearch}
                onChange={(e) => setNameSearch(e.target.value)}
                placeholder="Search by name..."
                className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {([
                { value: typeFilter, onChange: (v: string) => applyTypeFilter(v as TypeFilter), options: typeFilters, allLabel: "All Types" },
                { value: shapeFilter, onChange: (v: string) => applyShapeFilter(v as ShapeFilter), options: shapeFilters, allLabel: "All Shapes" },
                { value: sizeFilter, onChange: (v: string) => applySizeFilter(v as SizeFilter), options: sizeFilters, allLabel: null },
                { value: widthFilter, onChange: (v: string) => applyWidthFilter(v as WidthFilter), options: widthFilters, allLabel: null },
              ] as const).map((sel, i) => (
                <select
                  key={i}
                  value={sel.value}
                  onChange={(e) => sel.onChange(e.target.value)}
                  className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2212%22%20height%3d%2212%22%20viewBox%3d%220%200%2012%2012%22%3e%3cpath%20fill%3d%22%239ca3af%22%20d%3d%22M2%204l4%204%204-4%22%2f%3e%3c%2fsvg%3e')] bg-[length:12px] bg-[right_8px_center] bg-no-repeat"
                >
                  {sel.options.map((f) => (
                    <option key={f} value={f}>{sel.allLabel && f === sel.options[0] ? sel.allLabel : f}</option>
                  ))}
                </select>
              ))}
            </div>
          </div>

          {/* Desktop: single compact row */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Search */}
            <div className="relative w-52 shrink-0">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={nameSearch}
                onChange={(e) => setNameSearch(e.target.value)}
                placeholder="Search name..."
                className="w-full pl-8 pr-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
              />
            </div>

            <div className="w-px h-7 bg-gray-200" />

            {/* Type pills */}
            <div className="flex gap-1">
              {typeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => applyTypeFilter(filter)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    typeFilter === filter
                      ? "bg-accent text-white shadow-sm shadow-accent/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {filter === "All" ? "All" : filter}
                </button>
              ))}
            </div>

            <div className="w-px h-7 bg-gray-200" />

            {/* Shape pills */}
            <div className="flex gap-1">
              {shapeFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => applyShapeFilter(filter)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    shapeFilter === filter
                      ? "bg-accent text-white shadow-sm shadow-accent/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="w-px h-7 bg-gray-200" />

            {/* Length & Width selects */}
            <select
              value={sizeFilter}
              onChange={(e) => applySizeFilter(e.target.value as SizeFilter)}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2212%22%20height%3d%2212%22%20viewBox%3d%220%200%2012%2012%22%3e%3cpath%20fill%3d%22%239ca3af%22%20d%3d%22M2%204l4%204%204-4%22%2f%3e%3c%2fsvg%3e')] bg-[length:12px] bg-[right_8px_center] bg-no-repeat pr-7"
            >
              {sizeFilters.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
            <select
              value={widthFilter}
              onChange={(e) => applyWidthFilter(e.target.value as WidthFilter)}
              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-xs font-semibold text-gray-700 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2212%22%20height%3d%2212%22%20viewBox%3d%220%200%2012%2012%22%3e%3cpath%20fill%3d%22%239ca3af%22%20d%3d%22M2%204l4%204%204-4%22%2f%3e%3c%2fsvg%3e')] bg-[length:12px] bg-[right_8px_center] bg-no-repeat pr-7"
            >
              {widthFilters.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <SectionDivider />

      {/* ============================================================ */}
      {/*  Pool grid                                                    */}
      {/* ============================================================ */}
      <section ref={gridRef} className="relative py-12 sm:py-16 bg-gray-50 min-h-[60vh] texture-noise overflow-hidden scroll-mt-40">
        {/* Background decoration */}
        <div className="absolute top-20 right-0 w-80 h-80 bg-accent/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-primary/[0.03] rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results count */}
          <ScrollReveal>
            <div className="flex items-center justify-between mb-8">
              <p className="text-gray-500 text-sm sm:text-base">
                Showing{" "}
                <span className="font-bold text-gray-900">
                  {filteredPools.length}
                </span>{" "}
                of{" "}
                <span className="font-bold text-gray-900">{pools.length}</span>{" "}
                pools
              </p>
              {(typeFilter !== "All" || shapeFilter !== "All" || sizeFilter !== "All Lengths" || widthFilter !== "All Widths" || nameSearch) && (
                <button
                  onClick={clearFilters}
                  className="text-sm font-semibold text-accent hover:text-accent-dark transition-colors cursor-pointer"
                >
                  Clear filters
                </button>
              )}
            </div>
          </ScrollReveal>

          {/* Empty state */}
          {filteredPools.length === 0 && (
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mb-6">
                  <Waves size={32} className="text-gray-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  No pools found
                </h3>
                <p className="text-gray-500 max-w-md mb-6">
                  No pools match the current filters. Try adjusting your
                  selection or clear all filters to see the full collection.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-3 bg-accent text-white rounded-full font-semibold hover:bg-accent-dark transition-colors shadow-md shadow-accent/20 cursor-pointer"
                >
                  Clear all filters
                </button>
              </div>
            </ScrollReveal>
          )}

          {/* Grid */}
          {filteredPools.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {filteredPools.map((pool) => (
                <div key={pool.name} className="animate-fadeInUp">
                  <Link href={`/pools/${slugify(pool.name)}`} className="block">
                    <div className="pool-card group rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                      {/* Image container */}
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                        <Image
                          src={pool.image}
                          alt={`${pool.name} fiberglass pool`}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />

                        {/* Overlay gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Shape badge — top left */}
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-primary-dark shadow-sm">
                          {pool.shape}
                        </div>

                        {/* Size badge — top right */}
                        <div
                          className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-bold shadow-sm backdrop-blur-sm ${sizeBadgeColor[pool.size]}`}
                        >
                          {pool.size}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-primary transition-colors duration-300">
                          {pool.name}
                        </h3>

                        {/* Specs — compact on mobile, full on desktop */}
                        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-gray-500 sm:hidden">
                          <span>{pool.width} x {pool.length}</span>
                          <span>{pool.depth} deep</span>
                          <span>{pool.area}</span>
                          <span>{pool.volume}</span>
                        </div>

                        <div className="hidden sm:grid grid-cols-2 gap-3">
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                              <Ruler size={14} className="text-primary-light" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 font-medium">Dimensions</p>
                              <p className="text-sm font-semibold text-gray-700">{pool.width} x {pool.length}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-primary/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                              <Droplets size={14} className="text-primary-light" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 font-medium">Depth</p>
                              <p className="text-sm font-semibold text-gray-700">{pool.depth}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-accent/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                              <Maximize2 size={14} className="text-accent-dark" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 font-medium">Area</p>
                              <p className="text-sm font-semibold text-gray-700">{pool.area}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-accent/[0.06] flex items-center justify-center shrink-0 mt-0.5">
                              <Waves size={14} className="text-accent-dark" />
                            </div>
                            <div>
                              <p className="text-xs text-gray-400 font-medium">Volume</p>
                              <p className="text-sm font-semibold text-gray-700">{pool.volume}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
