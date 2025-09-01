/** @format */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { pestcontrolImages as PC } from "@/app/pest-control/pestControlImages";

type TKey = "overview" | "methods" | "services" | "prep" | "faq";

const SECTIONS: Record<
  TKey,
  {
    title: string;
    subtitle: string;
    cover: string;
    gallery: readonly string[];
    bullets: string[];
    blocks: { title: string; items: string[] }[];
  }
> = {
  overview: {
    title: "نظرة عامة",
    subtitle: "مكافحة شاملة آمنة للأسرة والبيئة",
    cover: PC.sections.overview.cover,
    gallery: PC.sections.overview.gallery,
    bullets: [
      "فحص مبدئي لتحديد نوع الآفة ومساراتها.",
      "خطة علاج متعددة المراحل حسب شدة الإصابة.",
      "مواد معتمدة وجرعات مضبوطة حسب معايير السلامة.",
    ],
    blocks: [
      {
        title: "آفات شائعة",
        items: ["صراصير", "نمل", "بقّ الفراش", "قوارض", "ذباب/بعوض"],
      },
      {
        title: "لماذا سافي؟",
        items: ["فنيون معتمدون", "مواد أصلية", "متابعة ما بعد المعالجة"],
      },
    ],
  },

  methods: {
    title: "طرق المكافحة",
    subtitle: "استهداف دقيق وتقنيات آمنة",
    cover: PC.sections.methods.cover,
    gallery: PC.sections.methods.gallery,
    bullets: [
      "رشّ موضعي داخل/خارج.",
      "طعم جِلّ للصراصير والنمل.",
      "مصائد لاصقة ورصد دوري.",
      "تعفير في المواقع المغلقة عند الحاجة.",
    ],
    blocks: [
      {
        title: "معدات ومواد",
        items: [
          "رشاشات ضغط منخفض ومتوسط.",
          "جلّات طُعوم عالية الفاعلية.",
          "ضباب بارد للمناطق الكبيرة عند الطلب.",
        ],
      },
      {
        title: "اشتراطات السلامة",
        items: [
          "تهوية كافية",
          "إبعاد الأطفال والحيوانات مؤقتاً",
          "عودة آمنة بعد المدة المحددة",
        ],
      },
    ],
  },

  services: {
    title: "أنواع الخدمات",
    subtitle: "زيارة واحدة أو برنامج دوري",
    cover: PC.sections.services.cover,
    gallery: PC.sections.services.gallery,
    bullets: [
      "زيارة علاجية لمرة واحدة للحالات البسيطة.",
      "برنامج شهري/ربع سنوي للوقاية.",
      "تغطية منشآت سكنية وتجارية.",
    ],
    blocks: [
      {
        title: "يشمل",
        items: [
          "فحص نقاط الدخول",
          "معالجة المطابخ والحمامات",
          "حواشي الأبواب والفتحات",
        ],
      },
      {
        title: "تقارير",
        items: ["تقرير قبل/بعد عند الطلب", "توصيات وقائية مكتوبة"],
      },
    ],
  },

  prep: {
    title: "التحضير والبرنامج",
    subtitle: "خطوات بسيطة لنتيجة أفضل",
    cover: PC.sections.prep.cover,
    gallery: PC.sections.prep.gallery,
    bullets: [
      "إغلاق الأطعمة والأدوات المكشوفة قبل الزيارة.",
      "إبعاد الأطفال والحيوانات الأليفة خلال المعالجة.",
      "اتباع إرشادات العودة والتهوية.",
    ],
    blocks: [
      {
        title: "بعد الزيارة",
        items: [
          "عدم مسح المناطق المعالجة فوراً",
          "مراقبة الحركة 48 ساعة",
          "إبلاغنا في حال ملاحظة نشطة",
        ],
      },
      {
        title: "برنامج المتابعة",
        items: ["زيارة إعادة إن لزم", "وقاية دورية لمنع عودة الإصابة"],
      },
    ],
  },

  faq: {
    title: "أسئلة شائعة",
    subtitle: "إجابات مختصرة وواضحة",
    cover: PC.sections.faq.cover,
    gallery: PC.sections.faq.gallery,
    bullets: [
      "هل الروائح مزعجة؟ عادة خفيفة وتزول مع التهوية.",
      "متى نعود للمنزل؟ غالباً بعد 2–4 ساعات حسب التعليمات.",
      "هل المواد آمنة؟ نعم عند الالتزام بالجرعات والإرشادات.",
    ],
    blocks: [
      {
        title: "نصائح",
        items: ["سد الشقوق", "تنظيف بقايا الطعام", "إدارة القمامة بإحكام"],
      },
      {
        title: "الدعم",
        items: ["دعم عبر التطبيق", "تذكير مواعيد المتابعة", "سجل المعالجات"],
      },
    ],
  },
};

function BadgeLinks() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-3'>
      <a
        href='/download/ios'
        className='flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white hover:opacity-90'>
        <Image src='/icons/apple.svg' alt='App Store' width={18} height={18} />
        <span className='text-sm'>تحميل على App Store</span>
      </a>
      <a
        href='/download/android'
        className='flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:opacity-90'>
        <Image
          src='/icons/android.svg'
          alt='Google Play'
          width={18}
          height={18}
        />
        <span className='text-sm'>تنزيل من Google Play</span>
      </a>
    </div>
  );
}

function Segmented<T extends string>({
  tabs,
  value,
  onChange,
}: {
  tabs: { key: T; label: string }[];
  value: T;
  onChange: (v: T) => void;
}) {
  const sentry = useRef<HTMLDivElement | null>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting), {
      threshold: 1,
    });
    if (sentry.current) io.observe(sentry.current);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentry} aria-hidden className='h-2' />
      <div
        className={`sticky top-14 md:top-16 z-30 transition ${
          stuck ? "backdrop-blur bg-[color:rgb(15_20_32_/_0.55)] shadow-lg" : ""
        }`}>
        <div className='container py-3'>
          <div
            role='tablist'
            className='mx-auto inline-flex flex-wrap justify-center gap-2 rounded-2xl border border-surface-2 bg-surface/40 p-1'>
            {tabs.map((t) => {
              const active = value === t.key;
              return (
                <button
                  key={t.key}
                  role='tab'
                  aria-selected={active}
                  onClick={() => onChange(t.key)}
                  className={
                    "rounded-xl px-4 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 " +
                    (active
                      ? "bg-primary/25 text-primary border border-primary shadow-sm"
                      : "text-white/80 hover:text-white hover:bg-surface-2")
                  }>
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className='rounded-2xl border border-surface-2 bg-surface/45 p-5 md:p-6'>
      <h3 className='mb-2 font-semibold text-white'>{title}</h3>
      {children}
    </div>
  );
}

export default function PestControlPage() {
  const [tab, setTab] = useState<TKey>("overview");
  const current = SECTIONS[tab];

  return (
    <main className='container py-10 md:py-12 space-y-8'>
      {/* HERO + store links في الأعلى */}
      <header className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-14 md:py-16 text-center shadow-xl'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-white tracking-tight'>
          خدمة مكافحة الحشرات
        </h1>
        <p className='mt-3 text-white/90'>
          حلول آمنة وفعالة مع متابعة ذكية عبر التطبيق
        </p>
        <div className='mt-6'>
          <BadgeLinks />
        </div>
      </header>

      {/* tabs */}
      <Segmented
        tabs={[
          { key: "overview", label: "نظرة عامة" },
          { key: "methods", label: "طرق المكافحة" },
          { key: "services", label: "أنواع الخدمات" },
          { key: "prep", label: "التحضير والبرنامج" },
          { key: "faq", label: "أسئلة شائعة" },
        ]}
        value={tab}
        onChange={setTab}
      />

      {/* section block */}
      <section className='rounded-3xl border border-surface-2 bg-surface-2/60 overflow-hidden'>
        <div className='grid md:grid-cols-2'>
          {/* image */}
          <div className='relative aspect-[16/10] md:aspect-auto md:min-h-[420px]'>
            <Image
              src={current.cover}
              alt={current.title}
              fill
              sizes='(min-width:1024px) 50vw, 100vw'
              className='object-cover'
              priority
            />
          </div>

          {/* copy */}
          <div className='p-6 md:p-8 text-right'>
            <h2 className='text-2xl font-bold text-white'>{current.title}</h2>
            <p className='mt-1 text-white/70'>{current.subtitle}</p>

            <ul className='mt-4 list-disc pr-5 text-sm md:text-base text-white/85 space-y-1.5'>
              {current.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className='mt-6 grid gap-4 md:grid-cols-2'>
              {current.blocks.map((blk) => (
                <Card key={blk.title} title={blk.title}>
                  <ul className='list-disc pr-5 text-sm text-white/80 space-y-1.5'>
                    {blk.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* gallery الخاصة بكل قسم */}
      <section className='space-y-3'>
        <h3 className='text-xl font-bold text-right'>معرض الصور</h3>
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
          {current.gallery.map((src) => (
            <div
              key={src}
              className='relative aspect-[4/3] overflow-hidden rounded-xl border border-surface-2 bg-surface/40'>
              <Image
                src={src}
                alt={current.title}
                fill
                sizes='(min-width:1024px) 33vw, 50vw'
                className='object-cover'
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
