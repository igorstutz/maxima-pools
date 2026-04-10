import Link from "next/link";
import Image from "@/components/Image";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const poolsLinks = [
  { label: "Pool Collection", href: "/pools" },
  { label: "Pool Colors", href: "/fiberglass-pool-colors" },
  { label: "Auto Cover Pool", href: "/auto-cover-pool" },
  { label: "Frozen Pools", href: "/frozen-pools" },
  { label: "Pool Closing", href: "/pool-closing" },
  { label: "Pool Accessories", href: "/pool-accessories-and-extras" },
  { label: "Pool Simulator", href: "/pool-simulator" },
];

const learnLinks = [
  { label: "Why Maxima", href: "/why-maxima" },
  { label: "How It's Made", href: "/how-san-juan-pools-are-made" },
  { label: "Pool Quality", href: "/fiberglass-pool-quality" },
  { label: "Why Fiberglass", href: "/why-fiberglass-pools-make-sense" },
  { label: "San Juan VS Competitors", href: "/san-juan-fiberglass-pools" },
  { label: "Pool for Your Pet", href: "/the-perfect-pool-for-your-pet" },
];

const moreLinks = [
  { label: "Outdoor Living", href: "/outdoor-living" },
  { label: "Gallery", href: "/fiberglass-pool-gallery" },
  { label: "Free Estimate", href: "/contact" },
];

const serviceAreas = [
  "Columbus",
  "Delaware",
  "Franklin County",
  "Delaware County",
  "Union County",
  "Licking County",
  "Fairfield County",
];

export function Footer() {
  return (
    <footer className="relative bg-[#021526] text-white overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Decorative orbs */}
      <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      {/* Main grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-8 mb-14">
          {/* Brand + Contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-4">
            <div className="mb-5">
              <Image
                src="/images/logo/maxima-logo.png"
                alt="Maxima Pools"
                width={160}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-sm">
              Family-owned pool builder and hardscaper serving Columbus, Ohio.
              Authorized San Juan Pools dealer.
            </p>

            {/* Contact cards */}
            <div className="space-y-2.5 mb-5">
              <a
                href="tel:+16143845081"
                className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-accent/10 border border-white/[0.05] hover:border-accent/20 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-accent" />
                </div>
                <div>
                  <p className="text-white/80 font-semibold text-sm">(614) 384-5081</p>
                  <p className="text-white/25 text-xs">Mon–Sat, 8am–6pm</p>
                </div>
              </a>
              <a
                href="mailto:info@maximapools.com"
                className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-accent/10 border border-white/[0.05] hover:border-accent/20 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail size={15} className="text-accent" />
                </div>
                <p className="text-white/80 font-medium text-sm">info@maximapools.com</p>
              </a>
              <a
                href="https://maps.app.goo.gl/JsSoDhkB3zr9fhzu5"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-accent/10 border border-white/[0.05] hover:border-accent/20 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-accent" />
                </div>
                <div>
                  <p className="text-white/80 font-medium text-sm">4059 State Route 37 East</p>
                  <p className="text-white/25 text-xs">Suite A, Delaware, OH 43015</p>
                </div>
              </a>
            </div>

            {/* Social */}
            <div className="flex gap-2.5">
              <a
                href="https://www.instagram.com/maxima.pools/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.04] hover:bg-accent/20 border border-white/[0.06] hover:border-accent/25 flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <svg className="w-4.5 h-4.5 text-white/40 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61582788479318"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.04] hover:bg-accent/20 border border-white/[0.06] hover:border-accent/25 flex items-center justify-center transition-all group"
                aria-label="Facebook"
              >
                <svg className="w-4.5 h-4.5 text-white/40 group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Pools & Services */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/25 mb-5">
              Pools & Services
            </h3>
            <ul className="space-y-2.5">
              {poolsLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-white/45 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/25 mb-5">
              Learn
            </h3>
            <ul className="space-y-2.5">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-white/45 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}

              {/* More links divider */}
              <li className="pt-2 border-t border-white/[0.04]" />
              {moreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1.5 text-white/45 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Map + Service Areas */}
          <div className="col-span-2 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/25 mb-5">
              Service Areas
            </h3>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {serviceAreas.map((area) => (
                <span
                  key={area}
                  className="text-xs text-white/35 bg-white/[0.03] border border-white/[0.05] rounded-full px-3 py-1 font-medium"
                >
                  {area}
                </span>
              ))}
            </div>

            {/* Mini map */}
            <a
              href="https://maps.app.goo.gl/JsSoDhkB3zr9fhzu5"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-xl overflow-hidden border border-white/[0.06] hover:border-accent/25 transition-colors"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.3!2d-82.96602510025286!3d40.337707411614765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8838f9bae20028f9%3A0x661e61be64f26be7!2sMaxima%20Pools!5e0!3m2!1sen!2sus!4v1775790742497!5m2!1sen!2sus"
                width="100%"
                className="h-[250px] sm:h-[150px]"
                style={{ border: 0, pointerEvents: "none" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maxima Pools location"
              />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs">
            &copy; {new Date().getFullYear()} Maxima Concrete LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white/20 text-xs">
            <span>Authorized San Juan Pools Dealer</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">Columbus, OH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
