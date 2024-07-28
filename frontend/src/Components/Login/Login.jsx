import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const emailPattern = /^(21|22|23|24|25)(cce|dcs|cse|ece|dce|me)[0-9]{3}@lnmiit\.ac\.in$/;

const Login= () => {
  const [form] = Form.useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const onFinish = (values) => {
    setErrorMessage('');
    if (!emailPattern.test(values.email)) {
      setErrorMessage('Invalid email format. Please follow the specified format.');
      return;
    }
    // Handle login logic here
  };

  const navigate = useNavigate();

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      {errorMessage && <Alert message={errorMessage} type="error" showIcon />}
      <Form form={form} name="login" onFinish={onFinish} className="login-form">
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
          <Button onClick={() => navigate('/form')} type="primary" htmlType="submit" className="login-button">
            Login
          </Button>
        </Form.Item>
        <div className="register-link">
          New user? <Link to="/register">Register here</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
