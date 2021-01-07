import React from 'react';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/state';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = props => {
	let { dialogs, messages, newMessageText } = props.dialogsPage;

	let dialogsElements = dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name} />);

	let messagesElements = messages.map(message => <Message message={message.message} />);

	let newMessageElement = React.createRef();
	let onAddMessage = () => {
		let action = addMessageActionCreator();
		props.dispatch(action);
	};

	let onMessageChange = () => {
		let action = updateNewMessageTextActionCreator(newMessageElement.current.value);
		props.dispatch(action);
	};

	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>{dialogsElements}</div>
			<div className={classes.messsages}>
				{messagesElements}
				<div>
					<textarea ref={newMessageElement} value={newMessageText} onChange={onMessageChange} />
				</div>
				<div>
					<button onClick={onAddMessage}>Send message</button>
				</div>
			</div>
		</div>
	);
};

export default Dialogs;
