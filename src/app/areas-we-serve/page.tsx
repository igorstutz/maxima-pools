import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Image";
import {
  ChevronRight,
  MapPin,
  ArrowRight,
  Phone,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { locations, slugify } from "@/lib/locations";

export const metadata: Metadata = {
  title: "Areas We Serve | Maxima Pools - Columbus, OH",
  description:
    "Maxima Pools serves 49 cities and counties across Central Ohio. Find fiberglass pool installation services near you — Columbus, Dublin, Powell, Westerville, and more.",
  openGraph: {
    title: "Areas We Serve | Maxima Pools",
    description:
      "Premium fiberglass pool installation across Central Ohio. Browse all 49 service areas.",
    type: "website",
  },
};

const cities = locations.filter((l) => l.type === "city");
const counties = locations.filter((l) => l.type === "county");

export default function AreasWeServePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Areas We Serve",
            description:
              "Maxima Pools service areas across Central Ohio.",
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <Image
          src="/images/gallery/featured-02.jpg"
          alt="Maxima Pools service areas"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e]/95 via-[#0c4a6e]/80 to-[#0c4a6e]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/70 via-transparent to-[#0c4a6e]/30" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white/80 font-medium">Areas We Serve</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <MapPin size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Service Areas
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">Areas We </span>
              <span className="shimmer-text">Serve</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/55 leading-relaxed max-w-2xl">
              Maxima Pools proudly serves {locations.length} cities and counties
              across Central Ohio with premium San Juan fiberglass pool installations.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Map ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg mb-16">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=Maxima+Pools,Delaware,OH&zoom=9"
                width="100%"
                className="h-[300px] sm:h-[450px]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maxima Pools service area"
                allowFullScreen
              />
            </div>
          </ScrollReveal>

          {/* Cities */}
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Cities & Towns
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-14">
              {cities.map((loc) => (
                <Link
                  key={loc.name}
                  href={`/locations/${slugify(loc.name)}`}
                  className="group flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300"
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
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Counties
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {counties.map((loc) => (
                <Link
                  key={loc.name}
                  href={`/locations/${slugify(loc.name)}`}
                  className="group flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-accent/30 hover:shadow-md hover:shadow-accent/5 transition-all duration-300"
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
        </div>
      </section>

      <SectionDivider />

      {/* ── CTA ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Don&apos;t See Your Area?
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto mb-8">
                We may still serve your neighborhood. Contact us to find out — we&apos;re
                always expanding our reach across Central Ohio.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                >
                  Get a Free Estimate
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+16143845081"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 rounded-full text-gray-700 font-semibold hover:bg-gray-200 transition-all"
                >
                  <Phone size={18} />
                  (614) 384-5081
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
