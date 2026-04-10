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
  Clock,
  Droplets,
  Zap,
  Award,
  Wrench,
  Leaf,
  XCircle,
  Factory,
  Palette,
  Gem,
  PawPrint,
  HandMetal,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { PoolComparison } from "./pool-comparison";

export const metadata: Metadata = {
  title: "Why Fiberglass Pools Make Sense | Maxima Pools - Columbus, OH",
  description:
    "Discover why fiberglass pool construction outperforms gunite and vinyl. Hand-laid layers, 17x stronger than concrete, less maintenance, faster installation. San Juan Pools dealer in Columbus, OH.",
  openGraph: {
    title: "Why Fiberglass Pools Make Sense | Maxima Pools",
    description:
      "Compare fiberglass vs gunite vs vinyl. See why San Juan hand-laid fiberglass pools are stronger, lower maintenance, and built to last decades.",
    type: "website",
  },
};

const stats = [
  { value: "17x", label: "Stronger Than Concrete", icon: Shield },
  { value: "<1hr", label: "Weekly Maintenance", icon: Clock },
  { value: "Days", label: "Not Weeks to Install", icon: Zap },
  { value: "25yr", label: "Structural Warranty", icon: Award },
];

const whyFiberglass = [
  {
    icon: Shield,
    title: "Unmatched Durability",
    description:
      "All-weather tolerant, stress-free, and pet friendly. A fiberglass pool is 17x stronger than concrete and flexes with ground movement instead of cracking.",
  },
  {
    icon: Clock,
    title: "Minimal Maintenance",
    description:
      "Less than 1 hour per week vs. 5+ hours for gunite or vinyl. The smooth, non-porous surface resists algae and requires minimal chemicals.",
  },
  {
    icon: Zap,
    title: "Rapid Installation",
    description:
      "Installed in days, not weeks or months. Factory-manufactured with controlled quality assurance means your pool arrives ready to set.",
  },
  {
    icon: Droplets,
    title: "Algae Resistant",
    description:
      "The smooth gel coat surface prevents algae from adhering — unlike porous concrete where algae grows through the walls.",
  },
  {
    icon: Leaf,
    title: "Energy Efficient",
    description:
      "Circulate just 4–6 hours per day vs. 10 hours for gunite. Lower electrical usage means lower bills year after year.",
  },
  {
    icon: Wrench,
    title: "No Repairs Needed",
    description:
      "No acid washes, no replastering, no liner replacements. When properly maintained, a fiberglass pool requires zero structural repairs.",
  },
];

const sanJuanGuarantees = [
  "All fiberglass is 100% hand-laid — never sprayed",
  "32-mil gel coat — thickest in the industry (two 16-mil layers)",
  "5 oz strand mat per layer",
  "24 oz woven roving per layer",
  "Minimum of 5 fiberglass layers per shell",
  "No coring, fillers, chopped fiberglass, or safety ledges",
];

const chopDownsides = [
  "No consistency in fiberglass thickness — depends on spray gun duration",
  "Resin concentrates in random areas, creating uneven layers",
  "Requires \"safety ledges\" that weaken the shell and collect dirt",
  "Weaker structural integrity under freeze-thaw conditions",
];

const handlaidBenefits = [
  "Consistent thickness throughout the entire mold",
  "Even resin and woven roving distribution front to back",
  "Stronger design with no safety ledges needed",
  "Guaranteed minimum 5 layers per shell",
];

const compareCards = [
  {
    title: "San Juan VS Competitors",
    description: "Side-by-side comparison of construction methods and materials.",
    href: "/san-juan-fiberglass-pools",
    icon: Award,
  },
  {
    title: "Fiberglass Pool Quality",
    description: "The materials and engineering behind premium pool shells.",
    href: "/fiberglass-pool-quality",
    icon: Gem,
  },
  {
    title: "Fiberglass Pool Colors",
    description: "Explore gelcoat and Iridium finish color options.",
    href: "/fiberglass-pool-colors",
    icon: Palette,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why Fiberglass Pools Make Sense",
  description:
    "Discover why hand-laid fiberglass pool construction outperforms gunite and vinyl in durability, maintenance, and long-term value.",
  author: { "@type": "Organization", name: "Maxima Pools" },
  publisher: { "@type": "Organization", name: "Maxima Pools" },
};

export default function WhyFiberglassPage() {
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
            "/images/why-fiberglass/sanjuan-header.png",
            "/images/why-fiberglass/canyon-beach.webp",
            "/images/why-fiberglass/glass-process.webp",
          ]}
          alt="San Juan fiberglass pool — why fiberglass makes sense"
          interval={6000}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021526] via-[#021526]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/40 via-transparent to-[#021526]/20" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white/80 font-medium">Why Fiberglass Pools</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Layers size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                The Smart Choice
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">Why Fiberglass Pools </span>
              <span className="shimmer-text">Make Sense</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-2xl">
              Strength through precision. Each San Juan pool includes a minimum
              of five hand-laid fiberglass layers, creating a structure built to
              last for decades.
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

      {/* ── 6 Benefits — bento grid ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Key Benefits
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Why Fiberglass{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Outperforms
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Compare for yourself and see why fiberglass pool construction
                consistently outperforms gunite and vinyl options.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyFiberglass.map((item, i) => (
              <ScrollReveal key={item.title} delay={((i % 3 === 0 ? 1 : i % 3 === 1 ? 2 : 3) as 1 | 2 | 3)}>
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

      {/* ── San Juan Guarantee — split with image ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    San Juan Guarantee
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  What You&apos;re{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Guaranteed
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  With a San Juan pool, every shell is built to the same
                  uncompromising standard — no shortcuts, no substitutions.
                </p>

                <ul className="space-y-3">
                  {sanJuanGuarantees.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/why-fiberglass/canyon-beach.webp"
                    alt="San Juan fiberglass pool — guaranteed quality"
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

      {/* ── Comparison Table ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Side by Side
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Fiberglass vs. Gunite vs.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Vinyl
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                See how San Juan fiberglass stacks up against the competition
                across every category that matters.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <PoolComparison />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Hand-Laid vs Chopped — dark section ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                  <HandMetal size={14} className="text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    The Difference
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  Our Pools Are{" "}
                  <span className="shimmer-text">Much Stronger</span>
                </h2>
                <p className="text-white/55 text-lg leading-relaxed mb-8">
                  Despite clear evidence that hand-laid fiberglass produces a
                  stronger result, many competitors still use chopped fiberglass
                  methods — reducing quality and consistency.
                </p>

                <div className="rounded-2xl overflow-hidden border border-white/10 mb-8">
                  <Image
                    src="/images/why-fiberglass/glass-process.webp"
                    alt="Hand-laid fiberglass manufacturing process"
                    width={600}
                    height={450}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-8 lg:pt-20">
                {/* Chopped downsides */}
                <div className="bg-white/[0.04] border border-red-400/15 rounded-2xl p-6 sm:p-7">
                  <h3 className="text-lg font-bold text-red-300 mb-4 flex items-center gap-2">
                    <XCircle size={20} />
                    Downsides of Chopped Fiberglass
                  </h3>
                  <ul className="space-y-3">
                    {chopDownsides.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-white/60">
                        <XCircle size={14} className="text-red-400/60 shrink-0 mt-1" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hand-laid benefits */}
                <div className="bg-white/[0.04] border border-accent/20 rounded-2xl p-6 sm:p-7">
                  <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                    <CheckCircle2 size={20} />
                    Benefits of Hand-Laid Fiberglass
                  </h3>
                  <ul className="space-y-3">
                    {handlaidBenefits.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-white/70">
                        <CheckCircle2 size={14} className="text-accent shrink-0 mt-1" />
                        <span className="text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
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
                Compare &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Learn More
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
                    Ready for a Pool That{" "}
                    <span className="shimmer-text">Makes Sense?</span>
                  </h2>
                  <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                    Talk to our team today and discover why fiberglass is the
                    smartest investment for your backyard.
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
