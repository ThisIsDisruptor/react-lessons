import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let posts = [
  { id: 1, message: "hello!", likesCount: 10 },
  { id: 2, message: "It's my first post!", likesCount: 15 },
];

let initialState = {
  posts,
  profile: null,
  status: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    default:
      return state;
  }
};

export const addPost = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText: newPostText,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  };
};

export const setUserStatus = (status) => {
  return {
    type: SET_USER_STATUS,
    status: status,
  };
};

export const getProfileInfoThunkCreator = (userId) => (dispatch) => {
  profileAPI.getProfileInfo(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export const getStatusThunkCreator = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((data) => {
    dispatch(setUserStatus(data));
  });
};

export const updateStatusThunkCreator = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserStatus(status));
    } else {
      alert("Не удалось");
    }
  });
};

export default profileReducer;
