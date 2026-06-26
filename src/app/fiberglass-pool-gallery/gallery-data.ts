import galleryContent from "@/content/pages/fiberglass-pool-gallery.json";

export type GalleryCategory = "All" | "White" | "Sully Blue" | "Blue Lagoon" | "Granite" | "Featured";

export interface GalleryImage {
  src: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

// Image list is editable via the CMS (src/content/pages/fiberglass-pool-gallery.json).
export const galleryImages: GalleryImage[] = galleryContent.gallery as GalleryImage[];

export const categories: GalleryCategory[] = [
  "All",
  "Featured",
  "White",
  "Sully Blue",
  "Blue Lagoon",
  "Granite",
];
