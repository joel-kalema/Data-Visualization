import React from 'react';
import '../App.css';

const Login =() => {
    return (
        <div className="header">
            <form>
                <label for="username">Username:</label><br />
                <input type="text" id="username" name="username" /><br />
                <label for="pwd">Password:</label><br />
                <input type="password" id="pwd" name="pwd" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Login;