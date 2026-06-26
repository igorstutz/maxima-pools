import locationsData from "@/content/locations.json";

export interface Location {
  name: string;
  /** "city" or "county" — affects page copy */
  type: "city" | "county";
  /** Used for Google Maps embed */
  query: string;
  /** Custom services paragraph displayed under "Our Services in {City}" */
  copy: string;
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Service areas — editable in the CMS via src/content/locations.json. */
export const locations: Location[] = locationsData.locations as unknown as Location[];
