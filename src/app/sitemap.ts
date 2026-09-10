import type { MetadataRoute } from "next";
import { visiblePools as pools, slugify } from "@/lib/pools";
import { locations, slugify as slugifyLocation } from "@/lib/locations";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE = "https://maximapools.com";

/* The site is built with `trailingSlash: true`, so every URL without the slash
   answers 301. Listing the un-slashed form sends crawlers to a redirect. */
const url = (path = "") => `${BASE}/${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: url(), changeFrequency: "weekly", priority: 1.0 },
    { url: url("blog/"), changeFrequency: "weekly", priority: 0.8 },
    { url: url("why-maxima/"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("our-process/"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("pools/"), changeFrequency: "weekly", priority: 0.9 },
    { url: url("contact/"), changeFrequency: "monthly", priority: 0.9 },
    { url: url("financing/"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("areas-we-serve/"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("reviews/"), changeFrequency: "weekly", priority: 0.8 },
    { url: url("fiberglass-pool-gallery/"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("pool-simulator/"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("outdoor-living/"), changeFrequency: "monthly", priority: 0.8 },
    { url: url("auto-cover-pool/"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("pool-cleaning/"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("pool-repair/"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("pool-closing/"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("frozen-pools/"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("pool-accessories-and-extras/"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("fiberglass-pool-colors/"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("how-san-juan-pools-are-made/"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("fiberglass-pool-quality/"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("why-fiberglass-pools-make-sense/"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("san-juan-fiberglass-pools/"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("hand-laid-vs-combo-pools/"), changeFrequency: "monthly", priority: 0.7 },
    { url: url("the-perfect-pool-for-your-pet/"), changeFrequency: "monthly", priority: 0.6 },
    { url: url("warranty/"), changeFrequency: "yearly", priority: 0.6 },
  ];

  const poolPages: MetadataRoute.Sitemap = pools.map((pool) => ({
    url: url(`pools/${slugify(pool.name)}/`),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((loc) => ({
    url: url(`locations/${slugifyLocation(loc.name)}/`),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: url(`blog/${post.slug}/`),
    lastModified: post.publishedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticPages, ...poolPages, ...locationPages, ...blogPages];
}
