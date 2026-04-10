import Link from "next/link";
import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Clock,
  Shield,
  CheckCircle2,
  Star,
  MessageCircle,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Free Estimate | Maxima Pools - Columbus, OH",
  description:
    "Get a free, no-obligation estimate for your fiberglass pool project. Fill out our form or call (614) 384-5917. Serving Columbus, OH and surrounding areas.",
  openGraph: {
    title: "Free Estimate | Maxima Pools",
    description:
      "Start your pool project today. Get a free estimate from the #1 fiberglass pool installer in Columbus, OH.",
    type: "website",
  },
};

const trustPoints = [
  "No-obligation free estimate",
  "Response within 24 hours",
  "Licensed & insured",
  "Family-owned since day one",
];

const contactMethods = [
  {
    icon: Phone,
    label: "Call Us",
    value: "(614) 384-5917",
    href: "tel:6143845917",
    description: "Mon–Sat 8am–6pm",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "info@maximapools.com",
    href: "mailto:info@maximapools.com",
    description: "We reply within 24hrs",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "4059 State Route 37 East, Suite A",
    href: "https://maps.app.goo.gl/JsSoDhkB3zr9fhzu5",
    description: "Delaware, OH 43015",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Maxima Pools",
  telephone: "+1-614-384-5917",
  email: "info@maximapools.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "4059 State Route 37 East, Suite A",
    addressLocality: "Delaware",
    addressRegion: "OH",
    postalCode: "43015",
  },
  areaServed: [
    "Columbus, OH",
    "Delaware, OH",
    "Franklin County",
    "Delaware County",
    "Union County",
    "Licking County",
    "Fairfield County",
  ],
};

export default function FreeEstimatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero + Form ── */}
      <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
        <div className="absolute inset-0 bg-gradient-to-b from-[#021526] via-[#042a45] to-[#063554]" />
        <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />
        <div className="absolute top-0 right-[15%] w-80 h-80 rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute bottom-0 left-[10%] w-96 h-96 rounded-full bg-primary-light/8 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="hero-animate hero-animate-1 flex items-center gap-2 text-sm text-white/50 mb-8">
            <Link href="/" className="hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <ChevronRight size={14} className="text-white/30" />
            <span className="text-white/80 font-medium">Free Estimate</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — copy */}
            <div className="hero-animate hero-animate-2">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
                <MessageCircle size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Get Started
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
                <span className="text-white">Get Your </span>
                <span className="shimmer-text">Free Estimate</span>
              </h1>

              <p className="text-lg sm:text-xl text-white/55 leading-relaxed mb-8 max-w-lg">
                Tell us about your dream pool and we&apos;ll provide a
                personalized quote — no obligation, no pressure.
              </p>

              {/* Trust points */}
              <ul className="space-y-3 mb-10">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-accent shrink-0" />
                    <span className="text-white/70 font-medium text-sm">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Social proof */}
              <div className="flex items-center gap-3 bg-white/[0.05] border border-white/[0.08] rounded-2xl p-4">
                <div className="flex -space-x-2">
                  {["SM", "JL", "MR"].map((initials, i) => (
                    <div
                      key={initials}
                      className={`w-10 h-10 rounded-full border-2 border-[#042a45] flex items-center justify-center text-xs font-bold text-white ${
                        i === 0
                          ? "bg-gradient-to-br from-cyan-400 to-blue-500"
                          : i === 1
                            ? "bg-gradient-to-br from-teal-400 to-cyan-500"
                            : "bg-gradient-to-br from-blue-400 to-indigo-500"
                      }`}
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="text-gold fill-gold" />
                    ))}
                  </div>
                  <p className="text-white/40 text-xs">
                    Trusted by Columbus-area families
                  </p>
                </div>
              </div>

              {/* Phone CTA — prominent on mobile */}
              <a
                href="tel:6143845917"
                className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/[0.06] border border-white/[0.12] rounded-xl text-white font-semibold hover:bg-white/[0.10] transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 border border-accent/25 flex items-center justify-center">
                  <Phone size={18} className="text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold">(614) 384-5917</p>
                  <p className="text-white/40 text-xs">Call now for immediate assistance</p>
                </div>
              </a>
            </div>

            {/* Right — form card */}
            <div className="hero-animate hero-animate-3">
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 shadow-2xl">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center">
                      <Mail size={18} className="text-accent" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-gray-900">
                        Request Your Estimate
                      </h2>
                      <p className="text-xs text-gray-400">
                        Fill out the form and we&apos;ll get back to you within 24 hours
                      </p>
                    </div>
                  </div>

                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Contact Methods ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Reach Out
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
                Other Ways to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Contact Us
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5">
            {contactMethods.map((method, i) => (
              <ScrollReveal key={method.label} delay={((i + 1) as 1 | 2 | 3)}>
                <a
                  href={method.href}
                  target={method.label === "Visit Us" ? "_blank" : undefined}
                  rel={method.label === "Visit Us" ? "noopener noreferrer" : undefined}
                  className="group block rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-7 sm:p-8 hover:shadow-lg hover:border-accent/20 transition-all duration-500 h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                    <method.icon size={24} className="text-accent" />
                  </div>
                  <p className="text-sm text-accent font-semibold uppercase tracking-wider mb-1">
                    {method.label}
                  </p>
                  <p className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                    {method.value}
                  </p>
                  <p className="text-sm text-gray-400">
                    {method.description}
                  </p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── Why Maxima — trust signals ── */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#021526] via-[#042a45] to-[#063554]" />
        <div className="absolute inset-0 water-caustics opacity-15" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/15 rounded-full px-5 py-2 mb-6">
                <Shield size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Why Maxima
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5">
                You&apos;re in{" "}
                <span className="shimmer-text">Good Hands</span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
                Maxima Pools is a family-owned pool builder serving Columbus, Ohio
                and surrounding areas — Franklin, Delaware, Union, Licking, and
                Fairfield counties.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { icon: Star, label: "Google 5-Star Rated" },
                  { icon: Shield, label: "Licensed & Insured" },
                  { icon: CheckCircle2, label: "San Juan Authorized" },
                  { icon: Clock, label: "Same-Day Response" },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 flex flex-col items-center gap-3 hover:bg-white/[0.07] transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-accent/15 border border-accent/20 flex items-center justify-center">
                      <badge.icon size={20} className="text-accent" />
                    </div>
                    <span className="text-white/60 text-xs font-semibold uppercase tracking-wider text-center">
                      {badge.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionDivider />

      {/* ── Map / Service Area ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218473.01869409383!2d-82.96602510025286!3d40.337707411614765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838f9bae20028f9%3A0x661e61be64f26be7!2sMaxima%20Pools!5e0!3m2!1sen!2sus!4v1775790742497!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maxima Pools location"
                className="w-full"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
