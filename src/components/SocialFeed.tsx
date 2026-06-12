"use client";

import { useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

// Facebook "f" logo — lucide-react dropped its brand icons, so we inline it.
function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

// Maxima Pools Facebook page (provided by client). The Page Plugin only renders
// for Facebook Pages — if this URL is a personal profile it must be converted
// to a Page for the embedded timeline to show.
const FB_PAGE_URL =
  "https://www.facebook.com/profile.php?id=61582788479318";

declare global {
  interface Window {
    FB?: { XFBML: { parse: (el?: HTMLElement) => void } };
  }
}

export function SocialFeed() {
  useEffect(() => {
    // Load the Facebook SDK once. With #xfbml=1 it auto-parses .fb-* widgets on
    // load; on client-side navigation the SDK is already present, so re-parse.
    const existing = document.getElementById("facebook-jssdk");
    if (!existing) {
      const script = document.createElement("script");
      script.id = "facebook-jssdk";
      script.async = true;
      script.defer = true;
      script.crossOrigin = "anonymous";
      script.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0";
      document.body.appendChild(script);
    } else if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);

  return (
    <section className="relative py-20 sm:py-28 bg-white overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-3xl -translate-y-1/2 -translate-x-1/3" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-3xl translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* ── Left — copy + CTA ── */}
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-5 py-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Stay Connected
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-5">
                Follow Us on{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Facebook
                </span>
              </h2>
              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg">
                See our latest pool installations, backyard transformations, and
                project updates. Follow Maxima Pools to keep up with everything
                we&apos;re building across Central Ohio.
              </p>
              <a
                href={FB_PAGE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 bg-[#1877F2] text-white font-semibold rounded-full shadow-lg shadow-[#1877F2]/25 hover:shadow-xl hover:shadow-[#1877F2]/30 hover:scale-105 transition-all duration-300"
                aria-label="Follow Maxima Pools on Facebook (opens in new tab)"
              >
                <FacebookIcon />
                Follow on Facebook
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </a>
            </div>
          </ScrollReveal>

          {/* ── Right — live Facebook feed ── */}
          <ScrollReveal direction="right" delay={1}>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 shadow-xl shadow-gray-200/50 w-full max-w-[500px] overflow-hidden">
                <div id="fb-root" />
                <div
                  className="fb-page"
                  data-href={FB_PAGE_URL}
                  data-tabs="timeline"
                  data-width="500"
                  data-height="600"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote
                    cite={FB_PAGE_URL}
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href={FB_PAGE_URL}>Maxima Pools on Facebook</a>
                  </blockquote>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
