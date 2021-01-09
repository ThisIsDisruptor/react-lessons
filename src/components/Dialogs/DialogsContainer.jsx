import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";
import StoreContext from "../../redux/StoreContext";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState();

        let addMessage = () => {
          let action = addMessageActionCreator();
          store.dispatch(action);
        };

        let updateNewMessageText = (text) => {
          let action = updateNewMessageTextActionCreator(text);
          store.dispatch(action);
        };

        return (
          <Dialogs
            dialogsPage={state.dialogsPage}
            addMessage={addMessage}
            updateNewMessageText={updateNewMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default DialogsContainer;
