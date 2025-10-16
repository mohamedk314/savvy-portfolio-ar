/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { EXTRAS } from "./_data";

function Card({
  title,
  img,
  href,
}: {
  title: string;
  img: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      aria-label={title}
      className='group block overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60'>
      <div className='relative aspect-[4/3]'>
        <Image
          src={img}
          alt={title}
          fill
          sizes='(min-width:1280px) 25vw, (min-width:768px) 33vw, 100vw'
          className='object-cover transition-transform duration-500 group-hover:scale-[1.04]'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent' />
        <div className='absolute inset-x-0 bottom-0 z-10 p-3 sm:p-4'>
          <h3 className='text-right text-base sm:text-lg font-semibold text-accent drop-shadow'>
            {title}
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
  );
}

/* ---- Client subtree that uses useSearchParams ---- */
function ExtrasInner() {
  const params = useSearchParams();
  const slug = params.get("slug");
  const svc = EXTRAS.find((e) => e.slug === slug);

  if (!svc) {
    return (
      <main className='container py-10 md:py-12 space-y-8'>
        <header className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-14 md:py-16 text-center shadow-xl'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-accent tracking-tight'>
            خدمات أخرى
          </h1>
          <p className='p mt-3'>
            خدمات إضافية مكمّلة لتنظيف المنازل والمنشآت — احجزها عبر التطبيق.
          </p>
        </header>

        <section
          aria-label='قائمة الخدمات الإضافية'
          className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
          {EXTRAS.map((s) => (
            <Card
              key={s.slug}
              title={s.title}
              img={s.thumb}
              href={`/cleaning/extras/?slug=${s.slug}`}
            />
          ))}
        </section>
      </main>
    );
  }

  return (
    <main className='container py-10 md:py-12 space-y-8'>
      <header className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-14 md:py-16 text-center shadow-xl'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-accent tracking-tight'>
          {svc.title}
        </h1>
        <p className='p mt-3'>{svc.desc}</p>

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

      <section className='rounded-3xl border border-white/10 bg-white/5 overflow-hidden'>
        <div className='grid md:grid-cols-2'>
          {/* image column — mobile-safe */}
          <div className='relative min-h-[240px] sm:min-h-[320px] md:min-h-[420px]'>
            <Image
              src={svc.cover}
              alt={svc.title}
              fill
              sizes='(max-width:767px) 100vw, (max-width:1023px) 100vw, 50vw'
              className='object-cover md:object-contain rounded-none md:rounded-2xl'
              priority
            />
            <div className='pointer-events-none absolute inset-0 md:rounded-2xl bg-gradient-to-b from-black/10 to-black/30' />
          </div>

          {/* content */}
          <div className='p-6 md:p-8 text-right'>
            <h2 className='text-2xl font-bold text-accent'>
              ماذا تشمل الخدمة؟
            </h2>
            <ul className='mt-3 list-disc pr-5 text-sm md:text-base text-white/85 space-y-1.5'>
              {svc.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>

            <div className='mt-6 flex flex-wrap gap-3 justify-end'>
              <Link
                href='/cleaning/extras/'
                className='rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-[--color-text] hover:bg-white/10 transition'>
                ← عودة إلى جميع الخدمات
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---- Page exports a Suspense boundary ---- */
export default function ExtrasPage() {
  return (
    <Suspense fallback={null}>
      <ExtrasInner />
    </Suspense>
  );
}
