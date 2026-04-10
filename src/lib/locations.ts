export interface Location {
  name: string;
  /** "city" or "county" — affects page copy */
  type: "city" | "county";
  /** Used for Google Maps embed */
  query: string;
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export const locations: Location[] = [
  { name: "Columbus", type: "city", query: "Columbus,OH" },
  { name: "Dublin", type: "city", query: "Dublin,OH" },
  { name: "Powell", type: "city", query: "Powell,OH" },
  { name: "Westerville", type: "city", query: "Westerville,OH" },
  { name: "Worthington", type: "city", query: "Worthington,OH" },
  { name: "Upper Arlington", type: "city", query: "Upper+Arlington,OH" },
  { name: "Hilliard", type: "city", query: "Hilliard,OH" },
  { name: "Grove City", type: "city", query: "Grove+City,OH" },
  { name: "Gahanna", type: "city", query: "Gahanna,OH" },
  { name: "New Albany", type: "city", query: "New+Albany,OH" },
  { name: "Reynoldsburg", type: "city", query: "Reynoldsburg,OH" },
  { name: "Pickerington", type: "city", query: "Pickerington,OH" },
  { name: "Groveport", type: "city", query: "Groveport,OH" },
  { name: "Pataskala", type: "city", query: "Pataskala,OH" },
  { name: "Blacklick", type: "city", query: "Blacklick,OH" },
  { name: "Galloway", type: "city", query: "Galloway,OH" },
  { name: "West Jefferson", type: "city", query: "West+Jefferson,OH" },
  { name: "Plain City", type: "city", query: "Plain+City,OH" },
  { name: "Marysville", type: "city", query: "Marysville,OH" },
  { name: "Sunbury", type: "city", query: "Sunbury,OH" },
  { name: "Galena", type: "city", query: "Galena,OH" },
  { name: "Lewis Center", type: "city", query: "Lewis+Center,OH" },
  { name: "Ostrander", type: "city", query: "Ostrander,OH" },
  { name: "Ashley", type: "city", query: "Ashley,OH" },
  { name: "Centerburg", type: "city", query: "Centerburg,OH" },
  { name: "Johnstown", type: "city", query: "Johnstown,OH" },
  { name: "Buckeye Lake", type: "city", query: "Buckeye+Lake,OH" },
  { name: "Etna", type: "city", query: "Etna,OH" },
  { name: "Lithopolis", type: "city", query: "Lithopolis,OH" },
  { name: "Thornville", type: "city", query: "Thornville,OH" },
  { name: "Prospect", type: "city", query: "Prospect,OH" },
  { name: "Cardington", type: "city", query: "Cardington,OH" },
  { name: "Franklin County", type: "county", query: "Franklin+County,OH" },
  { name: "Delaware County", type: "county", query: "Delaware+County,OH" },
  { name: "Union County", type: "county", query: "Union+County,OH" },
  { name: "Licking County", type: "county", query: "Licking+County,OH" },
  { name: "Fairfield County", type: "county", query: "Fairfield+County,OH" },
  { name: "Madison County", type: "county", query: "Madison+County,OH" },
  { name: "Pickaway County", type: "county", query: "Pickaway+County,OH" },
  { name: "Marion County", type: "county", query: "Marion+County,OH" },
  { name: "Morrow County", type: "county", query: "Morrow+County,OH" },
  { name: "Knox County", type: "county", query: "Knox+County,OH" },
  { name: "Logan County", type: "county", query: "Logan+County,OH" },
  { name: "Champaign County", type: "county", query: "Champaign+County,OH" },
  { name: "Clark County", type: "county", query: "Clark+County,OH" },
  { name: "Hardin County", type: "county", query: "Hardin+County,OH" },
  { name: "Crawford County", type: "county", query: "Crawford+County,OH" },
  { name: "Wyandot County", type: "county", query: "Wyandot+County,OH" },
  { name: "Richland County", type: "county", query: "Richland+County,OH" },
];
