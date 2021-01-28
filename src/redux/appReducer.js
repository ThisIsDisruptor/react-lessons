import { getAuthUserDataThunkCreator } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  debugger;
  switch (action.type) {
    case INITIALIZED_SUCCESS: {
      return {
        ...state,
        initialized: true,
      };
    }
    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializeAppThunkCreator = () => (dispatch) => {
  let promise = dispatch(getAuthUserDataThunkCreator());
  Promise.all([promise]).then(() => {
    debugger;
    dispatch(initializedSuccess());
  });
};

export default appReducer;
