import { message } from "antd";
import axios from "axios";

import { LOCAL_STORAGE, CURRENCY, METHOD_TYPES } from "./constants";
import { BASE_URL } from "./urls";

// const DEV_VAR = {
//   ENABLE_CONSOLE: true
// };

const s4 = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

export const uniqueId = () => {
  let time = new Date().getTime();
  return `${time}${s4()}${s4()}${s4()}`;
};

export const log = () => {
  // if (DEV_VAR.ENABLE_CONSOLE) {
  //   value ? console.log(str, value) : console.log(str);
  // }
};

export const getLocalWorkspaceDetails = () => {
  let details = localStorage.getItem("workspacedetails");
  let workspaceDetails =
    details && details !== undefined
      ? JSON.parse(localStorage.getItem("workspaceDetails"))
      : null;
  return workspaceDetails;
};

// After login
function getHeaders() {
  let token = localStorage.getItem("weaverseUserAuth");
  // user = user && (user != 'undefined') ? JSON.parse(localStorage.getItem("weaverseUserAuth")) : null;
  // console.log("headers ====>>> ", token);
  let headers = ''
  if (token) {
    headers = {
      "Content-Type": "application/json",
      "x-auth-token": token
    };
    headers.authorization = `bearer ${token}`;
  }
  return headers;
  // console.log('header with token =>>', headers)
}

export function fetchDataAndProceed(url, method, data, callback) {
  let base_url = BASE_URL;
  // if (url.includes('/users') && BASE_URL_USERS) {
  //     base_url = BASE_URL_USERS;
  // }
  axios({
    method: method,
    params: method === METHOD_TYPES.GET ? data : {},
    data: method !== METHOD_TYPES.GET ? data : {},
    url: url,
    baseURL: base_url,
    headers: getHeaders(),
    validateStatus: function(status) {
      return (status >= 200 && status < 300) || status === 412;
    }
  })
    .then(response => {
      callback(false, response.data);
    })
    .catch(error => {
      if (
        error &&
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        showMessage("error", error.response.data.message);
      }
      // if (error && error.response && error.response.status === 401) {
      //     store.dispatch({ type: RESET_REDUX_STATE });
      // }
      else {
        callback(
          true,
          error.response && error.response.data
            ? error.response.data
            : error.response
        );
      }
    });
}

export function showMessage(type, msg, time, onClose) {
  const Message = message[type];
  Message(msg, time, onClose);
}

export const refreshPage = () => {
  document.location.reload();
};

export const getAvatarBgClass = name => {
  const avatarBgClass = {
    "wea-bg-warning": name.length % 9 === 0,
    "wea-bg-info": name.length % 9 === 1,
    "wea-bg-violet": name.length % 9 === 2,
    "wea-bg-green": name.length % 9 === 3,
    "wea-bg-danger": name.length % 9 === 4,
    "wea-bg-yellow": name.length % 9 === 5,
    "wea-bg-magenta": name.length % 9 === 6,
    "wea-bg-primary": name.length % 9 === 7,
    "wea-bg-red": name.length % 9 === 8
  };
  return avatarBgClass;
};

export const getLocalAdminDetails = () => {
  let details = localStorage.getItem(LOCAL_STORAGE.wea_ADMIN);
  let weaAdminDetails =
    details && details !== undefined
      ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.wea_ADMIN))
      : null;
  return weaAdminDetails;
};

export const getAuthSocketData = () => {
  const weaAdminDetails = getLocalAdminDetails();
  const auth_socket_data = {
    transportOptions: {
      polling: {
        extraHeaders: {
          Authweazation:
            weaAdminDetails &&
            weaAdminDetails.token &&
            weaAdminDetails.token.trim().length > 0
              ? weaAdminDetails.token
              : null
        }
      }
    },
    query: {
      role: "admin",
      channelName: "web",
      psid:
        weaAdminDetails &&
        weaAdminDetails.admin_id &&
        weaAdminDetails.admin_id.trim().length > 0
          ? weaAdminDetails.admin_id
          : null
      //   brandName: BRAND_INFO.name
    }
  };
  return auth_socket_data;
};

export const formatPrice = (price, currency) => {
  switch (currency) {
    case CURRENCY.RUPEES:
      return Intl.NumberFormat("en-In", {
        style: "currency",
        currency: "INR"
      }).format(price);
    case CURRENCY.DOLLAR:
      return Intl.NumberFormat("en-In", {
        style: "currency",
        currency: "USD"
      }).format(price);
    default:
      return price;
  }
};

export const formatDate = value => {
  let date = new Date(value);
  return date.toLocaleDateString("en-In", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
};

export const formatMonthTime = value => {
  let date = new Date(value);
  return date.toLocaleTimeString("en-In", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
};

export const formatTime = value => {
  let date = new Date(value);
  return date.toLocaleTimeString("en-In", {
    hour: "2-digit",
    minute: "2-digit"
  });
};

export const formatDateTime = value => {
  let date = new Date(value);
  return date.toLocaleTimeString("en-In", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
};

export const getLang = function() {
  return navigator.languages && navigator.languages.length
    ? navigator.languages[0].split("-")[0]
    : navigator.language.split("-")[0];
};

// export const getLocalMessage = () => {
//     const messages = localStorage.getItem(LOCAL_STORAGE.MESSAGES()) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE.MESSAGES())) : getDefaultMessages();
//     return messages;
// };

export const checkDevice = {
  isMobile: function() {
    if (navigator.userAgent.match(/Android/i)) {
      return {
        mobile: true,
        userAgent: "Android"
      };
    } else if (navigator.userAgent.match(/BlackBerry/i)) {
      return {
        mobile: true,
        userAgent: "BlackBerry"
      };
    } else if (navigator.userAgent.match(/iPhone|iPod/i)) {
      return {
        mobile: true,
        userAgent: "iPhone"
      };
    } else if (navigator.userAgent.match(/iPad/i)) {
      return {
        mobile: false,
        userAgent: "iPad"
      };
    } else if (navigator.userAgent.match(/Opera Mini/i)) {
      return {
        mobile: true,
        userAgent: "Opera"
      };
    } else if (navigator.userAgent.match(/IEMobile/i)) {
      return {
        mobile: true,
        userAgent: "WindowsPhone"
      };
    } else if (navigator.userAgent.match(/Chrome/i)) {
      return {
        mobile: false,
        userAgent: "Web Chrome"
      };
    } else if (navigator.userAgent.match(/Safari/i)) {
      return {
        mobile: false,
        userAgent: "Web Safari"
      };
    } else if (navigator.userAgent.match(/Mozilla/i)) {
      return {
        mobile: false,
        userAgent: "Web Mozilla"
      };
    } else {
      return {
        mobile: false,
        userAgent: "Web"
      };
    }
  },
  screen_data: function() {
    return {
      screen_width: window.innerWidth,
      screen_height: window.innerHeight,
      screen_weaentation: this.screen_weaentation(),
      screen_type: this.screen_type()
    };
  },
  screen_weaentation: function() {
    if (window.matchMedia("(weaentation:landscape)").matches) {
      return "landscape";
    } else {
      return "portrait";
    }
  },
  screen_type: function() {
    if (window.innerWidth <= 480) {
      return "xs";
    } else if (window.innerWidth <= 768) {
      return "sm";
    } else if (window.innerWidth <= 992) {
      return "md";
    } else if (window.innerWidth <= 1200) {
      return "lg";
    } else if (window.innerWidth <= 1600) {
      return "hd";
    } else if (window.innerWidth <= 2560) {
      return "fhd";
    } else {
      return "uhd";
    }
  },
  deviceStatus: function() {
    return {
      ...this.isMobile(),
      ...this.screen_data()
    };
  }
};
