import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, Input, notification } from 'antd';

function AddCustomer() {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    axios.post('https://northwind.vercel.app/api/customers', values);
    form.resetFields();
    notification.open({
      message: 'Successed',
      description: 'Costumer Added',
      className: 'custom-class',
      style: {
        width: 300,
      },
    });
  };

  return (
    <Form name="control-hooks" onFinish={onFinish} form={form}>
      <Form.Item
        name="id"
        label="Id"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={FormStyle}/>
      </Form.Item>
      <Form.Item
        name="companyName"
        label="Company Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={FormStyle}/>
      </Form.Item>
      <Form.Item
        name="contactName"
        label="Contact Name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={FormStyle}/>
      </Form.Item>
      <Form.Item
        name="contactTitle"
        label="Contact Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input style={FormStyle}/>
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          Add
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCustomer;


//--------------------------style--------------------------
const FormStyle = {
  width: '300px'
}