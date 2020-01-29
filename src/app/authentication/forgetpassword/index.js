import React, { Component } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import WorkspaceForm from "./components/form";
import { bindActionCreators } from "redux";
import BasicHeader from "../../../components/basicheader";

import { assets } from "../../../data/assets/assetsurl";
import SpinnerLoader from "../../../components/spinnerloader";
import * as loginActions from "../../../data/redux/login_details/actions";

function mapStateToProps(state) {
  return {
    page_details: state.page_details,
    login_details: state.login_details
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, loginActions), dispatch)
  };
}
class FindWorkspace extends Component {
  onSubmit = e => {
    // console.log(e);
    this.props.actions.forgetpassword(e);
  };

  render() {
    if (this.props.login_details.loaders.forgot_password_loading) {
      return (
          <SpinnerLoader />
      );
    }
    else {
    return (
      <div>
        <BasicHeader />
        <div className="wea-flex wea-flex-center ">
          <div className="create-workspace-form-container wea-box-shadow">
            <div className="create-workspace-form-container2">
              <h2 style={{ fontSize: "2em" }}>
                <b>Reset your password</b>
              </h2>
              <div style={{ marginBottom: "17px" }}>
                We will send you an email with a link to reset your password.
              </div>
              <WorkspaceForm
                history={this.props.history}
                login_details={this.props.login_details}
                onSubmit={this.onSubmit.bind(this)}
              />
            </div>
            <div>
              <img
                className="create-workspace-form-image"
                src={assets.forgetPasswordGIF}
                alt="forgot password"
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
  actions: PropTypes.object,
  login_details:PropTypes.object
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(FindWorkspace)
);
