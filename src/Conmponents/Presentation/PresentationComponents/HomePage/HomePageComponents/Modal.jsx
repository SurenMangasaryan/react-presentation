import React, { useContext } from 'react'
import { ContextHome } from '../../../../../ContextHomePage'
import { Uploader } from './ModalElements/Uploader';
import FormModal from './ModalElements/FormModal';

export default function Modal() {

    const { setBool, modal, closeModal } = useContext(ContextHome);

    return (
        <div className='modal' ref={modal}>
            <p className='close-modal' onClick={() => {
                setBool(true);
                closeModal();
            }}>X</p>

            <FormModal />
            <Uploader />
        </div>
    )
}
