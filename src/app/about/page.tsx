import Link from "next/link";
import type { Metadata } from "next";
import Image from "@/components/Image";
import {
  Building2,
  FileText,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Layers,
  Globe2,
  Eye,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import content from "@/content/pages/about.json";

export const metadata: Metadata = {
  alternates: { canonical: "/about/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/about/",
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

/* Icons are picked by name from the content file so the CMS can reorder the
   fact rows without the page needing a code change. */
const iconMap = {
  Building2,
  FileText,
  Users,
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Layers,
  Globe2,
  Eye,
  ShieldCheck,
  Zap,
} as const;

type IconName = keyof typeof iconMap;

const icon = (name: string) => iconMap[name as IconName] ?? CheckCircle2;

/* Only .reveal-delay-1..4 exist in globals.css — anything past the fourth
   card reuses the last delay rather than emitting a dead class. */
const delay = (i: number) => Math.min(i + 1, 4);

/* An AboutPage node tells assistants this URL is the canonical description of
   the business, and mainEntity points them at the Organization in the layout
   rather than repeating the NAP a third time. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://maximapools.com/about/#aboutpage",
  url: "https://maximapools.com/about/",
  name: content.seo.title,
  description: content.seo.description,
  isPartOf: { "@id": "https://maximapools.com/#website" },
  mainEntity: { "@id": "https://maximapools.com/#organization" },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-[15%] w-80 h-80 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-0 left-[10%] w-96 h-96 rounded-full bg-primary-light/8 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white" />
            <span className="text-white font-medium">About Us</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Users size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">{content.hero.headingLead}</span>{" "}
              <span className="shimmer-text">{content.hero.headingHighlight}</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white leading-relaxed max-w-2xl mb-8">
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
                href={content.hero.secondaryHref}
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm"
              >
                <Sparkles size={16} className="text-accent" />
                {content.hero.secondaryLabel}
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

      {/* ── Company at a glance ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12 sm:mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.facts.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
                {content.facts.heading}
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                {content.facts.intro}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <dl className="rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white divide-y divide-gray-100 overflow-hidden">
              {content.facts.items.map((item) => {
                const Icon = icon(item.icon);
                return (
                  <div
                    key={item.label}
                    className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-6 px-6 sm:px-8 py-5"
                  >
                    <dt className="flex items-center gap-3 sm:w-56 shrink-0">
                      <span className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                        <Icon size={15} className="text-accent" />
                      </span>
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        {item.label}
                      </span>
                    </dt>
                    <dd className="text-gray-900 font-medium leading-relaxed pl-11 sm:pl-0">
                      {item.value}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Our story ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl">
                  <Image
                    src={content.story.image}
                    alt="The Maxima Pools team at their Delaware, Ohio headquarters"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 -right-3 sm:right-6 bg-white rounded-2xl shadow-lg border border-gray-100 px-6 py-4">
                  <p className="font-bold text-gray-900 text-sm">
                    {content.story.floatingTitle}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">
                    {content.story.floatingSubtitle}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.story.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-6">
                {content.story.headingLead}{" "}
                <span className="text-accent">{content.story.headingHighlight}</span>
              </h2>
              <div className="space-y-4">
                {content.story.paragraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-gray-500 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Values ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12 sm:mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.valuesSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
                {content.valuesSection.headingLead}{" "}
                <span className="text-accent">{content.valuesSection.headingHighlight}</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                {content.valuesSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {content.values.map((value, i) => {
              const Icon = icon(value.icon);
              return (
                <ScrollReveal key={value.title} delay={delay(i)}>
                  <div className="group rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-8 h-full hover:shadow-lg transition-all duration-500">
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── What we handle in-house ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.capabilities.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
                {content.capabilities.heading}
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-7">
                {content.capabilities.intro}
              </p>
              <p className="text-sm text-gray-400 leading-relaxed border-l-2 border-accent/30 pl-4 mb-8">
                {content.capabilities.note}
              </p>
              <Link
                href={content.capabilities.ctaHref}
                className="group inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                {content.capabilities.ctaLabel}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <ul className="grid sm:grid-cols-2 gap-3">
                {content.capabilities.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl bg-white border border-gray-100 px-5 py-4"
                  >
                    <CheckCircle2 size={17} className="text-accent shrink-0 mt-0.5" />
                    <span className="text-gray-900 text-sm font-medium leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── San Juan partnership ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-8 sm:p-12 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <Award size={14} className="text-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    {content.partnership.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
                  {content.partnership.headingLead}{" "}
                  <span className="text-accent">{content.partnership.headingHighlight}</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  {content.partnership.paragraph1}
                </p>
                <p className="text-gray-500 leading-relaxed">
                  {content.partnership.paragraph2}
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <a
                  href={content.partnership.logoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative w-52 h-24 mb-8 mx-auto lg:mx-0"
                >
                  <Image
                    src={content.partnership.logo}
                    alt="San Juan Pools"
                    fill
                    sizes="208px"
                    className="object-contain"
                  />
                </a>
                <ul className="space-y-2.5">
                  {content.partnership.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="group flex items-center justify-between gap-3 rounded-2xl bg-white border border-gray-100 px-5 py-4 hover:border-accent/30 hover:shadow-sm transition-all"
                      >
                        <span className="text-gray-900 font-medium text-sm">
                          {link.label}
                        </span>
                        <ArrowUpRight
                          size={16}
                          className="text-accent shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Service area ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <MapPin size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.serviceArea.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
                {content.serviceArea.headingLead}{" "}
                <span className="text-accent">{content.serviceArea.headingHighlight}</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                {content.serviceArea.paragraph}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-8">
              {content.serviceArea.cities.map((city) => (
                <span
                  key={city}
                  className="text-sm text-gray-900 bg-white border border-gray-100 rounded-full px-4 py-1.5 font-medium"
                >
                  {city}
                </span>
              ))}
            </div>
            <Link
              href={content.serviceArea.allAreasHref}
              className="group inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
            >
              {content.serviceArea.allAreasLabel}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── How to reach us ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <Phone size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.contactSection.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
                {content.contactSection.heading}
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                {content.contactSection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {content.contactSection.methods.map((method, i) => {
              const Icon = icon(method.icon);
              const external = method.href.startsWith("http");
              return (
                <ScrollReveal key={method.label} delay={delay(i)}>
                  <a
                    href={method.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group block rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-8 h-full hover:shadow-lg hover:border-accent/25 transition-all duration-500"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      {method.label}
                    </p>
                    <p className="text-gray-900 font-semibold leading-snug mb-2">
                      {method.value}
                    </p>
                    <p className="text-gray-500 text-sm">{method.note}</p>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── CTA ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {content.cta.heading}
            </h2>
            <p className="text-white text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              {content.cta.body}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 *:whitespace-nowrap">
              <Link
                href={content.cta.buttonHref}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-105 text-sm sm:text-base"
              >
                {content.cta.buttonLabel}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={content.cta.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm sm:text-base"
              >
                <Phone size={18} />
                {content.cta.phoneDisplay}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
