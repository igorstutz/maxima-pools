import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { locations, slugify } from "@/lib/locations";

const cities = locations.filter((l) => l.type === "city");
const counties = locations.filter((l) => l.type === "county");

export function LocationsWeServe() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-5 py-2 mb-5">
              <MapPin size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Service Areas
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Locations We{" "}
              <span className="text-accent">Serve</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Proudly serving Columbus and surrounding communities across Central
              Ohio with premium fiberglass pool installations.
            </p>
          </div>
        </ScrollReveal>

        {/* Cities */}
        <ScrollReveal>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Cities & Towns
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-10">
            {cities.map((loc) => (
              <Link
                key={loc.name}
                href={`/locations/${slugify(loc.name)}`}
                className="group flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-gray-100 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300"
              >
                <MapPin
                  size={14}
                  className="text-gray-300 group-hover:text-accent transition-colors shrink-0"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors truncate">
                  {loc.name}
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* Counties */}
        <ScrollReveal>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
            Counties
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-12">
            {counties.map((loc) => (
              <Link
                key={loc.name}
                href={`/locations/${slugify(loc.name)}`}
                className="group flex items-center gap-2 px-4 py-3 rounded-xl bg-white border border-gray-100 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300"
              >
                <MapPin
                  size={14}
                  className="text-gray-300 group-hover:text-accent transition-colors shrink-0"
                />
                <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors truncate">
                  {loc.name}
                </span>
              </Link>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-4">
              Don&apos;t see your area? We may still serve you.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              Contact us to find out
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
