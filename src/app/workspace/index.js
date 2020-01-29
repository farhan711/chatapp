import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Avatar, Button } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import "./index.scss";

import CreateWorkspaceForm from "../workspace/components/createworkspaceform";
import { assets } from "../../data/assets/assetsurl";
import { ROUTE_PATH } from "../../data/config/constants";

import SpinnerLoader from "../../components/spinnerloader";
import * as pageActions from "../../data/redux/page_details/actions";
import * as workspaceActions from "../../data/redux/workspace_details/actions";

function mapStateToProps(state) {
  return {
    login_details: state.login_details
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, pageActions, workspaceActions),
      dispatch
    )
  };
}
class CreateWorkspace extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  onSubmit = e => {
    // let { actions } = this.props;
    // actions.loginUser(e);
    // console.log("before calling action", e);
    this.props.actions.createWorkspace(e);
  };
  render() {
    if (this.props.login_details.loaders.creating_wokspace_loading) {
      return (
          <SpinnerLoader />
      );
  } 
  else {
    return (
      <div>
        <div
          className="wea-flex wea-flex-jsb wea-flex-ac wea-bg-white wea-full-width wea-b-mrgn-15 
                wea-height-60 wea-b-border-light"
          style={{ padding: "0px 30px" }}
        >
          <div className="avatar-header wea-flex wea-flex-jsb">
            <Avatar src="../../data/assets/img/logowe.png" />
            <span className="wea-font-lg wea-font-ultra-bold wea-l-mrgn-15 header">
              ZZZ
            </span>
          </div>
          <Button
            className="findworkspace-btn"
            style={{ background: "black", color: "white", height: "40px" }}
            onClick={() => {
              this.props.history.push(ROUTE_PATH.FIND_WORKSPACE);
            }}
          >
            Find workspace
          </Button>
        </div>
        <div className="wea-flex wea-flex-center ">
          <div className="create-workspace-form-container wea-box-shadow">
            <div className="create-workspace-form-container2">
              <h2 style={{ fontSize: "2em" }}>
                <b>Create a new Workspace</b>
              </h2>
              <div style={{ marginBottom: "17px" }}>
                To make a workspace from scratch, please confirm your email
                address.
              </div>
              <CreateWorkspaceForm onSubmit={this.onSubmit} />
            </div>
            <div>
              <img
                className="create-workspace-form-image"
                src={assets.createworkspaceform}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
}
CreateWorkspace.propTypes = {
  actions: PropTypes.object,
  login_details: PropTypes.object,
  history:PropTypes.object
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(CreateWorkspace)
);
