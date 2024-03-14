'use client';
import React, { useState } from 'react';

// eslint-disable-next-line import/no-unused-modules
export default function Page() {
  const barList = ['案件管理', 'マイページ'];
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className=" relative text-[19px] font-[600] tracking-[0.57px] leading-[28.5px] text-[#212121] bg-[#FBF9F6] min-h-screen">
      <header className="pt-8 pb-8 pl-6 pr-6 h-[29px] ">
        <p>退会フォーム</p>
      </header>
      <main>
        <div className="text ml-[49px] mr-[21px] mt-[160px] ">
          <p>退会をご希望の方は、退会理由を入力してから「退会する」を押してください。</p>
        </div>
        <footer className="absolute bottom-5 w-full border-0 border-b-[1px] border-solid border-[#eee]">
          <div className="btn-container flex items-center text-[14px] leading-[21px] tracking-[0.42px]">
            {barList.map((bar, index) => (
              <div
                onClick={() => setActiveIndex(index)}
                key={index}
                className="flex-1 text-[#9E9E9E] h-12 flex items-center justify-center"
                style={
                  index === activeIndex ? { color: '#ED7B01', borderBottom: '1px solid #ED7B01' } : { color: '#9E9E9E' }
                }
              >
                {bar}
              </div>
            ))}
          </div>
        </footer>
      </main>
    </div>
  );
}
