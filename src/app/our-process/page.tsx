import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Image";
import {
  ChevronRight,
  ArrowRight,
  Phone,
  ClipboardList,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Our Process | Maxima Pools - Columbus, OH",
  description:
    "Learn how Maxima Pools installs your fiberglass pool from start to finish. Transparent, efficient, in-house process — serving Columbus, OH and Central Ohio.",
  openGraph: {
    title: "Our Process | Maxima Pools",
    description:
      "From first consultation to your first swim — see how Maxima Pools delivers a seamless pool installation experience.",
    type: "website",
  },
};

export default function OurProcessPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Our Process",
            description:
              "Learn how Maxima Pools installs your fiberglass pool from consultation to completion.",
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <Image
          src="/images/gallery/featured-02.jpg"
          alt="Maxima Pools installation process"
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
            <span className="text-white/80 font-medium">Our Process</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <ClipboardList size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                How It Works
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">Our </span>
              <span className="shimmer-text">Process</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-2xl">
              From your first call to your first swim — here&apos;s how we turn your
              backyard into a paradise, step by step.
            </p>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
              >
                Get a Free Estimate
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+16143845081"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
              >
                <Phone size={18} />
                (614) 384-5081
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Process Steps — placeholder ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Step by <span className="text-accent">Step</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Every Maxima Pools project follows a proven, transparent process.
                Here&apos;s what to expect when you work with us.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-gray-50 rounded-2xl border border-gray-200 p-10 sm:p-14 text-center">
              <ClipboardList size={48} className="text-accent/30 mx-auto mb-5" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Detailed Process Coming Soon
              </h3>
              <p className="text-gray-500 max-w-md mx-auto mb-8">
                We&apos;re preparing a detailed walkthrough of our installation process.
                In the meantime, reach out and we&apos;ll walk you through every step personally.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
              >
                Talk to Our Team
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
