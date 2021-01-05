import React from "react";
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css";

const Friends = (props) => {
  let friends = props.friends;

  let friendsElements = friends.map((friend) => <Friend name={friend.name} />);

  return (
    <div>
      Friends
      <div className={`${classes.item} ${classes.friends}`}>
        {friendsElements}
      </div>
    </div>
  );
};

export default Friends;
