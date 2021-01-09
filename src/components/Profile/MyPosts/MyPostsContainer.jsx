import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import StoreContext from "../../../redux/StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        //   let state = props.store.getState();
        let state = store.getState();

        let addPost = () => {
          let action = addPostActionCreator();
          store.dispatch(action);
        };

        let updateNewPostText = (text) => {
          let action = updateNewPostTextActionCreator(text);
          store.dispatch(action);
        };

        return (
          <MyPosts
            profilePage={state.profilePage}
            updateNewPostText={updateNewPostText}
            addPost={addPost}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
