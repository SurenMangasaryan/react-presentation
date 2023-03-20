import React, { createContext, useRef, useState } from 'react'

export const ContextHome = createContext();

export default function ContextHomePage({ children }) {
    const [images, setImages] = useState([]);
    const [imgArr, setImgArr] = useState([]);
    const [allImages, setAllImages] = useState([]);
    const [bool, setBool] = useState(true);
    const modal = useRef("");
    const listHeight = useRef("");
    const refTit = useRef("");
    const refDesc = useRef("");


    const openModal = () => {
        if (bool) {
            modal.current.style.display = "block"
        }
    }

    const closeModal = () => {
        if (!bool) {
            modal.current.style.display = "none"
        }
    }
    

    const addToForm = (evt) => {
        evt.preventDefault();
        if (refTit.current.value !== "" && refDesc.current.value !== "") {
            closeModal();
            setBool(!bool);
            setImgArr([
                ...imgArr,
                {
                    title: refTit.current.value,
                    description: refDesc.current.value,
                    data: `${new Date()}`,
                    img: [
                        ...images
                    ]
                }
            ])
        }
        refTit.current.value = "";
        refDesc.current.value = "";
    }

    const values = {
        bool, setBool,
        modal, closeModal, openModal,
        images, setImages,
        addToForm,
        imgArr,
        listHeight,
        refDesc, refTit,
        allImages, setAllImages
    };

    return (
        <ContextHome.Provider value={values}>
            {children}
        </ContextHome.Provider>
    )
}
