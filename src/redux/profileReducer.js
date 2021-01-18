import { profileAPI } from "../components/api/api";

const ADD_POST = "ADD-POST";
const NEW_POST_TEXT_UPDATE = "NEW-POST-TEXT-UPDATE";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let posts = [
  { id: 1, message: "hello!", likesCount: 10 },
  { id: 2, message: "It's my first post!", likesCount: 15 },
];

let initialState = {
  posts,
  newPostText: "ITsamurai",
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }
    case NEW_POST_TEXT_UPDATE: {
      return {
        ...state,
        newPostText: action.newPostText,
      };
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }
    default:
      return state;
  }
};

export const addPost = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostText = (newPostText) => {
  return {
    type: NEW_POST_TEXT_UPDATE,
    newPostText: newPostText,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile: profile,
  };
};

export const getProfileInfoThunkCreator = (userId) => (dispatch) => {
  profileAPI.getProfileInfo(userId).then((data) => {
    dispatch(setUserProfile(data));
  });
};

export default profileReducer;
