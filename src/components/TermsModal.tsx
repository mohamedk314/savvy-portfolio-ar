/** @format */
"use client";
import { useEffect } from "react";

export default function TermsModal({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (open) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", onKey);
    }
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className='fixed inset-0 z-[100] flex items-center justify-center'>
      {/* backdrop */}
      <button
        aria-label='Close'
        onClick={onClose}
        className='absolute inset-0 bg-black/60'
      />
      {/* panel */}
      <div className='relative mx-4 w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/10 bg-[var(--color-surface-3)] text-[--color-text]'>
        {/* header */}
        <div className='sticky top-0 bg-gradient-to-r from-primary/90 to-secondary/80 px-6 py-5 text-center shadow'>
          <h1 className='text-2xl md:text-3xl font-extrabold text-accent'>
            الشروط والأحكام
          </h1>
          <button
            onClick={onClose}
            aria-label='إغلاق'
            className='absolute left-4 top-4 rounded-lg border border-white/20 px-3 py-1 text-sm hover:bg-white/10'>
            إغلاق
          </button>
        </div>
        <div className='p-6 md:p-8 text-right leading-7'>{children}</div>
      </div>
    </div>
  );
}
