import { Hero } from "@/components/Hero";
import { WhyMaxima } from "@/components/WhyMaxima";
import { FeaturedPools } from "@/components/FeaturedPools";
import { Process } from "@/components/Process";
import { PoolShapes } from "@/components/PoolShapes";
import { OutdoorLiving } from "@/components/OutdoorLiving";
import { PoolSizes } from "@/components/PoolSizes";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Maxima Pools",
            description:
              "Premium fiberglass pool installation and outdoor living services in Columbus, OH. Authorized San Juan Pools dealer.",
            telephone: "+1-614-384-5081",
            email: "info@maximapools.com",
            url: "https://maximapools.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "4059 State Route 37 East, Suite A",
              addressLocality: "Delaware",
              addressRegion: "OH",
              postalCode: "43015",
              addressCountry: "US",
            },
            areaServed: [
              "Columbus, OH",
              "Delaware, OH",
              "Franklin County",
              "Delaware County",
              "Union County",
              "Licking County",
              "Fairfield County",
            ],
            priceRange: "$$$$",
          }),
        }}
      />
      <Hero />
      <SectionDivider />
      <WhyMaxima />
      <SectionDivider />
      <FeaturedPools />
      <SectionDivider />
      <Process />
      <SectionDivider />
      <PoolShapes />
      <SectionDivider />
      <OutdoorLiving />
      <SectionDivider />
      <PoolSizes />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <CTA />
    </>
  );
}
