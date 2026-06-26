import { Suspense } from "react";
import type { Metadata } from "next";
import { visiblePools } from "@/lib/pools";
import { PoolsCatalog } from "./pools-catalog";
import poolsIndex from "@/content/pages/pools-index.json";

export const metadata: Metadata = {
  alternates: { canonical: "/pools/" },
  title: poolsIndex.seo.title,
  description: poolsIndex.seo.description,
  openGraph: {
    url: "/pools/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: poolsIndex.seo.ogTitle,
    description: poolsIndex.seo.ogDescription,
    type: "website",
  },
};

// Server component: loads the pool list at build time (fs) and hands it to the
// client catalog, which owns the filter UI. Keeps pool data out of the client
// bundle's import graph while the static HTML still contains every card.
export default function PoolsPage() {
  return (
    <Suspense fallback={null}>
      <PoolsCatalog pools={visiblePools} />
    </Suspense>
  );
}
