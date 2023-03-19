import React, { useContext } from 'react'
import { ContextAuth } from '../../../../../ContextAutho'

export default function UserLogin() {

  const { login, setLogin, validationUserName } = useContext(ContextAuth);

  return (
    <div className='username-box'>
      <label htmlFor="username" className='user-name-label'>User-name</label>
      <input type="text" id='username' className='user-name-input inp' value={login} onChange={(evt) => validationUserName(evt, setLogin)} />
    </div>
  )
}
