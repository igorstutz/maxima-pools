import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  Sparkles,
  Thermometer,
  Lightbulb,
  Waves,
  Shield,
  Flame,
  Wifi,
  Wrench,
  CheckCircle2,
  Smartphone,
  Zap,
  Clock,
  Settings,
  Monitor,
  Users,
  Award,
  HeartHandshake,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { AccessoryShowcase } from "./accessory-showcase";
import content from "@/content/pages/pool-accessories-and-extras.json";

export const metadata: Metadata = {
  alternates: { canonical: "/pool-accessories-and-extras/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/pool-accessories-and-extras/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    type: "website",
  },
};

// Lucide icons referenced by name from the editable content file.
const iconMap = {
  Sparkles, Wrench, Users, Award, Thermometer, Lightbulb, Waves, Shield, Flame,
  Wifi, Smartphone, Settings, Monitor, Zap, HeartHandshake, Clock,
} as const;
type IconName = keyof typeof iconMap;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pool Accessories & Extras Installation",
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
    "Professional in-house installation of pool accessories including heating systems, LED lighting, water features, automatic covers, fire bowls, and recreation equipment.",
};

export default function PoolAccessoriesPage() {
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
          alt="Pool accessories and extras by Maxima Pools"
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
            <span className="text-white font-medium">Pool Accessories & Extras</span>
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

      {/* ── Accessory Categories — bento grid ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.catalogSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.catalogSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.catalogSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.catalogSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {content.accessoryGrid.map((cat, i) => {
              const Icon = iconMap[cat.icon as IconName];
              return (
                <ScrollReveal key={cat.title} delay={((i % 4 === 0 ? 1 : i % 4 === 1 ? 2 : 3) as 1 | 2 | 3)}>
                  <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-5 sm:p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      {Icon && <Icon size={20} className="text-accent" />}
                    </div>
                    <h3 className="text-base font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {cat.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="w-1 h-1 rounded-full bg-accent/60 shrink-0" />
                          {item}
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

      {/* ── Interactive Showcase ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.showcaseSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.showcaseSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.showcaseSection.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.showcaseSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <AccessoryShowcase />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Pool Automation — dark section ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        {/* Decorative orbs */}
        <div className="absolute top-0 right-[20%] w-80 h-80 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-0 left-[10%] w-96 h-96 rounded-full bg-primary-light/8 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <Wifi size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.automationSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                {content.automationSection.headingLead}{" "}
                <span className="shimmer-text">{content.automationSection.headingHighlight}</span>
              </h2>
              <p className="text-white text-lg leading-relaxed">
                {content.automationSection.paragraph}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {content.automation.map((feature, i) => {
              const Icon = iconMap[feature.icon as IconName];
              return (
                <ScrollReveal key={feature.title} delay={((i % 3 === 0 ? 1 : i % 3 === 1 ? 2 : 3) as 1 | 2 | 3)}>
                  <div className="group relative h-full">
                    <div className="absolute -inset-px bg-gradient-to-b from-accent/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                    <div className="relative h-full bg-white/[0.05] border border-white/[0.08] rounded-2xl p-6 sm:p-7 hover:bg-white/[0.08] transition-all duration-500">
                      <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                        {Icon && <Icon size={20} className="text-accent" />}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-white text-sm leading-relaxed">
                        {feature.description}
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

      {/* ── Why Professional Installation ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.whyProSection.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  {content.whyProSection.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.whyProSection.headingHighlight}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {content.whyProSection.paragraph}
                </p>

                <div className="space-y-4">
                  {content.whyPro.map((item) => {
                    const Icon = iconMap[item.icon as IconName];
                    return (
                      <div
                        key={item.title}
                        className="group flex gap-4 bg-gray-50 border border-gray-100 rounded-xl p-4 hover:shadow-md hover:border-accent/20 transition-all duration-300"
                      >
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          {Icon && <Icon size={18} className="text-accent" />}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-sm mb-0.5">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
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
                    src={content.whyProSection.image}
                    alt={content.whyProSection.imageAlt}
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

      {/* ── Seamless Integration — visual banner ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
              <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light p-10 sm:p-14 lg:p-20">
                <div className="absolute inset-0 water-caustics opacity-10" />
                <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2 mb-6">
                      <HeartHandshake size={14} className="text-accent-light" />
                      <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
                        {content.integration.badge}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                      {content.integration.headingLead}{" "}
                      <span className="shimmer-text">{content.integration.headingHighlight}</span>
                    </h2>
                    <p className="text-white text-lg leading-relaxed mb-8">
                      {content.integration.paragraph}
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {content.integration.items.map((item) => (
                        <div key={item} className="flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-accent-light shrink-0" />
                          <span className="text-white text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative hidden lg:block">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      <Image
                        src={content.integration.image}
                        alt={content.integration.imageAlt}
                        width={600}
                        height={450}
                        className="w-full aspect-[4/3] object-cover"
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
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
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
