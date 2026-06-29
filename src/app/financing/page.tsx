import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Image";
import {
  ChevronRight,
  ArrowRight,
  Phone,
  DollarSign,
  Clock,
  ShieldCheck,
  HeartHandshake,
  FileText,
  Search,
  CheckCircle2,
  CreditCard,
  Hammer,
  PartyPopper,
  BadgeCheck,
  Users,
  Calendar,
  Banknote,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { LyonFinancingBanner } from "@/components/LyonFinancingBanner";
import content from "@/content/pages/financing.json";

export const metadata: Metadata = {
  alternates: { canonical: "/financing/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/financing/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
    type: "website",
  },
};

// Lucide icons referenced by name from the editable content file.
const iconMap = {
  Calendar,
  Users,
  Banknote,
  Clock,
  DollarSign,
  ShieldCheck,
  HeartHandshake,
  FileText,
  Search,
  CheckCircle2,
  Hammer,
  PartyPopper,
} as const;

export default function FinancingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Pool Financing",
            description:
              "Affordable fiberglass pool financing through Lyon Financial, offered by Maxima Pools in Columbus, OH.",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: content.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <Image
          src={content.hero.image}
          alt="Beautiful fiberglass pool — finance your dream"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c4a6e]/40 via-transparent to-[#0c4a6e]/20" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-white" />
            <span className="text-white font-medium">Financing</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <CreditCard size={14} className="text-accent" />
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
              <a
                href={content.hero.applyHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
              >
                {content.hero.applyLabel}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href={content.hero.simulatorHref}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
              >
                <Sparkles size={18} className="text-accent" />
                {content.hero.simulatorLabel}
              </Link>
              <a
                href={content.hero.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
              >
                <Phone size={18} />
                {content.hero.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Official Lyon Financial animated banner ── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <LyonFinancingBanner />
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Partner Showcase ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <Image
                      src={content.partner.logo}
                      alt="Lyon Financial — Maxima Pools financing partner"
                      width={280}
                      height={100}
                      className="h-16 sm:h-20 w-auto object-contain"
                    />
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {content.partner.paragraphLead}<strong>{content.partner.paragraphBold}</strong>{content.partner.paragraphTail}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                    <BadgeCheck size={18} />
                    {content.partner.badge}
                  </div>
                </div>
                {/* Decorative */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-accent/5" />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                {content.stats.map((s) => {
                  const Icon = iconMap[s.icon as keyof typeof iconMap];
                  return (
                    <div
                      key={s.label}
                      className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-100 text-center"
                    >
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                        {Icon && <Icon size={20} className="text-accent" />}
                      </div>
                      <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                        {s.value}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                        {s.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Benefits ── */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {content.benefitsSection.headingLead}{" "}
                <span className="text-accent">{content.benefitsSection.headingHighlight}</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                {content.benefitsSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {content.benefits.map((b, i) => {
              const Icon = iconMap[b.icon as keyof typeof iconMap];
              return (
                <ScrollReveal key={b.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all h-full flex gap-5">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      {Icon && <Icon size={24} className="text-accent" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2 text-lg">{b.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{b.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── How It Works ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {content.stepsSection.headingLead}{" "}
                <span className="text-accent">{content.stepsSection.headingHighlight}</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                {content.stepsSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {content.steps.map((step, i) => {
              const Icon = iconMap[step.icon as keyof typeof iconMap];
              return (
                <ScrollReveal key={step.title}>
                  <div className="flex gap-6 mb-2">
                    {/* Timeline */}
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-lg shadow-accent/20">
                        {Icon && <Icon size={24} className="text-white" />}
                      </div>
                      {i < content.steps.length - 1 && (
                        <div className="w-0.5 h-full min-h-[40px] bg-gradient-to-b from-accent/30 to-transparent my-2" />
                      )}
                    </div>
                    {/* Content */}
                    <div className="pb-8">
                      <span className="text-xs font-bold text-accent uppercase tracking-wider">
                        Step {step.num}
                      </span>
                      <h3 className="font-bold text-gray-900 text-lg mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 leading-relaxed">{step.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}

            {/* Apply CTA inline */}
            <ScrollReveal>
              <div className="ml-20 mt-4">
                <a
                  href={content.stepsSection.applyHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                >
                  {content.stepsSection.applyLabel}
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── FAQ ── */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {content.faqSection.headingLead}{" "}
                <span className="text-accent">{content.faqSection.headingHighlight}</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {content.faqs.map((faq) => (
              <ScrollReveal key={faq.q}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Final CTA ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[420px] flex items-center">
              <Image
                src={content.finalCta.image}
                alt="Backyard pool paradise"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0c4a6e] via-[#0c4a6e]/80 to-transparent" />
              <div className="absolute inset-0 water-caustics opacity-10" />

              <div className="relative px-8 sm:px-12 lg:px-16 py-16 sm:py-20">
                <div className="max-w-2xl">
                  <div className="inline-flex bg-white rounded-2xl px-5 py-3 mb-8 shadow-lg">
                    <Image
                      src={content.finalCta.logo}
                      alt="Lyon Financial — Maxima Pools financing partner"
                      width={200}
                      height={60}
                      className="h-10 sm:h-12 w-auto object-contain"
                    />
                  </div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                    {content.finalCta.headingLead}{" "}
                    <span className="shimmer-text">{content.finalCta.headingHighlight}</span>
                  </h2>
                  <p className="text-lg text-white leading-relaxed mb-10 max-w-lg">
                    {content.finalCta.text}
                  </p>
                  <div className="flex flex-wrap gap-3 *:whitespace-nowrap">
                    <a
                      href={content.finalCta.applyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                    >
                      {content.finalCta.applyLabel}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <Link
                      href={content.finalCta.estimateHref}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      {content.finalCta.estimateLabel}
                    </Link>
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
