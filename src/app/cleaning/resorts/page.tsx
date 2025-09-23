/** @format */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { RESORTS_SECTIONS } from "./_data";

/* UI helpers */
function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className='rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6'>
      <h3 className='mb-2 font-semibold text-accent'>{title}</h3>
      {children}
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
  const sentryRef = useRef<HTMLDivElement | null>(null);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting), {
      threshold: 1,
    });
    if (sentryRef.current) io.observe(sentryRef.current);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div ref={sentryRef} aria-hidden className='h-2' />
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

/* Page */
export default function ResortsPage() {
  const [tab, setTab] =
    useState<(typeof RESORTS_SECTIONS)[number]["key"]>("beach");
  const current = RESORTS_SECTIONS.find((s) => s.key === tab)!;

  return (
    <main className='container py-10 md:py-12 space-y-8'>
      {/* HERO */}
      <header className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-14 md:py-16 text-center shadow-xl'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-accent tracking-tight'>
          نظافة القرى السياحية
        </h1>
        <p className='p mt-3'>خدمات موسمية / يومية وفق الجداول التشغيلية</p>

        {/* Unavailable note */}
        {/*
        <div className='mt-6 inline-flex items-center gap-2 rounded-xl bg-accent/15 px-5 py-3 text-accent'>
          <span aria-hidden>🚧</span>
          <span>
            الخدمة غير مفعّلة حالياً داخل الشركة — المحتوى أدناه للتعريف فقط
          </span>
          <span aria-hidden>🚧</span>
        </div>*/}
      </header>

      {/* STICKY SEGMENTED TABS */}
      <Segmented
        tabs={RESORTS_SECTIONS.map((s) => ({
          key: s.key,
          label: `${s.title}`,
        }))}
        value={tab}
        onChange={setTab}
      />

      {/* CONTENT */}
      <section className='rounded-3xl border border-white/10 bg-white/5 overflow-hidden'>
        <div className='grid md:grid-cols-2'>
          <div className='relative w-full overflow-hidden rounded-3xl [padding-bottom:125%] md:[padding-bottom:56.25%]'>
            <Image
              src={current.img}
              alt={current.title}
              fill
              sizes='(min-width:1024px) 60vw, 100vw'
              className='object-contain md:object-cover md:object-center'
              priority
            />
          </div>

          {/* text */}
          <div className='p-6 md:p-8 text-right'>
            <h2 className='text-2xl font-bold text-accent'>{current.title}</h2>
            <p className='p mt-1'>{current.subtitle}</p>

            <ul className='mt-4 list-disc pr-5 text-sm md:text-base text-white/85 space-y-1.5'>
              {current.intro.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>

            <div className='mt-6 grid gap-4 md:grid-cols-2'>
              {current.scope.map((blk) => (
                <Card key={blk.title} title={blk.title}>
                  <ul className='list-disc pr-5 text-sm text-white/80 space-y-1.5'>
                    {blk.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <div className='mt-6 grid gap-4 md:grid-cols-2'>
              <Card title='التشغيل والجدولة'>
                <ul className='list-disc pr-5 text-sm text-white/80 space-y-1.5'>
                  {current.ops.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </Card>
              <Card title='ملاحظات وتسعير تقريبي'>
                <ul className='list-disc pr-5 text-sm text-white/80 space-y-1.5'>
                  {current.notes.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Store-only CTA */}
            <div className='mt-6 flex flex-wrap gap-3 justify-end'>
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
          </div>
        </div>
      </section>
    </main>
  );
}
