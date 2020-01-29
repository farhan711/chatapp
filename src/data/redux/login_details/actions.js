import * as actionTypes from "./actiontypes";
import * as API from "./api";
import { showMessage} from '../../config/utils';

export function createUser(payload, callback) {
  return function (dispatch) {
    const sendEmail = {
      email:payload.email
    }
    localStorage.setItem("signupEmail", payload.email);
    dispatch({
      type: actionTypes.CREATING_USER_LOADING,
    });
    API.createUser(payload, (error, response) => {
      if (!error) {
        dispatch({
            type: actionTypes.CREATING_USER_LOADED,
        });
        dispatch({
          type: actionTypes.CREATE_USER,
          payload:response
      });
        localStorage.setItem("weaverseUserAuth", response.token);
        if(callback && response.status === 'success'){
          // console.log('success')
          // showMessage('success', 'User has been successfully created');
          // callback()
        }
        else{
          showMessage('error', response && response.details);
        }
      }
    });
    API.sendingOtpOnMail(sendEmail, (error, response) => {
      if (!error) {
        // console.log('sending otp on mail',response);
        if(callback && response.status === 'success'){
          showMessage('success', 'User has been successfully created');
          callback()
        }
        else{
          showMessage('error', response && response.details);
        }
      }
    });
  };
}

export function verifyOtp(payload, callback) {
  // console.log('verifying otp called in actions')
  return function (dispatch) {
    dispatch({
      type: actionTypes.VERIFYING_OTP,
    });
    API.verifyingOtp(payload, (error, response) => {
      if (!error) {
        dispatch({
            type: actionTypes.OTP_VERIFIED,
        });
        if(callback && response.status === 'success'){
          showMessage('success', 'User has been successfully created');
          callback()
        }
        else{
          showMessage('error', response && response.details);
        }
      }
    });
  };
}

export function loginUser(payload, callback) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.AUTH_LOADING
    });
    API.loginUser(payload, (error, response) => {
      dispatch({
        type: actionTypes.AUTH_LOADED
      });
      if (!error) {
        // console.log('when not error')
        dispatch({
          type: actionTypes.LOGIN_DETAILS,
          payload: response
        });
        if(response.status === "failed"){
            // console.log('status failed')
        }            
        else{
          localStorage.setItem("getUserInfoFromLocalStorage", JSON.stringify(response.details));
          showMessage('success', 'User has been successfully login');
          if (callback) callback();
        }
      }
      // else{
      //   console.log('when error')
      //   showMessage('error', response && response.message ? response.message : 'user doesnt exist');
      // }
      dispatch({
        type: actionTypes.AUTH_LOADED
      });
    });
  };
}

export function logoutUser() {
  localStorage.removeItem("weaverseUserAuth");
}

export function getUserAuth() {
  return function (dispatch) {
    const authToken = localStorage.getItem("weaverseUserAuth");
    if (authToken) {
      const payload = {
        auth: true,
        token: authToken
      };
      dispatch({
        type: actionTypes.LOGIN_DETAILS,
        payload
      });
    }
  };
}

export const forgetpassword = (payload) => (dispatch) => {
  // console.log('forrgot password payload');
  dispatch({
      type: actionTypes.FORGOT_PASSWORD_LOADING
  });
  API.forgetpassword(payload, () => {
    showMessage('success', 'Password Reset Link Sent on your Email');
    // console.log('forgot password api hit', response);
    dispatch({
      type: actionTypes.FORGOT_PASSWORD_LOADED,
    });
  });
};

export const verifytoken = (payload) => (dispatch) => {
  // console.log('verify token');
  dispatch({
      type: actionTypes.TOKEN_VERIFIED_LOADING
  });
  API.verifytoken(payload, () => {
    dispatch({
      type: actionTypes.TOKEN_VERIFIED_LOADED
  });
    // console.log('forgot password api hit', response);
    dispatch({
      // type: actionTypes.GET_WORKSPACE_DETAILS,
      // payload: response.details
    });
  });
};

export const resetpassword = (payload , callback) => (dispatch) => {
  // console.log('reset password ==>> ',payload);
  dispatch({
      type: actionTypes.RESET_PASSWORD_LOADING
  });
  API.resetpassword (payload, (error) => {
    dispatch({
      type: actionTypes.RESET_PASSWORD_LOADED
  });
  if(!error){
    showMessage('success', 'Password Reset successfully');
    if(callback)callback()
  }
    // console.log('forgot password api hit', response);
    dispatch({
      // type: actionTypes.GET_WORKSPACE_DETAILS,
      // payload: response.details
    });
  });
};

export const verifySignup = (payload) => (dispatch) => {
  // console.log('reset password ==>> ',payload);
  dispatch({
      type: actionTypes.RESET_PASSWORD_LOADING
  });
  API.verifySignupApi (payload, () => {
    dispatch({
      type: actionTypes.RESET_PASSWORD_LOADED
  });
  });
};

// verifySignup

