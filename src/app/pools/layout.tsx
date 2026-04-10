import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pool Collection — 85+ San Juan Fiberglass Pools & Spas",
  description:
    "Explore 85+ San Juan fiberglass pool and spa models. Filter by type, shape, and size to find the perfect fit for your backyard. Maxima Pools — Columbus, OH.",
  openGraph: {
    title: "Pool Collection | Maxima Pools",
    description:
      "Browse 85+ San Juan fiberglass pools and spas. Filter by type, shape, or size.",
  },
  alternates: {
    canonical: "https://maximapools.com/pools",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "San Juan Fiberglass Pool Collection",
  description:
    "Browse 85+ San Juan fiberglass pool and spa models. Filter by type, shape, and size.",
  provider: { "@type": "Organization", name: "Maxima Pools" },
};

export default function PoolsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
