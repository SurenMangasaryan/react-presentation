import React, { useContext } from 'react'
import { ContextHome } from '../../../../../../ContextHomePage'

export default function RequestAnswer() {

    const { title, description } = useContext(ContextHome);

    return (
        <div className='title-description'>
            <p className='p'>Title: {title}</p>
            <p className='p'>Description: {description}</p>
        </div>
    )
}
