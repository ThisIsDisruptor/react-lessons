import React from "react";
import { connect } from "react-redux";
import {
  getUsersThunkCreator,
  followUserThunkCreator,
  unfollowUserThunkCreator,
  setCurrentPage,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/userSelector";
import { getProfileInfoThunkCreator } from "../../redux/profileReducer";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(
      this.props.usersPage.currentPage,
      this.props.usersPage.pageSize
    );
  }

  onPageChanged(pageNumber) {
    this.props.setCurrentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.usersPage.pageSize);
  }

  followUser(userId) {
    this.props.followUser(userId);
  }

  unfollowUser(userId) {
    this.props.unfollowUser(userId);
  }

  render() {
    return (
      <>
        <Preloader isFetching={this.props.usersPage.isFetching} />
        <Users
          usersPage={this.props.usersPage}
          onPageChanged={this.onPageChanged.bind(this)}
          followUser={this.followUser.bind(this)}
          unfollowUser={this.unfollowUser.bind(this)}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    usersPage: {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state),
    },
  };
};

let functionsToProps = {
  followUser: followUserThunkCreator,
  unfollowUser: unfollowUserThunkCreator,
  getUsers: getUsersThunkCreator,
  setCurrentPage,
};

const UsersContainer = compose(
  //withAuthRedirect,
  connect(mapStateToProps, functionsToProps)
)(UsersAPIComponent);

export default UsersContainer;
