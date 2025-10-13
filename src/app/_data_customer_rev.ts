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
    rating: 5,
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
    rating: 5,
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
    rating: 5,
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
    rating: 5,
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
    rating: 5,
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
