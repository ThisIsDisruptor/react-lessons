import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import defaultAva from "../../assets/images/default_ava.jpg";
import Navbar from "../Navbar/Navbar";
import { NavLink } from "react-router-dom";

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

  let delta = 3;
  let pagesForShow = pages.filter(
    (page) => page < currentPage + delta && page > currentPage - delta
  );
  return (
    <div>
      Users are here
      <div>
        {currentPage >= delta + 1 && <span>{"... "}</span>}
        {pagesForShow.map((page) => (
          <span
            className={page === currentPage ? classes.selectedPage : ""}
            onClick={(e) => {
              props.onPageChanged(page);
            }}
          >
            {page + " "}
          </span>
        ))}
        {currentPage <= pagesCount - (delta + 1) && <span>...</span>}
      </div>
      {users.map((user) => (
        <div key={user.id} className={classes.user}>
          <span>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : defaultAva
                  }
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  onClick={() => {
                    axios
                      .delete(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,

                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "184c66c7-8543-4e1f-ac49-3368e415c804",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.unfollowUser(user.id);
                        } else {
                          alert("Не удалось:" + response.data.message);
                        }
                      });
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    axios
                      .post(
                        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                        {},
                        {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "184c66c7-8543-4e1f-ac49-3368e415c804",
                          },
                        }
                      )
                      .then((response) => {
                        if (response.data.resultCode === 0) {
                          props.followUser(user.id);
                        } else {
                          alert("Не удалось");
                        }
                      });
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
