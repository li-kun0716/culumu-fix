'use client';
import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/i18n/client';

export default function Greeting() {
  const { t } = useTranslation();
  const bar = [
    {
      name: t('greetingPage.manage.title'),
      intro: t('greetingPage.manage.text'),
      icon: '/Asset71.png'
    },
    {
      name: t('greetingPage.problem.title'),
      intro: t('greetingPage.problem.text'),
      icon: '/Asset72.png'
    },
    {
      name: t('greetingPage.myHome.title'),
      intro: t('greetingPage.myHome.text'),
      icon: '/Asset74.png'
    },
    {
      name: t('greetingPage.firstCome.title'),
      intro: t('greetingPage.firstCome.text'),
      icon: '/Asset73.png'
    }
  ] as const;

  return (
    <div className="relative bg-[#8DABD8] pt-[20px] min-h-screen flex flex-col box-border">
      <div className="dot size-[27px] bg-[#D9D9D9] rounded-full absolute left-[18px]"></div>
      <div className="list flex-1">
        <ul className="flex flex-col items-center font-[400] text-[12px] text-[#212121] list-none  gap-[10px]">
          <li className="bg-white p-[10px] w-[62%] rounded-[15px] whitespace-pre-line">
            <p>
              nicknameさん、お友だち登録ありがとうございます☆ 「CULUMUリサーチ」では
              <br />
              <br />
              インタビューやワークショップの案件をお届けします☆
              <br />
              <br />
              早速会員登録を完了して、案件を受け取れるようにしましょう！
            </p>
          </li>
          <li className="bg-white p-[10px] w-[62%] gap-[10px] rounded-[15px] whitespace-pre-line">
            <p>
              ↓会員登録はこちら https://///////////// <br />
              <br /> 参加すると謝礼を受け取れます！
            </p>
          </li>
        </ul>
      </div>
      <div className="bg-[#FBF7F0] p-[8px]">
        <ul className="list-none flex gap-[8px] flex-wrap ">
          {bar.map((item) => (
            <li
              key={item.name}
              className="w-[calc(50%_-_4px)] h-[120px]  bg-white flex flex-col items-center 
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
