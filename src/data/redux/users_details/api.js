import { fetchDataAndProceed } from '../../config/utils';
import { METHOD_TYPES } from '../../config/constants';


//       <<--- Create user api added -->> 

// export const createUser = (data, callback) => {
//     return fetchDataAndProceed('/register', METHOD_TYPES.POST, data, callback);
// };

// export const loginUser = (data, callback) => {
//     return fetchDataAndProceed('/login', METHOD_TYPES.POST, data, callback);
// };

// export const createWorkspace = (data, callback) => {
//     return fetchDataAndProceed('/workspace', METHOD_TYPES.POST, data, callback);
// };

export const getUserProfile = (data, callback) => {
    return fetchDataAndProceed('/users/profile', METHOD_TYPES.GET, data, callback);
};

export const updateProfile = (data, callback) => {
    return fetchDataAndProceed('/users/profile', METHOD_TYPES.POST, data, callback);
};
