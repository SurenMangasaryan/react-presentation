import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function BoxesImg({ images }) {
    return (
        <div>
            {images.map(image => {
                return (
                    <img key={uuidv4()} src={`${image.data_url}`} alt="" width={"100px"} />
                )
            })}
        </div>
    )
}
