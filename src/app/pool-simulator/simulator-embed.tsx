"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

const CANIBUILD_TOKEN = "69b8ee8e-1707-4e34-bb03-7defa06ecef6";

// We render the LC iframe directly instead of loading
// leadconverter.canibuild.com/embed.js. The embed.js script declares many
// top-level `const`s (iframe, observer, targetId, mountIframe, etc.) in the
// global lexical environment — on SPA navigations those declarations persist
// after unmount, so re-executing the script throws "Identifier has already been
// declared" and the widget silently fails to mount. A direct iframe avoids the
// whole script lifecycle and works identically across hard reloads and Next.js
// client-side navigations.
const IFRAME_SRC = `https://leadconverter.canibuild.com?token=${CANIBUILD_TOKEN}&username=&useremail=&userphone=`;

export function SimulatorEmbed() {
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const setFullscreenStyle = () => {
      iframe.style.cssText = `position:fixed !important;
                              top:0 !important;
                              left:0 !important;
                              bottom:0 !important;
                              right:0 !important;
                              width:100% !important;
                              height:100% !important;
                              border:none !important;
                              margin:0 !important;
                              padding:0 !important;
                              overflow:hidden !important;
                              z-index:999999 !important;
                              transform:none !important;`;
    };
    const unsetFullscreenStyle = () => {
      iframe.style.cssText = "border:0;width:100%;height:100%;";
    };

    type FsIframe = HTMLIFrameElement & {
      webkitRequestFullscreen?: () => Promise<void>;
      msRequestFullscreen?: () => Promise<void>;
    };
    type FsDocument = Document & {
      webkitExitFullscreen?: () => void;
      msExitFullscreen?: () => void;
    };

    const goFullScreen = () => {
      const fs = iframe as FsIframe;
      const req =
        fs.requestFullscreen?.bind(fs) ??
        fs.webkitRequestFullscreen?.bind(fs) ??
        fs.msRequestFullscreen?.bind(fs);
      const promise = req ? req() : Promise.reject(new Error("Fullscreen unavailable"));
      promise.catch(() => setFullscreenStyle());
    };

    const exitFullscreen = () => {
      const doc = document as FsDocument;
      if (doc.exitFullscreen) doc.exitFullscreen();
      else if (doc.webkitExitFullscreen) doc.webkitExitFullscreen();
      else if (doc.msExitFullscreen) doc.msExitFullscreen();
      unsetFullscreenStyle();
    };

    const onMessage = (event: MessageEvent) => {
      if (event.data === "GO_FULLSCREEN") goFullScreen();
      else if (event.data === "EXIT_FULLSCREEN") exitFullscreen();
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <div
      className="relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-2xl overflow-hidden"
      style={{ minHeight: "880px" }}
    >
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

      <iframe
        ref={iframeRef}
        src={IFRAME_SRC}
        title="Pool Simulator"
        allow="geolocation"
        allowFullScreen
        onLoad={() => setTimeout(() => setLoading(false), 2500)}
        style={{ border: 0, width: "100%", height: 800 }}
      />
    </div>
  );
}
