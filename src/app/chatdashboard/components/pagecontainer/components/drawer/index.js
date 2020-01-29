import React, { Component } from "react";
import { Drawer } from "antd";
import PropTypes from "prop-types";

import "./index.scss";

class SideDrawer extends Component {
  render() {
    const { visible, onClose, page_details } = this.props;
    return (
      <div>
        <Drawer
          bodyStyle={{
            background: "rgba(0,0,0,0)",
            padding: "0",
            height: "100vh"
          }}
          width={page_details.device_data.screen_width}
          // className="drawer"
          placement="left"
          closable
          onClose={onClose}
          visible={visible}
        >
          {this.props.children}
        </Drawer>
      </div>
    );
  }
}

SideDrawer.propTypes = {
  visible: PropTypes.object,
  page_details: PropTypes.object,
  onClose: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default SideDrawer;
