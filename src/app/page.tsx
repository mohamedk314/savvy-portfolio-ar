/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { slides } from "../data/heroSlides";
import { REVIEWS, SHOWCASE } from "./_data_customer_rev";

const SLIDE_MS = 7000;

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
          src={avatar || "/images/reviews/blank-user.png"}
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

/* ------- reviews carousel (3 at a time, auto every 6s) ------- */
const PAGE_SIZE = 3;
const INTERVAL_MS = 4000;

function ReviewsCarousel() {
  const totalPages = Math.ceil(REVIEWS.length / PAGE_SIZE) || 1;
  const [page, setPage] = useState(0);
  const [visible, setVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const pageItems = useMemo(() => {
    const start = page * PAGE_SIZE;
    return REVIEWS.slice(start, start + PAGE_SIZE);
  }, [page]);

  const go = useCallback(
    (to: number) => {
      setVisible(false);
      setTimeout(() => {
        setPage(((to % totalPages) + totalPages) % totalPages);
        setVisible(true);
      }, 160);
    },
    [totalPages]
  );

  useEffect(() => {
    if (totalPages <= 1) return;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    timerRef.current && clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go(page + 1), INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = null;
    };
  }, [page, go, totalPages]);

  return (
    <section className='space-y-4'>
      <div
        className={[
          "grid gap-4 sm:grid-cols-2 xl:grid-cols-3",
          "transition-opacity duration-200",
          visible ? "opacity-100" : "opacity-0",
        ].join(" ")}
        onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
        onMouseLeave={() => {
          if (totalPages > 1)
            timerRef.current = setInterval(() => go(page + 1), INTERVAL_MS);
        }}>
        {pageItems.map((rv) => (
          <ReviewCard key={rv.id} {...rv} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className='flex items-center justify-between'>
          <button
            type='button'
            onClick={() => go(page - 1)}
            className='rounded-xl border px-3 py-1.5 text-sm hover:bg-white/5'
            aria-label='السابق'>
            ‹ السابق
          </button>

          <div className='inline-flex items-center gap-1'>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`انتقال إلى صفحة ${i + 1}`}
                className={[
                  "h-2.5 w-2.5 rounded-full",
                  i === page ? "bg-current" : "bg-current/25",
                ].join(" ")}
              />
            ))}
          </div>

          <button
            type='button'
            onClick={() => go(page + 1)}
            className='rounded-xl border px-3 py-1.5 text-sm hover:bg-white/5'
            aria-label='التالي'>
            التالي ›
          </button>
        </div>
      )}
    </section>
  );
}

export default function Page() {
  const [idx, setIdx] = useState(0);
  const len = slides.length;

  const [scIdx, setScIdx] = useState(0);
  const sc = SHOWCASE[scIdx] ?? SHOWCASE[0];

  // autoplay
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const next = useCallback(() => setIdx((p) => (p + 1) % len), [len]);
  const prev = useCallback(() => setIdx((p) => (p - 1 + len) % len), [len]);

  useEffect(() => {
    if (reduceMotion) return;
    timer.current = setInterval(next, SLIDE_MS);
    return () => {
      if (timer.current) clearInterval(timer.current);
      timer.current = null;
    };
  }, [next, reduceMotion]);

  const bump = (fn: () => void) => {
    if (timer.current) clearInterval(timer.current);
    fn();
    if (!reduceMotion) timer.current = setInterval(next, SLIDE_MS);
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
                if (!reduceMotion) timer.current = setInterval(next, SLIDE_MS);
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
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold' style={{ color: "#B1B610" }}>
            مرحبا بكم في ساڤي
          </h1>
        </div>
        <div>
          <ul className='list-disc list-inside mt-3 space-y-1 text-right inline-block'>
            نقدّم لكم خدمات متكاملة تلبي احتياجاتكم:
            <li>نظافة</li>
            <li>أمن</li>
            <li>صيانة</li>
            <li>تنسيق حدائق</li>
            <li>مكافحة الحشرات و القوارض</li>
            <li>خدمات أخرى</li>
          </ul>
        </div>

        <section className='container pb-14'>
          <div className='rounded-3xl border border-surface-2 bg-surface/45 p-4 md:p-6'>
            <h3 className='text-right text-xl font-semibold text-white mb-3'>
              {" "}
              فيديو تعريفي لخدماتنا
            </h3>
            <div className='relative aspect-video overflow-hidden rounded-2xl bg-black'>
              <video
                className='h-full w-full'
                controls
                preload='metadata'
                poster='/videos/thumbnails/LOGOintro.jpg'>
                <source src='/videos/intro.mp4' type='video/mp4' />
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
            </div>
          </div>
        </section>

        <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {[
            {
              t: "فريق العمل",
              d: "يرتكز نجاحنا على فريق عمل مدرّب ومحترف لتقديم خدمات متكاملة بمعايير عالية الجودة.",
            },
            {
              t: "مواعيد مرنة",
              d: "نلتزم بتنفيذ الخدمة وفق جدولك اليومي / الأسبوعي.",
            },
            {
              t: "جودة مضمونة",
              d: "جودة متكاملة مدعومة بنظام متابعة وبطاقات تقييم لكل خدمة للتأكد من رضا عملائنا الكرام",
            },
          ].map((b) => (
            <div
              key={b.t}
              className='rounded-2xl border border-surface-2 bg-surface/45 p-4 text-right'>
              <h5
                className='text-4xl font-extrabold mb-2'
                style={{ color: "#B1B610" }}>
                {b.t}
              </h5>
              <p className='p mt-1 text-white'>{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className='container py-10 md:py-12'>
        <div className='mb-4 text-right'>
          <h1 className='text-4xl font-extrabold' style={{ color: "#B1B610" }}>
            آراء العملاء
          </h1>
          <p className='text-white/75 mt-1 text-sm'>
            آراء تم تجميعها من عملائنا .
          </p>
        </div>

        <ReviewsCarousel />
      </section>

      {/* VIDEO (placeholder until you add a file) */}
      <section className='container pb-14'>
        <div className='rounded-3xl border border-surface-2 bg-surface/45 p-4 md:p-6'>
          <div className='text-center'>
            <h1
              className='text-4xl font-extrabold'
              style={{ color: "#B1B610" }}>
              أراء العملاء
            </h1>
          </div>
          <div className='relative aspect-video overflow-hidden rounded-2xl bg-black'>
            <video
              className='h-full w-full'
              controls
              preload='metadata'
              poster='/videos/thumbnails/CustomerReview.png'>
              <source src='/videos/customerrev.mp4' type='video/mp4' />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className='container pb-14'>
        <div className='rounded-3xl border border-surface-2 bg-surface/45 p-4 md:p-6'>
          <h3 className='text-right text-xl font-semibold text-white mb-3'>
            سابقة أعمالنا
          </h3>

          {/* صورة بعرض الفيديو */}
          <div className='relative aspect-video overflow-hidden rounded-2xl'>
            <Image
              src={sc.image}
              alt={sc.title}
              fill
              sizes='100vw'
              className='object-cover'
              priority
            />

            {/* arrows */}
            <button
              type='button'
              aria-label='السابق'
              onClick={() =>
                setScIdx((i) => (i - 1 + SHOWCASE.length) % SHOWCASE.length)
              }
              className='absolute right-2 top-1/2 -translate-y-1/2 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white text-lg hover:bg-black/55'>
              ‹
            </button>
            <button
              type='button'
              aria-label='التالي'
              onClick={() => setScIdx((i) => (i + 1) % SHOWCASE.length)}
              className='absolute left-2 top-1/2 -translate-y-1/2 z-10 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white text-lg hover:bg-black/55'>
              ›
            </button>
          </div>

          {/* وصف مختصر */}
          <p className='mt-3 text-right text-white/85 text-sm md:text-base leading-relaxed'>
            {sc.description}
          </p>

          {/* نقاط الانتقال */}
          <div className='mt-2 flex items-center justify-center gap-2'>
            {SHOWCASE.map((_, i) => (
              <button
                key={i}
                aria-label={`عرض ${i + 1}`}
                onClick={() => setScIdx(i)}
                className={
                  "h-2.5 rounded-full transition-all " +
                  (scIdx === i ? "w-6 bg-primary" : "w-2.5 bg-white/50")
                }
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
