"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const CANIBUILD_TOKEN = "69b8ee8e-1707-4e34-bb03-7defa06ecef6";
// Reference name of the design preset on the Canibuild Pro account. The LC
// widget uses it to load the right pool collection/copy for this customer.
const CANIBUILD_DESIGN_NAME = "SJP - Maxima Concrete";
const LC_SCRIPT_SRC = `https://leadconverter.canibuild.com/embed.js?id=lc-widget&token=${CANIBUILD_TOKEN}`;

// The standalone search-widget (search-widget.canibuild.com/embed.js) is
// intentionally NOT loaded here — its searchbar/config endpoint is currently
// returning 401 on this account. The LC widget below has its own internal
// address search and map, so the simulator is fully functional without it.

export function SimulatorEmbed() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
        document.body.removeChild(lcScript);
      } catch {
        // already removed
      }
    };
  }, []);

  return (
    <div
      className="relative bg-white rounded-2xl sm:rounded-3xl border border-gray-200 shadow-2xl overflow-hidden"
      style={{ minHeight: "880px" }}
    >
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

      {/* Main interactive simulator (canvas / map / drag-and-drop) */}
      <div
        id="lc-widget"
        data-design-name={CANIBUILD_DESIGN_NAME}
        style={{ height: 800 }}
      />
    </div>
  );
}
