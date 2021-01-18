import { usersAPI } from "../components/api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGERSS = "TOGGLE_FOLLOWING_IN_PROGERSS";

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
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            user.followed = true;
          }
          return { ...user };
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            user.followed = false;
          }
          return { ...user };
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

export const getUsersThunkCreator = (currentPage, pageSize) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(currentPage, pageSize).then((data) => {
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(toggleIsFetching(false));
  });
};

export const followUserThunkCreator = (userId) => (dispatch) => {
  dispatch(toggleFollowingInProgress(userId, true));
  usersAPI.followUser(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(followUser(userId));
    } else {
      alert("Не удалось");
    }
    dispatch(toggleFollowingInProgress(userId, false));
  });
};

export const unfollowUserThunkCreator = (userId) => (dispatch) => {
  dispatch(toggleFollowingInProgress(userId, true));
  usersAPI.unfollowUser(userId).then((data) => {
    if (data.resultCode === 0) {
      dispatch(unfollowUser(userId));
    } else {
      alert("Не удалось");
    }
    dispatch(toggleFollowingInProgress(userId, false));
  });
};

export default usersReducer;
