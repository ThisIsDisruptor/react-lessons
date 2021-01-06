import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
	let posts = props.posts;
	return (
		<div>
			<ProfileInfo />
			<MyPosts posts={posts} addPost={props.addPost} />
		</div>
	);
};

export default Profile;
