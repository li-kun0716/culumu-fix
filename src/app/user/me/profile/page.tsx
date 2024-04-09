'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Form, Button, Flex, FormInstance, message, App, Typography } from 'antd';
import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { useRouter } from 'next/navigation';
import Loading from '@/app/components/Loading';
import { useTranslation } from '@/i18n/client';
import { useGetUserInfoQuery, useUpdateUserInfoMutation } from '@/api';

import './information.css';
import { BasInfoAndIntro, BasicInformation, Contact, Occupations, Paragraph, Place } from './_components';

export type FieldType = UserInfo & {
  year: number;
  day: number;
  month: number;
  [key: string]: number | string;
};

const userInfo: UserInfo = {
  name: 'test',
  nameKana: 'test',
  email: 'test@test.com',
  birthday: '2023-01-01T00:00:00.000Z',
  phone: '09012345678',
  gender: 'male',
  postalCode: '1234567',
  discussionTopics: 'hello Topics',
  potentialReferrals: 'hello referrals',
  bio: 'hello bio',
  occupations: [
    {
      name: '会社員',
      occupationType: 'genera',
      organization: 'organization-test',
      position: 'position-test',
      positionType: 'other'
    }
  ],
  isRegistered: true
};

export default function Page() {
  const { t } = useTranslation();
  const [form] = Form.useForm<FieldType>();
  // const { userInfo, refetch } = useGetUserInfoQuery();
  const { updateUserInfo } = useUpdateUserInfoMutation();
  const { modal } = App.useApp();
  const { Text } = Typography;
  const router = useRouter();

  const basRef = useRef<{ computedDays: (changeValues: FieldType, values: FieldType, form: FormInstance) => void }>(
    null
  );
  const formHandleChange = (changeValues: FieldType, values: FieldType) => {
    basRef.current?.computedDays(changeValues, values, form);
  };
  const submitHandle = (_value: FieldType) => {
    const newOccupations: Array<Occupation> = [];
    occupations.forEach((_, index: number) => {
      const newOccupation: Partial<Occupation> = {
        name:
          _value[`occupationName${index}`] === 'other'
            ? (_value[`otherOccupationName${index}`] as string)
            : (_value[`occupationName${index}`] as string),
        occupationType: _value[`occupationName${index}`] === 'other' ? 'other' : 'general'
      };

      if (_value[`organizationName${index}`]) {
        newOccupation.organization = _value[`organizationName${index}`] as string;
        newOccupation.positionType = _value[`positionName${index}`] === 'other' ? 'other' : 'general';
      }
      if (_value[`positionName${index}`]) {
        newOccupation.position =
          _value[`positionName${index}`] === 'other'
            ? (_value[`otherPositionName${index}`] as string)
            : (_value[`positionName${index}`] as string);
        newOccupation.positionType = _value[`positionName${index}`] === 'other' ? 'other' : 'general';
      }
      newOccupations.push(newOccupation as Occupation);
    });

    const uploadData: UserInfo = {
      name: _value.name,
      nameKana: _value.nameKana,
      email: _value.email,
      birthday: format(
        parseISO(format(new Date(_value.year, _value.month - 1, _value.day), 'yyyy-MM-dd') ?? ''),
        "yyyy-MM-dd'T'HH:mm:ssXXX"
      ),
      phone: _value.phone,
      gender: _value.gender,
      postalCode: _value.postalCode,
      discussionTopics: _value.discussionTopics,
      potentialReferrals: _value.potentialReferrals,
      bio: _value.bio,
      occupations: newOccupations
    };
    updateUserInfo(uploadData)
      .then(() => {
        modal.confirm({
          icon: <></>,
          title: (
            <Text
              strong
              style={{
                fontSize: '22px',
                lineHeight: '33px',
                padding: '0 12px',
                letterSpacing: '0.66px',
                textAlign: 'center',
                display: 'inline-block'
              }}
            >
              {t('setupPage.text')}
            </Text>
          ),
          footer: (_, { OkBtn }) => (
            <Flex style={{ padding: '20px' }}>
              <OkBtn />
            </Flex>
          ),
          centered: true,
          okText: t('setupPage.button'),
          onOk: () => router.push('/user/me'),
          okButtonProps: {
            style: {
              fontWeight: 600,
              fontSize: '16px',
              width: '100%',
              height: '64px',
              borderRadius: '10px',
              backgroundColor: '#E76B00',
              color: '#fff'
            }
          },
          content: (
            <Flex justify="center">
              <Image src="/images/Group627725.png" width={140} height={169} alt="icon" />
            </Flex>
          ),
          wrapClassName: 'profile-modal',
          width: 300
        });
        refetch();
      })
      .catch(() => {
        message.error(t('myPage.myInfo.updateFail'));
      });
  };

  // if (!userInfo) {
  //   return <Loading />;
  // }

  return (
    <div className="information" style={{ backgroundColor: '#FBFAF8', position: 'relative', paddingBottom: '100px' }}>
      <Flex align="center" style={{ height: '56px', padding: '0 24px', borderBottom: '1px solid #F0F0F0' }}>
        <h1
          style={{
            fontSize: '22px',
            fontWeight: '600',
            letterSpacing: '0.66px'
          }}
        >
          {t('myPage.myInfo.title')}
        </h1>
      </Flex>
      <Form
        requiredMark={false}
        form={form}
        onValuesChange={formHandleChange}
        onFinish={submitHandle}
        scrollToFirstError
      >
        <main style={{ padding: '24px 20px 32px 20px' }}>
          <BasicInformation basRef={basRef} userInfo={userInfo} />
          <Place userInfo={userInfo} />
          <Contact userInfo={userInfo} />
          <Paragraph />

          <Occupations occupations={userInfo.occupations} />

          <BasInfoAndIntro userInfo={userInfo} />
        </main>
        <footer
          style={{
            backgroundColor: '#fff',
            padding: '16px 20px',
            position: 'fixed',
            bottom: '0',
            left: '0',
            width: '100%',
            boxSizing: 'border-box'
          }}
        >
          <Button
            htmlType="submit"
            style={{ height: '64px', width: '100%', fontSize: '16px', color: '#fff', backgroundColor: '#E76B00' }}
          >
            {t('myPage.myInfo.update')}
          </Button>
        </footer>
      </Form>
    </div>
  );
}
