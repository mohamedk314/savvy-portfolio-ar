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
    title: "نظافة الوحدات السكنية",
    cover: "/images/cleaning/villas.jpg",
  },
  {
    href: "/cleaning/enterprises",
    title: "  شركات و مولات و مصانع ",
    cover: "/images/cleaning/companies.jpg",
  },
  {
    href: "/cleaning/resorts",
    title: "نظافة القرى السياحية",
    cover: "/images/cleaning/resorts.jpg",
    note: "غير متاح حالياً",
  },
  {
    href: "/cleaning/extras",
    title: "خدمات أخرى",
    cover: "/images/cleaning/other.jpg",
  },
];
