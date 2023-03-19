import React, { useContext } from 'react'
import { ContextHome } from '../../../../../../ContextHomePage'
import ModalDescription from './ModalDescription'
import ModalTitle from './ModalTitle'

export default function FormModal() {

    const { addToForm, closeModal } = useContext(ContextHome);

    return (
        <form className='modal-form' onSubmit={(evt) => { addToForm(evt); closeModal() }}>
            <ModalTitle />
            <ModalDescription />
            <button className='login-btn second'>Add to presentations list</button>
        </form>
    )
}
