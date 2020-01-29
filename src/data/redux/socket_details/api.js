import { fetchDataAndProceed } from '../../config/utils';
import { METHOD_TYPES } from '../../config/constants';

export const getChatHistory = (data, callback) => {
        const details = {
                sender_id:data.sender_id,
                receiver_id:data.receiver_id ,
                workspace_id:data.workspace_id,
        }
        const skip = data.skip
        return fetchDataAndProceed(`/chat/history?skip=${skip}`, METHOD_TYPES.POST, details, callback)
    }