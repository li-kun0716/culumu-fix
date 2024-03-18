'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/i18n/client';

export default function Page() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-[#424242]/70 relative ">
      <div
        className="card absolute top-1/2 left-1/2 translate-x-[-50%] 
      translate-y-[-50%] w-[78%] box-border opacity-1 bg-white pt-8 pb-6 pl-[10px] pr-[10px] rounded-[16px] "
      >
        <p className="text-[22px] font-[600] pl-3 pr-3 leading-[33px] tracking-[0.66px] text-center ">
          {t('setupPage.text')}
        </p>
        <div className="relative h-[141px] w-[140px] mr-auto ml-auto">
          <Image src="/Group627725.png" width={140} height={170} alt="icon"></Image>
        </div>

        <div className="p-5 mt-[28px]">
          <div
            className="button h-[64px] flex justify-center items-center active:opacity-75
           text-[16px] font-[600] leading-6 text-[#fff] bg-[#E76B00] rounded-[10px] "
          >
            {t('setupPage.button')}
          </div>
        </div>
      </div>
    </div>
  );
}
