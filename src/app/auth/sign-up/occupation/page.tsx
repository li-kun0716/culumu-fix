'use client';

import { Typography, Form, Select } from 'antd';
import colors from '@/theme/colors';
import { useTranslation } from '@/i18n/client';
import FlowStepBar from '@/app/components/auth/FlowStepBar';
import StepController from '@/app/components/auth/StepController';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { yearOptions, occupationOptions } from '@/utils/common';

type FieldType = {
  occupations: string[];
};

const Page: React.FC = () => {
  const { t } = useTranslation('auth-page');
  const router = useRouter();
  const [form] = Form.useForm();
  const { Option } = Select;

  const handleSubmit = useCallback(async () => {
    router.replace('/auth/sign-up/capability');
  }, [router]);

  return (
    <div
      style={{
        padding: '32px 24px 144px',
        textAlign: 'center'
      }}
    >
      <FlowStepBar curStep={2} />
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
            whiteSpace: 'pre-wrap'
          }}
        >
          {t('signUp.occupation.title')}
        </Typography>
      </div>
      <div
        style={{
          paddingTop: 40
        }}
      >
        <Typography.Text
          style={{
            fontSize: '19px',
            fontWeight: '600',
            textAlign: 'left',
            display: 'block'
          }}
        >
          {t('signUp.occupation.subTitle')}
        </Typography.Text>
        <Typography.Text
          style={{
            fontSize: '11px',
            fontWeight: '300',
            textAlign: 'left',
            display: 'block',
            color: colors.gray[700]
          }}
        >
          {t('signUp.occupation.subTitleTip')}
        </Typography.Text>
      </div>
      <Form
        layout="vertical"
        style={{
          paddingTop: '32px',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px'
        }}
        initialValues={{ items: [{}] }}
        form={form}
        onFinish={handleSubmit}
      >
        <Form.List name="items">
          {(fields, { add, remove }) => (
            <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
              {fields.map((field) => (
                <Form.Item<FieldType>
                  key={field.key}
                  name="occupations"
                  rules={[{ required: true, message: '' }]}
                  style={{ display: 'inline-block', marginBottom: '0px' }}
                >
                  <Select
                    placeholder={t('common:select')}
                    style={{
                      height: 48,
                      textAlign: 'left'
                    }}
                  >
                    {occupationOptions().map((year) => (
                      <Option value={year.label} key={year.value}>
                        {year.value}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              ))}

              <div
                onClick={() => add()}
                style={{
                  color: colors.accent[700]
                }}
              >
                + {t('signUp.occupation.add')}
              </div>
            </div>
          )}
        </Form.List>
      </Form>
      <StepController onReturn={() => router.replace('/auth/sign-up/about')} onNext={() => form.submit()} />
    </div>
  );
};

export default Page;
