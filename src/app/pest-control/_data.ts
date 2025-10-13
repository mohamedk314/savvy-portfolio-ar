/** @format */

export type TKey = "overview" | "methods" | "services" | "warranty" | "faq";

type SectionBlock = { title: string; items: string[] };
export type PestSection = {
  title: string;
  subtitle: string;
  cover: string;
  gallery: readonly string[];
  bullets: string[];
  blocks: SectionBlock[];
};

export const PEST_DATA = {
  hero: {
    title: "خدمة مكافحة الحشرات والقوارض",
    tagline: "حلول آمنة معتمدة ونتائج مضمونة",
    cover: "/images/pestcontrol/hero.jpg",
  },

  tabs: [
    { key: "overview", label: "نظرة عامة" },
    { key: "methods", label: "طرق المكافحة" },
    { key: "services", label: "أنواع الخدمات" },
    { key: "warranty", label: "الضمان" },
    { key: "faq", label: "الأسئلة الشائعة" },
  ] as const,

  sections: {
    overview: {
      title: "نظرة عامة",
      subtitle:
        "نقوم بمكافحة جميع أنواع الحشرات الطائرة والزاحفة والقوارض باستخدام أحدث ما وصل إليه العلم من أجهزة ومبيدات مطابقة للمواصفات العالمية ومصرح بها من وزارة الصحة والزراعة، وصديقة للبيئة وغير ضارة تماماً على الإنسان والحيوانات الأليفة، وذلك من خلال فريق متخصص وأصحاب خبرة في مجال المكافحة.",
      cover: "/images/testsize/grid_1920x1200_16x10.png",
      gallery: [
        "/images/pestcontrol/overview-01.jpg",
        "/images/pestcontrol/overview-02.jpg",
        "/images/pestcontrol/overview-03.jpg",
      ],
      bullets: [
        "مبيدات معتمدة وصديقة للبيئة.",
        "فريق متخصص ومدرّب.",
        "خطط علاج مناسبة لنوع الإصابة.",
      ],
      blocks: [
        {
          title: "نستهدف",
          items: ["حشرات طائرة", "حشرات زاحفة", "قوارض"],
        },
        {
          title: "اعتمادات",
          items: [
            "مصرح بها من وزارة الصحة والزراعة",
            "مطابقة للمواصفات العالمية",
          ],
        },
      ],
    },

    methods: {
      title: "طرق المكافحة",
      subtitle: "أنظمة آمنة للقضاء على مختلف الآفات",
      cover: "/images/testsize/grid_1920x1200_16x10.png",
      gallery: [
        "/images/pestcontrol/methods-01.jpg",
        "/images/pestcontrol/methods-02.jpg",
        "/images/pestcontrol/methods-03.jpg",
      ],
      bullets: [
        "استخدام المركبات الكيميائية والسموم البطيئة والسريعة والسائلة للقضاء على مختلف أنواع الحشرات.",
        "استخدام المواد اللاصقة لصيد القوارض.",
        "استخدام نظام التغيير داخل مستعمرات الفئران والمصائد الميكانيكية.",
        "طُعوم في الأماكن الليلية لمكافحة الزواحف.",
        "طُعوم داخل بيض صغير الحجم لمكافحة الثعابين.",
        "مكافحة النمل بجميع أنواعه والحشرات الطائرة وفق جداول مصممة لذلك وبشكل دوري.",
      ],
      blocks: [
        {
          title: "معدات وتقنيات",
          items: ["مصائد ميكانيكية", "مواد لاصقة", "برامج دورية للمواقع"],
        },
        {
          title: "سلامة",
          items: [
            "أنظمة آمنة لا تتطلب مغادرة المكان",
            "التزام بإرشادات الاستخدام",
          ],
        },
      ],
    },

    services: {
      title: "أنواع خدمات المكافحة",
      subtitle: "برامج شاملة للحشرات والقوارض",
      cover: "/images/testsize/grid_1920x1200_16x10.png",
      gallery: [
        "/images/pestcontrol/services-01.jpg",
        "/images/pestcontrol/services-02.jpg",
        "/images/pestcontrol/services-03.jpg",
      ],
      bullets: [
        "مكافحة الحشرات الزاحفة: الثعابين، الأبراص، السحالي، الصراصير، النمل، البراغيث.",
        "مكافحة القوارض والحشرات الطائرة: الفئران، الناموس، الهاموش، الذباب.",
      ],
      blocks: [
        {
          title: "نطاق الخدمة",
          items: ["سكني", "تجاري", "مواقع متعددة الأدوار"],
        },
        {
          title: "التسعير يعتمد على",
          items: ["نوع الحشرات أو القوارض", "مساحة المكان", "عدد الأدوار"],
        },
      ],
    },

    warranty: {
      title: "الضمان",
      subtitle: "التزام كامل بالنتائج والمتابعة",
      cover: "/images/testsize/grid_1920x1200_16x10.png",
      gallery: [
        "/images/pestcontrol/faq-01.jpg",
        "/images/pestcontrol/faq-02.jpg",
      ],
      bullets: [
        "ضمان عدم وجود آفات طوال فترة التعاقد.",
        "سرعة تلقي أي شكوى ومعالجتها سريعاً.",
        "متابعة دورية للتأكد من استمرارية النتائج.",
      ],
      blocks: [
        {
          title: "آلية المتابعة",
          items: ["زيارات مجدولة", "تقارير حالة", "تعديل الخطة عند الحاجة"],
        },
        {
          title: "قنوات الدعم",
          items: ["اتصال مباشر", "رسائل واتساب", "زيارة فنية طارئة"],
        },
      ],
    },

    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات مباشرة",
      cover: "/images/testsize/grid_1920x1200_16x10.png",
      gallery: [
        "/images/pestcontrol/faq-01.jpg",
        "/images/pestcontrol/faq-02.jpg",
        "/images/pestcontrol/faq-03.jpg",
      ],
      bullets: [
        "كيف يتم تحديد تكلفة الخدمة؟ السعر حسب نوع الحشرات أو القوارض، مساحة المكان، وعدد الأدوار.",
        "هل تستخدم سافي مبيدات آمنة؟ نعم، جميع المواد مصرّح بها من وزارة الصحة وصديقة للبيئة وغير ضارة بالبشر أو الحيوانات الأليفة.",
        "هل يمكن التنفيذ دون مغادرة المكان؟ نعم، نستخدم أنظمة آمنة لا تتطلب مغادرة المكان.",
        "كم مرة يجب تكرار المكافحة؟ حسب نوع الإصابة؛ عادة زيارة مبدئية ثم متابعات شهرية أو ربع سنوية.",
        "ما الذي يميز سافي؟ فريق متخصص ومدرّب، تقنيات حديثة، ضمان حقيقي وسرعة استجابة.",
      ],
      blocks: [
        {
          title: "مميزات سافي",
          items: [
            "فريق متخصص ومدرّب",
            "تقنيات حديثة ومبيدات معتمدة",
            "ضمان نتائج وسرعة الاستجابة",
          ],
        },
        {
          title: "التنفيذ",
          items: [
            "لا يتطلب مغادرة المكان",
            "أنظمة آمنة",
            "خطط حسب نوع الإصابة",
          ],
        },
      ],
    },
  } satisfies Record<TKey, PestSection>,
} as const;
