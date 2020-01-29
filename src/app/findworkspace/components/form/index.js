import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import PropTypes from 'prop-types'
import "./index.scss";

const FormItem = Form.Item;

class WorkspaceForm extends Component {
  state = {
    name: ""
  };
  onNameChange = e => {
    const text = e.target.value;
    this.setState((/*state*/) => ({
      name: text
    }));
  };
  render() {
    const { onSubmitClick } = this.props;
    // const { getFieldDecorator } = form;
    return (
      <Form onSubmit="">
        <FormItem>
          <Input
            value={this.state.name}
            onChange={this.onNameChange}
            className=""
            createworkspace-form-input
            size="large"
            placeholder="name"
          />
        </FormItem>
        <FormItem>
          <Button
            onClick={e => {
              e.preventDefault();
              onSubmitClick(this.state.name);
            }}
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
  onSubmitClick: PropTypes.object,
};
export default WorkspaceForm;
