import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultAva from "../../../assets/images/default_ava.jpg";

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

    let { status, updateStatus, isOwner, savePhoto } = props;

    const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
    };

    return (
      <div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div className={classes.descriptionBlock}>
          <div>
            <img src={large || defaultAva} alt="" />
            {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
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
