import React, { useContext } from 'react'
import { ContextHome } from '../../../../../../ContextHomePage'

export default function ModalDescription() {

    const { description, setDescription } = useContext(ContextHome);

    return (
        <div className='username-box'>
            <label htmlFor="description" className='user-name-label'>Description</label>
            <input type="text" id='description' className='user-name-input inp' value={description} onChange={(evt) => { setDescription(evt.target.value) }} />
        </div>
    )
}
