import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to='/dialogs/1'>Dimas</NavLink> 
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/2'>Dryus</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/3'>Zaxar</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to='/dialogs/4'>Pus</NavLink>
                </div>

            </div>
            <div className={classes.messsages}>
                <div className={classes.message}>Hello</div>
                <div className={classes.message}>How are you</div>
                <div className={classes.message}>Yo! </div>

            </div>
        </div>
    )
}

export default Dialogs;