import * as actionTypes from './actiontypes';
import * as API from './api';
import { showMessage } from '../../config/utils';

export function createWorkspace(payload) {
    return function (dispatch) {
        dispatch({
            type: actionTypes.CREATING_WORKSPACE_LOADING
        });
        // console.log("workspace payload is: ", payload);
        API.createWorkspace(payload, (error) => {
            if (!error) {
                dispatch({
                    type: actionTypes.CREATING_WORKSPACE_LOADED
                });
                showMessage('success', 'Workspace Created Successful');
                // console.log(response);
            }
            // dispatch({
            //     type: PAGE_LOADED,
            // });
        });
    };
}

export const getWorkspaceDetails = (payload, callback) => (dispatch) => {
    dispatch({
        type: actionTypes.CHECKING_WORKSPACE
    });
    API.getWorkspaceDetails(payload, (error, response) => {
        // console.log('response ==> ',response.details._id)
        // dispatch({
        //     type: actionTypes.WORKSPACE_LOADED
        // });
        dispatch({
            type: actionTypes.GET_WORKSPACE_DETAILS,
            payload: response.details
        });
       if(callback) callback(response.details._id);
        // console.log('i am here');
    });
};

export const getByWorkspaceId = (payload) => (dispatch) => {
    // dispatch({
    //     type: actionTypes.ALL_USERS_LOADING
    // });
    API.getByWorkspaceId(payload, (error, response) => {
        // console.log('get workspace details response', response);
        dispatch({
            type: actionTypes.GET_WORKSPACE_DETAILS,
            payload: response.details
        });
    });
};

export const createChannel = (payload) => () => {
    //  console.log('action called', payload)
    // dispatch({
    //     type: actionTypes.ALL_USERS_LOADING
    // });
    API.createChannel(payload, () => {
        //  console.log('get workspace details response', response);
        // dispatch({
        //     type: actionTypes.GET_WORKSPACE_DETAILS,
        //     // payload: response.details
        // });
    });
};

export function fetchWorkspacePermissions () {
    return function (dispatch) {
        const workspace_id = localStorage.getItem("workspace_id");
        API.getWorkspacePermissions(workspace_id, (error, response)=>{
            if(!error && response) {
                // console.log(response.details)
                let payload = response.details
                dispatch({
                    type: actionTypes.GET_WORKSPACE_PERMISSIONS,
                    payload
                  })
            }
        })
      };
}

export function updatePermissions(payload) {
    // console.log('Post Request going ===>> ',payload)
    return function (dispatch) {
        API.postWorkspacePermissions(payload, (error, response)=>{
            if(!error && response){
                // console.log(response);
                const payload=response
                dispatch({
                    type: actionTypes.POST_PERMISSIONS,
                    payload
                })
            }
        })
    }
} 

export function fetchUserlist() {
    return function (dispatch) {
        const workspace_id = localStorage.getItem("workspace_id");
        API.getUserlist(workspace_id, (error, response)=>{
            if(!error && response) {
                let payload = response.details
                dispatch({
                    type: actionTypes.GET_USERLIST,
                    payload
                })
            }
        })

    };
}

export function fetchChannelList() {
    return function (dispatch) {
        const workspace_id = localStorage.getItem("workspace_id");
        API.getChannelList(workspace_id, (error, response)=>{
            if(!error && response) {
                let payload = response.details
                dispatch({
                    type: actionTypes.GET_CHANNELLIST,
                    payload
                })
            }
        })
    }
}
export function sendInvitation(payload) {
    // console.log('sendInvitation===>> ',payload)
    return function () {
        API.sendInvitationRequest(payload, (error, response)=>{
            if(!error && response){
                // console.log(response);
                // const payload=response
                // dispatch({
                //     type: actionTypes.POST_PERMISSIONS,
                //     payload
                // })
            }
        })
    }
} 