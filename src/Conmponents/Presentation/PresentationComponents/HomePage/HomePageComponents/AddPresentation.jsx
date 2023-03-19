import React, { useContext } from 'react'
import { ContextHome } from '../../../../../ContextHomePage'

export default function AddPresentation() {

    const { bool, setBool, openModal } = useContext(ContextHome);

    return (
        <div>
            <button className='login-btn' onClick={() => {
                setBool(!bool);
                openModal();
            }}>Create Presentation</button>
        </div>
    )
}
