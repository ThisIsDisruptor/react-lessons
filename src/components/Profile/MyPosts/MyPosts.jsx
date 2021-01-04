import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'hello!', likesCount: 10},
        {id: 2, message: 'It\'s my first post!', likesCount: 15}
    ];

    let postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount} />)

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
                {postsElements}
            </div>
        </div>

    )
}

export default MyPosts;
