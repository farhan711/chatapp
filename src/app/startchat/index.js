import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Modal, Select } from "antd";
import { FaPlusCircle } from "react-icons/fa";
import SelectUsers from "../selectUsers";

import { assets } from "../../data/assets/assetsurl";

const Option = Select.Option;
const children = [];
for (let i = 10; i < 36; i++) {
  children.push(
    <Option key={i.toString(36) + i}>
      <div className="wea-flex wea-flex-ac">
        <div
          style={{
            height: "30px",
            width: "30px",
            borderRadius: "50%",
            top: "0"
          }}
        >
          <img
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              position: "absolute"
            }}
            src={assets.loginImage}
            alt=""
          />
        </div>
        <div className="wea-lr-pad-10">{i.toString(36) + i}</div>
      </div>
    </Option>
  );
}
// const handleChange = e => {
//   console.log(e.target.value);
// };
export default class StartChat extends Component {
  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false
      });
    }, 2000);
  };

  handleCancel = () => {
    // console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };
  render() {
    const { visible, confirmLoading } = this.state;
    return (
      <div className="wea-pointer">
        <FaPlusCircle
          className={`${this.props.isMobile ? "wea-font-lg" : ""}`}
          onClick={this.showModal}
        />
        <Modal
          title="Start a chat!"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          {/* <Select
            size="large"
            defaultValue="a1"
            onChange={handleChange}
            style={{ width: "100%" }}
          >
            {children}
          </Select> */}
          <SelectUsers />
        </Modal>
      </div>
    );
  }
}
StartChat.propTypes = {
  isMobile:PropTypes.object
};
