import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import defaultAva from "../../assets/images/default_ava.jpg";

let Users = (props) => {
  let users = props.usersPage.users;

  let pagesCount = Math.ceil(
    props.usersPage.totalUsersCount / props.usersPage.pageSize
  );

  let currentPage = props.usersPage.currentPage;

  let pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      Users are here
      <div>
        {pages.map((page) => (
          <span
            className={page === currentPage ? classes.selectedPage : ""}
            onClick={(e) => {
              props.onPageChanged(page);
            }}
          >
            {page + " "}
          </span>
        ))}
      </div>
      {users.map((user) => (
        <div key={user.id} className={classes.user}>
          <span>
            <div>
              <img
                src={user.photos.small != null ? user.photos.small : defaultAva}
                alt=""
              />
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    props.unfollowUser(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.followUser(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>"user.location.country"</div>
              <div>"user.location.city"</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
