/** @format */

/* ---------- Types ---------- */
export type Block = { title: string; items: string[] };

export type SecSection = {
  title: string;
  subtitle: string;
  cover: string;
  gallery: string[];
  bullets: string[];
  blocks: Block[];
};

export type SecurityData = {
  overview: SecSection;
  scope: SecSection;
  services: SecSection;
  faq: SecSection;
};

/* ---------- Data (swap images under /public/images/security/) ---------- */
export const SECURITY: SecurityData = {
  /* ————— نظرة عامة ————— */
  overview: {
    title: "خدمة الأمن والحراسة",
    subtitle:
      "نقدم، مع شركائنا، حلول أمن وحراسة متكاملة توفر أفراداً ومشرفين ومديري أمن متخصصين ومدرَّبين بأعلى كفاءة، مع أحدث الأجهزة اللاسلكية والسيارات والدراجات، وأدوات الردع وكاميرات المراقبة والبوابات الإلكترونية. تُضبط الحلول وفق احتياجات ومتطلبات كل عميل لمنع المخاطر وتخفيفها على مدار 24 ساعة.",
    cover: "/images/security/overview-cover.jpg",
    gallery: [
      "/images/security/overview-01.jpg",
      "/images/security/overview-02.jpg",
      "/images/security/overview-03.jpg",
    ],
    bullets: [
      "تشغيل وحراسة مستمرة 24/7.",
      "كوادر أمنية معتمدة وإشراف ميداني.",
      "مواءمة الحلول حسب الموقع والمخاطر.",
    ],
    blocks: [
      {
        title: "التجهيزات",
        items: [
          "أجهزة اتصال لاسلكي",
          "سيارات ودراجات دورية",
          "كاميرات مراقبة",
          "بوابات إلكترونية وأدوات تفتيش",
        ],
      },
      {
        title: "آلية العمل",
        items: [
          "دراسة أمنية للموقع",
          "خطة تغطية نهارية/ليلية",
          "تقارير وحضور رقمي",
        ],
      },
    ],
  },

  /* ————— نطاق العمل ————— */
  scope: {
    title: "نطاق العمل",
    subtitle: "نخدم قطاعات متعددة حسب متطلبات كل موقع",
    cover: "/images/security/scope-cover.jpg",
    gallery: [
      "/images/security/scope-01.jpg",
      "/images/security/scope-02.jpg",
      "/images/security/scope-03.jpg",
    ],
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
        items: [
          "ثابت + متحرك",
          "تغطية موسعة بالمواسم",
          "تدعيم فوري عند الحاجة",
        ],
      },
    ],
  },

  /* ————— أنواع الخدمة ————— */
  services: {
    title: "أنواع الخدمة",
    subtitle: "خدمات ثابتة ومتحركة وتكامل مراقبة",
    cover: "/images/security/services-cover.jpg",
    gallery: [
      "/images/security/services-01.jpg",
      "/images/security/services-02.jpg",
      "/images/security/services-03.jpg",
    ],
    bullets: [
      "خدمات تأمين بوابات وأسوار.",
      "خدمات متحركة في محيط الموقع.",
      "تغطية نطاق العمل بكاميرات مراقبة.",
    ],
    blocks: [
      {
        title: "الموارد البشرية",
        items: ["أفراد حراسة", "مشرفون", "مديرو أمن"],
      },
      {
        title: "الأنظمة",
        items: [
          "كاميرات مراقبة حسب دراسة الموقع",
          "بوابات إلكترونية كنقطة تفتيش آمنة",
          "نُظُم تسجيل وحفظ أدلة",
        ],
      },
    ],
  },

  /* ————— الأسئلة الشائعة ————— */
  faq: {
    title: "الأسئلة الشائعة",
    subtitle: "إجابات مباشرة حسب سياسة التشغيل",
    cover: "/images/security/faq-cover.jpg",
    gallery: [
      "/images/security/faq-01.jpg",
      "/images/security/faq-02.jpg",
      "/images/security/faq-03.jpg",
    ],
    bullets: [
      "1) هل يمكن تلبية المطالب بأي عدد من الأفراد؟ نعم، وفقاً للمُتطلبات والدراسة الأمنية للموقع.",
      "2) هل يمكن وضع نظام مراقبة بالكاميرات فقط؟ نعم، وفق دراسة تغطي الموقع نهاراً وليلاً وبأحدث الكاميرات.",
      "3) هل يمكن تأمين مواقع الإنشاء بأفراد أمن؟ نعم، بخدمات أمنية للأفراد مع إمكانية استخدام الدراجات والسيارات لتأمين محيط الموقع.",
      "4) هل يمكن وضع نظام مراقبة باستخدام البوابات الإلكترونية؟ نعم، نوفر بوابات إلكترونية لوضع نقطة تفتيش آمنة للأفراد والمتعلقات.",
      "5) كيف تُحدَّد تكلفة الخدمة؟ تختلف حسب الموقع، تجهيزاته، مدى توافر أماكن لمبيت الأفراد، وحسب التجهيزات الأمنية المطلوبة وفق اللحظة الأمنية للموقع.",
    ],
    blocks: [
      {
        title: "ملاحظات تسعير",
        items: [
          "زيارة ومعاينة إلزامية",
          "عرض فني ومالي مفصّل",
          "مرونة في العقود",
        ],
      },
    ],
  },
};
