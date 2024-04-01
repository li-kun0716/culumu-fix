import React, { useEffect, useState, useImperativeHandle } from 'react';
import { Form, Select, Input, Flex, FormInstance, SelectProps } from 'antd';
import { ValidatorRule } from 'rc-field-form/lib/interface';

import { getDaysInMonth } from '@/utils/day';
import { useTranslation } from '@/i18n/client';

import { FieldType } from '../page';

const inputStyle: React.CSSProperties = {
  fontSize: '15px',
  padding: '12px 16px',
  height: '47px',
  fontWeight: 300,
  color: '#212121',
  letterSpacing: '0.45px'
};

const years: SelectProps['options'] = new Array(1000)
  .fill(0)
  .map((_, index) => ({ label: index + 1900, value: index + 1900 }));
const months: SelectProps['options'] = new Array(12)
  .fill(0)
  .map((_, index) => ({ label: index + 1, value: index + 1 }));
const checkInput = (message: string) => {
  return ((a: { field: keyof FieldType }, value: string) => {
    let reg;
    if (a.field === 'phone') reg = /^[0-9]{6,}$/;
    if (a.field === 'postalCode') reg = /^[0-9]{6,}$/;
    if (a.field === 'email') reg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (reg && reg.test(value)) return Promise.resolve(true);
    return Promise.reject(message);
  }) as unknown as ValidatorRule['validator'];
};

export function Label({ children }: { children: React.ReactNode }) {
  return (
    <span style={{ fontSize: '14px', fontWeight: 600, letterSpacing: '0.42px', lineHeight: '21px' }}>{children}</span>
  );
}
export function AnyIcon() {
  const { t } = useTranslation();

  return (
    <span
      style={{
        fontSize: '12px',
        fontWeight: 600,
        letterSpacing: '0.33px',
        color: '#fff',
        backgroundColor: '#9E9E9E',
        borderRadius: '6px',
        padding: '2px 6px'
      }}
    >
      {t('myPage.myInfo.any')}
    </span>
  );
}
export function SessionTitle({ title }: { title: string }) {
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

export function Occupation({ index, occupation }: { index: number; occupation: Occupation }) {
  const { t } = useTranslation();
  const occupationSelectList = t('myPage.myInfo.select.occupationSelect', { returnObjects: true });
  const postSelectList = t('myPage.myInfo.select.postSelect', { returnObjects: true });
  const specialOccupationSelect = t('myPage.myInfo.select.specialList', { returnObjects: true }) as Array<string>;
  const [occSelect, setOccupationSelect] = useState('');
  const [postSelect, setPostSelect] = useState('');

  useEffect(() => {
    if (occupation) {
      setOccupationSelect(occupation.name);
      setPostSelect(occupation.position);
    }
  }, [occupation]);

  return (
    <>
      <section>
        <Form.Item
          name={`occupationName${index}`}
          rules={[{ required: true, message: t('myPage.myInfo.validation.required') }]}
          label={
            <div style={{ marginBottom: '10px' }}>
              <Label>{t('myPage.myInfo.occupation') + (index === 0 ? '' : index + 1)}</Label>
              <p
                style={{
                  fontSize: '11px',
                  color: '#616161',
                  fontWeight: 300,
                  letterSpacing: '0.33px'
                }}
              >
                {t('myPage.myInfo.occupationAttention')}
              </p>
            </div>
          }
          initialValue={occupation.name}
        >
          <Select
            options={occupationSelectList}
            style={{ height: '47px' }}
            placeholder={t('myPage.myInfo.select.placeHolder')}
            onChange={(value) => setOccupationSelect(value)}
          />
        </Form.Item>
        {occSelect === 'other' && (
          <Form.Item name={`otherOccupationName${index}`} rules={[{ required: true }]}>
            <Input placeholder={t('myPage.myInfo.input.otherPlaceHolder')} style={inputStyle} />
          </Form.Item>
        )}
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
              initialValue={occupation.organization}
            >
              <Input
                style={inputStyle}
                placeholder={t('myPage.myInfo.input.organizationNamePlaceHolder')}
                maxLength={100}
              />
            </Form.Item>
            <Form.Item
              name={`positionName${index}`}
              label={
                <Flex gap={8} align="center">
                  <Label>{t('myPage.myInfo.post')}</Label>
                  <AnyIcon />
                </Flex>
              }
              initialValue={occupation.position}
            >
              <Select
                options={postSelectList}
                style={{ height: '47px' }}
                placeholder={t('myPage.myInfo.select.placeHolder')}
                onChange={(value) => setPostSelect(value)}
              ></Select>
            </Form.Item>
            {postSelect === 'other' && (
              <Form.Item rules={[{ required: true }]} name={`otherPositionName`}>
                <Input placeholder={t('myPage.myInfo.input.otherPlaceHolder')} style={inputStyle} />
              </Form.Item>
            )}
          </>
        )}
      </section>
    </>
  );
}

export function BasicInformation({
  basRef,
  userInfo
}: {
  basRef: React.RefObject<{
    computedDays: (changeValues: FieldType, values: FieldType, form: FormInstance) => void;
  }>;
  userInfo: UserInfo;
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
    if (userInfo && userInfo.birthday) {
      const year = new Date(userInfo.birthday).getFullYear();
      const month = new Date(userInfo.birthday).getMonth() + 1;
      setDays(
        new Array(getDaysInMonth(year, month)).fill(0).map((_, index) => ({ label: index + 1, value: index + 1 }))
      );
    }
  }, [userInfo]);

  return (
    <>
      <section>
        <SessionTitle title={t('myPage.myInfo.basicInformation')} />
        <Form.Item
          name="name"
          label={<Label>{t('myPage.myInfo.identity')}</Label>}
          style={{ marginBottom: '18px' }}
          rules={[{ required: true, message: t('myPage.myInfo.validation.required') }]}
          initialValue={userInfo.name}
        >
          <Input style={inputStyle} placeholder={t('myPage.myInfo.input.fullNamePlaceHolder')} />
        </Form.Item>
        <Form.Item
          label={<Label>{t('myPage.myInfo.furigana')}</Label>}
          name="nameKana"
          initialValue={userInfo.nameKana}
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
              initialValue={new Date(userInfo.birthday).getFullYear()}
              style={{ flex: 1, marginBottom: 0 }}
              name="year"
              rules={[{ required: true, message: t('myPage.myInfo.validation.singleByteNum') }]}
            >
              <Select options={years} style={{ height: '48px' }} />
            </Form.Item>
            <span style={{ fontWeight: 600 }}>年</span>
            <Form.Item
              initialValue={new Date(userInfo.birthday).getMonth() + 1}
              style={{ flex: 1, marginBottom: 0 }}
              name={'month'}
              rules={[{ required: true, message: t('myPage.myInfo.validation.singleByteNum') }]}
            >
              <Select options={months} style={{ height: '48px' }} />
            </Form.Item>
            <span style={{ fontWeight: 600 }}>月</span>
            <Form.Item
              initialValue={new Date(userInfo.birthday).getDay()}
              style={{ flex: 1, marginBottom: 0 }}
              name={'day'}
              rules={[{ required: true, message: t('myPage.myInfo.validation.singleByteNum') }]}
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
          initialValue={userInfo.gender}
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

export function Contact({ userInfo }: { userInfo: UserInfo }) {
  const { t } = useTranslation();

  return (
    <>
      <section>
        <SessionTitle title={t('myPage.myInfo.contact')} />
        <Form.Item
          name="phone"
          label={<Label>{t('myPage.myInfo.tell')}</Label>}
          rules={[
            { required: true, message: '' },
            { validator: checkInput(t('myPage.myInfo.validation.singleByteNum')) }
          ]}
          initialValue={userInfo?.phone.replace(/^\+[0-9]{2}/, '')}
        >
          <Input style={inputStyle} placeholder={t('myPage.myInfo.input.tellPlaceHolder')} />
        </Form.Item>
        <Form.Item
          name={'email'}
          label={<Label>{t('myPage.myInfo.email')}</Label>}
          rules={[{ required: true, validator: checkInput(t('myPage.myInfo.validation.singleByteEN')) }]}
          initialValue={userInfo?.email}
        >
          <Input style={inputStyle} placeholder={t('myPage.myInfo.input.emailPlaceHolder')} />
        </Form.Item>
      </section>
    </>
  );
}

export function Place({ userInfo }: { userInfo: UserInfo }) {
  const { t } = useTranslation();

  return (
    <>
      <section style={{ marginTop: '40px' }}>
        <SessionTitle title={t('myPage.myInfo.place')} />
        <Form.Item
          initialValue={userInfo?.postalCode}
          style={{ marginBottom: '18px' }}
          name={'postalCode'}
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
                  color: '#616161',
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

export function Paragraph() {
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

export function BasInfoAndIntro({ userInfo }: { userInfo: UserInfo }) {
  const { t } = useTranslation();

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
        <Form.Item initialValue={userInfo?.discussionTopics} name={'discussionTopics'} style={{ marginTop: '10px' }}>
          <Input.TextArea
            autoSize={{ minRows: 3 }}
            style={{ ...textAreaStyle, minHeight: '78px' }}
            placeholder={t('myPage.myInfo.textArea.talkAboutPlaceHolder')}
          />
        </Form.Item>

        <Form.Item
          initialValue={userInfo?.potentialReferrals}
          name="potentialReferrals"
          rules={[{ required: true, message: t('myPage.myInfo.validation.required') }]}
          label={
            <Flex vertical>
              <Label>{t('myPage.myInfo.refer')}</Label>
              <p
                style={{
                  color: '#616161',
                  fontSize: '11px',
                  fontWeight: '300',
                  letterSpacing: '0.33px',
                  marginBottom: '10px'
                }}
              >
                {t('myPage.myInfo.referAttention')}
              </p>
            </Flex>
          }
        >
          <Input.TextArea
            autoSize={{ minRows: 2 }}
            style={{ ...textAreaStyle, minHeight: '60px' }}
            placeholder={t('myPage.myInfo.textArea.referPlaceHolder')}
          />
        </Form.Item>
      </section>
      <section style={{ marginTop: '10px' }}>
        <Form.Item
          initialValue={userInfo?.bio}
          name="bio"
          rules={[
            {
              required: true,
              message: t('myPage.myInfo.validation.required')
            }
          ]}
          label={<SessionTitle title={t('myPage.myInfo.introduction')} />}
        >
          <Input.TextArea
            autoSize={{ minRows: 4 }}
            style={{ ...textAreaStyle, minHeight: '108px' }}
            maxLength={500}
            placeholder={t('myPage.myInfo.textArea.introductionPlaceHolder')}
          />
        </Form.Item>
      </section>
    </>
  );
}
