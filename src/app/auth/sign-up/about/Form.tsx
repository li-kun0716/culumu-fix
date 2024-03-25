'use client';

import React from 'react';
import { Form as AntdForm, Input, Typography, Select, message } from 'antd';
import styled from 'styled-components';
import { useRouter } from 'next/navigation';
import moment from 'moment';

import { useTranslation } from '@/i18n/client';
import StepController from '@/app/components/auth/StepController';
import { BirthInput } from '@/app/auth/sign-up/about/BirthInput';
import { UserInput, useUpdateMeMutation } from '@/api';

type FieldType = Record<'name' | 'nameKana' | 'tel' | 'email' | 'postalCode' | 'year' | 'month' | 'day', string> & {
  gender: 'male' | 'female';
  birth?: Date;
};

const StyledForm = styled(AntdForm)`
  .ant-form-item {
    margin-bottom: 0;
  }
  .ant-form-item-label > .ant-form-item-required::before {
    content: '' !important;
  }
`;

export const Form: React.FC = () => {
  const { t } = useTranslation('auth-page');
  const router = useRouter();
  const [messageApi] = message.useMessage();
  const [form] = AntdForm.useForm<FieldType>();

  const { updateMe, loading } = useUpdateMeMutation();

  const handleSubmit = (values: FieldType) => {
    updateMe({
      name: values.name,
      nameKana: values.nameKana,
      email: values.email,
      birthday: moment(values.birth).format('YYYY-MM-DD'),
      gender: values.gender,
      phone: values.tel,
      postalCode: values.postalCode
    }).then(() => {
      messageApi.open({ type: 'success', content: '更新しました。' });
      router.push('/auth/sign-up/occupation');
    });
  };

  return (
    <StyledForm
      layout="vertical"
      style={{ paddingTop: '40px', display: 'flex', flexDirection: 'column', gap: '18px' }}
      form={form}
      onFinish={() => handleSubmit(form.getFieldsValue())}
    >
      <Typography.Text style={{ fontSize: '19px', fontWeight: '600', textAlign: 'left' }}>
        {t('signUp.about.basicInfo')}
      </Typography.Text>
      <AntdForm.Item<FieldType>
        label={t('signUp.about.name')}
        name="name"
        rules={[{ required: true, message: t('common:rule.required') }]}
        style={{ marginBottom: '0px' }}
      >
        <Input placeholder={t('common:placeholder.name')} style={{ height: '47px' }} />
      </AntdForm.Item>
      <AntdForm.Item<FieldType>
        label={t('signUp.about.kanaName')}
        name="nameKana"
        rules={[
          { required: true, message: t('common:rule.required') },
          { pattern: /^[ァ-ヴー]+$/, message: t('common:rule.fullWidthKatakana') }
        ]}
      >
        <Input placeholder={t('common:placeholder.kanaName')} style={{ height: '47px' }} />
      </AntdForm.Item>
      <AntdForm.Item<FieldType>
        label={t('signUp.about.birth')}
        name={'birth'}
        // dependencies={['year', 'month', 'day']}
        rules={[{ required: true, message: t('common:rule.halfWidthNumber') }]}
      >
        <BirthInput onChange={(date) => form.setFieldValue('birth', date)} />
      </AntdForm.Item>
      <AntdForm.Item<FieldType>
        label={t('signUp.about.gender')}
        name="gender"
        rules={[{ required: true, message: t('common:rule.required') }]}
      >
        <Select placeholder={t('common:select')} style={{ height: '48px' }}>
          <Select.Option value="female">女性</Select.Option>
          <Select.Option value="male">男性</Select.Option>
        </Select>
      </AntdForm.Item>
      <Typography.Text style={{ fontSize: '19px', fontWeight: '600', textAlign: 'left', marginTop: '22px' }}>
        {t('signUp.about.contactInfo')}
      </Typography.Text>
      <AntdForm.Item<FieldType>
        label={t('signUp.about.tel')}
        name="tel"
        rules={[
          { required: true, message: t('common:rule.required') },
          { pattern: /^[0-9]+$/, message: t('common:rule.halfWidthNumber') }
        ]}
      >
        <Input placeholder="12345678900" style={{ height: '47px' }} />
      </AntdForm.Item>
      <AntdForm.Item<FieldType>
        label={t('signUp.about.email')}
        name="email"
        rules={[
          { required: true, message: t('common:rule.required') },
          {
            pattern:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: t('common:rule.halfWidthAlphanumeric')
          }
        ]}
      >
        <Input placeholder="contact@xxx.com" style={{ height: '47px' }} />
      </AntdForm.Item>
      <Typography.Text style={{ fontSize: '19px', fontWeight: '600', textAlign: 'left', marginTop: '22px' }}>
        {t('signUp.about.address')}
      </Typography.Text>
      <AntdForm.Item<FieldType>
        label={t('signUp.about.zipCode')}
        name="postalCode"
        rules={[
          { required: true, message: t('common:rule.required') },
          { pattern: /^\d{7}$/, message: t('common:rule.required') }
        ]}
      >
        <Input placeholder="1234567" style={{ height: '47px' }} />
      </AntdForm.Item>
      <StepController loading={loading} onReturn={() => router.replace('/auth/sign-up')} onNext={() => form.submit()} />
    </StyledForm>
  );
};
