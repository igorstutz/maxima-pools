import Link from "next/link";
import type { Metadata } from "next";
import {
  Clock,
  Moon,
  Phone,
  PhoneCall,
  Ruler,
  Lightbulb,
  DollarSign,
  LayoutGrid,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionDivider } from "@/components/SectionDivider";
import content from "@/content/pages/thank-you.json";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  // Nobody should reach this from a search result: out of context it promises a
  // call that was never requested, and it would compete with /contact/ for the
  // very searches that should land on the form.
  robots: { index: false, follow: true },
  openGraph: {
    url: "/thank-you/",
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

// Lucide icons referenced by name from the editable content file.
const icons = { Clock, Moon, LayoutGrid, Ruler, Lightbulb, DollarSign } as const;
type IconName = keyof typeof icons;

export default function ThankYouPage() {
  return (
    <>
      {/* ── Hero + the numbers ── */}
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
            <span className="text-white font-medium">Thank You</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left — the message */}
            <div className="hero-animate hero-animate-2">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-5 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.hero.badge}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
                <span className="text-white">{content.hero.headingLead}</span>{" "}
                <span className="shimmer-text">{content.hero.headingHighlight}</span>
              </h1>

              <p className="text-lg sm:text-xl text-white leading-relaxed max-w-lg">
                {content.hero.subtitle}
              </p>
            </div>

            {/* Right — the numbers. First thing on the page on a phone after the
                heading, because recognising the callback is the whole point. */}
            <div className="hero-animate hero-animate-3">
              <div className="relative">
                <div className="absolute -inset-3 bg-accent/10 rounded-[2rem] blur-2xl" />
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-7 sm:p-9 shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center shrink-0">
                      <Phone size={18} className="text-accent" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900">
                      {content.numbers.title}
                    </h2>
                  </div>

                  {/* On its own line: next to the heading it wrapped into a
                      cramped two-line block that read as a caption. */}
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">
                    {content.numbers.intro}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {content.numbers.list.map((n) => (
                      <li key={n.href}>
                        <a
                          href={n.href}
                          className="flex items-center justify-between gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3 transition hover:border-accent/40 hover:bg-accent/[0.04]"
                        >
                          <span className="text-xl sm:text-2xl font-bold tracking-wide text-primary">
                            {n.display}
                          </span>
                          <PhoneCall size={16} className="text-accent shrink-0" />
                        </a>
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {content.numbers.proactiveNote}
                  </p>

                  <a
                    href={content.numbers.proactiveHref}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-xl shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all duration-300 text-sm"
                  >
                    <PhoneCall size={17} />
                    {content.numbers.proactiveCta}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── What happens next + when we call ── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12 sm:mb-14">
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  {content.next.title}
                </span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">{content.next.body}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              {content.when.title}
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {content.when.items.map((item, i) => {
              const Icon = icons[item.icon as IconName] ?? Clock;
              return (
                <ScrollReveal key={item.title} delay={((i + 1) as 1 | 2)}>
                  <div className="rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 p-8 sm:p-9 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
                        <Icon size={20} className="text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">{item.body}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* ── While you wait ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mb-12 sm:mb-14">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
                {content.tools.title}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">{content.tools.subtitle}</p>
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {content.tools.items.map((item, i) => {
              const Icon = icons[item.icon as IconName] ?? LayoutGrid;
              return (
                <ScrollReveal key={item.href} delay={((i % 2) + 1) as 1 | 2}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-3xl bg-white border border-gray-100 p-8 sm:p-9 shadow-sm transition-all duration-500 hover:border-accent/40 hover:shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/15 to-primary/10 border border-accent/15 flex items-center justify-center mb-5">
                      <Icon size={20} className="text-accent" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{item.body}</p>
                    <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      {item.cta}
                      <ArrowRight
                        size={15}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {content.closing.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">{content.closing.body}</p>
            <Link
              href={content.closing.ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 font-semibold hover:border-accent/40 hover:text-primary transition-all"
            >
              {content.closing.ctaLabel}
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
