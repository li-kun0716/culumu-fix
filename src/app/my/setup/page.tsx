import React from 'react';
import Image from 'next/image';

// eslint-disable-next-line import/no-unused-modules
export default function Page() {
  return (
    <div className="min-h-screen bg-[#424242]/70 relative ">
      <div
        className="card absolute top-1/2 left-1/2 translate-x-[-50%] 
      translate-y-[-50%] w-[80%] box-border opacity-1 bg-white pt-8 pb-6 pl-[10px] pr-[10px] rounded-[16px] "
      >
        <p className="text-[22px] font-[600] leading-[33px] tracking-[0.66px] text-center ">
          プロフィールの設定が 完了しました！
        </p>
        <div className="relative h-[141px] w-[140px] mr-auto ml-auto">
          <Image
            className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-[1]"
            src="/Vector2.svg"
            width={53.6}
            height={53.6}
            alt="icon"
          />
          <Image
            className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] z-[2]"
            src="/Vector1.svg"
            width={67.6}
            height={67.6}
            alt="icon"
          />
          <Image className="absolute  z-[3]" src="/mask1.png" width={140} height={141} alt="icon" />

          <Image
            className="absolute left-1/2  translate-x-[-50%] top-[83px] "
            src="/Vector.svg"
            width={53.6}
            height={53.6}
            alt="icon"
          />
          <Image
            className="absolute top-[50px] left-1/2 translate-x-[-50%]"
            src="/mask.png"
            width={118}
            height={119}
            alt="icon"
          />
        </div>
        <div className="p-5 mt-[28px]">
          <div
            className="button h-[64px] flex justify-center items-center
           text-[16px] font-[600] leading-6 text-[#fff] bg-[#E76B00] rounded-[10px] "
          >
            LINEに戻る
          </div>
        </div>
      </div>
    </div>
  );
}
