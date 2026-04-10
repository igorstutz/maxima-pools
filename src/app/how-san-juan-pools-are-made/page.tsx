import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  Layers,
  Shield,
  Droplets,
  Award,
  CheckCircle2,
  Hammer,
  Clock,
  FlaskConical,
  Factory,
  Users,
  Gem,
  Microscope,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { ManufacturingSteps } from "./manufacturing-steps";

export const metadata: Metadata = {
  title:
    "How San Juan Pools Are Made | Maxima Pools - Columbus, OH",
  description:
    "Discover the hand-laid fiberglass process, proprietary Vinyl Ester resin, and 7-step manufacturing that make San Juan the strongest, most durable pool on the market.",
  openGraph: {
    title: "How San Juan Pools Are Made | Maxima Pools",
    description:
      "5+ hand-laid fiberglass layers, marine-grade Vinyl Ester resin, and expert craftsmanship. See why San Juan pools outlast every competitor.",
    type: "website",
  },
};

const stats = [
  { value: "5+", label: "Hand-Laid Layers", icon: Layers },
  { value: "72oz", label: "Fiberglass / sq yd", icon: Shield },
  { value: "20+yr", label: "Expert Laminators", icon: Users },
  { value: "Since '58", label: "Made in America", icon: Award },
];

const materialPillars = [
  {
    icon: FlaskConical,
    title: "Vinyl Ester Resin",
    subtitle: "Marine-grade, throughout the entire laminate",
    description:
      "The marine industry has proven that only epoxy-type resins are truly impervious to water. San Juan uses proprietary Vinyl Ester resin — sharing the same chemical backbone as epoxy — throughout the entire laminate, not just the outer layer. This ensures consistent, watertight protection on both sides of the shell for decades.",
    badge: "Supplied by Hexion",
    badgeImage: "/images/how-its-made/hexion-logo.jpg",
  },
  {
    icon: Layers,
    title: "Woven Fiberglass",
    subtitle: "Hand-laid, never sprayed",
    description:
      "The aerospace and marine industries would never rely on chopped fiberglass for structural strength — and neither does San Juan. Using woven roving (continuous strands woven together), each pool receives up to 72oz of fiberglass per square yard. Hand-laid, never sprayed — eliminating weak points that chopper-gun methods create.",
    badge: "Supplied by PPG",
    badgeImage: "/images/how-its-made/ppg-logo.jpg",
  },
  {
    icon: Hammer,
    title: "Expert Craftsmanship",
    subtitle: "20+ years of hands-on experience",
    description:
      "Once the best materials are selected, craftsmanship becomes the defining factor. Many of San Juan's expert laminators have been with the company for more than 20 years — guaranteeing consistency, precision, and the same uncompromising standard across every single pool produced.",
    badge: "San Juan Pools",
    badgeImage: "/images/logo/sanjuan-logo.png",
  },
];

const strengthPoints = [
  "Hand-laid layers ensure uniform thickness — no thin spots",
  "Continuous woven fiberglass vs. chopped pieces from a spray gun",
  "Vinyl Ester resin throughout — not just the gel coat",
  "Structural ribs reinforce walls without added weight",
  "Flexes with ground movement instead of cracking",
  "Survives freeze-thaw cycles that destroy concrete pools",
];

const finishes = [
  {
    title: "Classic White & Sulli Blue",
    description:
      "NPG/ISO (Neopentyl Glycol Isophthalic) based gelcoat — UV stabilized and corrosion resistant. Many pools with this finish are well over 25 years old and still look stunning. Crystal clear water will always have a sparkling blue look.",
    tags: ["UV Stabilized", "Corrosion Resistant", "25+ Year Track Record"],
  },
  {
    title: "Iridium Colored Finishes",
    description:
      "A solid surface material consisting of oven-cured colored chips in a clear UV and chemical resistant resin, applied over a color-matched gelcoat that acts as both a barrier coat and primer for the fiberglass.",
    tags: ["Oven Cured", "UV Resistant", "Chemical Resistant"],
  },
];

const compareCards = [
  {
    title: "San Juan VS Competitors",
    description: "See how San Juan's hand-laid process compares to chopper-gun manufacturers.",
    href: "/san-juan-fiberglass-pools",
  },
  {
    title: "Fiberglass Pool Quality",
    description: "Understand the engineering and materials behind premium fiberglass pools.",
    href: "/fiberglass-pool-quality",
  },
  {
    title: "Fiberglass Pool Colors",
    description: "Explore the full range of gelcoat and Iridium finish options.",
    href: "/fiberglass-pool-colors",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How San Juan Pools Are Made",
  description:
    "The complete manufacturing process behind San Juan fiberglass pools — from Vinyl Ester resin and hand-laid woven fiberglass to expert craftsmanship and quality control.",
  author: {
    "@type": "Organization",
    name: "Maxima Pools",
  },
  publisher: {
    "@type": "Organization",
    name: "Maxima Pools",
    telephone: "+1-614-384-5081",
  },
};

export default function HowItsMadePage() {
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
            "/images/how-its-made/step-panels.webp",
            "/images/how-its-made/step-ribs.webp",
            "/images/how-its-made/construction.webp",
            "/images/how-its-made/step-mold.webp",
          ]}
          alt="San Juan fiberglass pool manufacturing process"
          interval={6000}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/95 via-[#021526]/80 to-[#021526]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/70 via-transparent to-[#021526]/30" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white/80 font-medium">How San Juan Pools Are Made</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Factory size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Craftsmanship & Engineering
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">How San Juan Pools </span>
              <span className="shimmer-text">Are Made</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-2xl">
              Not all fiberglass pools are built the same. Each San Juan pool is
              carefully built with a minimum of five hand-laid fiberglass layers,
              ensuring superior strength, precision, and long-term durability.
            </p>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
              >
                Get a Free Estimate
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+16143845081"
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

      {/* ── Three Pillars — Materials & Craftsmanship ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  What Sets San Juan Apart
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Three Pillars of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Superior Quality
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The best resin, the strongest fiberglass, and the most experienced
                hands in the industry — working together on every pool.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {materialPillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={((i + 1) as 1 | 2 | 3)}>
                <div className="group grid lg:grid-cols-12 gap-6 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500">
                  {/* Icon + Badge */}
                  <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <pillar.icon size={24} className="text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-accent font-semibold text-sm mb-4">
                      {pillar.subtitle}
                    </p>
                    <p className="text-gray-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Supplier badge */}
                  <div className="lg:col-span-3 flex lg:justify-end items-start">
                    <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm">
                      <Image
                        src={pillar.badgeImage}
                        alt={pillar.badge}
                        width={60}
                        height={40}
                        className="h-8 w-auto object-contain"
                      />
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        {pillar.badge}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Why Hand-Laid Matters — dark section ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#021526] via-[#042a45] to-[#063554]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl overflow-hidden col-span-2 border border-white/10">
                  <Image
                    src="/images/how-its-made/construction.webp"
                    alt="San Juan pool fiberglass construction"
                    width={800}
                    height={500}
                    className="w-full aspect-[16/10] object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/how-its-made/step-glass.webp"
                    alt="Hand-laid fiberglass process"
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(max-width: 1024px) 50vw, 22vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/how-its-made/step-ribs.webp"
                    alt="Structural ribs reinforcement"
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(max-width: 1024px) 50vw, 22vw"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                  <Microscope size={14} className="text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Structural Advantage
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  What Does This Mean{" "}
                  <span className="shimmer-text">For Your Pool?</span>
                </h2>
                <p className="text-white/55 text-lg leading-relaxed mb-4">
                  Hand-laid fiberglass creates a continuous, uniform shell — like a
                  single unbroken rope. Sprayed fiberglass is like glued-together
                  pieces: one endures, the other breaks under stress.
                </p>
                <p className="text-white/55 text-lg leading-relaxed mb-8">
                  In the freeze-thaw cycles of Ohio winters, there is constant ground
                  movement. It&apos;s this movement that causes most fiberglass pool
                  failures — and why hand-laid construction matters.
                </p>

                <ul className="space-y-3">
                  {strengthPoints.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/70">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── YouTube Video ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Watch the Process
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                See How It&apos;s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Built
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                This video shows exactly how a San Juan fiberglass pool is
                constructed — from the first layer to the finished shell.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900 aspect-video shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/rq7xEeLpDw0?rel=0&modestbranding=1"
                title="How San Juan fiberglass pools are made"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Manufacturing Steps — Interactive ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Step by Step
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                The 7-Step{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Manufacturing Process
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Click each step to explore how your San Juan pool goes from mold to
                masterpiece.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ManufacturingSteps />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Surface Finishes ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <Gem size={14} className="text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Finishes
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  Two Premium{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Surface Finishes
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Every San Juan pool comes with a choice of two industry-leading
                  surface technologies — both engineered for beauty and durability.
                </p>

                <Link
                  href="/fiberglass-pool-colors"
                  className="group inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
                >
                  Explore all colors
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-4">
                {finishes.map((finish) => (
                  <div
                    key={finish.title}
                    className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6 sm:p-7 hover:shadow-lg hover:border-accent/20 transition-all duration-500"
                  >
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {finish.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">
                      {finish.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {finish.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent bg-accent/8 border border-accent/15 rounded-full px-3 py-1"
                        >
                          <CheckCircle2 size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Compare & Learn More ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
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
                  <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full flex flex-col">
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
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[380px] flex items-center">
              <Image
                src="/images/how-its-made/step-final.webp"
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
                    Ready for a Pool Built to{" "}
                    <span className="shimmer-text">Last a Lifetime?</span>
                  </h2>
                  <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                    Talk to our team today and get a personalized quote for a
                    San Juan fiberglass pool — the strongest pool on the market.
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
