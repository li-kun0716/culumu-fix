'use client';

import { Typography, Form, Input, Checkbox, App, Flex } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useCallback, useEffect } from 'react';

import colors from '@/theme/colors';
import { useTranslation } from '@/i18n/client';
import FlowStepBar from '@/app/components/sign-up/FlowStepBar';
import StepController from '@/app/components/sign-up/StepController';
import InputBadge from '@/app/components/sign-up/InputBadge';
import { useSetUserSurveyMutation } from '@/api';
import { useUserContext } from '@/app/hooks/useUserContext';
import { ActionTypes } from '@/app/hooks/userUser';

type FieldType = {
  discussionTopics?: string;
  potentialReferrals: string;
  isAccepted: boolean;
};

const Page: React.FC = () => {
  const { t } = useTranslation('auth-page');
  const router = useRouter();
  const { setUserSurvey, loading } = useSetUserSurveyMutation();

  const { message } = App.useApp();

  const [form] = Form.useForm();

  const { state, setState } = useUserContext();

  const handleSubmit = useCallback(
    (values: FieldType) => {
      setState({ type: ActionTypes.SetUserSurvey, payload: form.getFieldsValue() });
      setUserSurvey({
        discussionTopics: values.discussionTopics ?? '',
        potentialReferrals: values.potentialReferrals
      }).then(() => {
        message.success(t('common:updateSuccess'));
        router.push('/user/sign-up/success');
      });
    },
    [router, setUserSurvey]
  );

  useEffect(() => {
    form.setFieldsValue(state.survey);
  }, [form, state.survey]);

  return (
    <div style={{ padding: '32px 24px 144px' }}>
      <FlowStepBar curStep={3} />
      <div style={{ padding: '16px 0' }}>
        <Typography style={{ fontSize: 22, fontWeight: 600, marginBottom: '6px', textAlign: 'center' }}>
          {t('signUp.capability.title')}
        </Typography>
      </div>
      <Form
        layout="vertical"
        style={{ paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '18px' }}
        form={form}
        onFinish={handleSubmit}
        requiredMark={false}
        scrollToFirstError
      >
        <Typography.Text style={{ fontSize: '19px', fontWeight: '600' }}>
          {t('signUp.capability.subTitle')}
        </Typography.Text>
        <Form.Item<FieldType>
          label={
            <>
              {t('signUp.capability.talkAbout')}
              <InputBadge />
            </>
          }
          name="discussionTopics"
          rules={[{ required: false }]}
          style={{ marginBottom: '0px' }}
        >
          <Input.TextArea
            placeholder={t('signUp.capability.talkAboutPlaceholder')}
            autoSize
            style={{ whiteSpace: 'pre-wrap', padding: '12px 16px', fontSize: 12, minHeight: 83 }}
            maxLength={500}
          />
        </Form.Item>
        <Form.Item<FieldType>
          label={
            <div>
              {t('signUp.capability.introduceTo')}
              <Typography.Text
                style={{
                  width: '100%',
                  display: 'block',
                  fontSize: '11px',
                  fontWeight: '300',
                  textAlign: 'left',
                  color: colors.gray[700],
                  marginBottom: '8px'
                }}
              >
                {t('signUp.capability.introduceToTip')}
              </Typography.Text>
            </div>
          }
          name="potentialReferrals"
          rules={[{ required: true, message: t('common:rule.required') }]}
          style={{ marginBottom: '0px' }}
        >
          <Input.TextArea
            placeholder={t('signUp.capability.introduceToPlaceholder')}
            autoSize
            style={{ whiteSpace: 'pre-wrap', padding: '12px 16px', fontSize: 12 }}
            maxLength={500}
          />
        </Form.Item>
        <Form.Item
          name="isAccepted"
          valuePropName="checked"
          style={{ marginTop: 46 }}
          rules={[
            { required: true, message: '' },
            ({}) => ({
              validator(_, value) {
                if (value === true) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('signUp.capability.approveRule')));
              }
            })
          ]}
        >
          <Checkbox>
            <Flex style={{ fontSize: 12 }} align="center">
              <Typography.Link>{t('common:termsOfUse')}</Typography.Link>・
              <Typography.Link>{t('common:privacyPolicy')}</Typography.Link>
              {t('signUp.capability.agreeTo')}
            </Flex>
          </Checkbox>
        </Form.Item>
      </Form>
      <StepController
        loading={loading}
        onReturn={() => {
          setState({ type: ActionTypes.SetUserSurvey, payload: form.getFieldsValue() });
          router.replace('/user/sign-up/occupation');
        }}
        onNext={() => form.submit()}
      />
    </div>
  );
};

export default Page;
