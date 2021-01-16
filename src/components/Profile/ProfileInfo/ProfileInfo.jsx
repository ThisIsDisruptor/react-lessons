import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } else {
    let {
      aboutMe,
      contacts: {
        facebook,
        website,
        vk,
        twitter,
        instagram,
        youtube,
        github,
        mainLink,
      },
      lookingForAJob,
      lookingForAJobDescription,
      fullName,
      userId,
      photos: { small, large },
    } = props.profile;

    return (
      <div>
        <div>
          <img src="https://im0-tub-ru.yandex.net/i?id=9a27816f66e2db9285bc9c76fa3a8d86&n=13"></img>
        </div>
        <div className={classes.descriptionBlock}>
          <div>
            <img src={props.profile.photos.large} alt="" />
          </div>
          <div>Info</div>
          <div>Имя: {fullName}</div>
          <div>Обо мне: {aboutMe}</div>
          <div>
            Контакты
            <br />
            <br />
            <div>facebook: {facebook}</div>
            <div>website: {website}</div>
            <div>vk: {vk} </div>
            <div>twitter: {twitter}</div>
            <div>instagram: {instagram} </div>
            <div>youTube: {youtube} </div>
            <div>github: {github} </div>
            <div>mainLink: {mainLink} </div>
            <br />
          </div>
          <div>Ищу работу: {lookingForAJob ? "Да" : "Нет"}</div>
          <div>Описание поиска работы: {lookingForAJobDescription}</div>
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
