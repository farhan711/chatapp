import React, { Component } from "react";
import PropTypes from 'prop-types'
import OtpInput from "react-otp-input";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
// import WorkspaceForm from './components/form';

import { assets } from "../../data/assets/assetsurl";
import BasicHeader from "../../components/basicheader";
import "./index.scss";
import * as signupActions from "../../data/redux/login_details/actions";
import {ROUTE_PATH} from "../../data/config/constants";

function mapStateToProps(state) {
  return {
    page_details: state.page_details,
    login_details: state.login_details
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, signupActions),
      dispatch
    )
  };
}

class VerifyOTP extends Component {
  state = {
    otp:null
  };
  sendOtp(otp){
     this.setState({
       otp:otp
     })
    //  if(otp.keyCode === 13){
    //    otp.preventDefault()
    //      console.log('sending otp =>')
    //  }
    // const openProfilePage = () => {
    //    this.props.history.push(ROUTE_PATH.PROFILE_PAGE)
    //  }
    //  this.props.verifyOTP(otp,openProfilePage)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log('sending otp =>')
    const payload = {
       email : localStorage.getItem("signupEmail"),
       otp:this.state.otp
    }
      const openLoginPage = () => {
      this.props.history.push(ROUTE_PATH.LOGIN)
     }
     this.props.actions.verifyOtp(payload,openLoginPage)
  }
  render() {
    // console.log('state ====>>> ',this.state.otp)
    const email = localStorage.getItem("signupEmail")
    return (
      <form onSubmit={this.handleSubmit}>
        {/* <div className="wea-flex wea-flex-center wea-bg-white wea-full-width wea-b-mrgn-15 
                wea-height-60 wea-b-border-light">
                <div>
                    <Avatar className="wea-b-mrgn-5" src="../../data/assets/img/logowe.png" />
                    <span className="wea-font-lg wea-font-ultra-bold wea-l-mrgn-10">ZZZ</span>
                </div>
           </form> */}
        <BasicHeader />
        <div className="wea-flex wea-flex-center ">
          <div className="create-workspace-form-container wea-box-shadow">
            <div className="create-workspace-form-container2">
              <h2 style={{ fontSize: "2em" }}>
                <b>Check your email!</b>
              </h2>
              <div style={{ marginBottom: "17px" }}>
                <span>We have sent a 6-digit-confirmation code. </span> <b className="r-pad-10">{email}</b>It will expire shortly, so
                enter it soon.
              </div>
              <div className="wea-flex wea-flex-center">
                <OtpInput
                  inputStyle="otp-input"
                  onChange={otp => this.sendOtp(otp)}
                  numInputs={4}
                  separator={<p>.</p>}
                />
              </div>
              <button style={{display:'none'}}>Submit</button>
              <div className="wea-t-pad-15 wea-font-sm">
                Keep this window open wile checking for your code. Remember to
                look in span folder.
              </div>
            </div>
            <div>
              <img
                className="create-workspace-form-image"
                src={assets.otpGIF}
                alt=""
              />
            </div>
          </div>
        </div>
      </form>
    );
  }
}
VerifyOTP.propTypes = {
  history: PropTypes.object,
  actions: PropTypes.object,
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    { withRef: true }
  )(VerifyOTP)
);
