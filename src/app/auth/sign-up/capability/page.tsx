'use client';

import { Typography, Form, Input, Checkbox } from 'antd';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

import colors from '@/theme/colors';
import { useTranslation } from '@/i18n/client';
import FlowStepBar from '@/app/components/auth/FlowStepBar';
import StepController from '@/app/components/auth/StepController';
import InputBadge from '@/app/components/auth/InputBadge';

type FieldType = {
  talkAbout?: string;
  introduction: string;
  isAccepted: boolean;
};

const Page: React.FC = () => {
  const { t } = useTranslation('auth-page');
  const router = useRouter();
  const [form] = Form.useForm();

  const handleSubmit = useCallback(async () => {
    router.replace('/auth/sign-up/success');
  }, [router]);

  return (
    <div
      style={{
        padding: '32px 24px 144px'
      }}
    >
      <FlowStepBar curStep={3} />
      <div
        style={{
          padding: '16px 0'
        }}
      >
        <Typography
          style={{
            fontSize: 22,
            fontWeight: 600,
            marginBottom: '6px',
            textAlign: 'center'
          }}
        >
          {t('signUp.capability.title')}
        </Typography>
      </div>
      <Form
        layout="vertical"
        style={{
          paddingTop: '40px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}
        form={form}
        onFinish={handleSubmit}
      >
        <Typography.Text
          style={{
            fontSize: '19px',
            fontWeight: '600'
          }}
        >
          {t('signUp.capability.subTitle')}
        </Typography.Text>
        <Form.Item<FieldType>
          label={
            <>
              {t('signUp.capability.talkAbout')}
              <InputBadge />
            </>
          }
          name="talkAbout"
          rules={[{ required: false }]}
          style={{
            marginBottom: '0px'
          }}
        >
          <Input.TextArea
            placeholder={t('signUp.capability.talkAboutPlaceholder')}
            autoSize
            style={{
              whiteSpace: 'pre-wrap',
              padding: '12px 16px',
              fontSize: 12
            }}
            maxLength={500}
          />
        </Form.Item>
        <Form.Item<FieldType>
          label={t('signUp.capability.introduceTo')}
          name="introduction"
          rules={[{ required: true, message: t('common:rule.required') }]}
          style={{
            marginBottom: '0px'
          }}
        >
          <div>
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
            <Input.TextArea
              placeholder={t('signUp.capability.introduceToPlaceholder')}
              autoSize
              style={{
                whiteSpace: 'pre-wrap',
                padding: '12px 16px',
                fontSize: 12
              }}
              maxLength={500}
            />
          </div>
        </Form.Item>
        <Form.Item
          name="isAccepted"
          valuePropName="checked"
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
          <div>
            <Checkbox />
            <Typography.Link
              style={{
                marginLeft: 6
              }}
            >
              利用規約
            </Typography.Link>
            ・<Typography.Link>プライバシーポリシー</Typography.Link>
            に同意します
          </div>
        </Form.Item>
      </Form>
      <StepController onReturn={() => router.replace('/auth/sign-up/occupation')} onNext={() => form.submit()} />
    </div>
  );
};

export default Page;