'use client';

import React from 'react';
import Image from 'next/image';
import { Flex, Switch } from 'antd';
import { useTranslation } from '@/i18n/client';

export default function Page() {
  const { t } = useTranslation();
  const navList = t('notifyPage.navList').split('|');
  const [selected, setSelected] = React.useState(0);
  const [isOpen, setIsOpen] = React.useState(false);
  const switchChangeHandle = (checked: boolean) => {
    setIsOpen(checked);
  };

  return (
    <div
      style={{
        backgroundColor: '#FBFAF8',
        minHeight: '100vh'
      }}
    >
      <header
        style={{
          padding: '32px 24px',
          fontSize: '22px',
          fontWeight: '600',
          lineHeight: '33px',
          letterSpacing: '0.66px'
        }}
      >
        <p>{t('notifyPage.title')}</p>
      </header>
      <main>
        <Flex
          align="center"
          justify="space-between"
          style={{ backgroundColor: '#FFFFFF', padding: '0 20px', marginBottom: '28px', height: '61px' }}
        >
          <span style={{ fontSize: '16px', letterSpacing: '0.48px', lineHeight: '24px', color: '#212121' }}>通知</span>
          <Switch defaultChecked={isOpen} onChange={switchChangeHandle} />
        </Flex>
        {isOpen && (
          <div style={{ listStyle: 'none', backgroundColor: '#FFFFFF' }}>
            {navList.map((item, index) => (
              <Flex
                align="center"
                justify="space-between"
                style={{
                  height: '61px',
                  padding: '0 20px',
                  borderBottom: '1px solid #eee',
                  letterSpacing: '0.48px',
                  fontWeight: '300',
                  lineHeight: '24px',
                  boxSizing: 'border-box',
                  fontSize: '16px'
                }}
                onClick={() => setSelected(index)}
                key={index}
              >
                <span>{item}</span>
                <Image
                  src={'/images/Done.svg'}
                  width={13}
                  height={9}
                  alt="done-icon"
                  style={{ display: index === selected ? '' : 'none' }}
                />
              </Flex>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
