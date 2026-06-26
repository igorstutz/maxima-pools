import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  ChevronRight,
  Layers,
  Shield,
  Award,
  CheckCircle2,
  Hammer,
  FlaskConical,
  Factory,
  Users,
  Gem,
  Microscope,
  Sparkles,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { ManufacturingSteps } from "./manufacturing-steps";
import content from "@/content/pages/how-san-juan-pools-are-made.json";

export const metadata: Metadata = {
  alternates: { canonical: "/how-san-juan-pools-are-made/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/how-san-juan-pools-are-made/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    type: "website",
  },
};

// Lucide icons referenced by name from the editable content file.
const iconMap = { Layers, Shield, Users, Award, FlaskConical, Hammer } as const;
type IconName = keyof typeof iconMap;

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
          images={content.hero.images}
          alt="San Juan fiberglass pool manufacturing process"
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
            <span className="text-white font-medium">How San Juan Pools Are Made</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Factory size={14} className="text-accent" />
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
                href={content.hero.estimateHref}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
              >
                {content.hero.estimateLabel}
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
                const Icon = iconMap[s.icon as IconName];
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

      {/* ── Authorized San Juan Dealer Strip ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-3xl bg-gradient-to-br from-primary to-accent-dark relative overflow-hidden">
              <div className="absolute inset-0 water-caustics opacity-20" />
              <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-accent/10 blur-3xl" />
              <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-white/5 blur-3xl" />

              <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-10 items-center p-8 sm:p-12 lg:p-14">
                {/* Logo */}
                <div className="lg:col-span-4 flex justify-center">
                  <a
                    href={content.dealer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit San Juan Pools website (opens in new tab)"
                    className="group relative transition-transform duration-300 hover:scale-105"
                  >
                    <div className="absolute -inset-6 bg-accent/20 rounded-full blur-2xl group-hover:bg-accent/30 transition-colors" />
                    <Image
                      src={content.dealer.logo}
                      alt="San Juan Pools - Authorized Dealer"
                      width={240}
                      height={240}
                      className="relative w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-2xl"
                    />
                  </a>
                </div>

                {/* Content */}
                <div className="lg:col-span-8 text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-5">
                    <Award size={14} className="text-accent" />
                    <span className="text-white font-semibold text-sm uppercase tracking-wider">
                      {content.dealer.badge}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
                    {content.dealer.headingLead}{" "}
                    <span className="shimmer-text">{content.dealer.headingHighlight}</span>
                  </h2>
                  <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6 max-w-2xl mx-auto lg:mx-0">
                    {content.dealer.paragraph}
                  </p>
                  <a
                    href={content.dealer.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 px-7 py-3.5 bg-white text-primary font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm whitespace-nowrap"
                  >
                    {content.dealer.ctaLabel}
                    <ArrowUpRight
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </a>
                </div>
              </div>
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
                  {content.pillarsSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.pillarsSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.pillarsSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.pillarsSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-5">
            {content.pillars.map((pillar, i) => {
              const Icon = iconMap[pillar.icon as IconName];
              return (
                <ScrollReveal key={pillar.title} delay={((i + 1) as 1 | 2 | 3)}>
                  <div className="group grid lg:grid-cols-12 gap-6 bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500">
                    {/* Icon + Badge */}
                    <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        {Icon && <Icon size={24} className="text-accent" />}
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
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Why Hand-Laid Matters — dark section ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl overflow-hidden col-span-2 border border-white/10">
                  <Image
                    src={content.strengthSection.imageMain}
                    alt={content.strengthSection.imageMainAlt}
                    width={800}
                    height={500}
                    className="w-full aspect-[16/10] object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={content.strengthSection.image2}
                    alt={content.strengthSection.image2Alt}
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(max-width: 1024px) 50vw, 22vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={content.strengthSection.image3}
                    alt={content.strengthSection.image3Alt}
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
                    {content.strengthSection.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  {content.strengthSection.headingLead}{" "}
                  <span className="shimmer-text">{content.strengthSection.headingHighlight}</span>
                </h2>
                <p className="text-white text-lg leading-relaxed mb-4">
                  {content.strengthSection.paragraph1}
                </p>
                <p className="text-white text-lg leading-relaxed mb-8">
                  {content.strengthSection.paragraph2}
                </p>

                <ul className="space-y-3">
                  {content.strengthSection.points.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-white">
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
                  {content.videoSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.videoSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.videoSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                {content.videoSection.paragraph}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900 aspect-video shadow-2xl">
              <iframe
                src={content.videoSection.youtube}
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
                  {content.stepsSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.stepsSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.stepsSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.stepsSection.intro}
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
                    {content.finishesSection.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  {content.finishesSection.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.finishesSection.headingHighlight}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {content.finishesSection.paragraph}
                </p>

                <Link
                  href={content.finishesSection.linkHref}
                  className="group inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
                >
                  {content.finishesSection.linkLabel}
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-4">
                {content.finishes.map((finish) => (
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
            {content.compareCards.map((card, i) => (
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
                src={content.cta.image}
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
                    {content.cta.headingLead}{" "}
                    <span className="shimmer-text">{content.cta.headingHighlight}</span>
                  </h2>
                  <p className="text-lg text-white leading-relaxed mb-10 max-w-lg">
                    {content.cta.paragraph}
                  </p>
                  <div className="flex flex-wrap gap-3 *:whitespace-nowrap">
                    <Link
                      href={content.cta.primaryHref}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                    >
                      {content.cta.primaryLabel}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href={content.cta.simulatorHref}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      <Sparkles size={18} className="text-accent" />
                      {content.cta.simulatorLabel}
                    </Link>
                    <a
                      href={content.cta.phoneHref}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      <Phone size={18} />
                      {content.cta.phoneDisplay}
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
