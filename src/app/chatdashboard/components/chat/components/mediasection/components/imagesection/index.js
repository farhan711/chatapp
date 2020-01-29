import React, { Component } from "react";
import ImageWrapper from "../imagewrapper";
import PropTypes from 'prop-types';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
class ImageSection extends Component {
  render() {
    const { screen_height, screen_width, isMobile } = this.props;
    return (
      <div
        className="wea-pad-5 wea-flex wea-flex-wrap wea-flex-jsa wea-flex-ac"
        style={{
          width: "100%",
          height: `${screen_height - 82 - 56 - 15}px`,
          overflowY: "scroll",
          overflowX: "hidden"
        }}
      >
        {arr.map(key => {
          return (
            <ImageWrapper
              isMobile={isMobile}
              screen_width={screen_width}
              key={key}
            />
          );
        })}
      </div>
    );
  }
}
ImageSection.propTypes = {
  screen_width: PropTypes.object,
  screen_height: PropTypes.object,
  isMobile:PropTypes.object
};
export default ImageSection;
