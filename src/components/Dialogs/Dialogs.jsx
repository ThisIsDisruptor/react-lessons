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
    return(
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem id='1' name='Dimas' />
                <DialogItem id='2' name='Dryus' />
                <DialogItem id='3' name='Zaxar' />
                <DialogItem id='4' name='Pus' />
            </div>
            <div className={classes.messsages}>
                <Message message='Hello' />
                <Message message='How are you' />
                <Message message='Yo!' />
            </div>
        </div>
    )
}

export default Dialogs;