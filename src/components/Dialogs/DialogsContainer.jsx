import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = props => {
	let state = props.store.getState();

	let addMessage = () => {
		let action = addMessageActionCreator();
		props.store.dispatch(action);
	};

	let updateNewMessageText = text => {
		let action = updateNewMessageTextActionCreator(text);
		props.store.dispatch(action);
	};

	return (
		<Dialogs dialogsPage={state.dialogsPage} addMessage={addMessage} updateNewMessageText={updateNewMessageText} />
	);
};

export default DialogsContainer;
