import React from "react";
import { connect } from "react-redux";
import {
  followUser,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollowUser,
} from "../../redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { usersAPI } from "../api/api";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    let users = this.props.usersPage.users;

    if (users.length === 0) {
      this.props.toggleIsFetching(true);
      usersAPI
        .getUsers(
          this.props.usersPage.currentPage,
          this.props.usersPage.pageSize
        )
        .then((data) => {
          this.props.setUsers(data.items);
          this.props.setTotalUsersCount(data.totalCount);
          this.props.toggleIsFetching(false);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    usersAPI
      .getUsers(pageNumber, this.props.usersPage.pageSize)
      .then((data) => {
        this.props.setUsers(data.items);
        this.props.toggleIsFetching(false);
      });
  };

  followUser = (userId) => {
    usersAPI.followUser(userId).then((data) => {
      if (data.resultCode === 0) {
        this.props.followUser(userId);
      } else {
        alert("Не удалось");
      }
    });
  };

  unfollowUser = (userId) => {
    usersAPI.unfollowUser(userId).then((data) => {
      if (data.resultCode === 0) {
        this.props.unfollowUser(userId);
      } else {
        alert("Не удалось");
      }
    });
  };

  render() {
    return (
      <>
        <Preloader isFetching={this.props.usersPage.isFetching} />
        <Users
          usersPage={this.props.usersPage}
          onPageChanged={this.onPageChanged}
          followUser={this.followUser}
          unfollowUser={this.unfollowUser}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersPage: state.usersPage,
  };
};

let functionsToProps = {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
};

const UsersContainer = connect(
  mapStateToProps,
  functionsToProps
)(UsersAPIComponent);

export default UsersContainer;
