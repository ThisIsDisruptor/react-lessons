import React from "react";
import { Field, reduxForm } from "redux-form";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field component="textarea" name="newPostText" />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
    </form>
  );
};

const AddPostReduxForm = reduxForm({
  form: "addPost",
})(AddPostForm);

const MyPosts = (props) => {
  let { posts } = props.profilePage;

  let postsElements = posts.map((post) => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));

  const onAddPost = (formData) => {
    console.log(formData);
    props.addPost(formData.newPostText);
  };

  return (
    <div className={classes.postsBlock}>
      My posts
      <div>
        <AddPostReduxForm onSubmit={onAddPost} />
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
