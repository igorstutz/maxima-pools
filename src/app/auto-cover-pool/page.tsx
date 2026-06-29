import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  Shield,
  Thermometer,
  Leaf,
  Zap,
  Eye,
  Wrench,
  ChevronRight,
  Baby,
  Sparkles,
  Timer,
  Droplets,
  Palette,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { SectionDivider } from "@/components/SectionDivider";
import content from "@/content/pages/auto-cover-pool.json";

const icons: Record<string, LucideIcon> = {
  Shield, Thermometer, Leaf, Zap, Eye, Wrench, Baby, Timer, Droplets,
};

export const metadata: Metadata = {
  alternates: { canonical: "/auto-cover-pool/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/auto-cover-pool/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    type: "website",
  },
};

export default function AutoCoverPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Automatic Pool Cover Installation",
            provider: {
              "@type": "LocalBusiness",
              name: "Maxima Pools",
              telephone: "+1-614-384-5081",
            },
            description:
              "Premium automatic pool cover systems — motorized, ASTM safety certified, 70% less evaporation. Professional installation in Columbus, OH.",
            areaServed: {
              "@type": "City",
              name: "Columbus",
              addressRegion: "OH",
            },
          }),
        }}
      />
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <HeroImageCycle
          images={content.hero.images}
          alt="Automatic pool cover system"
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
            <span className="text-white font-medium">Auto Cover</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Shield size={14} className="text-accent" />
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

      {/* ── What Is It — split layout ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.overview.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  {content.overview.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.overview.headingHighlight}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {content.overview.paragraph1}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {content.overview.paragraph2}
                </p>
                <div className="flex flex-wrap gap-2">
                  {content.overview.chips.map((item) => {
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
                    src={content.overview.image}
                    alt={content.overview.imageAlt}
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

      {/* ── How It Works — 3 steps ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.howItWorksSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.howItWorksSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.howItWorksSection.headingHighlight}
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {content.howItWorks.map((item, i) => (
              <ScrollReveal key={item.step} delay={((i + 1) as 1 | 2 | 3)}>
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-8 border border-gray-100 h-full">
                  {/* Connector line */}
                  {i < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-gray-200 to-transparent z-10" />
                  )}
                  <div className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent/30 to-primary/10 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Benefits — bento grid ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.benefitsSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.benefitsSection.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.benefitsSection.headingHighlight}
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
            {/* Hero benefit card */}
            <ScrollReveal className="md:col-span-2 lg:col-span-8">
              <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden h-full min-h-[280px]">
                <Image
                  src={content.benefitsHeroImage}
                  alt="Auto cover providing safety"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e] via-[#0c4a6e]/50 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-7 sm:p-9">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/25 flex items-center justify-center">
                      <Shield size={22} className="text-accent" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-accent/30 to-transparent" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {content.benefits[0].title}
                  </h3>
                  <p className="text-white/60 max-w-lg leading-relaxed">
                    {content.benefits[0].description}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Side stack — 2 benefits */}
            <div className="lg:col-span-4 flex flex-col gap-4 sm:gap-5">
              {content.benefits.slice(1, 3).map((b, i) => {
                const Icon = icons[b.icon];
                return (
                  <ScrollReveal key={b.title} delay={((i + 1) as 1 | 2)}>
                    <div className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6 sm:p-7 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                        {Icon && <Icon size={20} className="text-accent" />}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors">
                        {b.title}
                      </h3>
                      <p className="text-sm text-gray-500 leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* Bottom row — 3 benefits */}
            {content.benefits.slice(3).map((b, i) => {
              const Icon = icons[b.icon];
              return (
                <ScrollReveal key={b.title} className="lg:col-span-4" delay={((i + 1) as 1 | 2 | 3)}>
                  <div className="group rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-6 sm:p-7 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      {Icon && <Icon size={20} className="text-accent" />}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors">
                      {b.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Under-Track System ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Images */}
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl overflow-hidden col-span-2 border border-white/10">
                  <Image
                    src={content.underTrack.images[0].src}
                    alt={content.underTrack.images[0].alt}
                    width={800}
                    height={500}
                    className="w-full aspect-[16/10] object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={content.underTrack.images[1].src}
                    alt={content.underTrack.images[1].alt}
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(max-width: 1024px) 50vw, 22vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={content.underTrack.images[2].src}
                    alt={content.underTrack.images[2].alt}
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(max-width: 1024px) 50vw, 22vw"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal direction="right">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                  <Eye size={14} className="text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.underTrack.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  {content.underTrack.headingLead}{" "}
                  <span className="shimmer-text">{content.underTrack.headingHighlight}</span>{content.underTrack.headingTail}
                </h2>
                <p className="text-white text-lg leading-relaxed mb-8">
                  {content.underTrack.paragraph}
                </p>

                <div className="space-y-3">
                  {content.underTrack.specifications.map((spec, i) => (
                    <div
                      key={spec.title}
                      className="group flex gap-4 bg-white/[0.05] border border-white/[0.08] rounded-xl p-4 hover:bg-white/[0.08] transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0">
                        <span className="text-accent font-bold text-sm">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm mb-1">
                          {spec.title}
                        </h4>
                        <p className="text-white text-sm leading-relaxed">
                          {spec.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Color Selection ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <Palette size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.colors.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.colors.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.colors.headingHighlight}
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.colors.paragraph}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {content.colors.swatches.map((swatch, i) => (
              <ScrollReveal key={swatch.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500">
                  <div
                    className="aspect-[4/3] w-full"
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <div className="p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      {swatch.name}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-gray-500">{content.colors.note}</p>
              <a
                href={content.colors.sourceHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-accent font-semibold text-sm hover:text-accent-dark transition-colors whitespace-nowrap"
              >
                {content.colors.sourceLabel}
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </a>
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
