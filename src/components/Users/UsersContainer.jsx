import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  setCurrentPageActionCreator,
  setTotalUsersCountActionCreator,
  setUsersActionCreator,
  unfollowtActionCreator,
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    let users = this.props.usersPage.users;

    if (users.length === 0) {
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`
        )
        .then((response) => {
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        usersPage={this.props.usersPage}
        onPageChanged={this.onPageChanged}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
      />
    );
  }
}

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
)(UsersAPIComponent);

export default UsersContainer;
