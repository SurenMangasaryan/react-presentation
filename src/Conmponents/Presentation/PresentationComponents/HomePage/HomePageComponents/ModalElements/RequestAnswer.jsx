import React, { useContext } from 'react'
import { ContextHome } from '../../../../../../ContextHomePage'

export default function RequestAnswer() {

    const { refTit, refDesc } = useContext(ContextHome);

    return (
        <div className='title-description'>
            <p className='p'>Title: {refTit === null ? refTit.current.value : null}</p>
            <p className='p'>Description: {refDesc === null ? refDesc.current.value : null}</p>
        </div>
    )
}