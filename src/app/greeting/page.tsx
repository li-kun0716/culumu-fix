'use client';

import React from 'react';
import Image from 'next/image';
import { Flex } from 'antd';

import { useTranslation } from '@/i18n/client';

export default function Greeting() {
  const { t } = useTranslation();
  const bar = [
    {
      name: t('greetingPage.manage.title'),
      intro: t('greetingPage.manage.text'),
      icon: '/images/Asset71.png'
    },
    {
      name: t('greetingPage.problem.title'),
      intro: t('greetingPage.problem.text'),
      icon: '/images/Asset72.png'
    },
    {
      name: t('greetingPage.myHome.title'),
      intro: t('greetingPage.myHome.text'),
      icon: '/images/Asset74.png'
    },
    {
      name: t('greetingPage.firstCome.title'),
      intro: t('greetingPage.firstCome.text'),
      icon: '/images/Asset73.png'
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
        className="dot"
        style={{
          width: '27px',
          height: '27px',
          backgroundColor: '#D9D9D9',
          borderRadius: '50%',
          position: 'absolute',
          left: '18px'
        }}
      ></div>
      <div className="list" style={{ flex: 1 }}>
        <Flex vertical align="center" gap={10} style={{ fontWeight: 400, fontSize: '12px', color: '#212121' }}>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '10px',
              borderRadius: '15px',
              width: '62%'
            }}
          >
            <p>
              nicknameさん、お友だち登録ありがとうございます☆ 「CULUMUリサーチ」では
              <br />
              <br />
              インタビューやワークショップの案件をお届けします☆
              <br />
              <br />
              早速会員登録を完了して、案件を受け取れるようにしましょう！
            </p>
          </div>
          <div
            style={{
              backgroundColor: '#fff',
              padding: '10px',
              width: '62%',
              borderRadius: '15px'
            }}
          >
            <p>
              ↓会員登録はこちら https://///////////// <br />
              <br /> 参加すると謝礼を受け取れます！
            </p>
          </div>
        </Flex>
      </div>
      <div style={{ backgroundColor: '#FBF7F0', padding: '8px' }}>
        <Flex wrap="wrap" gap={8}>
          {bar.map((item) => (
            <Flex
              vertical
              align="center"
              justify="center"
              key={item.name}
              style={{
                width: 'calc(50% - 4px)',
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
                  color: '#757575',
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
