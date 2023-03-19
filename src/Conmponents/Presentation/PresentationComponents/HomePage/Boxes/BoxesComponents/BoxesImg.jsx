import React from 'react'

export default function BoxesImg({ images }) {
    return (
        <div>
            {images.map(image => {
                <img src={`${image.data_url}`} />
            })}
        </div>
    )
}
