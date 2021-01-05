import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import  classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';




const Profile = () => {
    
    let posts = [
        {id: 1, message: 'hello!', likesCount: 10},
        {id: 2, message: 'It\'s my first post!', likesCount: 15}
    ];

    return (
        <div>
            <ProfileInfo />
            <MyPosts posts={posts}/>
        </div>
    )
}

export default Profile;
