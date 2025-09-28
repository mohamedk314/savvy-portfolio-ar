/** @format */

import Image from "next/image";

export default function Logo() {
  return (
    <div className='flex items-center gap-2 select-none'>
      <Image
        src='/images/logo.png'
        alt='SAVVY'
        width={40}
        height={40}
        priority
        sizes='40px'
        className='h-10 w-auto'
      />
      {/* Wordmark */}
    </div>
  );
}
