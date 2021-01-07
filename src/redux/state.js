const ADD_POST = 'ADD-POST';
const NEW_POST_TEXT_UPDATE = 'NEW-POST-TEXT-UPDATE';
const ADD_MESSAGE = 'ADD-MESSAGE';
const NEW_MESSAGE_TEXT_UPDATE = 'NEW-MESSAGE-TEXT-UPDATE';

let rerenderEntireTree = () => {};

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

	addPost() {
		let newPost = {
			id: 5,
			message: this._state.profilePage.newPostText,
			likesCount: 0,
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
	},

	newPostTextUpdate(newPostText) {
		this._state.profilePage.newPostText = newPostText;
		this._callSubscriber(this._state);
	},

	//Message
	addMessage() {
		let newMessage = {
			id: 5,
			message: this._state.dialogsPage.newMessageText,
		};
		this._state.dialogsPage.messages.push(newMessage);
		this._state.dialogsPage.newMessageText = '';
		this._callSubscriber(this._state);
	},

	newMessageTextUpdate(newMessageText) {
		this._state.dialogsPage.newMessageText = newMessageText;
		this._callSubscriber(this._state);
	},

	dispatch(action) {
		if (action.type === 'ADD-POST') {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0,
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = '';
			this._callSubscriber(this._state);
		} else if (action.type === 'NEW-POST-TEXT-UPDATE') {
			this._state.profilePage.newPostText = action.newPostText;
			this._callSubscriber(this._state);
		} else if (action.type === 'ADD-MESSAGE') {
			let newMessage = {
				id: 5,
				message: this._state.dialogsPage.newMessageText,
			};
			this._state.dialogsPage.messages.push(newMessage);
			this._state.dialogsPage.newMessageText = '';
			this._callSubscriber(this._state);
		} else if (action.type === 'NEW-MESSAGE-TEXT-UPDATE') {
			this._state.dialogsPage.newMessageText = action.newMessageText;
			this._callSubscriber(this._state);
		}
	},
};

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

export const addMessageActionCreator = () => {
	return {
		type: ADD_MESSAGE,
	};
};

export const updateNewMessageTextActionCreator = newMessageText => {
	return {
		type: NEW_MESSAGE_TEXT_UPDATE,
		newMessageText: newMessageText,
	};
};

export default store;
