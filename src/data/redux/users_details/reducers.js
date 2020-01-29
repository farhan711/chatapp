import * as actionTypes from './actiontypes';
import states from './states';

export default function user_details(state = states.user_details, action) {
    switch (action.type) {
        case actionTypes.SHOW_USER_DETAILS:
            return {
                ...state,
                userdetails:action.payload.userDetails
            };

        case actionTypes.FETCH_USER_DETAILS:
            {const userDetails = action.payload.userDetails
            // console.log(userDetails.workspace)
            return {
                ...state,
                user_details: userDetails,
            };
        }
        default:
            return state;
    }
}
