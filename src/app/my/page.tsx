'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from '@/i18n/client';
import { Flex, Typography, List, Button } from 'antd';
const { Text } = Typography;
export default function Page() {
  const { t } = useTranslation();
  const [navIndex, setNavIndex] = useState(1);
  const barList = t('myPage.barList').split('|');

  const computedStyle = (index: number) => {
    const style: React.CSSProperties = {
      height: '48px',
      flex: '1',
      color: index === navIndex ? '#ED7B01' : '#9E9E9E',
      borderBottom: index === navIndex ? '3px solid #ED7B01' : '3px solid transparent'
    };
    return style;
  };

  return (
    <div style={{ backgroundColor: '#FBFAF8', minHeight: '100vh', position: 'relative' }}>
      <nav style={{ backgroundColor: '#fff', height: '51px', borderBottom: '1px solid #E0E0E0' }}>
        <Flex align="center" style={{ height: '100%' }}>
          {barList.map((item, index) => (
            <Flex
              align="center"
              justify="center"
              onClick={() => setNavIndex(index)}
              key={item}
              style={computedStyle(index)}
            >
              <Text style={{ fontSize: '15px' }}>{item}</Text>
            </Flex>
          ))}
        </Flex>
      </nav>
      {navIndex === 1 ? <Manager /> : <MyPage />}
    </div>
  );
}

function Manager() {
  const { t } = useTranslation();
  const navList = [
    {
      icon: '/images/Person.svg',
      title: t('myPage.info')
    },
    {
      icon: '/images/Person.svg',
      title: t('myPage.notify')
    },
    {
      icon: '/images/Dicussion.svg',
      title: t('myPage.query')
    },
    {
      icon: '/images/Shield.svg',
      title: t('myPage.policy')
    }
  ];

  return (
    <>
      <Flex align="center" style={{ height: '97px', paddingLeft: '24px' }}>
        <Text strong style={{ fontSize: '22px', letterSpacing: '0.66px' }}>
          マイページ
        </Text>
      </Flex>
      <main>
        <List
          style={{ backgroundColor: '#fff' }}
          dataSource={navList}
          renderItem={(item) => (
            <List.Item style={{ height: '61px' }}>
              <Flex align="center" gap={16} style={{ width: '100%', boxSizing: 'border-box', padding: '0  24px' }}>
                <Image src={item.icon} alt="icon" width={18} height={20} />
                <Text style={{ fontSize: '16px', fontWeight: '300', letterSpacing: '0.48px' }}>{item.title}</Text>
                <Image
                  style={{ marginLeft: 'auto' }}
                  src={'/images/Chevron_Right_Off.svg'}
                  alt="right-cion"
                  width={8}
                  height={14}
                />
              </Flex>
            </List.Item>
          )}
        />
      </main>
      <Button
        style={{
          width: '100%',
          borderRadius: '0',
          height: '61px',
          border: 'none',
          backgroundColor: '#FFF',
          marginTop: '28px',
          textAlign: 'left',
          paddingLeft: '20px'
        }}
      >
        <Text style={{ color: '#E76B00', fontWeight: '300' }}>{t('myPage.back')}</Text>
      </Button>
    </>
  );
}
function MyPage() {
  return <></>;
}
