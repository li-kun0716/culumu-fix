'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/i18n/client';
export default function Page() {
  const { t } = useTranslation();
  const navList = [
    {
      icon: '/Person.svg',
      title: t('myPage.info')
    },
    {
      icon: '/Person.svg',
      title: t('myPage.notify')
    },
    {
      icon: '/Dicussion.svg',
      title: t('myPage.query')
    },
    {
      icon: '/Shield.svg',
      title: t('myPage.policy')
    }
  ] as const;
  const barList = t('myPage.barList').split('|');
  const [navIndex, setNavIndex] = useState(1);
  return (
    <div className="my bg-[#FBFAF8] w-[100%] min-h-[100vh] relative">
      <nav className=" bg-white h-[51px] border-0 border-b border-solid border-[#E0E0E0]">
        <ul className="flex list-none h-[100%] items-center">
          {barList.map((item, index) => (
            <li
              onClick={() => setNavIndex(index)}
              key={item}
              className="flex h-[48px]  w-1/2 justify-center items-center text-[#9E9E9E] border-0 border-b-[3px] border-transparent border-solid "
              style={index === navIndex ? { borderColor: '#ED7B01', color: '#ED7B01' } : {}}
            >
              <span className="text-[15px]">{item}</span>
            </li>
          ))}
        </ul>
      </nav>
      <header className="flex items-center h-[97px] pl-[24px]">
        <h1 className="text-[22px] tracking-[0.66px]">マイページ</h1>
      </header>
      <main>
        <ul className="list-none p-0 m-0 font-[300]">
          {navList.map((item) => (
            <li
              key={item.title}
              className="mb-[2px] gap-4 bg-[#fff]  pl-[24px] pr-[24px] min-h-[61px] flex items-center"
            >
              <Image src={item.icon} alt="icon" width={18} height={20} /> <span>{item.title}</span>
              <Image className="ml-auto" src={'/Chevron_Right_Off.svg'} alt="right-cion" width={8} height={14} />
            </li>
          ))}
        </ul>
      </main>
      <div className="bg-[#fff] mt-6 back h-[61px] flex items-center text-[#E76B00] pl-[24px] font-[300]">
        <span>{t('myPage.back')}</span>
      </div>
      <footer className="bg-[#fff] pt-1 pb-1 absolute bottom-0 w-[100%]"></footer>
    </div>
  );
}
