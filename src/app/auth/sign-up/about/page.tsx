'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { Flex, Form, Input, Typography, Select } from 'antd';
import { useRouter } from 'next/navigation';
import { getDaysInMonth } from 'date-fns';
import styled from 'styled-components';

import { useTranslation } from '@/i18n/client';
import FlowStepBar from '@/app/components/auth/FlowStepBar';
import StepController from '@/app/components/auth/StepController';
import { monthOptions, yearOptions } from '@/utils/common';

type FieldType = {
  name: string;
  kanaName: string;
  gender: 'male' | 'female';
  tel: string;
  email: string;
  zipCode: string;
  year: string;
  month: string;
  day: string;
  birth?: string;
};

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 0px;
  }
  .ant-form-item-label > .ant-form-item-required::before {
    content: '' !important;
  }
`;

const Page: React.FC = () => {
  const { t } = useTranslation('auth-page');
  const { Option } = Select;
  const [form] = Form.useForm();
  const router = useRouter();
  const [selectDayDisabled, setSelectDayDisabled] = useState(true);
  const [dayOptions, setDayOptions] = useState<{ label: string; value: string }[]>([]);

  const yearValue = Form.useWatch('year', form);
  const monthValue = Form.useWatch('month', form);

  const handleSubmit = useCallback(() => {
    console.log(form.getFieldsValue());
    router.push('/auth/sign-up/occupation');
  }, [form, router]);

  useEffect(() => {
    if (yearValue && monthValue) {
      setSelectDayDisabled(false);

      const optionsLength = getDaysInMonth(new Date(yearValue, monthValue));
      const options = Array.from({ length: optionsLength }, (_, index) => {
        return {
          label: index + 1 + '',
          value: index + 1 + ''
        };
      });
      setDayOptions(options);
    }
  }, [yearValue, monthValue]);

  return (
    <div
      style={{
        padding: '32px 24px 144px'
      }}
    >
      <FlowStepBar curStep={1} />
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
          {t('signUp.about.title')}
        </Typography>
        <Typography>{t('signUp.about.tip')}</Typography>
      </div>
      <StyledForm
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
            fontWeight: '600',
            textAlign: 'left'
          }}
        >
          {t('signUp.about.basicInfo')}
        </Typography.Text>
        <Form.Item<FieldType>
          label={t('signUp.about.name')}
          name="name"
          rules={[{ required: true, message: t('common:rule.required') }]}
          style={{
            marginBottom: '0px'
          }}
        >
          <Input
            placeholder={t('common:placeholder.name')}
            style={{
              height: '47px'
            }}
          />
        </Form.Item>
        <Form.Item<FieldType>
          label={t('signUp.about.kanaName')}
          name="kanaName"
          rules={[
            { required: true, message: t('common:rule.required') },
            {
              pattern: /^[ァ-ヴー]+$/,
              message: t('common:rule.fullWidthKatakana')
            }
          ]}
        >
          <Input
            placeholder={t('common:placeholder.kanaName')}
            style={{
              height: '47px'
            }}
          />
        </Form.Item>
        <Form.Item<FieldType>
          label={t('signUp.about.birth')}
          name={'birth'}
          dependencies={['year', 'month', 'day']}
          rules={[
            { required: true, message: '' },
            ({ getFieldValue }) => ({
              validator() {
                if (getFieldValue('year') && getFieldValue('month') && getFieldValue('day')) {
                  form.setFieldValue(
                    'birth',
                    new Date(form.getFieldValue('year'), form.getFieldValue('month'), form.getFieldValue('day'))
                  );
                  return Promise.resolve();
                }
                return Promise.reject(new Error(t('common:rule.halfWidthNumber')));
              }
            })
          ]}
        >
          <Flex gap={8} justify="space-between">
            <Flex align="center" gap={4}>
              <Form.Item<FieldType>
                name="year"
                rules={[{ required: true, message: '' }]}
                style={{ display: 'inline-block', marginBottom: '0px' }}
              >
                <Select
                  placeholder="2000"
                  style={{
                    width: 91,
                    height: 48
                  }}
                >
                  {yearOptions().map((year) => (
                    <Option value={year.label} key={year.value}>
                      {year.value}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Typography.Text>{t('common:year')}</Typography.Text>
            </Flex>
            <Flex align="center" gap={4}>
              <Form.Item<FieldType>
                name="month"
                rules={[{ required: true, message: '' }]}
                style={{ display: 'inline-block' }}
              >
                <Select
                  placeholder="1"
                  style={{
                    width: 91,
                    height: 48
                  }}
                >
                  {monthOptions().map((year) => (
                    <Option value={year.label} key={year.value}>
                      {year.value}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Typography.Text>{t('common:month')}</Typography.Text>
            </Flex>
            <Flex align="center" gap={4}>
              <Form.Item<FieldType>
                name="day"
                rules={[{ required: true, message: '' }]}
                style={{ display: 'inline-block' }}
              >
                <Select
                  disabled={selectDayDisabled}
                  placeholder="1"
                  style={{
                    width: 91,
                    height: 48
                  }}
                >
                  {dayOptions.map((day) => (
                    <Option value={day.label} key={day.value}>
                      {day.value}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Typography.Text>{t('common:day')}</Typography.Text>
            </Flex>
          </Flex>
        </Form.Item>
        <Form.Item<FieldType>
          label={t('signUp.about.gender')}
          name="gender"
          rules={[{ required: true, message: t('common:rule.required') }]}
        >
          <Select
            placeholder={t('common:select')}
            style={{
              height: '48px'
            }}
          >
            <Option value="female">女性</Option>
            <Option value="male">男性</Option>
          </Select>
        </Form.Item>
        <Typography.Text
          style={{
            fontSize: '19px',
            fontWeight: '600',
            textAlign: 'left',
            marginTop: '22px'
          }}
        >
          {t('signUp.about.contactInfo')}
        </Typography.Text>
        <Form.Item<FieldType>
          label={t('signUp.about.tel')}
          name="tel"
          rules={[
            { required: true, message: t('common:rule.required') },
            {
              pattern: /^[0-9]+$/,
              message: t('common:rule.halfWidthNumber')
            }
          ]}
        >
          <Input
            placeholder="12345678900"
            style={{
              height: '47px'
            }}
          />
        </Form.Item>
        <Form.Item<FieldType>
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
          <Input
            placeholder="contact@xxx.com"
            style={{
              height: '47px'
            }}
          />
        </Form.Item>
        <Typography.Text
          style={{
            fontSize: '19px',
            fontWeight: '600',
            textAlign: 'left',
            marginTop: '22px'
          }}
        >
          {t('signUp.about.address')}
        </Typography.Text>
        <Form.Item<FieldType>
          label={t('signUp.about.zipCode')}
          name="zipCode"
          rules={[
            { required: true, message: t('common:rule.required') },
            {
              pattern: /^\d{7}$/,
              message: t('common:rule.required')
            }
          ]}
        >
          <Input
            placeholder="1234567"
            style={{
              height: '47px'
            }}
          />
        </Form.Item>
      </StyledForm>
      <StepController onReturn={() => router.replace('/auth/sign-up')} onNext={() => form.submit()} />
    </div>
  );
};

export default Page;
