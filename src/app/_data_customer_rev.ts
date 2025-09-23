/** @format */
/*Review avatars/photos: /public/images/reviews/...

Video file: /public/videos/intro.mp4 (or change the src in the <source> tag)

Poster image: replace /images/heroSlides/images.png with your own cover if you like.*/ 
export type Review = {
  id: string;
  name: string;
  role?: string;
  avatar?: string; // optional, defaults to blank user PP
  rating: 1 | 2 | 3 | 4 | 5;
  comment: string;
  service?: string;
  date?: string;
  photos?: string[];
  attachment?: string; // path to PDF or any file
};

export const REVIEWS: Review[] = [
  {
    id: "rv-001",
    name: "م. أحمد علي",
    role: "مالك فيلا",
    rating: 5,
    comment:
      "تنفيذ ممتاز وسريع، المتابعة بالصور كانت واضحة. التجربة كلها سلسة.",
    service: "نظافة عميقة",
    date: "2024-07-12",
    attachment: "/attachments/reviews/review1.pdf", // PDF sample
  },
  {
    id: "rv-002",
    name: "أ. منى سمير",
    role: "مديرة تشغيل",
    rating: 4,
    comment: "فريق منظم ومعدات نظيفة. فيه ملاحظات بسيطة واتقفينا على تحسينها.",
    service: "المولات",
    date: "2024-08-03",
    attachment: "/attachments/reviews/review2.pdf",
  },
  {
    id: "rv-003",
    name: "م. كريم حسن",
    rating: 5,
    comment: "مكافحة فعّالة بدون روائح مزعجة، والشرح كان مطمّن. شكراً!",
    service: "مكافحة الحشرات",
    date: "2024-06-21",
    attachment: "/attachments/reviews/review3.pdf",
  },
  {
    id: "rv-004",
    name: "م. xxx علي",
    role: "مالك فيلا",
    rating: 5,
    comment:
      "تنفيذ ممتاز وسريع، المتابعة بالصور كانت واضحة. التجربة كلها سلسة.",
    service: "نظافة عميقة",
    date: "2024-07-12",
    attachment: "/attachments/reviews/review1.pdf", // PDF sample
  },
  {
    id: "rv-005",
    name: "أ. xxxx سمير",
    role: "مديرة تشغيل",
    rating: 4,
    comment: "فريق منظم ومعدات نظيفة. فيه ملاحظات بسيطة واتقفينا على تحسينها.",
    service: "المولات",
    date: "2024-08-03",
    attachment: "/attachments/reviews/review2.pdf",
  },
  {
    id: "rv-006",
    name: "م. xxxx حسن",
    rating: 5,
    comment: "مكافحة فعّالة بدون روائح مزعجة، والشرح كان مطمّن. شكراً!",
    service: "مكافحة الحشرات",
    date: "2024-06-21",
    attachment: "/attachments/reviews/review3.pdf",
  },
];

/* ملاحظات:
- ضع صورة افتراضية واحدة للـ PP داخل: /public/images/reviews/blank-user.png
- ضع ملفات الـ PDF داخل: /public/attachments/reviews/
*/
