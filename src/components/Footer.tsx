/** @format */

export default function Footer() {
  return (
    <footer className='bg-surface-2 border-t border-surface mt-12'>
      <div className='container py-8 text-right'>
        <h2 className='text-lg font-semibold mb-4'>تواصل معنا</h2>
        <ul className='space-y-2 text-sm text-white/80'>
          <li>
            📍 <span className='font-medium'>الموقع:</span> القاهرة، مصر
          </li>
          <li>
            📞 <span className='font-medium'>الهاتف:</span>{" "}
            <a href='tel:+201234567890' className='hover:text-brand-400'>
              +20 123 456 7890
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
          محفوظة.
        </p>
      </div>
    </footer>
  );
}
