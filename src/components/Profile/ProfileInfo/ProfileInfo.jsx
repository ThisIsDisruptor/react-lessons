import React, { useEffect, useState } from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultAva from "../../../assets/images/default_ava.jpg";
import ProfileDataForm from "./ProfileDataForm";
import { ProfileData } from "./ProfileData";

const ProfileInfo = (props) => {
  //local state
  let [editMode, setEditMode] = useState(false);
  let [profile, setProfile] = useState(props.profile);

  useEffect(() => {
    setProfile(props.profile);
  }, [props.profile]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateProfile(profile);
  };

  const onStatusChange = (e) => {
    setProfile(e.currentTarget.value);
  };

  if (!props.profile) {
    return <Preloader isFetching={true} />;
  } else {
    let {
      userId,
      photos: { small, large },
    } = props.profile;

    let { status, updateStatus, isOwner, savePhoto, saveProfile } = props;

    const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
        savePhoto(e.target.files[0]);
      }
    };
    const onSubmit = (formData) => {
      saveProfile(formData);
    };

    return (
      <div>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        <div className={classes.descriptionBlock}>
          <div>
            <img src={large || defaultAva} alt="" />
            {isOwner && <input type="file" onChange={onMainPhotoSelected} />}
          </div>
          {editMode ? (
            <ProfileDataForm profile={props.profile} onSubmit={onSubmit} />
          ) : (
            <ProfileData
              profile={props.profile}
              isOwner={isOwner}
              goToEditMode={() => {
                setEditMode(true);
              }}
            />
          )}
        </div>
      </div>
    );
  }
};

export default ProfileInfo;
