import { Fragment } from "react";
import Link from "next/link";
import Image from "@/components/Image";
import { Phone, Mail, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { locations, slugify } from "@/lib/locations";
import nav from "@/content/settings/navigation.json";

const footer = nav.footer;

export function Footer() {
  return (
    <footer className="relative bg-primary text-white overflow-hidden">
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
                src={footer.logo}
                alt="Maxima Pools"
                width={160}
                height={50}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-white text-sm leading-relaxed mb-6 max-w-sm">
              {footer.tagline}
            </p>

            {/* Contact cards */}
            <div className="space-y-2.5 mb-5">
              <a
                href={footer.contact.phone.href}
                className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-accent/10 border border-white/[0.05] hover:border-accent/20 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-accent" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{footer.contact.phone.display}</p>
                  <p className="text-white text-xs">{footer.contact.phone.note}</p>
                </div>
              </a>
              <a
                href={`mailto:${footer.contact.email}`}
                className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-accent/10 border border-white/[0.05] hover:border-accent/20 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail size={15} className="text-accent" />
                </div>
                <p className="text-white font-medium text-sm">{footer.contact.email}</p>
              </a>
              <a
                href={footer.contact.address.mapHref}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] hover:bg-accent/10 border border-white/[0.05] hover:border-accent/20 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-accent" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{footer.contact.address.line1}</p>
                  <p className="text-white text-xs">{footer.contact.address.line2}</p>
                </div>
              </a>
            </div>

            {/* Pool Simulator CTA */}
            <Link
              href={footer.simulatorCta.href}
              className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 mb-5 bg-gradient-to-r from-accent to-accent-light text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 hover:scale-105 whitespace-nowrap"
            >
              <Sparkles size={16} />
              {footer.simulatorCta.label}
            </Link>

            {/* Social */}
            <div className="flex gap-2.5">
              <a
                href={footer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.04] hover:bg-accent/20 border border-white/[0.06] hover:border-accent/25 flex items-center justify-center transition-all group"
                aria-label="Instagram"
              >
                <svg className="w-4.5 h-4.5 text-white group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={footer.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/[0.04] hover:bg-accent/20 border border-white/[0.06] hover:border-accent/25 flex items-center justify-center transition-all group"
                aria-label="Facebook"
              >
                <svg className="w-4.5 h-4.5 text-white group-hover:text-accent transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((col, i) => (
            <div key={col.heading} className={i === 0 ? "lg:col-span-2 lg:col-start-6" : "lg:col-span-2"}>
              <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-1.5 text-white hover:text-accent transition-colors text-sm"
                    >
                      {link.label}
                      <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}

                {"extraLinks" in col && col.extraLinks && col.extraLinks.length ? (
                  <Fragment>
                    {/* More links divider */}
                    <li className="pt-2 border-t border-white/[0.04]" />
                    {col.extraLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex items-center gap-1.5 text-white hover:text-accent transition-colors text-sm"
                        >
                          {link.label}
                          <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </Fragment>
                ) : null}
              </ul>
            </div>
          ))}

          {/* Service Areas */}
          <div className="col-span-2 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-5">
              {footer.serviceAreasHeading}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {locations.map((loc) => (
                <Link
                  key={loc.name}
                  href={`/locations/${slugify(loc.name)}`}
                  className="text-xs text-white bg-white/[0.03] border border-white/[0.05] rounded-full px-3 py-1 font-medium hover:text-accent hover:border-accent/25 transition-colors"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.05] pt-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white text-xs">
            &copy; {new Date().getFullYear()} {footer.copyrightName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-white text-xs">
            {footer.bottomBarRight.map((text, i) => (
              <Fragment key={text}>
                {i > 0 && <span className="hidden sm:inline">|</span>}
                <span className={i === 0 ? "" : "hidden sm:inline"}>{text}</span>
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
