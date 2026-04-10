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

  // Filter gallery to only high-res images (1024x576) and remove duplicates
  const filtered = media.gallery.filter(
    (url) => url.includes("1024x576")
  );

  return { ...media, gallery: filtered };
}
