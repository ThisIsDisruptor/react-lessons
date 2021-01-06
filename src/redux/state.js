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
	},
	dialogsPage: {
		dialogs,
		messages,
	},
	sideBar: {
		friends,
	},
};

export let addPost = postText => {
	let newPost = {
		id: 5,
		message: postText,
		likesCount: 0,
	};
	state.profilePage.posts.push(newPost);
	rerenderEntireTree(state);
};
export default state;
