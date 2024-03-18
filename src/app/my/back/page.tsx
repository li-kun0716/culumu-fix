'use client';
import React, { useState } from 'react';
import TextArea from 'antd/es/input/TextArea';
import { useTranslation } from '@/i18n/client';

// eslint-disable-next-line import/no-unused-modules
export default function Page() {
  // const barList = ['案件管理', 'マイページ'];
  const [activeIndex, setActiveIndex] = useState(1);
  const { t } = useTranslation();
  return (
    <div className=" relative text-[19px] font-[600] tracking-[0.57px] leading-[28.5px] text-[#212121] bg-[#FBF9F6] min-h-screen">
      <header className="pt-8 pb-8 pl-6 pr-6 h-[29px] ">
        <p>{t('backPage.title')}</p>
      </header>
      <main>
        <div className="text ml-[20px] mr-[20px] ">
          <p className="text-[15px] font-[300] tracking-[0.45px] leading-[22.5px] text-[#212121]">{t('backPage.p1')}</p>
          <p className="mt-[30px] mb-[10px] text-[#616161] text-[11px] leading-[16.5px] tracking-[0.33px]">
            {t('backPage.p2')}
          </p>
          <TextArea placeholder={t('backPage.placeholder')} style={{ minHeight: '69px' }}></TextArea>
        </div>

        {/* <footer className="absolute bottom-5 w-full border-0 border-b-[1px] border-solid border-[#eee]">
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
        </footer> */}
      </main>
    </div>
  );
}
