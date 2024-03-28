'use client';

import React, { useEffect, useState, useImperativeHandle, useRef } from 'react';
import { Form, Select, SelectProps, Input, Button, Flex, FormInstance } from 'antd';
import Image from 'next/image';
import TextArea from 'antd/es/input/TextArea';
import { ValidatorRule } from 'rc-field-form/lib/interface';
import { useTranslation } from '@/i18n/client';
import { getDaysInMonth } from '@/utils/day';
import './information.css';
import colors from '@/theme/colors';

const inputStyle: React.CSSProperties = {
  fontSize: '15px',
  padding: '12px 16px',
  height: '47px',
  fontWeight: 300,
  color: colors.gray[900],
  letterSpacing: '0.45px'
};
const [initYear, initMonth, initDay] = [2000, 1, 1];
const years: SelectProps['options'] = new Array(1000)
  .fill(0)
  .map((_, index) => ({ label: index + 1900, value: index + 1900 }));
const months: SelectProps['options'] = new Array(12)
  .fill(0)
  .map((_, index) => ({ label: index + 1, value: index + 1 }));
const checkInput = (message: string) => {
  return ((a: { field: string }, value: string) => {
    let reg;
    if (a.field === 'tell') reg = /^[0-9]{6,}$/;
    if (a.field === 'post') reg = /^[0-9]{6,}$/;
    if (a.field === 'email') reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (reg && reg.test(value)) return Promise.resolve(true);
    return Promise.reject(message);
  }) as unknown as ValidatorRule['validator'];
};

interface FieldType {
  fullName: string;
  name: string;
  year: number;
  month: number;
  day: number;
  gender: 'male' | 'female';
  post: string;
  tell: string;
  email: string;
  talk: string;
  refer: string;
  selfIntroduce: string;
  [key: string]: string | number;
}

export default function Information() {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [occupationCount, setOccupationCount] = useState([1, 2]);
  const basRef = useRef<{ computedDays: (changeValues: FieldType, values: FieldType, form: FormInstance) => void }>(
    null
  );
  const formHandleChange = (changeValues: FieldType, values: FieldType) => {
    basRef.current?.computedDays(changeValues, values, form);
  };
  const submitHandle = (_value: FieldType) => {
    console.log(_value);
  };

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
      <Form requiredMark={false} form={form} onValuesChange={formHandleChange} onFinish={submitHandle}>
        <main style={{ padding: '24px 20px 32px 20px' }}>
          <BasicInformation basRef={basRef} />
          <Place />
          <Contact />
          <Paragraph />
          {occupationCount.map((item) => (
            <Occupation index={item} key={item} />
          ))}
          <section>
            <Flex
              align="center"
              justify="center"
              gap={2}
              style={{ margin: '20px 0 40px 0' }}
              onClick={() => setOccupationCount((count) => [...count, count.length + 1])}
            >
              <Image src="/images/Add.svg" width={13.3} height={13.3} alt="add" />
              <span
                style={{
                  fontSize: '14px',
                  fontWeight: '300',
                  lineHeight: '21px',
                  letterSpacing: '0.42px',
                  color: '#ED7B01'
                }}
              >
                {t('myPage.myInfo.add')}
              </span>
            </Flex>
          </section>
          <BasInfoAndIntro />
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

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.42px', lineHeight: '21px' }}>{children}</span>
  );
}
function AnyIcon() {
  const { t } = useTranslation();

  return (
    <span
      style={{
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.33px',
        color: '#fff',
        backgroundColor: colors.gray[500],
        borderRadius: '6px',
        padding: '2px 6px'
      }}
    >
      {t('myPage.myInfo.any')}
    </span>
  );
}
function SessionTitle({ title }: { title: string }) {
  return (
    <p
      style={{
        fontSize: '19px',
        fontWeight: 600,
        letterSpacing: '0.57px',
        marginBottom: '20px'
      }}
    >
      {title}
    </p>
  );
}

function Occupation({ index }: { index: number }) {
  const { t } = useTranslation();
  const occupationSelect = t('myPage.myInfo.select.occupationSelect', { returnObjects: true });
  const postSelect = t('myPage.myInfo.select.postSelect', { returnObjects: true });
  const specialOccupationSelect = t('myPage.myInfo.select.specialList', { returnObjects: true });
  const [occSelect, setOccupationSelect] = useState('');
  return (
    <>
      <section>
        <Form.Item
          name={`occupation${index}`}
          rules={[{ required: true, message: t('myPage.myInfo.validation.required') }]}
          label={
            <div style={{ marginBottom: '10px' }}>
              <Label>{t('myPage.myInfo.occupation') + (index === 1 ? '' : index)}</Label>
              <p
                style={{
                  fontSize: '11px',
                  color: colors.gray[700],
                  fontWeight: 300,
                  letterSpacing: '0.33px'
                }}
              >
                {t('myPage.myInfo.occupationAttention')}
              </p>
            </div>
          }
        >
          <Select
            options={occupationSelect}
            style={{ height: '47px' }}
            placeholder={t('myPage.myInfo.select.placeHolder')}
            onChange={(value) => setOccupationSelect(value)}
          />
        </Form.Item>
        {specialOccupationSelect.indexOf(occSelect) > -1 && (
          <>
            <Form.Item
              name={`organizationName${index}`}
              label={
                <Flex gap={8} align="center">
                  <Label>{t('myPage.myInfo.organizationName')}</Label>
                  <AnyIcon />
                </Flex>
              }
            >
              <Input
                style={inputStyle}
                placeholder={t('myPage.myInfo.input.organizationNamePlaceHolder')}
                maxLength={100}
              />
            </Form.Item>
            <Form.Item
              name={`post${index}`}
              label={
                <Flex gap={8} align="center">
                  <Label>{t('myPage.myInfo.post')}</Label>
                  <AnyIcon />
                </Flex>
              }
            >
              <Select
                options={postSelect}
                style={{ height: '47px' }}
                placeholder={t('myPage.myInfo.select.placeHolder')}
              ></Select>
            </Form.Item>
          </>
        )}
      </section>
    </>
  );
}

function BasicInformation({
  basRef
}: {
  basRef: React.RefObject<{ computedDays: (changeValues: FieldType, values: FieldType, form: FormInstance) => void }>;
}) {
  const { t } = useTranslation();
  const [days, setDays] = useState<Array<{ label: number; value: number }>>([]);
  const genderSelect = t('myPage.myInfo.select.genderSelect', { returnObjects: true });
  const computedDays = (changeValues: FieldType, values: FieldType, form: FormInstance) => {
    if (changeValues['year'] || changeValues['month']) {
      const year = values['year'];
      const month = values['month'];
      setDays(
        new Array(getDaysInMonth(year, month)).fill(0).map((_, index) => ({ label: index + 1, value: index + 1 }))
      );
      form.setFieldsValue({
        day: 1
      });
      console.log(values);
    }
  };
  useImperativeHandle(basRef, () => {
    return {
      computedDays
    };
  });
  useEffect(() => {
    setDays(
      new Array(getDaysInMonth(initYear, initMonth)).fill(0).map((_, index) => ({ label: index + 1, value: index + 1 }))
    );
  }, []);

  return (
    <>
      <section>
        <SessionTitle title={t('myPage.myInfo.basicInformation')} />
        <Form.Item
          name="fullName"
          label={<Label>{t('myPage.myInfo.identity')}</Label>}
          style={{ marginBottom: '18px' }}
          rules={[{ required: true, message: t('myPage.myInfo.validation.required') }]}
        >
          <Input style={inputStyle} placeholder={t('myPage.myInfo.input.fullNamePlaceHolder')} />
        </Form.Item>
        <Form.Item
          label={<Label>{t('myPage.myInfo.furigana')}</Label>}
          name="name"
          rules={[{ required: true, message: t('myPage.myInfo.validation.fullWidth') }]}
        >
          <Input style={inputStyle} placeholder={t('myPage.myInfo.input.namePlaceHolder')} />
        </Form.Item>
        <div style={{ marginBottom: '18px' }}>
          <Label>{t('myPage.myInfo.birthday')}</Label>
          <Flex
            align="center"
            gap={3}
            style={{ width: '100%', marginTop: '12px', fontSize: '15px', letterSpacing: '0.45px' }}
          >
            <Form.Item
              style={{ flex: 1, marginBottom: 0 }}
              name="year"
              rules={[{ required: true, message: t('myPage.myInfo.validation.singleByteNum') }]}
              initialValue={initYear}
            >
              <Select options={years} style={{ height: '48px' }} />
            </Form.Item>
            <span style={{ fontWeight: 600 }}>年</span>
            <Form.Item
              style={{ flex: 1, marginBottom: 0 }}
              name={'month'}
              rules={[{ required: true, message: t('myPage.myInfo.validation.singleByteNum') }]}
              initialValue={initMonth}
            >
              <Select options={months} style={{ height: '48px' }} />
            </Form.Item>
            <span style={{ fontWeight: 600 }}>月</span>
            <Form.Item
              style={{ flex: 1, marginBottom: 0 }}
              name={'day'}
              rules={[{ required: true, message: t('myPage.myInfo.validation.singleByteNum') }]}
              initialValue={initDay}
            >
              <Select options={days} style={{ height: '48px' }} />
            </Form.Item>
            <span style={{ fontWeight: 600 }}>日</span>
          </Flex>
        </div>
        <Form.Item
          label={<Label>{t('myPage.myInfo.gender')}</Label>}
          name="gender"
          rules={[{ required: true, message: t('myPage.myInfo.validation.required') }]}
          style={{ marginBottom: '18px' }}
        >
          <Select
            options={genderSelect}
            style={{ height: '47px' }}
            placeholder={t('myPage.myInfo.select.placeHolder')}
          />
        </Form.Item>
      </section>
    </>
  );
}

function Contact() {
  const { t } = useTranslation();

  return (
    <>
      <section>
        <SessionTitle title={t('myPage.myInfo.contact')} />
        <Form.Item
          name="tell"
          label={<Label>{t('myPage.myInfo.tell')}</Label>}
          rules={[{ required: true }, { validator: checkInput(t('myPage.myInfo.validation.singleByteNum')) }]}
        >
          <Input style={inputStyle} placeholder={t('myPage.myInfo.input.tellPlaceHolder')} />
        </Form.Item>
        <Form.Item
          name={'email'}
          label={<Label>{t('myPage.myInfo.email')}</Label>}
          rules={[{ required: true, validator: checkInput(t('myPage.myInfo.validation.singleByteEN')) }]}
        >
          <Input style={inputStyle} placeholder={t('myPage.myInfo.input.emailPlaceHolder')} />
        </Form.Item>
      </section>
    </>
  );
}

function Place() {
  const { t } = useTranslation();

  return (
    <>
      <section style={{ marginTop: '40px' }}>
        <SessionTitle title={t('myPage.myInfo.place')} />
        <Form.Item
          style={{ marginBottom: '18px' }}
          name={'post'}
          rules={[
            {
              required: true,
              validator: checkInput(
                `${t('myPage.myInfo.validation.noContact')}。\n${t('myPage.myInfo.validation.required')}`
              )
            }
          ]}
          label={
            <div>
              <Label>{t('myPage.myInfo.postalCode')}</Label>
              <p
                style={{
                  color: colors.gray[700],
                  fontSize: '11px',
                  fontWeight: '300',
                  letterSpacing: '0.33px'
                }}
              >
                {t('myPage.myInfo.postalCodeAttention')}
              </p>
            </div>
          }
        >
          <Input style={inputStyle} placeholder={t('myPage.myInfo.input.postalCodePlaceHolder')} />
        </Form.Item>
      </section>
    </>
  );
}

function Paragraph() {
  const { t } = useTranslation();

  return (
    <>
      <section>
        <div style={{ marginBottom: '40px' }}>
          <p
            style={{
              fontSize: '19px',
              fontWeight: '600',
              letterSpacing: '0.57px',
              lineHeight: '28.5px',
              marginBottom: '6px'
            }}
          >
            {t('myPage.myInfo.p1')}
          </p>
          <p
            style={{
              fontSize: '12px',
              fontWeight: '300',
              letterSpacing: '0.36px',
              lineHeight: '18px'
            }}
          >
            {t('myPage.myInfo.p2')}
          </p>
        </div>
      </section>
    </>
  );
}

function BasInfoAndIntro() {
  const { t } = useTranslation();
  const style: React.CSSProperties = {
    backgroundColor: 'white',
    marginBottom: '10px',
    fontSize: '12px',
    fontWeight: '300',
    letterSpacing: '0.36px',
    lineHeight: '18px',
    borderRadius: '10px'
  };
  const textAreaStyle: React.CSSProperties = {
    padding: '12px 16px',
    fontSize: '12px',
    fontWeight: 300,
    letterSpacing: '0.36px',
    lineHeight: '18px'
  };

  return (
    <>
      <section>
        <SessionTitle title={t('myPage.myInfo.basicInformation')} />

        <Flex gap={6} align="center">
          <Label>{t('myPage.myInfo.talkAbout')}</Label>
          <AnyIcon />
        </Flex>
        <Form.Item name={'talk'} style={{ marginTop: '10px' }}>
          <div style={style}>
            <TextArea
              autoSize={{ minRows: 3 }}
              style={textAreaStyle}
              placeholder={t('myPage.myInfo.textArea.talkAboutPlaceHolder')}
            />
          </div>
        </Form.Item>

        <div style={{ marginBottom: '18px' }}>
          <Label>{t('myPage.myInfo.refer')}</Label>
          <p
            style={{
              color: colors.gray[700],
              fontSize: '11px',
              fontWeight: '300',
              letterSpacing: '0.33px',
              marginBottom: '10px'
            }}
          >
            {t('myPage.myInfo.referAttention')}
          </p>
          <Form.Item name="refer" rules={[{ required: true, message: t('myPage.myInfo.validation.required') }]}>
            <div style={style}>
              <TextArea
                autoSize={{ minRows: 2 }}
                style={textAreaStyle}
                placeholder={t('myPage.myInfo.textArea.referPlaceHolder')}
              />
            </div>
          </Form.Item>
        </div>
      </section>
      <section style={{ marginTop: '10px' }}>
        <Form.Item
          name="selfIntroduce"
          rules={[
            {
              required: true,
              message: t('myPage.myInfo.validation.required')
            }
          ]}
        >
          <div>
            <SessionTitle title={t('myPage.myInfo.introduction')} />
            <div style={style}>
              <TextArea
                autoSize={{ minRows: 4 }}
                style={textAreaStyle}
                maxLength={500}
                placeholder={t('myPage.myInfo.textArea.introductionPlaceHolder')}
              />
            </div>
          </div>
        </Form.Item>
      </section>
    </>
  );
}
