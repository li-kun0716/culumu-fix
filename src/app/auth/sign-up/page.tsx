'use client';
import Image from 'next/image';
import { Flex, Typography } from 'antd';
import colors from '@/theme/colors';
import { Button } from '@/components/antd';
import { useTranslation } from '@/i18n/client';

const Page: React.FC = () => {
  const { t } = useTranslation('auth-page');

  const itemList = [
    {
      image: '/images/myself-to-articipate.png',
      title: '自分が参加する',
      description: '企業のインタビューやワークショップにあなた自身が参加します。'
    },
    {
      image: '/images/introduce-someone.png',
      title: '人を紹介する',
      description: '企業のインタビューやワークショップに参加してくれる友人・知人を紹介します。'
    }
  ];

  return (
    <Flex
      vertical
      justify="center"
      align="center"
      style={{
        overflow: 'hidden',
        minHeight: '100vh',
        backgroundImage: 'url(/images/auth-top-icon.png),url(/images/auth-bottom-icon.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right -68px, left bottom',
        padding: '40px 24px',
        boxSizing: 'border-box',
        backgroundColor: colors.gray[100]
      }}
    >
      <Flex
        align="center"
        style={{
          flexDirection: 'column',
          height: 'calc(100vh - 80px)',
          paddingTop: '8px'
        }}
      >
        <Image
          src="/logo.png"
          alt="logo"
          width={306}
          height={34.3}
          style={{
            backgroundSize: 'contain'
          }}
        />
        <Typography
          style={{
            textAlign: 'center',
            marginTop: '48px',
            marginBottom: '32px',
            fontSize: '16px',
            fontWeight: 300,
            letterSpacing: '.48px'
          }}
        >
          {t('signUp.title')}
        </Typography>
        <Flex
          gap="20px"
          style={{
            flexDirection: 'column',
            width: '100%',
            flexWrap: 'wrap'
          }}
        >
          {itemList.map((item) => (
            <Flex
              key={item.title}
              style={{
                width: '100%',
                backgroundColor: 'white',
                padding: '10px',
                borderRadius: '20px',
                gap: '17.8px',
                boxSizing: 'border-box'
              }}
            >
              <Image src={item.image} alt={''} width={126} height={106} />
              <Flex
                style={{
                  flexDirection: 'column'
                }}
              >
                <Typography
                  style={{
                    fontSize: '19px',
                    lineHeight: '150%',
                    fontWeight: 600,
                    marginBottom: '8px',
                    letterSpacing: '.57px'
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  style={{
                    fontSize: '14px',
                    lineHeight: '150%',
                    fontWeight: 300,
                    color: colors.gray[700],
                    letterSpacing: '.42px'
                  }}
                >
                  {item.description}
                </Typography>
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Button
          type="outline"
          style={{
            height: '64px',
            width: '100%',
            marginTop: '64px',
            backgroundColor: colors.accent[800],
            color: colors.white,
            fontSize: '16px',
            fontWeight: 600
          }}
          onClick={() => {}}
        >
          登録を開始する
        </Button>
      </Flex>
    </Flex>
  );
};

export default Page;
