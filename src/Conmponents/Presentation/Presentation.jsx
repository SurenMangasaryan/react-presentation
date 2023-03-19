import React from 'react'
import { Outlet } from 'react-router'
import LeftPanel from './PresentationComponents/LeftPanel'
import '../Presentation/Presentation.css'

export default function Presentation() {
    return (
        <>
            <LeftPanel />
            <Outlet />
        </>
    )
}
