import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'hello!', likesCount: 10},
        {id: 2, message: 'It\'s my first post!', likesCount: 15}
    ];

    return (
        <div className={classes.postsBlock}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message="It's my first post!" likesCount="15" />
            </div>
        </div>

    )
}

export default MyPosts;
