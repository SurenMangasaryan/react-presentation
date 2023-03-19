import React from 'react'
import '../Login/Login.css'
import Form from './LoginComponents/LoginForm/Form';
import LoginTitle from './LoginComponents/LoginTitle';

export default function Login() {
    return (
        <div className='login'>
            <div className='login-box'>
                <LoginTitle />
                <Form />
            </div>
        </div>
    )
}
