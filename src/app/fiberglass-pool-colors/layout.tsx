import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiberglass Pool Colors — Gelcoat & Iridium Finishes",
  description:
    "Explore the full range of San Juan fiberglass pool colors. Classic gelcoat finishes and premium Iridium options — UV stabilized, chemical resistant, and stunning.",
  openGraph: {
    title: "Fiberglass Pool Colors | Maxima Pools",
    description:
      "Browse all fiberglass pool color finishes. Gelcoat and Iridium options from San Juan Pools.",
  },
  alternates: {
    canonical: "https://maximapools.com/fiberglass-pool-colors",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Fiberglass Pool Color Options",
  description:
    "Complete range of San Juan fiberglass pool colors including classic gelcoat and premium Iridium finishes.",
  provider: { "@type": "Organization", name: "Maxima Pools" },
};

export default function ColorsLayout({ children }: { children: React.ReactNode }) {
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
