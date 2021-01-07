const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT_UPDATE = 'NEW-POST-TEXT-UPDATE';

let posts = [
    { id: 1, message: 'hello!', likesCount: 10 },
    { id: 2, message: "It's my first post!", likesCount: 15 },
];

let initialState = {
    posts,
    newPostText: 'ITsamurai',
};

const profileReducer = (state = initialState, action) => {
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