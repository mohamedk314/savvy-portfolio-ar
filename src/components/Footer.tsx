/** @format */
"use client";
import { useState } from "react";
import TermsModal from "@/components/TermsModal";
import TermsContent from "@/components/TermsContent";

export default function Footer() {
  const [openTerms, setOpenTerms] = useState(false);

  return (
    <footer className='mt-12 border-t border-white/10 bg-[var(--color-surface-3)] text-[--color-text]'>
      <div className='container py-8 text-right'>
        <h2 className='mb-4 text-lg font-semibold text-accent'>تواصل معنا</h2>

        <div className='grid gap-6 md:grid-cols-2'>
          {/* Address + Map */}
          <div className='space-y-2 text-sm'>
            <div className='font-medium'>
              <span aria-hidden>📍</span> <span>الموقع:</span>
            </div>
            <div className='overflow-hidden rounded-2xl border border-white/10 bg-white/5'>
              <div className='relative w-full aspect-[4/3]'>
                <iframe
                  title='Savvy Office Location'
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1726.1976719881288!2d31.339043711778256!3d30.08286195709796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f005952123b%3A0xb5d3dc7752d2afb0!2z2LTYsdmD2Kkgc2F2dnk!5e0!3m2!1sen!2seg!4v1761579771710!5m2!1sen!2seg" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
                  className='absolute inset-0 h-full w-full'
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            </div>
          </div>

          {/* Contacts */}
          <ul className='space-y-3 text-sm text-white/80'>
            <li>
              <span aria-hidden>📞</span>{" "}
              <span className='font-medium'>الهاتف:</span>{" "}
              <a href='tel:+20222911433' className='hover:text-accent'>
                0222911433
              </a>
            </li>
            <li>
              <span aria-hidden>✉️</span>{" "}
              <span className='font-medium'>البريد الإلكتروني:</span>{" "}
              <a href='mailto:info@savvy.com' className='hover:text-accent'>
                info@savvyeg.com
              </a>
            </li>
            <li>
              <span aria-hidden>🕒</span>{" "}
              <span className='font-medium'>ساعات العمل:</span> يوميًا 9ص–6م
            </li>
          </ul>
        </div>

        <p className='mt-8 text-center text-xs text-white/50'>
          © {new Date().getFullYear()} سافي لخدمات المرافق والإدارة. جميع الحقوق
          محفوظة.{" "}
          <button
            type='button'
            onClick={() => setOpenTerms(true)}
            className='underline hover:text-accent'>
            الشروط والأحكام
          </button>
        </p>

        <TermsModal open={openTerms} onClose={() => setOpenTerms(false)}>
          <TermsContent />
        </TermsModal>
      </div>
    </footer>
  );
}
