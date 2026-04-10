import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  PawPrint,
  Shield,
  Droplets,
  Heart,
  Sun,
  Sparkles,
  CheckCircle2,
  Wrench,
  Clock,
  Layers,
  Award,
  Gem,
  Factory,
  ThermometerSun,
  HandMetal,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroImageCycle } from "@/components/HeroImageCycle";

export const metadata: Metadata = {
  title: "The Perfect Pool for Your Pet | Maxima Pools - Columbus, OH",
  description:
    "San Juan fiberglass pools are a dog's best friend. Smooth surface, scratch-resistant, low chemical maintenance, and built-in shallow areas for safe pet swimming.",
  openGraph: {
    title: "The Perfect Pool for Your Pet | Maxima Pools",
    description:
      "Fiberglass pools designed with pets in mind — smooth, durable, low-maintenance, and safe for dogs and families alike.",
    type: "website",
  },
};

const stats = [
  { value: "0", label: "Scratches from Nails", icon: Shield },
  { value: "<1hr", label: "Weekly Maintenance", icon: Clock },
  { value: "17x", label: "Stronger Than Concrete", icon: Layers },
  { value: "100%", label: "Pet Friendly", icon: PawPrint },
];

const petBenefits = [
  {
    icon: HandMetal,
    title: "Smooth, Gentle Surface",
    description:
      "The non-abrasive gel coat finish is gentle on pet paws and won't cause scratches or irritation — unlike the rough, sandpaper-like texture of concrete pools.",
  },
  {
    icon: Shield,
    title: "Scratch & Claw Resistant",
    description:
      "Fiberglass is incredibly resistant to nail damage. Unlike vinyl liners that rip and tear from claws, the gel coat surface stays intact swim after swim.",
  },
  {
    icon: Droplets,
    title: "Fewer Chemicals, Safer Water",
    description:
      "The smooth, non-porous surface requires significantly fewer chemicals to stay clean — meaning safer water for pets who love to drink from the pool.",
  },
  {
    icon: Sun,
    title: "Built-In Shallow Areas",
    description:
      "Tanning ledges and sun shelves provide safe, shallow areas where pets can wade, cool off, and relax without being in deep water.",
  },
  {
    icon: ThermometerSun,
    title: "Cool Off in Ohio Summers",
    description:
      "A fiberglass pool creates the perfect backyard retreat for hot Ohio weather — your pets can cool down naturally while the family enjoys the pool together.",
  },
  {
    icon: Wrench,
    title: "Virtually Maintenance-Free",
    description:
      "No acid washes, no replastering, no liner replacements. The durable fiberglass shell is designed to last decades with minimal upkeep — even with active pets.",
  },
];

const whyFiberglass = [
  "Smooth gel coat won't hurt paws or skin",
  "Resistant to scratches from dog nails",
  "Non-porous surface prevents algae buildup",
  "Fewer chemicals = safer for pets and kids",
  "Tanning ledges provide safe shallow wading",
  "17x stronger than concrete — built to last",
  "No vinyl liner to rip, tear, or replace",
  "Less than 1 hour of maintenance per week",
];

const vsOthers = [
  {
    type: "Fiberglass",
    icon: PawPrint,
    color: "accent",
    borderColor: "border-accent/20",
    bgColor: "bg-accent/[0.04]",
    items: [
      "Smooth, paw-friendly surface",
      "Scratch-resistant gel coat",
      "Minimal chemicals needed",
      "Built-in tanning ledges",
      "No liner to damage",
    ],
  },
  {
    type: "Concrete / Gunite",
    icon: Shield,
    color: "gray-400",
    borderColor: "border-gray-200",
    bgColor: "bg-gray-50",
    items: [
      "Rough surface — like 80-grit sandpaper",
      "Can scrape paw pads raw",
      "Requires heavy chemical treatment",
      "No built-in shallow areas",
      "Needs replastering every 10–15 years",
    ],
  },
  {
    type: "Vinyl Liner",
    icon: Droplets,
    color: "gray-400",
    borderColor: "border-gray-200",
    bgColor: "bg-gray-50",
    items: [
      "Punctures easily from claws",
      "Slippery with rough seams",
      "Liner replacements every 5–9 years",
      "Algae grows in seams",
      "Not recommended for pet owners",
    ],
  },
];

const compareCards = [
  {
    title: "San Juan VS Competitors",
    description: "See the full hand-laid vs chopped fiberglass comparison.",
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
    title: "How It's Made",
    description: "The 7-step manufacturing process behind every San Juan pool.",
    href: "/how-san-juan-pools-are-made",
    icon: Factory,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Perfect Pool for Your Pet",
  description:
    "Why San Juan fiberglass pools are the best choice for pet owners — smooth surface, scratch-resistant, low chemical maintenance, and built-in shallow wading areas.",
  author: { "@type": "Organization", name: "Maxima Pools" },
  publisher: { "@type": "Organization", name: "Maxima Pools" },
};

export default function PetPoolPage() {
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
            "/images/pet-pool/dog-pool.jpg",
            "/images/why-fiberglass/canyon-beach.webp",
            "/images/pool-quality/wylela-beach.png",
          ]}
          alt="Dog enjoying a San Juan fiberglass pool"
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
            <span className="text-white/80 font-medium">Pool for Your Pet</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <PawPrint size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Pet Friendly
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">The Perfect Pool for </span>
              <span className="shimmer-text">Your Pet</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-2xl">
              San Juan fiberglass pools are a dog&apos;s best friend. Smooth on paws,
              resistant to scratches, and built with safe shallow areas for
              pets to wade, play, and cool off.
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

      {/* ── Why Pets Love Fiberglass — split layout ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    A Dog&apos;s Best Friend
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  Why Pets Love{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Fiberglass Pools
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Fiberglass is the safest, most durable, and lowest-maintenance
                  pool type for households with pets. The smooth gel coat surface
                  protects paws, resists nail damage, and requires far fewer
                  chemicals — creating a healthier environment for the whole family.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Built-in tanning ledges and shallow areas give your dog a safe
                  place to wade, cool off, and enjoy the water without being in
                  over their head.
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {whyFiberglass.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 font-medium">{item}</span>
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
                    src="/images/pet-pool/dog-pool.jpg"
                    alt="Happy dog enjoying a San Juan fiberglass pool"
                    width={800}
                    height={533}
                    className="w-full aspect-[3/2] object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 6 Benefits Grid ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
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
                Designed With{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Pets in Mind
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every feature of a San Juan fiberglass pool benefits pet owners —
                from the surface texture to the structural design.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {petBenefits.map((item, i) => (
              <ScrollReveal key={item.title} delay={((i % 3 === 0 ? 1 : i % 3 === 1 ? 2 : 3) as 1 | 2 | 3)}>
                <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
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

      {/* ── Pool Type Comparison — dark section ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <PawPrint size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Pet Safety Comparison
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                Which Pool is Safest for{" "}
                <span className="shimmer-text">Your Pet?</span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed">
                Not all pool types are created equal when it comes to pet safety.
                Here&apos;s how they compare.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {vsOthers.map((pool, i) => {
              const isFirst = i === 0;
              return (
                <ScrollReveal key={pool.type} delay={((i + 1) as 1 | 2 | 3)}>
                  <div
                    className={`relative rounded-2xl sm:rounded-3xl p-7 sm:p-8 h-full ${
                      isFirst
                        ? "bg-white/[0.06] border-2 border-accent/30"
                        : "bg-white/[0.03] border border-white/[0.08]"
                    }`}
                  >
                    {isFirst && (
                      <div className="absolute -top-3 left-6 bg-gradient-to-r from-accent to-accent-light text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg shadow-accent/25">
                        Best for Pets
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-6 mt-1">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          isFirst
                            ? "bg-accent/20 border border-accent/25"
                            : "bg-white/[0.06] border border-white/[0.08]"
                        }`}
                      >
                        <pool.icon
                          size={20}
                          className={isFirst ? "text-accent" : "text-white/40"}
                        />
                      </div>
                      <h3
                        className={`text-lg font-bold ${
                          isFirst ? "text-white" : "text-white/60"
                        }`}
                      >
                        {pool.type}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {pool.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          {isFirst ? (
                            <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                          ) : (
                            <Heart size={15} className="text-white/20 shrink-0 mt-0.5" />
                          )}
                          <span
                            className={`text-sm leading-relaxed ${
                              isFirst ? "text-white/70" : "text-white/40"
                            }`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Tanning Ledge Callout ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
              <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light p-10 sm:p-14 lg:p-20">
                <div className="absolute inset-0 water-caustics opacity-10" />
                <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2 mb-6">
                      <Sun size={14} className="text-accent-light" />
                      <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
                        Perfect for Pets
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                      Built-In{" "}
                      <span className="shimmer-text">Tanning Ledges</span>
                    </h2>
                    <p className="text-white/55 text-lg leading-relaxed mb-8">
                      Many San Juan pool models include integrated tanning ledges
                      and sun shelves — shallow areas just 6–12 inches deep where
                      pets can safely wade, cool off, and enjoy the water at their
                      own pace. It&apos;s the ultimate pet-friendly feature.
                    </p>
                    <Link
                      href="/pools"
                      className="group inline-flex items-center gap-2 text-accent-light font-semibold hover:text-white transition-colors"
                    >
                      Explore tanning ledges
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="relative hidden lg:block">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      <Image
                        src="/images/pet-pool/dog-pool.jpg"
                        alt="Dog on tanning ledge in fiberglass pool"
                        width={600}
                        height={400}
                        className="w-full aspect-[3/2] object-cover"
                        sizes="40vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
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
                src="/images/pet-pool/dog-pool.jpg"
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
                    Ready for a Pet-Friendly{" "}
                    <span className="shimmer-text">Pool?</span>
                  </h2>
                  <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                    Give your family — four-legged members included — a pool
                    designed for everyone to enjoy safely.
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
