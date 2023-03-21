import React, { useContext, useEffect } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import { ContextHome } from '../../../ContextHomePage';


export default function PresentationSlider() {

  const { allImages, listHeight } = useContext(ContextHome);

  useEffect(() => {
    listHeight.current.style.height = "100vh";
  },
    [listHeight])

  return (
    <div className='slide-box'>
      {allImages.length > 0 ? <SimpleImageSlider
        width={896}
        height={504}
        images={allImages}
        showBullets={true}
        showNavs={true}
      /> : ""}

    </div>
  )
}
