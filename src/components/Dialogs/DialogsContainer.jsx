import React from "react";
import { connect } from "react-redux";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../redux/dialogsReducer";

import Dialogs from "./Dialogs";

// const DialogsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState();

//         let addMessage = () => {
//           let action = addMessageActionCreator();
//           store.dispatch(action);
//         };

//         let updateNewMessageText = (text) => {
//           let action = updateNewMessageTextActionCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <Dialogs
//             dialogsPage={state.dialogsPage}
//             addMessage={addMessage}
//             updateNewMessageText={updateNewMessageText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      let action = addMessageActionCreator();
      dispatch(action);
    },
    updateNewMessageText: (text) => {
      let action = updateNewMessageTextActionCreator(text);
      dispatch(action);
    },
  };
};
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
