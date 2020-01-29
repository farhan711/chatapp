import * as actionTypes from "./actiontypes";
import * as API from "./api";
import { showMessage, } from '../../config/utils';

//getting from localstorage and storing in reducer
export function showUserDetails() {
  return function (dispatch) {
    const userDetails = JSON.parse(localStorage.getItem("getUserInfoFromLocalStorage"));
    if (userDetails) {
      const payload = {
        userDetails:userDetails
      };
      dispatch({
        type: actionTypes.SHOW_USER_DETAILS,
        payload
      });
    }
  };
}

export function fetchUserDetails(payload) {
  // console.log('after coming of data', payload);
    return function (dispatch) {
      API.getUserProfile(payload, (error, response) => {
        if (!error && response) {
          const userDetails = response.details.user
          const payload = {
            userDetails: userDetails
          }
          dispatch({
            type: actionTypes.FETCH_USER_DETAILS,
            payload
          })
        }
      })
  }
}


export const updateProfile = payload => () => {
  // console.log('after coming data',payload)
    API.updateProfile(payload, (error, response) => {
      if (!error && response) {
        showMessage('success', 'Your profile has been successfully updated');
    }
    });
};

// export const getUserProfile = payload => dispatch => {
//   console.log("users action called");
//   API.getUserProfile(payload, (error, response) => {
//     dispatch({
//       type: actionTypes.GOT_USER_PROFILE
//     });
//     console.log("users details response", response);
//   });
// };
