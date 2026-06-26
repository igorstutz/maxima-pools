import type { Metadata } from "next";
import Image from "@/components/Image";
import Link from "next/link";
import { locations, slugify } from "@/lib/locations";
import {
  Eye,
  ShieldCheck,
  Zap,
  HardHat,
  Pipette,
  Plug,
  Shovel,
  Fence,
  Flame,
  Thermometer,
  ShieldHalf,
  Sparkles,
  Phone,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Star,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { InvestmentCarousel } from "@/components/InvestmentCarousel";
import content from "@/content/pages/why-maxima.json";

export const metadata: Metadata = {
  alternates: { canonical: "/why-maxima/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/why-maxima/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    type: "website",
    locale: "en_US",
    siteName: "Maxima Pools",
  },
};

// Lucide icons referenced by name from the editable content file.
const iconMap = {
  Eye,
  ShieldCheck,
  Zap,
  Shovel,
  HardHat,
  Pipette,
  Plug,
  Fence,
  Flame,
  Thermometer,
  ShieldHalf,
  Sparkles,
} as const;

// Decorative per-pillar gradients (kept in code).
const pillarGradients = [
  "from-cyan-500 to-blue-500",
  "from-blue-500 to-indigo-500",
  "from-indigo-500 to-violet-500",
];

export default function WhyMaximaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Why Maxima Pools",
            description:
              "Learn why Maxima Pools is Columbus Ohio's trusted fiberglass pool builder. Family-owned, in-house team, San Juan Pools authorized dealer.",
            publisher: {
              "@type": "Organization",
              name: "Maxima Pools",
            },
          }),
        }}
      />
      {/* ================================================================ */}
      {/* HERO SECTION                                                     */}
      {/* ================================================================ */}
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center overflow-hidden">
        <Image
          src={content.hero.image}
          alt="Stunning fiberglass pool installation by Maxima Pools"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/80 to-transparent" />
        <div className="absolute inset-0 water-caustics opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6 hero-animate hero-animate-1">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {content.hero.badge}
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 hero-animate hero-animate-2">
              {content.hero.headingLead}{" "}
              <span className="shimmer-text">{content.hero.headingHighlight}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white leading-relaxed max-w-2xl mb-10 hero-animate hero-animate-3">
              {content.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 *:whitespace-nowrap hero-animate hero-animate-4">
              <Link
                href={content.hero.estimateHref}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-105 text-sm sm:text-base"
              >
                {content.hero.estimateLabel}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href={content.hero.simulatorHref}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm sm:text-base"
              >
                <Sparkles size={18} className="text-accent" />
                {content.hero.simulatorLabel}
              </Link>
              <a
                href={content.hero.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm sm:text-base"
              >
                <Phone size={18} />
                {content.hero.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================ */}
      {/* THREE PILLARS SECTION                                            */}
      {/* ================================================================ */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14 sm:mb-20">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.pillarsSection.badge}
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 tracking-tight">
                {content.pillarsSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.pillarsSection.headingHighlight}
                </span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                {content.pillarsSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {content.pillars.map((pillar, index) => {
              const Icon = iconMap[pillar.icon as keyof typeof iconMap];
              return (
                <ScrollReveal
                  key={pillar.title}
                  delay={((index + 1) as 1 | 2 | 3)}
                >
                  <div className="group rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-9 hover:shadow-xl hover:border-gray-200 transition-all duration-500 h-full">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillarGradients[index % pillarGradients.length]} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                    >
                      {Icon && <Icon size={26} className="text-white" />}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <SectionDivider />

      {/* ================================================================ */}
      {/* IN-HOUSE TEAM SECTION                                            */}
      {/* ================================================================ */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 left-[20%] w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-3 bg-primary/8 rounded-[2rem] blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-2xl">
                  <Image
                    src={content.team.image}
                    alt="Maxima Concrete and Maxima Pools team in front of the Delaware, Ohio headquarters"
                    width={1600}
                    height={900}
                    className="w-full aspect-[16/11] object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
                  {/* Floating label */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xl border border-white/50 rounded-xl px-4 py-2.5 shadow-lg">
                    <p className="text-gray-900 font-semibold text-sm">
                      {content.team.floatingTitle}
                    </p>
                    <p className="text-gray-500 text-xs">
                      {content.team.floatingSubtitle}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="right">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.team.badge}
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-5">
                  {content.team.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.team.headingHighlight}
                  </span>
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  {content.team.paragraph1}
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {content.team.paragraph2}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {content.team.points.map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-accent" />
                      </div>
                      <span className="text-sm text-gray-600 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
                <a
                  href={content.team.ctaHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 mt-8 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 text-sm whitespace-nowrap"
                >
                  {content.team.ctaLabel}
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================ */}
      {/* SAN JUAN PARTNERSHIP SECTION (Dark)                              */}
      {/* ================================================================ */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />
        <div className="absolute top-0 right-[20%] w-[500px] h-[500px] rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-0 left-[10%] w-[400px] h-[400px] rounded-full bg-primary-light/8 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                  <Star size={14} className="text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.sanJuan.badge}
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
                  {content.sanJuan.headingLead}{" "}
                  <span className="shimmer-text">{content.sanJuan.headingHighlight}</span>
                </h2>
                <p className="text-lg text-white leading-relaxed mb-6">
                  {content.sanJuan.paragraph1}
                </p>
                <p className="text-white leading-relaxed mb-8">
                  {content.sanJuan.paragraph2}
                </p>
                <Link
                  href={content.sanJuan.ctaHref}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 text-sm"
                >
                  {content.sanJuan.ctaLabel}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </ScrollReveal>

            {/* Logo + Stats */}
            <ScrollReveal direction="right">
              <div className="flex flex-col items-center">
                <a
                  href={content.sanJuan.logoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit San Juan Pools website (opens in new tab)"
                  className="group relative mb-10 transition-transform duration-300 hover:scale-105"
                >
                  <div className="absolute -inset-6 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />
                  <Image
                    src={content.sanJuan.logo}
                    alt="San Juan Pools - Authorized Dealer"
                    width={220}
                    height={220}
                    className="relative w-44 h-44 sm:w-52 sm:h-52 object-contain drop-shadow-2xl"
                  />
                </a>
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  {content.sanJuan.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:bg-white/[0.08] transition-colors"
                    >
                      <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-white text-xs sm:text-sm font-medium">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================ */}
      {/* SERVICES SECTION                                                 */}
      {/* ================================================================ */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14 sm:mb-20">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.servicesSection.badge}
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 tracking-tight">
                {content.servicesSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.servicesSection.headingHighlight}
                </span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                {content.servicesSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {content.services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap];
              const cardInner = (
                <div className="group relative rounded-3xl overflow-hidden h-full min-h-[360px] sm:min-h-[400px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/90 via-[#021526]/30 to-transparent" />

                  <div className="relative h-full flex flex-col justify-end p-7 sm:p-8">
                    <div className="w-12 h-12 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                      {Icon && <Icon size={22} className="text-accent" />}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                      {service.description}
                    </p>
                    {service.href && (
                      <div className="mt-4 inline-flex items-center gap-1.5 text-accent text-sm font-semibold">
                        Learn more
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </div>
                </div>
              );
              return (
                <ScrollReveal key={service.title} delay={((index % 3 + 1) as 1 | 2 | 3)}>
                  {service.href ? (
                    service.external ? (
                      <a
                        href={service.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        {cardInner}
                      </a>
                    ) : (
                      <Link href={service.href} className="block h-full">
                        {cardInner}
                      </Link>
                    )
                  ) : (
                    cardInner
                  )}
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

      <SectionDivider />

      {/* ================================================================ */}
      {/* BEYOND THE POOL — ENHANCEMENTS                                   */}
      {/* ================================================================ */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14 sm:mb-20">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.enhancementsSection.badge}
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 tracking-tight">
                {content.enhancementsSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.enhancementsSection.headingHighlight}
                </span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                {content.enhancementsSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-5">
            {content.enhancements.map((item, index) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <ScrollReveal key={item.title} delay={((index + 1) as 1 | 2 | 3)}>
                  <Link
                    href={content.enhancementsHref}
                    className="group block rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-500 h-full"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                    </div>
                    {/* Content */}
                    <div className="p-7 sm:p-8 -mt-8 relative">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center mb-4 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-500">
                        {Icon && <Icon size={22} className="text-white" />}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <span className="inline-flex items-center gap-1.5 text-accent text-sm font-semibold">
                        Learn more
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================ */}
      {/* INVESTMENT SECTION (Dark)                                        */}
      {/* ================================================================ */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-10" />
        <div className="absolute top-0 left-[30%] w-[500px] h-[500px] rounded-full bg-accent/5 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.investment.badge}
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
                  {content.investment.headingLead}{" "}
                  <span className="shimmer-text">{content.investment.headingHighlight}</span>
                </h2>
                <p className="text-lg text-white leading-relaxed mb-6">
                  {content.investment.paragraph1}
                </p>
                <p className="text-white leading-relaxed mb-8">
                  {content.investment.paragraph2}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {content.investment.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group flex items-center gap-2.5 hover:bg-white/[0.06] rounded-lg -mx-2 px-2 py-1.5 transition-colors"
                    >
                      <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0 group-hover:bg-accent/25 transition-colors">
                        <CheckCircle2 size={12} className="text-accent" />
                      </div>
                      <span className="text-sm text-white font-medium group-hover:text-accent transition-colors">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Image carousel */}
            <ScrollReveal direction="right">
              <InvestmentCarousel slides={content.investment.slides} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================ */}
      {/* SERVICE AREA SECTION                                             */}
      {/* ================================================================ */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <ScrollReveal>
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <MapPin size={14} className="text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.serviceArea.badge}
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-5">
                  {content.serviceArea.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.serviceArea.headingHighlight}
                  </span>
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  {content.serviceArea.paragraph}
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
                  {locations.map((loc) => (
                    <Link
                      key={loc.name}
                      href={`/locations/${slugify(loc.name)}`}
                      className="group flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                    >
                      <MapPin size={12} className="text-gray-300 group-hover:text-accent transition-colors shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-700 group-hover:text-gray-900 font-medium truncate">
                        {loc.name}
                      </span>
                    </Link>
                  ))}
                </div>
                <Link
                  href={content.serviceArea.allAreasHref}
                  className="text-accent font-semibold text-sm hover:underline"
                >
                  {content.serviceArea.allAreasLabel} &rarr;
                </Link>
              </div>
            </ScrollReveal>

            {/* Map / Visual */}
            <ScrollReveal direction="right" delay={1}>
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary to-accent-dark p-8 sm:p-10 min-h-[380px] flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 water-caustics opacity-20" />
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-accent/15 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                    <MapPin size={36} className="text-accent" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    {content.serviceArea.cardTitle}
                  </h3>
                  <p className="text-white leading-relaxed max-w-sm mb-6">
                    {content.serviceArea.cardParagraph}
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white text-sm font-medium">
                      {content.serviceArea.cardBadge}
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================ */}
      {/* CTA SECTION                                                      */}
      {/* ================================================================ */}
      <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[480px] sm:min-h-[520px] flex items-center">
              <Image
                src={content.finalCta.image}
                alt="Grand Manhattan fiberglass pool"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/80 to-transparent" />
              <div className="absolute inset-0 water-caustics opacity-10" />

              <div className="relative w-full px-8 sm:px-12 lg:px-16 py-14 sm:py-16">
                <div className="max-w-2xl">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
                    {content.finalCta.headingLead}{" "}
                    <span className="shimmer-text">{content.finalCta.headingHighlight}</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-white leading-relaxed mb-10 max-w-lg">
                    {content.finalCta.text}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 *:whitespace-nowrap">
                    <Link
                      href={content.finalCta.estimateHref}
                      className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-105 text-sm sm:text-base"
                    >
                      {content.finalCta.estimateLabel}
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                    <Link
                      href={content.finalCta.simulatorHref}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm sm:text-base"
                    >
                      <Sparkles size={18} className="text-accent" />
                      {content.finalCta.simulatorLabel}
                    </Link>
                    <a
                      href={content.finalCta.phoneHref}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm sm:text-base"
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
