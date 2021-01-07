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

	subscribe(observer) {
		this._callSubscriber = observer;
	},
};

export default store;
