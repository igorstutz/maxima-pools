import type { Metadata } from "next";
import Link from "next/link";
import Image from "@/components/Image";
import {
  MapPin,
  Phone,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Star,
  Waves,
  Shield,
  Clock,
  Sparkles,
} from "lucide-react";
import { notFound } from "next/navigation";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { locations, slugify } from "@/lib/locations";
import content from "@/content/pages/locations-template.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Lucide icons referenced by name from the editable content file.
const benefitIcons = { Shield, Waves, Clock, Star } as const;

// Fill {area}/{name} placeholders in the editable template strings.
function fill(template: string, vars: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? "");
}

export async function generateStaticParams() {
  return locations.map((loc) => ({ slug: slugify(loc.name) }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = locations.find((l) => slugify(l.name) === slug);
  if (!location) return {};

  const area = location.type === "county" ? location.name : `${location.name}, Ohio`;
  const vars = { area, name: location.name };
  return {
    title: fill(content.seo.titleTemplate, vars),
    description: fill(content.seo.descriptionTemplate, vars),
    alternates: { canonical: `/locations/${slug}/` },
    openGraph: {
      title: fill(content.seo.ogTitleTemplate, vars),
      description: fill(content.seo.ogDescriptionTemplate, vars),
      type: "website",
      url: `/locations/${slug}/`,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: fill(content.seo.ogImageAltTemplate, vars),
        },
      ],
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = locations.find((l) => slugify(l.name) === slug);
  if (!location) notFound();

  const area = location.type === "county" ? location.name : `${location.name}, Ohio`;
  const areaShort = location.name;
  const mapSrc = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${location.query}&zoom=11`;
  const heroImage = `/images/locations/${slug}.webp`;

  const { hero, servicesSection, whySection, otherAreas, finalCta } = content;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Maxima Pools",
    description: `Premium fiberglass pool installation in ${area}. Authorized San Juan Pools dealer.`,
    telephone: "+1-614-384-5081",
    email: "info@maximapools.com",
    url: "https://maximapools.com",
    areaServed: {
      "@type": location.type === "county" ? "AdministrativeArea" : "City",
      name: area,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "4059 State Route 37 East, Suite A",
      addressLocality: "Delaware",
      addressRegion: "OH",
      postalCode: "43015",
      addressCountry: "US",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <Image
          src={heroImage}
          alt={`Fiberglass pool installation in ${area}`}
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
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white" />
            <span className="text-white font-medium">{areaShort}</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <MapPin size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                {hero.badge}
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">{hero.headingLead}</span>{" "}
              <span className="shimmer-text">{areaShort}</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white leading-relaxed mb-8 max-w-2xl">
              {fill(hero.subtitleTemplate, { area, name: areaShort })}
            </p>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-3 *:whitespace-nowrap">
              <Link
                href={hero.estimateHref}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
              >
                {hero.estimateLabel}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href={hero.simulatorHref}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
              >
                <Sparkles size={18} className="text-accent" />
                {hero.simulatorLabel}
              </Link>
              <a
                href={hero.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
              >
                <Phone size={18} />
                {hero.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Map + Services ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Map */}
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
                <iframe
                  src={mapSrc}
                  width="100%"
                  className="h-[350px] sm:h-[420px]"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map of ${area}`}
                  allowFullScreen
                />
              </div>
            </ScrollReveal>

            {/* Services */}
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                {servicesSection.headingLead}{" "}
                <span className="text-accent">{areaShort}</span>
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                {location.copy}
              </p>
              <ul className="space-y-3 mb-8">
                {servicesSection.services.map((s) => (
                  <li key={s} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent shrink-0" />
                    <span className="text-gray-700 font-medium">{s}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={servicesSection.requestEstimateHref}
                className="group inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all"
              >
                {fill(servicesSection.requestEstimateLabelTemplate, { name: areaShort })}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Why Maxima ── */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {fill(whySection.headingLeadTemplate, { name: areaShort })}{" "}
                <span className="text-accent">{whySection.headingHighlight}</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                {whySection.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whySection.benefits.map((b, i) => {
              const Icon = benefitIcons[b.icon as keyof typeof benefitIcons];
              return (
                <ScrollReveal key={b.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all h-full">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      {Icon && <Icon size={22} className="text-accent" />}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{b.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Other Locations ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
              {otherAreas.heading}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
              {locations
                .filter((l) => l.name !== location.name)
                .map((l) => (
                  <Link
                    key={l.name}
                    href={`/locations/${slugify(l.name)}`}
                    className="group flex items-center gap-2 px-3 py-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-accent/30 hover:bg-accent/5 transition-all"
                  >
                    <MapPin
                      size={12}
                      className="text-gray-300 group-hover:text-accent transition-colors shrink-0"
                    />
                    <span className="text-xs sm:text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors truncate">
                      {l.name}
                    </span>
                  </Link>
                ))}
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
                src={heroImage}
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
                    {finalCta.headingLead}{" "}
                    <span className="shimmer-text">{areaShort}?</span>
                  </h2>
                  <p className="text-lg text-white leading-relaxed mb-10 max-w-lg">
                    {finalCta.body}
                  </p>
                  <div className="flex flex-wrap gap-3 *:whitespace-nowrap">
                    <Link
                      href={finalCta.estimateHref}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                    >
                      {finalCta.estimateLabel}
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      href={finalCta.simulatorHref}
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      <Sparkles size={18} className="text-accent" />
                      {finalCta.simulatorLabel}
                    </Link>
                    <a
                      href={finalCta.phoneHref}
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      <Phone size={18} />
                      {finalCta.phoneDisplay}
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
