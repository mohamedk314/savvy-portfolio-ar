/** @format */

// Centralized, easy-to-edit data for the Cleaning landing cards.
// Replace cover images anytime without touching the page component.

export type CleaningCard = {
  href: string;
  title: string;
  cover: string; // single image per card (landing)
  note?: string; // optional badge (e.g., "غير متاح حالياً")
};

export const CLEANING_CARDS: CleaningCard[] = [
  {
    href: "/cleaning/villas",
    title: "نظافة الفيلات",
    cover: "/images/cleaning/aftertashteeb.jpg",
  },
  {
    href: "/cleaning/enterprises",
    title: "الشركات والمولات و المعارض و المؤسسات",
    cover: "/images/cleaning/deepcleaning.jpg",
  },
  {
    href: "/cleaning/resorts",
    title: "نظافة القرى السياحية",
    cover: "/images/heroSlides/images.png",
    note: "غير متاح حالياً",
  },
  {
    href: "/cleaning/extras",
    title: "خدمات أخرى",
    cover: "/images/heroSlides/images.png",
  },
];
