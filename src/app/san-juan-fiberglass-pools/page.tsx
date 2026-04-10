import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  Shield,
  Layers,
  CheckCircle2,
  XCircle,
  Award,
  Clock,
  Gem,
  Factory,
  HandMetal,
  Droplets,
  FlaskConical,
  Hammer,
  Palette,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { ImageLightbox } from "@/components/ImageLightbox";
import { ComparisonTable } from "./comparison-table";

export const metadata: Metadata = {
  title: "San Juan VS Competitors | Maxima Pools - Columbus, OH",
  description:
    "See how San Juan's hand-laid fiberglass construction compares to chopped/sprayed competitors. 32-mil gel coat, Vinyl Ester resin throughout, and 5+ guaranteed layers.",
  openGraph: {
    title: "San Juan VS Competitors | Maxima Pools",
    description:
      "Hand-laid vs chopped fiberglass — see the 10-point comparison that proves San Juan builds the strongest pool on the market.",
    type: "website",
  },
};

const stats = [
  { value: "70yr", label: "Industry Leader", icon: Clock },
  { value: "32mil", label: "Thickest Gel Coat", icon: Layers },
  { value: "5+", label: "Guaranteed Layers", icon: Shield },
  { value: "100%", label: "Hand-Laid", icon: HandMetal },
];

const sanJuanAdvantages = [
  {
    icon: Layers,
    title: "100% Hand-Laid Sheets",
    description:
      "Multiple layers of solid fiberglass sheets applied sequentially — replicating the same boat hull manufacturing process used in marine applications.",
  },
  {
    icon: FlaskConical,
    title: "Vinyl Ester Throughout",
    description:
      "Marine-grade Vinyl Ester resin applied throughout the entire pool shell — not just the last layer. Both sides are fully protected against water intrusion.",
  },
  {
    icon: Gem,
    title: "32-mil Gel Coat",
    description:
      "The thickest gel coat in the industry — two 16-mil layers for superior UV protection, stain resistance, and lasting color vibrancy.",
  },
  {
    icon: Hammer,
    title: "No Coring or Fillers",
    description:
      "Pure fiberglass composite throughout. No coring, no fillers, no chopped fiberglass, and no safety ledges needed — the shell is strong enough without them.",
  },
];

const chopDownsides = [
  "No consistency in fiberglass thickness — depends on spray gun duration",
  "Resin concentrates in random areas, creating uneven weak layers",
  "Requires interior \"safety ledges\" that weaken the shell and collect dirt",
  "Variable quality depends on spray operator skill, not controlled QA",
  "Vinyl Ester resin used only on the last layer — interior unprotected",
  "Thinner gel coat (27–30 mil) with single-layer application",
];

const handlaidBenefits = [
  "Guaranteed minimum 5 hand-laid fiberglass layers per shell",
  "Consistent thickness throughout the entire mold — front to back",
  "Excess resin removed from each layer for optimal strength-to-weight ratio",
  "No safety ledges needed — shell integrity stands on its own",
  "Vinyl Ester resin throughout entire pool — both sides protected",
  "32-mil gel coat in two layers — thickest and most durable in the industry",
];

const compareCards = [
  {
    title: "How It's Made",
    description: "See the full 7-step hand-laid manufacturing process.",
    href: "/how-san-juan-pools-are-made",
    icon: Factory,
  },
  {
    title: "Fiberglass Pool Quality",
    description: "Explore the materials and engineering behind each layer.",
    href: "/fiberglass-pool-quality",
    icon: Gem,
  },
  {
    title: "Fiberglass Pool Colors",
    description: "Browse all gelcoat and Iridium finish options.",
    href: "/fiberglass-pool-colors",
    icon: Palette,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "San Juan Pools vs. Competitors",
  description:
    "Detailed comparison of San Juan's hand-laid fiberglass construction vs. chopped/sprayed competitors across 10 key manufacturing features.",
  author: { "@type": "Organization", name: "Maxima Pools" },
  publisher: { "@type": "Organization", name: "Maxima Pools" },
};

export default function SanJuanVsCompetitorsPage() {
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
            "/images/why-fiberglass/canyon-beach.webp",
            "/images/pool-quality/wylela-beach.png",
            "/images/pools/great-lakes.jpg",
          ]}
          alt="San Juan Pools vs competitors comparison"
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
            <span className="text-white/80 font-medium">San Juan VS Competitors</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Award size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                The Industry Leader
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">San Juan VS </span>
              <span className="shimmer-text">Competitors</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-2xl">
              One simple truth drives everything we do: building the highest
              quality fiberglass pools in the world. See how San Juan&apos;s hand-laid
              process compares — point by point.
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
                href="tel:6143845917"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-white font-semibold hover:bg-white/[0.12] transition-all text-sm"
              >
                <Phone size={16} />
                (614) 384-5917
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

      {/* ── San Juan Advantages — 4 cards ── */}
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
                The San Juan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Advantage
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Nearly 70 years of hand-laid craftsmanship. The first fiberglass pool
                San Juan ever built is still in the ground today.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {sanJuanAdvantages.map((item, i) => (
              <ScrollReveal key={item.title} delay={((i + 1) as 1 | 2 | 3)}>
                <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <item.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Full Comparison Table ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Point by Point
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                The Full{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Comparison
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                10 manufacturing features compared. See exactly where San Juan
                outperforms every competitor.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <ComparisonTable />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Hand-Laid vs Chopped — dark section ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#021526] via-[#042a45] to-[#063554]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <HandMetal size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Manufacturing Methods
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                Hand-Laid vs.{" "}
                <span className="shimmer-text">Chopped</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-5">
            <ScrollReveal delay={1}>
              <div className="bg-white/[0.04] border border-accent/20 rounded-2xl sm:rounded-3xl p-7 sm:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-accent/20 border border-accent/25 flex items-center justify-center">
                    <CheckCircle2 size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">San Juan — Hand-Laid</h3>
                    <p className="text-accent text-xs font-semibold uppercase tracking-wider">The right way</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {handlaidBenefits.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/70">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div className="bg-white/[0.04] border border-red-400/15 rounded-2xl sm:rounded-3xl p-7 sm:p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-red-500/15 border border-red-400/20 flex items-center justify-center">
                    <XCircle size={22} className="text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Competitors — Chopped</h3>
                    <p className="text-red-400/70 text-xs font-semibold uppercase tracking-wider">Cutting corners</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {chopDownsides.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/50">
                      <XCircle size={15} className="text-red-400/50 shrink-0 mt-0.5" />
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

      {/* ── Visual Evidence — images with lightbox ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    See the Proof
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  The Difference is{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Visible
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  These spec sheets show the structural differences between San Juan&apos;s
                  hand-laid construction and competitors&apos; chopped methods. Click to
                  zoom in and see the details.
                </p>

                <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200">
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
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200">
                  <ImageLightbox
                    src="/images/pool-quality/layers-spec.webp"
                    alt="San Juan Pools layers specification sheet"
                    width={600}
                    height={800}
                    className="w-full object-contain"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-gray-200">
                  <ImageLightbox
                    src="/images/san-juan-vs/compare-list.webp"
                    alt="San Juan features comparison list"
                    width={600}
                    height={400}
                    className="w-full object-contain"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
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
                  Explore More
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Dive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Deeper
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {compareCards.map((card, i) => (
              <ScrollReveal key={card.title} delay={((i + 1) as 1 | 2 | 3)}>
                <Link href={card.href} className="block h-full">
                  <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full flex flex-col">
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
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[380px] flex items-center">
              <Image
                src="/images/pool-quality/blue-lagoon.jpg"
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
                    Choose the Pool That{" "}
                    <span className="shimmer-text">Outlasts Them All</span>
                  </h2>
                  <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                    Talk to our team and get a personalized quote for a San Juan
                    fiberglass pool — the strongest pool on the market.
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
                      href="tel:6143845917"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      <Phone size={18} />
                      (614) 384-5917
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
