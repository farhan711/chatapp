import * as actionTypes from "./actiontypes";
import states from "./states";

export default function socket_details(state = states.socket_details, action) {
  switch (action.type) {
   
    case actionTypes.SAVE_SOCKET: {
        localStorage.setItem('socket_token',action.payload.socket_token)
        return {
            ...state,
            socket_token:action.payload.socket_token
        };
    }
    case actionTypes.SAVE_ROOM_ID: {
        return {
            ...state,
            room_id:action.payload.room_id
        };
    }

    case actionTypes.MESSAGES_HISTORY: {
        // console.log('action.payload ((((((((((((((((((((((((((((((((',action.payload)
      return {
          ...state,
          messages_history:action.payload,
          all_messages:action.payload.map((history)=>{
             return history.message
          })
      };
  }
    case actionTypes.MESSAGES_HISTORY_LOADING:
    return {
            ...state,
            message_history_loading:true,
    };
    case actionTypes.MESSAGES_HISTORY_LOADED:
    return {
            ...state,
            message_history_loading:false,
    };
  
    case actionTypes.SOCKET_CONNECTED: {
      return {
          ...state,
          socket_details: {
              ...state.socket_details,
              socket: action.payload,
              connectivity: {
                  ...state.socket_details.connectivity,
                  is_socket_connected: true,
                  is_online: true
              }
          }
      };
  }


    // case actionTypes.SOCKET_CONNECT_ERROR: {
    //   return {
    //     ...state,
    //     connectivity: {
    //       ...state.connectivity,
    //       is_socket_connected: false,
    //       is_online: false
    //     }
    //   };
    // }

    // case actionTypes.SHOW_TYPING: {
    //   return {
    //     ...state,
    //     show_typing: action.payload.visibility
    //   };
    // }

    default:
      return state;
  }
}

    // case actionTypes.SET_DEFAULT_STATE: {
    //     let msg_length = action.payload.messages.length;
    //     let messages = action.payload.messages;

    //     return {
    //         ...state,
    //         messages: messages,
    //         skipLS: messages && msg_length > 0 && messages[msg_length - 1].skipLS ? messages[msg_length - 1].skipLS : false,
    //         send_variable_to_apiai: messages && msg_length > 0 && messages[msg_length - 1].send_variable_to_apiai ? messages[msg_length - 1].send_variable_to_apiai : false,
    //         sendVariableToLS: messages && msg_length > 0 && messages[msg_length - 1].sendVariableToLS ? messages[msg_length - 1].sendVariableToLS : false,
    //         variable_name: messages && msg_length > 0 && messages[msg_length - 1].variable_name ? messages[msg_length - 1].variable_name : '',
    //         quick_replies: messages && msg_length > 0 && messages[msg_length - 1].quickReplies ? messages[msg_length - 1].quickReplies : [],
    //         is_input_lock: messages && msg_length > 0 && messages[msg_length - 1].inputLock ? messages[msg_length - 1].inputLock : false,
    //         show_typing: false,
    //     };
    // }

    // case actionTypes.CLEAR_UNSEEN_MESSAGES: {
    //     localStorage.removeItem(LOCAL_STORAGE.UNSEEN_MESSAGES);

    //     return {
    //         ...state,
    //         unseen_messages: [],
    //     };
    // }

    // case actionTypes.PUSH_SENDER_MESSAGE: {
    //   localStorage.setItem(
    //     LOCAL_STORAGE.MESSAGES(),
    //     JSON.stringify([...state.messages, action.payload.message])
    //   );
    //   let unseen_messages = [...state.unseen_messages];
    //   let notification_count = state.notification_count;
    //   if (!state.is_chat_open) {
    //     unseen_messages = [...state.unseen_messages, action.payload.message];
    //     notification_count = 0;
    //     localStorage.setItem(
    //       LOCAL_STORAGE.UNSEEN_MESSAGES,
    //       JSON.stringify(unseen_messages)
    //     );
    //     localStorage.setItem(
    //       LOCAL_STORAGE.NOTIFICATION_COUNT,
    //       JSON.stringify(notification_count)
    //     );
    //   }

    //   return {
    //     ...state,
    //     unseen_messages,
    //     notification_count,
    //     messages: [...state.messages, action.payload.message],
    //     skipLS: false,
    //     send_variable_to_apiai: false,
    //     sendVariableToLS: false,
    //     variable_name: "",
    //     quick_replies: [],
    //     show_typing: false,
    //     is_input_lock: false
    //   };
    // }

    // case actionTypes.PUSH_RESPONSE_MESSAGE: {
    //   localStorage.setItem(
    //     LOCAL_STORAGE.MESSAGES(),
    //     JSON.stringify([...state.messages, action.payload.message])
    //   );
    //   let notification_count = state.notification_count;
    //   let unseen_messages = [...state.unseen_messages];
    //   if (!state.is_chat_open) {
    //     notification_count++;
    //     unseen_messages = [...state.unseen_messages, action.payload.message];
    //     localStorage.setItem(
    //       LOCAL_STORAGE.UNSEEN_MESSAGES,
    //       JSON.stringify(unseen_messages)
    //     );
    //     localStorage.setItem(
    //       LOCAL_STORAGE.NOTIFICATION_COUNT,
    //       JSON.stringify(notification_count)
    //     );
    //   }

    //   return {
    //     ...state,
    //     notification_count,
    //     unseen_messages,
    //     messages: [...state.messages, action.payload.message],
    //     quick_replies: action.payload.message.quickReplies
    //       ? action.payload.message.quickReplies
    //       : [],
    //     is_input_lock: action.payload.message.inputLock
    //       ? action.payload.message.inputLock
    //       : false,
    //     skipLS: action.payload.message.skipLS,
    //     sendVariableToLS: action.payload.message.sendVariableToLS,
    //     send_variable_to_apiai: action.payload.message.send_variable_to_apiai,
    //     variable_name: action.payload.message.variable_name,
    //     show_typing: false
    //   };
    // }

    // case actionTypes.HANDLE_CHATBOT_INTERFACE: {
    //   localStorage.setItem(
    //     LOCAL_STORAGE.IS_CHAT_OPEN,
    //     JSON.stringify(action.payload)
    //   );
    //   localStorage.removeItem(LOCAL_STORAGE.UNSEEN_MESSAGES);
    //   localStorage.removeItem(LOCAL_STORAGE.NOTIFICATION_COUNT);

    //   return {
    //     ...state,
    //     is_chat_open: action.payload,
    //     notification_count: action.payload ? 0 : state.notification_count,
    //     unseen_messages: []
    //   };
    // }
