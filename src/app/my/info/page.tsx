'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { Form, Select, SelectProps } from 'antd';
import Image from 'next/image';
import { Input, Button } from '@/components/antd';
import TextArea from 'antd/es/input/TextArea';
import { getDaysInMonth } from '@/utils/day';
import { useTranslation } from '@/i18n/client';

const inputStyle: React.CSSProperties = {
  fontSize: '15px',
  padding: '12px 16px',
  height: '47px',
  fontWeight: 300,
  color: '#212121',
  letterSpacing: '0.45px'
};

const [initYear, initMonth, initDay] = [2000, 1, 1] as const;
const years: SelectProps['options'] = new Array(1000)
  .fill(0)
  .map((_, index) => ({ label: index + 1900, value: index + 1900 }));
const months: SelectProps['options'] = new Array(12)
  .fill(0)
  .map((_, index) => ({ label: index + 1, value: index + 1 }));

export default function Page() {
  const { t } = useTranslation();
  const genderSelect = useMemo(() => t('myPage.myInfo.select.genderSelect', { returnObjects: true }), []);
  const occupationSelect = useMemo(() => t('myPage.myInfo.select.occupationSelect', { returnObjects: true }), []);
  const postSelect = useMemo(() => t('myPage.myInfo.select.postSelect', { returnObjects: true }), []);
  const [days, setDays] = useState<Array<{ label: number; value: number }>>([]);
  useEffect(() => {
    setDays(
      new Array(getDaysInMonth(initYear, initMonth)).fill(0).map((_, index) => ({ label: index + 1, value: index + 1 }))
    );
  }, []);
  const checkInput = (message: string) => {
    return (a: any, value: any) => {
      let reg;
      if (a.field === 'tell') reg = /^[0-9]{6,}$/;
      if (a.field === 'post') reg = /^[0-9]{6,}$/;
      if (a.field === 'email') reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (reg && reg.test(value)) return Promise.resolve(true);
      return Promise.reject(message);
    };
  };

  const [form] = Form.useForm();
  const formHandleChange = (changeValues: any, values: any) => {
    // set day
    if (changeValues['year'] || changeValues['month']) {
      const year = values['year'];
      const month = values['month'];
      setDays(
        new Array(getDaysInMonth(year, month)).fill(0).map((_, index) => ({ label: index + 1, value: index + 1 }))
      );
      form.setFieldsValue({
        day: 1
      });
    }
    console.log(values);
  };
  const submitHandle = () => {
    form
      .validateFields()
      .then((values) => {
        console.log(values);
      })
      .catch((info) => {
        console.log('Validate Failed:', info);
      });
  };
  return (
    <div className="my-info bg-[#FBFAF8]">
      <header className="h-[56px] flex items-center pl-[24px] pr-[24px] border-b-[1px] border-[#fff] border-solid">
        <h1 className="text-[22px] font-[600] tracking-[0.66px]">プロフィール設定</h1>
      </header>
      <Form form={form} onValuesChange={formHandleChange}>
        <main className="pl-6 pt-6 pr-6 pb-8">
          <section>
            <SessionTitle title={t('myPage.myInfo.title')} />
            <Form.Item
              name="fullName"
              label={<Label>{t('myPage.myInfo.identity')}</Label>}
              style={{ marginBottom: '18px' }}
              validateTrigger="onBlur"
              rules={[{ required: true, message: t('myPage.myInfo.validation.required') }]}
            >
              <Input style={inputStyle} />
            </Form.Item>
            <Form.Item
              label={<Label>{t('myPage.myInfo.furigana')}</Label>}
              name="name"
              validateTrigger="onBlur"
              rules={[{ required: true, message: t('myPage.myInfo.validation.fullWidth') }]}
            >
              <Input style={inputStyle} />
            </Form.Item>
            <div className="mb-[18px]">
              <Label>{t('myPage.myInfo.birthday')}</Label>
              <div className="flex items-center gap-[3px] w-full mt-3 ">
                <Form.Item
                  style={{ flex: 1, marginBottom: 0 }}
                  name="year"
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: t('myPage.myInfo.validation.singleByteNum') }]}
                  initialValue={initYear}
                >
                  <Select options={years} style={{ height: '48px' }} />
                </Form.Item>
                <span className="text-[15px] tracking-[0.45px] font-[600]">年</span>
                <Form.Item
                  style={{ flex: 1, marginBottom: 0 }}
                  name={'month'}
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: t('myPage.myInfo.validation.singleByteNum') }]}
                  initialValue={initMonth}
                >
                  <Select options={months} style={{ height: '48px' }} />
                </Form.Item>
                <span className="text-[15px] tracking-[0.45px] font-[600]">月</span>
                <Form.Item
                  style={{ flex: 1, marginBottom: 0 }}
                  name={'day'}
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: t('myPage.myInfo.validation.singleByteNum') }]}
                  initialValue={initDay}
                >
                  <Select options={days} style={{ height: '48px' }} />
                </Form.Item>
                <span className="text-[15px] tracking-[0.45px] font-[600]">日</span>
              </div>
            </div>

            <Form.Item
              label={<Label>{t('myPage.myInfo.gender')}</Label>}
              validateTrigger="onBlur"
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
          <section>
            <SessionTitle title={t('myPage.myInfo.contact')} />
            <Form.Item
              name="tell"
              label={<Label>{t('myPage.myInfo.tell')}</Label>}
              validateTrigger="onBlur"
              rules={[{ required: true }, { validator: checkInput(t('myPage.myInfo.validation.singleByteNum')) }]}
            >
              <Input style={inputStyle} />
            </Form.Item>
            <Form.Item
              name={'email'}
              label={<Label>{t('myPage.myInfo.email')}</Label>}
              validateTrigger="onBlur"
              rules={[{ required: true, validator: checkInput(t('myPage.myInfo.validation.singleByteEN')) }]}
            >
              <Input style={inputStyle} />
            </Form.Item>
          </section>
          <section>
            <SessionTitle title={t('myPage.myInfo.place')} />
            <Form.Item
              style={{ marginBottom: '18px' }}
              name={'post'}
              validateTrigger="onBlur"
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
                  <p className="text-[#616161] text-[11px] font-[300] tracking-[0.33px] p-0 m-0">
                    {t('myPage.myInfo.postalCodeAttention')}
                  </p>
                </div>
              }
            >
              <Input style={inputStyle} />
            </Form.Item>
          </section>
          <section>
            <div className="mb-[32px]">
              <p className="text-[19px] font-[600] tracking-[0.57px] leading-[28.5px] mb-[6px] m-0">
                {t('myPage.myInfo.p1')}
              </p>
              <p className="text-[12px] font-[300] tracking-[0.36px] leading-[18px] text-center m-0 p-0">
                {t('myPage.myInfo.p2')}
              </p>
            </div>
          </section>
          <section>
            <Form.Item
              name="career1"
              rules={[{ required: true, message: t('myPage.myInfo.validation.required') }]}
              validateTrigger="onBlur"
              label={
                <div className="mb-[10px]">
                  <Label>{t('myPage.myInfo.occupation')}</Label>
                  <p className="text-[#616161] text-[11px] font-[300] tracking-[0.33px] p-0 m-0">
                    {t('myPage.myInfo.occupationAttention')}
                  </p>
                </div>
              }
            >
              <Select
                options={occupationSelect}
                style={{ height: '47px' }}
                placeholder={t('myPage.myInfo.select.placeHolder')}
              />
            </Form.Item>
            <Form.Item
              name={'organizationName1'}
              label={
                <div className="flex gap-[8px]">
                  <Label>{t('myPage.myInfo.organizationName')}</Label>
                  <AnyIcon />
                </div>
              }
            >
              <Input style={inputStyle} />
            </Form.Item>
            <Form.Item
              name={'post1'}
              label={
                <div className="flex gap-[8px]">
                  <Label>{t('myPage.myInfo.post')}</Label>
                  <AnyIcon />
                </div>
              }
            >
              <Select
                options={postSelect}
                style={{ height: '47px' }}
                placeholder={t('myPage.myInfo.select.placeHolder')}
              ></Select>
            </Form.Item>
            <Form.Item
              name={'career2'}
              rules={[{ required: true, message: t('myPage.myInfo.validation.required') }]}
              validateTrigger="onBlur"
              label={
                <div className="mb-[10px]">
                  <Label>{t('myPage.myInfo.occupation2')}</Label>
                  <p className="text-[#616161] text-[11px] font-[300] tracking-[0.33px] p-0 m-0">
                    {t('myPage.myInfo.occupation2Attention')}
                  </p>
                </div>
              }
            >
              <Select
                options={occupationSelect}
                style={{ height: '47px' }}
                placeholder={t('myPage.myInfo.select.placeHolder')}
              ></Select>
            </Form.Item>
            <Form.Item
              name={'organizationName2'}
              label={
                <div className="flex gap-[8px]">
                  <Label>{t('myPage.myInfo.organizationName')}</Label>
                  <AnyIcon />
                </div>
              }
            >
              <Input style={inputStyle} />
            </Form.Item>
            <Form.Item
              name={'post2'}
              label={
                <div className="flex gap-[8px]">
                  <Label>{t('myPage.myInfo.post')}</Label>
                  <AnyIcon />
                </div>
              }
            >
              <Select
                options={postSelect}
                style={{ height: '47px' }}
                placeholder={t('myPage.myInfo.select.placeHolder')}
              ></Select>
            </Form.Item>
          </section>
          <section>
            <div className="mt-[30px] mb-[40px] flex items-center justify-center gap-[2px]">
              <Image src="/Add.svg" width={13.3} height={13.3} alt="add" />
              <span className="text-[14px] font-[300] leading-[21px] tracking-[0.42px] text-[#ED7B01]">
                {t('myPage.myInfo.add')}
              </span>
            </div>
          </section>
          <section>
            <SessionTitle title={t('myPage.myInfo.basicInformation')} />
            <div>
              <div className="flex gap-[6px] items-center">
                <Label>{t('myPage.myInfo.talkAbout')}</Label>
                <AnyIcon />
              </div>
              <Form.Item name={'talk'}>
                <div className="bg-white mt-[10px] text-[12px] font-[300] tracking-[0.36px leading-[18px] rounded-[10px]">
                  <TextArea autoSize={{ minRows: 3 }} style={{ padding: '12px 16px' }} />
                </div>
              </Form.Item>
            </div>

            <div className="mt-[18px]">
              <Label>{t('myPage.myInfo.refer')}</Label>
              <p className="text-[#616161] text-[11px] font-[300] tracking-[0.33px]">
                {t('myPage.myInfo.referAttention')}
              </p>
              <Form.Item
                name="introduce"
                validateTrigger="onBlur"
                rules={[{ required: true, message: t('myPage.myInfo.validation.required') }]}
              >
                <div className="bg-white mt-[10px] text-[12px] font-[300] tracking-[0.36px leading-[18px]   rounded-[10px]">
                  <TextArea autoSize={{ minRows: 2 }} style={{ padding: '12px 16px' }} />
                </div>
              </Form.Item>
            </div>
          </section>
          <section className="mt-10">
            <Form.Item
              name="selfIntroduce"
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                  message: t('myPage.myInfo.validation.required')
                }
              ]}
            >
              <div>
                <SessionTitle title={t('myPage.myInfo.introduction')} />
                <div className="bg-white mt-[10px] text-[12px] font-[300] tracking-[0.36px leading-[18px]   rounded-[10px]">
                  <TextArea autoSize={{ minRows: 4 }} style={{ padding: '12px 16px' }} maxLength={500} />
                </div>
              </div>
            </Form.Item>
          </section>
        </main>
        <footer className="mt-4 bg-white pt-4 pb-4 pl-5 pr-5">
          <Button
            style={{ height: '64px', width: '100%', fontSize: '16px', color: '#fff', backgroundColor: '#E76B00' }}
            onClick={submitHandle}
          >
            {t('myPage.myInfo.update')}
          </Button>
        </footer>
      </Form>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-[14px] font-[600] tracking-[0.42px] leading-[21px]">{children}</span>;
}

function AnyIcon() {
  const { t } = useTranslation();
  return (
    <span className="text-[12px] font-[600] tracking-[0.33px] text-white bg-[#9E9E9E] rounded-[6px] pl-[6px] pt-[2px] pr-[6px] pb-[2px] ">
      {t('myPage.myInfo.any')}
    </span>
  );
}
function SessionTitle({ title }: { title: string }) {
  return <p className="text-[19px] font-[600] tracking-[0.57px] mb-[20px]">{title}</p>;
}
