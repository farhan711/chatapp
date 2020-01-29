import React, { Component } from "react";
import PropTypes from 'prop-types';

import DocWrapper from "../docwrapper";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
class DocSection extends Component {
  render() {
    const { screen_height, screen_width, isMobile } = this.props;
    return (
      <div
        className="wea-flex-column"
        style={{
          width: "100%",
          height: `${screen_height - 82 - 56 - 15}px`,
          overflowY: "scroll",
          overflowX: "hidden"
        }}
      >
        {arr.map(key => (
          <DocWrapper
            screen_height={screen_height}
            screen_width={screen_width}
            isMobile={isMobile}
            key={key}
          />
        ))}
      </div>
    );
  }
}
DocSection.propTypes = {
  screen_height: PropTypes.object,
  screen_width: PropTypes.object,
  isMobile: PropTypes.object,
};
export default DocSection;
