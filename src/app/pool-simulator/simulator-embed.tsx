"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, Loader2 } from "lucide-react";

// Embed setup follows Canibuild support's official integration spec:
//   - Search bar: programmatic createElement + cache-buster, type="module"
//   - LC widget:  widget.canibuild.com/embed.js (NOT leadconverter.*)
//   - Neither <div> carries data-design-name
//   - Domain must be whitelisted in Canibuild dashboard → Widget Settings,
//     otherwise the search-bar config endpoint returns 401.
const CANIBUILD_TOKEN = "69b8ee8e-1707-4e34-bb03-7defa06ecef6";
const SEARCH_SCRIPT_SRC = "https://search-widget.canibuild.com/embed.js";
const LC_SCRIPT_SRC = `https://widget.canibuild.com/embed.js?id=lc-widget&token=${CANIBUILD_TOKEN}`;

export function SimulatorEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const searchScript = document.createElement("script");
    searchScript.src = `${SEARCH_SCRIPT_SRC}?cache-buster=${Date.now()}`;
    searchScript.type = "module";
    searchScript.async = true;
    document.body.appendChild(searchScript);

    const lcScript = document.createElement("script");
    lcScript.src = LC_SCRIPT_SRC;
    lcScript.defer = true;
    lcScript.onload = () => {
      setTimeout(() => setLoading(false), 2500);
    };
    lcScript.onerror = () => setLoading(false);
    document.body.appendChild(lcScript);

    return () => {
      try {
        document.body.removeChild(searchScript);
      } catch {
        // already removed
      }
      try {
        document.body.removeChild(lcScript);
      } catch {
        // already removed
      }
    };
  }, []);

  const toggleFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;

    if (!document.fullscreenElement) {
      el.requestFullscreen().then(() => setIsFullscreen(true));
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false));
    }
  };

  useEffect(() => {
    function onFsChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onFsChange);
    return () => document.removeEventListener("fullscreenchange", onFsChange);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-2xl overflow-hidden"
      style={{ minHeight: "880px" }}
    >
      {/* Fullscreen button */}
      <button
        onClick={toggleFullscreen}
        className="absolute top-4 right-4 z-20 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-xl px-4 py-2.5 flex items-center gap-2 text-sm font-semibold text-gray-700 hover:bg-white hover:shadow-lg transition-all cursor-pointer shadow-md"
      >
        <Maximize2 size={16} />
        {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
      </button>

      {/* Loading state */}
      {loading && (
        <div className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center gap-4 pointer-events-none">
          <div className="relative">
            <div className="w-16 h-16 rounded-full border-4 border-gray-100" />
            <Loader2
              size={64}
              className="absolute inset-0 text-accent animate-spin"
              strokeWidth={1.5}
            />
          </div>
          <div className="text-center">
            <p className="text-gray-900 font-semibold mb-1">
              Loading Pool Simulator
            </p>
            <p className="text-gray-400 text-sm">
              This may take a few seconds...
            </p>
          </div>
        </div>
      )}

      {/* Address search widget */}
      <div
        id="canibuild-widget-search-root"
        data-token={CANIBUILD_TOKEN}
        className="px-4 sm:px-6 pt-6 pb-2"
      />

      {/* Main interactive simulator (canvas / map / drag-and-drop) */}
      <div id="lc-widget" style={{ height: 800 }} />
    </div>
  );
}
