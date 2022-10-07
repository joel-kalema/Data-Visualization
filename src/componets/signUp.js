import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';


const SignUp =() => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''

    })
    const navigate = useNavigate();

    const [error, setError] = useState('')
    const handleSubmit = async(e) => {
        setError('')
        e.preventDefault();
        const data = state

        const url = 'http://localhost:3001/api/signup'
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
    const {name, email, password, password_confirmation} = state;
    return (
        <div className="sign_UP">
            <div>
                <div>
                    <h1>Sign Up</h1>
                </div>
                <div className='error'>
                    {error}
                </div>
                <form  onSubmit={handleSubmit}>
                    <label htmlFor="name">name:</label><br />
                    <input onChange={(e) => handelChange(e)} type="text" id="name" name="name" value={name}/><br />
                    <label htmlFor="email">Email:</label><br />
                    <input onChange={(e) => handelChange(e)} type="email" id="email" name="email" value={email} /><br />
                    <label htmlFor="password">Password:</label><br />
                    <input onChange={(e) => handelChange(e)} type="password" id="password" name="password" value={password}/><br />
                    <label htmlFor="password_confirmation">Confirm password:</label><br />
                    <input onChange={(e) => handelChange(e)} type="password" id="password_confirmation" name="password_confirmation" value={password_confirmation}/><br />
                    <input type="submit" value="Sign Up" className='button'/>
                </form>
            </div>
        </div>
    );
}

export default SignUp;