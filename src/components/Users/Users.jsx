import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
  let {
    users,
    totalUsersCount,
    pageSize,
    currentPage,
    followingInProgress,
  } = props.usersPage;

  let { onPageChanged, followUser, unfollowUser } = props;

  return (
    <div>
      Users are here
      <Paginator
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        delta={7}
      />
      {users.map((user) => (
        <User
          user={user}
          followingInProgress={followingInProgress}
          unfollowUser={unfollowUser}
          followUser={followUser}
        />
      ))}
    </div>
  );
};

export default Users;
