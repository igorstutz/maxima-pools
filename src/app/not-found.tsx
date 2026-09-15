import Link from "next/link";
import type { Metadata } from "next";
import { Home, Waves, Phone, MapPin, ArrowRight, Search } from "lucide-react";

/* Until 2026-09-15 the .htaccess 301'd every unknown path to the home page,
   so this file never rendered. Unknown paths now return a real 404, which
   means this page is what a visitor on a dead legacy link actually sees —
   it has to help them find the page they wanted. */

export const metadata: Metadata = {
  title: "Page Not Found | Maxima Pools",
  description:
    "That page doesn't exist on maximapools.com. Browse our fiberglass pool models, service areas, or get in touch for a free estimate.",
  robots: { index: false, follow: true },
};

const shortcuts = [
  {
    icon: Waves,
    label: "Pool Models",
    description: "Browse 100+ San Juan fiberglass pools",
    href: "/pools",
  },
  {
    icon: Search,
    label: "Pool Simulator",
    description: "See a pool in a backyard like yours",
    href: "/pool-simulator",
  },
  {
    icon: MapPin,
    label: "Areas We Serve",
    description: "33 cities across Central Ohio",
    href: "/areas-we-serve",
  },
  {
    icon: Phone,
    label: "Free Estimate",
    description: "No obligation, no deposit",
    href: "/contact",
  },
];

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c4a6e] via-[#0369a1] to-[#075985]" />
      <div className="absolute inset-0 water-caustics opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-[15%] w-80 h-80 rounded-full bg-accent/8 blur-3xl" />
      <div className="absolute bottom-0 left-[10%] w-96 h-96 rounded-full bg-primary-light/8 blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-7xl sm:text-8xl font-bold shimmer-text mb-4">404</p>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5">
          That page went off the deep end
        </h1>

        <p className="text-lg text-white leading-relaxed max-w-xl mx-auto mb-10">
          The link you followed doesn&apos;t point to a page on maximapools.com
          any more. Here&apos;s where most people are headed:
        </p>

        <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
          {shortcuts.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-start gap-4 rounded-2xl bg-white/[0.07] backdrop-blur-sm border border-white/[0.12] p-5 hover:bg-white/[0.12] hover:border-accent/30 transition-all"
            >
              <span className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center shrink-0">
                <item.icon size={18} className="text-accent" />
              </span>
              <span className="min-w-0">
                <span className="block text-white font-semibold text-sm mb-0.5">
                  {item.label}
                </span>
                <span className="block text-white/70 text-sm leading-snug">
                  {item.description}
                </span>
              </span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 *:whitespace-nowrap">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:scale-105 text-sm sm:text-base"
          >
            <Home size={18} />
            Back to Home
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
      </div>
    </section>
  );
}
