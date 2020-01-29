import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Switch } from "antd";
import "./index.scss";
import { assets } from "../../../../data/assets/assetsurl";
import SelectUsers from "../../../selectUsers";

class ExistingWorkspace extends Component {
  constructor(props) {
    super(props);
    this.state={
      checked: false
    }
    this.onClickHandler=this.onClickHandler.bind(this)
  }

  onClickHandler() {
    this.setState({
      checked:!this.state.checked
    })
  }

  render() {
// const ExistingWorkspace = props => {
  return (
    <div className="align-center">
    <div
      className="list-item existing-workspace  wea-border-radius-10 wea-pad-0"
      style={{ margin: "5px",  width: "305%", border: "1px solid #eeeeee", paddingBottom: 0 }}
    >
      <div
        className="wea-flex wea-flex-ac"
        style={{ marginLeft: "2%", marginTop: "-10px" }}
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
        <div className="switch-spacing-vertical">
          <div className="switch-on"> <span className={this.state.checked ? "" :"bold"}>Global</span> <span className="switch-position-global"></span>{<Switch onClick={this.onClickHandler}/>}<span className="switch-position-private"></span>Private
       </div> <div className="switch-space"><div className="switch-space-column">
         {this.state.checked==true ? <SelectUsers/> :''}</div>
      </div>
      </div>
      </div>
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
