import React, { Component } from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import PropTypes from "prop-types";
import { ROUTE_PATH } from "../../../../../data/config/constants";

import "./index.scss";
const FormItem = Form.Item;
//--//
class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      // console.log('values ==> ',values)
      if (!err) {
        this.props.onSubmit(values);
      }
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Item>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              { required: true, message: "Please input your E-mail!" }
            ]
          })(
            <Input
              className="wea-darken-border-focus wea-darken-border-hover"
              size="large"
              prefix={<Icon type="mail" />}
              placeholder="Email ID"
            />
          )}
        </Form.Item>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              className="wea-darken-border-focus wea-darken-border-hover"
              size="large"
              prefix={<Icon type="lock" />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(
            <Checkbox color={"purple"} className="check-box">
              Remember me
            </Checkbox>
          )}
          <div
            className="login-form-forget"
            onClick={() => {
              this.props.history.push(`${ROUTE_PATH.FORGET_PASSWORD}`);
            }}
          >
            Forgot password
          </div>
          <Button
            type="primary"
            size={"large"}
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          <Button
            className="wea-t-mrgn-10"
            type="default"
            onClick={() => this.props.history.push(ROUTE_PATH.SIGNUP)}
          >
            Sign Up
          </Button>
        </FormItem>
      </Form>
    );
  }
}

LoginForm.propTypes = {
  page_details: PropTypes.object,
  actions: PropTypes.object,
  history: PropTypes.object,
  form: PropTypes.object,
  onSubmit: PropTypes.func
};

const WrappedLoginForm = Form.create()(LoginForm);

export default WrappedLoginForm;
