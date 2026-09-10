import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  Brush,
  CalendarDays,
  ChevronRight,
  CircleCheck,
  CircleX,
  DollarSign,
  ClipboardCheck,
  Droplets,
  Gauge,
  Leaf,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  Waves,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { SectionDivider } from "@/components/SectionDivider";
import { Testimonials } from "@/components/Testimonials";
import { CareRhythm } from "./care-rhythm";
import { WaterTroubleshooter } from "./water-troubleshooter";
import { PoolCleaningFAQ } from "./faq";
import content from "@/content/pages/pool-cleaning.json";

const icons: Record<string, LucideIcon> = {
  Award, CalendarDays, ClipboardCheck, Droplets, Gauge, Leaf, Ruler,
  ShieldCheck, Sparkles, Sun, Users, Waves, Zap,
};

export const metadata: Metadata = {
  alternates: { canonical: "/pool-cleaning/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/pool-cleaning/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Pool Cleaning & Maintenance",
      serviceType: "Fiberglass pool cleaning and maintenance",
      provider: {
        "@type": "LocalBusiness",
        name: "Maxima Pools",
        telephone: "+1-614-384-5081",
        areaServed: {
          "@type": "City",
          name: "Columbus",
          addressRegion: "OH",
        },
      },
      description:
        "Professional fiberglass pool cleaning and maintenance in Columbus, OH — 7-panel water testing, chemical balancing, filter and salt cell service, and gelcoat-safe brushing and vacuuming.",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Pool cleaning options",
        itemListElement: content.plans.map((plan) => ({
          "@type": "Offer",
          ...(plan.priceMin !== null && plan.priceMax !== null
            ? {
                priceSpecification: {
                  "@type": "PriceSpecification",
                  priceCurrency: "USD",
                  minPrice: plan.priceMin,
                  maxPrice: plan.priceMax,
                  unitText: "per trip",
                },
              }
            : {}),
          itemOffered: {
            "@type": "Service",
            name: plan.name,
            description: plan.description,
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: content.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function PoolCleaningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <HeroImageCycle
          images={content.hero.images}
          alt="Clean fiberglass pool with clear water"
          interval={6000}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/60 via-transparent to-[#0c4a6e]/30" />
        <div className="absolute inset-0 water-caustics opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white" />
            <span className="text-white font-medium">Pool Cleaning</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Sparkles size={14} className="text-accent" />
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

            <div className="hero-animate hero-animate-5 inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full px-5 py-2.5 mb-8">
              <DollarSign size={16} className="text-accent" />
              <span className="text-white font-semibold text-sm">{content.hero.priceBadge}</span>
            </div>

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

      {/* ── What a pool cleaning covers ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <ClipboardCheck size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.serviceSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.serviceSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.serviceSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.serviceSection.paragraph}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-start">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                <div className="rounded-2xl overflow-hidden col-span-2 lg:col-span-1 border border-gray-100 shadow-sm">
                  <Image
                    src={content.serviceSection.images[0].src}
                    alt={content.serviceSection.images[0].alt}
                    width={800}
                    height={500}
                    className="w-full aspect-[16/10] lg:aspect-[16/9] object-cover"
                    sizes="(max-width: 1024px) 100vw, 30vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <Image
                    src={content.serviceSection.images[1].src}
                    alt={content.serviceSection.images[1].alt}
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] lg:aspect-[16/9] object-cover"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <Image
                    src={content.serviceSection.images[2].src}
                    alt={content.serviceSection.images[2].alt}
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] lg:aspect-[16/9] object-cover"
                    sizes="(max-width: 1024px) 50vw, 30vw"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" className="lg:col-span-2">
              <div className="grid sm:grid-cols-2 gap-3">
                {content.serviceSection.checklist.map((item, i) => (
                  <div
                    key={item.title}
                    className="group flex gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:border-accent/20 hover:shadow-md transition-all duration-500"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center shrink-0">
                      <span className="text-accent font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-900 font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Service options ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.plansSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.plansSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.plansSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.plansSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {content.plans.map((plan, i) => {
              const Icon = icons[plan.icon];
              return (
                <ScrollReveal key={plan.name} delay={((i + 1) as 1 | 2 | 3)}>
                  <div
                    className={`relative flex flex-col h-full rounded-2xl sm:rounded-3xl p-7 sm:p-8 transition-all duration-500 ${
                      plan.featured
                        ? "bg-gradient-to-br from-[#0c4a6e] to-[#075985] border border-accent/30 shadow-2xl shadow-primary/20"
                        : "bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg hover:border-accent/20"
                    }`}
                  >
                    {plan.featured && (
                      <div className="absolute inset-0 water-caustics opacity-10 rounded-2xl sm:rounded-3xl pointer-events-none" />
                    )}
                    <div className="relative flex flex-col h-full">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${
                          plan.featured
                            ? "bg-accent/20 border-accent/25"
                            : "bg-gradient-to-br from-accent/15 to-primary/10 border-accent/15"
                        }`}
                      >
                        {Icon && (
                          <Icon
                            size={23}
                            className={plan.featured ? "text-accent-light" : "text-accent"}
                          />
                        )}
                      </div>

                      <span
                        className={`text-[11px] font-semibold uppercase tracking-wider mb-2 ${
                          plan.featured ? "text-accent-light" : "text-accent"
                        }`}
                      >
                        {plan.cadence}
                      </span>
                      <h3
                        className={`text-xl sm:text-2xl font-bold mb-4 ${
                          plan.featured ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {plan.name}
                      </h3>

                      <div
                        className={`mb-5 pb-5 border-b ${
                          plan.featured ? "border-white/15" : "border-gray-100"
                        }`}
                      >
                        <p
                          className={`text-3xl sm:text-4xl font-bold ${
                            plan.featured
                              ? "text-white"
                              : "text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
                          }`}
                        >
                          {plan.price}
                        </p>
                        <p
                          className={`text-xs mt-2 ${
                            plan.featured ? "text-white/65" : "text-gray-400"
                          }`}
                        >
                          {plan.priceNote}
                        </p>
                      </div>

                      <p
                        className={`leading-relaxed mb-6 ${
                          plan.featured ? "text-white/80" : "text-gray-500"
                        }`}
                      >
                        {plan.description}
                      </p>

                      <ul className="space-y-2.5 mb-8">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2.5">
                            <CircleCheck
                              size={16}
                              className={`shrink-0 mt-0.5 ${
                                plan.featured ? "text-accent-light" : "text-accent"
                              }`}
                            />
                            <span
                              className={`text-sm leading-relaxed ${
                                plan.featured ? "text-white/85" : "text-gray-600"
                              }`}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={plan.ctaHref}
                        className={`group mt-auto w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-full transition-all duration-300 text-sm ${
                          plan.featured
                            ? "bg-gradient-to-r from-accent to-accent-light text-white shadow-lg shadow-accent/25 hover:scale-105"
                            : "bg-white border border-gray-200 text-primary hover:border-accent/40 hover:shadow-md"
                        }`}
                      >
                        {plan.ctaLabel}
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal>
            <p className="mt-8 text-sm text-gray-500 max-w-3xl">{content.plansNote}</p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Care rhythm — interactive tabs ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.rhythmSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.rhythmSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.rhythmSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.rhythmSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <CareRhythm timeframes={content.rhythm} />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Water chemistry targets ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <Droplets size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.chemistrySection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.chemistrySection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.chemistrySection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.chemistrySection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {content.chemistry.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <ScrollReveal key={item.name} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="group relative h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 hover:shadow-lg hover:border-accent/20 transition-all duration-500 overflow-hidden">
                    <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors duration-500" />
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                          {Icon && <Icon size={19} className="text-accent" />}
                        </div>
                        <p className="text-sm font-bold text-gray-500 tracking-wide">
                          {item.name}
                        </p>
                      </div>
                      <p className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-4">
                        {item.target}
                      </p>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {item.why}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal>
            <p className="mt-8 text-sm text-gray-500 max-w-3xl">
              {content.chemistrySection.note}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Water troubleshooter — interactive ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <Waves size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.troubleshootSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                {content.troubleshootSection.headingLead}{" "}
                <span className="shimmer-text">
                  {content.troubleshootSection.headingHighlight}
                </span>
              </h2>
              <p className="text-white text-lg leading-relaxed">
                {content.troubleshootSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <WaterTroubleshooter
              symptoms={content.troubleshoot}
              causeLabel={content.troubleshootSection.causeLabel}
              stepsLabel={content.troubleshootSection.stepsLabel}
              callUsLabel={content.troubleshootSection.callUsLabel}
              ctaLabel={content.troubleshootSection.ctaLabel}
              ctaHref={content.troubleshootSection.ctaHref}
              phoneDisplay={content.troubleshootSection.phoneDisplay}
              phoneHref={content.troubleshootSection.phoneHref}
            />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Fiberglass do's and don'ts ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <Brush size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.rulesSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.rulesSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.rulesSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.rulesSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            <ScrollReveal direction="left">
              <div className="h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-50/70 to-white border border-emerald-100 p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-200 flex items-center justify-center">
                    <CircleCheck size={21} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {content.dos.heading}
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {content.dos.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CircleCheck size={17} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="h-full rounded-2xl sm:rounded-3xl bg-gradient-to-br from-rose-50/70 to-white border border-rose-100 p-7 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-rose-500/10 border border-rose-200 flex items-center justify-center">
                    <CircleX size={21} className="text-rose-600" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {content.donts.heading}
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  {content.donts.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CircleX size={17} className="text-rose-400 shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Why Maxima ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.whyChooseSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.whyChooseSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.whyChooseSection.headingHighlight}
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {content.whyChoose.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <ScrollReveal key={item.title} delay={((i + 1) as 1 | 2 | 3 | 4)}>
                  <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                      {Icon && <Icon size={24} className="text-accent" />}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.faqSection.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  {content.faqSection.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.faqSection.headingHighlight}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {content.faqSection.intro}
                </p>
                <a
                  href={content.faqSection.phoneHref}
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
                >
                  <Phone size={18} />
                  {content.faqSection.phoneDisplay}
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <PoolCleaningFAQ faqs={content.faqs} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Testimonials ── */}
      <Testimonials />

      <SectionDivider />

      {/* ── CTA ── */}
      <section className="py-20 sm:py-28 bg-white">
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
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
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