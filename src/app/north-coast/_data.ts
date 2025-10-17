/** @format */
/*Replace image placeholders under /public/images/northcoast/... with your real files; each sub has its own img.*/
export type Sub = {
  key: string;
  title: string;
  img: string; // independent hero/thumb per sub
  bullets: string[];
};

export type NorthCoastCategory = {
  key: "villages" | "owners";
  title: string;
  subtitle: string;
  intro: string[];
  subs: Sub[];
};

export const NORTH_COAST_SECTIONS: NorthCoastCategory[] = [
  {
    key: "villages",
    title: "خدمات تُقدَّم للقرى السياحية",
    subtitle: "حلول تشغيل ميداني للمساحات العامة عالية الحركة",
    intro: [
      "تشغيل مرِن بجداول موسمية (صيف/أعياد) مع زيادات حسب الإشغال.",
      "تقارير مختصرة وصور قبل/بعد عند الطلب، مع نقاط تفتيش ثابتة.",
    ],
    subs: [
      {
        key: "beach",
        title: "نظافة الشواطئ",
        img: "/images/northcoast/village/shwaty2.jpg",
        bullets: [
          "جمع المخلفات يدويًا وبالمعدات الخفيفة على الشاطئ والممشى.",
          "غسل مناطق الرمال الرطبة حول الدُّشّات ونقاط الشطف.",
          "حاويات وفرز أوّلي ولافتات توعية.",
        ],
      },
      {
        key: "pools",
        title: "نظافة حمّامات السباحة",
        img: "/images/northcoast/village/bseen.jpg",
        bullets: [
          "غسيل أرضيات المحيط وإزالة الطحالب والانزلاقات.",
          "تنظيف الدُّشّات وحواجز الصرف وتعقيم السلالم/الدرابزين.",
          "تنسيق مع الصيانة لـ Backwash عند الطلب.",
        ],
      },
      {
        key: "roads",
        title: "نظافة الممرات والطرق الداخلية",
        img: "/images/northcoast/village/mmratwtorok.jpg",
        bullets: [
          "كنس وغسيل دوري بماكينات مناسبة للخامة.",
          "تلميع الدرابزين والحوائط منخفضة الارتفاع وإزالة البقع.",
          "تفريغ سلال المهملات ومسارات مرور ثابتة.",
        ],
      },
      {
        key: "entrances",
        title: "نظافة مداخل الفيلات والشاليهات",
        img: "/images/northcoast/village/mda5l.jpg",
        bullets: [
          "تنظيف المداخل والسلالم القصيرة ولوحات الأرقام.",
          "تعقيم مقابض الأبواب وأزرار المصاعد (إن وجدت).",
          "رشّ عطري خفيف حسب سياسة الموقع.",
        ],
      },
      {
        key: "pest",
        title: "مكافحة الحشرات والقوارض",
        img: "/images/northcoast/village/7shrat.jpg",
        bullets: [
          "معاينة نوع الإصابة (زواحف/زواحف طائرة/قوارض...).",
          "برنامج مرحلي ومعالجات موضعية وآمنة على البيئة.",
          "سجلات مواد معتمدة وتقارير متابعة.",
        ],
      },
      {
        key: "public-gardens",
        title: "نظافة وصيانة الحدائق العامة",
        img: "/images/northcoast/village/7da2k.jpg",
        bullets: [
          "قصّ نجيلة، تشذيب شجيرات، إزالة مخلفات خضراء.",
          "ريّ منظم ومسارات مشاة نظيفة.",
          "تعليمات سلامة حول المعدات وإبعاد الجمهور.",
        ],
      },
      {
        key: "security",
        title: "خدمة الأمن",
        img: "/images/northcoast/village/2amn.jpg",
        bullets: [
          "حماية الأرواح والممتلكات وتدريب الأفراد على الطوارئ.",
          "نقاط تفتيش، جولات مسارية، وتقارير حوادث.",
          "تكامل مع كاميرات وأنظمة دخول عند توافرها.",
        ],
      },
    ],
  },
  {
    key: "owners",
    title: "خدمات تُقدَّم لملاك الشاليهات والفيلات",
    subtitle: "حلول منزلية مرنة حسب تواجد الملاك",
    intro: [
      "حجز ومتابعة بالفواتير والصور عبر التطبيق فقط.",
      "فرق عمل ثابتة قدر الإمكان لتوحيد الجودة داخل الوحدة.",
    ],
    subs: [
      {
        key: "deep",
        title: "نظافة عميقة (بعد فتح الشاليه)",
        img: "/images/northcoast/owner/3ameka.jpg",
        bullets: [
          "تنظيف شامل للأركان المخفية والمعالجة ضد الروائح.",
          "Steam للأقمشة عند الحاجة وصور قبل/بعد اختيارية.",
        ],
      },
      {
        key: "routine",
        title: "نظافة معتادة (دوري وقت التواجد)",
        img: "/images/northcoast/owner/normal.jpg",
        bullets: [
          "ترتيب عام، مسح أسطح ظاهرة، كنس ومسح أرضيات.",
          "تعقيم نقاط اللمس وإخراج النفايات.",
        ],
      },
      {
        key: "post",
        title: "نظافة ما بعد التشطيب",
        img: "/images/northcoast/owner/aftertashteeb.jpg",
        bullets: [
          "إزالة بواقي مواد البناء دون التأثير على الدهانات.",
          "غسيل/تلميع رخام/بورسلين/باركيه وفق تعليمات كل خامة.",
        ],
      },
      {
        key: "owners-pest",
        title: "مكافحة الحشرات والقوارض",
        img: "/images/northcoast/owner/pest.jpg",
        bullets: [
          "تشخيص الإصابة، معالجة موضعية، وخطة متابعة آمنة.",
          "مواد معتمدة وتقارير مختصرة.",
        ],
      },
      {
        key: "private-garden",
        title: "صيانة الحدائق الخاصة",
        img: "/images/northcoast/owner/garden.jpg",
        bullets: [
          "قصّ وتسميد وريّ، استبدال شتلات عند الطلب.",
          "تنظيف ممشى وحدود الزراعة.",
        ],
      },
    ],
  },
];
