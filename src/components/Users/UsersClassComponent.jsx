import React from "react";
import classes from "./Users.module.css";
import * as axios from "axios";
import defaultAva from "../../assets/images/default_ava.jpg";

class UsersClassComponent extends React.Component {
  componentDidMount() {
    let users = this.props.usersPage.users;

    if (users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    }
  }

  render() {
    let users = this.props.usersPage.users;
    return (
      <div>
        Users will be here
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
