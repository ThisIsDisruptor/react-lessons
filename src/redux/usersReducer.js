const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

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
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            user.followed = true;
          }
          return { ...user };
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userID) {
            user.followed = false;
          }
          return { ...user };
        }),
      };

    case SET_USERS: {
      return {
        ...state,
        users: [...state.users, ...action.users],
      };
    }

    default:
      return state;
  }
};

export const followActionCreator = (userID) => {
  return {
    type: FOLLOW,
    userID: userID,
  };
};

export const unfollowtActionCreator = (userID) => {
  return {
    type: UNFOLLOW,
    userID: userID,
  };
};
export const setUsersActionCreator = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export default usersReducer;
