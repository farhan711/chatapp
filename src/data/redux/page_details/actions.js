
import * as actionTypes from './actiontypes';
// import { showMessage, } from '../../config/utils';

export function setLang(lang) {
    return function (dispatch) {
        dispatch({
            type: actionTypes.SYST_LANG_SET,
            payload: {
                lang: lang
            }
        });
    };
}

export function showMenu(show_menu) {
    return function (dispatch) {
        dispatch({
            type: actionTypes.SHOW_MENU,
            payload: {
                show_menu: show_menu,   
            }
        });
    };
}

export function setDeviceData(device_data) {
    return function (dispatch) {
        dispatch({
            type: actionTypes.DEVICE_DATA_LOADED,
            payload: {
                device_data: device_data
            }
        });
    };
}

export function pageChanged(current_page, current_sider_module) {
    return function (dispatch) {
        dispatch({
            type: actionTypes.PAGE_CHANGED,
            payload: {
                current_page,
                current_sider_module,
            }
        });
    };
}

// export function showWebNotification(body, title) {
//     const payload = {
//         title: title ? title : "Ori Chatbot Dashboard",
//         body
//     };
//     return function (dispatch) {
//         dispatch({
//             type: actionTypes.SHOW_WEB_NOTIFICATON,
//             payload: payload
//         });
//     };
// }

// export function resetWebNotification() {
//     return function (dispatch) {
//         dispatch({
//             type: actionTypes.RESET_WEB_NOTIFICATON,
//         });
//     };
// }


// export function downloadHtmlNodePdf({ node, filename, orientation, canvasOptions, subTitle }) {
//     return function (dispatch) {
//         dispatch({
//             type: actionTypes.PAGE_LOADING,
//             payload: 'downloading'
//         });
//     };
// }