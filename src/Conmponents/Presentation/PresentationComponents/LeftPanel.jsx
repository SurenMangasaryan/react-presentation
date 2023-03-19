import React, { useContext, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { ContextHome } from '../../../ContextHomePage'

export default function LeftPanel() {

    const { listHeight } = useContext(ContextHome);
    const navigate = useNavigate()

    return (
        <div className='left-panel'>
            <ul className='list' ref={listHeight}>
                <h1 className='menu' onClick={() => { navigate('/'); localStorage.removeItem("User") }}>Menu</h1>

                <li>
                    <NavLink to={""}>Home-Page</NavLink>
                </li>
                <li>
                    <NavLink to={"presentationslider"}>Presentation-Sliders</NavLink>
                </li>
            </ul>
        </div>
    )
}
