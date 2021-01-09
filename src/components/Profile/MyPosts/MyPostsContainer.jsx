import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         //   let state = props.store.getState();
//         let state = store.getState();

//         let addPost = () => {
//           let action = addPostActionCreator();
//           store.dispatch(action);
//         };

//         let updateNewPostText = (text) => {
//           let action = updateNewPostTextActionCreator(text);
//           store.dispatch(action);
//         };

//         return (
//           <MyPosts
//             profilePage={state.profilePage}
//             updateNewPostText={updateNewPostText}
//             addPost={addPost}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      let action = addPostActionCreator();
      dispatch(action);
    },
    updateNewPostText: (text) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
