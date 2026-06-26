"use client";

import Link from "next/link";
import Image from "@/components/Image";
import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import nav from "@/content/settings/navigation.json";

const header = nav.header;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<number, boolean>>({});
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
              src={header.logo}
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
            {header.menu.map((item) =>
              "submenu" in item && item.submenu && item.submenu.length ? (
                <div key={item.label} className="relative group">
                  <button
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      scrolled
                        ? "text-gray-700 hover:text-primary hover:bg-gray-50"
                        : "text-white hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      size={14}
                      className="group-hover:rotate-180 transition-transform duration-300"
                    />
                  </button>
                  <div className="absolute top-full left-0 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <div
                      className="bg-white rounded-2xl shadow-2xl shadow-black/10 border border-gray-100 py-3 overflow-hidden"
                      style={{ minWidth: ("dropdownMinWidth" in item && item.dropdownMinWidth) || "220px" }}
                    >
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="block px-5 py-3 text-sm text-gray-600 hover:bg-accent/5 hover:text-primary transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href ?? "#"}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    scrolled
                      ? "text-gray-700 hover:text-primary hover:bg-gray-50"
                      : "text-white hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* CTA + Phone + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={header.phone.href}
              className={`hidden lg:inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                scrolled
                  ? "text-gray-600 hover:text-primary"
                  : "text-white hover:text-white"
              }`}
            >
              <Phone size={14} />
              {header.phone.display}
            </a>
            <Link
              href={header.cta.href}
              className="hidden sm:inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-accent to-accent-light text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 hover:scale-105"
            >
              {header.cta.label}
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
      {mobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 z-40">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/20"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className="relative bg-white border-t border-gray-100 shadow-2xl overflow-y-auto overscroll-contain"
            style={{ maxHeight: "calc(100dvh - 5rem)", WebkitOverflowScrolling: "touch" }}
          >
            <div className="px-4 py-4 space-y-0.5">
              {header.menu.map((item, idx) =>
                "submenu" in item && item.submenu && item.submenu.length ? (
                  <div key={item.label}>
                    <button
                      onClick={() => setOpenMenus((m) => ({ ...m, [idx]: !m[idx] }))}
                      className="flex items-center justify-between w-full px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-xl font-medium text-[15px]"
                    >
                      {item.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${openMenus[idx] ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openMenus[idx] ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="pl-4 space-y-1 py-2">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2 text-sm text-gray-500 hover:text-primary rounded-lg"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href ?? "#"}
                    className="block px-4 py-2.5 text-gray-700 hover:bg-gray-50 rounded-xl font-medium text-[15px]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/pool-simulator"
                className="block px-4 py-2.5 text-accent font-semibold bg-accent/5 border border-accent/20 hover:bg-accent/10 rounded-xl text-[15px]"
                onClick={() => setMobileOpen(false)}
              >
                Pool Simulator
              </Link>
              <div className="pt-3 mt-2 border-t border-gray-100">
                <Link
                  href={header.cta.href}
                  className="block px-4 py-3 bg-gradient-to-r from-accent to-accent-light text-white rounded-xl font-semibold text-center shadow-lg text-[15px]"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a Free Estimate
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
