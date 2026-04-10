import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  Shield,
  Thermometer,
  Leaf,
  Zap,
  Eye,
  Wrench,
  Settings,
  Monitor,
  ChevronRight,
  CheckCircle2,
  Timer,
  Droplets,
  Baby,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Automatic Pool Cover | Maxima Pools - Columbus, OH",
  description:
    "Protect your pool with a premium automatic cover system. Safety, heat retention, reduced maintenance, and elegant design. Get a free quote from Maxima Pools.",
  openGraph: {
    title: "Automatic Pool Cover | Maxima Pools",
    description:
      "Safety and convenience in one system. Motorized pool covers that protect, retain heat, and look elegant.",
    type: "website",
  },
};

const stats = [
  { value: "<60s", label: "To Open or Close", icon: Timer },
  { value: "70%", label: "Less Evaporation", icon: Droplets },
  { value: "50%", label: "Less Chemical Use", icon: Leaf },
  { value: "ASTM", label: "Safety Certified", icon: Shield },
];

const benefits = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "A sealed cover supports weight and prevents unsupervised access, giving you peace of mind for children and pets.",
  },
  {
    icon: Thermometer,
    title: "Heat Retention",
    description:
      "Traps warmth overnight and extends your swim season by weeks — reducing heating costs significantly.",
  },
  {
    icon: Leaf,
    title: "Less Maintenance",
    description:
      "Keeps leaves, debris, and insects out of your pool, cutting cleaning time and chemical use in half.",
  },
  {
    icon: Zap,
    title: "One-Touch Operation",
    description:
      "Open or close your pool in under a minute with the press of a button. Effortless daily use.",
  },
  {
    icon: Eye,
    title: "Elegant Design",
    description:
      "Integrates discreetly into the pool structure, preserving the clean aesthetics of your backyard.",
  },
  {
    icon: Wrench,
    title: "Built to Last",
    description:
      "Heavy-duty materials and engineering designed for years of reliable, maintenance-free performance.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Press the Button",
    description: "A single keyswitch or remote activates the motorized system.",
  },
  {
    step: "02",
    title: "Cover Glides Smoothly",
    description:
      "The fabric rolls across the water surface on concealed under-track rails.",
  },
  {
    step: "03",
    title: "Pool is Sealed",
    description:
      "Your pool is protected, insulated, and safe — in under 60 seconds.",
  },
];

const specifications = [
  {
    icon: Wrench,
    title: "Easy-Out Pulley Assembly",
    description:
      "Quick-access pulleys can be serviced in minutes, reducing downtime and ensuring long-term reliability.",
  },
  {
    icon: Settings,
    title: "Universal Compatibility",
    description:
      "Adapts to rectangular, freeform, and custom pool layouts with seamless integration into any construction style.",
  },
  {
    icon: Monitor,
    title: "SmartMotion Diagnostics",
    description:
      "Real-time monitoring of cover movement, tension, and motor performance with instant alerts.",
  },
  {
    icon: Zap,
    title: "Electric Drive Mechanism",
    description:
      "High-efficiency motor delivers smooth, quiet, consistent operation for years of dependable use.",
  },
];

export default function AutoCoverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Automatic Pool Cover Installation",
            provider: {
              "@type": "LocalBusiness",
              name: "Maxima Pools",
              telephone: "+1-614-384-5917",
            },
            description:
              "Premium automatic pool cover systems — motorized, ASTM safety certified, 70% less evaporation. Professional installation in Columbus, OH.",
            areaServed: {
              "@type": "City",
              name: "Columbus",
              addressRegion: "OH",
            },
          }),
        }}
      />
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <HeroImageCycle
          images={[
            "/images/auto-cover/undertrack-3.jpg",
            "/images/auto-cover/hero.jpg",
            "/images/auto-cover/undertrack-1.jpg",
            "/images/auto-cover/undertrack-2.jpg",
          ]}
          alt="Automatic pool cover system"
          interval={6000}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/95 via-[#021526]/85 to-[#021526]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/60 via-transparent to-[#021526]/30" />
        <div className="absolute inset-0 water-caustics opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white/80 font-medium">Auto Cover</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Shield size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Safety & Convenience
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">Automatic Pool </span>
              <span className="shimmer-text">Cover</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-2xl">
              Protect your pool, enhance your backyard, and enjoy effortless
              operation with a motorized cover built for durability and elegance.
            </p>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
              >
                Get a Free Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:6143845081"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-white font-semibold hover:bg-white/[0.12] transition-all text-sm"
              >
                <Phone size={16} />
                (614) 384-5081
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Stats Strip ── */}
      <section className="bg-[#021526] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 sm:p-6 flex items-center gap-4 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0">
                    <s.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-[11px] sm:text-xs text-white/40 font-medium uppercase tracking-wider">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── What Is It — split layout ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Overview
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  What Is an Automatic{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Pool Cover?
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  An automatic pool cover is a motorized system that closes and
                  seals your pool with the touch of a button. It provides safety,
                  reduces maintenance, helps retain heat, and protects your pool
                  from debris — all while maintaining a clean, elegant look.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Maxima Pools works with premium Auto Cover systems that integrate
                  discreetly into the pool structure, preserving the design of your
                  backyard.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: Zap, text: "One-Touch Open/Close" },
                    { icon: Baby, text: "Child & Pet Safe" },
                    { icon: Leaf, text: "Reduces Chemical Use" },
                    { icon: Thermometer, text: "Extends Swim Season" },
                  ].map((item) => (
                    <span
                      key={item.text}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-100 rounded-full px-4 py-2"
                    >
                      <item.icon size={14} className="text-accent" />
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/auto-cover/undertrack-1.jpg"
                    alt="Pool with automatic cover system"
                    width={800}
                    height={600}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── How It Works — 3 steps ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
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
                Simple as{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  1-2-3
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {howItWorks.map((item, i) => (
              <ScrollReveal key={item.step} delay={((i + 1) as 1 | 2 | 3)}>
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-gray-100 h-full">
                  {/* Connector line */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-gray-200 to-transparent z-10" />
                  )}
                  <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent/30 to-primary/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Benefits — bento grid ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Benefits
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Why Choose an{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Auto Cover?
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
            {/* Hero benefit card */}
            <ScrollReveal className="md:col-span-2 lg:col-span-8">
              <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden h-full min-h-[280px]">
                <Image
                  src="/images/auto-cover/hero.jpg"
                  alt="Auto cover providing safety"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021526] via-[#021526]/50 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-7 sm:p-9">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/25 flex items-center justify-center">
                      <Shield size={22} className="text-accent" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {benefits[0].title}
                  </h3>
                  <p className="text-white/60 max-w-lg leading-relaxed">
                    {benefits[0].description}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Side stack — 2 benefits */}
            <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
              {benefits.slice(1, 3).map((b, i) => (
                <ScrollReveal key={b.title} delay={((i + 1) as 1 | 2)}>
                  <div className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6 sm:p-7 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <b.icon size={20} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors">
                      {b.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Bottom row — 3 benefits */}
            {benefits.slice(3).map((b, i) => (
              <ScrollReveal key={b.title} className="lg:col-span-4" delay={((i + 1) as 1 | 2 | 3)}>
                <div className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6 sm:p-7 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <b.icon size={20} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Under-Track System ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#021526] via-[#042a45] to-[#063554]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Images */}
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl overflow-hidden col-span-2 border border-white/10">
                  <Image
                    src="/images/auto-cover/undertrack-3.jpg"
                    alt="Under-track auto cover pool"
                    width={800}
                    height={500}
                    className="w-full aspect-[16/10] object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/auto-cover/undertrack-2.jpg"
                    alt="Under-track cover detail"
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(max-width: 1024px) 50vw, 22vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/auto-cover/undertrack-1.jpg"
                    alt="Pool with cover open"
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(max-width: 1024px) 50vw, 22vw"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="right">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                  <Eye size={14} className="text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Concealed Design
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  Under-Track{" "}
                  <span className="shimmer-text">Auto Cover</span> System
                </h2>
                <p className="text-white/55 text-lg leading-relaxed mb-8">
                  For a seamless, timeless design, the Under-Track application
                  houses the auto cover inside a concealed track attached directly
                  to the pool wall. This keeps the mechanism completely out of sight
                  while maintaining high structural integrity.
                </p>

                <div className="space-y-3">
                  {specifications.map((spec, i) => (
                    <div
                      key={spec.title}
                      className="group flex gap-4 bg-white/[0.05] border border-white/[0.08] rounded-xl p-4 hover:bg-white/[0.08] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0">
                        <span className="text-accent font-bold text-sm">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">
                          {spec.title}
                        </h4>
                        <p className="text-white/45 text-sm leading-relaxed">
                          {spec.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── CTA ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[380px] flex items-center">
              <Image
                src="/images/auto-cover/undertrack-1.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/95 via-[#021526]/85 to-[#021526]/50" />
              <div className="absolute inset-0 water-caustics opacity-10" />

              <div className="relative px-8 sm:px-12 lg:px-16 py-16 sm:py-20">
                <div className="max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                    Ready to Add an{" "}
                    <span className="shimmer-text">Auto Cover?</span>
                  </h2>
                  <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                    Talk to our team today and get a personalized quote. We&apos;ll
                    help you choose the right system for your pool.
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
                      href="tel:6143845081"
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
