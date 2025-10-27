/** @format */
/*Review avatars/photos: /public/images/reviews/...
Video file: /public/videos/intro.mp4
Poster image: /images/heroSlides/images.png */

export type Review = {
  id: string;
  name: string;
  role?: string;
  avatar?: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  service?: string;
  date?: string;
  photos?: string[];
  attachment?: string;
};

// Showcase types
export type ShowcaseItem = {
  title: string;
  image: string;       // full-width image
  description: string; // short caption
};

// 4 items = 4 points
export const SHOWCASE: ShowcaseItem[] = [
  {
    title: "سابقة الأعمال لسافي وشركائها",
    image: "/images/showcase/fnad2.png",
    description:
      "نماذج من جهات وفنادق ومنتجعات تم تقديم خدمات التشغيل والصيانة والنظافة لها.",
  },
  {
    title: "سابقة الأعمال لسافي وشركائها",
    image: "/images/showcase/landscapesecurity.png",
    description:
      "تحالفات وشراكات مع كيانات كبرى في قطاع الضيافة والفنادق والجهات السيادية.",
  },
  {
    title: "سابقة الأعمال لسافي وشركائها",
    image: "/images/showcase/fnad22.png",
    description:
      "عملاء وشركات في قطاعات الأغذية والترفيه واللوجستيات والاتصالات والتأمين.",
  },
];



export const REVIEWS: Review[] = [
  {
    id: "rv-101",
    name: "عميل",
    role: "مالك فيلا",
    rating: 5,
    comment:
      "Excellent overall. Staff treatment and workmanship were excellent.",
    service: "تنظيف عميق",
    date: "2024-05-18",
    attachment: "/attachments/reviews/rev1.png",
  },
  {
    id: "rv-102",
    name: "عميل",
    role: "عميل سكني",
    rating: 5,
    comment: "أنا مبسوط جدًا بالتجربة، لا توجد ملاحظات تُذكر.",
    service: "تنظيف عميق",
    date: "2024-06-09",
    attachment: "/attachments/reviews/rev2.png",
  },
  {
    id: "rv-103",
    name: "عميل",
    role: "مالك فيلا",
    rating: 4,
    comment: "الخدمة ممتازة، التزام بالمواعيد ونظافة بعد الانتهاء.",
    service: "تنظيف ما بعد التشطيب",
    date: "2024-06-27",
    attachment: "/attachments/reviews/rev3.png",
  },
  {
    id: "rv-104",
    name: "Customer",
    role: "Home owner",
    rating: 5,
    comment:
      "The outcome. Nothing for now to improve. All the team members were highly professional.",
    service: "تنظيف عميق",
    date: "2024-07-03",
    attachment: "/attachments/reviews/rev4.png",
  },
  {
    id: "rv-105",
    name: "Customer",
    role: "Home owner",
    rating: 5,
    comment:
      "Speed and quiet work. Experienced, talented and passionate team. Nothing to improve, you are perfect. Thanks a lot for Mr. Nabil for managing. Continue as you are.",
    service: "إدارة المرافق",
    date: "2024-07-14",
    attachment: "/attachments/reviews/rev5.png",
  },
  {
    id: "rv-106",
    name: "Customer",
    role: "Home owner",
    rating: 4,
    comment:
      "Punctuality and professionalism. Mr. Nabil and all his staff. Thanks.",
    service: "تنظيف دوري",
    date: "2024-07-22",
    attachment: "/attachments/reviews/rev6.png",
  },
  {
    id: "rv-107",
    name: "Customer",
    role: "Home owner",
    rating: 5,
    comment: "Accurate, professional, hotel service. Thank you very much.",
    service: "تنظيف عميق",
    date: "2024-08-02",
    attachment: "/attachments/reviews/rev7.png",
  },
  {
    id: "rv-108",
    name: "Customer",
    role: "Home owner",
    rating: 4,
    comment:
      "Friendliness and response. يُفضّل توضيح المتطلبات عند طلب الديب كلين. الفريق كله كان رائعًا: شيماء، نسمة، سعاد، زياد، إبراهيم. نحتاج أحيانًا أدوات إضافية لتنظيف بعض الكراسي.",
    service: "تنظيف عميق",
    date: "2024-08-19",
    attachment: "/attachments/reviews/rev8.png",
  },
  {
    id: "rv-109",
    name: "عميل",
    role: "مالك فيلا",
    rating: 5,
    comment: "خدمة نظافة ممتازة. الاهتمام فوق الممتاز. جميع العاملين متعاونون.",
    service: "تنظيف منازل",
    date: "2024-09-05",
    attachment: "/attachments/reviews/rev9.png",
  },
  {
    id: "rv-110",
    name: "عميل",
    role: "عميل سكني",
    rating: 5,
    comment:
      "خدمة ممتازة جدًا بوجود م/نبيل والفريق. التزام وذوق واحترام. Great service and team.",
    service: "تنظيف عميق",
    date: "2024-09-21",
    attachment: "/attachments/reviews/rev10.png",
  },
  {
    id: "rv-111",
    name: "عميل",
    role: "مالك فيلا",
    rating: 3,
    comment:
      "الفريق ممتاز ومتعاون. وجزيل الشكر للأخ نائل الكريم على حسن التعامل.",
    service: "تنظيف عميق",
    date: "2024-09-29",
    attachment: "/attachments/reviews/rev11.png",
  },
  {
    id: "rv-112",
    name: "Customer",
    role: "Home owner",
    rating: 4,
    comment: "Very good. All very good. No comments.",
    service: "تنظيف دوري",
    date: "2024-10-03",
    attachment: "/attachments/reviews/rev12.png",
  },
];

/* ملاحظات:
- ضع صورة افتراضية داخل: /public/images/reviews/blank-user.png
- ضع ملفات PDF داخل: /public/attachments/reviews/
*/
/* Icons: use as <path d={...}/> inside a 24x24 viewBox */
export const ICONS = {
  checkCircle:
    "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Zm-1.2-6.2-3.3-3.3 1.4-1.4 1.9 1.9 4.6-4.6 1.4 1.4-6 6Z",
  shield: "M12 2l7 3v6c0 5-3.8 9.7-7 11-3.2-1.3-7-6-7-11V5l7-3Z",
  wrench: "M22 7a5 5 0 0 1-7 4.58l-7.59 7.6-2.83-2.83 7.6-7.59A5 5 0 1 1 22 7Z",
  leaf: "M5 21c8 0 14-6 14-14V5h-2C9 5 3 11 3 19v2h2Z",
  bug: "M7 8h10v2H7V8Zm5-5 2 2h3v2h-3l-2 2-2-2H7V5h3l2-2Zm-6 9h12v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z",
} as const;

export const SERVICES_LIST = [
  { label: "نظافة", icon: ICONS.checkCircle, href: "/cleaning" },
  { label: "أمن", icon: ICONS.checkCircle, href: "/security" },
  { label: "تنسيق حدائق", icon: ICONS.checkCircle, href: "/gardens" },
  {
    label: "مكافحة الحشرات و القوارض",
    icon: ICONS.checkCircle,
    href: "/pest-control",
  },
  { label: "خدمات أخرى", icon: ICONS.checkCircle, href: "/cleaning/extras/" },
] as const;

