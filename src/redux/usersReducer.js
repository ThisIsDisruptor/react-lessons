const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

// let users = [
//   {
//     id: 1,
//     followed: true,
//     fullName: "Dimas",
//     photoURL:
//       "https://ic.pics.livejournal.com/art_from_heart/39116426/3505/3505_original.jpg",
//     status: "Drachicho",
//     location: { city: "Prague", country: "Chech Repulic" },
//   },
//   {
//     id: 2,
//     followed: true,
//     fullName: "Dryus",
//     photoURL:
//       "https://ic.pics.livejournal.com/art_from_heart/39116426/3505/3505_original.jpg",
//     status: "helloWorld!",
//     location: { city: "Ruazan", country: "Russia" },
//   },
//   {
//     id: 3,
//     followed: false,
//     fullName: "Zaxar",
//     photoURL:
//       "https://ic.pics.livejournal.com/art_from_heart/39116426/3505/3505_original.jpg",
//     status: "ZaxarPixar",
//     location: { city: "Batumi", country: "Georgia" },
//   },
//   {
//     id: 4,
//     followed: false,
//     fullName: "Pus",
//     photoURL:
//       "https://ic.pics.livejournal.com/art_from_heart/39116426/3505/3505_original.jpg",
//     status: "KEKW",
//     location: { city: "Twich", country: "Internet" },
//   },
// ];

// let initialState = {
//   users,
// };

let initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
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

export default usersReducer;
