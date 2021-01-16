import React from "react";
import { connect } from "react-redux";
import { addMessage, updateNewMessageText } from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

let functionsToProps = {
  addMessage,
  updateNewMessageText,
};
const DialogsContainer = connect(mapStateToProps, functionsToProps)(Dialogs);

export default DialogsContainer;
