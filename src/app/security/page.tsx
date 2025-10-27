/** @format */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { TabKey } from "./_data";
import { SECURITY } from "./_data";

/* Segmented with icons (sticky) */
function Segmented({
  value,
  onChange,
  tabs,
}: {
  value: TabKey;
  onChange: (v: TabKey) => void;
  tabs: { key: TabKey; label: string; icon: string }[];
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

/* Small card */
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

export default function SecurityPage() {
  const [tab, setTab] = useState<TabKey>("overview");
  const section = SECURITY.sections[tab];

  return (
    <main className='container py-10 md:py-12 space-y-8'>
      {/* HERO with one shared cover */}
      <header className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-14 md:py-16 text-center shadow-xl'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-accent tracking-tight'>
          {SECURITY.hero.title}
        </h1>
        <p className='p mt-3'>{SECURITY.hero.tagline}</p>

        <div className='relative mt-6 mx-auto max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-white/5'>
          <Image
            src={section.cover || SECURITY.hero.cover}
            alt={section.title}
            sizes='100vw'
            width={0}
            height={0}
            className='block w-full h-auto'
            style={{ width: "100%", height: "auto" }}
            priority
          />
        </div>
      </header>

      {/* Tabs with icons */}
      <Segmented value={tab} onChange={setTab} tabs={[...SECURITY.tabs]} />

      {/* Section copy (uses shared cover above; no per-section images) */}
      <section className='rounded-3xl border border-white/10 bg-white/5 overflow-hidden'>
        <div className='grid md:grid-cols-2'>
          {/* copy */}
          <div className='p-6 md:p-8 text-right order-2 md:order-1'>
            <div className='inline-flex items-center gap-2'>
              {/* show the active tab icon beside title */}
              <Image
                src={SECURITY.tabs.find((t) => t.key === tab)!.icon}
                alt=''
                width={22}
                height={22}
              />
              <h2 className='text-2xl font-bold text-accent'>
                {section.title}
              </h2>
            </div>
            <p className='p mt-2'>{section.subtitle}</p>

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

      {/* full shared gallery strip */}
      <section className='space-y-3'>
        <h3 className='text-xl font-bold text-right text-accent'>
          معرض الصور الكامل
        </h3>
        <div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {SECURITY.gallery.map((src) => (
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
