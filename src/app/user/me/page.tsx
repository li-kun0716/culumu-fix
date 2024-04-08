'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { Flex, Typography, List, Button } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useTranslation } from '@/i18n/client';
import colors from '@/theme/colors';
import { useUserContext } from '@/app/hooks/useUserContext';

export default function Page() {
  const { state } = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (!state.isRegistered) router.replace('/user/sign-up');
  }, [router, state.isRegistered]);

  return (
    <div style={{ backgroundColor: '#FBFAF8', minHeight: '100vh', position: 'relative' }}>
      <Manager />
    </div>
  );
}

const Manager: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const { Text } = Typography;

  const navList = [
    { key: 'profile', icon: '/images/Person.svg', title: t('myPage.title'), link: '/user/me/profile' },
    { key: 'terms', icon: '/images/CheckList.svg', title: t('common:termsOfUse') },
    {
      key: 'privacy-policy',
      icon: '/images/Shield.svg',
      title: t('common:privacyPolicy'),
      link: 'https://culumu.com/privacy_policy'
    }
  ];

  return (
    <>
      <Flex align="center" style={{ height: '97px', paddingLeft: '24px' }}>
        <Text strong style={{ fontSize: '22px', letterSpacing: '0.66px' }}>
          {t('myPage.title')}
        </Text>
      </Flex>
      <main>
        <List
          style={{ backgroundColor: '#fff' }}
          dataSource={navList}
          renderItem={(item) => (
            <List.Item style={{ height: '61px' }}>
              <Flex
                align="center"
                gap={16}
                style={{ width: '100%', boxSizing: 'border-box', padding: '0  24px' }}
                onClick={() => {
                  if (!item.link) return;

                  if (item.key == 'privacy-policy') {
                    const a = document.createElement('a');
                    a.href = item.link;
                    a.style.display = 'none';
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                  } else {
                    router.push(item.link);
                  }
                }}
              >
                <Image src={item.icon} alt="icon" width={24} height={24} />
                <Text style={{ fontSize: '16px', fontWeight: '300', letterSpacing: '0.48px' }}>{item.title}</Text>
                <Image
                  style={{ marginLeft: 'auto' }}
                  src={'/images/Chevron_Right_Off.svg'}
                  alt="right-icon"
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
        <Link
          href={'https://docs.google.com/forms/d/e/1FAIpQLSdl9LQnIl4GCS0TRVwX0iWVmi-AWEacwl276_bADmIfB1J_iA/viewform'}
        >
          <Text style={{ color: colors.status.danger02, fontWeight: '300' }}>{t('myPage.back')}</Text>
        </Link>
      </Button>
    </>
  );
};
