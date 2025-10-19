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
    label: "المؤسسات  الكيانات الكبرى",
    href: "/compounds-clubs-malls",
    image: "/images/heroSlides/compounds.jpg",
  },
  {
    label: "خدمات القرى السياحيه",
    href: "/north-coast",
    image: "/images/heroSlides/northcoast.jpeg",
  },
  {
    label: "من نحن",
    href: "/about",
    image: "/images/heroSlides/companyprofile.jpeg",
  },
];
