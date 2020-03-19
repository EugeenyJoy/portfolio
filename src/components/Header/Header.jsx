import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return( 
        <header className={s.header}>
        <img src="https://lh3.googleusercontent.com/IgVS93GpbOPEbRQTdM-GvHSNM8kwpwUyJQVG0rPp5Y9aas7N96XeQWHFyVOwXBIl4w=w300" />

        <div className={s.loginBlock}>
            {props.isAuth ? props.login
            : <NavLink to="/login">Login</NavLink>}
        </div>

        </header>
    );
}

export default Header;