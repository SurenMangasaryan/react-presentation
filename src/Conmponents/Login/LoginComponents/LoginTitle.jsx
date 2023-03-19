import React, { useContext } from 'react'
import { ContextAuth } from '../../../ContextAutho'

export default function LoginTitle() {

    const { error } = useContext(ContextAuth);

    return (
        <>
            <h1 className='title-login'>Log-in!</h1>
            <h3 className='error'>{error}</h3>
        </>
    )
}
