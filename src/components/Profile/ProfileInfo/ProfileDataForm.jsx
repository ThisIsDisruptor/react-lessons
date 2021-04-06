import React from "react";
import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import { Contact } from "./Contact";

const ProfileDataForm = ({ profile, handleSubmit }) => {
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
    <form onSubmit={handleSubmit}>
      <div>Info Form!</div>
      <div>
        <button
          onClick={() => {
            // Save();
          }}
        >
          Save
        </button>
      </div>
      <div>Имя: {createField("Имя", "fullName", [], Input)}</div>
      <div>Обо мне: {createField("Обо мне", "aboutMe", [], Textarea)}</div>
      <div>
        Контакты
        <br />
        {Object.keys(contacts).map((key) => {
          return <Contact contactTitle={key} contactValue={contacts[key]} />;
        })}
        <br />
      </div>
      <div>
        Ищу работу:{" "}
        {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
      </div>
      <div>
        Описание поиска работы:{" "}
        {createField(
          "Описанеи поиска работы",
          "lookingForAJobDescription",
          [],
          Textarea
        )}
      </div>
    </form>
  );
};

const ProfileDataFormReduxForm = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataFormReduxForm;
