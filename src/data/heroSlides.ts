/** @format */

export type Slide = {
  label: string;
  href: string;
  image: string; // e.g. "/images/cleaning.jpg"
};
export const slides: Slide[] = [
  {
    label: "خدمة النظافة",
    href: "/cleaning",
    image: "/images/heroSlides/cleaning.jpeg",
  },
  {
    label: "خدمة مكافحة الحشرات",
    href: "/pest-control",
    image: "/images/heroSlides/pest.jpg",
  },
  { label: "خدمة الحدائق", href: "/gardens", image: "/images/images.png" },
  {
    label: "الكومباوندات والأندية والمولات",
    href: "/compounds-clubs-malls",
    image: "/images/heroSlides/images.png",
  },
  {
    label: "الساحل الشمالي",
    href: "/north-coast",
    image: "/images/heroSlides/images.png",
  },
  { label: "من نحن", href: "/about", image: "/images/heroSlides/images.png" },
];
