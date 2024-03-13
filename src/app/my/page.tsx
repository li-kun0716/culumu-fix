import React from 'react';
import Image from 'next/image';

// eslint-disable-next-line import/no-unused-modules
export default function Page() {
  const navList = [
    {
      icon: '/Person.svg',
      title: 'プロフィール設定'
    },
    {
      icon: '/Person.svg',
      title: '通知設定'
    },
    {
      icon: '/Dicussion.svg',
      title: 'お問い合わせ'
    },
    {
      icon: '/Shield.svg',
      title: '利用規約・プライバシーポリシー'
    }
  ] as const;
  const footBar = [
    {
      icon: '/Memo.svg',
      title: '案件管理'
    },
    {
      icon: '/PersonRed.svg',
      title: 'マイページ'
    }
  ] as const;
  return (
    <div className="my bg-[#FBFAF8] w-[100%] min-h-[100vh] relative">
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
        <span>退会する</span>
      </div>
      <footer className="bg-[#fff] pt-1 pb-1 absolute bottom-0 w-[100%]">
        <nav>
          <ul className="flex list-none ">
            {footBar.map((item) => (
              <li key={item.title} className="flex flex-col w-1/2 justify-center items-center">
                <Image src={item.icon} alt="icon" width={28} height={28} />
                <span className="text-[15px] text-[#9E9E9E]">{item.title}</span>
              </li>
            ))}
          </ul>
        </nav>
      </footer>
    </div>
  );
}
