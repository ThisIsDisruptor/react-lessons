import React from 'react';
import classes from './Post.module.css';

const Post = () => {
    return (
        <div className={classes.item}>
            <img src='https://i.pinimg.com/236x/b7/49/48/b749481dbd97281c159bd9a8b055c432.jpg'></img>
            Post1
            <div>
                <span>like</span>
            </div>

        </div>

    )
}

export default Post;
