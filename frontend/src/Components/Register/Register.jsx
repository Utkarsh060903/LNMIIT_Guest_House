import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { Link } from 'react-router-dom';
import './Register.css';

const emailPattern = /^(21|22|23|24|25)(cce|dcs|cse|ece|dce|me)[0-9]{3}@lnmiit\.ac\.in$/;

const Register = () => {
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const onFinish = (values) => {
    setErrorMessage('');
    if (!emailPattern.test(values.email)) {
      setErrorMessage('Invalid email format. Please follow the specified format.');
      return;
    }
    // Handle registration logic here
  };

  return (
    <div className="register-container">
      <h2 className="register-heading">Register</h2>
      {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
      <Form form={form} name="register" onFinish={onFinish} className="register-form">
        <Form.Item
          name="name"
          rules={[
            { required: true, message: 'Please input your name!' },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            { required: true, message: 'Please input your email!' },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
          ]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="register-button">
            Register
          </Button>
        </Form.Item>
        <div className="login-link">
          Already have an account? <Link to="/login">Login here</Link>
        </div>
      </Form>
    </div>
  );
};

export default Register;
