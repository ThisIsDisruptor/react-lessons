import React from "react";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  requiredField,
} from "../../../utils/valodators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

let maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <div>
          <Field
            component={Textarea}
            placeholder="Post Message"
            name="newPostText"
            validate={[requiredField, maxLength10]}
          />
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

const MyPosts = React.memo((props) => {
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   return nextProps !== this.props || nextState !== this.state;
  // }

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
});
export default MyPosts;
