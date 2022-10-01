import React from 'react';
import './login.css';

const SignUp =() => {
    return (
        <div className="sign_UP">
            <div>
                <div>
                    <h1>Sign Up</h1>
                    <h2>Login</h2>
                </div>
                <form>
                    <label for="username">Username:</label><br />
                    <input type="text" id="username" name="username" /><br />
                    <label for="username">Mail:</label><br />
                    <input type="mail" id="mail" name="mail" /><br />
                    <label for="pwd">Password:</label><br />
                    <input type="password" id="pwd" name="pwd" /><br />
                    <label for="pwd">Confirm password:</label><br />
                    <input type="password" id="pwd" name="pwd" /><br />
                    <input type="submit" value="Submit" className='button'/>
                </form>
            </div>
        </div>
    );
}

export default SignUp;