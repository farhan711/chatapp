import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";

import WrappedLoginForm from "./components/loginform";
import BasicHeader from "../../../components/basicheader";
import SpinnerLoader from "../../../components/spinnerloader";

import "./index.scss";

import * as pageActions from "../../../data/redux/page_details/actions";
import * as loginActions from "../../../data/redux/login_details/actions";
import { APP_PAGES } from "../../../data/config/constants";
import { assets } from "../../../data/assets/assetsurl";

function mapStateToProps(state) {
  return {
    page_details: state.page_details,
    login_details: state.login_details
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, pageActions, loginActions),
      dispatch
    )
  };
}

class Login extends Component {
  onSubmit = e => {
    let { actions } = this.props;
    const goToWorkspacePage = () => {
      this.props.history.push('/profile_page');
    };
    actions.loginUser(e, goToWorkspacePage);
  };

  componentWillMount() {
    let { actions } = this.props;
    actions.pageChanged(APP_PAGES.LOGIN, "ZZZ Dashboard");
  }

  render() {
    const {actions, history,login_details } = this.props;
    if (login_details.loaders.auth_loading) {
      return (
          <SpinnerLoader />
      );
  } 
  else {
    return (
      <div>
        <BasicHeader />
        <div className="wea-flex wea-flex-center wea-text-center">
          <div className="login-form-container wea-box-shadow ">
            <div className="wea-mrgn-10">
              <h2>Log In</h2>
              <WrappedLoginForm
                actions={actions}
                history={history}
                onSubmit={this.onSubmit.bind(this)}
              />
            </div>
            <div>
              <img
                className="find-workspace-form-image"
                src={assets.loginGIF}
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


Login.propTypes = {
  page_details: PropTypes.object,
  actions: PropTypes.object,
  history: PropTypes.object,
  login_details: PropTypes.object,
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(Login)
);
