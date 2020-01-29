import React, { Component } from "react";
import PropTypes from 'process'
import { Avatar, Button } from "antd";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import WorkspaceForm from "./components/form";

import { assets } from "../../data/assets/assetsurl";
import { ROUTE_PATH } from "../../data/config/constants";
import SpinnerLoader from "../../components/spinnerloader";
import * as workspaceActions from "../../data/redux/workspace_details/actions";
// import { Row,Col } from 'antd';

function mapStateToProps(state) {
  return{
    workspace_details : state.workspace_details,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, workspaceActions), dispatch)
  };
}
class FindWorkspace extends Component {
  onSubmitClick = text => {
    const payload = {
      name: text
    };
    const goToDetailsPage = id => {
      // console.log('my id =====>>> ',id)
      this.props.history.push(`${ROUTE_PATH.WORKSPACE}/${id}`);
    };
    this.props.actions.getWorkspaceDetails(payload, goToDetailsPage);
  };
  render() {
    if (this.props.workspace_details.loaders.checking_workspace) {
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
              this.props.history.push(ROUTE_PATH.CREATE_WORKSPACE);
            }}
          >
            Create workspace
          </Button>
        </div>
        <div className="wea-flex wea-flex-center ">
          <div className="create-workspace-form-container wea-box-shadow">
            <div className="create-workspace-form-container2">
              <h2 style={{ fontSize: "2em" }}>
                {" "}
                <b>Find your Workspace</b>
              </h2>
              <div style={{ marginBottom: "17px" }}>
                We will send you an email to confirm your address and find
                existing workspaces you have joined or you can join.
              </div>
              <WorkspaceForm onSubmitClick={this.onSubmitClick} />
            </div>
            <div>
              <img
                className="create-workspace-form-image"
                src={assets.findworkspace}
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
FindWorkspace.propTypes = {
  history: PropTypes.object,
  actions:PropTypes.object,
  workspace_details:PropTypes.object,
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(FindWorkspace)
);
