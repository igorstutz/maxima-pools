"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

// Maxima Pools Facebook page (provided by client). The Page Plugin only renders
// for Facebook Pages — if this URL is a personal profile it must be converted
// to a Page for the embedded timeline to show.
const FB_PAGE_URL =
  "https://www.facebook.com/profile.php?id=61582788479318";

// The Facebook Page Plugin only accepts a fixed pixel width between 180 and 500.
const FB_MIN_WIDTH = 180;
const FB_MAX_WIDTH = 500;

declare global {
  interface Window {
    FB?: { XFBML: { parse: (el?: HTMLElement) => void } };
  }
}

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

function loadFbSdk() {
  if (document.getElementById("facebook-jssdk")) return;
  const script = document.createElement("script");
  script.id = "facebook-jssdk";
  script.async = true;
  script.defer = true;
  script.crossOrigin = "anonymous";
  script.src =
    "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v21.0";
  document.body.appendChild(script);
}

export function SocialFeed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);

  // Measure the container so we can hand the plugin an explicit pixel width
  // (clamped to its 180–500px range). The plugin doesn't reflow on its own, so
  // we re-measure on resize/orientation change.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const measure = () => {
      const w = Math.round(el.getBoundingClientRect().width);
      const clamped = Math.max(FB_MIN_WIDTH, Math.min(FB_MAX_WIDTH, w));
      setWidth((prev) => (prev === clamped ? prev : clamped));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Load the SDK once, then (re)parse whenever the width changes so the plugin
  // re-renders at the new size. The `key={width}` on .fb-page gives parse a
  // fresh, un-rendered node to work with.
  useEffect(() => {
    if (width == null) return;
    loadFbSdk();
    const id = window.requestAnimationFrame(() => {
      window.FB?.XFBML.parse(containerRef.current ?? undefined);
    });
    return () => window.cancelAnimationFrame(id);
  }, [width]);

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
              <div className="rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-3 sm:p-4 shadow-xl shadow-gray-200/50 w-full max-w-[500px]">
                <div ref={containerRef} className="w-full overflow-hidden rounded-2xl">
                  <div id="fb-root" />
                  {width != null && (
                    <div
                      key={width}
                      className="fb-page"
                      data-href={FB_PAGE_URL}
                      data-tabs="timeline"
                      data-width={width}
                      data-height="600"
                      data-small-header="false"
                      data-adapt-container-width="true"
                      data-hide-cover="false"
                      data-show-facepile="true"
                    >
                      {/* Fallback shown when the SDK is blocked (e.g. Firefox
                          tracking protection, ad-blockers) or still loading. */}
                      <blockquote
                        cite={FB_PAGE_URL}
                        className="fb-xfbml-parse-ignore"
                      >
                        <span className="flex flex-col items-center text-center gap-3 py-12 px-6">
                          <span className="w-14 h-14 rounded-2xl bg-[#1877F2] flex items-center justify-center text-white">
                            <FacebookIcon className="w-7 h-7" />
                          </span>
                          <span className="font-bold text-gray-900">
                            Maxima Pools on Facebook
                          </span>
                          <span className="text-sm text-gray-500 max-w-xs">
                            See our latest posts, photos, and project updates on
                            our Facebook page.
                          </span>
                          <a
                            href={FB_PAGE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 mt-1 px-5 py-2.5 bg-[#1877F2] text-white text-sm font-semibold rounded-full hover:opacity-90 transition-opacity"
                          >
                            Open Facebook
                            <ArrowUpRight size={15} />
                          </a>
                        </span>
                      </blockquote>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
