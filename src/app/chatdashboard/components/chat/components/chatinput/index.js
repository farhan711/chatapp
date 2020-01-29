import React, { Component, Fragment } from "react";
//FaGrinBeam
//FaRegFile
//FaRegPlusSquar
import PropTypes from 'prop-types'
import { FaRegLaughBeam, FaEllipsisV } from "react-icons/fa";
import { MdSend } from "react-icons/md";

import "./index.scss";
import { assets } from "../../../../../../data/assets/assetsurl";
import { Input, Dropdown, Menu } from "antd";

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

class ChatInput extends Component {
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
    // console.log('text here ==>> ')
    const { onMessageSend } = this.props;
    onMessageSend({ text: this.state.text });
         
    // console.log('my text written by me',this.state.text)
  
    this.props.setMessagesInState(this.state.text)
    this.setState({
      text: ""
    });
  };

  render() {
    // console.log('my current email in chatinput =>',this.props.current_email)
    const { page_details } = this.props;
    return (
      <div
        className="wea-pad-10 wea-flex wea-flex-ac"
        style={{
          background: "white",
          position: "absolute",
          bottom: "0",
          width: "100%"
        }}
      >
        <Input
          onKeyDown={e => {
            if (e.key == "Enter") {
              this.onSendClick();
            }
          }}
          onChange={this.onInputChange}
          value={this.state.text}
          className="wea-pad-20 msg-input"
          placeholder="Type your message here.."
          style={{ width: "80%", border: "none" }}
        />
        <div
          className="wea-flex wea-flex-jsb wea-flex-ac"
          style={{ width: "20%" }}
        >
          <div
            onClick={this.onSendClick}
            className="wea-font-18 icon-wrapper icon-btn wea-pointer"
          >
            <MdSend />
          </div>
          {/* <div className="wea-font-18 icon-wrapper icon-btn">
            <b>@</b>
          </div> */}
          {page_details.device_data.screen_width > 799 ? (
            <Fragment>
              <div className="wea-font-18 icon-wrapper icon-btn wea-pointer">
                <FaRegLaughBeam />
              </div>
              <div className="wea-font-18 icon-wrapper icon-btn">
                <div className="icon-img-wrapper wea-pointer">
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      marginBottom: "5px"
                    }}
                    src={assets.upload}
                    alt=""
                  />
                </div>
              </div>
            </Fragment>
          ) : (
            // <div>
            <Dropdown overlay={menu} placement="topRight">
              <div className="wea-font-18 icon-wrapper icon-btn wea-pointer">
                <FaEllipsisV />
              </div>
            </Dropdown>
            // </div>
          )}
        </div>
      </div>
    );
  }
}
if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "development") {
ChatInput.propTypes = {
  page_details: PropTypes.object,
  socket: PropTypes.object,
  current_email: PropTypes.object,
  setMessagesInState:PropTypes.object,
  onMessageSend:PropTypes.object
};
}
export default ChatInput;
