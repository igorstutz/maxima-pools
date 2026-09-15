import Link from "next/link";
import type { Metadata } from "next";
import {
  FileText,
  Activity,
  Target,
  Share2,
  Cookie,
  Archive,
  UserCheck,
  Lock,
  Baby,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  ScrollText,
  ArrowRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import content from "@/content/pages/privacy.json";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy/" },
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/privacy/",
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

const iconMap = {
  FileText,
  Activity,
  Target,
  Share2,
  Cookie,
  Archive,
  UserCheck,
  Lock,
  Baby,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
} as const;

type IconName = keyof typeof iconMap;

const icon = (name: string) => iconMap[name as IconName] ?? FileText;

/* Sections whose `bullets` array is empty in the JSON widen to never[], which
   makes the union of section shapes non-callable on .map(). Naming the shape
   once keeps the render loop honest — and tells the CMS author what a section
   is allowed to contain. */
interface PolicySection {
  id: string;
  icon: string;
  heading: string;
  paragraphs: string[];
  bullets: { term: string; description: string }[];
  closing: string;
}

const sections = content.sections as unknown as PolicySection[];

/* WebPage, not PrivacyPolicy: schema.org has no PrivacyPolicy type (the URL
   404s), and an unknown @type gets the whole node dropped by consumers.
   dateModified drives the "last updated" line assistants quote when asked
   whether a policy is current, so it mirrors the date shown on the page. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://maximapools.com/privacy/#privacypolicy",
  url: "https://maximapools.com/privacy/",
  name: content.seo.title,
  description: content.seo.description,
  inLanguage: "en-US",
  datePublished: "2026-09-15",
  dateModified: "2026-09-15",
  isPartOf: { "@id": "https://maximapools.com/#website" },
  publisher: { "@id": "https://maximapools.com/#organization" },
};

export default function PrivacyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-[15%] w-80 h-80 rounded-full bg-accent/8 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white" />
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <ScrollText size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {content.hero.badge}
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">{content.hero.headingLead}</span>{" "}
              <span className="shimmer-text">{content.hero.headingHighlight}</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white leading-relaxed max-w-2xl mb-7">
              {content.hero.subtitle}
            </p>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white">
              <span>
                <span className="text-white/60">{content.hero.effectiveLabel}: </span>
                <span className="font-semibold">{content.hero.effectiveDate}</span>
              </span>
              <span>
                <span className="text-white/60">{content.hero.updatedLabel}: </span>
                <span className="font-semibold">{content.hero.updatedDate}</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Policy body ── */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-16">
            {/* Table of contents */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                On this page
              </p>
              <nav>
                <ul className="space-y-1">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block rounded-lg px-3 py-2 text-sm text-gray-500 hover:text-accent hover:bg-accent/5 transition-colors leading-snug"
                      >
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Sections */}
            <div className="min-w-0">
              <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-9 mb-12">
                {content.intro.paragraphs.map((p) => (
                  <p
                    key={p.slice(0, 40)}
                    className="text-gray-600 leading-relaxed [&:not(:last-child)]:mb-4"
                  >
                    {p}
                  </p>
                ))}
              </div>

              <div className="space-y-12 sm:space-y-14">
                {sections.map((section) => {
                  const Icon = icon(section.icon);
                  return (
                    <ScrollReveal key={section.id}>
                      {/* scroll-mt clears the fixed header when a TOC link jumps here. */}
                      <section id={section.id} className="scroll-mt-28">
                        <div className="flex items-start gap-4 mb-5">
                          <span className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                            <Icon size={18} className="text-accent" />
                          </span>
                          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight pt-1.5">
                            {section.heading}
                          </h2>
                        </div>

                        <div className="sm:pl-14">
                          {section.paragraphs.map((p) => (
                            <p
                              key={p.slice(0, 40)}
                              className="text-gray-600 leading-relaxed mb-4"
                            >
                              {p}
                            </p>
                          ))}

                          {section.bullets.length > 0 && (
                            <dl className="space-y-3 my-6">
                              {section.bullets.map((bullet) => (
                                <div
                                  key={bullet.term}
                                  className="rounded-2xl bg-gray-50 border border-gray-100 px-5 py-4"
                                >
                                  <dt className="text-gray-900 font-semibold text-sm mb-1">
                                    {bullet.term}
                                  </dt>
                                  <dd className="text-gray-500 text-sm leading-relaxed">
                                    {bullet.description}
                                  </dd>
                                </div>
                              ))}
                            </dl>
                          )}

                          {section.closing ? (
                            <p className="text-gray-600 leading-relaxed">
                              {section.closing}
                            </p>
                          ) : null}
                        </div>
                      </section>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Contact ── */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-10">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.contact.badge}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-5">
                {content.contact.heading}
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                {content.contact.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {content.contact.methods.map((method, i) => {
              const Icon = icon(method.icon);
              const external = method.href.startsWith("http");
              return (
                <ScrollReveal key={method.label} delay={i + 1}>
                  <a
                    href={method.href}
                    {...(external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group block rounded-3xl bg-white border border-gray-100 p-7 h-full hover:shadow-lg hover:border-accent/25 transition-all duration-500"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                      <Icon size={18} className="text-accent" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                      {method.label}
                    </p>
                    <p className="text-gray-900 font-semibold text-sm leading-snug">
                      {method.value}
                    </p>
                  </a>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal>
            <div className="mt-10">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                More about who we are
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
