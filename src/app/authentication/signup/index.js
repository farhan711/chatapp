import React, { Component } from "react";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { parse } from 'query-string';

import WrappedSignupForm from "./components/signupform";
import SpinnerLoader from "./../../../components/spinnerloader";
import BasicHeader from "../../../components/basicheader";
import "./index.scss";
import { assets } from "../../../data/assets/assetsurl";

import * as pageActions from "../../../data/redux/page_details/actions";
import * as signupActions from "../../../data/redux/login_details/actions";
import { APP_PAGES ,ROUTE_PATH} from "../../../data/config/constants";
import "../../../data/styles/common.scss";

function mapStateToProps(state) {
  return {
    page_details: state.page_details,
    login_details: state.login_details
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, pageActions, signupActions),
      dispatch
    )
  };
}

class Signup extends Component {
  onSubmit = e => {
    const query_params = parse(location.search);
    const token = query_params.token
    // console.log('new signup user from this side =======>>>>>',token)
    let { actions } = this.props;
    const goToSignupPage = () => {
        this.props.history.push(ROUTE_PATH.OTP_PAGE);
    };
    const goToLoginPage = () => {
      this.props.history.push('/login');
  };
    // actions.createUser(e,goToLoginPage);
    if(token){
      // console.log('')
          const payload = {
            email: e.email,
            firstname: e.firstname,
            lastname: e.lastname,
            password: e.password,
            phone: e.phone,
            token:token
          }
          actions.createUser(payload,goToLoginPage);
    }
    else{
      actions.createUser(e,goToSignupPage);
    }
  };

  componentWillMount() {
    let { actions } = this.props;
    actions.pageChanged(APP_PAGES.signup, "ZZZ Dashboard");
  }
  componentDidMount(){
    localStorage.removeItem('weaverseUserAuth')
    const query_params = parse(location.search);
    const token = query_params.token
    if(token){
     this.props.actions.verifySignup(token)
    }
  }

  render() {
    const {actions, history,login_details } = this.props;
    if (login_details.loaders.creating_user_loading) {
      return (
          <SpinnerLoader  />
      );
  } 
  else {
    return (
      <div>
        <BasicHeader />
        <div className="wea-flex wea-flex-center wea-text-center">
          <div className="signup-form-container wea-box-shadow">
            <div className="wea-lr-pad-10">
              <h2>Sign Up</h2>
              <WrappedSignupForm
                actions={actions}
                history={history}
                onSubmit={this.onSubmit.bind(this)}
              />
            </div>
            <div>
              <img
                className="signup-form-image"
                src={assets.signupGIF}
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

Signup.propTypes = {
  page_details: PropTypes.object,
  login_details: PropTypes.object,
  actions: PropTypes.object,
  history: PropTypes.object
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(Signup)
);
