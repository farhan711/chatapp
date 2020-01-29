import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Form, Input, Button } from "antd";

import "./index.scss";
// import { ROUTE_PATH } from "../../../../../data/config/constants";

const FormItem = Form.Item;

class WorkspaceForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit(values);
        // this.props.history.push(`${ROUTE_PATH.RESET_PASSWORD}?token=123`);
      }
    });
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
      return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator("email", {
              rules: [{ required: true, message: "Please input your email!" }]
            })(
              <Input
                className=""
                createworkspace-form-input
                size="large"
                placeholder="name@example.com"
              />
            )}
          </FormItem>
          <FormItem>
            <Button
              type="primary"
              size={"large"}
              htmlType="submit"
              className="createworkspace-form-button"
              style={{ background: "black" }}
            >
              Confirm
          </Button>
          </FormItem>
        </Form>
      );
    }
  }
WorkspaceForm.propTypes = {
  history: PropTypes.object,
  onSubmit: PropTypes.function,
  login_details:PropTypes.object,
  form:PropTypes.object
};

export default Form.create()(WorkspaceForm);

