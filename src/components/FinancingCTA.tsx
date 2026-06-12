import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Clock,
  ShieldCheck,
  CreditCard,
} from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import {
  LyonFinancingBanner,
  LYON_APPLY_URL,
} from "./LyonFinancingBanner";

const perks = [
  { icon: Banknote, text: "Loans up to $250K" },
  { icon: Clock, text: "Terms up to 30 Years" },
  { icon: ShieldCheck, text: "No Credit Impact to Apply" },
];

export function FinancingCTA() {
  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left — copy + CTAs ── */}
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <CreditCard size={14} className="text-accent" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Pool Financing
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-5">
                Your Dream Pool,{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Within Reach
                </span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-7 max-w-lg">
                Through our partnership with{" "}
                <a
                  href="https://www.lyonfinancial.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-primary hover:text-accent transition-colors"
                >
                  Lyon Financial
                </a>{" "}
                — America&apos;s #1 pool lender since 1979 — you can spread the
                cost of your backyard paradise into comfortable monthly
                payments.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {perks.map((perk) => (
                  <span
                    key={perk.text}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-600 bg-gray-50 rounded-full px-3 py-1.5"
                  >
                    <perk.icon size={12} className="text-accent shrink-0" />
                    {perk.text}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/financing"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full shadow-lg shadow-accent/25 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 transition-all duration-300"
                >
                  Explore Financing Options
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <a
                  href={LYON_APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 bg-gray-50 border border-gray-200 rounded-full text-gray-700 font-semibold hover:border-accent/40 hover:text-primary transition-all"
                >
                  Apply Now
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* ── Right — official Lyon animated banner ── */}
          <ScrollReveal direction="right" delay={1}>
            <LyonFinancingBanner />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
