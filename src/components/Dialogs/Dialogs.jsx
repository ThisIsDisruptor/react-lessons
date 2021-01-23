import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import DialogItem from "./DialogItem/DialogItem";
import classes from "./Dialogs.module.css";
import Message from "./Message/Message";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field component="textarea" name="newMessageText" />
        </div>
        <div>
          <button>Send Message</button>
        </div>
      </div>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({
  form: "addPost",
})(AddMessageForm);

const Dialogs = (props) => {
  let { dialogs, messages } = props.dialogsPage;

  let dialogsElements = dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} />
  ));

  let messagesElements = messages.map((message) => (
    <Message message={message.message} />
  ));

  const onAddMessage = (formData) => {
    console.log(formData);
    props.addMessage(formData.newMessageText);
  };

  if (!props.isAuth) return <Redirect to="/login" />;

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messsages}>
        {messagesElements}
        <AddMessageReduxForm onSubmit={onAddMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
