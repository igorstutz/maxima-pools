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
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Pool Financing | Maxima Pools - Columbus, OH",
  description:
    "Affordable fiberglass pool financing through Lyon Financial. Low rates, flexible terms, fast approvals. Make your dream pool a reality with Maxima Pools in Columbus, OH.",
  openGraph: {
    title: "Pool Financing | Maxima Pools",
    description:
      "Affordable pool financing with industry-leading rates through Lyon Financial. Quick approvals and flexible repayment terms.",
    type: "website",
  },
};

const benefits = [
  {
    icon: DollarSign,
    title: "Lowest Rates & Longest Terms",
    text: "Industry-leading affordability with competitive rates and extended repayment options.",
  },
  {
    icon: ShieldCheck,
    title: "Flexible Loan Programs",
    text: "Options designed for different needs and project sizes — find the right fit for your budget.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    text: "A real account manager guides you from application to completion — no automated runaround.",
  },
  {
    icon: Clock,
    title: "Fast, Hassle-Free Process",
    text: "Quick approvals and clear communication so you can get started on your pool sooner.",
  },
];

const steps = [
  {
    icon: FileText,
    title: "Application",
    text: "Quick online application through Lyon Financial with no credit impact unless you proceed.",
  },
  {
    icon: Search,
    title: "Review",
    text: "A dedicated account manager evaluates your qualifications and prepares personalized loan options.",
  },
  {
    icon: CheckCircle2,
    title: "Selection",
    text: "Choose from flexible programs with industry-leading rates and extended repayment terms.",
  },
  {
    icon: Hammer,
    title: "Construction Support",
    text: "Lyon Financial coordinates with you and Maxima Pools throughout the entire build process.",
  },
  {
    icon: PartyPopper,
    title: "Completion",
    text: "Enjoy your finished pool with confident financing — no surprises, just your backyard paradise.",
  },
];

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

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-20">
        <Image
          src="/images/gallery/featured-02.jpg"
          alt="Fiberglass pool financing"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021526]/95 via-[#021526]/80 to-[#021526]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/70 via-transparent to-[#021526]/30" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">Home</Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white/80 font-medium">Financing</span>
          </nav>

          <div className="max-w-3xl">
            <div className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
              <CreditCard size={14} className="text-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Pool Financing
              </span>
            </div>

            <h1 className="hero-animate hero-animate-3 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
              <span className="text-white">Make It </span>
              <span className="shimmer-text">Affordable</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-2xl">
              Your dream pool doesn&apos;t have to wait. We&apos;ve partnered with Lyon
              Financial — America&apos;s leading pool financing partner since 1979 — to
              bring you low rates, flexible terms, and a hassle-free process.
            </p>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-3">
              <a
                href="https://www.lyonfinancial.net/apply/?lid=11-19241"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
              >
                Apply with Lyon Financial
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+16143845081"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
              >
                <Phone size={18} />
                (614) 384-5081
              </a>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Benefits ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Finance with{" "}
                <span className="text-accent">Lyon Financial</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Industry-leading terms designed to make your pool project accessible and stress-free.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-accent/20 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <b.icon size={22} className="text-accent" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── How It Works ── */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                How It <span className="text-accent">Works</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Five simple steps from application to your first swim.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title}>
                <div className="flex gap-5 items-start bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <step.icon size={22} className="text-accent" />
                    </div>
                    <span className="text-xs font-bold text-accent/60 mt-2">
                      Step {i + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
                src="/images/gallery/featured-02.jpg"
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
                    Ready to Get{" "}
                    <span className="shimmer-text">Started?</span>
                  </h2>
                  <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                    Apply online in minutes — no obligation, no credit impact until
                    you decide to proceed.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://www.lyonfinancial.net/apply/?lid=11-19241"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                    >
                      Apply Now
                      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full text-white font-semibold hover:bg-white/15 transition-all"
                    >
                      Get a Free Estimate
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
