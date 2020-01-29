import React, { Component } from "react";
import { Checkbox } from "antd";
import { FaTimes } from "react-icons/fa";
import PropTypes from 'prop-types'
import Message from "../message";
import MessageReplyInput from "./components/messagereplyinput";
const msg = {
  text: "Nothing really matters,anyone can see"
};
class MessageThread extends Component {
  render() {
    return (
      <div
        className="wea-flex-column wea-full-parent-height wea-full-parent-height"
        style={{ position: "relative" }}
      >
        <div className="wea-pad-20 wea-box-shadow-light wea-flex wea-flex-ac wea-flex-jsb">
          <div className="">
            <div className="wea-font-md">
              <b>Replies</b>
            </div>
            <div className="wea-font-xs">#general</div>
          </div>
          <div
            className="wea-font-lg wea-r-mrgn-10 wea-pointer"
            onClick={this.props.closeThread}
          >
            <FaTimes />
          </div>
        </div>
        <Message hideButtons dark noncurved text={msg.text} />
        <div style={{ position: "absolute", bottom: "0", width: "100%" }}>
          <MessageReplyInput />
          <div
            className="wea-pad-20 wea-box-shadow-light"
            // style={{
            //   borderLeft: "1px solid #d9d9d9"
            // }}
          >
            <Checkbox>Also send to #general</Checkbox>
          </div>
        </div>
      </div>
    );
  }
}
MessageThread.propTypes = {
  closeThread: PropTypes.object,
};

export default MessageThread;
