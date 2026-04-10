import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  Shield,
  Layers,
  Gem,
  CheckCircle2,
  Sparkles,
  Clock,
  Droplets,
  HandMetal,
  Award,
  Wrench,
  Palette,
  FlaskConical,
  Factory,
  Hammer,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { ImageLightbox } from "@/components/ImageLightbox";
import { QualityLayers } from "./quality-layers";

export const metadata: Metadata = {
  title: "Fiberglass Pool Quality | Maxima Pools - Columbus, OH",
  description:
    "Learn what sets our fiberglass pool quality apart. Premium hand-laid construction, marine-grade Vinyl Ester resin, and expert craftsmanship that ensure lasting strength and durability.",
  openGraph: {
    title: "Fiberglass Pool Quality | Maxima Pools",
    description:
      "Discover the premium materials and expert hand-laid construction that make San Juan the highest quality fiberglass pool in the world.",
    type: "website",
  },
};

const stats = [
  { value: "100%", label: "Hand-Laid", icon: HandMetal },
  { value: "5+", label: "Fiberglass Layers", icon: Layers },
  { value: "25+yr", label: "Proven Finishes", icon: Clock },
  { value: "Lifetime", label: "Structural Warranty", icon: Shield },
];

const handlaidVsChop = [
  {
    feature: "Construction Method",
    sanjuan: "Hand-laid solid sheets",
    competitor: "Chopped fiberglass sprayed from gun",
  },
  {
    feature: "Layer Consistency",
    sanjuan: "Uniform, even thickness",
    competitor: "Inconsistent, variable thickness",
  },
  {
    feature: "Structural Integrity",
    sanjuan: "Continuous fibers — no weak points",
    competitor: "Glued-together shards — many weak points",
  },
  {
    feature: "Resin Type",
    sanjuan: "Vinyl Ester throughout entire shell",
    competitor: "Polyester (cheaper, less durable)",
  },
  {
    feature: "Freeze-Thaw Performance",
    sanjuan: "Flexes with ground movement",
    competitor: "Prone to cracking and delamination",
  },
  {
    feature: "Industry Standard",
    sanjuan: "Aerospace & marine grade",
    competitor: "Below marine specifications",
  },
];

const materialCards = [
  {
    icon: Layers,
    title: "Premium Fiberglass Layers",
    description:
      "At the heart of every pool is a carefully engineered shell made with hand-laid fiberglass layers. Unlike sprayed or chopped fiberglass, this process guarantees even thickness, consistent strength, and superior flexibility — the same standards used in marine and aerospace applications.",
  },
  {
    icon: Sparkles,
    title: "Advanced Gelcoat Protection",
    description:
      "An advanced gelcoat surface finish that provides a smooth, non-porous barrier resisting staining, algae growth, and chemical damage. This coating delivers aesthetic brilliance while preserving quality against everyday wear, UV rays, and environmental stress.",
  },
  {
    icon: Shield,
    title: "Reinforced Structural Design",
    description:
      "Multiple reinforcement layers using woven roving and Vinyl Ester resin — the same materials found in boat hulls. This combination prevents cracking, blistering, and delamination, even under extreme weather conditions.",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Durability & Longevity",
    description:
      "A high-quality fiberglass shell won't crack, chip, or degrade over time. It maintains its structure and surface integrity for decades, giving you confidence your investment will stand strong.",
  },
  {
    icon: Shield,
    title: "Resistant to Fading & Cracking",
    description:
      "Proprietary gelcoat finish and reinforced materials protect against common issues affecting lower-quality models. Less repair, less worry, more time enjoying your pool.",
  },
  {
    icon: Droplets,
    title: "Low Maintenance",
    description:
      "A smooth, non-porous surface means fewer chemicals, less cleaning, and no resurfacing. High quality translates into less effort and lower lifetime costs — water stays cleaner, longer.",
  },
];

const compareCards = [
  {
    title: "How It's Made",
    description: "See the 7-step hand-laid manufacturing process behind every San Juan pool.",
    href: "/how-san-juan-pools-are-made",
    icon: Factory,
  },
  {
    title: "San Juan VS Competitors",
    description: "Side-by-side comparison of construction methods, materials, and warranties.",
    href: "/san-juan-fiberglass-pools",
    icon: Award,
  },
  {
    title: "Fiberglass Pool Colors",
    description: "Explore the full range of gelcoat and Iridium finish color options.",
    href: "/fiberglass-pool-colors",
    icon: Palette,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Fiberglass Pool Quality",
  description:
    "Learn what sets San Juan fiberglass pool quality apart. Premium hand-laid construction, marine-grade Vinyl Ester resin, and expert craftsmanship.",
  author: { "@type": "Organization", name: "Maxima Pools" },
  publisher: { "@type": "Organization", name: "Maxima Pools" },
};

export default function FiberglassPoolQualityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20 min-h-[520px] flex items-end">
        <HeroImageCycle
          images={[
            "/images/pool-quality/blue-lagoon.jpg",
            "/images/pool-quality/wylela-beach.png",
            "/images/pool-quality/handlaid-vs-chop.webp",
            "/images/pool-quality/layers-spec.webp",
          ]}
          alt="San Juan fiberglass pool quality craftsmanship"
          interval={6000}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e]/75 via-[#0c4a6e]/50 to-[#0c4a6e]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/40 via-transparent to-[#0c4a6e]/30" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white/80 font-medium">Fiberglass Pool Quality</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Gem size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Built to Last a Lifetime
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">Fiberglass Pool </span>
              <span className="shimmer-text">Quality</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-2xl">
              What separates a standard swimming pool from one that truly lasts a
              lifetime? It starts with design precision, the choice of materials,
              and the craftsmanship behind every layer.
            </p>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-3">
              <Link
                href="/fiberglass-pool-colors"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
              >
                See Pool Colors
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-white font-semibold hover:bg-white/[0.12] transition-all text-sm"
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Stats Strip ── */}
      <section className="bg-[#0c4a6e] py-12 sm:py-16">
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

      {/* ── Highest Quality — split layout ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    World-Class Quality
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  The Highest Quality Pools{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    in the World
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  All fiberglass is hand-laid using only solid sheets. We do not use
                  chop fiberglass — a common practice that involves gluing shards of
                  fiberglass to create layers. These are not solid layers and create
                  weaker walls at a reduced price.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  At San Juan Pools, we do not compromise price for quality. We invest
                  in people who construct every pool from scratch — talented tradesmen
                  with decades of experience who know our products best.
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { icon: HandMetal, text: "100% Hand Made" },
                    { icon: Layers, text: "Solid Sheets Only" },
                    { icon: FlaskConical, text: "Vinyl Ester Resin" },
                    { icon: Award, text: "Lifetime Warranty" },
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
                    src="/images/pool-quality/blue-lagoon.jpg"
                    alt="San Juan fiberglass pool — highest quality construction"
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

      {/* ── Hand-Laid vs Chop — comparison table ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                  <Hammer size={14} className="text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    The Difference
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  Hand-Laid vs.{" "}
                  <span className="shimmer-text">Chopped Fiberglass</span>
                </h2>
                <p className="text-white/55 text-lg leading-relaxed mb-8">
                  Not all fiberglass is created equal. The construction method defines
                  the strength, durability, and lifespan of your pool. Here&apos;s how
                  San Juan compares.
                </p>

                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <ImageLightbox
                    src="/images/pool-quality/handlaid-vs-chop.webp"
                    alt="Hand-laid vs chopped fiberglass comparison"
                    width={600}
                    height={400}
                    className="w-full object-contain"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-3">
                {/* Header */}
                <div className="grid grid-cols-3 gap-3 px-4 pb-2">
                  <span className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                    Feature
                  </span>
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider text-center">
                    San Juan
                  </span>
                  <span className="text-white/40 text-xs font-semibold uppercase tracking-wider text-center">
                    Competitors
                  </span>
                </div>

                {handlaidVsChop.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-3 gap-3 bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 hover:bg-white/[0.07] transition-colors"
                  >
                    <span className="text-white/70 text-sm font-medium">
                      {row.feature}
                    </span>
                    <span className="text-accent text-sm font-semibold text-center">
                      {row.sanjuan}
                    </span>
                    <span className="text-white/35 text-sm text-center">
                      {row.competitor}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Interactive Layers ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Explore Each Layer
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Anatomy of a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Premium Pool Shell
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Click each layer to understand how every component contributes to
                unmatched strength and longevity.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <QualityLayers />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Materials That Ensure Quality ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Materials
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Materials That Ensure{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Lasting Quality
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Each component plays a vital role in maintaining exceptional quality
                and long-term performance.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {materialCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={((i + 1) as 1 | 2 | 3)}>
                <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <card.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Benefits of Quality — bento with image ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
                <div className="grid grid-cols-2 gap-3 sm:gap-4 relative">
                  <div className="rounded-2xl overflow-hidden col-span-2 shadow-xl">
                    <Image
                      src="/images/pool-quality/wylela-beach.png"
                      alt="Premium fiberglass pool installation"
                      width={800}
                      height={500}
                      className="w-full aspect-[16/10] object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                    <ImageLightbox
                      src="/images/pool-quality/layers-spec.webp"
                      alt="Fiberglass pool layers specification"
                      width={400}
                      height={500}
                      className="w-full object-contain"
                      sizes="(max-width: 1024px) 50vw, 22vw"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                    <ImageLightbox
                      src="/images/pool-quality/handlaid-vs-chop.webp"
                      alt="Hand-laid fiberglass quality"
                      width={400}
                      height={500}
                      className="w-full object-contain"
                      sizes="(max-width: 1024px) 50vw, 22vw"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Benefits
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                  Benefits of{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Superior Quality
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Investing in superior quality pays off in countless ways — from
                  long-term reliability to a flawless finish that never fades.
                </p>

                <div className="space-y-4">
                  {benefits.map((b) => (
                    <div
                      key={b.title}
                      className="group flex gap-4 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-accent/20 transition-all duration-300"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                        <b.icon size={18} className="text-accent" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm mb-1">
                          {b.title}
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {b.description}
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

      {/* ── Compare & Learn More ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Learn More
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Compare &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Explore
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {compareCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={((i + 1) as 1 | 2 | 3)}>
                <Link href={card.href} className="block h-full">
                  <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full flex flex-col">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                      <card.icon size={20} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                      {card.description}
                    </p>
                    <div className="flex items-center gap-2 text-accent font-semibold text-sm">
                      Read more
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── CTA ── */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[380px] flex items-center">
              <Image
                src="/images/pool-quality/wylela-beach.png"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e]/75 via-[#0c4a6e]/60 to-[#0c4a6e]/50" />
              <div className="absolute inset-0 water-caustics opacity-10" />

              <div className="relative px-8 sm:px-12 lg:px-16 py-16 sm:py-20">
                <div className="max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                    Ready for the Highest{" "}
                    <span className="shimmer-text">Quality Pool?</span>
                  </h2>
                  <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                    Talk to our team today and get a personalized quote for a
                    San Juan fiberglass pool built to outlast everything else.
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
