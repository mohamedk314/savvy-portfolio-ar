/** @format */

/* ---------- Types ---------- */
export type Block = { title: string; items: string[] };

export type Section = {
  title: string;
  subtitle: string;
  bullets: string[];
  blocks: Block[];
};

export type TabKey = "overview" | "scope" | "services" | "faq";

export const SECURITY = {
  /* Shared hero and gallery for all sub-pages */
  hero: {
    title: "خدمة الأمن والحراسة",
    tagline: "تأمين شامل على مدار الساعة بحلول مرنة ومتكاملة",
    cover: "/images/security/89.jpg", // one big shared image
  },

  /* One gallery shared across all tabs. Add/remove freely. */
  gallery: [
    "/images/security/Security1.jpg",
    "/images/security/Security2.jpg",
    "/images/security/Security3.jpg",
  ],

  /* Tabs + icons */
  tabs: [
    {
      key: "overview",
      label: "نظرة عامة",
      icon: "/icons/overview.svg",
    },
    { key: "scope", label: "نطاق العمل", icon: "/icons/scope.svg" },
    {
      key: "services",
      label: "أنواع الخدمة",
      icon: "/icons/filter.svg",
    },
    { key: "faq", label: "الأسئلة الشائعة", icon: "/icons/question.svg" },
  ] as const,

  /* Section copy only (no covers, all use the shared hero + gallery) */
  sections: {
    overview: {
      title: "نظرة عامة",
      subtitle:
        "نقدم، مع شركائنا، حلول أمن وحراسة متكاملة بأفراد ومشرفين ومديري أمن مدرَّبين، مع أحدث التجهيزات والأنظمة وفق دراسة أمنية لكل موقع.",
      bullets: [
        "تشغيل وحراسة مستمرة 24/7",
        "كوادر أمنية معتمدة وإشراف ميداني",
        "مواءمة الحلول حسب الموقع والمخاطر",
      ],
      blocks: [
        {
          title: "التجهيزات",
          items: [
            "أجهزة اتصال لاسلكي",
            "سيارات ودراجات دورية",
            "كاميرات مراقبة",
            "بوابات إلكترونية",
          ],
        },
        {
          title: "آلية العمل",
          items: [
            "دراسة أمنية",
            "خطة تغطية نهارية/ليلية",
            "تقارير حضور ورقابة",
          ],
        },
      ],
    },
    scope: {
      title: "نطاق العمل",
      subtitle: "نخدم قطاعات متعددة مع مرونة التشغيل والتوسّع",
      bullets: [
        "الشركات والمصانع",
        "المؤسسات",
        "البنوك",
        "المولات",
        "الكمبوندات",
      ],
      blocks: [
        {
          title: "توسّع التغطية",
          items: ["بوابات ومحيط خارجي", "مناطق حساسة داخلية", "مواقف ومخازن"],
        },
        {
          title: "تشغيل مرن",
          items: ["ثابت + متحرك", "تغطية موسمية", "تدعيم فوري عند الحاجة"],
        },
      ],
    },
    services: {
      title: "أنواع الخدمة",
      subtitle: "خدمات ثابتة ومتحركة وتكامل نظم المراقبة",
      bullets: [
        "تأمين بوابات وأسوار",
        "خدمات متحركة بمحيط الموقع",
        "تغطية بالكاميرات حسب دراسة الموقع",
      ],
      blocks: [
        {
          title: "الموارد البشرية",
          items: ["أفراد حراسة", "مشرفون", "مديرو أمن"],
        },
        {
          title: "الأنظمة",
          items: [
            "كاميرات مراقبة",
            "بوابات إلكترونية كنقطة تفتيش",
            "أنظمة تسجيل وحفظ أدلة",
          ],
        },
      ],
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات مباشرة حسب سياسة التشغيل",
      bullets: [
        "هل يمكن تلبية أي عدد من الأفراد؟ نعم وفق الدراسة الأمنية.",
        "هل تكفي الكاميرات وحدها؟ نعم عند اعتماد خطة تغطية نهارية/ليلية مناسبة.",
        "تأمين مواقع الإنشاء؟ متاح مع أفراد وخدمات متحركة للمحيط.",
        "بوابات إلكترونية؟ نعم كنقطة تفتيش آمنة للأفراد والمتعلقات.",
        "كيف تُحدَّد التكلفة؟ حسب الموقع وتجهيزاته ومبيت الأفراد والتجهيزات الأمنية المطلوبة.",
      ],
      blocks: [
        {
          title: "ملاحظات تسعير",
          items: ["معاينة إلزامية", "عرض فني/مالي مفصّل", "مرونة عقود"],
        },
      ],
    },
  } as Record<TabKey, Section>,
} as const;
