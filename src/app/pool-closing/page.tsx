import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Snowflake,
  Shield,
  Leaf,
  Sun,
  Phone,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Wrench,
  Droplets,
  ThermometerSnowflake,
  DollarSign,
  ShieldCheck,
  Award,
  Lock,
  Key,
  Zap,
  Eye,
  ClipboardCheck,
  Users,
  CalendarCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { Testimonials } from "@/components/Testimonials";
import { PoolClosingFAQ } from "./faq";
import content from "@/content/pages/pool-closing.json";

const icons: Record<string, LucideIcon> = {
  Snowflake, ShieldCheck, ClipboardCheck, Users, ThermometerSnowflake, Leaf,
  Sun, Key, Shield, Wrench, Lock, Zap, Droplets, Award, Eye,
};

export const metadata: Metadata = {
  alternates: { canonical: "/pool-closing/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/pool-closing/",
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
      name: "Pool Closing/Opening & Winterization",
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
        "Professional pool winterization services including plumbing blow-out, chemical treatment, equipment draining, and winter cover installation.",
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "450",
          priceCurrency: "USD",
          description: "Starting price for standard pool winterization",
        },
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

export default function PoolClosingPage() {
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
          alt="Pool winterization service"
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
            <span className="text-white font-medium">Pool Closing/Opening</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Snowflake size={14} className="text-accent" />
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

      {/* ── Why Proper Pool Closing/Opening Matters ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.whyMattersSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.whyMattersSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.whyMattersSection.headingHighlight}
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {content.whyItMatters.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <ScrollReveal key={item.title} delay={((i + 1) as 1 | 2 | 3)}>
                  <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                      {Icon && <Icon size={24} className="text-accent" />}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
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

      {/* ── Our 8-Step Process ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.processSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.processSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.processSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.processSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {content.processSteps.map((item, i) => (
              <ScrollReveal key={item.step} delay={((i % 2 === 0 ? 1 : 2) as 1 | 2)}>
                <div className="group flex gap-4 bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-accent font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── What We Need From You ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <Snowflake size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.beforeSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                {content.beforeSection.headingLead}{" "}
                <span className="shimmer-text">{content.beforeSection.headingHighlight}</span>
              </h2>
              <p className="text-white text-lg leading-relaxed">
                {content.beforeSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {content.beforeWeArrive.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <ScrollReveal key={item.text} delay={((i % 3 === 0 ? 1 : i % 3 === 1 ? 2 : 3) as 1 | 2 | 3)}>
                  <div className="group flex gap-4 bg-white/[0.05] border border-white/[0.08] rounded-2xl p-5 sm:p-6 hover:bg-white/[0.08] transition-colors h-full">
                    <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0">
                      {Icon && <Icon size={18} className="text-accent" />}
                    </div>
                    <p className="text-white text-sm leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Pricing Section ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.pricing.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  {content.pricing.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.pricing.headingHighlight}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {content.pricing.paragraph1}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {content.pricing.paragraph2}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {content.pricing.paragraph3}
                </p>

                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200/60 rounded-xl">
                  <CalendarCheck size={20} className="text-amber-600 shrink-0" />
                  <p className="text-sm text-amber-800 font-medium">
                    {content.pricing.note}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
                <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 sm:p-10 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-primary/[0.03] rounded-3xl" />
                  <div className="relative">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      {content.pricing.startingLabel}
                    </p>
                    <p className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                      {content.pricing.price}
                    </p>
                    <p className="text-lg font-semibold text-gray-900 mb-5">
                      {content.pricing.priceCaption}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {content.pricing.services.map((service) => (
                        <span
                          key={service}
                          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-dark bg-accent/10 border border-accent/15 rounded-full px-4 py-1.5"
                        >
                          <CheckCircle2 size={14} className="text-accent" />
                          {service}
                        </span>
                      ))}
                    </div>

                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />

                    <ul className="space-y-3.5 mb-10">
                      {content.pricing.includedChecklist.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="text-accent shrink-0 mt-0.5"
                          />
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={content.pricing.bookHref}
                      className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
                    >
                      {content.pricing.bookLabel}
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Why Choose Maxima ── */}
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
                <ScrollReveal key={item.title} delay={((i + 1) as 1 | 2 | 3)}>
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

      {/* ── FAQ Section ── */}
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
              <PoolClosingFAQ faqs={content.faqs} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Testimonials ── */}
      <Testimonials />

      <SectionDivider />

      {/* ── CTA Section ── */}
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
