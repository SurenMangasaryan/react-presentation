import React, { useContext } from 'react'
import { ContextAuth } from '../../../../../ContextAutho'

export default function CheckBox() {

    const { checkBool, setCheckBool } = useContext(ContextAuth);

    return (
        <div className='check-box'>
            <input type="checkbox" id='check-me' className='costum-checkbox' checked={checkBool} onChange={(evt) => {
                setCheckBool(evt.target.checked)
            }} />
            <label htmlFor="check-me" className='checkbox-label'>Remeber me</label>
        </div>
    )
}
