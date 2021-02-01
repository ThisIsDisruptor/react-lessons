import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader isFetching={true} />;
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

    let { status, updateStatus } = props;

    return (
      <div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div className={classes.descriptionBlock}>
          <div>
            <img src={large} alt="" />
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
