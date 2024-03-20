'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/i18n/client';

export default function Empty() {
  const { t } = useTranslation();
  const bar = [
    {
      name: t('greetingPage.empty.firstCome.title'),
      intro: t('greetingPage.empty.firstCome.text'),
      icon: '/images/empty01.png'
    },
    {
      name: t('greetingPage.empty.myHome.title'),
      intro: t('greetingPage.empty.myHome.text'),
      icon: '/images/empty03.png'
    },
    {
      name: t('greetingPage.empty.manage.title'),
      intro: t('greetingPage.empty.manage.text'),
      icon: '/images/empty02.png'
    }
  ] as const;

  return (
    <div className="relative bg-[#8DABD8] pt-[20px] min-h-screen flex flex-col box-border">
      <div className="dot size-[27px] bg-[#D9D9D9] rounded-full absolute left-[18px]"></div>

      <div className="list flex-1"></div>
      <div className="bar"></div>
      <div className="bg-[#FBF7F0] p-[8px]">
        <ul className="list-none flex gap-[8px] ">
          {bar.map((item) => (
            <li
              key={item.name}
              className="flex-1 h-[120px]  bg-white flex flex-col items-center 
              justify-center rounded-[6px] shadow-[1px_1px_3px_0px_rgba(0,0,0,0.25)]"
            >
              <Image src={item.icon} alt={item.name} width={54.6} height={54.6} />
              <p className="font-[600] leading-[22.5px] tracking-[0.45px] text-[15px] text-[#000]">{item.name}</p>
              <p className="font-[300] leading-[18px] tracking-[0.36px] text-[12px] text-[#757575]">{item.intro}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
