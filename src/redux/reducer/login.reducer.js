const init = {
  isLogin: false
};

export const loginReducer = (state = init, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isLogin: action.payload };
    default:
      return state;
  }
};
