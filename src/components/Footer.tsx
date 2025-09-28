/** @format */

export default function Footer() {
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
                  src='https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d215.77579678225908!2d31.336076930165266!3d30.082363326116283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d30.082358394138097!2d31.33635722100483!5e0!3m2!1sen!2seg!4v1758447292545!5m2!1sen!2seg'
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
                info@savvy.com
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
          <a
            href='/attachments/terms/terms.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-accent'>
            الشروط والأحكام
          </a>
        </p>
      </div>
    </footer>
  );
}
