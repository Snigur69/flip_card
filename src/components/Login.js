import React from 'react';
import { NavLink } from 'react-router-dom';

const Login = (props) => {
    return(<div>
        <h1>Enter Your Name</h1>
        <input value={props.login} onChange={props.loginChange} placeholder="Name" />
        <br />
        <NavLink onClick={props.loginSubmit} to="/start"><a>Start Game</a></NavLink>
    </div>)
}

export default Login;