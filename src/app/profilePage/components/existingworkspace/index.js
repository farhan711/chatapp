import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from "antd";
import "./index.scss";
import { assets } from "../../../../data/assets/assetsurl";
//
class ExistingWorkspace extends Component {
  render() {
// const ExistingWorkspace = props => {
  return (
    <div
      className="list-item existing-workspace  wea-border-radius-10 wea-pad-10"
      style={{ margin: "5px", height: "30%", border: "1px solid #eeeeee" }}
    >
      <div
        className="wea-flex wea-flex-ac"
        // style={{ width: "50%" }}
      >
        <div className="" style={{ height: "40px", width: "40px" }}>
          <img
            style={{ height: "100%", width: "100%" }}
            src={assets.logo}
            alt=""
          />
        </div>
        <div className="wea-lr-pad-10">
          <h2 style={{ margin: "0px" }} className="wea-font-md">
            {this.props.title}
          </h2>
        </div>
      </div>
      <div className="wea-mrgn-10 wea-flex wea-flex-ac">
        <Button
          className="entity-6 wea-font-white wea-lr-mrgn-5"
          style={{ borderRadius: "5px" }}
          onClick={() => this.props.openWorkspace(this.props.title)}
        >
          Enter
        </Button>
        <Button
          className="wea-font-white wea-lr-mrgn-5"
          style={{ background: "grey", borderRadius: "5px" }}
        >
          Leave
        </Button>
      </div>
    </div>
  );
}
}
ExistingWorkspace.propTypes = {
  title: PropTypes.object,
  openWorkspace: PropTypes.object,
};
export default ExistingWorkspace;
