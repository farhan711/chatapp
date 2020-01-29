import { fetchDataAndProceed } from '../../config/utils';
import { METHOD_TYPES } from '../../config/constants';

//       <<--- Workspace api added -->> 

export const getWorkspaceDetails = (data, callback) => {
    return fetchDataAndProceed('/workspace/enterbyname', METHOD_TYPES.POST, data, callback);
};

export const getByWorkspaceId = (data, callback) => {
    return fetchDataAndProceed('/workspace', METHOD_TYPES.GET, data, callback);
};

export const createWorkspace = (data, callback) => {
    return fetchDataAndProceed('/workspace', METHOD_TYPES.POST, data, callback);
};

export const createChannel = (data, callback) => {
    return fetchDataAndProceed('/channel', METHOD_TYPES.POST, data, callback);
};

export const getWorkspacePermissions = (data, callback) => {
    return fetchDataAndProceed(`/workspace/permission?id=${data}`, METHOD_TYPES.GET, null, callback)
}

export const postWorkspacePermissions = (data, callback) => {
    return fetchDataAndProceed('workspace/permission', METHOD_TYPES.POST, data, callback)
}

export const getUserlist = (data, callback) => {
    return fetchDataAndProceed(`/workspace/user-list?id=${data}`, METHOD_TYPES.GET, null, callback)
}

export const getChannelList = (data, callback) => {
    return fetchDataAndProceed(`/channel?id=${data}`, METHOD_TYPES.GET, null, callback)
}
export const sendInvitationRequest = (data, callback) => {
    return fetchDataAndProceed('workspace/addMember', METHOD_TYPES.POST, data, callback)
}
