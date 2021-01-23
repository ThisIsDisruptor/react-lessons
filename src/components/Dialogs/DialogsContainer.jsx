import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { addMessage } from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  };
};

let functionsToProps = {
  addMessage,
};

let DialogsContainer = compose(
  withAuthRedirect,
  connect(mapStateToProps, functionsToProps)
)(Dialogs);

export default DialogsContainer;
