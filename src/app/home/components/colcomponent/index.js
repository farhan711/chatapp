import React, { Component } from "react";
import { Col } from "antd";
import PropTypes from "prop-types";

export default class ColumnComponent extends Component {
  render() {
    // const { is_mobile} = this.props;
    const {
      col_span,
      heading,
      text,
      imgsrc,
      show_upper_img,
      show_img,
      imgStyle,
      imgClass,
      headingStyle,
      textStyle,
      headingClass,
      textClass,
      colClass
    } = this.props;

    return (
      <Col sm={col_span} className={colClass}>
        {show_img && show_upper_img && (
          <img src={imgsrc} style={imgStyle} className={imgClass} />
        )}
        <div className={headingClass} style={headingStyle}>
          <h1>{heading}</h1>
        </div>
        <div className={textClass} style={textStyle}>
          <h2>{text}</h2>
        </div>
        {show_img && !show_upper_img && (
          <img src={imgsrc} style={imgStyle} className={imgClass} />
        )}
      </Col>
    );
  }
}

ColumnComponent.propTypes = {
  col_span: PropTypes.number,
  heading: PropTypes.string,
  text: PropTypes.string,
  imgsrc: PropTypes.string,
  show_img: PropTypes.bool,
  show_upper_img: PropTypes.bool,
  imgClass: PropTypes.string,
  imgStyle: PropTypes.string,
  headingClass: PropTypes.string,
  headingStyle: PropTypes.string,
  textClass: PropTypes.string,
  textStyle: PropTypes.string,
  colClass: PropTypes.string,
  is_mobile: PropTypes.bool
};
