/* ------------------------------------------------------------------ */
/*  Pool data — 72+ San Juan fiberglass models                        */
/*  Shared between /pools and /pools/[slug]                           */
/* ------------------------------------------------------------------ */

export interface Pool {
  name: string;
  image: string;
  width: string;
  length: string;
  depth: string;
  area: string;
  volume: string;
  shape: "Rectangular" | "Freeform" | "Rounded";
  size: "Small" | "Medium" | "Large";
  type: "Pool" | "Spa";
}

/**
 * Convert a pool name to a URL-safe slug.
 * "Caesar's Palace" -> "caesars-palace"
 * "iPool 2"         -> "ipool-2"
 */
export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/['']/g, "")       // remove apostrophes / curly quotes
    .replace(/[^a-z0-9]+/g, "-") // non-alphanumeric → hyphen
    .replace(/^-+|-+$/g, "");    // trim leading/trailing hyphens
}

export const pools: Pool[] = [
  { name: "Atlantic", image: "https://maximapools.com/wp-content/uploads/2024/08/atlantic.webp", width: "15'7\"", length: "33'1\"", depth: "5'9\"", area: "375 sq ft", volume: "10,400 gal", shape: "Freeform", size: "Large", type: "Pool" },
  { name: "Atlantic Deep", image: "https://maximapools.com/wp-content/uploads/2024/08/atlantic-deep.webp", width: "15'7\"", length: "33'1\"", depth: "8'", area: "375 sq ft", volume: "11,300 gal", shape: "Freeform", size: "Large", type: "Pool" },
  { name: "Ariella", image: "https://maximapools.com/wp-content/uploads/2024/08/ariella.webp", width: "12'7\"", length: "21'1\"", depth: "4'10\"", area: "186 sq ft", volume: "4,794 gal", shape: "Freeform", size: "Small", type: "Pool" },
  { name: "Barcelona", image: "https://maximapools.com/wp-content/uploads/2025/03/barcelona-768x627.webp", width: "16'", length: "28'4\"", depth: "6'", area: "321 sq ft", volume: "7,907 gal", shape: "Freeform", size: "Medium", type: "Pool" },
  { name: "Biloxi", image: "https://maximapools.com/wp-content/uploads/2024/08/biloxi.webp", width: "12'", length: "27'", depth: "4'3\"", area: "289 sq ft", volume: "6,400 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Biloxi Beach", image: "https://maximapools.com/wp-content/uploads/2025/03/biloxi-beach.webp", width: "12'", length: "27'", depth: "4'3\"", area: "303 sq ft", volume: "7,510 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Broadway", image: "https://maximapools.com/wp-content/uploads/2024/08/broadway.webp", width: "11'8\"", length: "21'8\"", depth: "4'", area: "240 sq ft", volume: "4,500 gal", shape: "Rectangular", size: "Small", type: "Pool" },
  { name: "Caesar's Palace", image: "https://maximapools.com/wp-content/uploads/2024/08/caesar-s-palace.webp", width: "16'", length: "33'9\"", depth: "5'8\"", area: "417 sq ft", volume: "11,400 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Caesar's Palace Beach", image: "https://maximapools.com/wp-content/uploads/2024/08/caesar-s-palace-beach.webp", width: "16'", length: "36'3\"", depth: "5'8\"", area: "527 sq ft", volume: "12,057 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Catalina", image: "https://maximapools.com/wp-content/uploads/2024/08/catalina.webp", width: "12'", length: "25'10\"", depth: "5'7\"", area: "218 sq ft", volume: "6,800 gal", shape: "Rectangular", size: "Small", type: "Pool" },
  { name: "Clearwater Beach", image: "https://maximapools.com/wp-content/uploads/2024/08/clearwater-beach.webp", width: "16'", length: "36'9\"", depth: "6'3\"", area: "455 sq ft", volume: "12,673 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Cocoa Beach", image: "https://maximapools.com/wp-content/uploads/2024/08/cocoa-beach.webp", width: "11'7\"", length: "23'8\"", depth: "5'6\"", area: "190 sq ft", volume: "6,600 gal", shape: "Freeform", size: "Small", type: "Pool" },
  { name: "Costa Azul", image: "https://maximapools.com/wp-content/uploads/2024/08/costa-azul.webp", width: "14'11\"", length: "32'7\"", depth: "5'6\"", area: "402 sq ft", volume: "9,249 gal", shape: "Freeform", size: "Medium", type: "Pool" },
  { name: "Crystal Beach", image: "https://maximapools.com/wp-content/uploads/2024/08/crystal-beach.webp", width: "11'8\"", length: "25'1\"", depth: "5'7\"", area: "147 sq ft", volume: "4,000 gal", shape: "Freeform", size: "Small", type: "Pool" },
  { name: "Crystal Cove", image: "https://maximapools.com/wp-content/uploads/2024/08/crystal-cove.webp", width: "11'11\"", length: "18'11\"", depth: "5'", area: "141 sq ft", volume: "3,300 gal", shape: "Rounded", size: "Small", type: "Pool" },
  { name: "Crystal Springs", image: "https://maximapools.com/wp-content/uploads/2024/08/crystal-springs.webp", width: "11'11\"", length: "17'2\"", depth: "5'", area: "119 sq ft", volume: "3,900 gal", shape: "Rounded", size: "Small", type: "Pool" },
  { name: "Cyberlane", image: "https://maximapools.com/wp-content/uploads/2024/08/cyberlane.webp", width: "8'", length: "23'", depth: "4'9\"", area: "159 sq ft", volume: "4,240 gal", shape: "Rectangular", size: "Small", type: "Pool" },
  { name: "Cyberlane (No Spa)", image: "https://maximapools.com/wp-content/uploads/2024/08/cyberlane-no-spa.webp", width: "8'", length: "17'", depth: "4'9\"", area: "121 sq ft", volume: "3,400 gal", shape: "Rectangular", size: "Small", type: "Pool" },
  { name: "Dallas", image: "https://maximapools.com/wp-content/uploads/2024/08/dallas.webp", width: "16'1\"", length: "42'4\"", depth: "7'11\"", area: "585 sq ft", volume: "20,500 gal", shape: "Freeform", size: "Large", type: "Pool" },
  { name: "Daytona Beach", image: "https://maximapools.com/wp-content/uploads/2024/08/daytona-beach.webp", width: "16'", length: "45'", depth: "8'", area: "560 sq ft", volume: "22,000 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Desert Falls", image: "https://maximapools.com/wp-content/uploads/2025/03/desert-falls-768x479.webp", width: "14'", length: "30'1\"", depth: "6'", area: "300 sq ft", volume: "8,397 gal", shape: "Freeform", size: "Medium", type: "Pool" },
  { name: "Desert Springs", image: "https://maximapools.com/wp-content/uploads/2025/03/desert-springs-1-768x531.webp", width: "14'", length: "30'1\"", depth: "6'", area: "300 sq ft", volume: "7,410 gal", shape: "Freeform", size: "Medium", type: "Pool" },
  { name: "Dolphin", image: "https://maximapools.com/wp-content/uploads/2024/08/dolphin.webp", width: "14'1\"", length: "33'1\"", depth: "5'1\"", area: "395 sq ft", volume: "11,500 gal", shape: "Freeform", size: "Large", type: "Pool" },
  { name: "Fort Myers", image: "https://maximapools.com/wp-content/uploads/2024/08/fort-myers.webp", width: "8'2\"", length: "16'2\"", depth: "4'1\"", area: "95 sq ft", volume: "2,650 gal", shape: "Rectangular", size: "Small", type: "Pool" },
  { name: "Fun Deck", image: "https://maximapools.com/wp-content/uploads/2024/08/fun-deck-1.webp", width: "16'", length: "14'", depth: "1'6\"", area: "224 sq ft", volume: "1,600 gal", shape: "Rectangular", size: "Small", type: "Pool" },
  { name: "Grand Manhattan", image: "https://maximapools.com/wp-content/uploads/2024/08/grand-manhattan.webp", width: "15'10\"", length: "33'10\"", depth: "5'1\"", area: "487 sq ft", volume: "11,600 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Great Lake Beach", image: "https://maximapools.com/wp-content/uploads/2024/08/great-lake-beach.webp", width: "16'2\"", length: "41'8\"", depth: "6'4\"", area: "585 sq ft", volume: "14,874 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Great Lakes", image: "https://maximapools.com/wp-content/uploads/2024/08/great-lakes.webp", width: "16'2\"", length: "37'", depth: "6'4\"", area: "540 sq ft", volume: "14,500 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Gulf Breeze", image: "https://maximapools.com/wp-content/uploads/2024/08/gulf-breeze.webp", width: "12'", length: "20'", depth: "3'10\"", area: "212 sq ft", volume: "5,600 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Hawaiian", image: "https://maximapools.com/wp-content/uploads/2024/08/hawaiian.webp", width: "12'10\"", length: "29'", depth: "6'", area: "294 sq ft", volume: "9,000 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Horizon", image: "https://maximapools.com/wp-content/uploads/2024/08/horizon-1.webp", width: "16'", length: "24'", depth: "4'9\"", area: "200 sq ft", volume: "5,200 gal", shape: "Rectangular", size: "Small", type: "Pool" },
  { name: "Huntington Beach", image: "https://maximapools.com/wp-content/uploads/2024/08/huntington-beach.webp", width: "16'", length: "28'7\"", depth: "5'7\"", area: "315 sq ft", volume: "7,320 gal", shape: "Freeform", size: "Medium", type: "Pool" },
  { name: "iPool", image: "https://maximapools.com/wp-content/uploads/2024/08/ipool.webp", width: "16'", length: "36'2\"", depth: "4'8\"", area: "354 sq ft", volume: "8,800 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "iPool 2", image: "https://maximapools.com/wp-content/uploads/2024/08/ipool-2.webp", width: "14'1\"", length: "27'10\"", depth: "5'", area: "294 sq ft", volume: "9,000 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Lake Michigan", image: "https://maximapools.com/wp-content/uploads/2024/08/lake-michigan.webp", width: "16'", length: "26'", depth: "5'11\"", area: "375 sq ft", volume: "10,122 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Lake Superior", image: "https://maximapools.com/wp-content/uploads/2025/07/Frame-1.png", width: "15'10\"", length: "30'", depth: "6'4\"", area: "450 sq ft", volume: "12,000 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Lelani", image: "https://maximapools.com/wp-content/uploads/2024/08/lelani.webp", width: "12'3\"", length: "23'9\"", depth: "5'11\"", area: "217 sq ft", volume: "6,000 gal", shape: "Freeform", size: "Small", type: "Pool" },
  { name: "Luxor Deep", image: "https://maximapools.com/wp-content/uploads/2024/08/luxor-deep.webp", width: "15'11\"", length: "44'7\"", depth: "7'10\"", area: "658 sq ft", volume: "22,000 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Luxor Shallow", image: "https://maximapools.com/wp-content/uploads/2024/08/luxor-shallow.webp", width: "15'11\"", length: "44'7\"", depth: "3'8\"\u20136'", area: "658 sq ft", volume: "19,000 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Malibu", image: "https://maximapools.com/wp-content/uploads/2024/08/malibu.webp", width: "12'1\"", length: "22'4\"", depth: "3'9\"", area: "184 sq ft", volume: "5,025 gal", shape: "Rectangular", size: "Small", type: "Pool" },
  { name: "Majestic", image: "https://maximapools.com/wp-content/uploads/2024/08/majestic.webp", width: "16'2\"", length: "34'1\"", depth: "5'4\"", area: "431 sq ft", volume: "13,500 gal", shape: "Freeform", size: "Large", type: "Pool" },
  { name: "Manatee", image: "https://maximapools.com/wp-content/uploads/2024/08/manatee.webp", width: "13'9\"", length: "32'10\"", depth: "5'10\"", area: "354 sq ft", volume: "10,300 gal", shape: "Freeform", size: "Medium", type: "Pool" },
  { name: "Manatee Deep", image: "https://maximapools.com/wp-content/uploads/2024/08/manatee-deep.webp", width: "13'9\"", length: "32'10\"", depth: "8'", area: "354 sq ft", volume: "13,700 gal", shape: "Freeform", size: "Medium", type: "Pool" },
  { name: "Mandalay Bay", image: "https://maximapools.com/wp-content/uploads/2024/08/mandalay-bay.webp", width: "11'8\"", length: "25'1\"", depth: "5'7\"", area: "198 sq ft", volume: "6,600 gal", shape: "Freeform", size: "Small", type: "Pool" },
  { name: "Marathon", image: "https://maximapools.com/wp-content/uploads/2024/08/marathon-pool-only-768x320.webp", width: "8'6\"", length: "34'", depth: "4'9\"", area: "244 sq ft", volume: "7,507 gal", shape: "Rectangular", size: "Small", type: "Pool" },
  { name: "Margarita Beach", image: "https://maximapools.com/wp-content/uploads/2024/08/margarita-beach-1.webp", width: "9'", length: "13'", depth: "3'11\"", area: "96 sq ft", volume: "780 gal", shape: "Rounded", size: "Small", type: "Pool" },
  { name: "Mirage", image: "https://maximapools.com/wp-content/uploads/2024/08/mirage.webp", width: "15'8\"", length: "39'8\"", depth: "5'4\"", area: "466 sq ft", volume: "14,050 gal", shape: "Freeform", size: "Large", type: "Pool" },
  { name: "Monte Carlo", image: "https://maximapools.com/wp-content/uploads/2024/08/monte-carlo.webp", width: "15'11\"", length: "31'10\"", depth: "5'8\"", area: "467 sq ft", volume: "12,000 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Montreal Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/montreal-spa-1.webp", width: "10'10\"", length: "15'6\"", depth: "3'9\"", area: "99 sq ft", volume: "1,925 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Niagara", image: "https://maximapools.com/wp-content/uploads/2024/08/niagara.webp", width: "15'11\"", length: "33'10\"", depth: "7'10\"", area: "497 sq ft", volume: "17,500 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Oasis", image: "https://maximapools.com/wp-content/uploads/2024/08/oasis.webp", width: "16'", length: "39'8\"", depth: "7'11\"", area: "500 sq ft", volume: "17,950 gal", shape: "Freeform", size: "Large", type: "Pool" },
  { name: "Oceanside", image: "https://maximapools.com/wp-content/uploads/2024/08/oceanside.webp", width: "16'2\"", length: "40'6\"", depth: "6'4\"", area: "602 sq ft", volume: "20,600 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Oceanside Beach", image: "https://maximapools.com/wp-content/uploads/2024/08/oceanside-beach.webp", width: "16'2\"", length: "45'", depth: "6'4\"", area: "724 sq ft", volume: "21,852 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Olympus", image: "https://maximapools.com/wp-content/uploads/2024/08/olympus.webp", width: "16'2\"", length: "39'11\"", depth: "5'8\"", area: "480 sq ft", volume: "14,100 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Orlando", image: "https://maximapools.com/wp-content/uploads/2024/08/orlando.webp", width: "12'", length: "28'", depth: "3'10\"", area: "267 sq ft", volume: "6,750 gal", shape: "Rectangular", size: "Small", type: "Pool" },
  { name: "Pacific", image: "https://maximapools.com/wp-content/uploads/2024/08/pacifc.webp", width: "16'1\"", length: "39'10\"", depth: "7'11\"", area: "559 sq ft", volume: "20,500 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Palm Beach", image: "https://maximapools.com/wp-content/uploads/2024/08/palm-beach.webp", width: "10'5\"", length: "21'10\"", depth: "4'11\"", area: "157 sq ft", volume: "4,800 gal", shape: "Rectangular", size: "Small", type: "Pool" },
  { name: "Phoenix", image: "https://maximapools.com/wp-content/uploads/2024/08/phoenix.png", width: "15'11\"", length: "39'7\"", depth: "5'1\"", area: "531 sq ft", volume: "14,400 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Pleasure Island", image: "https://maximapools.com/wp-content/uploads/2024/08/pleasure-island.webp", width: "16'2\"", length: "39'1\"", depth: "6'", area: "448 sq ft", volume: "14,000 gal", shape: "Freeform", size: "Medium", type: "Pool" },
  { name: "Pompano Beach", image: "https://maximapools.com/wp-content/uploads/2024/08/pompano-beach.webp", width: "13'10\"", length: "29'8\"", depth: "5'5\"", area: "302 sq ft", volume: "9,500 gal", shape: "Rounded", size: "Medium", type: "Pool" },
  { name: "Pond Freeform", image: "https://maximapools.com/wp-content/uploads/2024/08/pond-freeform.webp", width: "11'11\"", length: "17'2\"", depth: "1'6\"", area: "119 sq ft", volume: "1,332 gal", shape: "Freeform", size: "Small", type: "Pool" },
  { name: "Rio", image: "https://maximapools.com/wp-content/uploads/2024/08/rio.webp", width: "15'10\"", length: "28'4\"", depth: "5'7\"", area: "324 sq ft", volume: "10,000 gal", shape: "Freeform", size: "Medium", type: "Pool" },
  { name: "Savannah", image: "https://maximapools.com/wp-content/uploads/2024/08/savannah.webp", width: "14'", length: "32'6\"", depth: "5'6\"", area: "362 sq ft", volume: "11,500 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Sea Isle", image: "https://maximapools.com/wp-content/uploads/2024/08/sea-isle-1.webp", width: "12'", length: "16'6\"", depth: "5'", area: "171 sq ft", volume: "5,200 gal", shape: "Freeform", size: "Small", type: "Pool" },
  { name: "Seaside", image: "https://maximapools.com/wp-content/uploads/2024/08/seaside.webp", width: "11'11\"", length: "27'10\"", depth: "6'", area: "242 sq ft", volume: "8,000 gal", shape: "Freeform", size: "Medium", type: "Pool" },
  { name: "Sedona", image: "https://maximapools.com/wp-content/uploads/2024/08/sedona-1.webp", width: "8'", length: "14'", depth: "3'6\"", area: "98 sq ft", volume: "2,750 gal", shape: "Rectangular", size: "Small", type: "Pool" },
  { name: "South Beach", image: "https://maximapools.com/wp-content/uploads/2024/08/south-beach.webp", width: "16'", length: "45'", depth: "6'4\"", area: "560 sq ft", volume: "15,966 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Star Dust", image: "https://maximapools.com/wp-content/uploads/2024/08/star-dust.webp", width: "16'", length: "37'4\"", depth: "6'4\"", area: "455 sq ft", volume: "13,700 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Stockholm", image: "https://maximapools.com/wp-content/uploads/2024/08/stockholm.webp", width: "14'", length: "27'1\"", depth: "5'9\"", area: "345 sq ft", volume: "10,000 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Sundial", image: "https://maximapools.com/wp-content/uploads/2024/08/sundial.webp", width: "11'9\"", length: "23'9\"", depth: "5'7\"", area: "190 sq ft", volume: "4,600 gal", shape: "Freeform", size: "Small", type: "Pool" },
  { name: "Sydney Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/sydney-spa.webp", width: "13'5\"", length: "20'1\"", depth: "3'4\"", area: "151 sq ft", volume: "3,550 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Vegas", image: "https://maximapools.com/wp-content/uploads/2024/08/vegas.webp", width: "15'11\"", length: "27'11\"", depth: "5'1\"", area: "356 sq ft", volume: "11,300 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Venetian", image: "https://maximapools.com/wp-content/uploads/2024/08/venetian.webp", width: "15'3\"", length: "27'10\"", depth: "5'4\"", area: "311 sq ft", volume: "8,786 gal", shape: "Freeform", size: "Medium", type: "Pool" },
  { name: "Waikiki I", image: "https://maximapools.com/wp-content/uploads/2024/08/waikiki-i.webp", width: "12'2\"", length: "26'9\"", depth: "5'6\"", area: "266 sq ft", volume: "8,000 gal", shape: "Freeform", size: "Medium", type: "Pool" },
  { name: "Waikiki II", image: "https://maximapools.com/wp-content/uploads/2024/08/waikiki-II.webp", width: "11'9\"", length: "27'11\"", depth: "5'6\"", area: "277 sq ft", volume: "8,500 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Wylela", image: "https://maximapools.com/wp-content/uploads/2024/08/wylela.webp", width: "12'", length: "25'", depth: "6'", area: "254 sq ft", volume: "8,500 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Wylela Beach", image: "https://maximapools.com/wp-content/uploads/2025/02/wylela-beach.webp", width: "12'", length: "30'", depth: "6'1\"", area: "319 sq ft", volume: "7,588 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Wylela Beach Grande", image: "https://maximapools.com/wp-content/uploads/2025/02/wylela-beach-grande-768x599.webp", width: "16'", length: "30'", depth: "6'1\"", area: "436 sq ft", volume: "10,789 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Wylela Beach Ultra", image: "https://maximapools.com/wp-content/uploads/2024/08/wylela-beach-ultra.webp", width: "16'", length: "37'", depth: "6'", area: "527 sq ft", volume: "14,375 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Wylela Cove", image: "https://maximapools.com/wp-content/uploads/2024/08/wylela-cove.webp", width: "12'3\"", length: "30'", depth: "6'", area: "360 sq ft", volume: "7,571 gal", shape: "Rectangular", size: "Medium", type: "Pool" },
  { name: "Wylela Cove Grande", image: "https://maximapools.com/wp-content/uploads/2025/02/wylela-cove-grande.webp", width: "16'", length: "30'", depth: "6'1\"", area: "433 sq ft", volume: "11,134 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  { name: "Wylela Cove Ultra", image: "https://maximapools.com/wp-content/uploads/2024/08/wylela-cove-ultra.webp", width: "16'", length: "37'", depth: "6'", area: "527 sq ft", volume: "14,697 gal", shape: "Rectangular", size: "Large", type: "Pool" },
  // Spas
  { name: "Baja Beach Spa", image: "https://maximapools.com/wp-content/uploads/2025/03/baja-beach-spa.webp", width: "9'", length: "15'2\"", depth: "3'9\"", area: "117 sq ft", volume: "1,400 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Charlotte Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/charlotte-spa-1.webp", width: "8'", length: "12'", depth: "3'11\"", area: "85 sq ft", volume: "950 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Cove Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/cove-spa-1.webp", width: "6'1\"", length: "6'1\"", depth: "2'11\"", area: "26 sq ft", volume: "300 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Diamond Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/diamond-spa-1.webp", width: "8'", length: "8'", depth: "2'11\"", area: "42 sq ft", volume: "450 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Grande Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/grande-spa-1.webp", width: "8'", length: "8'", depth: "3'2\"", area: "44 sq ft", volume: "550 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Haven Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/haven-spa-1.webp", width: "6'10\"", length: "6'10\"", depth: "3'", area: "30 sq ft", volume: "350 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Isle Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/isle-spa-1.webp", width: "8'", length: "8'", depth: "3'", area: "39 sq ft", volume: "500 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Lido Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/lido-spa-1.webp", width: "6'11\"", length: "7'1\"", depth: "3'3\"", area: "45 sq ft", volume: "550 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Marathon with Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/marathon-with-spa-768x277.webp", width: "8'6\"", length: "40'", depth: "4'9\"", area: "294 sq ft", volume: "8,277 gal", shape: "Rectangular", size: "Medium", type: "Spa" },
  { name: "Margarita Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/margarita-spa-1.webp", width: "9'", length: "9'", depth: "2'10\"", area: "64 sq ft", volume: "1,025 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Peninsula Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/peninsula-spa-1.webp", width: "8'4\"", length: "10'10\"", depth: "3'2\"", area: "82 sq ft", volume: "393 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Royale Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/royale-spa-1.webp", width: "7'", length: "10'3\"", depth: "3'2\"", area: "43 sq ft", volume: "700 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Sarasota Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/sarasota-spa-1.webp", width: "8'10\"", length: "8'10\"", depth: "3'7\"", area: "54 sq ft", volume: "755 gal", shape: "Rounded", size: "Small", type: "Spa" },
  { name: "Vancouver Spa", image: "https://maximapools.com/wp-content/uploads/2024/08/vancouver-spa.webp", width: "11'", length: "18'2\"", depth: "3'9\"", area: "120 sq ft", volume: "2,125 gal", shape: "Rounded", size: "Small", type: "Spa" },
];
