import React from "react";
import classes from "./Users.module.css";

let Users = (props) => {
  let users = props.usersPage.users;

  if (users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: true,
        fullName: "Dimas",
        photoURL:
          "https://ic.pics.livejournal.com/art_from_heart/39116426/3505/3505_original.jpg",
        status: "Drachicho",
        location: { city: "Prague", country: "Chech Repulic" },
      },
      {
        id: 2,
        followed: true,
        fullName: "Dryus",
        photoURL:
          "https://ic.pics.livejournal.com/art_from_heart/39116426/3505/3505_original.jpg",
        status: "helloWorld!",
        location: { city: "Ruazan", country: "Russia" },
      },
      {
        id: 3,
        followed: false,
        fullName: "Zaxar",
        photoURL:
          "https://ic.pics.livejournal.com/art_from_heart/39116426/3505/3505_original.jpg",
        status: "ZaxarPixar",
        location: { city: "Batumi", country: "Georgia" },
      },
      {
        id: 4,
        followed: false,
        fullName: "Pus",
        photoURL:
          "https://ic.pics.livejournal.com/art_from_heart/39116426/3505/3505_original.jpg",
        status: "KEKW",
        location: { city: "Twich", country: "Internet" },
      },
    ]);
  }

  let userElements = users.map((user) => (
    <div key={user.id} className={classes.user}>
      <span>
        <div>
          <img src={user.photoURL} alt="image" />
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
          <div>{user.fullName}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{user.location.country}</div>
          <div>{user.location.city}</div>
        </span>
      </span>
    </div>
  ));

  return (
    <div>
      Users will be here
      {userElements}
    </div>
  );
};

export default Users;
