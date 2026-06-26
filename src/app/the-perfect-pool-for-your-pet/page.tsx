import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  PawPrint,
  Shield,
  Droplets,
  Heart,
  Sun,
  Sparkles,
  CheckCircle2,
  Wrench,
  Clock,
  Layers,
  Award,
  Gem,
  Factory,
  ThermometerSun,
  HandMetal,
  type LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import content from "@/content/pages/the-perfect-pool-for-your-pet.json";

const icons: Record<string, LucideIcon> = {
  Shield, Clock, Layers, PawPrint, HandMetal, Droplets, Sun, ThermometerSun,
  Wrench, Award, Gem, Factory,
};

export const metadata: Metadata = {
  alternates: { canonical: "/the-perfect-pool-for-your-pet/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/the-perfect-pool-for-your-pet/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The Perfect Pool for Your Pet",
  description:
    "Why San Juan fiberglass pools are the best choice for pet owners — smooth surface, scratch-resistant, low chemical maintenance, and built-in shallow wading areas.",
  author: { "@type": "Organization", name: "Maxima Pools" },
  publisher: { "@type": "Organization", name: "Maxima Pools" },
};

export default function PetPoolPage() {
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
          alt="Dog enjoying a San Juan fiberglass pool"
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
            <span className="text-white font-medium">Pool for Your Pet</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <PawPrint size={14} className="text-accent" />
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

      {/* ── Why Pets Love Fiberglass — split layout ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.whyPetsLove.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  {content.whyPetsLove.headingLead}{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    {content.whyPetsLove.headingHighlight}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {content.whyPetsLove.paragraph1}
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {content.whyPetsLove.paragraph2}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {content.whyPetsLove.checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 size={16} className="text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src={content.whyPetsLove.image}
                    alt={content.whyPetsLove.imageAlt}
                    width={800}
                    height={533}
                    className="w-full aspect-[3/2] object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── 6 Benefits Grid ── */}
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {content.petBenefits.map((item, i) => {
              const Icon = icons[item.icon];
              return (
                <ScrollReveal key={item.title} delay={((i % 3 === 0 ? 1 : i % 3 === 1 ? 2 : 3) as 1 | 2 | 3)}>
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

      {/* ── Pool Type Comparison — dark section ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <PawPrint size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.comparison.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                {content.comparison.headingLead}{" "}
                <span className="shimmer-text">{content.comparison.headingHighlight}</span>
              </h2>
              <p className="text-white text-lg leading-relaxed">
                {content.comparison.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {content.comparison.pools.map((pool, i) => {
              const isFirst = i === 0;
              const Icon = icons[pool.icon];
              return (
                <ScrollReveal key={pool.type} delay={((i + 1) as 1 | 2 | 3)}>
                  <div
                    className={`relative rounded-2xl sm:rounded-3xl p-7 sm:p-8 h-full ${
                      isFirst
                        ? "bg-white/[0.06] border-2 border-accent/30"
                        : "bg-white/[0.03] border border-white/[0.08]"
                    }`}
                  >
                    {isFirst && (
                      <div className="absolute -top-3 left-6 bg-gradient-to-r from-accent to-accent-light text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg shadow-accent/25">
                        {content.comparison.bestForPetsLabel}
                      </div>
                    )}

                    <div className="flex items-center gap-3 mb-6 mt-1">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          isFirst
                            ? "bg-accent/20 border border-accent/25"
                            : "bg-white/[0.06] border border-white/[0.08]"
                        }`}
                      >
                        {Icon && (
                          <Icon
                            size={20}
                            className={isFirst ? "text-accent" : "text-white"}
                          />
                        )}
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {pool.type}
                      </h3>
                    </div>

                    <ul className="space-y-3">
                      {pool.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          {isFirst ? (
                            <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                          ) : (
                            <Heart size={15} className="text-white shrink-0 mt-0.5" />
                          )}
                          <span className="text-sm leading-relaxed text-white">
                            {item}
                          </span>
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

      {/* ── Tanning Ledge Callout ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden">
              <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light p-10 sm:p-14 lg:p-20">
                <div className="absolute inset-0 water-caustics opacity-10" />
                <div className="relative grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-5 py-2 mb-6">
                      <Sun size={14} className="text-accent-light" />
                      <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">
                        {content.tanningLedge.badge}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
                      {content.tanningLedge.headingLead}{" "}
                      <span className="shimmer-text">{content.tanningLedge.headingHighlight}</span>
                    </h2>
                    <p className="text-white text-lg leading-relaxed mb-8">
                      {content.tanningLedge.paragraph}
                    </p>
                    <Link
                      href={content.tanningLedge.ctaHref}
                      className="group inline-flex items-center gap-2 text-accent-light font-semibold hover:text-white transition-colors"
                    >
                      {content.tanningLedge.ctaLabel}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="relative hidden lg:block">
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      <Image
                        src={content.tanningLedge.image}
                        alt={content.tanningLedge.imageAlt}
                        width={600}
                        height={400}
                        className="w-full aspect-[3/2] object-cover"
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

      {/* ── Compare & Learn More ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.diveDeeper.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                {content.diveDeeper.headingLead}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  {content.diveDeeper.headingHighlight}
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {content.diveDeeper.cards.map((card, i) => {
              const Icon = icons[card.icon];
              return (
                <ScrollReveal key={card.title} delay={((i + 1) as 1 | 2 | 3)}>
                  <Link href={card.href} className="block h-full">
                    <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full flex flex-col">
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
