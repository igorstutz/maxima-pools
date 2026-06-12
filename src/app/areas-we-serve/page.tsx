import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Image";
import {
  ChevronRight,
  MapPin,
  ArrowRight,
  Phone,
  Sparkles,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { locations, slugify } from "@/lib/locations";

export const metadata: Metadata = {
  alternates: { canonical: "/areas-we-serve/" },
  title: "Areas We Serve | Maxima Pools - Columbus, OH",
  description:
    "Maxima Pools serves 49 cities and counties across Central Ohio. Find fiberglass pool installation services near you — Columbus, Dublin, Powell, Westerville, and more.",
  openGraph: {
    url: "/areas-we-serve/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/40 via-transparent to-[#0c4a6e]/20" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-white" />
            <span className="text-white font-medium">Areas We Serve</span>
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

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white leading-relaxed max-w-2xl mb-8">
              Maxima Pools proudly serves {locations.length} cities and counties
              across Central Ohio with premium San Juan fiberglass pool installations.
            </p>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-3 *:whitespace-nowrap">
              <Link
                href="/pool-simulator"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
              >
                <Sparkles size={18} className="text-accent" />
                Pool Simulator
              </Link>
            </div>
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
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
              {cities.map((loc) => {
                const slug = slugify(loc.name);
                return (
                  <Link
                    key={loc.name}
                    href={`/locations/${slug}`}
                    className="group relative aspect-[16/10] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
                  >
                    <Image
                      src={`/images/locations/${slug}.webp`}
                      alt={`Fiberglass pool installation in ${loc.name}, Ohio`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-1.5 text-accent text-[11px] font-semibold uppercase tracking-wider mb-1">
                        <MapPin size={11} />
                        <span>Service Area</span>
                      </div>
                      <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
                        {loc.name}
                      </h3>
                      <div className="flex items-center gap-1 text-white/80 group-hover:text-accent text-xs mt-1.5 transition-colors">
                        <span>View area</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Counties */}
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              Counties
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {counties.map((loc) => {
                const slug = slugify(loc.name);
                return (
                  <Link
                    key={loc.name}
                    href={`/locations/${slug}`}
                    className="group relative aspect-[16/10] rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-accent/10 transition-all duration-300"
                  >
                    <Image
                      src={`/images/locations/${slug}.webp`}
                      alt={`Fiberglass pool installation in ${loc.name}, Ohio`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-1.5 text-accent text-[11px] font-semibold uppercase tracking-wider mb-1">
                        <MapPin size={11} />
                        <span>Service Area</span>
                      </div>
                      <h3 className="text-white font-bold text-base sm:text-lg leading-tight">
                        {loc.name}
                      </h3>
                      <div className="flex items-center gap-1 text-white/80 group-hover:text-accent text-xs mt-1.5 transition-colors">
                        <span>View area</span>
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                );
              })}
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
                <Link
                  href="/pool-simulator"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-100 rounded-full text-gray-700 font-semibold hover:bg-gray-200 transition-all"
                >
                  <Sparkles size={18} className="text-accent" />
                  Pool Simulator
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
