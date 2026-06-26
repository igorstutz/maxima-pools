/* ------------------------------------------------------------------ */
/*  Pure pool helpers (no Node `fs`) — safe to import from client       */
/*  components. The fs-backed data loader lives in `pools.ts`.          */
/* ------------------------------------------------------------------ */

export interface Pool {
  name: string;
  image: string;
  width: string;
  length: string;
  depth: string;
  area: string;
  volume: string;
  shape: "Rectangular" | "Freeform";
  size: "Small" | "Medium" | "Large";
  type: "Pool" | "Spa" | "Tanning Ledge" | "Pool with Spa";
  /**
   * Temporarily out of catalog. Hidden pools stay in the data (so they can
   * be restored later) but are excluded from the catalog grid, the sitemap,
   * "similar pools", and static page generation — so their /pools/[slug] URL
   * is not built and returns 404 while hidden.
   */
  hidden?: boolean;
}

/**
 * Convert a pool name to a URL-safe slug.
 * "Caesar's Palace" -> "caesars-palace"
 * "iPool 2"         -> "ipool-2"
 */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/['’]/g, "")       // remove apostrophes / curly quotes
    .replace(/[^a-z0-9]+/g, "-") // non-alphanumeric → hyphen
    .replace(/^-+|-+$/g, "");    // trim leading/trailing hyphens
}
