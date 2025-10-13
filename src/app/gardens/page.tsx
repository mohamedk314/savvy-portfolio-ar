/** @format */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { GARDEN } from "./_data";

type TabKey = keyof typeof GARDEN;

/* Segmented (sticky) */
function Segmented({
  value,
  onChange,
  tabs,
}: {
  value: TabKey;
  onChange: (v: TabKey) => void;
  tabs: { key: TabKey; label: string }[];
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
            {tabs.map((t) => (
              <button
                key={t.key}
                role='tab'
                aria-selected={value === t.key}
                onClick={() => onChange(t.key)}
                className={
                  "rounded-xl px-4 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 " +
                  (value === t.key
                    ? "bg-primary/20 text-primary border border-primary shadow-sm"
                    : "text-[--color-text]/80 hover:text-[--color-text] hover:bg-white/5 border border-transparent")
                }>
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/* Block card */
function BlockCard({
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

export default function GardensPage() {
  const [tab, setTab] = useState<TabKey>("overview");
  const section = GARDEN[tab];

  return (
    <main className='container py-10 md:py-12 space-y-8'>
      {/* HERO + Store links */}
      <header className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-14 md:py-16 text-center shadow-xl'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-accent tracking-tight'>
          خدمة الحدائق
        </h1>
        <p className='p mt-3'>تصميم، توريد، تنفيذ، وصيانة دورية.</p>

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

      {/* Sticky tabs */}
      <Segmented
        value={tab}
        onChange={setTab}
        tabs={[
          { key: "overview", label: "نظرة عامة" },
          { key: "methods", label: "طرق العمل" },
          { key: "services", label: "الخدمات" },
          { key: "prep", label: "أسئلة قبل المعاينة" },
          { key: "faq", label: "الأسئلة الشائعة" },
        ]}
      />

      {/* Content */}
      <section className='rounded-3xl border border-white/10 bg-white/5 overflow-hidden'>
        <div className='grid md:grid-cols-2'>
          {/* cover */}
          <div className='relative aspect-[16/10] md:aspect-auto md:min-h-[420px]'>
            <Image
              src={section.cover}
              alt={section.title}
              fill
              sizes='(min-width:1024px) 50vw, 100vw'
              className='object-cover'
              priority
            />
          </div>

          {/* text */}
          <div className='p-6 md:p-8 text-right'>
            <h2 className='text-2xl font-bold text-accent'>{section.title}</h2>
            <p className='p mt-1'>{section.subtitle}</p>

            <ul className='mt-4 list-disc pr-5 text-sm md:text-base text-white/85 space-y-1.5'>
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className='mt-6 grid gap-4 md:grid-cols-2'>
              {section.blocks.map((blk) => (
                <BlockCard key={blk.title} title={blk.title}>
                  <ul className='list-disc pr-5 text-sm text-white/80 space-y-1.5'>
                    {blk.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </BlockCard>
              ))}
            </div>

            {/* small gallery */}
            <div className='mt-6 grid gap-2 sm:grid-cols-2 md:grid-cols-3'>
              {section.gallery.map((src) => (
                <div
                  key={src}
                  className='overflow-hidden rounded-lg border border-white/10 bg-white/5'>
                  <Image
                    src={src}
                    alt=''
                    sizes='(min-width:1024px) 33vw, 50vw'
                    width={0}
                    height={0}
                    className='block w-full h-auto'
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  ); 
}
