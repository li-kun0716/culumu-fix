'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Flex, Typography, Input, App, Form } from 'antd';
import { useRouter } from 'next/navigation';

import { useTranslation } from '@/i18n/client';
import colors from '@/theme/colors';
import { useSetUserBioMutation } from '@/api';
import { Button } from '@/app/components/antd';
import { useUserContext } from '@/app/hooks/useUserContext';
import { ActionTypes } from '@/app/hooks/userUser';

type FieldType = {
  bio?: string;
};

const Page: React.FC = () => {
  const { t } = useTranslation('auth-page');
  const { TextArea } = Input;
  const router = useRouter();
  const { setUserBio, loading } = useSetUserBioMutation();
  const { message } = App.useApp();
  const [form] = Form.useForm();

  const buttonStyle = { height: '64px', fontSize: '16px', fontWeight: 600 };

  const { state, setState } = useUserContext();

  const handleSubmit = useCallback(
    (values: FieldType) => {
      setState({ type: ActionTypes.SetUserBio, payload: form.getFieldsValue() });
      setUserBio({ bio: values.bio }).then(() => {
        message.success(t('common:updateSuccess'));
        router.push('/user/sign-up/introduce-success');
      });
    },
    [setUserBio, message, t, router]
  );

  useEffect(() => {
    form.setFieldValue('bio', state.bio);
  }, [form, state.bio]);

  return (
    <Flex vertical justify="center" align="center" style={{ padding: '0 20px' }}>
      <Typography.Title style={{ fontSize: '22px', margin: '64px 0 16px' }}>
        {t('signUp.introduce.title')}
      </Typography.Title>
      <Typography.Text style={{ whiteSpace: 'pre-wrap', textAlign: 'center', fontSize: '16px' }}>
        {t('signUp.introduce.description')}
      </Typography.Text>
      <Form form={form} onFinish={handleSubmit} requiredMark={false} scrollToFirstError style={{ width: '100%' }}>
        <div style={{ margin: '100px 0', width: '100%' }}>
          <Form.Item<FieldType> name="bio" rules={[{ required: false }]} style={{ marginBottom: '0px' }}>
            <TextArea
              rows={6}
              placeholder={t('signUp.introduce.tip')}
              style={{ padding: '12px 16px', fontSize: 12 }}
              maxLength={500}
            />
          </Form.Item>
        </div>
        <Flex
          style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            borderTop: '1px solid #D9D9D9',
            padding: '20px',
            boxSizing: 'border-box',
            backgroundColor: colors.white
          }}
        >
          <Button
            type="outline"
            style={{ ...buttonStyle, width: '35%', color: colors.accent[800], marginRight: '20px', borderWidth: '2px' }}
            onClick={() => router.push('/user/sign-up/introduce-success')}
          >
            {t('common:skip')}
          </Button>
          <Button
            type="outline"
            onClick={() => form.submit()}
            loading={loading}
            style={{ ...buttonStyle, width: '65%', backgroundColor: colors.accent[800], color: colors.white }}
          >
            {t('signUp.complete')}
          </Button>
        </Flex>
      </Form>
    </Flex>
  );
};

export default Page;
