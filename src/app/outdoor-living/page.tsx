import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  Flame,
  UtensilsCrossed,
  Lightbulb,
  Tent,
  Tv,
  Wrench,
  CheckCircle2,
  Sparkles,
  Sun,
  Users,
  Award,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroImageCycle } from "@/components/HeroImageCycle";

export const metadata: Metadata = {
  title: "Outdoor Living | Maxima Pools - Columbus, OH",
  description:
    "Transform your backyard into an outdoor oasis. Custom kitchens, fire features, shade structures, lighting, and entertainment — designed and built in-house by Maxima Pools.",
  openGraph: {
    title: "Outdoor Living | Maxima Pools",
    description:
      "Beautifully designed outdoor living spaces crafted to enhance comfort, entertainment, and relaxation. Serving Columbus, OH.",
    type: "website",
  },
};

const stats = [
  { value: "100%", label: "Custom Designed", icon: Sparkles },
  { value: "In-House", label: "Design & Build", icon: Wrench },
  { value: "All-Season", label: "Engineered to Last", icon: Sun },
  { value: "5-Star", label: "Customer Rated", icon: Award },
];

const services = [
  {
    icon: UtensilsCrossed,
    title: "Custom Outdoor Kitchens",
    description:
      "Built-in grills, pizza ovens, bars, and durable countertops designed for performance and style. Year-round entertaining with prep areas and weatherproof cabinetry.",
    image: "/images/outdoor-living/outdoor-kitchens.png",
  },
  {
    icon: Flame,
    title: "Fire Features",
    description:
      "Fire pits, fire bowls, and custom fireplaces that create a warm, inviting atmosphere. Gas-powered options with dancing flames that reflect beautifully off the water.",
    image: "/images/outdoor-living/grill.jpg",
  },
  {
    icon: Tent,
    title: "Shade Structures",
    description:
      "Pergolas, gazebos, pavilions, and custom shelters engineered to blend with your home architecture while providing shade and structure for outdoor gatherings.",
    image: "/images/outdoor-living/shade-structures.png",
  },
  {
    icon: Lightbulb,
    title: "Outdoor Lighting",
    description:
      "Professional landscape and architectural lighting that extends your enjoyment after sunset. Path lighting, accent lighting, and ambient LED solutions for safety and beauty.",
    image: "/images/outdoor-living/lighting-2.jpg",
  },
  {
    icon: Tv,
    title: "Entertainment Add-Ons",
    description:
      "Outdoor TVs, sound systems, and smart technology that bring indoor comfort outside. Weatherproof solutions built for year-round use.",
    image: "/images/outdoor-living/general.jpg",
  },
  {
    icon: Wrench,
    title: "Functional Upgrades",
    description:
      "Sinks, storage, trash centers, and weatherproof cabinetry. Every detail is considered so your outdoor space is as practical as it is beautiful.",
    image: "/images/outdoor-living/kitchen-2.jpg",
  },
];

const whyMaxima = [
  "In-house designers and installers — no outsourcing",
  "Seamless integration with your pool design",
  "Durable concrete and hardscape construction",
  "Custom-tailored to your lifestyle and architecture",
  "One team, one timeline, one flawless result",
  "Serving Columbus, OH and surrounding areas",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Outdoor Living Design & Construction",
  provider: {
    "@type": "LocalBusiness",
    name: "Maxima Pools",
    telephone: "+1-614-384-5917",
    areaServed: { "@type": "City", name: "Columbus", addressRegion: "OH" },
  },
  description:
    "Custom outdoor living spaces including kitchens, fire features, shade structures, lighting, and entertainment — designed and built in-house.",
};

export default function OutdoorLivingPage() {
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
            "/images/outdoor-living/kitchen.jpg",
            "/images/outdoor-living/lighting.jpg",
            "/images/outdoor-living/shelter.jpg",
            "/images/outdoor-living/general.jpg",
          ]}
          alt="Custom outdoor living spaces by Maxima Pools"
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
            <span className="text-white/80 font-medium">Outdoor Living</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Sun size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Outdoor Living
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">Transform Your Backyard Into an </span>
              <span className="shimmer-text">Outdoor Oasis</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-2xl">
              Beautifully designed outdoor living spaces crafted to enhance
              comfort, entertainment, and relaxation — seamlessly integrated
              with your pool and home.
            </p>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-3">
              <Link
                href="/free-estimate"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
              >
                Start Your Project
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

      {/* ── Your Vision — split layout ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Our Approach
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  Your Vision,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Perfectly Designed
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  At Maxima Pools, we create outdoor spaces that blend seamlessly
                  with your pool design, lifestyle, and home architecture. Our
                  in-house designers and installers work as one team to deliver
                  a cohesive, flawless result.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  From the first sketch to the final stone, every detail is
                  custom-tailored to your vision — built with the same precision
                  and quality that defines our pool installations.
                </p>

                <ul className="space-y-2.5">
                  {whyMaxima.map((item) => (
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
                    src="/images/outdoor-living/kitchen.jpg"
                    alt="Custom outdoor living space by Maxima Pools"
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

      {/* ── Services — alternating rows ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Our Solutions
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Outdoor Living{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Solutions
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Everything you need to create the ultimate outdoor experience —
                designed, built, and integrated by one team.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {services.map((service, i) => {
              const isEven = i % 2 === 0;
              return (
                <ScrollReveal key={service.title}>
                  <div className="group grid lg:grid-cols-2 gap-5 bg-white rounded-2xl sm:rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl hover:border-accent/20 transition-all duration-500">
                    {/* Image */}
                    <div className={`relative aspect-[16/10] lg:aspect-auto overflow-hidden ${isEven ? "" : "lg:order-2"}`}>
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent lg:hidden" />
                    </div>

                    {/* Content */}
                    <div className={`p-7 sm:p-9 flex flex-col justify-center ${isEven ? "" : "lg:order-1"}`}>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                        <service.icon size={24} className="text-accent" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Outdoor Kitchens Feature — dark section ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#021526] via-[#042a45] to-[#063554]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl overflow-hidden col-span-2 border border-white/10">
                  <Image
                    src="/images/outdoor-living/outdoor-kitchens.png"
                    alt="Custom outdoor kitchen with grill and countertops"
                    width={800}
                    height={500}
                    className="w-full aspect-[16/10] object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/outdoor-living/grill.jpg"
                    alt="Outdoor grill setup"
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(max-width: 1024px) 50vw, 22vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src="/images/outdoor-living/kitchen-2.jpg"
                    alt="Outdoor kitchen detail"
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
                  <UtensilsCrossed size={14} className="text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Featured
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  Culinary Experiences{" "}
                  <span className="shimmer-text">Under the Open Sky</span>
                </h2>
                <p className="text-white/55 text-lg leading-relaxed mb-8">
                  Our custom outdoor kitchens are designed for performance and
                  style. From built-in grills and pizza ovens to full bars with
                  durable concrete countertops — everything is engineered for
                  year-round entertaining.
                </p>

                <ul className="space-y-3">
                  {[
                    "Built-in grills & pizza ovens",
                    "Durable concrete countertops",
                    "Weatherproof cabinetry & storage",
                    "Integrated sinks & prep areas",
                    "Custom bar & seating options",
                    "Seamless pool-to-kitchen flow",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white/70">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
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

      {/* ── Lighting & Shade — two feature cards ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-5">
            {/* Lighting */}
            <ScrollReveal delay={1}>
              <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden h-full min-h-[400px]">
                <Image
                  src="/images/outdoor-living/lighting-2.jpg"
                  alt="Professional outdoor lighting"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/90 via-[#021526]/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-7 sm:p-9">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/25 flex items-center justify-center">
                      <Lightbulb size={22} className="text-accent" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Lighting That Elevates Every Moment
                  </h3>
                  <p className="text-white/55 leading-relaxed max-w-lg">
                    Professional landscape and architectural lighting extends
                    your enjoyment after sunset — adding beauty, ambiance, and
                    safety to every corner of your outdoor space.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Shade Structures */}
            <ScrollReveal delay={2}>
              <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden h-full min-h-[400px]">
                <Image
                  src="/images/outdoor-living/shade-structures.png"
                  alt="Custom shade structures and pergolas"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/90 via-[#021526]/40 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-7 sm:p-9">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/25 flex items-center justify-center">
                      <Tent size={22} className="text-accent" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    Comfort, Style, and Protection
                  </h3>
                  <p className="text-white/55 leading-relaxed max-w-lg">
                    Custom pergolas, gazebos, and pavilions engineered to blend
                    with your home while providing shade and structure for
                    outdoor gatherings all year long.
                  </p>
                </div>
              </div>
            </ScrollReveal>
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
                src="/images/outdoor-living/shelter.jpg"
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
                    Ready to Elevate Your{" "}
                    <span className="shimmer-text">Outdoor Living?</span>
                  </h2>
                  <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                    Tell us your vision and we&apos;ll bring it to life. One team,
                    one timeline, one stunning outdoor space.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/free-estimate"
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
