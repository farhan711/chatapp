export const MODULE_DATA = {
  HISTORY: {
    LOAD_MORE_HISTORY_COUNT: 20
  }
};

export const ROUTE_PATH = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  LOGIN: "/login",
  SIGNUP: "/signup",
  CONVERSATION: "/conversation",
  USER: "/user",
  CHAT_HISTORY: "/history",
  ANALYTICS: "/analytics",
  CHATLOG_ANALYTICS: "/analytics/chatlog",
  USAGE_ANALYTICS: "/analytics/usages",
  SESSION_FLOW: "/analytics/sessionflow",
  CREATE_WORKSPACE: "/create_workspace",
  START_WORKSPACE: "/start_workspace",
  FIND_WORKSPACE: "/find_workspace",
  PROFILE_PAGE: "/profile_page",
  WORKSPACE: "/workspace",
  CHAT: "/chat",
  OTP_PAGE: "/otp",
  FORGET_PASSWORD: "/forgotpassword",
  CREATE_CHANNEL: "/create_channel",
  RESET_PASSWORD: "/resetpassword"
};

export const APP_PAGES = {
  LOGIN: "login",
  DASHBOARD: "dashboard",
  USER: "user",
  CONVERSATION: "conversation",
  CHAT_HISTORY: "chat history",
  ANALYTICS: "analytics",
  CHATLOG_ANALYTICS: "chatlog analytics",
  USAGE_ANALYTICS: "usage analytics",
  SESSION_FLOW: "session flow"
};

export const LOCAL_STORAGE = {
  WEA_ADMIN: "dashboardUser"
};

export const BRAND = {
  DISHTV: "dishtv"
};

export const PLATFORM = {
  WEBSITE: "website",
  FACEBOOK: "facebook",
  ANDROID: "android",
  IOS: "ios"
};

export const SOCKET_EVENTS = {
  CONNECT: "connect",
  RESPONSE: "response",
  CONNECT_ERROR: "connect_error",
  ERROR: "error",
  NEW_MESSAGE: "new_message",
  RESET_CHAT: "reset_chat",
  SHOW_TYPING: "show_typing",
  BOT_AUTO_POPUP_REQUEST: "botAutoPopupRequest",
  RECORD_FEEDBACK: "recordFeedback",
  DISCONNECT: "disconnect",
  ADDITION: "addition",
  DELETION: "deletion",
  UPDATION: "updation",
  JOIN_ROOM: "joinRoom",
  SEND_PRIVATE_MSG: "send_private_msg"
};

// export const SOCKET_EVENTS = {
//     //-------------------- common events --------------------

//     CONNECT: "connect",
//     CONNECT_ERROR: "connect_error",
//     ERROR: "error",

//     //-------------------- conversation events --------------------

//     ADDITION: "addition",
//     DELETION: "deletion",
//     UPDATION: "updation",
//     JOIN_ROOM: "joinRoom",
//     RESPONSE: "response",
//     USER_MESSAGE: "userMessage",
//     ADMIN_TO_USER_MSG: "adminToUserMsg",

//     //-------------------- dashboard events --------------------
// };

export const MESSAGE_TYPES = {
  TEXT: "text",
  TEXT_WITH_BUTTONS: "text_with_buttons",
  IMAGE_WITH_BUTTONS: "image_with_buttons",
  VIDEO: "video",
  TIMER: "timer",
  CAROUSEL: "carousel",
  CUSTOM_MSG: "customMsg"
};

export const MESSAGE_SUBTYPES = {
  DISH_RECHARGE: "dishRecharge",
  DISH_RECHARGE_DETAILS: "dishRechargeDetails",
  DISH_OFFERS: "dishOffers",
  DISH_RECHARGE_HISTORY: "dishRechargeHistory"
};

export const MESSAGE_SENDER = {
  CUSTOMER: "customer",
  CHATBOT: "chatbot",
  ADMIN: "admin"
};

export const ORIENTATION = {
  LANDSCAPE: "landscape",
  PORTRAIT: "portrait"
};

export const CHATBOT_CONTROL = {
  TAKEOVER: "takeover",
  RELINQUISH: "relinquish"
};

export const PANEL_KEY = {
  LIVE_CHAT: "live chat",
  TAKE_OVER: "take over"
};

export const CURRENCY = {
  RUPEES: "rupees",
  DOLLAR: "dollar"
};

/* value should be same as backend type** ie value in lowercase; */

export const PROFILE_ITEM_TYPE = {
  DATE: "date",
  CURRENCY: "currency",
  DATE_TIME: "datetime",
  URL: "url"
};

export const FILTER_TYPE = {
  CHECKBOX: "checkbox",
  INPUT_NUMBER: "inputNumber",
  INPUT: "input"
};

export const LIVE_CARD_TYPE = {
  TOTAL: "total",
  WEBSITE: "website",
  ANDROID: "android",
  AVG_FEEDBACK: "averageFeedback",
  SESSIONS: "sessions",
  SESSIONS_PER_USER: "sessionsPerUser",
  SESSION_TIME_PER_USER: "sessionTimePerUser",
  MESSAGES_PER_USER: "messagesPerUser",
  DAU: "DAU"
};

/* --------------------------LAYOUT SPECIFIC--------------------------- */

export const APP_LAYOUT = {
  APP_HEADER_HEIGHT: 60, //in px
  APP_SIDER_COLLAPSE_WIDTH: 80 //in px
};

export const METHOD_TYPES = {
  POST: "post",
  GET: "get",
  PATCH: "patch",
  PUT: "put",
  DELETE: "delete",
  COPY: "copy",
  HEAD: "head",
  OPTIONS: "options",
  LINK: "link",
  UNLINK: "unlink",
  PURGE: "purge",
  LOCK: "lock",
  UNLOCK: "unlock",
  PROPFIND: "propfind",
  VIEW: "view"
};
