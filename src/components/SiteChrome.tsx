"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

/**
 * Decides who gets the site header and footer.
 *
 * They belong to the public site. The /admin panel is a work tool: the
 * transparent header (white text, made for dark heroes) floated over the
 * panel's title, and the footer full of estimate calls-to-action has no job
 * there.
 *
 * Header and footer are still rendered by the layout and arrive here as
 * props — this component only chooses whether they go on the page.
 */
export function SiteChrome({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const internal = (pathname || "").startsWith("/admin");

  return (
    <>
      {!internal && header}
      {children}
      {!internal && footer}
    </>
  );
}
