import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./User.module.css";
import defaultAva from "../../assets/images/default_ava.jpg";

const User = (props) => {
  let { user, followingInProgress, unfollowUser, followUser } = props;
  return (
    <div key={user.id} className={classes.user}>
      <span>
        <div>
          <NavLink to={"/profile/" + user.id}>
            <img
              src={user.photos.small != null ? user.photos.small : defaultAva}
              alt=""
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollowUser(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                followUser(user.id);
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
  );
};

export default User;
