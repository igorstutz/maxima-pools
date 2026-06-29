/* ------------------------------------------------------------------ */
/*  Pure pool helpers (no Node `fs`) — safe to import from client       */
/*  components. The fs-backed data loader lives in `pools.ts`.          */
/* ------------------------------------------------------------------ */

export type PoolType = "Pool" | "Spa" | "Tanning Ledge" | "Pool with Spa";

export interface Pool {
  name: string;
  image: string;
  width: string;
  length: string;
  depth: string;
  area: string;
  volume: string;
  /**
   * Mold shape. Optional: a few models (e.g. multi-purpose decks) don't map to
   * a single shape, so they omit it — the shape badge and shape filter then
   * simply don't apply to them.
   */
  shape?: "Rectangular" | "Freeform";
  size: "Small" | "Medium" | "Large";
  /** Primary category — used for prose, SEO copy, and "similar pools". */
  type: PoolType;
  /**
   * Extra categories a model also belongs to. When present, the catalog type
   * filter matches against this full list; when absent it falls back to
   * `[type]`. Lets one model show up under several filters (e.g. a pool that
   * is also a spa and a tanning ledge).
   */
  types?: PoolType[];
  /**
   * Temporarily out of catalog. Hidden pools stay in the data (so they can
   * be restored later) but are excluded from the catalog grid, the sitemap,
   * "similar pools", and static page generation — so their /pools/[slug] URL
   * is not built and returns 404 while hidden.
   */
  hidden?: boolean;
}

/** All categories a pool belongs to (its `types` list, or just `[type]`). */
export function poolTypes(pool: Pool): PoolType[] {
  return pool.types && pool.types.length > 0 ? pool.types : [pool.type];
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
