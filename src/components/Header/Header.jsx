import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <div>
        <img src="https://wallsdesk.com/wp-content/uploads/2017/01/Arizona-Cardinals-Images.jpg"></img>
        Header
      </div>
      <div className={classes.loginBlock}>
        {props.data.isAuth ? (
          props.data.login
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
