'use client';
import React from 'react';
import Image from 'next/image';
// eslint-disable-next-line import/no-unused-modules
export default function Page() {
  const navList = ['毎日', '2日に1回', '1週間に1回'] as const;
  const [selected, setSelected] = React.useState(0);
  return (
    <div className="bg-[#FBFAF8] min-h-screen">
      <header className="pl-6 pr-6 pt-8 pb-8 text-[22px] font-[600] leading-[33px] tracking-[0.66px]">
        <p>通知設定</p>
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
