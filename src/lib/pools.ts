/* ------------------------------------------------------------------ */
/*  Pool data loader — reads one JSON file per model from              */
/*  src/content/pools (the CMS "Pools & Spas" collection).            */
/*                                                                     */
/*  SERVER-ONLY: this uses Node `fs`, so it must NOT be imported by a  */
/*  client component. Client components import the pure `Pool` type +  */
/*  `slugify` from `@/lib/pool-utils`, and receive pool data via props */
/*  from a server parent (see src/app/pools/page.tsx).                 */
/* ------------------------------------------------------------------ */

import fs from "fs";
import path from "path";
import type { Pool } from "./pool-utils";

export type { Pool } from "./pool-utils";
export { slugify } from "./pool-utils";

/** Full per-model record as stored on disk (catalog fields + media). */
export interface PoolFile extends Pool {
  order?: number;
  gallery?: string[];
  sketchfab?: string | null;
  pdf?: string | null;
  youtube?: string | null;
}

const POOLS_DIR = path.join(process.cwd(), "src", "content", "pools");

function loadAll(): PoolFile[] {
  const files = fs
    .readdirSync(POOLS_DIR)
    .filter((f) => f.endsWith(".json"));
  const all = files.map(
    (f) =>
      JSON.parse(fs.readFileSync(path.join(POOLS_DIR, f), "utf8")) as PoolFile
  );
  // Preserve the original catalog order via the `order` field, falling back
  // to name for any entries created without one (e.g. new CMS models).
  all.sort(
    (a, b) =>
      (a.order ?? Number.MAX_SAFE_INTEGER) - (b.order ?? Number.MAX_SAFE_INTEGER) ||
      a.name.localeCompare(b.name)
  );
  return all;
}

const allPools: PoolFile[] = loadAll();

/** Catalog-facing list (lightweight — no media), every model. */
export const pools: Pool[] = allPools.map((p) => ({
  name: p.name,
  image: p.image,
  width: p.width,
  length: p.length,
  depth: p.depth,
  area: p.area,
  volume: p.volume,
  shape: p.shape,
  size: p.size,
  type: p.type,
  ...(p.types ? { types: p.types } : {}),
  ...(p.hidden ? { hidden: true } : {}),
}));

/**
 * Catalog-facing list: everything in `pools` except models flagged `hidden`.
 * Use this for anything the public sees (catalog grid, sitemap, similar pools,
 * static page generation).
 */
export const visiblePools: Pool[] = pools.filter((p) => !p.hidden);

/** Full record (incl. media) for a single model, by exact name. */
export function getPoolFile(name: string): PoolFile | undefined {
  return allPools.find((p) => p.name === name);
}
