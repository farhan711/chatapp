import React, { Component } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import { MdVerticalAlignBottom } from "react-icons/md";
import PropTypes from 'prop-types'

import "./index.scss";
class DocWrapper extends Component {
  render() {
    const { screen_width } = this.props;
    return (
      <div style={{ width: "100%" }} className="media_doc_wrapper wea-pointer">
        <div
          className="wea-pad-10 wea-flex wea-flex-ac"
          style={{ fontSize: "1em" }}
        >
          <div
            className={`${
              screen_width <= 800 ? "wea-font-xl" : "wea-font-xxxl"
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
                screen_width <= 800 ? "wea-font-lg" : "wea-font-xl"
              } wea-r-pad-5`}
            >
              <MdVerticalAlignBottom />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
DocWrapper.propTypes = {
  screen_width: PropTypes.object,
};
export default DocWrapper;
