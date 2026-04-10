import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  MapPin,
  Monitor,
  MousePointerClick,
  MessageSquare,
  Maximize2,
  Sparkles,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { SimulatorEmbed } from "./simulator-embed";

export const metadata: Metadata = {
  title: "Pool Simulator | Maxima Pools - Columbus, OH",
  description:
    "Visualize your fiberglass pool in your own backyard. Enter your address, view your property on the map, and position your pool with real-life scale before installation.",
  openGraph: {
    title: "Pool Simulator | Maxima Pools",
    description:
      "Design your dream fiberglass pool and see exactly how it fits in your backyard with our interactive Pool Simulator.",
    type: "website",
  },
};

const steps = [
  {
    number: "01",
    icon: Monitor,
    title: "Open Fullscreen",
    description:
      "Use a computer for the best experience. Click the fullscreen button in the top-right corner for an immersive view.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Enter Your Address",
    description:
      "Type your home address to locate your property on the satellite map. Zoom in to get a clear view of your backyard.",
  },
  {
    number: "03",
    icon: MousePointerClick,
    title: "Place Your Pool",
    description:
      "Browse San Juan pool models and select one. Drag it onto your backyard to see how it fits with real-life scale and dimensions.",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Contact Us",
    description:
      "Found the perfect model? Contact us for a free quote. We'll help you bring your dream pool to life.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Pool Simulator",
  description:
    "Interactive pool simulator that allows homeowners to visualize San Juan fiberglass pools in their own backyard using satellite imagery.",
  provider: {
    "@type": "Organization",
    name: "Maxima Pools",
    telephone: "+1-614-384-5081",
  },
};

export default function PoolSimulatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-20 pointer-events-none" />

        <div className="absolute top-0 right-[15%] w-80 h-80 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-0 left-[10%] w-96 h-96 rounded-full bg-primary-light/8 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white/80 mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white/80 font-medium">Pool Simulator</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Sparkles size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Interactive Tool
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">Pool </span>
              <span className="shimmer-text">Simulator</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Visualize your fiberglass pool in your own backyard. Enter your
              address, view your property on the map, and position your pool with
              real-life scale and dimensions before installation.
            </p>

            <a
              href="#simulator"
              className="hero-animate hero-animate-5 group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
            >
              Simulate Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── How to Use — 4 steps ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  How It Works
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                4 Simple{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Steps
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Design your dream pool in minutes — no downloads, no sign-up required.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((step, i) => (
              <ScrollReveal key={step.number} delay={((i + 1) as 1 | 2 | 3)}>
                <div className="group relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                  {/* Step number — large watermark */}
                  <div className="absolute top-4 right-5 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent/20 to-primary/5 pointer-events-none select-none">
                    {step.number}
                  </div>

                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <step.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Connector line */}
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-gray-200 to-transparent z-10" />
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Simulator Embed ── */}
      <section id="simulator" className="py-16 sm:py-24 bg-gray-50 texture-noise scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <Sparkles size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Try It Now
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Search Your Address{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Below
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto mb-3">
                See which fiberglass pool looks best in your yard. For the best
                experience, use a computer and click the fullscreen button.
              </p>
              <div className="inline-flex items-center gap-2 text-sm text-amber-700 bg-amber-50 border border-amber-200/60 rounded-full px-4 py-2">
                <Maximize2 size={14} />
                <span className="font-medium">Best experienced on desktop in fullscreen mode</span>
              </div>
            </div>
          </ScrollReveal>

          <SimulatorEmbed />
        </div>
      </section>

      <SectionDivider />

      {/* ── CTA ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[380px] flex items-center">
              <Image
                src="/images/why-fiberglass/canyon-beach.webp"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#021526] via-[#021526]/80 to-transparent" />
              <div className="absolute inset-0 water-caustics opacity-10" />

              <div className="relative px-8 sm:px-12 lg:px-16 py-16 sm:py-20">
                <div className="max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                    Found Your{" "}
                    <span className="shimmer-text">Dream Pool?</span>
                  </h2>
                  <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
                    Talk to our team today and get a personalized quote. We&apos;ll
                    help you bring your simulation to life.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                    >
                      Schedule Your Consultation
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
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
