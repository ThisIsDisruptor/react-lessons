import { rerenderEntireTree } from '../render';

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

//Post
export let addPost = () => {
	let newPost = {
		id: 5,
		message: state.profilePage.newPostText,
		likesCount: 0,
	};
	state.profilePage.posts.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree(state);
};

export let newPostTextUpdate = newPostText => {
	state.profilePage.newPostText = newPostText;
	rerenderEntireTree(state);
};

//Message
export let addMessage = () => {
	let newMessage = {
		id: 5,
		message: state.dialogsPage.newMessageText,
	};
	state.dialogsPage.messages.push(newMessage);
	state.dialogsPage.newMessageText = '';
	rerenderEntireTree(state);
};

export let newMessageTextUpdate = newMessageText => {
	state.dialogsPage.newMessageText = newMessageText;
	rerenderEntireTree(state);
};

export default state;
