import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/objectsHelpers";

const FOLLOW = "socialNetwork/users/FOLLOW";
const UNFOLLOW = "socialNetwork/users/UNFOLLOW";
const SET_USERS = "socialNetwork/users/SET_USERS";
const SET_CURRENT_PAGE = "socialNetwork/users/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "socialNetwork/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "socialNetwork/users/TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGERSS =
  "socialNetwork/users/TOGGLE_FOLLOWING_IN_PROGERSS";

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
      };

    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }

    case SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalUsersCount,
      };
    }

    case TOGGLE_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case TOGGLE_FOLLOWING_IN_PROGERSS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : [...state.followingInProgress.filter((id) => id !== action.userId)],
      };
    }

    default:
      return state;
  }
};

export const followUser = (userId) => {
  return {
    type: FOLLOW,
    userId: userId,
  };
};

export const unfollowUser = (userId) => {
  return {
    type: UNFOLLOW,
    userId: userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage,
  };
};

export const setTotalUsersCount = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount,
  };
};

export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching,
  };
};

export const toggleFollowingInProgress = (userId, isFetching) => {
  return {
    type: TOGGLE_FOLLOWING_IN_PROGERSS,
    userId: userId,
    isFetching: isFetching,
  };
};

export const getUsersThunkCreator = (currentPage, pageSize) => async (
  dispatch
) => {
  dispatch(toggleIsFetching(true));

  let data = await usersAPI.getUsers(currentPage, pageSize);
  dispatch(setUsers(data.items));
  dispatch(setTotalUsersCount(data.totalCount));
  dispatch(toggleIsFetching(false));
};

const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingInProgress(userId, true));
  let data = await apiMethod(userId);
  if (data.resultCode === 0) {
    dispatch(actionCreator(userId));
  } else {
    alert("Не удалось");
  }
  dispatch(toggleFollowingInProgress(userId, false));
};

export const followUserThunkCreator = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.followUser.bind(usersAPI);
  let actionCreator = followUser;

  followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
};

export const unfollowUserThunkCreator = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.unfollowUser.bind(usersAPI);
  let actionCreator = unfollowUser;

  followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
};

export default usersReducer;
