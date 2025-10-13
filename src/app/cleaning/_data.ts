/** @format */

export type CleaningCard = {
  href: string;
  title: string;
  covers: string[]; // multiple images per card
  note?: string;
};

export const CLEANING_CARDS: CleaningCard[] = [
  {
    href: "/cleaning/villas",
    title: "نظافة الوحدات السكنية",
    covers: [
      "/images/cleaning/villas/Villas1.png",
      "/images/cleaning/villas/Villas2.jpg",
      "/images/cleaning/villas/Villas3.jpg",
    ],
  },
  {
    href: "/cleaning/extras",
    title: "خدمات أخرى",
    covers: [
      "/images/testsize/grid_1200x1600_portrait.png",
      "/images/testsize/grid_1200x1600_portrait.png",
    ],
  },
  /*
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
  */
];
