import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={classes.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

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