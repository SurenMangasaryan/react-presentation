import React, { useContext, useEffect } from 'react'
import { ContextHome } from '../../../../../ContextHomePage'
import { v4 as uuidv4 } from 'uuid';
import BoxesImg from './BoxesComponents/BoxesImg';

export default function Boxes() {

    const { imgArr, listHeight } = useContext(ContextHome);

    useEffect(() => {
        if (imgArr.length >= 5 && imgArr.length <= 8) {
            listHeight.current.style.height = "200vh"
        } else if (imgArr.length >= 8 && imgArr.length <= 15) {
            listHeight.current.style.height = "300vh"
        }
    }, [imgArr.length, listHeight])

    return (
        <div className='special-box'>
            {imgArr !== undefined ?
                <div className='in-special'>
                    {imgArr.map(item => {
                        return (
                            <div className='one-box' key={uuidv4()}>
                                <p className='p'>Title: {item.title.length > 10 ? item.title.substring(0, 6) + "..." : item.title}</p>
                                <p className='p'>Description:{item.description.length > 10 ? item.description.substring(0, 6) + "..." : item.description}</p>
                                <BoxesImg images={item.img} />
                            </div>
                        )
                    })}
                </div>
                : null}
        </div>
    )
}