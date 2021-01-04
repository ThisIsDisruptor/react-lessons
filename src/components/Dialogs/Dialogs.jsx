import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Dimas
                </div>
                <div className={classes.dialog}>
                    Dryus
                </div>
                <div className={classes.dialog}>
                    Zaxar
                </div>
                <div className={classes.dialog}>
                    Pus
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