/** @format */
"use client";

import Image from "next/image";
import Link from "next/link";
import { ABOUT } from "./_data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

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

  const [openIdx, setOpenIdx] = useState<number | null>(null);

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

          {/* darker blue outline + more legible text */}
          <div className='mx-auto mt-5 flex flex-wrap justify-center gap-2'>
            {ABOUT.hero.pills.map((p) => (
              <span
                key={p.label}
                className='rounded-full border border-blue-800/70 bg-white/10 px-3 py-1 text-base md:text-lg font-semibold text-white drop-shadow-sm'>
                {p.label}
              </span>
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
        {/* Show immediately: parent animates on mount, not whileInView */}
        <motion.div
          className='grid md:grid-cols-[380px,1fr] gap-6 items-start'
          initial='show'
          animate='show'
          variants={stagger}>
          {/* CEO photo */}
          <motion.div
            variants={fadeUp}
            className='relative aspect-[4/4.5] md:aspect-[4/5] overflow-hidden rounded-2xl'>
            <Image
              src={ABOUT.ceo.photo}
              alt={ABOUT.ceo.name}
              fill
              sizes='(min-width:768px) 380px, 60vw'
              className='object-cover'
              priority
              loading='eager'
            />
          </motion.div>

          {/* CEO text */}
          <motion.div variants={fadeUp} className='text-right'>
            <p className='text-brand font-semibold'>{ABOUT.ceo.highlight}</p>
            <h2 className='text-2xl md:text-3xl font-extrabold text-accent mt-1'>
              {ABOUT.ceo.name}
            </h2>
            <div className='mt-3'>
              <BulletList items={ABOUT.ceo.bio} />
            </div>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <div className='mt-8 grid md:grid-cols-2 gap-6'>
          {ABOUT.cards.map((card) => {
            const isWide = card.key === "security89";
            return (
              <motion.article
                key={card.key}
                variants={fadeUp}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true }}
                className='overflow-hidden rounded-2xl border border-white/10 bg-white/5'>
                {card.cover && (
                  <div
                    className={
                      isWide
                        ? "relative aspect-[21/9]"
                        : "relative aspect-[16/9]"
                    }>
                    <Image
                      src={card.cover}
                      alt={card.title}
                      fill
                      sizes='(min-width:1024px) 50vw, 100vw'
                      className='object-cover'
                      priority={isWide}
                    />
                  </div>
                )}

                <div className='p-5 md:p-6 text-right'>
                  <h3 className='mb-2 text-lg font-semibold text-accent'>
                    {card.title}
                  </h3>
                  <BulletList items={card.bullets} />
                </div>
              </motion.article>
            );
          })}
        </div>
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
      <section className='rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8'>
        <motion.h3
          className='text-right text-2xl font-bold mb-6 text-accent'
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          شركاؤنا وتحالفاتنا
        </motion.h3>

        <motion.div
          className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-5 md:gap-6'
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          variants={stagger}>
          {ABOUT.partners.map((p) => (
            <motion.div
              key={p.name}
              variants={fadeUp}
              className='rounded-xl border border-white/10 bg-white/5 px-4 py-5 md:px-5 md:py-6 flex flex-col items-center justify-center min-h-[120px] md:min-h-[140px]'>
              <Image
                src={p.logo}
                alt={p.name}
                width={180}
                height={100}
                className='h-16 md:h-20 w-auto object-contain'
              />
              <p className='mt-3 text-center text-sm md:text-base text-white/85 leading-tight'>
                {p.name}
              </p>
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

      {/* Timeline */}
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
                  <button
                    type='button'
                    onClick={() => setOpenIdx(i)}
                    className='grid place-items-center h-10 w-10 rounded-full bg-brand/20 text-brand hover:bg-brand/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60'
                    aria-label={`تفاصيل: ${t.title}`}
                    title='انقر لعرض التفاصيل'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                      className='h-5 w-5'>
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </div>

                <button
                  type='button'
                  onClick={() => setOpenIdx(i)}
                  className={`${
                    i % 2 === 0 ? "alt-start md:text-end" : "alt-end"
                  } alt-box text-right hover:border-primary/40 hover:bg-white/10 transition`}
                  aria-label={`فتح تفاصيل ${t.title}`}>
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
                </button>

                {i < ABOUT.timeline.length - 1 && (
                  <span className='alt-hr alt-hr-bottom' aria-hidden />
                )}
              </li>
            ))}
          </ul>

          {/* Modal */}
          {openIdx !== null && (
            <div
              role='dialog'
              aria-modal='true'
              className='fixed inset-0 z-50 flex items-center justify-center p-4'
              onClick={() => setOpenIdx(null)}>
              <div className='absolute inset-0 bg-black/50 backdrop-blur-[1px]' />
              <div
                className='relative w-full max-w-lg md:max-w-xl lg:max-w-2xl rounded-2xl border border-white/10 bg-[rgba(16,20,28,.95)] p-5 shadow-2xl'
                onClick={(e) => e.stopPropagation()}>
                {(() => {
                  const item = ABOUT.timeline[openIdx!];
                  const d = item.details;
                  return (
                    <>
                      <div className='flex items-start justify-between gap-3'>
                        <div className='text-right'>
                          {item.year && (
                            <time className='font-mono text-brand'>
                              {item.year}
                            </time>
                          )}
                          <h4 className='text-accent text-xl font-bold mt-0.5'>
                            {item.title}
                          </h4>
                        </div>
                        <button
                          type='button'
                          onClick={() => setOpenIdx(null)}
                          className='rounded-lg border border-white/15 px-2 py-1 text-sm text-white/85 hover:bg-white/10'
                          aria-label='إغلاق'>
                          إغلاق
                        </button>
                      </div>

                      {d?.heading && (
                        <div className='mt-2 text-white font-semibold'>
                          {d.heading}
                        </div>
                      )}
                      {d?.text && (
                        <p className='mt-2 text-white/85 text-sm leading-relaxed'>
                          {d.text}
                        </p>
                      )}

                      {d?.bullets?.length ? (
                        <ul className='mt-3 list-disc pr-5 text-sm text-white/85 space-y-1'>
                          {d.bullets.map((b) => (
                            <li key={b}>{b}</li>
                          ))}
                        </ul>
                      ) : null}

                      {d?.images?.length ? (
                        <div className='mt-3 grid grid-cols-2 gap-2'>
                          {d.images.map((src) => (
                            <div
                              key={src}
                              className='relative aspect-[4/3] overflow-hidden rounded-lg'></div>
                          ))}
                        </div>
                      ) : null}

                      {d?.cta?.length ? (
                        <div className='mt-4 flex flex-wrap justify-end gap-2'>
                          {d.cta.map((c) => (
                            <Link
                              key={c.href}
                              href={c.href}
                              className='rounded-lg border border-primary/40 bg-primary/15 px-3 py-1.5 text-sm text-primary hover:bg-primary/25'>
                              {c.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </>
                  );
                })()}
              </div>
            </div>
          )}

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
              background: rgba(2, 198, 240, 0.06);
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
