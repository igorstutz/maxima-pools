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
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";

export const metadata: Metadata = {
  title: "Pool Financing | Maxima Pools - Columbus, OH",
  description:
    "Affordable fiberglass pool financing through Lyon Financial. Loans up to $200K, terms up to 30 years, fast approvals. Make your dream pool a reality with Maxima Pools.",
  openGraph: {
    title: "Pool Financing | Maxima Pools",
    description:
      "Affordable pool financing with industry-leading rates through Lyon Financial. Loans up to $200K with terms up to 30 years.",
    type: "website",
  },
};

const stats = [
  { value: "40+", label: "Years in Business", icon: Calendar },
  { value: "500K+", label: "Happy Customers", icon: Users },
  { value: "$200K", label: "Max Loan Amount", icon: Banknote },
  { value: "30", label: "Year Terms Available", icon: Clock },
];

const benefits = [
  {
    icon: DollarSign,
    title: "Lowest Rates & Longest Terms",
    text: "Industry-leading affordability with competitive rates and repayment terms stretching up to 30 years — keeping your monthly payments comfortable.",
  },
  {
    icon: ShieldCheck,
    title: "Flexible Loan Programs",
    text: "Multiple options designed for different needs and project sizes. Whether it's a compact spa or a full backyard transformation, there's a program for you.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Account Manager",
    text: "A real person guides you from application to completion. No automated phone trees — just expert support when you need it.",
  },
  {
    icon: Clock,
    title: "Fast, Hassle-Free Approval",
    text: "Quick online application with no credit impact until you decide to proceed. Most applicants receive a decision within hours.",
  },
];

const steps = [
  {
    icon: FileText,
    num: "01",
    title: "Apply Online",
    text: "Complete a quick application through Lyon Financial. It takes just a few minutes, and there's no credit impact unless you choose to move forward.",
  },
  {
    icon: Search,
    num: "02",
    title: "Get Your Options",
    text: "A dedicated account manager reviews your qualifications and prepares personalized loan options tailored to your project and budget.",
  },
  {
    icon: CheckCircle2,
    num: "03",
    title: "Choose Your Plan",
    text: "Select from flexible programs with industry-leading rates. Pick the terms that work best for your family — from short-term to 30-year repayment.",
  },
  {
    icon: Hammer,
    num: "04",
    title: "Build with Confidence",
    text: "Lyon Financial coordinates directly with Maxima Pools throughout your entire build. Funds are disbursed as milestones are completed.",
  },
  {
    icon: PartyPopper,
    num: "05",
    title: "Enjoy Your Pool",
    text: "Dive in! Your backyard paradise is complete, and your financing is locked in at comfortable terms. No surprises — just relaxation.",
  },
];

const faqs = [
  {
    q: "Will applying affect my credit score?",
    a: "No. The initial application is a soft inquiry that does not impact your credit. A hard inquiry only occurs if you decide to proceed with a loan.",
  },
  {
    q: "How much can I borrow?",
    a: "Lyon Financial offers loans up to $200,000, covering pool installation, outdoor living, landscaping, and related improvements.",
  },
  {
    q: "What can I finance?",
    a: "Your pool, patio, hardscaping, fencing, lighting, outdoor kitchen — essentially your entire backyard project can be rolled into one loan.",
  },
  {
    q: "How long does approval take?",
    a: "Most applicants receive a decision within hours of submitting their application. The entire process from application to funded project is streamlined for speed.",
  },
  {
    q: "Do I need to be a homeowner?",
    a: "Yes. Lyon Financial requires applicants to be homeowners with equity in their property. The pool must be installed at your primary or secondary residence.",
  },
];

const APPLY_URL = "https://www.lyonfinancial.net/apply/?lid=11-19241";

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
          src="/images/gallery/lagoon-03.jpg"
          alt="Beautiful fiberglass pool — finance your dream"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#021526] via-[#021526]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#021526]/40 via-transparent to-[#021526]/20" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white/80 mb-8">
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
              <span className="text-white">Finance Your </span>
              <span className="shimmer-text">Dream Pool</span>
            </h1>

            <p className="hero-animate hero-animate-4 text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-2xl">
              Your backyard paradise doesn&apos;t have to wait. Through our partnership
              with Lyon Financial — America&apos;s #1 pool financing company for over 40
              years — you can get low rates, flexible terms up to 30 years, and
              loans up to $200K.
            </p>

            <div className="hero-animate hero-animate-5 flex flex-wrap gap-3">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
              >
                Apply Now — It&apos;s Free
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

      {/* ── Partner Showcase ── */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl border border-gray-100 p-8 sm:p-12 shadow-sm">
                  <div className="flex items-center gap-4 mb-8">
                    <Image
                      src="/images/partners/lyon-financial.png"
                      alt="Lyon Financial — Maxima Pools financing partner"
                      width={280}
                      height={100}
                      className="h-16 sm:h-20 w-auto object-contain"
                    />
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Lyon Financial has been America&apos;s most trusted pool financing
                    company since 1979. With over <strong>500,000 happy customers</strong> and
                    specialized expertise in swimming pool loans, they make the
                    financing process as refreshing as the pool itself.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-accent font-semibold">
                    <BadgeCheck size={18} />
                    Exclusive Maxima Pools Partner
                  </div>
                </div>
                {/* Decorative */}
                <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full rounded-3xl bg-accent/5" />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="bg-gray-50 rounded-2xl p-5 sm:p-6 border border-gray-100 text-center"
                  >
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <s.icon size={20} className="text-accent" />
                    </div>
                    <p className="text-2xl sm:text-3xl font-bold text-gray-900">
                      {s.value}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                      {s.label}
                    </p>
                  </div>
                ))}
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
                Why Finance with{" "}
                <span className="text-accent">Lyon Financial</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Industry-leading terms designed to make your pool project
                accessible and completely stress-free.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={Math.min(i + 1, 4) as 1 | 2 | 3 | 4}>
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-accent/20 transition-all h-full flex gap-5">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                    <b.icon size={24} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{b.title}</h3>
                    <p className="text-gray-500 leading-relaxed">{b.text}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
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
                How It <span className="text-accent">Works</span>
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                Five simple steps from application to your first swim.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title}>
                <div className="flex gap-6 mb-2">
                  {/* Timeline */}
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-accent-light flex items-center justify-center shadow-lg shadow-accent/20">
                      <step.icon size={24} className="text-white" />
                    </div>
                    {i < steps.length - 1 && (
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
            ))}

            {/* Apply CTA inline */}
            <ScrollReveal>
              <div className="ml-20 mt-4">
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                >
                  Start Your Application
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
                Frequently Asked <span className="text-accent">Questions</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {faqs.map((faq) => (
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
                src="/images/gallery/sully-01.jpg"
                alt="Backyard pool paradise"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#021526] via-[#021526]/80 to-transparent" />
              <div className="absolute inset-0 water-caustics opacity-10" />

              <div className="relative px-8 sm:px-12 lg:px-16 py-16 sm:py-20">
                <div className="max-w-2xl">
                  <Image
                    src="/images/partners/lyon-financial.png"
                    alt="Lyon Financial"
                    width={200}
                    height={60}
                    className="h-10 sm:h-12 w-auto object-contain mb-8 brightness-0 invert opacity-60"
                  />
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                    Ready to Make It{" "}
                    <span className="shimmer-text">Happen?</span>
                  </h2>
                  <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
                    Apply online in minutes. No obligation, no credit impact until
                    you decide to proceed. Your dream pool is closer than you think.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={APPLY_URL}
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
