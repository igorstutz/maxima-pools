import { Suspense } from "react";
import { visiblePools } from "@/lib/pools";
import { PoolsCatalog } from "./pools-catalog";

// Server component: loads the pool list at build time (fs) and hands it to the
// client catalog, which owns the filter UI. Keeps pool data out of the client
// bundle's import graph while the static HTML still contains every card.
export default function PoolsPage() {
  return (
    <Suspense fallback={null}>
      <PoolsCatalog pools={visiblePools} />
    </Suspense>
  );
}
