/** @format */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // hamburger + close
import { pageLinks } from "../data/pages";
import Logo from "./Logo";

function cn(...a: (string | false | undefined)[]) {
  return a.filter(Boolean).join(" ");
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className='sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-[color:rgb(15_20_32_/_0.7)]'>
      <div className='container'>
        <div className='flex items-center justify-between py-3'>
          {/* Bigger logo */}
          <Link
            href='/'
            aria-label='الصفحة الرئيسية'
            className='flex items-center'>
            <div className='scale-110 md:scale-125'>
              <Logo />
            </div>
          </Link>

          {/* desktop nav */}
          <nav className='hidden gap-2 md:flex' aria-label='التنقل'>
            {pageLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm transition-colors",
                  pathname === l.href
                    ? "bg-surface-2 text-white"
                    : "text-white/70 hover:text-white"
                )}>
                {l.label}
              </Link>
            ))}
          </nav>

          {/* mobile toggle (hamburger) */}
          <button
            type='button'
            className='md:hidden rounded-lg border border-surface-2 p-2 text-white/90'
            aria-expanded={open}
            aria-controls='mobile-menu'
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            onClick={() => setOpen((v) => !v)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <div id='mobile-menu' className='md:hidden pb-4'>
            <div className='grid gap-2'>
              {pageLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-lg px-4 py-3 text-sm text-right border transition-colors",
                    pathname === l.href
                      ? "bg-surface-2 border-surface-2 text-white"
                      : "border-surface-2 text-white/80 hover:text-white"
                  )}
                  onClick={() => setOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
