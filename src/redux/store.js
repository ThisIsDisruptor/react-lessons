import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sideBarReducer from './sideBarReducer';

let posts = [
    { id: 1, message: 'hello!', likesCount: 10 },
    { id: 2, message: "It's my first post!", likesCount: 15 },
];

let dialogs = [
    { id: 1, name: 'Dimas' },
    { id: 2, name: 'Dryus' },
    { id: 3, name: 'Zaxar' },
    { id: 4, name: 'Pus' },

];

let messages = [
    { id: 1, message: 'hello' },
    { id: 2, message: 'How are you' },
    { id: 3, message: 'Yo!' },
];

let friends = [
    { id: 1, name: 'Dimas' },
    { id: 2, name: 'Dryus' },
    { id: 4, name: 'Zaxar' },
];

let state = {
    profilePage: {
        posts,
        newPostText: 'ITsamurai',
    },
    dialogsPage: {
        dialogs,
        messages,
        newMessageText: 'hello!',
    },
    sideBar: {
        friends,
    },
};

//Store
let store = {
    _state: state,

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    },
};

export default store;