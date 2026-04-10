export type GalleryCategory = "All" | "White" | "Sully Blue" | "Blue Lagoon" | "Granite" | "Featured";

export interface GalleryImage {
  src: string;
  category: GalleryCategory;
}

export const galleryImages: GalleryImage[] = [
  // Featured (show first)
  { src: "/images/gallery/featured-01.png", category: "Featured" },
  { src: "/images/gallery/featured-02.jpg", category: "Featured" },
  { src: "/images/gallery/featured-03.jpg", category: "Featured" },
  { src: "/images/gallery/featured-04.jpg", category: "Featured" },
  { src: "/images/gallery/featured-05.jpg", category: "Featured" },
  // White
  { src: "/images/gallery/white-01.jpg", category: "White" },
  { src: "/images/gallery/white-02.jpg", category: "White" },
  { src: "/images/gallery/white-03.jpg", category: "White" },
  { src: "/images/gallery/white-04.jpg", category: "White" },
  { src: "/images/gallery/white-05.jpg", category: "White" },
  { src: "/images/gallery/white-06.jpg", category: "White" },
  { src: "/images/gallery/white-07.jpg", category: "White" },
  { src: "/images/gallery/white-08.jpg", category: "White" },
  { src: "/images/gallery/white-09.jpg", category: "White" },
  { src: "/images/gallery/white-10.jpg", category: "White" },
  { src: "/images/gallery/white-11.jpg", category: "White" },
  { src: "/images/gallery/white-12.jpg", category: "White" },
  { src: "/images/gallery/white-13.jpg", category: "White" },
  { src: "/images/gallery/white-14.jpg", category: "White" },
  // Sully Blue
  { src: "/images/gallery/sully-01.jpg", category: "Sully Blue" },
  { src: "/images/gallery/sully-02.jpg", category: "Sully Blue" },
  { src: "/images/gallery/sully-03.jpg", category: "Sully Blue" },
  { src: "/images/gallery/sully-04.jpg", category: "Sully Blue" },
  { src: "/images/gallery/sully-05.jpg", category: "Sully Blue" },
  { src: "/images/gallery/sully-06.jpg", category: "Sully Blue" },
  { src: "/images/gallery/sully-07.jpg", category: "Sully Blue" },
  { src: "/images/gallery/sully-08.jpg", category: "Sully Blue" },
  { src: "/images/gallery/sully-09.jpg", category: "Sully Blue" },
  { src: "/images/gallery/sully-10.jpg", category: "Sully Blue" },
  { src: "/images/gallery/sully-11.jpg", category: "Sully Blue" },
  { src: "/images/gallery/sully-12.jpg", category: "Sully Blue" },
  // Blue Lagoon
  { src: "/images/gallery/lagoon-01.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-02.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-03.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-04.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-05.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-06.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-07.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-08.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-09.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-10.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-11.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-12.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-13.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-14.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-15.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-16.jpg", category: "Blue Lagoon" },
  { src: "/images/gallery/lagoon-17.jpg", category: "Blue Lagoon" },
  // Granite
  { src: "/images/gallery/granite-01.jpg", category: "Granite" },
  { src: "/images/gallery/granite-02.jpg", category: "Granite" },
  { src: "/images/gallery/granite-03.jpg", category: "Granite" },
  { src: "/images/gallery/granite-04.jpg", category: "Granite" },
  { src: "/images/gallery/granite-05.jpg", category: "Granite" },
  { src: "/images/gallery/granite-06.jpg", category: "Granite" },
  { src: "/images/gallery/granite-07.jpg", category: "Granite" },
  { src: "/images/gallery/granite-08.jpg", category: "Granite" },
  { src: "/images/gallery/granite-09.jpg", category: "Granite" },
  { src: "/images/gallery/granite-10.jpg", category: "Granite" },
  { src: "/images/gallery/granite-11.jpg", category: "Granite" },
  { src: "/images/gallery/granite-12.jpg", category: "Granite" },
];

export const categories: GalleryCategory[] = [
  "All",
  "Featured",
  "White",
  "Sully Blue",
  "Blue Lagoon",
  "Granite",
];
