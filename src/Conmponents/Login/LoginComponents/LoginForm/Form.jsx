import React, { useContext } from 'react'
import { ContextAuth } from '../../../../ContextAutho'
import ButtonSubmit from './FormComponents/ButtonSubmit'
import CheckBox from './FormComponents/CheckBox'
import UserLogin from './FormComponents/UserLogin'
import UserPassword from './FormComponents/UserPassword'

export default function Form() {

    const { checkLocalStorage } = useContext(ContextAuth);

    return (
        <form className='input-box' onSubmit={(evt) => checkLocalStorage(evt)}>
            <div>
                <UserLogin />
                <UserPassword />
                <ButtonSubmit />
            </div>
            <CheckBox />
        </form>
    )
}
