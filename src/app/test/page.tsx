'use client';
import React from 'react';
import { Form, Input, Button } from 'antd';

const MyForm = ({ form }) => {
  const handleSubmit = () => {
    form.setFieldsValue({ myTextArea: 'New value' }); // Assuming the name prop is "myTextArea"
  };

  return (
    <Form form={form} onFinish={handleSubmit}>
      <Form.Item name="myTextArea" label="My Text Area">
        <Input.TextArea />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Set Value
        </Button>
      </Form.Item>
    </Form>
  );
};

const MyComponent = () => {
  const [form] = Form.useForm();

  return <MyForm form={form} />;
};

export default MyComponent;
