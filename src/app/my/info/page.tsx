'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Form, Select, SelectProps } from 'antd';
import Image from 'next/image';
import { Input, Button } from '@/components/antd';
import TextArea from 'antd/es/input/TextArea';
import { getDaysInMonth } from '@/utils/day';

const genders: SelectProps['options'] = [
  {
    label: '男性',
    value: 'male'
  },
  {
    label: '女性',
    value: 'female'
  }
];
const careers: SelectProps['options'] = [
  {
    label: '会社員',
    value: '会社員'
  }
];
const isOffice: SelectProps['options'] = [
  {
    label: '会社員（正社員）',
    value: '会社員（正社員）'
  }
];
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
            <SessionTitle title="基本情報" />
            <Form.Item
              name="fullName"
              label={<Label>氏名</Label>}
              style={{ marginBottom: '18px' }}
              validateTrigger="onBlur"
              rules={[{ required: true, message: 'こちらは必須項目になります' }]}
            >
              <Input style={inputStyle} />
            </Form.Item>
            <Form.Item
              label={<Label>フリガナ</Label>}
              name="name"
              validateTrigger="onBlur"
              rules={[{ required: true, message: '全角カタカナで入力してください。' }]}
            >
              <Input style={inputStyle} />
            </Form.Item>
            <div className="mb-[18px]">
              <Label>生年月日</Label>
              <div className="flex items-center gap-[3px] w-full mt-3 ">
                <Form.Item
                  style={{ flex: 1, marginBottom: 0 }}
                  name="year"
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: '半角数字のみで入力してください。' }]}
                  initialValue={initYear}
                >
                  <Select options={years} style={{ height: '48px' }} />
                </Form.Item>
                <span className="text-[15px] tracking-[0.45px] font-[600]">年</span>
                <Form.Item
                  style={{ flex: 1, marginBottom: 0 }}
                  name={'month'}
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: '半角数字のみで入力してください。' }]}
                  initialValue={initMonth}
                >
                  <Select options={months} style={{ height: '48px' }} />
                </Form.Item>
                <span className="text-[15px] tracking-[0.45px] font-[600]">月</span>
                <Form.Item
                  style={{ flex: 1, marginBottom: 0 }}
                  name={'day'}
                  validateTrigger="onBlur"
                  rules={[{ required: true, message: '半角数字のみで入力してください。' }]}
                  initialValue={initDay}
                >
                  <Select options={days} style={{ height: '48px' }} />
                </Form.Item>
                <span className="text-[15px] tracking-[0.45px] font-[600]">日</span>
              </div>
            </div>

            <Form.Item label={<Label>性別</Label>} name="gender" style={{ marginBottom: '18px' }}>
              <Select options={genders} style={{ height: '47px' }} placeholder="選択する" />
            </Form.Item>
          </section>
          <section>
            <SessionTitle title="連絡先" />
            <Form.Item
              name="tell"
              label={<Label>電話番号</Label>}
              validateTrigger="onBlur"
              rules={[{ required: true }, { validator: checkInput('半角数字のみで入力してください。') }]}
            >
              <Input style={inputStyle} />
            </Form.Item>
            <Form.Item
              name={'email'}
              label={<Label>メールアドレス</Label>}
              validateTrigger="onBlur"
              rules={[{ required: true, validator: checkInput('半角英数字のみで入力してください') }]}
            >
              <Input style={inputStyle} />
            </Form.Item>
          </section>
          <section>
            <SessionTitle title="住所" />
            <Form.Item
              style={{ marginBottom: '18px' }}
              name={'post'}
              validateTrigger="onBlur"
              rules={[
                {
                  required: true,
                  validator: checkInput('ハイフン無しで入力してください。\nこちらは必須項目になります')
                }
              ]}
              label={
                <div>
                  <Label>郵便番号</Label>
                  <p className="text-[#616161] text-[11px] font-[300] tracking-[0.33px] p-0 m-0">
                    ハイフン無しで入力してください。
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
                あなたのご職業・状況に当てはまるものは？
              </p>
              <p className="text-[12px] font-[300] tracking-[0.36px] leading-[18px] text-center m-0 p-0">
                複数ある場合は「＋職業を追加」を選び、追加してください。
              </p>
            </div>
          </section>
          <section>
            <Form.Item
              name="career1"
              label={
                <div className="mb-[10px]">
                  <Label>職業</Label>
                  <p className="text-[#616161] text-[11px] font-[300] tracking-[0.33px] p-0 m-0">
                    ※選択肢に当てはまらない場合は「その他」を選び、記入してください。
                  </p>
                </div>
              }
            >
              <Select options={careers} style={{ height: '47px' }} />
            </Form.Item>
            <Form.Item
              name={'organizationName1'}
              label={
                <div className="flex gap-[8px]">
                  <Label>組織名</Label>
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
                  <Label>役職</Label>
                  <AnyIcon />
                </div>
              }
            >
              <Select options={careers} style={{ height: '47px' }}></Select>
            </Form.Item>
            <Form.Item
              name={'career2'}
              label={
                <div className="mb-[10px]">
                  <Label>職業２</Label>
                  <p className="text-[#616161] text-[11px] font-[300] tracking-[0.33px] p-0 m-0">
                    ※選択肢に当てはまらない場合は「その他」を選び、記入してください。
                  </p>
                </div>
              }
            >
              <Select options={careers} style={{ height: '47px' }}></Select>
            </Form.Item>
            <Form.Item
              name={'organizationName2'}
              label={
                <div className="flex gap-[8px]">
                  <Label>組織名</Label>
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
                  <Label>役職</Label>
                  <AnyIcon />
                </div>
              }
            >
              <Select options={isOffice} style={{ height: '47px' }}></Select>
            </Form.Item>
          </section>
          <section>
            <div className="mt-[30px] mb-[40px] flex items-center justify-center gap-[2px]">
              <Image src="/Add.svg" width={13.3} height={13.3} alt="add" />
              <span className="text-[14px] font-[300] leading-[21px] tracking-[0.42px] text-[#ED7B01]">
                職業を追加する
              </span>
            </div>
          </section>
          <section>
            <SessionTitle title="基本情報" />
            <div>
              <div className="flex gap-[6px] items-center">
                <Label>お話できることを教えてください</Label>
                <AnyIcon />
              </div>
              <Form.Item name={'talk'}>
                <div className="bg-white mt-[10px] text-[12px] font-[300] tracking-[0.36px leading-[18px] rounded-[10px]">
                  <TextArea autoSize={{ minRows: 3 }} style={{ padding: '12px 16px' }} />
                </div>
              </Form.Item>
            </div>

            <div className="mt-[18px]">
              <Label>紹介できる人を教えてください</Label>
              <p className="text-[#616161] text-[11px] font-[300] tracking-[0.33px]">
                紹介できるひとがいない場合は「なし」と入力してください。
              </p>
              <Form.Item
                name="introduce"
                validateTrigger="onBlur"
                rules={[{ required: true, message: '紹介できるひとがいない場合は「なし」と入力してください。' }]}
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
                  message: '自己紹介を書くと依頼が届きやすくなります。あなたの声を届ける機会を増やしましょう！'
                }
              ]}
            >
              <div>
                <SessionTitle title="自己紹介文" />
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
            更新する
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
  return (
    <span className="text-[12px] font-[600] tracking-[0.33px] text-white bg-[#9E9E9E] rounded-[6px] pl-[6px] pt-[2px] pr-[6px] pb-[2px] ">
      任意
    </span>
  );
}
function SessionTitle({ title }: { title: string }) {
  return <p className="text-[19px] font-[600] tracking-[0.57px] mb-[20px]">{title}</p>;
}
