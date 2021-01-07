import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = props => {
	let { posts, newPostText } = props.profilePage;

	let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />);

	let newPostElement = React.createRef();

	let onAddPost = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let text = newPostElement.current.value;
		props.updateNewPostText(text);
	};

	return (
		<div className={classes.postsBlock}>
			My posts
			<div>
				<div>
					<textarea ref={newPostElement} value={newPostText} onChange={onPostChange} />
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
