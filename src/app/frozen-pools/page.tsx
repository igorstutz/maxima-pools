import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Snowflake,
  Shield,
  Leaf,
  Phone,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  ThermometerSnowflake,
  Clock,
  Wrench,
  Zap,
  ShieldCheck,
  Waves,
  Hammer,
  Award,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { SectionDivider } from "@/components/SectionDivider";
import content from "@/content/pages/frozen-pools.json";

const icons: Record<string, LucideIcon> = {
  ThermometerSnowflake, Shield, ShieldCheck, Clock, Snowflake, Waves, Zap,
  Hammer, Leaf,
};

export const metadata: Metadata = {
  alternates: { canonical: "/frozen-pools/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/frozen-pools/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Freezable Pools — Ice-Ready Fiberglass Pool Installation",
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
    "San Juan fiberglass pools built to withstand extreme freezing conditions in Ohio. Durable, flexible, warranty-backed pool installations for year-round performance.",
};

export default function FrozenPoolsPage() {
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
          alt="Frozen fiberglass pool in winter — ice-ready San Juan pool"
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
            <Link href="/pools" className="hover:text-accent transition-colors font-medium">
              Pools & Spas
            </Link>
            <ChevronRight size={14} className="text-white" />
            <span className="text-white font-medium">Freezable Pools</span>
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

      {/* ── Winter Playground — split layout ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.playground.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  {content.playground.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.playground.headingHighlight}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {content.playground.paragraph1}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {content.playground.paragraph2}
                </p>
                <div className="flex flex-wrap gap-2">
                  {content.playground.chips.map((item) => {
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
                    src={content.playground.image}
                    alt={content.playground.imageAlt}
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

      {/* ── Why Fiberglass Excels — bento grid ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
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
              <p className="text-gray-600 text-lg leading-relaxed">
                {content.benefitsSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
            {/* Hero benefit card */}
            <ScrollReveal className="md:col-span-2 lg:col-span-8">
              <div className="group relative rounded-2xl sm:rounded-3xl overflow-hidden h-full min-h-[280px]">
                <Image
                  src={content.benefitsHeroImage}
                  alt="Durable fiberglass pool withstanding winter freeze"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e] via-[#0c4a6e]/50 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-7 sm:p-9">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/25 flex items-center justify-center">
                      <Hammer size={22} className="text-accent" />
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
                    <div className="group rounded-2xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 p-6 sm:p-7 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
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
                  <div className="group rounded-2xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 p-6 sm:p-7 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
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

      {/* ── Winter Advantages — dark section with image gallery ── */}
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
                    src={content.advantages.images[0].src}
                    alt={content.advantages.images[0].alt}
                    width={800}
                    height={500}
                    className="w-full aspect-[16/10] object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={content.advantages.images[1].src}
                    alt={content.advantages.images[1].alt}
                    width={400}
                    height={300}
                    className="w-full aspect-[4/3] object-cover"
                    sizes="(max-width: 1024px) 50vw, 22vw"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-white/10">
                  <Image
                    src={content.advantages.images[2].src}
                    alt={content.advantages.images[2].alt}
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
                  <Snowflake size={14} className="text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.advantages.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                  {content.advantages.headingLead}{" "}
                  <span className="shimmer-text">{content.advantages.headingHighlight}</span>
                </h2>
                <p className="text-white text-lg leading-relaxed mb-8">
                  {content.advantages.paragraph}
                </p>

                <ul className="space-y-3">
                  {content.advantages.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-white"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-accent shrink-0 mt-0.5"
                      />
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

      {/* ── Warranty & Compatibility ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.warranty.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  {content.warranty.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.warranty.headingHighlight}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {content.warranty.paragraph1}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {content.warranty.paragraph2}
                </p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 *:whitespace-nowrap">
                  <div className="flex items-center gap-3 bg-green-50 border border-green-200/60 rounded-xl px-5 py-3.5">
                    <Award size={20} className="text-green-600 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-green-800">{content.warranty.badge1.title}</p>
                      <p className="text-xs text-green-600">{content.warranty.badge1.sub}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-blue-50 border border-blue-200/60 rounded-xl px-5 py-3.5">
                    <Shield size={20} className="text-blue-600 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-blue-800">{content.warranty.badge2.title}</p>
                      <p className="text-xs text-blue-600">{content.warranty.badge2.sub}</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={content.warranty.image}
                    alt={content.warranty.imageAlt}
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

      {/* ── How San Juan Pools Are Built — link section ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
              <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light p-10 sm:p-14 lg:p-20">
                <div className="absolute inset-0 water-caustics opacity-10" />
                <div className="relative max-w-3xl mx-auto text-center">
                  <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2 mb-6">
                    <Wrench size={14} className="text-accent-light" />
                    <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
                      {content.craftsmanship.badge}
                    </span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                    {content.craftsmanship.headingLead}{" "}
                    <span className="shimmer-text">{content.craftsmanship.headingHighlight}</span>
                  </h2>
                  <p className="text-white text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                    {content.craftsmanship.paragraph}
                  </p>
                  <Link
                    href={content.craftsmanship.ctaHref}
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    {content.craftsmanship.ctaLabel}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </Link>
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
