"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { analytics } from "@/lib/analytics";

export function AnalyticsListener() {
  const pathname = usePathname();

  useEffect(() => {
    if (!pathname) return;
    if (pathname === "/pool-simulator") {
      analytics.simulatorOpen();
      return;
    }
    const poolMatch = pathname.match(/^\/pools\/([^/]+)\/?$/);
    if (poolMatch) {
      analytics.viewPool({ pool_slug: poolMatch[1] });
    }
  }, [pathname]);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (!href.startsWith("tel:")) return;

      let location = "body";
      if (anchor.closest("header")) location = "header";
      else if (anchor.closest("footer")) location = "footer";
      else if (anchor.closest("form")) location = "contact_form";

      analytics.phoneClick(location);

      // Also record the click in our own backend so the /admin panel can
      // count calls by date and location. Fire-and-forget; never blocks the
      // tel: navigation. (No-op locally where the PHP endpoint doesn't exist.)
      try {
        const payload = JSON.stringify({
          location,
          page: window.location.pathname,
        });
        if (navigator.sendBeacon) {
          navigator.sendBeacon("/api/track-call.php", payload);
        } else {
          fetch("/api/track-call.php", {
            method: "POST",
            body: payload,
            keepalive: true,
          }).catch(() => {});
        }
      } catch {
        /* ignore */
      }
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
