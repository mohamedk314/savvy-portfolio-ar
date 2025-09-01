/** @format */

/* ---------- Types ---------- */
export type Block = { title: string; items: string[] };

export type GardenSection = {
  title: string;
  subtitle: string;
  cover: string;
  gallery: string[]; // replace each image independently
  bullets: string[];
  blocks: Block[];
};

export type GardenData = {
  overview: GardenSection;
  methods: GardenSection;
  services: GardenSection;
  prep: GardenSection;
  faq: GardenSection;
};

/* ---------- Data (swap images freely in /public/images/gardens/) ---------- */
export const GARDEN: GardenData = {
  overview: {
    title: "نظرة عامة",
    subtitle: "تنسيق حدائق شامل آمن للأسرة والبيئة",
    cover: "/images/gardens/overview-cover.jpg",
    gallery: [
      "/images/gardens/overview-01.jpg",
      "/images/gardens/overview-02.jpg",
      "/images/gardens/overview-03.jpg",
    ],
    bullets: [
      "توريد وتركيب أنظمة الري وفق المواصفات العالمية.",
      "تزويد وزراعة جميع أنواع الأشجار والشجيرات ونباتات الظل.",
      "تصميم لاندسكيب وممرات ونوافير وشلالات صغيرة.",
      "مراعاة تربة الموقع، الصرف، والتعريض الشمسي.",
    ],
    blocks: [
      {
        title: "أعمال شائعة",
        items: ["نجيل طبيعي/صناعي", "أحواض زهور", "حدود حجرية", "تغطيات أرضية"],
      },
      {
        title: "لماذا نحن؟",
        items: ["مهندسون مختصون", "معدات معتمدة", "جداول صيانة واضحة"],
      },
    ],
  },

  methods: {
    title: "طرق العمل",
    subtitle: "تنفيذ مدروس خطوة بخطوة",
    cover: "/images/gardens/methods-cover.jpg",
    gallery: [
      "/images/gardens/methods-01.jpg",
      "/images/gardens/methods-02.jpg",
      "/images/gardens/methods-03.jpg",
    ],
    bullets: [
      "رفع مساحي بسيط وتقييم التربة.",
      "تخطيط شبكة الري (تنقيط/رشاشات) مع نقاط الصيانة.",
      "تسوية التربة وإضافة محسنات عضوية.",
      "زراعة وانتشار نباتي وفق الكثافات المناسبة.",
    ],
    blocks: [
      {
        title: "سلامة التشغيل",
        items: ["فحص تسربات", "قواطع/محابس منطقة", "لوحات تحكم محمية"],
      },
      {
        title: "التسليم",
        items: ["تشغيل تجريبي", "كتيّب إرشادات بسيطة", "زيارة متابعة مجانية"],
      },
    ],
  },

  services: {
    title: "أنواع الخدمات",
    subtitle: "إنشاء جديد وصيانة دورية",
    cover: "/images/gardens/services-cover.jpg",
    gallery: [
      "/images/gardens/services-01.jpg",
      "/images/gardens/services-02.jpg",
      "/images/gardens/services-03.jpg",
    ],
    bullets: [
      "إنشاء حدائق من الصفر (تصميم + تنفيذ).",
      "تجديد حدائق قائمة وإعادة توزيع نباتي.",
      "شبكات ري جديدة أو تعديل القائم.",
      "صيانة شهرية: تقليم، تسميد، مكافحة آفات خفيفة.",
    ],
    blocks: [
      {
        title: "إنشاء جديد يشمل",
        items: [
          "تسوية وتربة زراعية",
          "شبكة ري كاملة",
          "نجيل + زهور + شجيرات",
          "ممرات بسيطة وإضاءة خارجية اختيارية",
        ],
      },
      {
        title: "الصيانة الدورية",
        items: [
          "قص وتقليم",
          "تنظيف أحواض",
          "فحص الري",
          "إضافة سماد وفق الموسم",
        ],
      },
    ],
  },

  prep: {
    title: "أسئلة ما قبل المعاينة",
    subtitle: "تساعدنا على تقدير العمل بدقة",
    cover: "/images/gardens/prep-cover.jpg",
    gallery: [
      "/images/gardens/prep-01.jpg",
      "/images/gardens/prep-02.jpg",
      "/images/gardens/prep-03.jpg",
    ],
    bullets: [
      "التكلفة تحدَّد بعد المعاينة الميدانية.",
      "الأسئلة التالية تسرّع التقدير وتحديد المعدات المناسبة.",
    ],
    blocks: [
      {
        title: "البيانات المطلوبة",
        items: [
          "1) تحديد مساحة الحديقة (100/200/300 م² أو أكثر).",
          "2) ما هي أنواع النباتات المزروعة؟ (أشجار/شجيرات/زرع).",
          "3) هل تحتاج إلى تركيب شبكة ري جديدة؟",
          "4) هل توجد صيانة للشبكة الحالية؟",
          "5) هل ترغب في تغيير المسطح كاملاً (نجيل)؟",
          "6) هل يلزم تسوية أو صيانة تربة للمسطح الأخضر؟",
          "7) هل تحتاج إلى تمديد كهرباء/إضاءة حدائق؟",
          "8) هل ترغب في زينة أو زراعة نباتات إضافية؟",
          "9) هل توجد نافورة/شلال بحاجة لصيانة؟",
          "10) هل هناك صيانة للإضاءة الحالية؟",
        ],
      },
    ],
  },

  faq: {
    title: "الأسئلة الشائعة",
    subtitle: "إجابات سريعة",
    cover: "/images/gardens/faq-cover.jpg",
    gallery: [
      "/images/gardens/faq-01.jpg",
      "/images/gardens/faq-02.jpg",
      "/images/gardens/faq-03.jpg",
    ],
    bullets: [
      "مدة التنفيذ: من يوم إلى أسبوعين حسب المساحة.",
      "الري التلقائي يوفّر ماءً ووقتاً على المدى الطويل.",
      "نضمن مطابقة النباتات للبيئة المحلية حسب الموسم.",
    ],
    blocks: [
      {
        title: "ملاحظات",
        items: ["تُحدَّد الأسعار بعد المعاينة", "ضمان فترة تجريبية للشبكة"],
      },
    ],
  },
};
