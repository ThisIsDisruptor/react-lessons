import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { addMessage, addPost, newMessageTextUpdate, newPostTextUpdate } from './redux/state';

export let rerenderEntireTree = state => {
	ReactDOM.render(
		<React.StrictMode>
			<App
				state={state}
				addPost={addPost}
				newPostTextUpdate={newPostTextUpdate}
				addMessage={addMessage}
				newMessageTextUpdate={newMessageTextUpdate}
			/>{' '}
		</React.StrictMode>,
		document.getElementById('root'),
	);
};
