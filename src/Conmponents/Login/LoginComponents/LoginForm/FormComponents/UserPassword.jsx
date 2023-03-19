import React, { useContext, useState } from 'react'
import { ContextAuth } from '../../../../../ContextAutho'
import { FaEye } from 'react-icons/fa'

export default function UserPassword() {

    const [bool, setBool] = useState(false);
    const { password, setPassword, validationPassword } = useContext(ContextAuth);

    return (
        <div className='password-box'>
            <label htmlFor="password" className='password-label'>Password</label>
            <input type={bool ? "text" : "password"} id='password' className='password-input inp' value={password} onChange={(evt) => { validationPassword(evt, setPassword) }} />
            <FaEye className='eye' onClick={() => setBool(!bool)} />
        </div>
    )
}
