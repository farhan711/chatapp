import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import PropTypes from "prop-types";

import "./index.scss";

const FormItem = Form.Item;

class ResetPasswordForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
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
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input the password" }]
          })(
            <Input
              className="resetpassword-form-input wea-darken-border-hover wea-darken-border-focus"
              size="large"
              placeholder="New Password"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("confirm_password", {
            rules: [
              { required: true, message: "Please input the same password" }
            ]
          })(
            <Input
              className="resetpassword-form-input wea-darken-border-hover wea-darken-border-focus"
              size="large"
              placeholder="Confirm Password"
            />
          )}
        </FormItem>

        <FormItem>
          <Button
            type="primary"
            size={"large"}
            htmlType="submit"
            className="resetpassword-form-button"
            style={{ background: "black" }}
          >
            Submit
          </Button>
        </FormItem>
      </Form>
    );
  }
}

ResetPasswordForm.propTypes = {
  form: PropTypes.object,
  onSubmit:PropTypes.func
};

export default Form.create()(ResetPasswordForm);
