import React, { useEffect } from 'react'
import { Route, Routes, useNavigate } from 'react-router'
import Layout from '../Layout/Layout'
import Login from '../Login/Login'
import Presentation from '../Presentation/Presentation';
import HomePage from '../Presentation/PresentationComponents/HomePage/HomePage';
import PresentationSlider from '../Presentation/PresentationComponents/PresentationSlider';

export default function Container() {

    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("User")) {
            navigate('/presentation', { replace: true });
        } else {
            navigate('/', { replace: true });
        }
    }, [])

    return (
        <div className='container'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route path='' element={<Login />} />
                    <Route path='presentation/*' element={<div className='presentation-div'><Presentation />
                        <div className='presentation-divs'>
                            <Routes>
                                <Route path='' element={<HomePage />} />
                                <Route path='presentationslider' element={<PresentationSlider />} />
                            </Routes>
                        </div>
                    </div>} />
                    <Route path='*' element={<></>} />
                </Route>
            </Routes>
        </div>
    )
}
