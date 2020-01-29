import * as actionTypes from './actiontypes';
import * as API from './api';
// import socketIOClient from "socket.io-client";
// import * as URLS from "../../config/urls";

export function saveSocketToken(payload) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.SAVE_SOCKET,
      payload
    });
  };
}
export function savingRoomId(payload) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.SAVE_ROOM_ID,
      payload
    });
  };
}
export function getChatHistory(payload) {
  return function (dispatch) {
    dispatch({
      type: actionTypes.MESSAGES_HISTORY_LOADING,
    })
      API.getChatHistory(payload, (error, response)=>{
        dispatch({
          type: actionTypes.MESSAGES_HISTORY_LOADED,
        })
          // if(!error && response){
              // console.log('chatHistory',response);
              dispatch({
                  type: actionTypes.MESSAGES_HISTORY,
                  payload:response.details
              })
          // }
      })
  }
} 

// export function saveReconnectData(payload) {
//   // console.log("Reconnect data ", payload);
//   return function (dispatch) {
//     dispatch({
//       type: actionTypes.SOCKET_CONNECTED,
//       payload
//     });
//   };
// }

// export function joinedToChatroom(payload) {
//   // console.log("joined to chatroom: ", payload);
//   return function (dispatch) {
//     dispatch({
//       type: actionTypes.JOINED_TO_CHATROOM,
//       payload
//     });
//   };
// }



