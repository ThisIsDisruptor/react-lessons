import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
	let posts = props.posts;

	let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

	let newPostElement = React.createRef();

	let onAddPost = () => {
		let action = addPostActionCreator();
		props.dispatch(action);
	};

	let onPostChange = () => {
		let action = updateNewPostTextActionCreator(newPostElement.current.value);
		props.dispatch(action);
	};
	return (
		<div className={classes.postsBlock}>
			My posts
			<div>
				<div>
					<textarea ref={newPostElement} value={props.newPostText} onChange={onPostChange} />
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
			<div className={classes.posts}>{postsElements}</div>
		</div>
	);
};

export default MyPosts;
