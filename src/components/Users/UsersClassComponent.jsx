import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import defaultAva from "../../assets/images/default_ava.jpg";

class UsersClassComponent extends React.Component {
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
    let users = this.props.usersPage.users;

    let pagesCount = Math.ceil(
      this.props.usersPage.totalUsersCount / this.props.usersPage.pageSize
    );

    let currentPage = this.props.usersPage.currentPage;

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
                this.onPageChanged(page);
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
                  src={
                    user.photos.small != null ? user.photos.small : defaultAva
                  }
                  alt=""
                />
              </div>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollowUser(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.followUser(user.id);
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
  }
}

export default UsersClassComponent;
