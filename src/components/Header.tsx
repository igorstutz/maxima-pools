"use client";

import Link from "next/link";
import Image from "@/components/Image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

const whyMaximaSubmenu = [
  { label: "About Us", href: "/why-maxima" },
  { label: "Our Process", href: "/our-process" },
  { label: "Financing", href: "/financing" },
  { label: "Areas We Serve", href: "/areas-we-serve" },
  { label: "Contact Us", href: "/contact" },
];

const poolsSubmenu = [
  { label: "Pools", href: "/pools" },
  { label: "Spas", href: "/pools" },
  { label: "Tanning Ledges", href: "/pools" },
  { label: "Frozen Pools", href: "/frozen-pools" },
  { label: "Auto Cover Pool", href: "/auto-cover-pool" },
  { label: "Pool Closing", href: "/pool-closing" },
  { label: "Pool Accessories & Extras", href: "/pool-accessories-and-extras" },
];

const poolInfoSubmenu = [
  { label: "How It's Made", href: "/how-san-juan-pools-are-made" },
  { label: "Fiberglass Pool Quality", href: "/fiberglass-pool-quality" },
  { label: "Why Fiberglass Pools", href: "/why-fiberglass-pools-make-sense" },
  { label: "San Juan VS Competitors", href: "/san-juan-fiberglass-pools" },
  { label: "Fiberglass Pool Colors", href: "/fiberglass-pool-colors" },
  { label: "The Perfect Pool for Your Pet", href: "/the-perfect-pool-for-your-pet" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [whyOpen, setWhyOpen] = useState(false);
  const [poolsOpen, setPoolsOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo/maxima-logo.png"
              alt="Maxima Pools"
              width={160}
              height={50}
              className={`h-10 sm:h-12 w-auto transition-all duration-500 ${
                scrolled ? "" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-700 hover:text-primary hover:bg-gray-50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Home
            </Link>

            {/* Why Maxima dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-primary hover:bg-gray-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                Why Maxima
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </button>
              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 py-3 min-w-[220px] overflow-hidden">
                  {whyMaximaSubmenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-3 text-sm text-gray-600 hover:bg-accent/5 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Pools & Spas dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-primary hover:bg-gray-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                Pools & Spas
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </button>
              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 py-3 min-w-[240px] overflow-hidden">
                  {poolsSubmenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-3 text-sm text-gray-600 hover:bg-accent/5 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Pool Info dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-primary hover:bg-gray-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                Pool Info
                <ChevronDown
                  size={14}
                  className="group-hover:rotate-180 transition-transform duration-300"
                />
              </button>
              <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 py-3 min-w-[260px] overflow-hidden">
                  {poolInfoSubmenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-5 py-3 text-sm text-gray-600 hover:bg-accent/5 hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {[
              { label: "Outdoor Living", href: "/outdoor-living" },
              { label: "Gallery", href: "/fiberglass-pool-gallery" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  scrolled
                    ? "text-gray-700 hover:text-primary hover:bg-gray-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/pool-simulator"
              className={`px-4 py-2 text-sm font-semibold rounded-lg border transition-all duration-300 ${
                scrolled
                  ? "text-accent border-accent/30 bg-accent/5 hover:bg-accent/10"
                  : "text-accent-light border-accent/40 bg-accent/10 hover:bg-accent/20"
              }`}
            >
              Pool Simulator
            </Link>
          </div>

          {/* CTA + Phone + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+16143845081"
              className={`hidden lg:inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-600 hover:text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              <Phone size={14} />
              (614) 384-5081
            </a>
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-105"
            >
              Free Estimate
            </Link>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                scrolled
                  ? "text-gray-700 hover:bg-gray-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden transition-all duration-500 ${
          mobileOpen ? "max-h-[calc(100dvh-5rem)] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="bg-white border-t border-gray-100 shadow-2xl max-h-[calc(100dvh-5rem)] overflow-y-auto overscroll-contain">
          <div className="px-4 py-4 space-y-0.5">
            <Link
              href="/"
              className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-xl font-medium text-[15px]"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <div>
              <button
                onClick={() => setWhyOpen(!whyOpen)}
                className="flex items-center justify-between w-full px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-xl font-medium text-[15px]"
              >
                Why Maxima
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${whyOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  whyOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pl-4 space-y-1 py-2">
                  {whyMaximaSubmenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-500 hover:text-primary rounded-lg"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setPoolsOpen(!poolsOpen)}
                className="flex items-center justify-between w-full px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-xl font-medium text-[15px]"
              >
                Pools & Spas
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${poolsOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  poolsOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pl-4 space-y-1 py-2">
                  {poolsSubmenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-500 hover:text-primary rounded-lg"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => setInfoOpen(!infoOpen)}
                className="flex items-center justify-between w-full px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-xl font-medium text-[15px]"
              >
                Pool Info
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${infoOpen ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  infoOpen ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="pl-4 space-y-1 py-2">
                  {poolInfoSubmenu.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-500 hover:text-primary rounded-lg"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/outdoor-living"
              className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-xl font-medium text-[15px]"
              onClick={() => setMobileOpen(false)}
            >
              Outdoor Living
            </Link>
            <Link
              href="/fiberglass-pool-gallery"
              className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-xl font-medium text-[15px]"
              onClick={() => setMobileOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/pool-simulator"
              className="block px-4 py-2.5 text-accent font-semibold bg-accent/5 border border-accent/20 hover:bg-accent/10 rounded-xl text-[15px]"
              onClick={() => setMobileOpen(false)}
            >
              Pool Simulator
            </Link>
            <div className="pt-3 mt-2 border-t border-gray-100">
              <Link
                href="/contact"
                className="block px-4 py-3 bg-gradient-to-r from-accent to-accent-light text-white rounded-xl font-semibold text-center shadow-lg text-[15px]"
                onClick={() => setMobileOpen(false)}
              >
                Get a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
