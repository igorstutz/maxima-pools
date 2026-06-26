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
  Sparkles,
  Clock,
  Droplets,
  HandMetal,
  Award,
  Palette,
  FlaskConical,
  Factory,
  Hammer,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { ImageLightbox } from "@/components/ImageLightbox";
import { QualityLayers } from "./quality-layers";
import content from "@/content/pages/fiberglass-pool-quality.json";

const icons: Record<string, LucideIcon> = {
  HandMetal, Layers, Clock, Shield, FlaskConical, Award, Sparkles, Droplets,
  Factory, Palette,
};

export const metadata: Metadata = {
  alternates: { canonical: "/fiberglass-pool-quality/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/fiberglass-pool-quality/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    type: "website",
  },
};

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
          images={content.hero.images}
          alt="San Juan fiberglass pool quality craftsmanship"
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
            <span className="text-white font-medium">Fiberglass Pool Quality</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Gem size={14} className="text-accent" />
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
                href={content.hero.primaryHref}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
              >
                {content.hero.primaryLabel}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={content.hero.simulatorHref}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm"
              >
                <Sparkles size={16} className="text-accent" />
                {content.hero.simulatorLabel}
              </Link>
              <Link
                href={content.hero.tertiaryHref}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-white font-semibold hover:bg-white/[0.12] transition-all text-sm"
              >
                {content.hero.tertiaryLabel}
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
              {content.stats.map((s) => {
                const Icon = icons[s.icon];
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

      {/* ── Highest Quality — split layout ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.highestQuality.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  {content.highestQuality.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.highestQuality.headingHighlight}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {content.highestQuality.paragraph1}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {content.highestQuality.paragraph2}
                </p>
                <div className="flex flex-wrap gap-2">
                  {content.highestQuality.chips.map((item) => {
                    const Icon = icons[item.icon];
                    return (
                      <span
                        key={item.text}
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 bg-gray-50 border border-gray-100 rounded-full px-4 py-2"
                      >
                        {Icon && <Icon size={14} className="text-accent" />}
                        {item.text}
                      </span>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={content.highestQuality.image}
                    alt={content.highestQuality.imageAlt}
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
                    {content.comparison.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  {content.comparison.headingLead}{" "}
                  <span className="shimmer-text">{content.comparison.headingHighlight}</span>
                </h2>
                <p className="text-white text-lg leading-relaxed mb-8">
                  {content.comparison.paragraph}
                </p>

                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                  <ImageLightbox
                    src={content.comparison.image}
                    alt={content.comparison.imageAlt}
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
                  <span className="text-white text-xs font-semibold uppercase tracking-wider">
                    {content.comparison.headerFeature}
                  </span>
                  <span className="text-accent text-xs font-semibold uppercase tracking-wider text-center">
                    {content.comparison.headerSanJuan}
                  </span>
                  <span className="text-white text-xs font-semibold uppercase tracking-wider text-center">
                    {content.comparison.headerCompetitors}
                  </span>
                </div>

                {content.comparison.rows.map((row) => (
                  <div
                    key={row.feature}
                    className="grid grid-cols-3 gap-3 bg-white/[0.04] border border-white/[0.06] rounded-xl p-4 hover:bg-white/[0.07] transition-colors"
                  >
                    <span className="text-white text-sm font-medium">
                      {row.feature}
                    </span>
                    <span className="text-accent text-sm font-semibold text-center">
                      {row.sanjuan}
                    </span>
                    <span className="text-white text-sm text-center">
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
                  {content.layersSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.layersSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.layersSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.layersSection.intro}
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
                  {content.materialsSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.materialsSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.materialsSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.materialsSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {content.materialCards.map((card, i) => {
              const Icon = icons[card.icon];
              return (
                <ScrollReveal key={card.title} delay={((i + 1) as 1 | 2 | 3)}>
                  <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                      {Icon && <Icon size={24} className="text-accent" />}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
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
                      src={content.benefitsSection.imageMain}
                      alt={content.benefitsSection.imageMainAlt}
                      width={800}
                      height={500}
                      className="w-full aspect-[16/10] object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                    <ImageLightbox
                      src={content.benefitsSection.imageSpec}
                      alt={content.benefitsSection.imageSpecAlt}
                      width={400}
                      height={500}
                      className="w-full object-contain"
                      sizes="(max-width: 1024px) 50vw, 22vw"
                    />
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-lg bg-white">
                    <ImageLightbox
                      src={content.benefitsSection.imageHandlaid}
                      alt={content.benefitsSection.imageHandlaidAlt}
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
                    {content.benefitsSection.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
                  {content.benefitsSection.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.benefitsSection.headingHighlight}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {content.benefitsSection.paragraph}
                </p>

                <div className="space-y-4">
                  {content.benefits.map((b) => {
                    const Icon = icons[b.icon];
                    return (
                      <div
                        key={b.title}
                        className="group flex gap-4 bg-white border border-gray-100 rounded-xl p-5 hover:shadow-md hover:border-accent/20 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          {Icon && <Icon size={18} className="text-accent" />}
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
                    );
                  })}
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
                  {content.compareSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.compareSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.compareSection.headingHighlight}
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {content.compareCards.map((card, i) => {
              const Icon = icons[card.icon];
              return (
                <ScrollReveal key={card.title} delay={((i + 1) as 1 | 2 | 3)}>
                  <Link href={card.href} className="block h-full">
                    <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full flex flex-col">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                        {Icon && <Icon size={20} className="text-accent" />}
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
                    {content.finalCta.paragraph}
                  </p>
                  <div className="flex flex-wrap gap-3 *:whitespace-nowrap">
                    <Link
                      href={content.finalCta.primaryHref}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                    >
                      {content.finalCta.primaryLabel}
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
