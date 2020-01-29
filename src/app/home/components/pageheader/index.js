import React, { Component } from "react";
import { Layout, Menu, Button, Avatar } from "antd";
import { FaUser } from "react-icons/fa";
// import {NavLink, withRouter} from "react-router-dom";

import { ROUTE_PATH } from "../../../../data/config/constants";
import PropTypes from "prop-types";

import './index.scss';

const { Header } = Layout;

export default class PageHeader extends Component {
  render() {
    const { orientation, show_menu } = this.props;
//
    return (
      <Header
        className="responsive wea-full-width"
        id="header"
        style={{ position: "fixed", zIndex: 1, width: "100%", border: "none", display:"block" }}
      >
        {show_menu && (
          <Menu
            className="wea-text-left wea-border-none wea-full-width"
            theme="light"
            mode={orientation}
            style={{ width: "100%",height:"100%",paddingTop:"8px" }}
          >
            <Menu.Item key="0" className="wea-border-none logo">
            <Avatar
              className="wea-no-t-pad logo-main-head"
              //style={{marginTop:"1px", position:"relative"} }
              src="../../data/assets/img/logowe.png"
            />
            {/* </Menu.Item>
            <Menu.Item key="1" className="wea-border-none brand-name">*/}
              
              <span className="main-head wea-font-lg wea-font-ultra-bold wea-l-pad-10">
                
              </span>
            </Menu.Item>
            <Menu.Item key="2" className="item-extra-padding hover-color">Why ZZZ?</Menu.Item>
            <Menu.Item key="3" className="item-extra-padding hover-color">Product</Menu.Item>
            <Menu.Item key="4" className="item-extra-padding hover-color">Services</Menu.Item>
            <Menu.Item key="5" className="item-extra-padding hover-color">Customers</Menu.Item>
            <Menu.Item key="6" className="item-extra-padding hover-color">Pricing</Menu.Item>
            <Menu.Item key="7" className="item-extra-padding hover-color">Contact Us</Menu.Item>
            {orientation == "horizontal" && (
              <Menu.Item key="9" className="item-extra-padding wea-float-right wea-border-none get-started-item">
                <Button
                  className="wea-bg-primary-light wea-font-bold left-align get-started"
                  onClick={this.props.navigateTo.bind(this, ROUTE_PATH.LOGIN)}
                >
                  Get Started
                </Button>
              </Menu.Item>
            )}
            {orientation == "vertical" && (
              <Menu.Item key="9" className="item-extra-padding no-border">
                <Button
                  className="wea-bg-primary-light wea-font-bold"
                  onClick={this.props.navigateTo.bind(this, ROUTE_PATH.LOGIN)}
                >
                  Get Started
                </Button>
              </Menu.Item>
            )}
            {orientation == "horizontal" && (
              <Menu.Item key="8" className="wea-float-right rightt wea-border-none workspace">
                {/* <Button className="wea-bg-light" onClick={this.props.navigateTo.bind(this, ROUTE_PATH.LOGIN)} onClick={this.props.navigateTo.bind(this, ROUTE_PATH.LOGIN)}>
                                    Sign In</Button> */}
                <Button
                  className="wea-bg-light"
                  onClick={this.props.navigateTo.bind(
                    this,
                    ROUTE_PATH.START_WORKSPACE
                  )}
                >
                  <div className="wea-flex wea-flex-ac">
                    <FaUser className="" />{" "}
                    <span className="wea-lr-pad-5 left-align">Your Workspace</span>
                  </div>
                </Button>
              </Menu.Item>
            )}
            {/* {orientation=='vertical' &&
                 <Menu.Item key="8" className="">
                     <Button className="wea-bg-light" onClick={this.props.navigateTo.bind(this, ROUTE_PATH.LOGIN)}>
                         Sign In</Button>
                 </Menu.Item>
            } */}
            {orientation == "horizontal" && (
              <Menu.Item key="10" className="avatar-space wea-float-right wea-border-none">
              <Avatar
                className="wea-bg-primary-light wea-font-bold left-align"
                onClick={this.props.navigateTo.bind(
                  this,
                  ROUTE_PATH.PROFILE_PAGE
                )}/>
                {/*// <Button
                //   className="wea-bg-primary-light wea-font-bold left-align"
                //   onClick={this.props.navigateTo.bind(
                //     this,
                //     ROUTE_PATH.PROFILE_PAGE
                //   )}
                // >
                //   Profile
                // </Button>*/}
              </Menu.Item>
            )}
          </Menu>
        )}
        {!show_menu && (
          <Menu
            className="wea-text-center wea-full-width wea-flex wea-flex-center wea-border-none"
            theme="light"
            mode="horizontal"
          >
            <Menu.Item key="1" className="wea-border-none">
              <Avatar
                className="wea-b-mrgn-5"
                src="../../data/assets/img/logowe.png"
              />
              <span className="wea-font-lg wea-font-ultra-bold wea-l-mrgn-5">
                ZZZ
              </span>
            </Menu.Item>
            <Menu.Item key="2" className="">
              <Button
                className="wea-bg-light"
                onClick={this.props.navigateTo.bind(this, ROUTE_PATH.LOGIN)}
              >
                Sign In
              </Button>
            </Menu.Item>
          </Menu>
        )}
      </Header>
    );

    
  }
}

PageHeader.propTypes = {
  orientation: PropTypes.string,
  show_menu: PropTypes.bool,
  navigateTo: PropTypes.func
};
