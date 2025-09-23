/** @format */
"use client";

import Image from "next/image";
import { ABOUT } from "./_data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ------- motion helpers ------- */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { show: { transition: { staggerChildren: 0.08 } } };

/* ------- UI atoms ------- */
function KBadge({ text }: { text: string }) {
  return (
    <span className='rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary'>
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

/* ------- Page ------- */
export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 120]);

  return (
    <main className='container py-10 md:py-12 space-y-10'>
      {/* HERO */}
      <header
        ref={heroRef}
        className='relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-14 md:py-16 text-center shadow-xl'>
        <motion.div style={{ y: yParallax }}>
          <h1 className='text-3xl md:text-4xl font-extrabold text-accent tracking-tight'>
            {ABOUT.hero.title}
          </h1>
          <p className='mt-3 text-white/90'>{ABOUT.hero.subtitle}</p>
          <div className='mx-auto mt-5 flex flex-wrap justify-center gap-2'>
            {ABOUT.hero.pills.map((p) => (
              <KBadge key={p.label} text={p.label} />
            ))}
          </div>
        </motion.div>

        {/* soft cover */}
        <Image
          src={ABOUT.hero.cover}
          alt='غلاف'
          fill
          className='absolute inset-0 -z-10 object-cover opacity-20'
          priority
        />
      </header>

      {/* CEO HIGHLIGHT */}
      <section className='rounded-3xl border border-white/10 bg-white/5 p-5 md:p-8'>
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
            <p className='text-brand font-semibold'>{ABOUT.ceo.highlight}</p>
            <h2 className='text-2xl md:text-3xl font-extrabold text-accent mt-1'>
              {ABOUT.ceo.name}
            </h2>

            <div className='mt-3'>
              <BulletList items={ABOUT.ceo.bio} />
            </div>

            {/* ribbon */}
            <div className='mt-5 relative rounded-xl overflow-hidden border border-white/10'>
              <Image
                src={ABOUT.securityIntroImage}
                alt='خدمات الحراسة والأمن'
                width={1280}
                height={640}
                className='w-full h-auto object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-l from-[rgba(0,0,0,0.35)] to-transparent' />
              <div className='absolute bottom-3 right-3 rounded-lg bg-[color:rgb(0_115_164_/_0.7)] px-3 py-1 text-xs text-white'>
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
            className='overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm'
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
              <h3 className='mb-2 text-lg font-semibold text-accent'>
                {blk.title}
              </h3>
              <BulletList items={blk.bullets} />
            </div>
          </motion.article>
        ))}
      </section>

      {/* Partners */}
      <section className='rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6'>
        <motion.h3
          className='text-right text-xl font-bold mb-4 text-accent'
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
              className='rounded-xl border border-white/10 bg-white/5 p-3 flex items-center justify-center'>
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
          className='rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          variants={fadeUp}>
          <h3 className='text-right text-lg font-semibold text-accent mb-2'>
            قطاعات العمل
          </h3>
          <BulletList items={ABOUT.domains} />
        </motion.div>

        <motion.div
          className='rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          variants={fadeUp}>
          <h3 className='text-right text-lg font-semibold text-accent mb-2'>
            لماذا سافي؟
          </h3>
          <BulletList items={ABOUT.advantages} />
        </motion.div>
      </section>

      {/* Galleries */}
      {ABOUT.galleries.map((g) => (
        <section key={g.title} className='space-y-3'>
          <motion.h3
            className='text-right text-xl font-bold text-accent'
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
                className='relative overflow-hidden rounded-2xl border border-white/10 bg-white/5'>
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

      {/* Timeline — alternating sides, pure Tailwind */}
      {ABOUT.timeline?.length > 0 && (
        <section className='rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6'>
          <h3 className='text-right text-xl font-bold mb-6 text-accent'>
            محطات سريعة
          </h3>

          <ul className='alt-tl'>
            {ABOUT.timeline.map((t, i) => (
              <li key={t.title} className='alt-item'>
                {i > 0 && <span className='alt-hr alt-hr-top' aria-hidden />}

                <div className='alt-middle'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                    className='h-5 w-5 text-brand'>
                    <path
                      fillRule='evenodd'
                      d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>

                <div
                  className={`${
                    i % 2 === 0 ? "alt-start md:text-end" : "alt-end"
                  } alt-box`}>
                  {t.year && (
                    <time className='font-mono italic text-brand'>
                      {t.year}
                    </time>
                  )}
                  <div className='text-lg font-black text-white mt-0.5'>
                    {t.title}
                  </div>
                  {t.desc && (
                    <p className='text-white/75 text-sm mt-1'>{t.desc}</p>
                  )}
                </div>

                {i < ABOUT.timeline.length - 1 && (
                  <span className='alt-hr alt-hr-bottom' aria-hidden />
                )}
              </li>
            ))}
          </ul>

          {/* local timeline styles */}
          <style jsx>{`
            .alt-tl {
              position: relative;
              margin: 0;
              padding: 0;
              list-style: none;
            }
            .alt-tl::before {
              content: "";
              position: absolute;
              inset-inline-start: 50%;
              top: 0;
              bottom: 0;
              transform: translateX(-50%);
              width: 2px;
              background: rgba(255, 255, 255, 0.15);
            }
            .alt-item {
              position: relative;
              display: grid;
              grid-template-columns: 1fr 40px 1fr;
              align-items: start;
              gap: 1rem;
              margin-bottom: 2.75rem;
            }
            .alt-middle {
              grid-column: 2;
              position: relative;
              display: grid;
              place-items: center;
              width: 40px;
              height: 40px;
            }
            .alt-middle::before {
              content: "";
              position: absolute;
              top: 50%;
              left: 50%;
              width: 14px;
              height: 14px;
              background: #a3e635; /* brand */
              border-radius: 9999px;
              transform: translate(-50%, -50%);
              box-shadow: 0 0 0 4px rgba(163, 230, 53, 0.25);
            }
            .alt-hr {
              grid-column: 2;
              width: 2px;
              background: rgba(255, 255, 255, 0.15);
              justify-self: center;
            }
            .alt-hr-top {
              height: calc(50% - 20px);
              align-self: end;
            }
            .alt-hr-bottom {
              height: calc(50% - 20px);
              align-self: start;
            }
            .alt-box {
              background: rgba(2, 198, 240, 0.06); /* primary tint */
              border: 1px solid rgba(2, 198, 240, 0.18);
              border-radius: 0.75rem;
              padding: 0.9rem 1rem;
            }
            .alt-start {
              grid-column: 1;
              text-align: left;
            }
            .alt-end {
              grid-column: 3;
              text-align: right;
            }
            @media (max-width: 767.98px) {
              .alt-tl::before {
                inset-inline-start: 20px;
                transform: none;
              }
              .alt-item {
                grid-template-columns: 40px 1fr;
                margin-bottom: 2rem;
              }
              .alt-start,
              .alt-end {
                grid-column: 2 !important;
                text-align: right;
              }
              .alt-middle {
                grid-column: 1;
              }
              .alt-hr {
                grid-column: 1;
              }
              .alt-hr-top,
              .alt-hr-bottom {
                height: 10px;
              }
            }
          `}</style>
        </section>
      )}
    </main>
  );
}
