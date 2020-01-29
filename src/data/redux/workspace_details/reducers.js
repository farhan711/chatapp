import * as actionTypes from './actiontypes';
import states from './states';

export default function workspace_details(state = states.workspace_details, action) {
  switch (action.type) {

    case actionTypes.CREATING_WORKSPACE_LOADING:
    return {
        ...state,
        loaders:{
            ...state,
            creating_wokspace_loading:true
        }
    };

    case actionTypes.CREATING_WORKSPACE_LOADED:
    return {
        ...state,
        loaders:{
            ...state,
            creating_wokspace_loading:false
        }
    };
    case actionTypes.GET_WORKSPACE_DETAILS:
    //console.log('action.payload',action.payload)
      return {
        ...state,
        // workspace:action.payload.workspace,
        // users:[...action.payload.users]
      };

      case actionTypes.CHECKING_WORKSPACE:
      return {
          ...state,
          loaders:{
              ...state,
              checking_workspace:true
          }
      }; 

      case actionTypes.WORKSPACE_LOADED:
      return {
          ...state,
          loaders:{
              ...state,
              checking_workspace:false
          }
      };

      case actionTypes.GET_WORKSPACE_PERMISSIONS:
        return {
          ...state,
          permissions:
            action.payload
        }

      case actionTypes.POST_PERMISSIONS:
        return {
          ...state,
          permissions:
            action.payload
        }

      case actionTypes.GET_USERLIST:
        return {
          ...state,
          userlist:
            action.payload
        }

      case actionTypes.GET_CHANNELLIST:
        return {
          ...state,
          channelList: action.payload
        }
    default:
      return state;
  }
}