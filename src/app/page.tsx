/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { slides } from "../data/heroSlides";
import { REVIEWS, SERVICES_LIST, SHOWCASE } from "./_data_customer_rev";

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

      <div className='mt-2 flex items-center justify-end'>
        <Stars n={rating} />
      </div>

      <p className='p mt-2'>{comment}</p>

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

/* ------- reviews carousel (3 at a time, auto every 4s) ------- */
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
    if (timerRef.current) clearInterval(timerRef.current);
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

  // autoplay with single interval management
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const startTimer = useCallback(() => {
    if (reduceMotion) return;
    if (timer.current) return; // already running
    timer.current = setInterval(() => setIdx((p) => (p + 1) % len), SLIDE_MS);
  }, [len, reduceMotion]);

  const stopTimer = useCallback(() => {
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = null;
    }
  }, []);

  useEffect(() => {
    startTimer();
    const onVis = () => (document.hidden ? stopTimer() : startTimer());
    document.addEventListener("visibilitychange", onVis);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      stopTimer();
    };
  }, [startTimer, stopTimer]);

  const bump = (fn: () => void) => {
    stopTimer();
    fn();
    startTimer();
  };

  // drag / swipe for mobile
  const startX = useRef<number | null>(null);
  const onPointerDown = (e: React.PointerEvent) => (startX.current = e.clientX);
  const onPointerUp = (e: React.PointerEvent) => {
    if (startX.current == null) return;
    const dx = e.clientX - startX.current;
    if (Math.abs(dx) > 35)
      bump(() =>
        dx > 0
          ? setIdx((p) => (p - 1 + len) % len)
          : setIdx((p) => (p + 1) % len)
      );
    startX.current = null;
  };

  // keyboard arrows
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") bump(() => setIdx((p) => (p + 1) % len));
    if (e.key === "ArrowLeft") bump(() => setIdx((p) => (p - 1 + len) % len));
  };

  return (
    <main id='main' dir='rtl' className='text-right'>
      {/* HERO */}
      <section className='py-0 hero-bg'>
        <div className='bleed'>
          <div
            className='relative w-full overflow-hidden rounded-3xl border border-surface-2'
            onKeyDown={onKeyDown}
            tabIndex={0}
            aria-roledescription='carousel'
            aria-label='الخدمات الرئيسية'>
            {/* slide viewport */}
            <div
              className='relative aspect-[16/9] md:aspect-[20/9] lg:aspect-[21/9]'
              onPointerDown={onPointerDown}
              onPointerUp={onPointerUp}
              onMouseEnter={stopTimer}
              onMouseLeave={startTimer}>
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
                      "absolute inset-0 transition-opacity duration-700 will-change-opacity " +
                      (active
                        ? "opacity-100 pointer-events-auto z-10"
                        : "opacity-0 pointer-events-none z-0")
                    }>
                    <Image
                      src={s.image}
                      alt={s.label}
                      fill
                      className='object-cover object-center'
                      sizes='(min-width:1280px) 1280px, 100vw'
                      priority={i === 0}
                    />

                    {/* scrims */}
                    <div className='absolute inset-0 z-10 bg-gradient-to-t from-black/55 via-black/25 to-transparent' />
                    <div className='absolute inset-y-0 right-0 w-[38%] z-10 bg-gradient-to-l from-black/30 to-transparent pointer-events-none' />

                    {/* caption */}
                    <div className='absolute bottom-5 right-5 z-20 max-w-[92%] sm:max-w-lg text-right'>
                      <span className='inline-block rounded-xl bg-[color:rgb(23_29_43_/_0.7)] px-3 py-1 text-[13px] leading-none text-white/90 border border-white/10'>
                        SAVVY{" "}
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
                onClick={() => bump(() => setIdx((p) => (p - 1 + len) % len))}
                className='absolute right-3 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full bg-[color:rgb(23_29_43_/_0.72)] text-white text-lg hover:bg-[color:rgb(23_29_43_/_0.85)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60'>
                ‹
              </button>
              <button
                type='button'
                aria-label='الشريحة التالية'
                onClick={() => bump(() => setIdx((p) => (p + 1) % len))}
                className='absolute left-3 top-1/2 -translate-y-1/2 z-30 grid h-11 w-11 place-items-center rounded-full bg-[color:rgb(23_29_43_/_0.72)] text-white text-lg hover:bg-[color:rgb(23_29_43_/_0.85)] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60'>
                ›
              </button>

              {/* dots */}
              <div className='absolute left-1/2 -translate-x-1/2 bottom-3 z-30 flex items-center gap-2 rounded-full bg-black/35 px-2 py-1'>
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
      <section className='container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12'>
        <div className='grid lg:grid-cols-12 lg:gap-8 items-start'>
          {/* الفيديو يسار القائمة على الشاشات الكبيرة */}
          <div className='lg:col-span-7 lg:order-1'>
            <div className='text-right'>
              <h1
                className='text-4xl font-extrabold'
                style={{ color: "#B1B610" }}>
                مرحبا بكم في SAVVY
              </h1>
            </div>
            <div className='mt-6 rounded-3xl border border-surface-2 bg-surface/45 p-4 md:p-6'>
              <h3 className='text-right text-xl font-semibold text-white mb-3'>
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
          </div>

          {/* القائمة يمين الفيديو */}
          <div className='lg:col-span-5 lg:order-2'>
            <div className='mt-3 space-y-3 text-right'>
              <h3 className='text-right text-xl font-semibold text-white mb-3'>
                نقدّم لكم خدمات متكاملة تلبي احتياجاتكم
              </h3>

              {SERVICES_LIST.map((it) => (
                <Link
                  key={it.label}
                  href={it.href}
                  className='relative flex items-center justify-end gap-3 rounded-xl border border-surface-2 bg-surface/45 px-3 py-2.5 text-right transition hover:bg-surface-soft/70'>
                  {/* decorative faint icon */}
                  <svg
                    aria-hidden
                    viewBox='0 0 24 24'
                    className='pointer-events-none absolute -inset-y-1 right-3 h-10 w-10 opacity-10 text-primary'>
                    <path d={it.icon} fill='currentColor' />
                  </svg>

                  {/* icon chip */}
                  <span className='inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary shrink-0'>
                    <svg viewBox='0 0 24 24' className='h-5 w-5'>
                      <path d={it.icon} fill='currentColor' />
                    </svg>
                  </span>

                  {/* label */}
                  <span className='font-bold text-[--color-text] flex-1 text-right'>
                    {it.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* بطاقات المزايا تبقى كما هي */}
        <div className='mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {/* ... */}
        </div>
      </section>

      {/* REVIEWS + VIDEO — unified card */}
      <section className='container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12'>
        <div className='rounded-3xl border border-surface-2 bg-surface/45 p-4 md:p-6'>
          <div className='mb-4 text-right'>
            <h1
              className='text-3xl md:text-4xl font-extrabold'
              style={{ color: "#B1B610" }}>
              آراء العملاء
            </h1>
            <p className='text-white/75 mt-1 text-sm'>
              آراء تم تجميعها من عملائنا .
            </p>
          </div>

          <div className='grid lg:grid-cols-12 lg:gap-8 items-start'>
            <div className='lg:col-span-5'>
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

            <div className='lg:col-span-7 mt-8 lg:mt-0'>
              <ReviewsCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className='container max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-14'>
        <div className='rounded-3xl border border-surface-2 bg-surface/45 p-4 md:p-6'>
          <h3 className='text-right text-xl font-semibold text-white mb-3'>
            سابقة أعمالنا
          </h3>

          <div className='grid lg:grid-cols-12 lg:gap-6 items-start'>
            {/* RIGHT caption on RTL */}
            <div className='lg:col-span-4 lg:order-1'>
              <p className='mt-1 text-right text-white/85 text-sm md:text-base leading-relaxed'>
                {sc.description}
              </p>
              <div className='mt-4 flex justify-end gap-2'>
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

            {/* LEFT image */}
            <div className='lg:col-span-8 lg:order-2'>
              <div className='relative aspect-video overflow-hidden rounded-2xl'>
                <Image
                  src={sc.image}
                  alt={sc.title}
                  fill
                  sizes='100vw'
                  className='object-cover'
                  priority
                />
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
