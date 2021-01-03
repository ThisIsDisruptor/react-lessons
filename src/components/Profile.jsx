import React from 'react';
import  classes from './Profile.module.css';

const Profile = () => {
    return (
        <div className={classes.content}>
            <div>
                <img src='https://im0-tub-ru.yandex.net/i?id=9a27816f66e2db9285bc9c76fa3a8d86&n=13'></img>
            </div>
            <div>
                Ava + description
            </div>
            <div>
                My posts
                    <div>
                    New post
                    </div>
                <div className={classes.posts}>
                    <div className={classes.item}>
                        Post1
                    </div>
                    <div>
                        Post2
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile;
