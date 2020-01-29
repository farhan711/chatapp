import React, { Component } from "react";
//FaGrinBeam
//FaRegFile
//FaRegPlusSquar
import PropTypes from 'prop-types'
import { FaEllipsisV, FaRegLaughBeam } from "react-icons/fa";
// import { IoMdAt } from "react-icons/io";
import { MdSend } from "react-icons/md";
import { Dropdown, Menu,Input } from "antd";
// import './index.scss';

import { assets } from "../../../../../../../../data/assets/assetsurl";

const menu = (
  <Menu>
    <Menu.Item>
      <div className="wea-font-18">
        <div className="icon-img-wrapper">
          <img
            style={{ height: "100%", width: "100%", marginBottom: "5px" }}
            src={assets.upload}
            alt=""
          />
        </div>
      </div>
    </Menu.Item>
    <Menu.Item>
      <div className="wea-font-18">
        <FaRegLaughBeam />
      </div>
    </Menu.Item>
  </Menu>
);

// import { Input } from "antd";
class MessageReplyInput extends Component {
  state = {
    text: ""
  };
  onInputChange = e => {
    const text = e.target.value;
    this.setState(() => ({
      text
    }));
  };
  onSendClick = () => {
    const { onMessageSend } = this.props;
    onMessageSend({ text: this.state.text });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div
        className="wea-full-width wea-lr-pad-10 wea-flex wea-flex-ac"
        style={{ background: "white" }}
      >
        <Input
          // onKeyDown={(e) => {
          //     if (e.key == "Enter") {
          //         this.onSendClick();
          //     }
          // }}
          onChange={this.onInputChange}
          value={this.state.text}
          className="wea-pad-20 msg-input"
          placeholder="Type your message here.."
          style={{ width: "80%", border: "none" }}
        />
        <div
          className="wea-flex wea-t-pad-5 wea-lr-pad-10 wea-flex-jsb wea-flex-ac"
          style={{ width: "20%" }}
        >
          <div>
            <div onClick={this.onSendClick} className="wea-font-lg wea-pointer">
              <MdSend />
            </div>
          </div>
          <Dropdown overlay={menu} placement="topRight">
            <div className="wea-font-18 wea-pointer">
              <FaEllipsisV />
            </div>
          </Dropdown>
          {/* <div className="wea-font-18"><FaUpload /></div> */}
        </div>
      </div>
    );
  }
}
MessageReplyInput.propTypes = {
  onMessageSend: PropTypes.object,
};
export default MessageReplyInput;
