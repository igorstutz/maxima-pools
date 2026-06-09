import mediaData from "./pool-media.json";

interface PoolMedia {
  gallery: string[];
  sketchfab: string | null;
  pdf: string | null;
  youtube: string | null;
}

const data = mediaData as Record<string, PoolMedia>;

export function getPoolMedia(poolName: string): PoolMedia {
  const media = data[poolName];
  if (!media) return { gallery: [], sketchfab: null, pdf: null, youtube: null };

  // De-dupe the many WordPress thumbnail variants by keeping only the
  // canonical 1024x576 version. Non-WordPress sources (locally-hosted
  // images, San Juan CDN) have a single resolution, so keep them as-is.
  const filtered = media.gallery.filter(
    (url) => url.includes("1024x576") || !url.includes("maximapools.com/wp-content")
  );

  return { ...media, gallery: filtered };
}
