import * as actionTypes from './actiontypes';
import states from './states';

export default function login_details(state = states.login_details, action) {
    switch (action.type) {
        case actionTypes.CREATE_USER:
            // console.log("values recieved in reducer",action.payload);
            return {
                ...state,
                firstname: action.payload.details.firstname,
                lastname: action.payload.details.lastname,
                email: action.payload.details.email,
                phone: action.payload.details.phone,
                password: action.payload.details.password,
                isActivated:action.payload.details.isActivated
            };

        case actionTypes.LOGIN_DETAILS:{
            // const weaverseUserDetails = {
            //     details: action.payload.details,
            //     };
            // console.log("values recieved in reducer ====>>> ", action.payload);
            localStorage.setItem("weaverseUserAuth", action.payload.token);
            // localStorage.setItem("getUserInfoFromLocalStorage", JSON.stringify(weaverseUserDetails));WHY LOCAL STORAGE IS GETTING EMPTY WHEN AM GOING TO NEXT PAGE 
            return {
                ...state,
                loaders:{
                    ...state.loaders,
                    auth_loading:false
                }
            };
        }

            case actionTypes.AUTH_LOADING:
            return {
                ...state,
                loaders:{
                    ...state.loaders,
                    auth_loading:true
                }
            };

            case actionTypes.AUTH_LOADED:
            return {
                ...state,
                loaders:{
                    ...state,
                    auth_loading:false
                }
            };

            case actionTypes.CREATING_USER_LOADING:
            return {
                ...state,
                loaders:{
                    ...state,
                    creating_user_loading:true
                }
            };

            case actionTypes.CREATING_USER_LOADED:
            return {
                ...state,
                loaders:{
                    ...state,
                    creating_user_loading:false
                }
            };

            case actionTypes.FORGOT_PASSWORD_LOADING:
            return {
                ...state,
                loaders:{
                    ...state,
                   forgot_password_loading:true
                }
            };

            case actionTypes.FORGOT_PASSWORD_LOADED:
            return {
                ...state,
                loaders:{
                    ...state,
                   forgot_password_loading:false
                }
            };

            case actionTypes.TOKEN_VERIFIED_LOADING:
            return {
                ...state,
                loaders:{
                    ...state,
                    token_verified_loading:true
                }
            };

            case actionTypes.TOKEN_VERIFIED_LOADED:
            return {
                ...state,
                loaders:{
                    ...state,
                    token_verified_loading:false
                }
            };

            case actionTypes.RESET_PASSWORD_LOADING:
            return {
                ...state,
                loaders:{
                    ...state,
                    token_verified_loading:true
                }
            };

            case actionTypes.RESET_PASSWORD_LOADED:
            return {
                ...state,
                loaders:{
                    ...state,
                    token_verified_loading:false
                }
            };

        case actionTypes.UPDATE_USER:
            return {
                ...state,
            };

        case actionTypes.GET_USER_DETAILS:
            return {
                ...state,
                username: action.payload.username,
                email: action.payload.email,
                phone: action.payload.phone,
                password: action.payload.password,
            };

        default:
            return state;
    }
}
