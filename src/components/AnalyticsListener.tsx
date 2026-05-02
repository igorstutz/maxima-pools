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
    }

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
