import React, { Component } from "react";

import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { parse } from 'query-string';

import {ROUTE_PATH} from "../../../data/config/constants";

import * as loginActions from "../../../data/redux/login_details/actions";
import { assets } from "../../../data/assets/assetsurl";
import BasicHeader from "../../../components/basicheader";
import SpinnerLoader from "../../../components/spinnerloader";
// import CreateWorkspaceForm from "../../workspace/components/createworkspaceform";
import ResetPasswordForm from "./components/resetpasswordform";

import "./index.scss";

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

class ResetPassword extends Component {
   onSubmit = e => {
    const query_params = parse(location.search);
    // console.log(e);
    if(e.password === e.confirm_password){
      // console.log('password matched')
      if (query_params && query_params.token ) {
        const payload = {
          password: e.password,
          token:query_params.token
        }  
        const goToLoginPage = () => {
          this.props.history.push(ROUTE_PATH.LOGIN);
        };

        this.props.actions.resetpassword(payload,goToLoginPage);
    } 
    }
  };

  componentDidMount() {
    const { actions, location } = this.props;
    const query_params = parse(location.search);
    // console.log('query parameters',query_params)
    if (query_params && query_params.token ) {
        // const payload = {
        //     email: query_params.email,
        //     token: query_params.token,
            
        //     tokenType: query_params.tokenType,
        // };
        actions.verifytoken({token:query_params.token});
        // form.validateFields();
    } 
    // else {
    //     showMessage('error', 'you are trying to access invalid link.');
    //     this.goToLoginPage();
    // }
  }

  render() {
    if (this.props.login_details.loaders.token_verified_loading) {
      return (
        <SpinnerLoader />
    );
  } 
  else {
    return (
      <div>
        <div>
          <BasicHeader />
        </div>
        <div className="wea-flex wea-flex-center ">
          <div className="resetpassword-form-container wea-box-shadow">
            <div className="resetpassword-form-container2">
              <h2 style={{ fontSize: "2em" }}>
                <b>Create a new Password</b>
              </h2>
              <div style={{ marginBottom: "17px" }}>
                Reset your account new password
              </div>
              <ResetPasswordForm  onSubmit={this.onSubmit.bind(this)} />
            </div>
            <div style={{ height: "250px" }}>
              <img
                className="resetpassword-form-image wea-img-contain"
                src={assets.resetPasswordGIF}
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

ResetPassword.propTypes = {
  login_details: PropTypes.object,
  actions: PropTypes.object,
  history: PropTypes.object,
  location: PropTypes.object
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(ResetPassword)
);
