/** @format */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { NORTH_COAST_SECTIONS } from "./_data";

/* small reveal on scroll */
function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.15 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return { ref, show };
}

/* Segmented tabs (sticky) */
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
        className={
          "z-30 sticky top-14 md:top-16 transition-all " +
          (stuck ? "backdrop-blur bg-surface/60 shadow-lg" : "")
        }>
        <div className='container py-3'>
          <div
            role='tablist'
            className='mx-auto inline-flex flex-wrap justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 p-1'>
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
                      ? "bg-primary/20 text-primary border border-primary shadow-sm"
                      : "text-[--color-text]/80 hover:text-[--color-text] hover:bg-white/5 border border-transparent")
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

function SubCard({
  title,
  img,
  bullets,
}: {
  title: string;
  img: string;
  bullets: string[];
}) {
  const { ref, show } = useReveal();
  return (
    <article
      ref={ref}
      className={
        "overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition " +
        (show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")
      }>
      <div className='relative aspect-[16/9] md:aspect-[16/9] overflow-hidden rounded-2xl'>
        <Image
          src={img}
          alt={title}
          fill
          sizes='(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw'
          className='object-cover'
          priority
        />
      </div>
      <div className='p-5 md:p-6 text-right'>
        <h3 className='mb-2 text-lg font-semibold text-accent'>{title}</h3>
        <ul className='list-disc pr-5 text-sm text-white/85 space-y-1.5'>
          {bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function NorthCoastPage() {
  const [tab, setTab] =
    useState<(typeof NORTH_COAST_SECTIONS)[number]["key"]>("villages");
  const current = NORTH_COAST_SECTIONS.find((s) => s.key === tab)!;

  return (
    <main className='container py-10 md:py-12 space-y-8'>
      {/* HERO + note + store CTAs */}
      <header className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-14 md:py-16 text-center shadow-xl'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-accent tracking-tight'>
          خدمات القرى السياحية
        </h1>
        <p className='p mt-3'>
          حلول تشغيل للمواقع العامة وخدمات للوحدات الخاصة داخل القرى السياحية.
        </p>

        {/* Store CTAs (added like other pages) */}
        <div className='mt-6 flex flex-wrap gap-3 justify-center'>
          <a
            href='/download/ios'
            className='flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-[--color-text] hover:bg-primary/90 transition'>
            <Image
              src='/icons/apple.svg'
              alt='App Store'
              width={18}
              height={18}
            />
            <span className='text-sm'>تحميل على App Store</span>
          </a>
          <a
            href='/download/android'
            className='flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-[--color-text] hover:bg-secondary/90 transition'>
            <Image
              src='/icons/android.svg'
              alt='Google Play'
              width={18}
              height={18}
            />
            <span className='text-sm'>تنزيل من Google Play</span>
          </a>
        </div>
      </header>

      {/* category tabs */}
      <Segmented
        tabs={NORTH_COAST_SECTIONS.map((s) => ({ key: s.key, label: s.title }))}
        value={tab}
        onChange={setTab}
      />

      {/* category intro */}
      <section className='rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 text-right'>
        <h2 className='text-2xl font-bold text-accent'>{current.title}</h2>
        <p className='p mt-1'>{current.subtitle}</p>
        <ul className='mt-4 list-disc pr-5 text-sm md:text-base text-white/85 space-y-1.5'>
          {current.intro.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
      </section>

      {/* sub cards */}
      <section className='grid gap-6 md:grid-cols-2 xl:grid-cols-3'>
        {current.subs.map((s) => (
          <SubCard
            key={s.key}
            title={s.title}
            img={s.img}
            bullets={s.bullets}
          />
        ))}
      </section>
    </main>
  );
}
