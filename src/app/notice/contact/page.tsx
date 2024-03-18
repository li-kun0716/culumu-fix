import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="bg-[#FBF7F0] min-h-screen flex flex-col">
      <div className="flex-1" style={{ backgroundColor: 'rgb(129 162 210)' }}>
        <header className="h-[60px] flex items-center pl-[18px]">
          <div className="dot bg-[#B5EBE8] size-[27px] rounded-full"></div>
        </header>
        <main>
          <div className="card rounded-[10px] overflow-hidden w-[84%] bg-white ml-5">
            <div className="header flex items-center h-[72px] bg-[#1891F7]/20 gap-2 box-border pl-[14px] pt-[15px] pr-[49px] pb-[9px]">
              <div className="bg-white rounded-full size-[49px] flex items-center justify-center shrink-0 ">
                <Image src="/laba.svg" width={21} height={24.69} alt="icon" />
              </div>

              <p className="text-[#1767A2] font-[600] leading-6 tracking-[0.48px] text-[16px]">
                当てはまるお友達・知人を紹介してくれませんか？
              </p>
            </div>
            <div className="body p-[14px]">
              <div className="gap-[12px] flex-col flex">
                <p className="text-[#000] font-[600] text-[17px] tracking-[0.51px] leading-[25.5px] line-clamp-2">
                  車椅子を日常的に使っている方に運転についてお話を伺いたい
                </p>
                <p className="text-[12px] tracking-[0.36px] leading-[18px] text-[#616161] line-clamp-2 font-[300]">
                  未来のクルマのあり方を検討しています。インタビュー後に実際に皆さんに車を運転していただ...
                </p>
              </div>
              <div className="text-[13px] font-[300] leading-[19.5px] tracking-[0.39px] text-[#000] mt-[12px]">
                <p className="flex items-center gap-[3px]">
                  <Image src={'/Calender.svg'} alt="icon" width={24} height={24} /> <span>回答期限</span> <span>:</span>
                  <span className="font-[600]">11月15日（火）</span>
                </p>
                <p className="flex items-center gap-[3px]">
                  <Image src={'/Yen.svg'} alt="icon" width={24} height={24} /> <span>回答期限</span> <span>:</span>
                  <span className="font-[600]">11月15日（火）</span>
                </p>
                <p className="flex items-center  gap-[3px]">
                  <Image src={'/Pie chart.svg'} alt="icon" width={24} height={24} /> <span>回答期限</span>{' '}
                  <span>:</span>
                  <span className="font-[600]">11月15日（火）</span>
                </p>
                <div className="mt-[12px] rounded-[10px] border-2 border-solid border-[#ED7B01] flex justify-center items-center h-[44px] text-[#ED7B01] text-[16px] font-[600] leading-6 tracking-[0.48px]">
                  案件の詳細を見る
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="p-[8px]">
        <ul className="flex list-none gap-[8px] ">
          <li className="flex-1 bg-white rounded-[4px] flex flex-col items-center">
            <Image src={'/1.png'} width={56} height={55} alt="icon" />
            <p className="text-[15px] font-[600] leading-[22.5px] tracking-[0.45px]">初めての方へ</p>{' '}
            <p className="text-[12px] font-[300] tracking-[0.36px] leading-[18px] text-[#757575]">初めての方はこちら</p>
          </li>
          <li className="flex-1 bg-white rounded-[4px] flex flex-col items-center">
            <Image src={'/Group.png'} width={45} height={53} alt="icon" />
            <p className="text-[15px] font-[600] leading-[22.5px] tracking-[0.45px]">マイページ</p>{' '}
            <p className="text-[12px] font-[300] tracking-[0.36px] leading-[18px] text-[#757575]">会員情報・履歴など</p>
          </li>
          <li className="flex-1 bg-white rounded-[4px] flex flex-col items-center">
            <Image src={'/Asset7.png'} width={54} height={54} alt="icon" />
            <p className="text-[15px] font-[600] leading-[22.5px] tracking-[0.45px]">案件の管理</p>{' '}
            <p className="text-[12px] font-[300] tracking-[0.36px] leading-[18px] text-[#757575]">案件の確認はこちら</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
