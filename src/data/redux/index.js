import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import page_details from './page_details/reducers';
// import appheader_details from './appheader_details/reducers';
import login_details from './login_details/reducers';
import user_details from './users_details/reducers';
import workspace_details from './workspace_details/reducers';
import socket_details from './socket_details/reducers';

const rootReducer = combineReducers({
    page_details,
    // appheader_details,
    login_details,
    user_details,
    workspace_details,
    socket_details,
    routing: routerReducer
});

export default rootReducer;