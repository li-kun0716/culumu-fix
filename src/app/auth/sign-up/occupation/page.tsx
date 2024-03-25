'use client';

import { Typography, Form, Select, Input, message } from 'antd';
import { useRouter } from 'next/navigation';
import React, { Fragment, useCallback } from 'react';

import colors from '@/theme/colors';
import { useTranslation } from '@/i18n/client';
import FlowStepBar from '@/app/components/auth/FlowStepBar';
import StepController from '@/app/components/auth/StepController';
import { occupationList, managerialPositionList } from '@/utils/common';
import InputBadge from '@/app/components/auth/InputBadge';
import { useSetUserOccupationsMutation } from '@/api';

const Page: React.FC = () => {
  const { t } = useTranslation('auth-page');
  const router = useRouter();
  const { setUserOccupations, loading } = useSetUserOccupationsMutation();
  const [messageApi] = message.useMessage();

  const [form] = Form.useForm();
  const { Option } = Select;
  const occupation = Form.useWatch('items', form);

  const showAdditionalFields = (idx: number) => {
    const list = occupationList.filter((occupation, index) => [0, 1, 2, 3, 6, 10].includes(index));
    return occupation?.length && list.includes(occupation[idx]?.occupation);
  };

  const showOccupationInput = (idx: number) =>
    occupation?.length && occupationList[occupationList.length - 1] === occupation[idx]?.occupation;

  const handleSubmit = useCallback(() => {
    console.log(form.getFieldsValue());
    // setUserOccupations().then(() => {
    //   messageApi.open({ type: 'success', content: '更新しました。' });
    //   router.push('/auth/sign-up/capability');
    // });
  }, [messageApi, router, setUserOccupations]);

  const Label: React.FC<{ title: string }> = ({ title }) => (
    <Fragment>
      {title}
      <InputBadge />
    </Fragment>
  );

  return (
    <div style={{ padding: '32px 24px 144px' }}>
      <FlowStepBar curStep={2} />
      <div style={{ padding: '16px 0' }}>
        <Typography
          style={{ fontSize: 22, fontWeight: 600, marginBottom: '6px', whiteSpace: 'pre-wrap', textAlign: 'center' }}
        >
          {t('signUp.occupation.title')}
        </Typography>
      </div>
      <div style={{ paddingTop: 40 }}>
        <Typography.Text style={{ fontSize: '19px', fontWeight: '600', textAlign: 'left', display: 'block' }}>
          {t('signUp.occupation.subTitle')}
        </Typography.Text>
        <Typography.Text
          style={{ fontSize: '11px', fontWeight: '300', textAlign: 'left', display: 'block', color: colors.gray[700] }}
        >
          {t('signUp.occupation.subTitleTip')}
        </Typography.Text>
      </div>
      <Form
        layout="vertical"
        style={{ paddingTop: '32px', display: 'flex', flexDirection: 'column', gap: '18px' }}
        initialValues={{ items: [{}] }}
        form={form}
        onFinish={handleSubmit}
      >
        <Form.List name="items">
          {(fields, { add }) => (
            <div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
              {fields.map((field, idx) => (
                <div key={field.key}>
                  <Typography.Text style={{ display: 'block', fontSize: 14, fontWeight: 600 }}>
                    {t('signUp.occupation.occupation', { number: idx > 0 ? idx : '' })}
                  </Typography.Text>
                  <Typography.Text style={{ display: 'block', fontSize: 11, fontWeight: 300, marginBottom: 8 }}>
                    {t('signUp.occupation.occupationTip')}
                  </Typography.Text>
                  <Form.Item
                    key={field.key}
                    name={[field.name, 'occupation']}
                    rules={[{ required: true, message: t('common:rule.required') }]}
                    style={{ marginBottom: '0px' }}
                  >
                    <Select placeholder={t('common:select')} style={{ height: 48 }}>
                      {occupationList.map((occupation) => (
                        <Option value={occupation} key={occupation}>
                          {occupation}
                        </Option>
                      ))}
                    </Select>
                  </Form.Item>
                  {showOccupationInput(idx) && (
                    <Form.Item
                      name={[field.name, 'occupationInput']}
                      rules={[{ required: true, message: t('common:rule.required') }]}
                      style={{ marginTop: 12 }}
                    >
                      <Input placeholder={t('common:other')} style={{ height: 48 }} />
                    </Form.Item>
                  )}
                  {showAdditionalFields(idx) && (
                    <div style={{ paddingTop: 18 }}>
                      <Form.Item
                        label={<Label title={t('signUp.occupation.organizationName')} />}
                        name={[field.name, 'organizationName']}
                      >
                        <Input placeholder={t('common:placeholder.company')} style={{ height: 48 }} maxLength={100} />
                      </Form.Item>
                      <Form.Item
                        label={<Label title={t('signUp.occupation.managerialPosition')} />}
                        name={[field.name, 'managerialPosition']}
                      >
                        <Select placeholder={t('common:select')} style={{ height: 48 }}>
                          {managerialPositionList.map((occupation) => (
                            <Option value={occupation} key={occupation}>
                              {occupation}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                  )}
                </div>
              ))}
              <div onClick={() => add()} style={{ color: colors.accent[700], width: 124, margin: '0 auto' }}>
                + {t('signUp.occupation.add')}
              </div>
            </div>
          )}
        </Form.List>
      </Form>
      <StepController
        loading={loading}
        onReturn={() => router.replace('/auth/sign-up/about')}
        onNext={() => form.submit()}
      />
    </div>
  );
};

export default Page;
