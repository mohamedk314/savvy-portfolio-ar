/** @format */

// كل المسارات أدناه أمثلة — بدّلها بصورك داخل /public/images/about/
export type BulletBlock = { title: string; items: string[] };
export type Pill = { label: string };

export type Gallery = {
  title: string;
  images: string[]; // صور مستقلة لكل جاليري
};

export type Partner = {
  name: string;
  logo: string; // مسار لوجو
};

export type TimelineItem = {
  year?: string;
  title: string;
  desc: string;
};

export const ABOUT = {
  hero: {
    title: "مقدمة عن الشركة",
    subtitle:
      "شركة سافي للإستثمار وإدارة المشروعات — كيان مصري يضم خبرات وتحالفات متعددة.",
    cover: "/images/about/hero-cover.jpg", // صورة خلفية عريضة
    pills: [
      { label: "إدارة المرافق" },
      { label: "النظافة والمكافحة" },
      { label: "التطوير العقاري" },
      { label: "الدعاية والتسويق" },
    ] as Pill[],
  },

  mission: {
    title: "مهمتنا",
    cover: "/images/about/mission.jpg",
    bullets: [
      "تقديم الخدمات المتكاملة للمرافق العامة والخاصة.",
      "إدارة وتشغيل المشاريع الاستثمارية والتجارية والرياضية.",
      "تصميم وإنتاج الحلول الرقمية والبرمجيات والتطبيقات.",
      "فريق عمل مختص ومؤهل يستخدم أحدث الوسائل والتكنولوجيا.",
    ],
  },

  vision: {
    title: "رؤيتنا",
    cover: "/images/about/vision.jpg",
    bullets: [
      "الريادة والتميز والانفراد في الاستثمار وإدارة المشروعات.",
      "مواكبة أحدث الوسائل والطرق بما يحقق توقعات عملائنا.",
      "المساهمة في تنمية المجتمع وخلق فرص عمل وتحقيق التنمية المستدامة.",
    ],
  },

  message: {
    title: "رسالتنا",
    cover: "/images/about/message.jpg",
    bullets: [
      "خدمات احترافية تتجاوز توقعات العملاء بأعلى جودة.",
      "معدات أداء حديثة وأسعار تنافسية تجعل من سافي الاختيار الأمثل.",
    ],
  },

  ceo: {
    highlight: "مؤسس الشركة ورئيس مجلس الإدارة والعضو المنتدب",
    name: "اللواء أ.ح د. حسام الدين محمد نجيده",
    photo: "/images/about/CEO.jpg",
    bio: [
      "شغل العديد من الوظائف القيادية بالقوات المسلحة وأدار كيانات اقتصادية وخدمية كبرى.",
      "خبرة تنفيذية على مستوى محافظات الجمهورية وإدارة نوادي وفنادق كبرى.",
      "إدارة مشروعات الخدمة الوطنية والتعامل مع شركات وتحالفات ضخمة.",
    ],
  },

  securityIntroImage: "/images/about/security-intro.jpg", // من صورة (خدمات الحراسة والأمن)

  // تحالفات وشركاء رئيسيون (لوجوهات)
  partners: [
    {
      name: "Rokill Pest Control",
      logo: "/images/about/partners/rokill-pcs.png",
    },
    {
      name: "Rokill Maintenance",
      logo: "/images/about/partners/rokill-maint.png",
    },
    { name: "Tarolltours", logo: "/images/about/partners/tarol.png" },
    { name: "SCOPE", logo: "/images/about/partners/scope.png" },
    { name: "GMA", logo: "/images/about/partners/gma.png" },
    { name: "TCL/راميكس", logo: "/images/about/partners/tcl.png" },
    { name: "Tarollrrtours", logo: "/images/about/partners/tarol.png" },
    {
      name: "سافي للصناعات التعدينية",
      logo: "/images/about/partners/safy-mining.png",
    },
  ] as Partner[],

  // أقسام عمل/قطاعات
  domains: [
    "الخدمات وإدارة المرافق والمنشآت",
    "التجارة والتوريدات العامة",
    "التطوير العقاري",
    "الدعاية والإعلان والتصميم والتطبيقات",
  ],

  // نقاط التميز
  advantages: [
    "مستوى أداء فندقي داخل منشأتك.",
    "الحرص على عامل الوقت بفاعلية تامة.",
    "تدريب مستمر لفريق العمل بأسلوب احترافي.",
    "تواصل فعال دائم مع العميل لضمان الرضا.",
    "معدات حديثة وطرق مبتكرة وسريعة.",
  ],

  // جاليريات (كل جاليري مستقل — أضف/احذف صورًا بحرية)
  galleries: [
    {
      title: "سابقة الأعمال وشركاؤنا",
      images: [
        "/images/about/clients-grid-1.jpg", // (الصورة ذات شعارات كثيرة)
        "/images/about/clients-exhibition-children.jpg", // (معرض الطفل/نظافة الفيلات)
        "/images/about/clients-grid-2.jpg",
        "/images/about/clients-hotels.jpg",
      ],
    },
    {
      title: "منشورات تعريفية",
      images: [
        "/images/about/intro-1.jpg",
        "/images/about/mission-vision.jpg",
        "/images/about/new-why-us.jpg",
      ],
    },
  ] as Gallery[],

  // تايملاين اختياري لو أردت إضافته لاحقًا
  timeline: [
    { year: "2019", title: "التأسيس", desc: "إطلاق كيان سافي وتحالفاته." },
    { year: "2021", title: "توسعات", desc: "التعاقد مع شركاء وخدمات جديدة." },
    {
      year: "2024",
      title: " شراكات و تحالفات مع كيانات كبرى ",
      desc: "تعزيز التطبيقات ولوحات التشغيل.",
    },
    {
      year: "2025",
      title: "مشاريع و أنشطه هامة",
      desc: "تعزيز التطبيقات ولوحات التشغيل.",
    },
  ] as TimelineItem[],
};
