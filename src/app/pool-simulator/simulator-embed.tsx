"use client";

import { useEffect, useRef, useState } from "react";
import { Maximize2, Loader2 } from "lucide-react";

export function SimulatorEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://search-widget.canibuild.com/embed.js?cache-buster=" + Date.now();
    script.type = "module";
    script.onload = () => {
      // Give the widget time to render
      setTimeout(() => setLoading(false), 3000);
    };
    script.onerror = () => setLoading(false);
    document.body.appendChild(script);

    return () => {
      try {
        document.body.removeChild(script);
      } catch {
        // script may already be removed
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
      style={{ minHeight: "700px" }}
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
        <div className="absolute inset-0 z-10 bg-white flex flex-col items-center justify-center gap-4">
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
    </div>
  );
}
