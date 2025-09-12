/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { slides } from "../data/heroSlides";
import { REVIEWS } from "./_data_customer_rev";

/* ------- small helpers ------- */
function Stars({ n }: { n: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <div
      className='inline-flex items-center gap-0.5'
      aria-label={`تقييم ${n} من 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < n ? "text-yellow-400" : "text-white/25"}
          aria-hidden>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({
  name,
  role,
  avatar,
  rating,
  comment,
  service,
  date,
  photos,
  attachment,
}: (typeof REVIEWS)[number]) {
  return (
    <article className='rounded-2xl border border-surface-2 bg-surface/45 p-4 md:p-5 shadow-sm hover:shadow-md transition text-right'>
      {/* Header */}
      <div className='flex items-center justify-end gap-3'>
        <div className='text-right'>
          <div className='font-semibold text-white'>{name}</div>
          <div className='text-[12px] text-white/60'>
            {role ? `${role} · ` : ""}
            {service || "—"}
            {date ? ` · ${date}` : ""}
          </div>
        </div>
        <Image
          src={avatar || "/images/reviews/blank-user.png"} // fallback to blank PP
          alt={name}
          width={44}
          height={44}
          className='rounded-full object-cover border border-white/10'
        />
      </div>

      {/* Stars */}
      <div className='mt-2 flex items-center justify-end'>
        <Stars n={rating} />
      </div>

      {/* Comment */}
      <p className='p mt-2'>{comment}</p>

      {/* Optional photos */}
      {photos && photos.length > 0 && (
        <div className='mt-3 grid grid-cols-3 gap-2'>
          {photos.map((p) => (
            <div
              key={p}
              className='relative aspect-square overflow-hidden rounded-lg'>
              <Image
                src={p}
                alt='صورة من العميل'
                fill
                className='object-cover'
              />
            </div>
          ))}
        </div>
      )}

      {/* Optional PDF attachment */}
      {attachment && (
        <div className='mt-4'>
          <a
            href={attachment}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-lg border border-primary bg-primary/20 px-3 py-1 text-sm text-primary hover:bg-primary/30 transition'>
            📎 تحميل المرفق
          </a>
        </div>
      )}
    </article>
  );
}

export default function Page() {
  const [idx, setIdx] = useState(0);
  const len = slides.length;

  // autoplay
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const next = useCallback(() => setIdx((p) => (p + 1) % len), [len]);
  const prev = useCallback(() => setIdx((p) => (p - 1 + len) % len), [len]);

  useEffect(() => {
    if (reduceMotion) return;
    timer.current = setInterval(next, 4000);
    return () => {
      if (timer.current) clearInterval(timer.current);
      timer.current = null;
    };
  }, [next, reduceMotion]);

  const bump = (fn: () => void) => {
    if (timer.current) clearInterval(timer.current);
    fn();
    if (!reduceMotion) timer.current = setInterval(next, 4000);
  };

  // drag / swipe for mobile
  const startX = useRef<number | null>(null);
  const onPointerDown = (e: React.PointerEvent) => (startX.current = e.clientX);
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current == null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 35) bump(() => (dx > 0 ? prev() : next()));
    startX.current = null;
  };

  // keyboard arrows
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") bump(next);
    if (e.key === "ArrowLeft") bump(prev);
  };

  return (
    <main id='main'>
      {/* HERO */}
      <section className='py-0 hero-bg'>
        <div className='bleed'>
          <div
            className='relative w-full overflow-hidden border border-surface-2'
            onKeyDown={onKeyDown}
            tabIndex={0}
            aria-roledescription='carousel'
            aria-label='الخدمات الرئيسية'>
            <div
              className='relative aspect-[16/9] sm:aspect-[16/7] lg:aspect-[16/6]'
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onMouseEnter={() => timer.current && clearInterval(timer.current)}
              onMouseLeave={() => {
                if (!reduceMotion) timer.current = setInterval(next, 4000);
              }}>
              {slides.map((s, i) => {
                const active = i === idx;
                return (
                  <Link
                    key={s.href}
                    href={s.href}
                    aria-label={s.label}
                    aria-hidden={!active}
                    tabIndex={active ? 0 : -1}
                    className={
                      "absolute inset-0 transition-opacity duration-700 " +
                      (active
                        ? "opacity-100 pointer-events-auto z-10"
                        : "opacity-0 pointer-events-none z-0")
                    }>
                    <Image
                      src={s.image}
                      alt={s.label}
                      fill
                      sizes='100vw'
                      priority={i === 0}
                      className='object-cover'
                    />
                    <div className='absolute inset-0 z-10 bg-gradient-to-t from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.25)] to-transparent' />
                    <div className='absolute inset-y-0 right-0 w-1/3 z-10 bg-gradient-to-l from-[rgba(0,0,0,0.25)] to-transparent pointer-events-none' />
                    <div className='absolute bottom-4 right-4 z-20 max-w-[92%] sm:max-w-md'>
                      <span className='inline-block rounded-xl bg-[color:rgb(23_29_43_/_0.7)] px-3 py-1 text-[13px] leading-none text-white/90 border border-white/10'>
                        خدمة سافي
                      </span>
                      <h2 className='mt-2 text-2xl sm:text-3xl font-extrabold text-white drop-shadow'>
                        {s.label}
                      </h2>
                      <div className='mt-3 flex flex-wrap gap-2 justify-end'>
                        <span className='rounded-lg border border-white/25 bg-white/10 px-3 py-1 text-xs text-white/85'>
                          انقر للانتقال
                        </span>
                        <span className='rounded-lg border border-white/25 bg-white/10 px-3 py-1 text-xs text-white/85'>
                          متوفر الآن
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}

              {/* arrows */}
              <button
                type='button'
                aria-label='الشريحة السابقة'
                onClick={() => bump(prev)}
                className='absolute right-2 top-1/2 -translate-y-1/2 z-30 grid h-10 w-10 place-items-center rounded-full bg-[color:rgb(23_29_43_/_0.72)] text-white text-lg hover:bg-[color:rgb(23_29_43_/_0.85)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 sm:h-11 sm:w-11'>
                ‹
              </button>
              <button
                type='button'
                aria-label='الشريحة التالية'
                onClick={() => bump(next)}
                className='absolute left-2 top-1/2 -translate-y-1/2 z-30 grid h-10 w-10 place-items-center rounded-full bg-[color:rgb(23_29_43_/_0.72)] text-white text-lg hover:bg-[color:rgb(23_29_43_/_0.85)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 sm:h-11 sm:w-11'>
                ›
              </button>

              {/* dots */}
              <div className='absolute left-1/2 -translate-x-1/2 bottom-3 z-30 flex items-center gap-2 rounded-full bg-[rgba(0,0,0,0.35)] px-2 py-1'>
                {slides.map((s, i) => (
                  <button
                    key={s.href}
                    aria-label={`انتقال إلى: ${s.label}`}
                    aria-current={idx === i ? "true" : "false"}
                    onClick={() => bump(() => setIdx(i))}
                    className={
                      "h-2.5 rounded-full transition-all " +
                      (idx === i ? "w-6 bg-primary" : "w-2.5 bg-white/55")
                    }
                    title={s.label}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO / VALUE PROPS */}
      <section className='container py-10 md:py-12'>
        <div className='text-right'>
          <h1 className='h1'>مرحباً بكم في سافي</h1>
          <p className='p mt-3'>
            اختَر الخدمة المناسبة من الأعلى. الموقع متجاوب بالكامل، واضح على
            الهاتف والكمبيوتر، ويقدّم وصولية محسّنة.
          </p>
        </div>

        <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {[
            { t: "فريق محترف", d: "كوادر مدرّبة ومعدات معتمدة." },
            { t: "مواعيد مرنة", d: "تنفيذ وفق جدولك اليومي/الأسبوعي." },
            { t: "جودة مضمونة", d: "قوائم متابعة وتقارير عند الطلب." },
            { t: "دعم سريع", d: "استجابة فورية للبلاغات العاجلة." },
          ].map((b) => (
            <div
              key={b.t}
              className='rounded-2xl border border-surface-2 bg-surface/45 p-4 text-right'>
              <h3 className='font-semibold text-white'>{b.t}</h3>
              <p className='p mt-1'>{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className='container py-10 md:py-12'>
        <div className='mb-4 text-right'>
          <h2 className='text-2xl md:text-3xl font-extrabold text-white tracking-tight'>
            آراء العملاء
          </h2>
          <p className='text-white/75 mt-1 text-sm'>
            آراء حقيقية تم تجميعها من عملائنا — يمكنك إضافة المزيد من المراجعات
            من ملف البيانات.
          </p>
        </div>

        <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
          {REVIEWS.map((rv) => (
            <ReviewCard key={rv.id} {...rv} />
          ))}
        </div>
      </section>

      {/* VIDEO (placeholder until you add a file) */}
      <section className='container pb-14'>
        <div className='rounded-3xl border border-surface-2 bg-surface/45 p-4 md:p-6'>
          <h3 className='text-right text-xl font-semibold text-white mb-3'>
            فيديو تعريفي
          </h3>
          <div className='relative aspect-video overflow-hidden rounded-2xl bg-black'>
            {/* TODO: ضع الفيديو هنا:
                1) ضع الملف في: /public/videos/intro.mp4
                2) أو غيّر src بالمسار الذي تريده
            */}
            <video
              className='h-full w-full'
              controls
              preload='metadata'
              poster='/images/heroSlides/images.png' /* صورة الغلاف */
            >
              <source src='/videos/intro.mp4' type='video/mp4' />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        </div>
      </section>
    </main>
  );
}
