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
    image: "/images/heroSlides/pest.jpeg",
  },
  {
    label: "خدمة الحدائق",
    href: "/gardens",
    image: "/images/heroSlides/gardens.jpeg",
  },
  {
    label: "الكومباوندات والأندية والمولات",
    href: "/compounds-clubs-malls",
    image: "/images/heroSlides/compounds.jpeg",
  },
  {
    label: "الساحل الشمالي",
    href: "/north-coast",
    image: "/images/heroSlides/northcoast.jpeg",
  },
  {
    label: "من نحن",
    href: "/about",
    image: "/images/heroSlides/companyprofile.jpeg",
  },
];
