/** @format */
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { pageLinks } from "../data/pages";
import Logo from "./Logo";

function cn(...a: (string | false | undefined)[]) {
  return a.filter(Boolean).join(" ");
}

/* تطبيع المسار لإزالة الشرطات الختامية */
const normalize = (p: string) => (p === "/" ? "/" : p.replace(/\/+$/, ""));

/* Active matcher: exact for '/', prefix for others. */
function useIsActive(pathname: string) {
  const norm = useMemo(() => normalize(pathname || "/"), [pathname]);
  return (href: string) => {
    const h = normalize(href || "/");
    if (h === "/") return norm === "/";
    return norm === h || norm.startsWith(h + "/");
  };
}

function SocialIcons() {
  return (
    <div className='flex items-center gap-3 md:gap-4 mx-2 md:mx-4'>
      <a
        href='https://www.facebook.com/share/1G2SqXrFPd/?mibextid=wwXIfr'
        aria-label='Messenger'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-white/15 hover:ring-white/30 transition'>
        <img src='/icons/messenger.svg' alt='' className='h-4 w-4' />
      </a>
      <a
        href='https://www.instagram.com/savvy_for_services?igsh=YWE4enZ4N2M2czB2&utm_source=qr'
        aria-label='Instagram'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-white/15 hover:ring-white/30 transition'>
        <img src='/icons/instagram.svg' alt='' className='h-4 w-4' />
      </a>
      <a
        href='https://wa.me/201040009403?text=مرحباً%20أرغب%20في%20الاستفسار%20عن%20الخدمة'
        aria-label='Whatsapp'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex h-6 w-6 items-center justify-center rounded-full ring-1 ring-white/15 hover:ring-white/30 transition'>
        <img src='/icons/whatsapp.svg' alt='' className='h-4 w-4' />
      </a>
    </div>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const isActive = useIsActive(pathname);

  return (
    <header className='sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-[color:rgb(0_0_20_/_0.6)]'>
      <div className='container'>
        <div className='flex items-center justify-between py-3'>
          {/* Logo + socials */}
          <div className='flex items-center'>
            <Link
              href='/'
              aria-label='الصفحة الرئيسية'
              className='flex items-center'>
              <div className='scale-110 md:scale-125'>
                <Logo />
              </div>
            </Link>
            <SocialIcons />
          </div>

          {/* Desktop nav */}
          <nav
            className='hidden md:flex items-center gap-1'
            aria-label='التنقل'>
            {pageLinks.map((l) => {
              const href = normalize(l.href);
              const label = (l.label || "").trim();
              const active = isActive(href);
              return (
                <Link
                  key={href}
                  href={href || "/"}
                  prefetch={false}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary/60",
                    active
                      ? "text-accent bg-white/5 border border-white/10"
                      : "text-[--color-text]/80 hover:text-[--color-text] hover:bg-white/5"
                  )}>
                  {label}
                  {active && (
                    <span
                      aria-hidden
                      className='pointer-events-none absolute inset-x-2 -bottom-[3px] h-[2px] rounded-full bg-accent'
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile toggle */}
          <button
            type='button'
            className='md:hidden rounded-lg border border-white/10 p-2 text-[--color-text]/90 outline-none focus-visible:ring-2 focus-visible:ring-primary/60'
            aria-expanded={open}
            aria-controls='mobile-menu'
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((v) => !v)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div id='mobile-menu' className='md:hidden pb-4'>
            <div className='rounded-2xl border border-white/10 bg-white/5 p-2'>
              <div className='grid gap-2'>
                {pageLinks.map((l) => {
                  const href = normalize(l.href);
                  const label = (l.label || "").trim();
                  const active = isActive(href);
                  return (
                    <Link
                      key={href}
                      href={href || "/"}
                      prefetch={false}
                      className={cn(
                        "rounded-lg px-4 py-3 text-sm text-right outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary/60",
                        active
                          ? "bg-white/5 text-accent border border-white/10"
                          : "text-[--color-text]/80 hover:text-[--color-text] hover:bg-white/5 border border-transparent"
                      )}
                      onClick={() => setOpen(false)}>
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
