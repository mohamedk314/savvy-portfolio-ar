/** @format */

export type TKey = "overview" | "methods" | "services" | "warranty" | "faq";
type SectionBlock = { title: string; items: string[] };
type PestSection = {
  cover: string;
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
      cover: "/images/pestcontrol/pest1.jpg",
    },
    methods: {
      title: "طرق المكافحة",
      subtitle:
        "نستخدم مزيج من المركبات الكيميائيه و نظام التعفير و الرصد الدوري حسب الحاله",
      bullets: [
        "نستخدم مواد بطيئة وسريعة وسائلة",
        " استخدام طرق مكافحة يدوية وميكانيكية  ",
        "طُعوم ليلية ومكافحة دورية",
      ],
      blocks: [
        {
          title: "معدات وتقنيات المستخدمة",
          items: ["مصائد ميكانيكية", "مواد لاصقة", "ضبط جداول زيارة"],
        },
        {
          title: "السلامة",
          items: [" استخدام أنظمة لا تستدعي مغادرة المكان  "],
        },
      ],
      cover: "/images/pestcontrol/pest2.jpg",
    },
    services: {
      title: "أنواع الخدمات",
      subtitle: "يتم عمل زيارات علاجية لخدمات:",
      bullets: [
        "الزاحفة: صراصير ونمل وأبراص وسحالي وبراغيث",
        "القوارض و الحشرات الطائرة: فئران وذباب وبعوض وهاموش",
      ],
      blocks: [
        { title: "النطاق", items: ["سكني", "تجاري", "مواقع متعددة الأدوار"] },
      ],
      cover: "/images/pestcontrol/pest3.jpg",
    },
    warranty: {
      title: "الضمان",
      subtitle: "التزام بالنتائج مع متابعة ومعالجة أي ملاحظات بسرعة.",
      bullets: ["ضمان للخدمه طوال التعاقد", "استجابه سريعه للطوارئ "],
      blocks: [
        {
          title: "المتابعة",
          items: [
            "زيارات مجدوله للعميل  ",
            "تقرير حالة بالمعالجة المطلوبه ",
            "تعديل خطة المتابعة بشكل مرن لتتناسب مع الحالة لدى العميل ",
          ],
        },
        { title: "الدعم", items: ["اتصال مباشر", "واتساب", "زيارة طارئة"] },
      ],
      cover: "/images/pestcontrol/pest4.jpg",
    },
    faq: {
      title: "الأسئلة الشائعة",
      subtitle: "",
      bullets: [],
      blocks: [
        {
          title: "1. كيف يتم تحديد تكلفة الخدمة؟",
          items: [
            "يتم تحديد السعر بناءً على نوع الحشرات أو القوارض، مساحة المكان، وعدد الأدوار.",
          ],
        },
        {
          title: "2. هل تستخدم سافي مبيدات آمنة؟",
          items: [
            "نعم، جميع المواد المستخدمة مصرّح بها من وزارة الصحة وصديقة للبيئة وغير ضارة بالبشر أو الحيوانات الأليفة.",
          ],
        },
        {
          title: "3. هل يمكن تنفيذ الخدمة دون مغادرة المكان؟",
          items: [
            "نعم، تتم عمليات المكافحة في وجود العميل باستخدام أنظمة آمنة لا تتطلب مغادرة المكان.",
          ],
        },
        {
          title: "4. كم مرة يجب تكرار المكافحة؟",
          items: [
            "يعتمد ذلك على نوع الإصابة غالباً ما يُوصى بزيارة مبدئية، ثم زيارات متابعة شهرية أو ربع سنوية.",
          ],
        },
        {
          title: "5. ما الذي يميز سافي عن غيرها؟",
          items: [
            "فريق متخصص ومدرّب.",
            "تقنيات حديثة ومبيدات معتمدة صديقة للبيئة.",
            "ضمان حقيقي للنتائج وسرعة الاستجابة.",
          ],
        },
      ],
      cover: "/images/pestcontrol/pest5.jpg",
    },
  } as Record<TKey, PestSection>,
} as const;
