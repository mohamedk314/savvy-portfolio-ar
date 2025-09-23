/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { CLEANING_CARDS } from "./_data";

function CardItem({
  href,
  title,
  cover,
  note,
  priority,
}: {
  href: string;
  title: string;
  cover: string;
  note?: string;
  priority?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={title}
      className='group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60'>
      {/* 3:4 image */}
      <div className='relative aspect-[3/4]'>
        <Image
          src={cover}
          alt={title}
          fill
          sizes='(min-width:1280px) 25vw, (min-width:768px) 33vw, 100vw'
          priority={priority}
          className='object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]'
        />
        <div className='absolute inset-0 z-10 bg-gradient-to-t from-[rgba(0,0,0,0.58)] via-[rgba(0,0,0,0.28)] to-transparent' />
        {note && (
          <span className='absolute right-2 top-2 z-20 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-black/90'>
            {note}
          </span>
        )}
        <div className='absolute inset-x-0 bottom-0 z-20 p-3 sm:p-4'>
          <h3 className='text-right text-base sm:text-lg font-semibold text-accent drop-shadow'>
            {title}
          </h3>
          <p className='mt-0.5 flex items-center justify-end gap-1 text-right text-[11px] sm:text-xs text-[--color-text]/85 group-hover:text-primary'>
            أنقر للمزيد{" "}
            <span aria-hidden className='text-sm'>
              →
            </span>
          </p>
        </div>
      </div>
    </Link>
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
          {[
            "وحدات سكنية",
            " شركات و مولات و مصانع",
            "قرى سياحية",
            "خدمات أخرى",
          ].map((t) => (
            <span
              key={t}
              className='rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary'>
              {t}
            </span>
          ))}
        </div>
      </header>

      {/* GRID */}
      <section
        className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'
        aria-label='فئات خدمات النظافة'>
        {CLEANING_CARDS.map((c, i) => (
          <CardItem
            key={c.href}
            href={c.href}
            title={c.title}
            cover={c.cover}
            note={c.note}
            priority={i === 0}
          />
        ))}
      </section>
    </main>
  );
}
