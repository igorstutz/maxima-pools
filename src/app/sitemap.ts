import type { MetadataRoute } from "next";
import { pools, slugify } from "@/lib/pools";

export const dynamic = "force-static";

const BASE = "https://maximapools.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/why-maxima`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/pools`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/free-estimate`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/fiberglass-pool-gallery`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/pool-simulator`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/outdoor-living`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/auto-cover-pool`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/pool-closing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/frozen-pools`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/pool-accessories-and-extras`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/fiberglass-pool-colors`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/how-san-juan-pools-are-made`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/fiberglass-pool-quality`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/why-fiberglass-pools-make-sense`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/san-juan-fiberglass-pools`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/the-perfect-pool-for-your-pet`, changeFrequency: "monthly", priority: 0.6 },
  ];

  const poolPages: MetadataRoute.Sitemap = pools.map((pool) => ({
    url: `${BASE}/pools/${slugify(pool.name)}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...poolPages];
}
