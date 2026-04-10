import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
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
  CheckCircle2,
  MapPin,
  Star,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Why Maxima Pools | Columbus, OH Pool Contractor",
  description:
    "Discover why Maxima Pools is Columbus, Ohio's trusted pool contractor. In-house expertise, San Juan Pools partnership, transparency, and full-service installation.",
  openGraph: {
    title: "Why Maxima Pools | The Maxima Advantage",
    description:
      "Buy your inground swimming pool from the people who actually do the work. In-house team, San Juan Pools partnership, and full-service installation in Columbus, OH.",
    type: "website",
    locale: "en_US",
    siteName: "Maxima Pools",
  },
};

const pillars = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Buying a pool is a big decision and we want you to make it being fully informed. We will educate you about the products and processes so you can make the best choice for your family and your home.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description:
      "We stay accountable because we perform the vast majority of the work in-house, shepherding your project from start to a successful conclusion. No finger-pointing between subcontractors.",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    icon: Zap,
    title: "Efficiency",
    description:
      "We use in-house resources for the vast majority of your project, completing it efficiently with swift communication. One team, one timeline, one point of contact.",
    gradient: "from-indigo-500 to-violet-500",
  },
];

const services = [
  {
    icon: Shovel,
    title: "Expert Excavation",
    description:
      "Proper foundation starts with expert excavation. Our experienced crew ensures precise grading and site preparation for a flawless installation.",
    image: "/images/process/mold.webp",
  },
  {
    icon: HardHat,
    title: "Pool Setting & Installation",
    description:
      "Seamless pool setting with meticulous attention to leveling, alignment, and structural integrity for a perfect fit every time.",
    image: "/images/process/completed.webp",
  },
  {
    icon: Pipette,
    title: "Pool Plumbing",
    description:
      "Meticulous pool plumbing designed for optimal water flow, efficient filtration, and long-term reliability.",
    image: "/images/process/ribs.webp",
  },
  {
    icon: Plug,
    title: "Electrical & Backfilling",
    description:
      "Complete electrical work for pumps, lighting, and automation systems, followed by precision backfilling for a solid, lasting installation.",
    image: "/images/process/glass.webp",
  },
  {
    icon: Fence,
    title: "Concrete & Paver Patios",
    description:
      "Custom-designed concrete and paver patios that complement your pool and define your outdoor living space with lasting beauty.",
    image: "/images/outdoor/kitchen.jpg",
  },
  {
    icon: Flame,
    title: "Outdoor Living",
    description:
      "Complete your backyard retreat with fire pits, outdoor kitchens, pergolas, and shade structures designed and built by our team.",
    image: "/images/outdoor/living-1.jpg",
  },
];

const enhancements = [
  {
    icon: Thermometer,
    title: "Heating Systems",
    description:
      "Extend your swim season year-round with efficient pool heating solutions. Enjoy your pool from early spring through late fall in Central Ohio.",
    image: "/images/pools/atlantic.jpg",
  },
  {
    icon: ShieldHalf,
    title: "Automatic Covers",
    description:
      "Effortless pool maintenance and safety with automatic covers. Keep debris out, retain heat, and add peace of mind with the push of a button.",
    image: "/images/pools/clear-water-beach.png",
  },
  {
    icon: Sparkles,
    title: "Fun Features",
    description:
      "Make your pool uniquely yours with slides, attached hot tubs, tanning ledges, bubblers, and more. Every detail tailored to your family.",
    image: "/images/pools/oasis.jpg",
  },
];

const serviceAreas = [
  "Columbus",
  "Delaware",
  "Franklin County",
  "Union County",
  "Licking County",
  "Fairfield County",
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
          src="/images/pools/clear-water-beach.png"
          alt="Stunning fiberglass pool installation by Maxima Pools"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/95 via-[#021526]/80 to-[#021526]/50" />
        <div className="absolute inset-0 water-caustics opacity-10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6 hero-animate hero-animate-1">
              <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                The Maxima Difference
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6 hero-animate hero-animate-2">
              The Maxima Pools{" "}
              <span className="shimmer-text">Advantage</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/60 leading-relaxed max-w-2xl mb-10 hero-animate hero-animate-3">
              Buy your inground swimming pool from the people who actually do
              the work.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 hero-animate hero-animate-4">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-105 text-sm sm:text-base"
              >
                Get Your Free Estimate
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <a
                href="tel:6143845081"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm sm:text-base"
              >
                <Phone size={18} />
                (614) 384-5081
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
                  Our Core Values
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 tracking-tight">
                Built on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Three Pillars
                </span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                Everything we do at Maxima Pools is guided by three principles
                that put you, the homeowner, first.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {pillars.map((pillar, index) => (
              <ScrollReveal
                key={pillar.title}
                delay={((index + 1) as 1 | 2 | 3)}
              >
                <div className="group rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-9 hover:shadow-xl hover:border-gray-200 transition-all duration-500 h-full">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <pillar.icon size={26} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
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
                    src="/images/why-maxima/hero-aerial.jpg"
                    alt="Maxima Pools team in front of headquarters"
                    width={800}
                    height={550}
                    className="w-full aspect-[16/11] object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent" />
                  {/* Floating label */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-xl border border-white/50 rounded-xl px-4 py-2.5 shadow-lg">
                    <p className="text-gray-900 font-semibold text-sm">
                      The Maxima Team
                    </p>
                    <p className="text-gray-500 text-xs">
                      In-house professionals, start to finish
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
                    Our Team
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-5">
                  In-House Expertise,{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Start to Finish
                  </span>
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-6">
                  At Maxima Pools, we don&apos;t hand your project off to a
                  chain of subcontractors. Our dedicated team of excavation,
                  construction, and design professionals manages your project
                  entirely in-house.
                </p>
                <p className="text-gray-500 leading-relaxed mb-8">
                  This means faster communication, consistent quality, and a
                  single point of accountability from the first shovel in the
                  ground to the final finishing touch. When you choose Maxima,
                  you get the peace of mind that comes from working directly
                  with the people building your pool.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Excavation Crew",
                    "Construction Team",
                    "Plumbing & Electrical",
                    "Concrete & Patios",
                    "Design Consultation",
                    "Project Management",
                  ].map((item) => (
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#021526] via-[#042a45] to-[#063554]" />
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
                    Our Partnership
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
                  Backed by{" "}
                  <span className="shimmer-text">San Juan Pools</span>
                </h2>
                <p className="text-lg text-white/55 leading-relaxed mb-6">
                  Maxima Pools is proud to partner with San Juan Pools, the
                  industry leader in fiberglass pool manufacturing since 1958.
                  San Juan is known for their hand-laid, woven fiberglass
                  construction — a process that produces the strongest,
                  most durable pool shells on the market.
                </p>
                <p className="text-white/45 leading-relaxed mb-8">
                  Unlike competitors who use sprayed fiberglass, every San Juan
                  pool features multiple layers of hand-laid woven roving with
                  marine-grade Vinyl Ester resin. This is the same standard
                  used in boat building, ensuring your pool can handle
                  decades of use without compromising structural integrity.
                </p>
                <Link
                  href="/pools"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 text-sm"
                >
                  Explore Our Pools
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
                <div className="relative mb-10">
                  <div className="absolute -inset-6 bg-accent/10 rounded-full blur-2xl" />
                  <Image
                    src="/images/logo/sanjuan-logo.png"
                    alt="San Juan Pools - Authorized Dealer"
                    width={220}
                    height={220}
                    className="relative w-44 h-44 sm:w-52 sm:h-52 object-contain drop-shadow-2xl"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                  {[
                    { value: "100%", label: "Hand-Laid Fiberglass" },
                    { value: "5+", label: "Layers of Woven Roving" },
                    { value: "1958", label: "Established Since" },
                    { value: "50+", label: "Pool Models Available" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded-2xl p-5 text-center hover:bg-white/[0.08] transition-colors"
                    >
                      <p className="text-2xl sm:text-3xl font-bold text-white mb-1">
                        {stat.value}
                      </p>
                      <p className="text-white/40 text-xs sm:text-sm font-medium">
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
                  What We Do
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 tracking-tight">
                Full-Service{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Pool Installation
                </span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                From the first dig to the final detail, Maxima handles every
                phase of your pool project with in-house expertise.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((service, index) => (
              <ScrollReveal key={service.title} delay={((index % 3 + 1) as 1 | 2 | 3)}>
                <div className="group relative rounded-3xl overflow-hidden h-full min-h-[360px] sm:min-h-[400px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021526] via-[#021526]/70 to-[#021526]/20 group-hover:via-[#021526]/60 transition-all duration-500" />

                  <div className="relative h-full flex flex-col justify-end p-7 sm:p-8">
                    <div className="w-12 h-12 rounded-2xl bg-accent/20 backdrop-blur-sm border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                      <service.icon size={22} className="text-accent" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-white/55 text-sm leading-relaxed max-w-sm">
                      {service.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
                  Beyond the Pool
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-5 tracking-tight">
                Enhance Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Experience
                </span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
                Take your pool to the next level with premium features and
                accessories designed for comfort, convenience, and fun.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-3 gap-4 sm:gap-5">
            {enhancements.map((item, index) => (
              <ScrollReveal key={item.title} delay={((index + 1) as 1 | 2 | 3)}>
                <div className="group rounded-3xl overflow-hidden bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl hover:border-gray-200 transition-all duration-500 h-full">
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
                      <item.icon size={22} className="text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ================================================================ */}
      {/* INVESTMENT SECTION (Dark)                                        */}
      {/* ================================================================ */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#021526] via-[#042a45] to-[#063554]" />
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
                    Your Investment
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
                  More Than Just a Pool —{" "}
                  <span className="shimmer-text">It&apos;s an Investment</span>
                </h2>
                <p className="text-lg text-white/55 leading-relaxed mb-6">
                  A Maxima pool doesn&apos;t just transform your backyard — it
                  adds lasting value to your home. Fiberglass pools are
                  recognized by real estate professionals as one of the best
                  home improvements for return on investment.
                </p>
                <p className="text-white/45 leading-relaxed mb-8">
                  Customize your setup with hot tub combos, color-changing LED
                  lighting, tanning ledges, and water features. Every element
                  is designed to match your lifestyle while increasing
                  your property&apos;s value and your family&apos;s enjoyment
                  for years to come.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Hot Tub Combos",
                    "LED Color Lighting",
                    "Tanning Ledges",
                    "Water Features",
                    "Automatic Covers",
                    "Custom Patios",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-accent" />
                      </div>
                      <span className="text-sm text-white/70 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Image */}
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/images/why-maxima/huntington-granite.jpg"
                    alt="Huntington Beach pool in Granite color finish"
                    width={800}
                    height={550}
                    className="w-full aspect-[16/11] object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/40 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-2.5">
                    <p className="text-white font-semibold text-sm">
                      Huntington Beach - Granite
                    </p>
                    <p className="text-white/50 text-xs">
                      Premium fiberglass finish
                    </p>
                  </div>
                </div>
              </div>
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
                    Service Area
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-5">
                  Serving{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Central Ohio
                  </span>
                </h2>
                <p className="text-lg text-gray-500 leading-relaxed mb-8">
                  Maxima Pools proudly serves Columbus, Ohio and surrounding
                  communities. Our team is local, and we understand the
                  unique soil conditions, climate considerations, and
                  permitting requirements of Central Ohio.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                    >
                      <MapPin size={14} className="text-accent shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">
                        {area}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Map / Visual */}
            <ScrollReveal direction="right" delay={1}>
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#031c30] to-[#063554] p-8 sm:p-10 min-h-[380px] flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 water-caustics opacity-20" />
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-accent/15 border border-accent/20 flex items-center justify-center mx-auto mb-6">
                    <MapPin size={36} className="text-accent" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                    Columbus, Ohio
                  </h3>
                  <p className="text-white/50 leading-relaxed max-w-sm mb-6">
                    Based in Delaware, Ohio, we serve the greater Columbus
                    metropolitan area and surrounding counties.
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-white/70 text-sm font-medium">
                      Now scheduling for 2026
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
                src="/images/pools/grand-manhattan.png"
                alt="Grand Manhattan fiberglass pool"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/95 via-[#021526]/85 to-[#021526]/60" />
              <div className="absolute inset-0 water-caustics opacity-10" />

              <div className="relative w-full px-8 sm:px-12 lg:px-16 py-14 sm:py-16">
                <div className="max-w-2xl">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-5">
                    Ready to{" "}
                    <span className="shimmer-text">Get Started?</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-white/55 leading-relaxed mb-10 max-w-lg">
                    Your dream backyard is one conversation away. Reach out
                    for a free estimate and let us show you the Maxima
                    difference.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link
                      href="/contact"
                      className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-105 text-sm sm:text-base"
                    >
                      Get Your Free Estimate
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                    <a
                      href="tel:6143845081"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all text-sm sm:text-base"
                    >
                      <Phone size={18} />
                      (614) 384-5081
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
