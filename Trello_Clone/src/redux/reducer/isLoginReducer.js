const initialState = {
  isLogin: false,
};

export const isLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login": {
      return { isLogin: true };
    }
    case "logout": {
      return { isLogin: false };
    }
    default: {
      return state;
    }
  }
};
