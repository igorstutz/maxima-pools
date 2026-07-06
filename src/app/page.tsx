import { Hero } from "@/components/Hero";
import { WhyMaxima } from "@/components/WhyMaxima";
import { FeaturedPools } from "@/components/FeaturedPools";
import { Process } from "@/components/Process";
import { PoolShapes } from "@/components/PoolShapes";
import { OutdoorLiving } from "@/components/OutdoorLiving";
import { PoolSizes } from "@/components/PoolSizes";
import { FinancingCTA } from "@/components/FinancingCTA";
import { Testimonials } from "@/components/Testimonials";
import { SocialFeed } from "@/components/SocialFeed";
import { CTA } from "@/components/CTA";
import { LocationsWeServe } from "@/components/LocationsWeServe";
import { SectionDivider } from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LocalBusiness",
                "@id": "https://maximapools.com/#localbusiness",
                name: "Maxima Pools",
                description:
                  "Premium fiberglass pool installation and outdoor living services in Columbus, OH. Authorized San Juan Pools dealer.",
                telephone: "+1-614-384-5081",
                email: "info@maximapools.com",
                url: "https://maximapools.com",
                image: "https://maximapools.com/og-image.jpg",
                logo: "https://maximapools.com/icon-512.png",
                parentOrganization: {
                  "@id": "https://maximapools.com/#organization",
                },
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
                openingHoursSpecification: {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "08:00",
                  closes: "17:00",
                },
                sameAs: [
                  "https://www.facebook.com/profile.php?id=61582788479318",
                  "https://www.instagram.com/maxima.pools/",
                ],
                priceRange: "$$$$",
              },
              {
                "@type": "VideoObject",
                "@id": "https://maximapools.com/#hero-card-video",
                name: "San Juan Fiberglass Pool Showcase — Maxima Pools",
                description:
                  "Showcase of a premium San Juan fiberglass pool installed by Maxima Pools in Central Ohio.",
                thumbnailUrl:
                  "https://maximapools.com/videos/hero-card-poster.webp",
                contentUrl: "https://maximapools.com/videos/hero-card.mp4",
                uploadDate: "2026-07-06",
                duration: "PT34S",
                publisher: { "@id": "https://maximapools.com/#organization" },
              },
              {
                "@type": "VideoObject",
                "@id": "https://maximapools.com/#hero-background-video",
                name: "Fiberglass Pool Water — Maxima Pools",
                description:
                  "Ambient video of crystal-clear water in a fiberglass pool installed by Maxima Pools in Columbus, Ohio.",
                thumbnailUrl:
                  "https://maximapools.com/images/pools/atlantic.webp",
                contentUrl:
                  "https://maximapools.com/videos/pool-background-video.mp4",
                uploadDate: "2026-04-13",
                duration: "PT20S",
                publisher: { "@id": "https://maximapools.com/#organization" },
              },
            ],
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
      <FinancingCTA />
      <SectionDivider />
      <Testimonials />
      <SectionDivider />
      <SocialFeed />
      <SectionDivider />
      <LocationsWeServe />
      <SectionDivider />
      <CTA />
    </>
  );
}
