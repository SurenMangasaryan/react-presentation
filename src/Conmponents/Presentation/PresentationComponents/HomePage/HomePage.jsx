import React from 'react'
import Boxes from './Boxes/Boxes'
import AddPresentation from './HomePageComponents/AddPresentation'
import Modal from './HomePageComponents/Modal'

export default function HomePage() {
    return (
        <div className='home-page'>
            <AddPresentation />
            <Modal />
            <Boxes />
        </div>
    )
}
