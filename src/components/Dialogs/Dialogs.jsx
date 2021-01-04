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

    let dialogsData = [
        { id: 1, name: 'Dimas' },
        { id: 2, name: 'Dryus' },
        { id: 3, name: 'Zaxar' },
        { id: 4, name: 'Pus' }
    ];

    let messagesData = [
        { id: 1, message: 'hello' },
        { id: 2, message: 'How are you' },
        { id: 3, message: 'Yo!' }
    ];

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem id={dialogsData[0].id} name={dialogsData[0].name} />
                <DialogItem id='2' name='Dryus' />
                <DialogItem id='3' name='Zaxar' />
                <DialogItem id='4' name='Pus' />
            </div>
            <div className={classes.messsages}>
                <Message message={messagesData[0].message} />
                <Message message='How are you' />
                <Message message='Yo!' />
            </div>
        </div>
    )
}

export default Dialogs;