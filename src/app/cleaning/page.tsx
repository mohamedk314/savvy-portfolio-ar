/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { CLEANING_CARDS } from "./_data";

/* Auto-rotating, cross-fade slider for a single card */
function CardSlider({
  images,
  alt,
  priority,
}: {
  images: string[];
  alt: string;
  priority?: boolean;
}) {
  const [idx, setIdx] = useState(0);
  const count = images.length;
  const timer = useRef<NodeJS.Timeout | null>(null);

  const safeImages = useMemo(
    () => (count ? images : ["/images/fallback.jpg"]),
    [images, count]
  );

  useEffect(() => {
    if (safeImages.length < 2) return;
    timer.current = setInterval(
      () => setIdx((i) => (i + 1) % safeImages.length),
      4000
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [safeImages.length]);

  return (
    <div className='relative aspect-[3/4]'>
      {safeImages.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          sizes='(min-width:1280px) 25vw, (min-width:768px) 33vw, 100vw'
          priority={priority && i === 0}
          className={
            "absolute inset-0 object-cover object-center transition-opacity duration-700 " +
            (i === idx ? "opacity-100" : "opacity-0")
          }
        />
      ))}
      <div className='absolute inset-0 z-10 bg-gradient-to-t from-[rgba(0,0,0,0.58)] via-[rgba(0,0,0,0.28)] to-transparent' />
    </div>
  );
}

export default function CleaningHome() {
  return (
    <main className='container py-10 md:py-12 space-y-8'>
      {/* HERO */}
      <header className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-14 md:py-16 text-center shadow-xl'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-accent tracking-tight'>
          خدمة النظافة
        </h1>
        <p className='p mt-3'>أختر خدمة النظافه المناسبه إليك.</p>
        <div className='mx-auto mt-5 flex flex-wrap justify-center gap-2'>
          {["وحدات سكنية", "خدمات أخرى"].map((t) => (
            <span
              key={t}
              className='rounded-full border border-blue-800/70 bg-white/10 px-3 py-1 text-base md:text-lg font-semibold text-white drop-shadow-sm'>
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* GRID */}
      <section
        aria-label='فئات خدمات النظافة'
        className='mx-auto max-w-4xl grid gap-5 sm:grid-cols-2 justify-items-center'>
        {CLEANING_CARDS.map((c, i) => (
          <Link
            key={c.href}
            href={c.href}
            aria-label={c.title}
            className='w-full max-w-md group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60'>
            <div className='relative'>
              <CardSlider images={c.covers} alt={c.title} priority={i === 0} />
              {c.note && (
                <span className='absolute right-2 top-2 z-20 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-black/90'>
                  {c.note}
                </span>
              )}
              <div className='absolute inset-x-0 bottom-0 z-20 p-3 sm:p-4'>
                <h3 className='text-right text-base sm:text-lg font-semibold text-accent drop-shadow'>
                  {c.title}
                </h3>
                <p className='mt-0.5 flex items-center justify-end gap-1 text-right text-[11px] sm:text-xs text-[--color-text]/85 group-hover:text-primary'>
                  أضغط للمزيد{" "}
                  <span aria-hidden className='text-sm'>
                    →
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
