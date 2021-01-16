import React from "react";
import { connect } from "react-redux";
import { addPost, updateNewPostText } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage,
  };
};

let functionsToProps = {
  addPost,
  updateNewPostText,
};

const MyPostsContainer = connect(mapStateToProps, functionsToProps)(MyPosts);

export default MyPostsContainer;
