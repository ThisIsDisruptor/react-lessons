import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import classes from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = () => {

    let dialogs = [
        { id: 1, name: 'Dimas' },
        { id: 2, name: 'Dryus' },
        { id: 3, name: 'Zaxar' },
        { id: 4, name: 'Pus' }
    ];

    let messages = [
        { id: 1, message: 'hello' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Yo!' }
    ];

    let dialogsElements = dialogs.map( dialog => <DialogItem id={dialog.id} name={dialog.name}  />);
    
    let messagesElements = messages.map( message => <Message message={message.message} />);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messsages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;