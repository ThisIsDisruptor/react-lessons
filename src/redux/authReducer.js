import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA: {
      return {
        ...state,
        ...action.data,
        isAuth: action.isAuth,
      };
    }
    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    default:
      return state;
  }
};

export const setAuthUserData = (data, isAuth) => {
  return {
    type: SET_AUTH_USER_DATA,
    data: data,
    isAuth: isAuth,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  };
};

export const getAuthUserDataThunkCreator = () => (dispatch) => {
  return authAPI.getAuthUserData().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData(data.data, true));
    }
  });
};

export const loginThunkCreator = (email, password, rememberMe) => (
  dispatch
) => {
  authAPI.login(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getAuthUserDataThunkCreator());
    } else {
      let message = data.messages.length > 0 ? data.messages[0] : "Some error";
      let action = stopSubmit("login", { _error: message });
      dispatch(action);
    }
  });
};

export const logoutThunkCreator = () => (dispatch) => {
  authAPI.logout().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setAuthUserData({ id: null, email: null, login: null }, false));
    }
  });
};

export default authReducer;
