import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  ChevronRight,
  ClipboardCheck,
  DollarSign,
  Droplets,
  Fan,
  Flame,
  Layers,
  Lightbulb,
  MapPin,
  Phone,
  Smartphone,
  Sparkles,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { SectionDivider } from "@/components/SectionDivider";
import { Testimonials } from "@/components/Testimonials";
import { SymptomPicker } from "./symptom-picker";
import { PoolRepairFAQ } from "./faq";
import content from "@/content/pages/pool-repair.json";

const icons: Record<string, LucideIcon> = {
  Award, ClipboardCheck, DollarSign, Droplets, Fan, Flame, Layers, Lightbulb,
  MapPin, Smartphone, Users, Wrench, Zap,
};

export const metadata: Metadata = {
  alternates: { canonical: "/pool-repair/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/pool-repair/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Pool Repair",
      serviceType: "Swimming pool equipment and structure repair",
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
        "Pool equipment and structure repair in Columbus, OH — pumps, heaters, salt cells, chlorinators, lights and automation, plus coping and pool patios. Flat diagnostic trip charge, labor quoted per repair.",
      offers: {
        "@type": "Offer",
        name: "Diagnostic trip",
        description:
          "Flat trip charge covering the visit and the diagnosis. Parts, tax and repair labor are quoted and billed in addition.",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "USD",
          price: 250,
          valueAddedTaxIncluded: false,
        },
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Equipment we repair",
        itemListElement: content.equipment.items.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `${item.name} repair`,
            description: item.description,
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

export default function PoolRepairPage() {
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
          alt="Fiberglass pool and equipment serviced by Maxima Pools"
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
            <span className="text-white font-medium">Pool Repair</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Wrench size={14} className="text-accent" />
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

      {/* ── What we repair ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <Wrench size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.scopeSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.scopeSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.scopeSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.scopeSection.paragraph}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-5 lg:gap-6 items-start">
            {/* Structure — coping and patios */}
            <ScrollReveal direction="left">
              <div className="h-full flex flex-col bg-white border border-gray-100 rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm">
                <div className="relative">
                  <Image
                    src={content.structure.image}
                    alt={content.structure.imageAlt}
                    width={800}
                    height={450}
                    className="w-full aspect-[16/9] object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary shadow-sm">
                    <ClipboardCheck size={13} className="text-accent" />
                    {content.structure.tag}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-7 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center shrink-0">
                      <Layers size={20} className="text-accent" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {content.structure.title}
                    </h3>
                  </div>

                  <div className="space-y-5 mb-6">
                    {content.structure.items.map((item) => (
                      <div key={item.name} className="flex gap-3.5">
                        <div className="w-1.5 rounded-full bg-gradient-to-b from-accent to-primary/40 shrink-0" />
                        <div>
                          <h4 className="text-gray-900 font-semibold mb-1">{item.name}</h4>
                          <p className="text-gray-500 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="mt-auto text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-5">
                    {content.structure.note}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Equipment */}
            <ScrollReveal direction="right">
              <div className="relative h-full flex flex-col rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c4a6e] to-[#075985] border border-accent/25 shadow-2xl shadow-primary/20">
                <div className="absolute inset-0 water-caustics opacity-10 pointer-events-none" />
                <div className="relative flex flex-col flex-1 p-7 sm:p-8">
                  <div className="flex items-center justify-between gap-4 mb-7">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-accent/20 border border-accent/25 flex items-center justify-center shrink-0">
                        <Wrench size={20} className="text-accent-light" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {content.equipment.title}
                      </h3>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1.5 bg-white/[0.08] border border-white/[0.12] rounded-full px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-accent-light shrink-0">
                      <DollarSign size={13} />
                      {content.equipment.tag}
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {content.equipment.items.map((item) => {
                      const Icon = icons[item.icon];
                      return (
                        <div
                          key={item.name}
                          className="group rounded-xl bg-white/[0.05] border border-white/[0.08] p-4 hover:bg-white/[0.09] hover:border-accent/25 transition-all duration-500"
                        >
                          <div className="w-9 h-9 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                            {Icon && <Icon size={17} className="text-accent-light" />}
                          </div>
                          <h4 className="text-white font-semibold text-sm mb-1.5">
                            {item.name}
                          </h4>
                          <p className="text-white/65 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── How pricing works ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <DollarSign size={14} className="text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.pricingSection.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  {content.pricingSection.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.pricingSection.headingHighlight}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {content.pricingSection.paragraph}
                </p>

                <div className="relative rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6 sm:p-7">
                  <div className="absolute -left-px top-7 bottom-7 w-1 rounded-full bg-gradient-to-b from-accent to-primary/30" />
                  <p className="text-gray-600 leading-relaxed pl-4">
                    {content.pricingSection.quote}
                  </p>
                </div>

                <p className="mt-6 text-sm text-gray-500 leading-relaxed">
                  {content.pricingSection.note}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="space-y-3">
                {content.pricingSection.steps.map((step, i) => {
                  const Icon = icons[step.icon];
                  return (
                    <div
                      key={step.title}
                      className="group relative flex gap-5 bg-white border border-gray-100 rounded-2xl p-6 hover:border-accent/20 hover:shadow-md transition-all duration-500"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                        {Icon && <Icon size={20} className="text-accent" />}
                      </div>
                      <div>
                        <div className="flex items-center gap-2.5 mb-1.5">
                          <span className="text-[11px] font-bold text-accent tracking-wider">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-gray-900 font-semibold group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-500 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Common symptoms — interactive ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <Zap size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.symptomSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                {content.symptomSection.headingLead}{" "}
                <span className="shimmer-text">
                  {content.symptomSection.headingHighlight}
                </span>
              </h2>
              <p className="text-white text-lg leading-relaxed">
                {content.symptomSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <SymptomPicker
              symptoms={content.symptoms}
              causeLabel={content.symptomSection.causeLabel}
              stepsLabel={content.symptomSection.stepsLabel}
              callUsLabel={content.symptomSection.callUsLabel}
              ctaLabel={content.symptomSection.ctaLabel}
              ctaHref={content.symptomSection.ctaHref}
              phoneDisplay={content.symptomSection.phoneDisplay}
              phoneHref={content.symptomSection.phoneHref}
            />
          </ScrollReveal>
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
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
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
                <ScrollReveal key={item.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="group h-full bg-white border border-gray-100 rounded-2xl p-7 hover:shadow-lg hover:border-accent/20 transition-all duration-500">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                      {Icon && <Icon size={22} className="text-accent" />}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2.5">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">
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
              <PoolRepairFAQ faqs={content.faqs} />
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
                      href={content.finalCta.cleaningHref}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      <Sparkles size={18} className="text-accent" />
                      {content.finalCta.cleaningLabel}
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
