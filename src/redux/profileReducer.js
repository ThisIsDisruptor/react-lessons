const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT_UPDATE = 'NEW-POST-TEXT-UPDATE';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0,
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case NEW_POST_TEXT_UPDATE:
            state.newPostText = action.newPostText;;
            return state;

        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST,
    };
};

export const updateNewPostTextActionCreator = newPostText => {
    return {
        type: NEW_POST_TEXT_UPDATE,
        newPostText: newPostText,
    };
};


export default profileReducer;