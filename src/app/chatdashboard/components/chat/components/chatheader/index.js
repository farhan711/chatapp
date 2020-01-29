import React, { Component } from "react";
import { FaBellSlash } from "react-icons/fa";
class ChatHeader extends Component {
  render() {
    return (
      <div
        className="wea-lr-pad-15 wea-box-shadow wea-flex wea-flex-ac"
        style={{ width: "100%", background: "white" }}
      >
        <span className="wea-font-lg">#Design</span>
        <span className="wea-font-xl wea-pad-20">
          <FaBellSlash />
        </span>
      </div>
    );
  }
}

export default ChatHeader;
