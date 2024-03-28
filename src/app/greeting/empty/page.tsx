'use client';

import React from 'react';
import Image from 'next/image';
import { Flex } from 'antd';

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
    <Flex
      vertical
      style={{
        position: 'relative',
        backgroundColor: '#8DABD8',
        paddingTop: '20px',
        minHeight: '100vh',
        boxSizing: 'border-box'
      }}
    >
      <div
        style={{
          width: '27px',
          height: '27px',
          backgroundColor: '#D9D9D9',
          borderRadius: '50%',
          position: 'absolute',
          left: '18px'
        }}
      ></div>
      <div className="list" style={{ flex: 1 }}></div>
      <div style={{ backgroundColor: '#FBF7F0', padding: '8px' }}>
        <Flex gap={8}>
          {bar.map((item) => (
            <Flex
              vertical
              align="center"
              justify="center"
              key={item.name}
              style={{
                flex: 1,
                height: '120px',
                backgroundColor: '#fff',
                borderRadius: '6px',
                boxShadow: '1px 1px 3px 0px rgba(0,0,0,0.25)'
              }}
            >
              <Image src={item.icon} alt={item.name} width={54.6} height={54.6} />
              <p
                style={{
                  fontWeight: 600,
                  fontSize: '15px',
                  lineHeight: '22.5px',
                  color: '#000',
                  letterSpacing: '0.45px'
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  fontWeight: 300,
                  fontSize: '12px',
                  lineHeight: '18px',
                  color: colors.gray[600],
                  letterSpacing: '0.36px'
                }}
              >
                {item.intro}
              </p>
            </Flex>
          ))}
        </Flex>
      </div>
    </Flex>
  );
}
