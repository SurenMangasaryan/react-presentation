import React, { useContext } from 'react'
import { ContextHome } from '../../../../../../ContextHomePage'

export default function ModalTitle() {

    const { refTit } = useContext(ContextHome);

    return (
        <div className='username-box'>
            <label htmlFor="title" className='user-name-label'>Title</label>
            <input type="text" id='title' className='user-name-input inp' ref={refTit} />
        </div>
    )
}
