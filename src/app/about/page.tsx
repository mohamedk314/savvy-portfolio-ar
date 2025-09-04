/** @format */
"use client";

import Image from "next/image";
import { ABOUT } from "./_data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* Small helpers */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

function KBadge({ text }: { text: string }) {
  return (
    <span className='rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs text-white/85'>
      {text}
    </span>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className='list-disc pr-5 text-sm md:text-base text-white/85 space-y-1.5'>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

/* Page */
export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <main className='container py-10 md:py-12 space-y-10'>
      {/* HERO with soft parallax */}
      <header
        ref={heroRef}
        className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-14 md:py-16 text-center shadow-xl'>
        <motion.div style={{ y: yParallax }}>
          <h1 className='text-3xl md:text-4xl font-extrabold text-white tracking-tight'>
            {ABOUT.hero.title}
          </h1>
          <p className='mt-3 text-white/90'>{ABOUT.hero.subtitle}</p>
          <div className='mx-auto mt-5 flex flex-wrap justify-center gap-2'>
            {ABOUT.hero.pills.map((p) => (
              <KBadge key={p.label} text={p.label} />
            ))}
          </div>
        </motion.div>

        {/* decorative cover (optional) */}
        <Image
          src={ABOUT.hero.cover}
          alt='غلاف'
          fill
          className='absolute inset-0 -z-10 object-cover opacity-20'
          priority
        />
      </header>

      {/* CEO HIGHLIGHT */}
      <section className='rounded-3xl border border-surface-2 bg-surface/45 p-5 md:p-8'>
        <motion.div
          className='grid md:grid-cols-[380px,1fr] gap-6 items-start'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, margin: "-80px" }}
          variants={stagger}>
          <motion.div
            variants={fadeUp}
            className='relative aspect-[4/4.5] md:aspect-[4/5] overflow-hidden rounded-2xl'>
            <Image
              src={ABOUT.ceo.photo}
              alt={ABOUT.ceo.name}
              fill
              className='object-cover'
            />
          </motion.div>

          <motion.div variants={fadeUp} className='text-right'>
            <p className='text-primary font-semibold'>{ABOUT.ceo.highlight}</p>
            <h2 className='text-2xl md:text-3xl font-extrabold text-white mt-1'>
              {ABOUT.ceo.name}
            </h2>
            <div className='mt-3'>
              <BulletList items={ABOUT.ceo.bio} />
            </div>
            {/* security intro visual ribbon */}
            <div className='mt-5 relative rounded-xl overflow-hidden border border-surface-2'>
              <Image
                src={ABOUT.securityIntroImage}
                alt='خدمات الحراسة والأمن'
                width={1280}
                height={640}
                className='w-full h-auto object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-l from-black/25 to-transparent' />
              <div className='absolute bottom-3 right-3 rounded-lg bg-[color:rgb(23_29_43_/_0.7)] px-3 py-1 text-xs text-white/90'>
                خدمات الحراسة والأمن
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission / Vision / Message */}
      <section className='grid gap-6 md:grid-cols-3'>
        {[ABOUT.mission, ABOUT.vision, ABOUT.message].map((blk) => (
          <motion.article
            key={blk.title}
            className='overflow-hidden rounded-2xl border border-surface-2 bg-surface/45 shadow-sm'
            initial='hidden'
            whileInView='show'
            viewport={{ once: true }}
            variants={fadeUp}>
            <div className='relative aspect-[16/9]'>
              <Image
                src={blk.cover}
                alt={blk.title}
                fill
                className='object-cover'
              />
            </div>
            <div className='p-5 md:p-6 text-right'>
              <h3 className='mb-2 text-lg font-semibold text-primary'>
                {blk.title}
              </h3>
              <BulletList items={blk.bullets} />
            </div>
          </motion.article>
        ))}
      </section>

      {/* Partners logos */}
      <section className='rounded-2xl border border-surface-2 bg-surface/45 p-5 md:p-6'>
        <motion.h3
          className='text-right text-xl font-bold mb-4'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          شركاؤنا وتحالفاتنا
        </motion.h3>
        <motion.div
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          variants={stagger}>
          {ABOUT.partners.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className='rounded-xl border border-surface-2 bg-surface/40 p-3 flex items-center justify-center'>
              <Image
                src={p.logo}
                alt={p.name}
                width={140}
                height={80}
                className='h-12 w-auto object-contain'
              />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Domains & Advantages */}
      <section className='grid gap-6 md:grid-cols-2'>
        <motion.div
          className='rounded-2xl border border-surface-2 bg-surface/45 p-5 md:p-6'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          variants={fadeUp}>
          <h3 className='text-right text-lg font-semibold text-primary mb-2'>
            قطاعات العمل
          </h3>
          <BulletList items={ABOUT.domains} />
        </motion.div>

        <motion.div
          className='rounded-2xl border border-surface-2 bg-surface/45 p-5 md:p-6'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          variants={fadeUp}>
          <h3 className='text-right text-lg font-semibold text-primary mb-2'>
            لماذا سافي؟
          </h3>
          <BulletList items={ABOUT.advantages} />
        </motion.div>
      </section>

      {/* Galleries (independent images; add more in _data.ts) */}
      {ABOUT.galleries.map((g) => (
        <section key={g.title} className='space-y-3'>
          <motion.h3
            className='text-right text-xl font-bold'
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            {g.title}
          </motion.h3>
          <motion.div
            className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}>
            {g.images.map((src) => (
              <motion.figure
                key={src}
                variants={fadeUp}
                className='relative overflow-hidden rounded-2xl border border-surface-2 bg-surface/40'>
                <Image
                  src={src}
                  alt={g.title}
                  width={1280}
                  height={800}
                  className='h-full w-full object-cover'
                />
              </motion.figure>
            ))}
          </motion.div>
        </section>
      ))}

      {/* (Optional) Timeline */}
      {ABOUT.timeline?.length > 0 && (
        <section className='rounded-2xl border border-surface-2 bg-surface/45 p-5 md:p-6'>
          <h3 className='text-right text-xl font-bold mb-4'>محطات سريعة</h3>
          <div className='grid gap-4 md:grid-cols-3'>
            {ABOUT.timeline.map((t) => (
              <div
                key={t.title}
                className='rounded-xl border border-surface-2 bg-surface/40 p-4 text-right'>
                {t.year && (
                  <div className='text-primary font-semibold mb-1'>
                    {t.year}
                  </div>
                )}
                <div className='text-white font-semibold'>{t.title}</div>
                <p className='text-white/75 text-sm mt-1'>{t.desc}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
