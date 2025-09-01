/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
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
      className='group block overflow-hidden rounded-2xl border border-surface-2 bg-surface/45 shadow-sm hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60'>
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
          <h3 className='text-right text-base sm:text-lg font-semibold text-white drop-shadow'>
            {title}
          </h3>
          <p className='mt-0.5 flex items-center justify-end gap-1 text-right text-[11px] sm:text-xs text-white/85 group-hover:text-primary'>
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


export default function ExtrasPage() {
  const params = useSearchParams();
  const router = useRouter();
  const slug = params.get("slug");
  const svc = EXTRAS.find((e) => e.slug === slug);

  // --- GRID (no slug) ---
  if (!svc) {
    return (
      <main className='container py-10 md:py-12 space-y-8'>
        {/* HERO */}
        <header className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-14 md:py-16 text-center shadow-xl'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-white tracking-tight'>
            خدمات أخرى
          </h1>
          <p className='mt-3 text-white/90'>
            خدمات إضافية مكمّلة لتنظيف المنازل والمنشآت — احجزها عبر التطبيق.
          </p>
        </header>

        {/* GRID */}
        <section
          aria-label='قائمة الخدمات الإضافية'
          className='grid gap-5 sm:grid-cols-2 xl:grid-cols-4'>
          {EXTRAS.map((s) => (
            <Card
              key={s.slug}
              title={s.title}
              img={s.thumb}
              href={`?slug=${s.slug}`}
            />
          ))}
        </section>
      </main>
    );
  }

  // --- DETAIL (with slug) ---
  return (
    <main className='container py-10 md:py-12 space-y-8'>
      {/* HERO + APP LINKS */}
      <header className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-14 md:py-16 text-center shadow-xl'>
        <h1 className='text-3xl md:text-4xl font-extrabold text-white tracking-tight'>
          {svc.title}
        </h1>
        <p className='mt-3 text-white/90'>{svc.desc}</p>

        <div className='mt-6 flex flex-wrap gap-3 justify-center'>
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
      </header>

      {/* COVER + DETAILS */}
      <section className='rounded-3xl border border-surface-2 bg-surface-2/60 overflow-hidden'>
        <div className='grid md:grid-cols-2'>
          <div className='relative aspect-[16/10] md:aspect-auto md:min-h-[420px]'>
            <Image
              src={svc.cover}
              alt={svc.title}
              fill
              sizes='(min-width:1024px) 50vw, 100vw'
              className='object-cover'
              priority
            />
          </div>

          <div className='p-6 md:p-8 text-right'>
            <h2 className='text-2xl font-bold text-white'>ماذا تشمل الخدمة؟</h2>
            <ul className='mt-3 list-disc pr-5 text-sm md:text-base text-white/85 space-y-1.5'>
              {svc.includes.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>

            <div className='mt-6 flex flex-wrap gap-3 justify-end'>
              <button
                type='button'
                onClick={() => router.push("/cleaning/extras")}
                className='rounded-lg border border-surface-2 bg-surface/40 px-4 py-2 text-white hover:bg-surface-2'>
                ← عودة إلى جميع الخدمات
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
