import { getPoolFile } from "./pools";

interface PoolMedia {
  gallery: string[];
  sketchfab: string | null;
  pdf: string | null;
  youtube: string | null;
}

export function getPoolMedia(poolName: string): PoolMedia {
  const pool = getPoolFile(poolName);
  if (!pool) return { gallery: [], sketchfab: null, pdf: null, youtube: null };

  // De-dupe the many WordPress thumbnail variants by keeping only the
  // canonical 1024x576 version. Non-WordPress sources (locally-hosted
  // images, San Juan CDN) have a single resolution, so keep them as-is.
  const gallery = (pool.gallery ?? []).filter(
    (url) => url.includes("1024x576") || !url.includes("maximapools.com/wp-content")
  );

  return {
    gallery,
    sketchfab: pool.sketchfab ?? null,
    pdf: pool.pdf ?? null,
    youtube: pool.youtube ?? null,
  };
}
