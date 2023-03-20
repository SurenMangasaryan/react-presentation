import React, { memo, useContext } from 'react'
import { ContextHome } from '../../../../../../ContextHomePage'
import ModalDescription from './ModalDescription'
import ModalTitle from './ModalTitle'

export default memo(function FormModal() {

    const { addToForm } = useContext(ContextHome);

    return (
        <form className='modal-form' onSubmit={(evt) => { addToForm(evt) }}>
            <ModalTitle />
            <ModalDescription />
            <button className='login-btn second'>Add to presentations list</button>
        </form>
    )
})
