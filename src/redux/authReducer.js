import { authAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "socialNetwork/auth/SET_AUTH_USER_DATA";
const TOGGLE_IS_FETCHING = "socialNetwork/auth/STOGGLE_IS_FETCHING";

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

export const getAuthUserDataThunkCreator = () => async (dispatch) => {
  let data = await authAPI.getAuthUserData();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData(data.data, true));
  }
};

export const loginThunkCreator = (email, password, rememberMe) => async (
  dispatch
) => {
  let data = await authAPI.login(email, password, rememberMe);
  if (data.resultCode === 0) {
    dispatch(getAuthUserDataThunkCreator());
  } else {
    let message = data.messages.length > 0 ? data.messages[0] : "Some error";
    let action = stopSubmit("login", { _error: message });
    dispatch(action);
  }
};

export const logoutThunkCreator = () => async (dispatch) => {
  let data = await authAPI.logout();
  if (data.resultCode === 0) {
    dispatch(setAuthUserData({ id: null, email: null, login: null }, false));
  }
};

export default authReducer;
