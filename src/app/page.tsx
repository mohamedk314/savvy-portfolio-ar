/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { slides } from "../data/heroSlides";

export default function Page() {
  const [idx, setIdx] = useState(0);
  const len = slides.length;

  // autoplay
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const next = () => setIdx((p) => (p + 1) % len);
  const prev = () => setIdx((p) => (p - 1 + len) % len);

  useEffect(() => {
    if (reduceMotion) return; // هنا خلاص مش بيرجع حاجة، فهي void

    timer.current = setInterval(next, 4000);

    return () => {
      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null; // reset
      }
    };
  }, [next, reduceMotion]);
  

  const bump = (fn: () => void) => {
    if (timer.current) clearInterval(timer.current);
    fn();
    if (!reduceMotion) timer.current = setInterval(next, 4000);
  };

  // drag / swipe for mobile
  const startX = useRef<number | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current == null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 35) {
      bump(() => (dx > 0 ? prev() : next()));
    }
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
            {/* aspect: أعلى قراءة على الموبايل */}
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
                    {/* طبقة تحسين قراءة النص + تدرج جانبي خفيف */}
                    <div className='absolute inset-0 z-10 bg-gradient-to-t from-[rgba(0,0,0,0.55)] via-[rgba(0,0,0,0.25)] to-transparent' />
                    <div className='absolute inset-y-0 right-0 w-1/3 z-10 bg-gradient-to-l from-[rgba(0,0,0,0.25)] to-transparent pointer-events-none' />
                    {/* عنوان الشريحة وCTA */}
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

              {/* أزرار الأسهم — لمسة كبيرة للموبايل */}
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

              {/* نقاط المؤشر المرقّمة */}
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
    </main>
  );
}
