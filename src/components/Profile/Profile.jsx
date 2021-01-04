import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import  classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                <img src='https://im0-tub-ru.yandex.net/i?id=9a27816f66e2db9285bc9c76fa3a8d86&n=13'></img>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts/>
        </div>

    )
}

export default Profile;
