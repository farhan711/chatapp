import React, { Component } from "react";

import { assets } from "../../../../../../../../data/assets/assetsurl";
import PropTypes from 'prop-types'

import "./index.scss";
class ImageWrapper extends Component {
  render() {
    const { screen_width, isMobile } = this.props;
    const sw = isMobile
      ? `${(screen_width - 30) / 3}px`
      : `${(391 - 30) / 3}px`;
    const isIpad = screen_width > 765;
    return (
      <div
        style={{
          height: isIpad ? `${(391 - 30) / 3}px` : sw,
          width: isIpad ? `${(391 - 30) / 3}px` : sw,
          padding: "5px"
        }}
        className="media_image_wrapper wea-pointer"
      >
        <img
          style={{ height: "100%", width: "100%" }}
          src={assets.profileDp}
          alt=""
        />
      </div>
    );
  }
}
ImageWrapper.propTypes = {
  screen_width: PropTypes.object,
  isMobile:PropTypes.object
};
export default ImageWrapper;
