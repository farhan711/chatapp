import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Form, Input, Button } from "antd";
// import Proptypes from 'prop-types';

import "./index.scss";

const FormItem = Form.Item;

class CreateWorkspaceForm extends Component {
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
          {getFieldDecorator("name", {
            rules: [{ required: true, message: "Please input your name!" }]
          })(
            <Input
              className="createworkspace-form-input wea-darken-border-hover wea-darken-border-focus"
              size="large"
              placeholder="name"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("description", {
            rules: [{ required: true, message: "Please input description!" }]
          })(
            <Input
              className="createworkspace-form-input wea-darken-border-hover wea-darken-border-focus"
              size="large"
              placeholder="description"
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

CreateWorkspaceForm.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.object
};
export default Form.create()(CreateWorkspaceForm);
