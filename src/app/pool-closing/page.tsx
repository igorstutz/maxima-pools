import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Snowflake,
  Shield,
  Leaf,
  Sun,
  Phone,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Wrench,
  Droplets,
  ThermometerSnowflake,
  Clock,
  DollarSign,
  CloudSnow,
  ShieldCheck,
  Award,
  Lock,
  Key,
  Zap,
  Eye,
  ClipboardCheck,
  Users,
  CalendarCheck,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { HeroImageCycle } from "@/components/HeroImageCycle";
import { Testimonials } from "@/components/Testimonials";
import { PoolClosingFAQ } from "./faq";

export const metadata: Metadata = {
  title: "Pool Closing & Winterizing | Maxima Pools - Columbus, OH",
  description:
    "Professional pool winterization services in Columbus, OH. Protect your pool from freeze damage, prevent algae growth, and ensure an easy spring opening. Starting at $450.",
  openGraph: {
    title: "Pool Closing & Winterizing | Maxima Pools",
    description:
      "Professional winterization to protect your pool from freeze damage, prevent algae growth, and ensure a smooth opening in spring.",
    type: "website",
  },
};

const stats = [
  { value: "500+", label: "Pools Winterized", icon: Snowflake },
  { value: "$5K+", label: "Avg. Damage Prevented", icon: ShieldCheck },
  { value: "8-Step", label: "Thorough Process", icon: ClipboardCheck },
  { value: "100%", label: "Satisfaction Rate", icon: Users },
];

const whyItMatters = [
  {
    icon: ThermometerSnowflake,
    title: "Prevent Freeze Damage",
    description:
      "Protect your plumbing, equipment, and pool shell from costly freeze-thaw damage during Ohio winters.",
  },
  {
    icon: Leaf,
    title: "Avoid Algae Growth",
    description:
      "Proper chemical treatment and covering prevents algae from taking hold over the off-season.",
  },
  {
    icon: Sun,
    title: "Easy Spring Opening",
    description:
      "A properly winterized pool opens faster and cleaner, saving you time and money in spring.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Blow Out All Plumbing Lines",
    description:
      "We use high-powered air to force water from all plumbing lines, preventing pipe freeze and cracks.",
  },
  {
    step: "02",
    title: "Reduce Water Level",
    description:
      "Water is lowered to the appropriate level below the skimmer to protect against ice expansion.",
  },
  {
    step: "03",
    title: "Cap All Returns",
    description:
      "All return jets and skimmer are sealed with winterizing plugs to prevent water re-entry.",
  },
  {
    step: "04",
    title: "Install Gizzmo",
    description:
      "A specialized device is placed in the skimmer to absorb ice pressure and protect the skimmer body.",
  },
  {
    step: "05",
    title: "Add Winterization Chemicals",
    description:
      "Balanced chemical treatment prevents algae, staining, and scale buildup through the winter months.",
  },
  {
    step: "06",
    title: "Install Winter Cover",
    description:
      "Your cover is secured with anchors and springs to protect the pool from debris and weather.",
  },
  {
    step: "07",
    title: "Drain Equipment",
    description:
      "All pumps, filters, heaters, and chlorinators are drained and plugs removed to prevent freeze damage.",
  },
  {
    step: "08",
    title: "Cartridge Filter Care",
    description:
      "Cartridge elements are removed, cleaned, and stored properly to extend their lifespan.",
  },
];

const beforeWeArrive = [
  {
    icon: Key,
    text: "Pool and equipment pad fully accessible",
  },
  {
    icon: Shield,
    text: "Winter cover ready and placed near the pool",
  },
  {
    icon: Wrench,
    text: "All anchors must be functional (replaceable at additional cost)",
  },
  {
    icon: Lock,
    text: "Provide codes for automatic covers",
  },
  {
    icon: Zap,
    text: "Grant access to electrical breakers",
  },
  {
    icon: Droplets,
    text: "Pool should be clean (cleaning available for extra fee)",
  },
];

const whyChoose = [
  {
    icon: Award,
    title: "Expertise & Reliability",
    description:
      "Trained technicians using the latest pool maintenance techniques and industry-best practices.",
  },
  {
    icon: ClipboardCheck,
    title: "Comprehensive Service",
    description:
      "We handle every single step of winterization so you don't have to worry about a thing.",
  },
  {
    icon: Eye,
    title: "Customized Approach",
    description:
      "Tailored to your specific pool type — inground, saltwater, cartridge filter, or auto cover.",
  },
  {
    icon: ShieldCheck,
    title: "Peace of Mind",
    description:
      "Avoid costly freeze damage repairs and enjoy a stress-free winter knowing your pool is protected.",
  },
];

const includedChecklist = [
  "Blow out all plumbing lines",
  "Reduce water level",
  "Cap all returns",
  "Install Gizzmo",
  "Add winterization chemicals",
  "Install winter cover",
  "Drain all equipment",
  "Cartridge filter care",
];

const faqData = [
  {
    question: "When should I close my pool for winter?",
    answer:
      "We recommend closing your pool when water temperatures consistently stay below 65°F, typically between mid-September and mid-October in Columbus, OH. Scheduling early in the season ensures availability and avoids last-minute rushes before the first freeze.",
  },
  {
    question: "What happens if I don't winterize my pool?",
    answer:
      "Skipping winterization can lead to frozen and cracked plumbing lines, damaged pumps and filters, algae blooms, and staining. Repair costs from freeze damage often exceed $3,000–$5,000, far more than the cost of professional winterization.",
  },
  {
    question: "How long does the pool closing process take?",
    answer:
      "A standard pool closing takes approximately 1.5 to 2.5 hours depending on pool size, equipment, and any additional services needed. Our technicians handle every step efficiently so you can get back to your day.",
  },
  {
    question: "Do I need to drain my pool completely?",
    answer:
      "No. We lower the water level to just below the skimmer opening — typically 4 to 6 inches below. Draining a pool completely can cause structural damage from groundwater pressure, especially with fiberglass pools.",
  },
  {
    question: "Is the winter cover included in the price?",
    answer:
      "The $450 starting price includes installation of your existing winter cover. If you need a new cover, we can supply and install one at an additional cost. We'll assess your cover's condition during the service and let you know if replacement is recommended.",
  },
  {
    question: "Do you service saltwater and heated pools?",
    answer:
      "Yes. We winterize all pool types including saltwater systems, heated pools, pools with automatic covers, and those with cartridge or DE filters. Pricing may vary slightly based on additional equipment that needs to be serviced.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Pool Closing & Winterization",
      provider: {
        "@type": "LocalBusiness",
        name: "Maxima Pools",
        telephone: "+1-614-384-5917",
        areaServed: {
          "@type": "City",
          name: "Columbus",
          addressRegion: "OH",
        },
      },
      description:
        "Professional pool winterization services including plumbing blow-out, chemical treatment, equipment draining, and winter cover installation.",
      offers: {
        "@type": "Offer",
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "450",
          priceCurrency: "USD",
          description: "Starting price for standard pool winterization",
        },
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: faqData.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
  ],
};

export default function PoolClosingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <HeroImageCycle
          images={[
            "/images/pools/atlantic.jpg",
            "/images/pools/grand-manhattan.png",
            "/images/pools/great-lakes.jpg",
            "/images/pools/vegas.jpg",
          ]}
          alt="Pool winterization service"
          interval={6000}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/95 via-[#021526]/85 to-[#021526]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/60 via-transparent to-[#021526]/30" />
        <div className="absolute inset-0 water-caustics opacity-20 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white/80 font-medium">Pool Closing</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <Snowflake size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Winterization Services
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">Pool Closing &amp; </span>
              <span className="shimmer-text">Winterizing</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-2xl">
              Professional winterization to protect your pool from freeze damage,
              prevent algae growth, and ensure a smooth opening in spring.
            </p>

            <div className="hero-animate hero-animate-5 inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full px-5 py-2.5 mb-8">
              <DollarSign size={16} className="text-accent" />
              <span className="text-white font-semibold text-sm">Starting at $450</span>
            </div>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-3">
              <Link
                href="/free-estimate"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
              >
                Book Now
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:6143845917"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full text-white font-semibold hover:bg-white/[0.12] transition-all text-sm"
              >
                <Phone size={16} />
                (614) 384-5917
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Stats Strip ── */}
      <section className="bg-[#021526] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 sm:p-6 flex items-center gap-4 hover:bg-white/[0.07] transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0">
                    <s.icon size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-white">{s.value}</p>
                    <p className="text-[11px] sm:text-xs text-white/40 font-medium uppercase tracking-wider">
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Why Proper Pool Closing Matters ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Why It Matters
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Why Proper Pool Closing{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Matters
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {whyItMatters.map((item, i) => (
              <ScrollReveal key={item.title} delay={((i + 1) as 1 | 2 | 3)}>
                <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <item.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
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

      {/* ── Our 8-Step Process ── */}
      <section className="py-16 sm:py-24 bg-gray-50 texture-noise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Our Process
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Our Winterization{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Process
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Every step handled with precision by our experienced technicians.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-5">
            {processSteps.map((item, i) => (
              <ScrollReveal key={item.step} delay={((i % 2 === 0 ? 1 : 2) as 1 | 2)}>
                <div className="group flex gap-4 bg-white rounded-2xl border border-gray-100 p-6 sm:p-7 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <span className="text-accent font-bold text-sm">
                      {item.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1.5 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
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

      {/* ── What We Need From You ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#021526] via-[#042a45] to-[#063554]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <Snowflake size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Preparation
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                Before We{" "}
                <span className="shimmer-text">Arrive</span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed">
                A few things to have ready for a smooth winterization visit.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {beforeWeArrive.map((item, i) => (
              <ScrollReveal key={item.text} delay={((i % 3 === 0 ? 1 : i % 3 === 1 ? 2 : 3) as 1 | 2 | 3)}>
                <div className="group flex gap-4 bg-white/[0.05] border border-white/[0.08] rounded-2xl p-5 sm:p-6 hover:bg-white/[0.08] transition-colors h-full">
                  <div className="w-10 h-10 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center shrink-0">
                    <item.icon size={18} className="text-accent" />
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed pt-2">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Pricing Section ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal direction="left">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    Pricing
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  Simple, Transparent{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Pricing
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Pool closing services start at $450, with variations based on pool
                  type, size, and additional features like heaters or saltwater systems.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Payment required at booking via credit or debit card.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We recommend scheduling in early fall to avoid last-minute delays.
                </p>

                <div className="flex items-center gap-3 p-4 bg-amber-50 border border-amber-200/60 rounded-xl">
                  <CalendarCheck size={20} className="text-amber-600 shrink-0" />
                  <p className="text-sm text-amber-800 font-medium">
                    Book early — slots fill fast in September and October!
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
                <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/80 rounded-3xl p-8 sm:p-10 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-primary/[0.03] rounded-3xl" />
                  <div className="relative">
                    <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Starting at
                    </p>
                    <p className="text-5xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent mb-2">
                      $450
                    </p>
                    <p className="text-lg font-semibold text-gray-900 mb-8">
                      Pool Winterization
                    </p>

                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-8" />

                    <ul className="space-y-3.5 mb-10">
                      {includedChecklist.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="text-accent shrink-0 mt-0.5"
                          />
                          <span className="text-gray-600 text-sm leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/free-estimate"
                      className="group w-full inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] hover:scale-105 transition-all duration-300 text-sm"
                    >
                      Book Now
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Why Choose Maxima ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Why Maxima
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Why Choose{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Maxima
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyChoose.map((item, i) => (
              <ScrollReveal key={item.title} delay={((i + 1) as 1 | 2 | 3)}>
                <div className="group rounded-2xl sm:rounded-3xl bg-gradient-to-br from-white to-gray-50/50 border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <item.icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── FAQ Section ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <ScrollReveal direction="left">
              <div className="lg:sticky lg:top-32">
                <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                    FAQ
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                  Common{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    Questions
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Everything you need to know about our pool closing service. Can&apos;t find what you&apos;re looking for? Give us a call.
                </p>
                <a
                  href="tel:6143845917"
                  className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-dark transition-colors"
                >
                  <Phone size={18} />
                  (614) 384-5917
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <PoolClosingFAQ faqs={faqData} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Testimonials ── */}
      <Testimonials />

      <SectionDivider />

      {/* ── CTA Section ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden min-h-[380px] flex items-center">
              <Image
                src="/images/pools/grand-manhattan.png"
                alt=""
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/95 via-[#021526]/85 to-[#021526]/50" />
              <div className="absolute inset-0 water-caustics opacity-10" />

              <div className="relative px-8 sm:px-12 lg:px-16 py-16 sm:py-20">
                <div className="max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                    Ready to Close{" "}
                    <span className="shimmer-text">Your Pool?</span>
                  </h2>
                  <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                    Schedule your winterization service today and protect your
                    investment all winter long.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/free-estimate"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                    >
                      Book Now
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                    <a
                      href="tel:6143845917"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      <Phone size={18} />
                      (614) 384-5917
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
