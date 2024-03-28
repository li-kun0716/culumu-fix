import React from 'react';
import Image from 'next/image';
import { Button, Flex } from 'antd';
import colors from '@/theme/colors';

const navbar = [
  {
    title: '初めての方へ',
    intro: '初めての方はこちら',
    src: '/images/Asset72.png'
  },
  {
    title: 'マイページ',
    intro: '会員情報・履歴など',
    src: '/images/Group.png'
  },
  {
    title: '案件の管理',
    intro: '案件の確認はこちら',
    src: '/images/Asset7.png'
  }
];

export default function Page() {
  return (
    <Flex
      vertical
      style={{
        backgroundColor: '#FBF7F0',
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          backgroundColor: 'rgb(129 162 210)',
          flex: 1
        }}
      >
        <Flex align="center" style={{ height: '60px', paddingLeft: '18px' }}>
          <div style={{ backgroundColor: '#fff', width: '27px', height: '27px', borderRadius: '50%' }}></div>
        </Flex>
        <main>
          <Card />
        </main>
      </div>

      <Flex gap={8} style={{ padding: '8px' }}>
        {navbar.map((item) => (
          <Flex
            key={item.title}
            vertical
            align="center"
            style={{ flex: 1, backgroundColor: '#fff', borderRadius: '4px' }}
          >
            <Image src={item.src} width={56} height={55} alt="icon" />
            <p style={{ fontSize: '15px', fontWeight: '600', lineHeight: '22.5px', letterSpacing: '0.45px' }}>
              {item.title}
            </p>
            <p
              style={{
                fontSize: '12px',
                fontWeight: '300',
                lineHeight: '18px',
                letterSpacing: '0.36px',
                color: colors.gray[600]
              }}
            >
              {item.intro}
            </p>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

function Card() {
  return (
    <div
      style={{ borderRadius: '10px', overflow: 'hidden', width: '84%', backgroundColor: '#fff', marginLeft: '20px' }}
    >
      <Flex
        align="center"
        gap={8}
        style={{
          height: '72px',
          backgroundColor: 'rgb(181 235 232 / 0.2)',
          boxSizing: 'border-box',
          padding: '15px 49px 9px 14px'
        }}
      >
        <Flex
          align="center"
          justify="center"
          style={{
            backgroundColor: '#fff',
            borderRadius: '50%',
            width: '49px',
            height: '49px',
            flexShrink: 0
          }}
        >
          <Image src="/images/horn.svg" width={21} height={24.69} alt="icon" />
        </Flex>

        <p style={{ color: '#1767A2', fontWeight: 600, lineHeight: '24px', letterSpacing: '0.48px', fontSize: '16px' }}>
          当てはまるお友達・知人を紹介してくれませんか？
        </p>
      </Flex>
      <div className="body" style={{ padding: '14px' }}>
        <Flex gap={12} vertical>
          <p
            style={{
              color: '#000',
              fontWeight: 600,
              fontSize: '17px',
              letterSpacing: '0.51px',
              lineHeight: '25.5px',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2
            }}
          >
            車椅子を日常的に使っている方に運転についてお話を伺いたい
          </p>
          <p
            style={{
              color: colors.gray[700],
              fontWeight: 300,
              fontSize: '12px',
              letterSpacing: '0.36px',
              lineHeight: '18px',
              overflow: 'hidden',
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2
            }}
          >
            未来のクルマのあり方を検討しています。インタビュー後に実際に皆さんに車を運転していただ...
          </p>
        </Flex>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 300,
            letterSpacing: '0.39px',
            lineHeight: '19.5px',
            color: '#000',
            marginTop: '12px'
          }}
        >
          <Flex gap={3} align="center">
            <Image src={'/images/Calender.svg'} alt="icon" width={24} height={24} /> <span>回答期限</span>
            <span>:</span>
            <span style={{ fontWeight: 600 }}>11月15日（火）</span>
          </Flex>
          <Flex gap={3} align="center">
            <Image src={'/images/Yen.svg'} alt="icon" width={24} height={24} /> <span>回答期限</span>
            <span>:</span>
            <span style={{ fontWeight: 600 }}>11月15日（火）</span>
          </Flex>
          <Flex gap={3} align="center">
            <Image src={'/images/piechart.svg'} alt="icon" width={24} height={24} /> <span>回答期限</span>
            <span>:</span>
            <span style={{ fontWeight: 600 }}>11月15日（火）</span>
          </Flex>
          <Button
            style={{
              marginTop: '12px',
              borderRadius: '10px',
              border: '2px solid #ED7B01',
              height: '44px',
              fontWeight: 600,
              letterSpacing: '0.48px',
              width: '100%'
            }}
          >
            案件の詳細を見る
          </Button>
        </div>
      </div>
    </div>
  );
}
