import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

const Login =() => {
    const [state, setState] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        setError('')
        e.preventDefault();
        const data = state

        const url = 'http://localhost:3001/api/login'
        const res = await axios({ method: 'post', url, data});
        if (res.status === 200 && res.data.token !== undefined) {
            localStorage.setItem('appToken', res.data.token)
            navigate('/')
            console.log(res.data.token);            
        }
        else {
             setError(res.data)
        }
        
    }
    const handelChange = (e) => {
        const stateMock = state;

        const input = e.currentTarget.name
        stateMock[input] = e.currentTarget.value
        setState({...stateMock})
    }
    const {email, password} = state;
    return (
       <div className="login">
            <div>
                 <div>
                    <h1>Connect your Industry</h1>
                </div>
                <div className='error'>
                    {error}
                </div>
                <form  onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label><br />
                    <input onChange={(e) => handelChange(e)} type="email" id="email" name="email" value={email} /><br />
                    <label htmlFor="password">Password:</label><br />
                    <input onChange={(e) => handelChange(e)} type="password" id="password" name="password" value={password}/><br />
                    <input type="submit" value="Submit" className='button'/>
                </form>
                <Link to='/signUp' >sign up</Link>
            </div>
        </div>
    );
}

export default Login;