/** @format */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { PEST_DATA, TKey } from "./_data";

/* Store badges */
function BadgeLinks() {
  return (
    <div className='flex flex-wrap items-center justify-center gap-3'>
      <a
        href='/download/ios'
        className='flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-[--color-text] hover:bg-primary/90'>
        <Image src='/icons/apple.svg' alt='App Store' width={18} height={18} />
        <span className='text-sm'>تحميل على App Store</span>
      </a>
      <a
        href='/download/android'
        className='flex items-center gap-2 rounded-lg bg-secondary px-4 py-2 text-[--color-text] hover:bg-secondary/90'>
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

/* Segmented with icons (sticky) */
function Segmented<T extends string>({
  tabs,
  value,
  onChange,
}: {
  tabs: { key: T; label: string; icon: string }[];
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
          stuck ? "backdrop-blur bg-surface/60 shadow-lg" : ""
        }`}>
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
                    "rounded-xl px-3 py-2 text-sm transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 " +
                    (active
                      ? "bg-primary/20 text-primary border border-primary shadow-sm"
                      : "text-[--color-text]/80 hover:text-[--color-text] hover:bg-white/5 border border-transparent")
                  }>
                  <span className='inline-flex items-center gap-2'>
                    <Image src={t.icon} alt='' width={18} height={18} />
                    {t.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

/* Card */
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

export default function PestControlPage() {
  const [tab, setTab] = useState<TKey>("overview");
  const section = PEST_DATA.sections[tab];

  return (
    <main className='container py-10 md:py-12 space-y-8'>
      {/* Header only */}
      <header className='rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-10 md:py-12 text-center shadow-xl'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-accent tracking-tight'>
          {PEST_DATA.hero.title}
        </h1>
        <p className='p mt-3'>{PEST_DATA.hero.tagline}</p>
        <div className='mt-6'>
          <BadgeLinks />
        </div>
      </header>

      {/* Shared feature image under header */}
      <div className='relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-white/5'>
        <Image
          src={PEST_DATA.hero.cover}
          alt={PEST_DATA.hero.title}
          sizes='100vw'
          width={0}
          height={0}
          className='block w-full h-auto'
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </div>

      {/* Tabs with icons */}
      <Segmented tabs={[...PEST_DATA.tabs]} value={tab} onChange={setTab} />

      {/* Section content + shared gallery preview */}
      <section className='rounded-3xl border border-white/10 bg-white/5 overflow-hidden'>
        <div className='grid md:grid-cols-2'>
          {/* copy */}
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

      {/* full shared gallery */}
      <section className='space-y-3'>
        <h3 className='text-xl font-bold text-right text-accent'>
          معرض الصور الكامل
        </h3>
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {PEST_DATA.gallery.map((src) => (
            <div
              key={src}
              className='overflow-hidden rounded-xl border border-white/10 bg-white/5'>
              <Image
                src={src}
                alt=''
                sizes='(min-width:1280px) 25vw, (min-width:1024px) 33vw, 50vw'
                width={0}
                height={0}
                className='block w-full h-auto'
                style={{ width: "100%", height: "auto" }}
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
