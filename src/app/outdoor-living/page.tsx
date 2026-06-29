import Image from "@/components/Image";
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
  Award,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import content from "@/content/pages/outdoor-living.json";

export const metadata: Metadata = {
  alternates: { canonical: "/outdoor-living/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/outdoor-living/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    type: "website",
  },
};

// Lucide icons referenced by name from the editable content file.
const iconMap = {
  Sparkles,
  Wrench,
  Sun,
  Award,
  UtensilsCrossed,
  Flame,
  Tent,
  Lightbulb,
  Tv,
} as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Outdoor Living Design & Construction",
  provider: {
    "@type": "LocalBusiness",
    name: "Maxima Pools",
    telephone: "+1-614-384-5081",
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
          images={content.hero.images}
          alt="Custom outdoor living spaces by Maxima Pools"
          interval={6000}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/40 via-transparent to-[#0c4a6e]/20" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white" />
            <span className="text-white font-medium">Outdoor Living</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Sun size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">{content.hero.headingLead}</span>{" "}
              <span className="shimmer-text">{content.hero.headingHighlight}</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white leading-relaxed mb-8 max-w-2xl">
              {content.hero.subtitle}
            </p>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-3 *:whitespace-nowrap">
              <Link
                href={content.hero.startHref}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
              >
                {content.hero.startLabel}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={content.hero.simulatorHref}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm"
              >
                <Sparkles size={16} className="text-accent" />
                {content.hero.simulatorLabel}
              </Link>
              <a
                href={content.hero.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-white font-semibold hover:bg-white/[0.12] transition-all text-sm"
              >
                <Phone size={16} />
                {content.hero.phoneDisplay}
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
              {content.stats.map((s) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap];
                return (
                  <div
                    key={s.label}
                    className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 sm:p-6 flex items-center gap-4 hover:bg-white/[0.07] transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0">
                      {Icon && <Icon size={20} className="text-accent" />}
                    </div>
                    <div>
                      <p className="text-xl sm:text-2xl font-bold text-white">{s.value}</p>
                      <p className="text-[11px] sm:text-xs text-white font-medium uppercase tracking-wider">
                        {s.label}
                      </p>
                    </div>
                  </div>
                );
              })}
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
                    {content.vision.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  {content.vision.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.vision.headingHighlight}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {content.vision.paragraph1}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {content.vision.paragraph2}
                </p>

                <ul className="space-y-2.5">
                  {content.vision.points.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={content.vision.concreteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
                >
                  {content.vision.concreteLabel}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={content.vision.image}
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
                  {content.servicesSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.servicesSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.servicesSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.servicesSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {content.services.map((service, i) => {
              const isEven = i % 2 === 0;
              const Icon = iconMap[service.icon as keyof typeof iconMap];
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
                        {Icon && <Icon size={24} className="text-accent" />}
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl overflow-hidden col-span-2 border border-white/10">
                  <Image
                    src={content.kitchensFeature.imageMain}
                    alt="Custom outdoor kitchen with grill and countertops"
                    width={800}
                    height={500}
                    className="w-full aspect-[16/10] object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={content.kitchensFeature.imageGrill}
                    alt="Outdoor grill setup"
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(max-width: 1024px) 50vw, 22vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={content.kitchensFeature.imageDetail}
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
                    {content.kitchensFeature.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  {content.kitchensFeature.headingLead}{" "}
                  <span className="shimmer-text">{content.kitchensFeature.headingHighlight}</span>
                </h2>
                <p className="text-white text-lg leading-relaxed mb-8">
                  {content.kitchensFeature.paragraph}
                </p>

                <ul className="space-y-3">
                  {content.kitchensFeature.points.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={content.kitchensFeature.concreteHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-white text-primary-dark font-semibold rounded-full hover:bg-white/90 hover:scale-105 transition-all duration-300 text-sm shadow-lg"
                >
                  {content.kitchensFeature.concreteLabel}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
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
            {content.lightingShade.map((card, i) => {
              const Icon = iconMap[card.icon as keyof typeof iconMap];
              return (
                <ScrollReveal key={card.title} delay={((i + 1) as 1 | 2)}>
                  <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden h-full min-h-[400px]">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/90 via-[#0c4a6e]/40 to-transparent" />
                    <div className="relative h-full flex flex-col justify-end p-7 sm:p-9">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-11 h-11 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/25 flex items-center justify-center">
                          {Icon && <Icon size={22} className="text-accent" />}
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="text-white leading-relaxed max-w-lg">
                        {card.description}
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

      {/* ── CTA ── */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[380px] flex items-center">
              <Image
                src={content.finalCta.image}
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/80 to-transparent" />
              <div className="absolute inset-0 water-caustics opacity-10" />

              <div className="relative px-8 sm:px-12 lg:px-16 py-16 sm:py-20">
                <div className="max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                    {content.finalCta.headingLead}{" "}
                    <span className="shimmer-text">{content.finalCta.headingHighlight}</span>
                  </h2>
                  <p className="text-lg text-white leading-relaxed mb-10 max-w-lg">
                    {content.finalCta.text}
                  </p>
                  <div className="flex flex-wrap gap-3 *:whitespace-nowrap">
                    <Link
                      href={content.finalCta.consultationHref}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                    >
                      {content.finalCta.consultationLabel}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href={content.finalCta.simulatorHref}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      <Sparkles size={18} className="text-accent" />
                      {content.finalCta.simulatorLabel}
                    </Link>
                    <a
                      href={content.finalCta.phoneHref}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      <Phone size={18} />
                      {content.finalCta.phoneDisplay}
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
