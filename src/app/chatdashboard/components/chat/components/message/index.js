import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import {
  FaRegFilePdf,
  FaRegSmileBeam,
  FaRegCommentAlt,
  FaRegShareSquare,
  FaChevronRight
} from "react-icons/fa";
import { MdVerticalAlignBottom } from "react-icons/md";
// import { assets } from '../../../../data/assets/assetsurl';
import { assets } from "../../../../../../data/assets/assetsurl";

import { Modal } from "antd";

import "./index.scss";

const fetchedLinkData = {
  title: "What is npm?",
  description: "It consists of a command line client.",
  link: "www.google.com"
};

const mapStateToProps = state => {
  return {
    page_details: state.page_details
  };
};
class Message extends Component {
  state = {
    ModalText: "Content of the modal",
    visible: false,
    confirmLoading: false,
    hover: false
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  hoverOn = () => {
    this.setState(() => ({
      hover: true
    }));
    // console.log("yes");
  };

  hoverOff = () => {
    this.setState(() => ({
      hover: false
    }));
    // console.log("No");
  };

  handleOk = () => {
    this.setState({
      ModalText: "The modal will be closed after two seconds",
      confirmLoading: true
    });
    this.setState({
      visible: false,
      confirmLoading: false
    });
  };

  handleCancel = () => {
    // console.log("Clicked cancel button");
    this.setState({
      visible: false
    });
  };

  render() {
    const { visible, confirmLoading } = this.state;
    const { page_details, onDpClick, message } = this.props;
    const isIpad = this.props.isMobile;
    const isMobile = this.props.page_details.device_data.screen_width <= 800;

    return (
      <div
        className="wea-flex msg-wrapper wea-b-pad-10"
        style={{
          background: this.props.dark || this.state.hover ? "#ececec" : "white",
          borderRadius: this.props.noncurved ? "0" : "15px"
        }}
      >
        <div
          style={{
            width:
              this.props.page_details.device_data.screen_width >= 768
                ? "60px"
                : "60px",
            height:
              this.props.page_details.device_data.screen_width >= 768
                ? "60px"
                : "60px"
          }}
          className="msg-dp wea-pad-10"
        >
          <img
            onClick={() => {
              onDpClick(isIpad);
            }}
            className="wea-img-contain wea-border-radius-half wea-pointer"
            style={{ width: "100%", height: "100%" }}
            src={assets.findworkspace}
            alt=""
          />
        </div>
        <div
          onMouseEnter={this.hoverOn}
          onMouseLeave={this.hoverOff}
          className="msg-body wea-pad-5"
          style={{ width: "100%" }}
        >
          <div
            className="wea-font-md wea-flex wea-flex-ac wea-flex-jsb"
            style={{ width: "100%", height: "29px" }}
          >
            <div
              style={{ marginTop: this.state.hover ? "0" : "0" }}
              className={`wea-flex wea-flex-ac wea-flex-wrap ${
                this.props.page_details.device_data.screen_width <= 800
                  ? "wea-font-sm"
                  : ""
                }`}
            >
                     <span><b> {this.props.message_history.senderId.firstName} </b></span> <span className="wea-l-pad-5"><b>{this.props.message_history.senderId.lastName} </b></span>
              <span
                className={`${
                  this.props.page_details.device_data.screen_width <= 800
                    ? "wea-l-pad-5"
                    : "wea-pad-5"
                  } wea-font-11`}
              >
                {this.props.message_history.createdAt}
              </span>
            </div>
            <div
              className="wea-flex wea-flex-ac wea-flex-jse"
              style={{
                backgroundColor: "white",
                width: "100px",
                borderRadius: "13px",
                top: "0"
              }}
            >
             {this.state.hover && !this.props.hideButtons && (
                <Fragment>
                  <span className="wea-t-pad-5 wea-pointer">
                    <FaRegSmileBeam />
                  </span>
                  <span className=" wea-t-pad-5 wea-lr-pad-10 wea-border-right-thin wea-border-left-thin wea-pointer">
                    <FaRegShareSquare />
                  </span>
                  <span className="wea-t-pad-5 wea-pointer">
                    <FaRegCommentAlt
                      onClick={() => {
                        this.props.onMessageClick(isIpad);
                      }}
                    />
                  </span>
                </Fragment>
              )}
            </div>
          </div>
          <span
          // className={`${
          //   page_details.device_data.screen_width <= 800 ? "wea-font-sm" : ""
          // }`}
          >
            {this.props.text ||
             message && message.mess
              // (!this.props.link &&
              // "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a"
              }
          </span>
          {this.props.link && (
            <div
              style={{
                background: "white",
                maxWidth: isMobile ? "90%" : "50%",
                borderRadius: "11px"
              }}
              className="wea-flex-column wea-box-shadow-light wea-t-mrgn-10 wea-pad-10"
            >
              {/* <div>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Mollitia, illum aspernatur impedit iusto magni tenetur! Quos
                  natus dolorem esse velit reiciendis deleniti voluptate?
                  Dolorum totam repellendus aspernatur ad ex animi.
                </div>
                <a href="https://www.google.com/">https://www.google.com/</a>
              </div> */}
              <div
                className="wea-flex wea-flex-ac"
                style={{
                  cursor: "pointer",
                  height: isMobile ? "50px" : "100px"
                }}
              >
                <div
                  className=""
                  style={{
                    height: isMobile ? "50px" : "100px",
                    width: isMobile ? "50px" : "100px",
                    paddingRight: ""
                  }}
                >
                  <img
                    style={{
                      width: isMobile ? "50px" : "100px",
                      height: isMobile ? "50px" : "100px"
                    }}
                    src={assets.thumbnail}
                    alt=""
                  />
                </div>
                <div
                  className="wea-flex-column wea-pad-5 wea-flex-jsa"
                  style={{
                    width: "100%",
                    // height: isMobile ? "50px" : "100%",
                    height: "100%",
                    backgroundColor: "white"
                  }}
                >
                  <div
                    className={`${isMobile ? "wea-font-11" : "wea-font-sm"}`}
                  >
                    <b>{fetchedLinkData.title}</b>
                  </div>
                  <div
                    className={`${isMobile ? "wea-font-11" : "wea-font-sm"}`}
                    style={{
                      color: "grey"
                      // whiteSpace: "nowrap",
                      // overflow: "hidden",
                      // textOverflow: "ellipsis"
                    }}
                  >
                    {(isMobile && fetchedLinkData.description.slice(0, 22)) ||
                      fetchedLinkData.description}
                  </div>
                  <div
                    className={`${isMobile ? "wea-font-11" : "wea-font-md"}`}
                    style={{ color: "grey" }}
                  >
                    {fetchedLinkData.link}
                  </div>
                </div>
              </div>
              {/* text comes here */}
            </div>
          )}
          {this.props.media && (
            <div
              className="wea-box-shadow-light wea-t-mrgn-10 wea-pointer"
              style={{
                width:
                  page_details.device_data.screen_width <= 800
                    ? "210px"
                    : "250px",
                background: "white",
                borderRadius: "11px"
              }}
            >
              <div
                className="wea-pad-10 wea-flex wea-flex-ac"
                style={{ fontSize: "1em" }}
              >
                <div
                  className={`${
                    page_details.device_data.screen_width <= 800
                      ? "wea-font-xl"
                      : "wea-font-xxxl"
                    }`}
                >
                  <FaRegFilePdf />
                </div>
                <div className="wea-pad-10 wea-flex wea-flex-ac wea-flex-jsb wea-full-width">
                  <span>
                    <b>MediaFileEBook.pdf</b>
                    <div className="wea-font-11">102 MB</div>
                  </span>
                  <div
                    className={`${
                      page_details.device_data.screen_width <= 800
                        ? "wea-font-lg"
                        : "wea-font-xl"
                      } wea-r-pad-5`}
                  >
                    <MdVerticalAlignBottom />
                  </div>
                </div>
              </div>
            </div>
          )}
          {this.props.image && (
            <div
              className=" wea-tb-pad-10 wea-pointer"
              style={{
                width:
                  page_details.device_data.screen_width <= 800
                    ? "225px"
                    : "400px"
              }}
            >
              <div className="">
                <div
                  onClick={this.showModal}
                  style={{
                    width:
                      page_details.device_data.screen_width <= 800
                        ? "125px"
                        : "250px"
                  }}
                >
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "3%"
                    }}
                    src={assets.profileDp}
                    alt=""
                  />
                </div>
                <Modal
                  bodyStyle={{ padding: "0", margin: "none" }}
                  style={{ top: 10 }}
                  // centered
                  width={950}
                  title="ImageTitle.jpeg"
                  visible={visible}
                  onOk={this.handleOk}
                  confirmLoading={confirmLoading}
                  onCancel={this.handleCancel}
                >
                  <div style={{ maxHeight: "500px", width: "100%" }}>
                    <img
                      style={{ width: "100%", maxHeight: "500px" }}
                      src={assets.profileImage}
                      alt=""
                    />
                  </div>
                </Modal>
              </div>
            </div>
          )}
          {this.props.emoji && (
            <div className="wea-flex wea-t-mrgn-20">
              <div
                className="wea-r-mrgn-10 wea-pointer"
                style={{
                  border: "1px solid #d9d9d9",
                  padding: "2px",
                  borderRadius: "25%",
                  background: "white"
                }}
              >
                😂 1
              </div>
              <div
                className="wea-pointer"
                style={{
                  border: "1px solid #d9d9d9",
                  padding: "2px",
                  borderRadius: "25%",
                  background: "white"
                }}
              >
                👍 3
              </div>
            </div>
          )}
          {this.props.reply && (
            <div
              style={{
                width: "100%",
                border: "1px solid #d9d9d9",
                background: "white",
                borderRadius: "13px"
              }}
              className="wea-flex wea-t-mrgn-10 wea-flex-ac wea-flex-jsb wea-pointer"
              onClick={() => {
                this.props.onMessageClick(isIpad);
              }}
            >
              <div className="wea-flex wea-pad-10">
                <div
                  style={{
                    color: "grey"
                  }}
                  className="wea-lr-pad-10"
                >
                  <b>2 Replies</b>
                </div>
                <div>View Thread</div>
              </div>
              <div className="wea-lr-pad-10">
                <FaChevronRight />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
if (process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "development") {
Message.propTypes = {
  screen_width: PropTypes.object,
  screen_height: PropTypes.object,
  isMobile:PropTypes.object,
  page_details:PropTypes.object,
  onDpClick:PropTypes.object,
  message:PropTypes.object,
  dark:PropTypes.object,
  noncurved:PropTypes.object,
  hideButtons:PropTypes.object,
  onMessageClick:PropTypes.object,
  text:PropTypes.object,
  link:PropTypes.object,
  media:PropTypes.object,
  image:PropTypes.object,
  emoji:PropTypes.object,
  reply:PropTypes.object,
  message_history:PropTypes.object
};
}

export default connect(mapStateToProps)(Message);
