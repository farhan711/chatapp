// import { getLocalWorkspaceDetails } from '../../config/utils';

// const getWorkspaceInitialState = () => {
//     const workspaceDetails = getLocalWorkspaceDetails();
    const states = {
        workspace_details: {
            // name: workspaceDetails && workspaceDetails.name ? workspaceDetails.name : null,
            // admin: workspaceDetails && workspaceDetails.admin ? workspaceDetails.admin : [],
            // member: workspaceDetails && workspaceDetails.member ? workspaceDetails.member : [],
            // _id: workspaceDetails && workspaceDetails._id ? workspaceDetails._id : null,
            // created_by: workspaceDetails && workspaceDetails.created_by ? workspaceDetails.created_by : null,//
            loaders:{
                checking_workspace:false,
                creating_wokspace_loading:false
            },
        },
    }
    export default states;
// }

// export default getWorkspaceInitialState;