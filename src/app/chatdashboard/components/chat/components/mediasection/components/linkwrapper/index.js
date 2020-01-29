import React, { Component } from "react";
import PropTypes from 'prop-types'
import { assets } from "../../../../../../../../data/assets/assetsurl";
const fetchedLinkData = {
  title: "What is npm?",
  description: "It consists of a command line client.",
  link: "www.google.com",
  chat_text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
  illum aspernatur impedit iusto magni tenetur! Quos natus dolorem
  esse velit reiciendis deleniti voluptate? Dolorum totam
  repellendus aspernatur ad ex animi.`
};
import "./index.scss";
class LinkWrapper extends Component {
  render() {
    const { isMobile } = this.props;

    return (
      <div
        style={{ width: "100%" }}
        className="wea-lr-pad-10 wea-tb-pad-5 media_link_wrapper wea-pointer"
      >
        <div
          style={{
            background: "white",
            maxWidth: isMobile ? "100%" : "100%",
            borderRadius: "11px"
          }}
          className="wea-flex-column wea-box-shadow-light wea-pad-10"
        >
          <div
            className="wea-flex "
            style={{
              cursor: "pointer",
              height: "50px"
            }}
          >
            <div
              className=""
              style={{
                height: "50px",
                width: "50px",
                paddingRight: ""
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "50px"
                }}
                src={assets.thumbnail}
                alt=""
              />
            </div>
            <div
              className="wea-flex-column wea-pad-5 wea-flex-jsa"
              style={{
                width: "100%",
                height: "50px",
                backgroundColor: "#ececec"
              }}
            >
              <div className="wea-font-11">
                <b>{fetchedLinkData.title}</b>
              </div>
              <div
                className="wea-font-11"
                style={{
                  color: "grey"
                  // whiteSpace: "nowrap",
                  // overflow: "hidden",
                  // textOverflow: "ellipsis"
                }}
              >
                {fetchedLinkData.description.slice(0, 22)}
              </div>
              <div className="wea-font-11" style={{ color: "grey" }}>
                {fetchedLinkData.link}
              </div>
            </div>
          </div>
          <div>
            <div>{fetchedLinkData.chat_text.slice(0, 22)}</div>
            <a href="https://www.google.com/">https://www.google.com/</a>
          </div>
        </div>
      </div>
    );
  }
}
LinkWrapper.propTypes = {
  // screen_width: PropTypes.object,
  // screen_height: PropTypes.object,
  isMobile:PropTypes.object
};
export default LinkWrapper;
