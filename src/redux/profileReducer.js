import { profileAPI } from "../api/api";

const ADD_POST = "socialNetwork/profile/ADD-POST";
const SET_USER_PROFILE = "socialNetwork/profile/SET_USER_PROFILE";
const SET_USER_STATUS = "socialNetwork/profile/SET_USER_STATUS";
const DELETE_POST = "socialNetwork/profile/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "socialNetwork/profile/SAVE_PHOTO_SUCCESS";

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
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.postId),
      };
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
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

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId: postId,
  };
};

export const savePhotoSuccess = (photos) => {
  return {
    type: SAVE_PHOTO_SUCCESS,
    photos: photos,
  };
};

export const getProfileInfoThunkCreator = (userId) => async (dispatch) => {
  let data = await profileAPI.getProfileInfo(userId);
  dispatch(setUserProfile(data));
};

export const getStatusThunkCreator = (userId) => async (dispatch) => {
  let data = await profileAPI.getStatus(userId);
  dispatch(setUserStatus(data));
};

export const updateStatusThunkCreator = (status) => async (dispatch) => {
  let data = await profileAPI.updateStatus(status);
  if (data.resultCode === 0) {
    dispatch(setUserStatus(status));
  } else {
    alert("Не удалось");
  }
};

export const savePhotoThunkCreator = (file) => async (dispatch) => {
  let data = await profileAPI.savePhoto(file);
  if (data.resultCode === 0) {
    dispatch(savePhotoSuccess(data.data.photos));
  } else {
    alert("Не удалось");
  }
};

export default profileReducer;
