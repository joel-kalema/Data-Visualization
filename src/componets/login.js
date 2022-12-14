import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login =() => {
    return (
        <div className="login">
            <div>
                <div>
                    <h1>Connect your Industry</h1>
                </div>
                <form>
                    <h2>Login</h2>
                    <label for="username">Username:</label><br />
                    <input type="text" id="username" name="username" /><br />
                    <label for="pwd">Password:</label><br />
                    <input type="password" id="pwd" name="pwd" /><br />
                    <input type="submit" value="Submit" className='button'/>
                </form>
                <Link to='/signUp' >sign up</Link>
            </div>
        </div>
    );
}

export default Login;