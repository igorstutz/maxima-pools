import { notFound } from "next/navigation";
import Image from "@/components/Image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Ruler,
  Droplets,
  Maximize2,
  Waves,
  ArrowRight,
  ChevronRight,
  Phone,
  Palette,
  Lightbulb,
  Sparkles,
  ShieldCheck,
  Sun,
  Thermometer,
  CheckCircle2,
  FileText,
  Box,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { PoolGallery } from "@/components/PoolGallery";
import { pools, slugify, type Pool } from "@/lib/pools";
import { getPoolMedia } from "@/lib/pool-media";

/* ------------------------------------------------------------------ */
/*  Static params                                                      */
/* ------------------------------------------------------------------ */

export function generateStaticParams() {
  return pools.map((pool) => ({ slug: slugify(pool.name) }));
}

/* ------------------------------------------------------------------ */
/*  Metadata                                                           */
/* ------------------------------------------------------------------ */

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const pool = pools.find((p) => slugify(p.name) === slug);
  if (!pool) return {};

  const title = `${pool.name} Fiberglass ${pool.type} | Maxima Pools`;
  const description = `Explore the ${pool.name} — a ${pool.shape.toLowerCase()} fiberglass ${pool.type.toLowerCase()} measuring ${pool.width} x ${pool.length} with ${pool.depth} depth. Get a free estimate from Maxima Pools in Columbus, OH.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      locale: "en_US",
      siteName: "Maxima Pools",
      images: [{ url: pool.image, width: 1200, height: 630, alt: pool.name }],
    },
  };
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function getSizeDescription(pool: Pool): string {
  switch (pool.size) {
    case "Small":
      return "a compact, space-efficient choice ideal for smaller backyards and intimate settings";
    case "Medium":
      return "a versatile mid-size option that balances generous swim space with a manageable footprint";
    case "Large":
      return "a spacious, resort-style installation perfect for entertaining and serious swimming";
  }
}

function getSimilarPools(pool: Pool): Pool[] {
  const slug = slugify(pool.name);
  const scored = new Map<string, { pool: Pool; score: number }>();

  for (const p of pools) {
    const key = slugify(p.name);
    if (key === slug) continue;
    let score = 0;
    if (p.shape === pool.shape) score += 2;
    if (p.size === pool.size) score += 1;
    if (p.type === pool.type) score += 1;
    if (score > 0) scored.set(key, { pool: p, score });
  }

  return [...scored.values()]
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map((s) => s.pool);
}

const specs = (pool: Pool) => [
  { icon: Ruler, label: "Width", value: pool.width },
  { icon: Ruler, label: "Length", value: pool.length, rotate: true },
  { icon: Droplets, label: "Depth", value: pool.depth },
  { icon: Maximize2, label: "Area", value: pool.area },
  { icon: Waves, label: "Volume", value: pool.volume },
];

const features = [
  { icon: Palette, title: "Waterline Tile", description: "Premium ceramic or glass tile accents along the waterline." },
  { icon: Lightbulb, title: "LED Lighting", description: "Color-changing LED systems for stunning nighttime ambiance." },
  { icon: Sparkles, title: "Water Features", description: "Bubblers, deck jets, and cascading waterfalls." },
  { icon: ShieldCheck, title: "Auto Cover", description: "Motorized safety covers for convenience and heat retention." },
  { icon: Sun, title: "Tanning Ledge", description: "Shallow sun shelf perfect for lounging and play." },
  { icon: Thermometer, title: "Heating", description: "Heat pumps and gas heaters for year-round enjoyment." },
];

const highlights = [
  "100% Hand-Laid Fiberglass",
  "Lifetime Structural Warranty",
  "Marine-Grade Vinyl Ester Resin",
  "Non-Porous Gelcoat Finish",
  "Algae-Resistant Surface",
  "Made in America Since 1958",
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default async function PoolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const pool = pools.find((p) => slugify(p.name) === slug);
  if (!pool) notFound();

  const similar = getSimilarPools(pool);
  const media = getPoolMedia(pool.name);

  const poolJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${pool.name} Fiberglass ${pool.type}`,
    description: `${pool.name} — a ${pool.shape.toLowerCase()} fiberglass ${pool.type.toLowerCase()} measuring ${pool.width} x ${pool.length} with ${pool.depth} depth. By San Juan Pools, installed by Maxima Pools.`,
    brand: { "@type": "Brand", name: "San Juan Pools" },
    manufacturer: { "@type": "Organization", name: "San Juan Pools" },
    image: pool.image,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(poolJsonLd) }}
      />
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-12 sm:pt-36 sm:pb-16">
        <Image
          src={pool.image}
          alt=""
          fill
          className="object-cover scale-110 blur-md"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e]/92 via-[#0c4a6e]/85 to-[#0c4a6e]/95" />
        <div className="absolute inset-0 water-caustics opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/pools" className="hover:text-accent transition-colors font-medium">
              Pools
            </Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white/80 font-medium">{pool.name}</span>
          </nav>

          {/* Badges */}
          <div className="hero-animate hero-animate-2 flex flex-wrap gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 bg-accent/20 border border-accent/30 rounded-full px-3 py-1 text-xs font-bold text-accent uppercase tracking-wider">
              {pool.type}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/[0.08] border border-white/[0.12] rounded-full px-3 py-1 text-xs font-semibold text-white/70 uppercase tracking-wider">
              {pool.shape}
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/[0.08] border border-white/[0.12] rounded-full px-3 py-1 text-xs font-semibold text-white/70 uppercase tracking-wider">
              {pool.size}
            </span>
          </div>

          {/* Title */}
          <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            <span className="shimmer-text">{pool.name}</span>
          </h1>

          {/* Specs inline */}
          <div className="hero-animate hero-animate-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/50 mb-8">
            {specs(pool).map((s) => (
              <div key={s.label} className="flex items-center gap-2">
                <s.icon size={14} className={`text-accent ${s.rotate ? "rotate-90" : ""}`} />
                <span className="text-white/40 font-medium">{s.label}:</span>
                <span className="text-white font-semibold">{s.value}</span>
              </div>
            ))}
          </div>

          {/* CTAs + Actions */}
          <div className="hero-animate hero-animate-5 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
            >
              Get a Free Estimate
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+16143845081"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-white font-semibold hover:bg-white/[0.12] transition-all text-sm"
            >
              <Phone size={16} />
              (614) 384-5081
            </a>
            {media.sketchfab && (
              <a
                href={media.sketchfab}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-white/80 font-medium hover:bg-white/[0.12] hover:text-white transition-all text-sm"
              >
                <Box size={16} />
                View in 3D
              </a>
            )}
            {media.pdf && (
              <a
                href={media.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-white/80 font-medium hover:bg-white/[0.12] hover:text-white transition-all text-sm"
              >
                <FileText size={16} />
                Detail Sheet
              </a>
            )}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Gallery ── */}
      <section className="py-10 sm:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <PoolGallery
            images={media.gallery}
            poolName={pool.name}
            mainImage={pool.image}
          />
        </div>
      </section>

      {/* ── Video ── */}
      {media.youtube && (
        <section className="pb-10 sm:pb-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-gray-900 aspect-video">
                <iframe
                  src={`${media.youtube}?rel=0&modestbranding=1`}
                  title={`${pool.name} video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <SectionDivider />

      {/* ── About + San Juan Quality ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left — description */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Overview
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  About the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{pool.name}</span>
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  The {pool.name} is a {pool.shape.toLowerCase()} fiberglass{" "}
                  {pool.type.toLowerCase()} featuring a {pool.width} x {pool.length} footprint
                  with a depth of {pool.depth}. With {pool.area} of{" "}
                  {pool.type === "Pool" ? "swimming" : "soaking"} area and {pool.volume} capacity,
                  it&apos;s {getSizeDescription(pool)}.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Manufactured by San Juan Pools using 100% hand-laid fiberglass construction,
                  the {pool.name} offers unmatched durability, a lifetime structural warranty,
                  and a smooth, non-porous gelcoat finish that resists algae and simplifies
                  maintenance.
                </p>
              </ScrollReveal>
            </div>

            {/* Right — San Juan quality card */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={1}>
                <div className="rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#031c30] to-[#075985] p-7 sm:p-8 relative overflow-hidden h-full">
                  <div className="absolute inset-0 water-caustics opacity-15" />
                  <div className="relative">
                    <Image
                      src="/images/logo/sanjuan-logo.png"
                      alt="San Juan Pools"
                      width={100}
                      height={100}
                      className="w-20 h-20 object-contain mb-6 drop-shadow-xl"
                    />
                    <h3 className="text-lg font-bold text-white mb-4">
                      San Juan Pools Quality
                    </h3>
                    <div className="space-y-3">
                      {highlights.map((item) => (
                        <div key={item} className="flex items-center gap-2.5">
                          <CheckCircle2 size={14} className="text-accent shrink-0" />
                          <span className="text-sm text-white/70">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Features ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Customization
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Available <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Upgrades</span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Tailor the {pool.name} to your vision with popular enhancements.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={((index % 3) + 1) as 1 | 2 | 3}>
                <div className="group rounded-2xl border border-gray-100 bg-white p-5 sm:p-6 hover:shadow-lg hover:border-accent/20 transition-all duration-500 hover:-translate-y-0.5 h-full">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                    <feature.icon size={18} className="text-accent" />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Similar ── */}
      {similar.length > 0 && (
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="max-w-3xl mb-10">
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Explore More
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                  Similar <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">{pool.type === "Spa" ? "Spas" : "Pools"}</span>
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {similar.map((p, index) => (
                <ScrollReveal key={p.name} delay={((index % 3) + 1) as 1 | 2 | 3}>
                  <Link href={`/pools/${slugify(p.name)}`} className="block h-full">
                    <div className="pool-card group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm h-full">
                      <div className="relative aspect-[4/3] overflow-hidden bg-gray-50">
                        <Image
                          src={p.image}
                          alt={p.name}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-bold text-primary-dark shadow-sm">
                          {p.shape}
                        </div>
                      </div>
                      <div className="p-4 sm:p-5">
                        <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                          {p.name}
                        </h3>
                        <p className="text-xs text-gray-400">
                          {p.width} x {p.length} &middot; {p.depth} deep
                        </p>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <SectionDivider />

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Image src={pool.image} alt="" fill className="object-cover blur-md scale-110" sizes="100vw" />
        <div className="absolute inset-0 bg-[#0c4a6e]/92" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
              Interested in the <span className="shimmer-text">{pool.name}</span>?
            </h2>
            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-xl mx-auto">
              Get a free, no-obligation estimate and start planning your dream{" "}
              {pool.type.toLowerCase()} today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300 text-sm sm:text-base"
              >
                Get a Free Estimate
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+16143845081"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm sm:text-base"
              >
                <Phone size={18} />
                (614) 384-5081
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
