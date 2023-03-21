import React, { useContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { ContextHome } from '../../../../../../ContextHomePage';

export default function BoxesImg({ images }) {

    const { onAdd } = useContext(ContextHome);

    return (
        <div>
            {images.map(image => {
                return (
                    <div className='img-btn-box' key={uuidv4()}>
                        <img src={`${image.data_url}`} alt="" width={"150px"} height={"80px"} />
                        <button className='upload-btn btn2' onClick={() => onAdd(image.data_url)}>Add to slider list</button>
                    </div>
                )
            })}
        </div>
    )
}
