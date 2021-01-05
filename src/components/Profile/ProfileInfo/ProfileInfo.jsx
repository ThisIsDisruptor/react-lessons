import React from "react";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://im0-tub-ru.yandex.net/i?id=9a27816f66e2db9285bc9c76fa3a8d86&n=13"></img>
      </div>
      <div className={classes.descriptionBlock}>Ava + description</div>
    </div>
  );
};

export default ProfileInfo;
