import { fetchDataAndProceed } from '../../config/utils';
import { METHOD_TYPES } from '../../config/constants';

//       <<--- Create user api added -->> 

export const createUser = (data, callback) => {
    return fetchDataAndProceed('/register', METHOD_TYPES.POST, data, callback);
};
export const sendingOtpOnMail = (data, callback) => {
    return fetchDataAndProceed('/otp/sendotp', METHOD_TYPES.POST, data, callback);
};
export const verifyingOtp = (data, callback) => {
    return fetchDataAndProceed('/otp/verifyotp', METHOD_TYPES.POST, data, callback);
};

export const loginUser = (data, callback) => {
    return fetchDataAndProceed('/login', METHOD_TYPES.POST, data, callback);
};

export const getUserDetails = (data, callback) => {
    return fetchDataAndProceed('/register', METHOD_TYPES.POST, data, callback);
};

export const forgetpassword = (data, callback) => {
    return fetchDataAndProceed('/forgotpassword', METHOD_TYPES.POST, data, callback);
};

export const verifytoken= (data, callback) => {
    // console.log('data in api =>',data.token)
    return fetchDataAndProceed(`/resetpassword/`, METHOD_TYPES.GET, data, callback);
};

export const resetpassword = (data, callback) => {
    return fetchDataAndProceed(`/resetpassword/`, METHOD_TYPES.POST, data, callback);
};
export const verifySignupApi = (data, callback) => {
    return fetchDataAndProceed(`/workspace/verifyToken/${data}`, METHOD_TYPES.GET, null, callback);
};