import React from "react";
import { Contact } from "./Contact";

export const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  let {
    aboutMe,
    contacts,
    lookingForAJob,
    lookingForAJobDescription,
    fullName,
    userId,
    photos: { small, large },
  } = profile;

  return (
    <div>
      <div>Info</div>
      {isOwner && (
        <div>
          <button onClick={goToEditMode}>Edit</button>
        </div>
      )}
      <div>Имя: {fullName}</div>
      <div>Обо мне: {aboutMe}</div>
      <div>
        Контакты
        <br />
        {Object.keys(contacts).map((key) => {
          return <Contact contactTitle={key} contactValue={contacts[key]} />;
        })}
        <br />
      </div>
      <div>Ищу работу: {lookingForAJob ? "Да" : "Нет"}</div>
      <div>Описание поиска работы: {lookingForAJobDescription}</div>
    </div>
  );
};
