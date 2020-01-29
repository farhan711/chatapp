import React, { Component } from 'react';
import { Form, Icon, Input, Button, } from 'antd';
import PropTypes from 'prop-types';
import { ROUTE_PATH } from '../../../../../data/config/constants';

import './index.scss';

const FormItem = Form.Item;
class SignupForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  }

  render() {
    const { form, } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem >
          {getFieldDecorator('firstname', {
            rules: [{ required: true, message: 'Please input your firstname!' }],
          })(
            <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="First Name" />
          )}
        </FormItem>
        <FormItem >
          {getFieldDecorator('lastname', {
            rules: [{ required: true, message: 'Please input your lastname!' }],
          })(
            <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Last Name" />
          )}
        </FormItem>
        <Form.Item>
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, { required: true, message: 'Please input your E-mail!', }],
          })(
            <Input size="large" prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Email ID" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }],
          })(
            <Input size="large" prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Phone Number" />
          )}
        </Form.Item>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" size={'large'} htmlType="submit" className="signup-form-button">
            Sign Up
          </Button>
        </FormItem>
        <FormItem>
          <Button size={'large'} onClick={() => this.props.history.push(ROUTE_PATH.LOGIN)}>
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

SignupForm.propTypes = {
  page_details: PropTypes.object,
  admin_details: PropTypes.object,
  actions: PropTypes.object,
  history: PropTypes.object,
  form: PropTypes.object,
  onSubmit: PropTypes.func,
};

const WrappedSignupForm = Form.create()(SignupForm);

export default WrappedSignupForm;