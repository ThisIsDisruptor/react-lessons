import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = props => {
	let profilePage = props.profilePage;
	return (
		<div>
			<ProfileInfo />
			<MyPosts
				posts={profilePage.posts}
				addPost={props.addPost}
				newPostText={profilePage.newPostText}
				newPostTextUpdate={props.newPostTextUpdate}
			/>
		</div>
	);
};

export default Profile;
