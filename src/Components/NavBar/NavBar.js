import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) =>{
    let nav = props.user?
    <div>
        <Link to='' onClick={props.handleLogout}>
            LOG OUT
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/'>
            Home
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/hikes'>
            All Hikes
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/createhike'>
            Create a Hike
        </Link>

        &nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span>WELCOME, {props.user.name}</span>
   </div>
    :
    <div>
        <Link to="/signup">
            Signup
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to="/login">
            Login
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <Link to='/'>
            About
        </Link>
    </div>;

    return (
    <div className='NavBar'>
        {nav}
    </div>
    );
}

export default NavBar;