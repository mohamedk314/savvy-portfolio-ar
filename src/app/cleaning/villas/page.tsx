/** @format */
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { VILLAS_SECTIONS } from "./_data";

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
          (stuck
            ? "backdrop-blur bg-[color:rgb(15_20_32_/_0.55)] shadow-lg"
            : "")
        }>
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

export default function VillasPage() {
  const [tab, setTab] =
    useState<(typeof VILLAS_SECTIONS)[number]["key"]>("post");
  const current = VILLAS_SECTIONS.find((s) => s.key === tab)!;

  return (
    <main className='container py-10 md:py-12 space-y-8'>
      {/* HERO */}
      <header className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-14 md:py-16 text-center shadow-xl'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-white tracking-tight'>
          نظافة الفيلات و الشقق
        </h1>
        <p className='mt-3 text-white/90'>
          اختر نوع الخدمة لعرض التفاصيل والصور
        </p>
      </header>

      {/* STICKY TABS */}
      <Segmented
        tabs={VILLAS_SECTIONS.map((s) => ({
          key: s.key,
          label: `${s.title} (${s.subtitle})`,
        }))}
        value={tab}
        onChange={setTab}
      />

      {/* SECTION CONTENT */}
      <section className='rounded-3xl border border-surface-2 bg-surface-2/60 overflow-hidden'>
        <div className='grid md:grid-cols-2'>
          <div className='relative aspect-[16/10] md:aspect-auto md:min-h-[420px]'>
            <Image
              src={current.img}
              alt={current.title}
              fill
              sizes='(min-width:1024px) 50vw, 100vw'
              className='object-cover'
              priority
            />
          </div>

          <div className='p-6 md:p-8 text-right'>
            <h2 className='text-2xl font-bold text-white'>{current.title}</h2>
            <p className='mt-1 text-white/70'>{current.subtitle}</p>

            <ul className='mt-4 list-disc pr-5 text-sm md:text-base text-white/85 space-y-1.5'>
              {current.intro.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>

            <div className='mt-6 grid gap-4 md:grid-cols-2'>
              {current.scope.map((blk) => (
                <Card key={blk.title} title={blk.title}>
                  <ul className='list-disc pr-5 text-sm text-white/80 space-y-1.5'>
                    {blk.items.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>

            <div className='mt-6 grid gap-4 md:grid-cols-2'>
              <Card title='المخرجات المتوقعة'>
                <ul className='list-disc pr-5 text-sm text-white/80 space-y-1.5'>
                  {current.deliverables.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </Card>
              <Card title='ملاحظات وتسعير تقريبي'>
                <ul className='list-disc pr-5 text-sm text-white/80 space-y-1.5'>
                  {current.pricingNotes.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </Card>
            </div>

            <Card title='بيانات مطلوبة من العميل'>
              <ul className='list-decimal pr-5 text-sm text-white/80 space-y-1.5'>
                {current.askClient.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQs */}
      {current.faq && current.faq.length > 0 && (
        <section className='space-y-3'>
          <h3 className='text-xl font-bold text-right'>أسئلة شائعة</h3>
          <div className='grid gap-3 md:grid-cols-2'>
            {current.faq.map((f) => (
              <details
                key={f.q}
                className='rounded-2xl border border-surface-2 bg-surface-2/60 p-4'>
                <summary className='cursor-pointer font-medium text-right text-white'>
                  {f.q}
                </summary>
                <p className='mt-2 text-sm text-white/80 text-right'>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Store CTAs */}
      <section className='rounded-2xl border border-surface-2 bg-surface/45 p-5 md:p-6 text-right'>
        <h3 className='font-semibold mb-2 text-white'>
          احجز خدمتك عبر التطبيق
        </h3>
        <p className='text-sm text-white/80'>
          للحجز وإدارة المواعيد والمتابعة بالصور، يُرجى استخدام تطبيق سـافي. لا
          يتم استقبال الطلبات عبر الهاتف أو البريد.
        </p>
        <div className='mt-5 flex flex-wrap gap-3 justify-end'>
          <a
            href='/download/ios'
            className='flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white hover:opacity-90 transition'>
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
            className='flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-white hover:opacity-90 transition'>
            <Image
              src='/icons/android.svg'
              alt='Google Play'
              width={18}
              height={18}
            />
            <span className='text-sm'>تنزيل من Google Play</span>
          </a>
        </div>
      </section>
    </main>
  );
}
