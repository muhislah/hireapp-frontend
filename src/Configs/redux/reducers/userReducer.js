const initialState = {
    user: {
        name: '',
        email: '',
        role: '',
        password : ''
    },
    isLoading: false
}

export const userReducer = (state = initialState, action) => {

  switch (action.type) {
    case "USER_LOGIN_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "USER_REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
      };
    case "USER_REGISTER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        isLoading: false,
      };
    case "SIGN_OUT":
      localStorage.removeItem("token");
      return {
        token: null,
        name: null,
        email: null,
        id: null,
      };
    default:
      return state;
  }
};