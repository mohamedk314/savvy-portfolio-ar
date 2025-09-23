/** @format */

export default function Footer() {
  return (
    <footer className='bg-surface-2 border-t border-surface mt-12'>
      <div className='container py-8 text-right'>
        <h2 className='text-lg font-semibold mb-4'>تواصل معنا</h2>
        <ul className='space-y-2 text-sm text-white/80'>
          <li className='flex flex-col gap-2'>
            📍 <span className='font-medium'>الموقع:</span>
            <div className='w-full max-w-md aspect-square'>
              <div className='w-48 aspect-square overflow-hidden rounded-lg shadow'>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d215.77579678225908!2d31.336076930165266!3d30.082363326116283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d30.082358394138097!2d31.33635722100483!5e0!3m2!1sen!2seg!4v1758447292545!5m2!1sen!2seg'
                  width={600}
                  height={450}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                />
              </div>
            </div>
          </li>

          <li>
            📞 <span className='font-medium'>الهاتف:</span>{" "}
            <a href='tel:+201234567890' className='hover:text-brand-400'>
              0222911433
            </a>
          </li>
          <li>
            ✉️ <span className='font-medium'>البريد الإلكتروني:</span>{" "}
            <a href='mailto:info@savvy.com' className='hover:text-brand-400'>
              info@savvy.com
            </a>
          </li>
        </ul>

        <p className='mt-6 text-xs text-white/50 text-center'>
          © {new Date().getFullYear()} سافي لخدمات المرافق والإدارة. جميع الحقوق
          محفوظة.{" "}
          <a
            href='/attachments/terms/terms.pdf'
            target='_blank'
            rel='noopener noreferrer'
            className='underline hover:text-white'>
            الشروط والأحكام
          </a>
        </p>
      </div>
    </footer>
  );
}
