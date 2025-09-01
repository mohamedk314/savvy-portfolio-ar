/** @format */

// لكل قسم صورة رئيسية + جاليري مستقل
export const pestcontrolImages = {
  hero: "/images/pestcontrol/hero.jpg", // غلاف عام للصفحة

  sections: {
    overview: {
      cover: "/images/pestcontrol/overview.jpg",
      gallery: [
        "/images/pestcontrol/overview-01.jpg",
        "/images/pestcontrol/overview-02.jpg",
        "/images/pestcontrol/overview-03.jpg",
      ],
    },
    methods: {
      cover: "/images/pestcontrol/methods.jpg",
      gallery: [
        "/images/pestcontrol/methods-01.jpg",
        "/images/pestcontrol/methods-02.jpg",
        "/images/pestcontrol/methods-03.jpg",
      ],
    },
    services: {
      cover: "/images/pestcontrol/services.jpg",
      gallery: [
        "/images/pestcontrol/services-01.jpg",
        "/images/pestcontrol/services-02.jpg",
        "/images/pestcontrol/services-03.jpg",
      ],
    },
    prep: {
      cover: "/images/pestcontrol/prep.jpg",
      gallery: [
        "/images/heroSlides/images.png",
        "/images/pestcontrol/prep-02.jpg",
        "/images/pestcontrol/prep-03.jpg",
      ],
    },
    faq: {
      cover: "/images/pestcontrol/faq.jpg",
      gallery: [
        "/images/pestcontrol/faq-01.jpg",
        "/images/pestcontrol/faq-02.jpg",
        "/images/pestcontrol/faq-03.jpg",
        "/images/pestcontrol/faq-03.jpg",
      ],
    },
  },
} as const;

/* ملاحظة:
  لو لسه عندك صورة واحدة (images.png) استخدمها مؤقتاً في كل المسارات فوق.
  بعد ما تضيف صورك الحقيقية غيّر كل مسار بدون لمس أي كود في الصفحة.
  */
