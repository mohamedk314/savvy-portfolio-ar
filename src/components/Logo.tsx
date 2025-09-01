/** @format */

import Image from "next/image";

export default function Logo() {
  return (
    <div className='flex items-center gap-2'>
      <Image
        src='/images/logo.png'
        alt='SAVVY'
        width={40}
        height={40}
        priority
        className='h-10 w-auto'
      />
      <span className='text-lg font-semibold tracking-wide'></span>
    </div>
  );
}
