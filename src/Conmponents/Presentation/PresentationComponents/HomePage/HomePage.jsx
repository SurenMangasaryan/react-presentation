import React, { memo } from 'react'
import Boxes from './Boxes/Boxes'
import AddPresentation from './HomePageComponents/AddPresentation'
import Modal from './HomePageComponents/Modal'

export default memo(function HomePage() {
    return (
        <div className='home-page'>
            <AddPresentation />
            <Modal />
            <Boxes />
        </div>
    )
})
