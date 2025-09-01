/** @format */

export type Extra = {
  slug: string;
  title: string;
  thumb: string; // صورة البطاقة
  cover: string; // صورة الهيرو في صفحة التفاصيل
  desc: string;
  includes: string[];
  needs: string[];
};

export const EXTRAS: Extra[] = [
  {
    slug: "upholstery",
    title: "غسيل المفروشات",
    thumb: "/images/extras/upholstery.jpg",
    cover: "/images/extras/upholstery-hero.jpg",
    desc: "تنظيف كنب/مقاعد/مراتب بالبخار واستخلاص الرغوة، مع معالجة البقع قدر الإمكان.",
    includes: [
      "تنظيف بالأجهزة المناسبة لنوع القماش",
      "تعقيم نقاط اللمس والمساند",
      "تجفيف مبدئي وتوصيات ما بعد الخدمة",
    ],
    needs: ["نوع الخامة", "عدد القطع وحالتها"],
  },
  {
    slug: "curtains",
    title: "غسيل الستائر",
    thumb: "/images/extras/curtains.jpg",
    cover: "/images/extras/curtains-hero.jpg",
    desc: "تنظيف ستائر خفيفة/ثقيلة في مكانها إن أمكن أو فكّ/تركيب حسب الحالة.",
    includes: ["إزالة الغبار وبخار خفيف", "فحص الحلقات/الشرائط"],
    needs: ["نوع القماش وطريقة التعليق", "الارتفاع وعدد النوافذ"],
  },
  {
    slug: "carpets",
    title: "غسيل السجاد",
    thumb: "/images/extras/carpets.jpg",
    cover: "/images/extras/carpets-hero.jpg",
    desc: "تنظيف جاف/بخار بحسب النوع، إزالة روائح خفيفة وتعقيم ملائم للنسج.",
    includes: ["تنظيف ميكانيكي/استخلاص رغوي", "معالجة موضعية للبقع"],
    needs: ["المقاسات وعدد القطع", "هل استُخدمت مواد مزيلة للبقع؟"],
  },
  {
    slug: "stains",
    title: "إزالة البقع العنيدة",
    thumb: "/images/extras/stains.jpg",
    cover: "/images/extras/stains-hero.jpg",
    desc: "معالجة بقع طعام/حبر/دهون على الأقمشة أو الأسطح الصلبة بمواد آمنة قدر الإمكان.",
    includes: ["اختبار بقعة صغير غير ظاهر", "اختيار مادة مناسبة للسطح"],
    needs: ["نوع البقعة وتاريخها", "نوع السطح (قماش/خشب/رخام…)"],
  },
  {
    slug: "organize-room",
    title: "إعادة تنظيم الغرف",
    thumb: "/images/extras/organize-room.jpg",
    cover: "/images/extras/organize-room-hero.jpg",
    desc: "تصنيف المحتويات، حلول تخزين بسيطة ومخطط استخدام يومي للحفاظ على النظام.",
    includes: ["تصنيف وتغليف بسيط", "اقتراحات صناديق/رفوف"],
    needs: ["صور للمساحة", "الأولوية (ملابس/ألعاب/مطبخ…)"],
  },
  {
    slug: "closet",
    title: "ترتيب الدواليب من الداخل",
    thumb: "/images/extras/closet.jpg",
    cover: "/images/extras/closet-hero.jpg",
    desc: "فرز حسب الاستخدام/الموسم، طيّ أنيق وتسمية رفوف لتسهيل الوصول.",
    includes: ["فرز موسمي", "اكسسوارات/علب تنظيم", "توصيات غسيل"],
    needs: ["عدد الدواليب/الأدراج", "حجم المساحة الداخلية"],
  },
  
];
