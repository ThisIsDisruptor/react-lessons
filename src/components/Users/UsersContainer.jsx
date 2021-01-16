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

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    let users = this.props.usersPage.users;

    if (users.length === 0) {
      this.props.toggleIsFetching(true);
      axios
        .get(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`,
          {
            withCredentials: true,
          }
        )
        .then((response) => {
          debugger;
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount);
          this.props.toggleIsFetching(false);
        });
    }
  }

  onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersPage.pageSize}`,
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.toggleIsFetching(false);
      });
  };

  render() {
    return (
      <>
        <Preloader isFetching={this.props.usersPage.isFetching} />
        <Users
          usersPage={this.props.usersPage}
          onPageChanged={this.onPageChanged}
          followUser={this.props.followUser}
          unfollowUser={this.props.unfollowUser}
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
