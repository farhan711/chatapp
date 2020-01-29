/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Menu, Dropdown, Icon, Input} from "antd";
import {Link} from 'react-router-dom'

// import * as actions from "../../data/redux/appheader_details/actions";
import { assets } from "../../data/assets/assetsurl";

import "../../data/styles/common.scss";
import "./index.scss";

function mapStateToProps(state) {
  return {
    appheader_details: state.appheader_details
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}), dispatch)
  };
}

// const settings_menu = (
//   <Menu>
//     <Menu.Item>Profile Settings</Menu.Item>
//     <Menu.Item>Task Settings</Menu.Item>
//     <SubMenu title="General Settings">
//       <Menu.Item>Set Picture</Menu.Item>
//       <Menu.Item>Set Bio</Menu.Item>
//     </SubMenu>
//     <SubMenu title="Privacy Settings">
//       <Menu.Item>Reset Password</Menu.Item>
//       <Menu.Item>Assigned Tasks</Menu.Item>
//     </SubMenu>
//   </Menu>
// );
const settings_menu =(
  <Menu>
    <Menu.Item>
      <Link to= 
        '/permissions'
      >Permissions</Link>
    </Menu.Item>
  </Menu>
);

const notification_menu = (
  <Menu>
    <Menu.Item>Subscribe to Pro</Menu.Item>
    <Menu.Item>Your Pro Subscrition Ending soon</Menu.Item>
    <Menu.Item>Nisha assigned you a task</Menu.Item>
  </Menu>
);

const Search = Input.Search;

class AppHeader extends Component {
  constructor() {
    super();
    this.state = {
      search_text: "",
      show_search: true
    };
  }

  componentWillMount() {
    if (this.props.page_details.device_data.screen_width < 461) {
      this.setState({
        ...this.state,
        show_search: false
      });
    }
    console.log(this.state);
  }

  handleChange = e => {
    // console.log(e);
    this.setState({
      ...this.state,
      search_text: e.target.value
    });
  };

  handleSearch = e => {
    console.log(e);
    // this.setState({search_text: e.target.value});
  };

  search_box_toggle = () => {
    this.setState({
      ...this.state,
      show_search: !this.state.show_search
    });
  };

  render() {
    const is_mobile = this.props.page_details.device_data.screen_width < 461;
    const { siderToggle, showMediaSection, isMobile } = this.props;
    return (
      <Fragment>
        <div
          className="wea-flex-row wea-flex-ac wea-flex-jsb"
          style={{ maxWidth: this.props.page_details.device_data.screen_width }}
        >
          <div className="wea-flex-row wea-flex-ac">
            <Icon
              className="trigger"
              // style={{ lineHeight: "69px" }}
              // style={{ lineHeight: "0" }}
              onClick={() => {
                siderToggle(isMobile);
              }}
              type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
            />
            <div
              onClick={() => {
                showMediaSection(isMobile);
              }}
              className="wea-font-lg wea-pointer"
              style={{ lineHeight: "" }}
            >
              <b>Backend</b>
            </div>
          </div>
          <div className="wea-flex-rr wea-flex-ac">
            {(!is_mobile ||
              (is_mobile &&
                this.props.collapsed &&
                !this.state.show_search)) && (
              <div className="wea-flex-rr wea-flex-ac">
                <div
                  style={{ lineHeight: "0" }}
                  className="wea-l-pad-5 wea-r-pad-10"
                >
                  <Dropdown overlay={settings_menu}>
                    <a className="ant-dropdown-link" href="#">
                      <Icon
                        type="setting"
                        theme="filled"
                        style={{ fontSize: 22, color: "grey" }}
                      />
                    </a>
                  </Dropdown>
                </div>
                <div style={{ lineHeight: "0" }} className="wea-lr-pad-5">
                  <Dropdown overlay={notification_menu}>
                    <a className="" href="#">
                      <Icon
                        type="bell"
                        style={{ fontSize: 22, color: "grey" }}
                      />
                    </a>
                  </Dropdown>
                </div>
                <div style={{ lineHeight: "0" }} className="wea-lr-pad-5">
                  {/* <Tooltip title="Profile"> */}
                  {/* <Avatar icon="user" theme="filled" style={{color: 'grey', backgroundColor: '#fff'}}/> */}
                  <div
                    style={{
                      width: "22px",
                      height: "22px"
                      // lineHeight: "10px"
                    }}
                    // className="wea-pad-10"
                  >
                    <img
                      className="wea-border-radius-half wea-pointer"
                      style={{
                        width: "100%",
                        height: "100%"
                        // verticalAlign: "baseline",
                        // lineHeight: "100px"
                      }}
                      src={assets.findworkspace}
                      alt=""
                    />
                  </div>
                  {/* </Tooltip> */}
                </div>
              </div>
            )}
            {(this.state.show_search || !is_mobile) && (
              <div className="wea-lr-pad-10">
                <Search
                  placeholder="Search Here"
                  onSearch={this.search_box_toggle}
                  onChange={this.handleChange.bind(this)}
                  style={{ width: 120 }}
                />
              </div>
            )}
            {is_mobile && (
              <div
                className="wea-lr-pad-10"
                style={{ lineHeight: "0" }}
                onClick={this.search_box_toggle}
              >
                <Icon type="search" style={{ fontSize: 22, color: "grey" }} />
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "development") {
AppHeader.propTypes = {
  // actions: PropTypes.object,
  history: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(AppHeader)
);
