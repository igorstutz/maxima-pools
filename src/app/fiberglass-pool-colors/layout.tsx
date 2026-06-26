import type { Metadata } from "next";
import content from "@/content/pages/fiberglass-pool-colors.json";

export const metadata: Metadata = {
  title: content.seo.title,
  description: content.seo.description,
  openGraph: {
    url: "/fiberglass-pool-colors/",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Maxima Pools - Premium Fiberglass Pools in Columbus, OH" }],
    title: content.seo.ogTitle,
    description: content.seo.ogDescription,
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
