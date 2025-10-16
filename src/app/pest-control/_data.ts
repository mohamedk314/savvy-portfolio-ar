/** @format */

export type TKey = "overview" | "methods" | "services" | "warranty" | "faq";
type SectionBlock = { title: string; items: string[] };
type PestSection = {
  title: string;
  subtitle: string;
  bullets: string[];
  blocks: SectionBlock[];
};

export const PEST_DATA = {
  hero: {
    title: "خدمة مكافحة الحشرات والقوارض",
    tagline: "حلول آمنة معتمدة ونتائج مضمونة",
    cover: "/images/pestcontrol/pestcontrol.png", // shared feature image
  },

  // shared gallery (add/remove freely)
  gallery: [],

  // tabs with icons
  tabs: [
    { key: "overview", label: "نظرة عامة", icon: "/icons/overview.svg" },
    { key: "methods", label: "طرق المكافحة", icon: "/icons/methods.svg" },
    {
      key: "services",
      label: "أنواع الخدمات",
      icon: "/icons/services.svg",
    },
    { key: "warranty", label: "الضمان", icon: "/icons/warranty.svg" },
    { key: "faq", label: "الأسئلة الشائعة", icon: "/icons/question.svg" },
  ] as const,

  // per-tab copy only
  sections: {
    overview: {
      title: "نظرة عامة",
      subtitle:
        "نُكافح الحشرات الطائرة والزاحفة والقوارض بمبيدات معتمدة ومعدات حديثة عبر فريق مختص.",
      bullets: [
        "مواد معتمدة وصديقة للبيئة",
        "فريق متخصص ومدرّب",
        "خطط حسب شدة الإصابة",
      ],
      blocks: [
        { title: "نستهدف", items: ["حشرات طائرة", "حشرات زاحفة", "قوارض"] },
        {
          title: "اعتمادات",
          items: ["وزارة الصحة والزراعة", "مطابقة للمواصفات العالمية"],
        },
      ],
    },
    methods: {
      title: "طرق المكافحة",
      subtitle: "مزيج من الطُعوم والرش والتعفير والرصد الدوري حسب الحالة.",
      bullets: [
        "مواد بطيئة وسريعة وسائلة",
        "مصائد لاصقة ومصائد ميكانيكية",
        "طُعوم ليلية ومكافحة دورية",
      ],
      blocks: [
        {
          title: "معدات وتقنيات",
          items: ["مصائد ميكانيكية", "مواد لاصقة", "ضبط جداول زيارة"],
        },
        {
          title: "سلامة",
          items: ["أنظمة لا تتطلب مغادرة", "التزام بتعليمات العودة"],
        },
      ],
    },
    services: {
      title: "أنواع الخدمات",
      subtitle: "زيارات علاجية وبرامج وقاية شهرية أو ربع سنوية.",
      bullets: [
        "الزاحفة: صراصير ونمل وأبراص وسحالي وبراغيث",
        "القوارض والطائرة: فئران وذباب وبعوض وهاموش",
      ],
      blocks: [
        { title: "النطاق", items: ["سكني", "تجاري", "مواقع متعددة الأدوار"] },
        {
          title: "التسعير",
          items: ["نوع الآفة", "مساحة المكان", "عدد الأدوار"],
        },
      ],
    },
    warranty: {
      title: "الضمان",
      subtitle: "التزام بالنتائج مع متابعة ومعالجة أي ملاحظات بسرعة.",
      bullets: ["ضمان طوال التعاقد", "استجابة سريعة", "متابعة دورية"],
      blocks: [
        {
          title: "المتابعة",
          items: ["زيارات مجدولة", "تقارير حالة", "تعديل الخطة"],
        },
        { title: "الدعم", items: ["اتصال مباشر", "واتساب", "زيارة طارئة"] },
      ],
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات موجزة.",
      bullets: [
        "التكلفة: حسب نوع الآفة والمساحة وعدد الأدوار",
        "المواد آمنة ومصرّح بها",
        "لا يلزم مغادرة المكان في أغلب الحالات",
        "التكرار: زيارة مبدئية ثم شهري/ربع سنوي",
        "التميّز: فريق مختص وتقنيات حديثة وضمان",
      ],
      blocks: [
        {
          title: "نصائح",
          items: ["سد الشقوق", "تنظيف بقايا الطعام", "إدارة القمامة"],
        },
        { title: "الدعم", items: ["سجل المعالجات", "تذكير المتابعة"] },
      ],
    },
  } as Record<TKey, PestSection>,
} as const;
