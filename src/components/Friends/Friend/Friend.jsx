import React from "react";
import classes from "./Friend.module.css";

const Friend = (props) => {
  return (
    <div className={classes.friend}>
      <img
        src="https://ic.pics.livejournal.com/art_from_heart/39116426/3505/3505_original.jpg"
        alt=""
      />
      <div>{props.name}</div>
    </div>
  );
};

export default Friend;
