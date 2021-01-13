import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
  setUsersActionCreator,
  unfollowtActionCreator,
} from "../../redux/usersReducer";
import Users from "./Users";
import UsersClassComponent from "./UsersClassComponent";

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userID) => {
      let action = followActionCreator(userID);
      dispatch(action);
    },
    unfollowUser: (userID) => {
      let action = unfollowtActionCreator(userID);
      dispatch(action);
    },
    setUsers: (users) => {
      let action = setUsersActionCreator(users);
      dispatch(action);
    },
    setCurrentPage: (currentPage) => {
      let action = setCurrentPageActionCreator(currentPage);
      dispatch(action);
    },
    setTotalUsersCount: (totalUsersCount) => {
      let action = setTotalUsersCountActionCreator(totalUsersCount);
      dispatch(action);
    },
  };
};

const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersClassComponent);

export default UsersContainer;
