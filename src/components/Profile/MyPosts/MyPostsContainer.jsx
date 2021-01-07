import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';

const MyPostsContainer = props => {
	let state = props.store.getState();

	let addPost = () => {
		let action = addPostActionCreator();
		props.store.dispatch(action);
	};

	let updateNewPostText = text => {
		let action = updateNewPostTextActionCreator(text);
		props.store.dispatch(action);
	};
	return <MyPosts profilePage={state.profilePage} updateNewPostText={updateNewPostText} addPost={addPost} />;
};

export default MyPostsContainer;
