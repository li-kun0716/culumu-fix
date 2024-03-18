'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/i18n/client';
export default function Page() {
  const { t } = useTranslation();
  const navList = t('notifyPage.navList').split('|');
  const [selected, setSelected] = React.useState(0);
  return (
    <div className="bg-[#FBFAF8] min-h-screen">
      <header className="pl-6 pr-6 pt-8 pb-8 text-[22px] font-[600] leading-[33px] tracking-[0.66px]">
        <p>{t('notifyPage.title')}</p>
      </header>
      <main>
        <ul className="list-none bg-white">
          {navList.map((item, index) => (
            <li
              onClick={() => setSelected(index)}
              key={index}
              className="h-[61px] pl-5 pr-5 flex items-center 
              justify-between text-[16px] font-[300] leading-6 box-border cursor-pointer  
               tracking-[0.48px] border-0 text-[#212121]  border-solid border-b-[1px] border-[#eee]"
            >
              <span>{item}</span>
              <Image
                src={'/Done.svg'}
                width={13}
                height={9}
                alt="done-icon"
                style={{ display: index === selected ? '' : 'none' }}
              />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
